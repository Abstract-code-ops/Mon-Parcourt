'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\app\studio\[[...tool]]\page.jsx` route
 */

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {languageFilter} from '@sanity/language-filter'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {languageFilterConfig} from './sanity/languageFilterPlugin'
import {fullScreenPlugin} from './sanity/plugins/fullScreenPlugin'

// Import custom image component for the Studio
import SanityImageComponent from './sanity/components/SanityImageComponent'
import ImageWithAlignment from './sanity/components/ImageWithAlignment'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Language filter for multilingual content
    languageFilter(languageFilterConfig),
    // Full-screen editing plugin for posts
  fullScreenPlugin(),
  ],
  studio: {
    components: {
      // Override how images are displayed in the Studio
      image: ImageWithAlignment,
      renderBlockImage: SanityImageComponent
    }
  }
})
