import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import * as emailjs from '@emailjs/nodejs';
import { rateLimiter } from '../middleware/rateLimit';

// Form validator function
function validateFormData(data) {
  const errors = [];
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const countryCodeRegex = /^\+\d{1,3}-[\d\s]+$/; // Simple regex for country code like +1-, +44-, etc.

  // Basic validations
  
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Invalid email address/ Adresse e-mail invalide');
  }

  // if (!data.phoneNumber || !countryCodeRegex.test(data.phoneNumber)) {
  //   errors.push('Invalid please add phone number, include country code with dash (e.g. +44-)/ Numéro de téléphone invalide, incluez le code du pays avec un tiret (ex. +44-)');
  // }
  
  if (!data.firstName || data.firstName.length < 2) {
    errors.push('First name is required (min 2 characters)/ Le prénom est requis (min 2 caractères)');
  }
  
  if (!data.surname || data.surname.length < 2) {
    errors.push('Surname is required (min 2 characters)/ Le nom est requis (min 2 caractères)');
  }
  
  if (!data.residence) {
    errors.push('Residence is required/ La résidence est requise');
  }
  
  if (!data.dob) {
    errors.push('Date of birth is required/ La date de naissance est requise');
  } else {
    // basic validity check for date string
    const dobDate = new Date(data.dob);
    if (isNaN(dobDate.getTime())) {
      errors.push('Date of birth is invalid/ La date de naissance est invalide');
    }
  }

  if (!data.occupationType) {
    errors.push('Occupation is required/ Le type d\'occupation est requis');
  }

  // Education status validation
  const allowedEducation = ['primary', 'secondary', 'high_school', 'undergraduate', 'graduate', 'other'];
  if (!data.educationStatus || !allowedEducation.includes(data.educationStatus)) {
    errors.push('Education status is required/ Le niveau d\'éducation est requis');
  }

  if (!data.hasPassport) {
    errors.push('Passport information is required/ Les informations sur le passeport sont requises');
  } else if (data.hasPassport === 'yes') {
    if (!data.passportIssuanceDate) {
      errors.push('Passport issuance date is required/ La date de délivrance du passeport est requise');
    }
    if (!data.passportExpiryDate) {
      errors.push('Passport expiry date is required/ La date d\'expiration du passeport est requise');
    }
    
    // Check if expiry date is in the future
    if (data.passportExpiryDate && new Date(data.passportExpiryDate) <= new Date()) {
      errors.push('Passport expiry date must be in the future/ La date d\'expiration du passeport doit être dans le futur');
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
      
      const { email, phoneNumber, firstName, surname, residence, dob, hasPassport, passportIssuanceDate, passportExpiryDate, eventSheetID, occupationType, educationStatus, languageExam, examGrade } = body;

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
      

      console.log('Using spreadsheetId:', spreadsheetId, "to get existing rows");
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!B:G', // Fetches columns B through G
      });

      console.log('Existing rows fetched:', getRows.data.values ? getRows.data.values.length : 0);

      const rows = getRows.data.values || [];
      const existingEmails = new Set(rows.map(row => row[0])); // Column B is the first column in our range
      const existingPhones = new Set(rows.map(row => row[1])); // Column C is the 6th column (index 5)
      const existingNumbers = new Set(rows.map(row => row[5])); // Column G is the 6th column (index 5)

      if (existingEmails.has(email)) {
        // Return a 409 Conflict error if the email is already registered.
        // The frontend will display this message to the user.
        return NextResponse.json(
          { message: 'This email has already been registered./Cet email a déjà été enregistré.' },
          { status: 409 }
        );
      }
      if (existingPhones.has(phoneNumber)) {
        // Return a 409 Conflict error if the phone number is already registered.
        // The frontend will display this message to the user.
        return NextResponse.json(
          { message: 'This phone number has already been registered./Ce numéro de téléphone a déjà été enregistré.' },
          { status: 409 }
        );
      }

      // --- 2. Generate a unique number ---
      let number;
      do {
        number = Math.floor(Math.random() * 1000000);
      } while (existingNumbers.has(number.toString()));


      // 1. Google Sheets Append Operation
      console.log('Using spreadsheetId:', spreadsheetId, "to append new row");
      const appendToSheetPromise = sheets.spreadsheets.values.append({
        spreadsheetId, // Use the validated spreadsheetId variable
        range: 'Sheet1!A:M', // Adjust range to include all columns A to N
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [[new Date().toISOString(), email, phoneNumber, firstName, surname, residence, hasPassport, number, passportIssuanceDate, passportExpiryDate, dob, occupationType, educationStatus, languageExam, examGrade]],
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