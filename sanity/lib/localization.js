// Helper function to get the appropriate localized field based on language
export const getLocalizedField = (field, language) => {
  if (!field) return '';
  
  // If the field is a localized object (has 'en', 'fr' properties)
  if (typeof field === 'object' && !Array.isArray(field) && (field.en || field.fr)) {
    // Return the requested language or fall back to English
    return field[language] || field.en || '';
  }
  
  // If it's already a simple value, return it directly
  return field;
};
