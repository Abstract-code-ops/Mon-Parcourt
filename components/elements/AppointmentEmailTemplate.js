// import * as React from 'react';

export default function AppointmentEmailTemplate({ firstName, lastName, phoneNumber, email, appointmentDate, appointmentTime, message }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'var(--main-color)' }}>Appointment from client: {firstName} {lastName}!</h1>
      <ul>
        <li>Phone Number: {phoneNumber}</li>
        <li>Email: {email}</li>
        <li>Appontment Date: {appointmentDate}</li>
        <li>Appontment Time: {appointmentTime}</li>
        <li>Message: {message}</li>
      </ul>
    </div>
  );
}
