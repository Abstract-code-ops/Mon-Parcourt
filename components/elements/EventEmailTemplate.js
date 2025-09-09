// import * as React from 'react';

export default function EmailTemplate({ firstName, lastName, eventName, number }) {
  return (
    <div>
      
      <h1 style={{ textAlign: 'center', color: 'var(--main-color)' }}>Welcome, {firstName} {lastName}!</h1>
      <p style={{ textAlign: 'center' }}>You are invited to {eventName}.</p>
      <p style={{ textAlign: 'center' }}>Your confirmation number is {number}.</p>
    </div>
  );
}