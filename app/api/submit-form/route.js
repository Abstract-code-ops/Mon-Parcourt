import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import * as emailjs from '@emailjs/nodejs';
import { rateLimiter } from '../middleware/rateLimit';

// Form validator function
function validateFormData(data) {
  const errors = [];
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Invalid email address');
  }
  
  if (!data.firstName || data.firstName.length < 2) {
    errors.push('First name is required (min 2 characters)');
  }
  
  if (!data.surname || data.surname.length < 2) {
    errors.push('Surname is required (min 2 characters)');
  }
  
  if (!data.residence) {
    errors.push('Residence is required');
  }
  
  if (!data.dob) {
    errors.push('Date of birth is required');
  }

  if (!data.hasPassport) {
    errors.push('Passport information is required');
  } else if (data.hasPassport === 'yes') {
    if (!data.passportIssuanceDate) {
      errors.push('Passport issuance date is required');
    }
    if (!data.passportExpiryDate) {
      errors.push('Passport expiry date is required');
    }
    
    // Check if expiry date is in the future
    if (data.passportExpiryDate && new Date(data.passportExpiryDate) <= new Date()) {
      errors.push('Passport expiry date must be in the future');
    }
  }
  
  return errors.length ? { errors } : { data };
}

export async function POST(request) {
    // Apply rate limiter - limit to 5 requests per minute per IP
    const limiterResult = await rateLimiter({ limit: 5, windowMs: 60 * 1000 })(request);
    if (limiterResult) return limiterResult; // Return 429 if rate limited
    
    try {
      // In the App Router, we get the JSON body by awaiting request.json()
      const body = await request.json();
      
      // Enhanced validation
      const validation = validateFormData(body);
      if (validation.errors) {
        return NextResponse.json({ 
          message: 'Validation failed', 
          errors: validation.errors 
        }, { status: 400 });
      }
      
      const { email, firstName, surname, residence, dob, hasPassport, passportIssuanceDate, passportExpiryDate, eventSheetID } = body;

      // --- Google Sheets set up ---
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });
      
      
      // Validate that we have a spreadsheet ID from somewhere
      if (!eventSheetID) {
        console.error('Missing spreadsheetId: No event sheet ID or default sheet ID provided');
        return NextResponse.json({ 
          message: 'Configuration error: No spreadsheet ID available' 
        }, { status: 500 });
      }
      
      // Use the event-specific sheetID if provided, otherwise fall back to the default
      const spreadsheetId = eventSheetID;
      
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!B:G', // Fetches columns B through G
      });

      const rows = getRows.data.values || [];
      const existingEmails = new Set(rows.map(row => row[0])); // Column B is the first column in our range
      const existingNumbers = new Set(rows.map(row => row[5])); // Column G is the 6th column (index 5)

      if (existingEmails.has(email)) {
        // Return a 409 Conflict error if the email is already registered.
        // The frontend will display this message to the user.
        return NextResponse.json(
          { message: 'This email has already been registered.' },
          { status: 409 }
        );
      }

      // --- 2. Generate a unique number ---
      let number;
      do {
        number = Math.floor(Math.random() * 1000000);
      } while (existingNumbers.has(number.toString()));


      // 1. Google Sheets Append Operation
      const appendToSheetPromise = sheets.spreadsheets.values.append({
        spreadsheetId, // Use the validated spreadsheetId variable
        range: 'Sheet1!A:I',
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[new Date().toISOString(), email, firstName, surname, residence, hasPassport, number, passportIssuanceDate, passportExpiryDate]],
        },
      });

      // --- Send confirmation email ---
      const sendEmailPromise = emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        email: email,
        // FIX: Correctly concatenate first and last name using a template literal
        name: `${firstName} ${surname}`,
        number: number,
      },
      {
        // For the server-side SDK, you must provide public and private keys
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY, // This is your EmailJS "API Key"
      }
    );

    await Promise.all([appendToSheetPromise, sendEmailPromise]);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
    console.error('Error in submit-form API:', error);

    // Provide more specific error feedback
    let errorMessage = 'An error occurred while processing your request.';
    if (error.response?.data?.error) {
      // Google API error
      errorMessage = 'Failed to save data to the spreadsheet.';
    } else if (error.status) {
      // EmailJS error
      errorMessage = 'Failed to send the confirmation email.';
    }
    return NextResponse.json({ message: errorMessage, error: error.message }, { status: 500 });
  }
}