import { defineField, defineType } from 'sanity';
import { supportedLanguages } from '../lib/languages';

// Define the localeString type
export const localeStringType = defineType({
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => 
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? null : 'translations'
    })
  )
});

// Define the localeBlockContent type
export const localeBlockContentType = defineType({
  title: 'Localized Block Content',
  name: 'localeBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => 
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'blockContent',
      fieldset: lang.isDefault ? null : 'translations'
    })
  )
});
