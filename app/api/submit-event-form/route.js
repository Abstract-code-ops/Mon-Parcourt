import { NextResponse } from 'next/server';
import { rateLimiter } from '../middleware/rateLimit';
import { Resend } from 'resend';
import EventEmailTemplate from '@/components/elements/EventEmailTemplate';
import { client } from '@/sanity/lib/client';

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
      const resend = new Resend(process.env.KFFP_RESEND_API_KEY);
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

      // --- Sanity check for existing user ---
      const existingUser = await client.fetch(
        `*[_type == "eventRegistration" && (email == $email || phoneNumber == $phoneNumber)]`,
        { email, phoneNumber }
      );

      if (existingUser && existingUser.length > 0) {
        const userExistsByEmail = existingUser.some(user => user.email === email);
        if (userExistsByEmail) {
          return NextResponse.json(
            { message: 'This email has already been registered./Cet email a déjà été enregistré.' },
            { status: 409 }
          );
        }
        const userExistsByPhone = existingUser.some(user => user.phoneNumber === phoneNumber);
        if (userExistsByPhone) {
          return NextResponse.json(
            { message: 'This phone number has already been registered./Ce numéro de téléphone a déjà été enregistré.' },
            { status: 409 }
          );
        }
      }
      
      // --- Generate a unique number ---
      let number;
      let existingNumbers;
      do {
        number = Math.floor(Math.random() * 1000000);
        existingNumbers = await client.fetch(`*[_type == "eventRegistration" && registrationNumber == $number]`, { number });
      } while (existingNumbers && existingNumbers.length > 0);


      // 1. Sanity Create Operation
      const doc = {
        _type: 'eventRegistration',
        email,
        phoneNumber,
        firstName,
        surname,
        residence,
        dob,
        hasPassport,
        registrationNumber: number,
        passportIssuanceDate,
        passportExpiryDate,
        occupationType,
        educationStatus,
        languageExam,
        examGrade,
        // Add a reference to the event if you have event documents
        // event: {
        //   _type: 'reference',
        //   _ref: eventSheetID, // Assuming eventSheetID is the Sanity document ID for the event
        // },
      };

      const createDocumentPromise = client.create(doc);

      // --- Send confirmation email ---
      const sendEmailPromise = resend.emails.send({
        from: 'contact.kffp@monparcourt.com',
        to: [email.toString()],
        subject: 'Event Registration Confirmation',
        react: EventEmailTemplate({ firstName, lastName: surname, eventName: 'the event', number }),
      });

      // Run both operations in parallel and wait for results
      await Promise.all([createDocumentPromise, sendEmailPromise]);

      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
    console.error('Error in submit-form API:', error);

    // Provide more specific error feedback
    let errorMessage = 'An error occurred while processing your request.';
    if (error.response?.data?.error) {
      // Sanity API error
      errorMessage = 'Failed to save data.';
    } else if (error.status) {
      // Resend error
      errorMessage = 'Failed to send the confirmation email.';
    }
    return NextResponse.json({ message: errorMessage, error: error.message }, { status: 500 });
  }
}