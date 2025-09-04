// Supported languages for your multilingual content
export const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'fr', title: 'French' },
];

// Default language
export const defaultLanguage = supportedLanguages.find(l => l.isDefault);

// Helper function to build localized fields
export const localeString = (base = {}) => {
  return {
    name: base.name,
    title: base.title,
    type: 'localeString',
    // Pass validation to the root object if needed
    validation: base.validation
  };
};

// Helper function for localizing block content
export const localeBlockContent = (base = {}) => {
  return {
    name: base.name,
    title: base.title,
    type: 'localeBlockContent',
    // Pass validation to the root object if needed
    validation: base.validation
  };
};
