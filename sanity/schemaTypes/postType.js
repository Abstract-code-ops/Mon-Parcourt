import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import { localeString, localeBlockContent } from '../lib/languages'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField(localeString({
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    })),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title.en',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'string',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https'],
        allowRelative: true,
      }),
    }),
    defineField({
      name: 'type',
      type: 'string',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      validation: (rule) => rule.required(),
    }),
    defineField({
          name: 'sheetID',
          title: 'Google Sheet ID',
          type: 'string',
          description: 'The ID of the Google Sheet to store form submissions for this event',
          validation: rule => rule.custom(async (value, context) => {
            
            // Get the actual category documents to check their titles
            const {getClient} = context;
            const client = getClient({apiVersion: '2023-01-01'});
            
            // Fetch all the referenced categories
            const categoryIds = context.document.categories.map(cat => cat._ref).filter(Boolean);
            if (!categoryIds.length) return true;
            
            const categories = await client.fetch(
              `*[_type == "category" && _id in $ids]{title}`,
              {ids: categoryIds}
            );
            
            // Check if any category has "event" in its title (case-insensitive)
            const hasEventCategory = categories.some(cat => 
              cat.title && cat.title.toLowerCase().includes('event')
            );
            
            // If event category is selected but no sheetID, show validation error
            if (hasEventCategory && !value) {
              return 'Sheet ID is required for events';
            }
            
            return true;
          }),
        }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField(localeBlockContent({
      name: 'body',
      title: 'Body',
      // validation: (rule) => rule.required(),
    })),
  ],
  preview: {
    select: {
      title: 'title.en',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
