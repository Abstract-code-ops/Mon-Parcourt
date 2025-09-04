// Import the languageFilter from Sanity
import { supportedLanguages, defaultLanguage } from './lib/languages';

// Create a simple plugin that can be used directly in sanity.config.js
export const languageFilterConfig = {
  supportedLanguages: supportedLanguages,
  defaultLanguages: [defaultLanguage.id],
  documentTypes: ['post'],
  filterField: (enclosingType, field, selectedLanguageIds) => {
    // Only filter fields inside our localized types
    if (enclosingType.name === 'localeString' || enclosingType.name === 'localeBlockContent') {
      // Show the field if it's selected or default language
      return selectedLanguageIds.includes(field.name) || field.name === defaultLanguage.id;
    }
    return true;
  }
};
