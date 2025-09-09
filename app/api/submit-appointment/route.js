import { NextResponse } from 'next/server';
import { rateLimiter } from '../middleware/rateLimit';
import AppointmentEmailTemplate from '@/components/elements/AppointmentEmailTemplate';
import { Resend } from 'resend';

// Appointment validator function
function validateAppointmentData(data) {
  const errors = [];
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  
  if (!data.firstName || data.firstName.length < 2) {
    errors.push('First name is required (min 2 characters)');
  }
  
  if (!data.lastName || data.lastName.length < 2) {
    errors.push('Last name is required (min 2 characters)');
  }
  
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Valid email address is required');
  }
  
  // if (!data.phoneNumber || !phoneRegex.test(data.phoneNumber)) {
  //   errors.push('Valid phone number is required');
  // }
  
  // Appointment date is optional, but if provided, it must be valid
  if (data.appointmentDate) {
    const appointmentDate = new Date(data.appointmentDate);
    const today = new Date();
    
    // Check if appointment date is valid and in the future
    if (isNaN(appointmentDate.getTime()) || appointmentDate < today) {
      errors.push('If provided, appointment date must be valid and in the future');
    }
  }
  
  // Appointment time is now optional
  
  // Sanitize message field to prevent script injection
  if (data.message) {
    data.message = data.message
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .trim();
  }
  
  return errors.length ? { errors } : { data };
}

export async function POST(request) {
    // Apply rate limiter - limit to 3 appointment requests per 5 minutes per IP
    const limiterResult = await rateLimiter({ limit: 3, windowMs: 5 * 60 * 1000 })(request);
    if (limiterResult) return limiterResult; // Return 429 if rate limited
    
    try {
        const body = await request.json();
        
        // Enhanced validation
        const validation = validateAppointmentData(body);
        if (validation.errors) {
          return NextResponse.json({ 
            message: 'Validation failed', 
            errors: validation.errors 
          }, { status: 400 });
        }
        const resend = new Resend(process.env.KFFP_RESEND_API_KEY);
        const {
            firstName,
            lastName,
            phoneNumber,
            email,
            appointmentDate,
            appointmentTime,
            message
        } = body;

        // --- 4. Send confirmation email via EmailJS ---
        // IMPORTANT: Create a new template in EmailJS for appointments
        // and add its ID to your .env.local file as EMAILJS_APPOINTMENT_TEMPLATE_ID
        const sendEmailPromise = resend.emails.send({
          from: 'contact.kffp@monparcourt.com',
          to: "monparcourt.1er@gmail.com",
          subject: 'Client Appointment Request Received',
          react: AppointmentEmailTemplate({ firstName, lastName, phoneNumber, email, appointmentDate, appointmentTime, message  }),
        });

        // --- 5. Execute both promises concurrently ---
        await Promise.all([sendEmailPromise]);

        return NextResponse.json({ message: 'Appointment request submitted successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Error in submit-appointment API:', error);
        return NextResponse.json({ message: 'An error occurred while processing your request.', error: error.message }, { status: 500 });
    }
}