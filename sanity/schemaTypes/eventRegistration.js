export default {
  name: 'eventRegistration',
  title: 'Event Registrations',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'surname',
      title: 'Surname',
      type: 'string',
    },
    {
      name: 'residence',
      title: 'Residence',
      type: 'string',
    },
    {
      name: 'dob',
      title: 'Date of Birth',
      type: 'date',
    },
    {
      name: 'hasPassport',
      title: 'Has Passport',
      type: 'string',
    },
    {
      name: 'passportIssuanceDate',
      title: 'Passport Issuance Date',
      type: 'date',
    },
    {
      name: 'passportExpiryDate',
      title: 'Passport Expiry Date',
      type: 'date',
    },
    {
      name: 'occupationType',
      title: 'Occupation Type',
      type: 'string',
    },
    {
      name: 'educationStatus',
      title: 'Education Status',
      type: 'string',
    },
    {
      name: 'languageExam',
      title: 'Language Exam',
      type: 'string',
    },
    {
      name: 'examGrade',
      title: 'Exam Grade',
      type: 'string',
    },
    {
      name: 'registrationNumber',
      title: 'Registration Number',
      type: 'number',
    },
    {
      name: 'event',
      title: 'Event',
      type: 'reference',
      to: [{ type: 'event' }], // Assuming you have an 'event' schema
    },
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'firstName',
    },
  },
}
