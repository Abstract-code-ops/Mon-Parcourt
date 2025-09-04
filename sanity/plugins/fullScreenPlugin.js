import { definePlugin } from 'sanity'
import { ExpandIcon, CollapseIcon } from '@sanity/icons'

// Custom action for full-screen editing
const fullScreenAction = (props) => {
  const { type } = props

  // Only show for post documents
  if (type !== 'post') {
    return null
  }

  const isFullScreen = document.body.classList.contains('sanity-fullscreen-post')

  return {
    label: isFullScreen ? 'Exit Full Screen' : 'Full Screen',
    icon: isFullScreen ? CollapseIcon : ExpandIcon,
    onHandle: () => {
      const isCurrentlyFullScreen = document.body.classList.contains('sanity-fullscreen-post')
      
      if (isCurrentlyFullScreen) {
        // Exit full screen
        document.body.classList.remove('sanity-fullscreen-post')
        
        // Restore hidden elements
        const hiddenElements = document.querySelectorAll('.sanity-hidden-for-fullscreen')
        hiddenElements.forEach(el => {
          el.classList.remove('sanity-hidden-for-fullscreen')
          el.style.display = el.dataset.originalDisplay || ''
        })
        
        // Remove ESC listener
        document.removeEventListener('keydown', handleEscape)
      } else {
        // Enter full screen
        document.body.classList.add('sanity-fullscreen-post')
        
        // Find and hide sidebar elements more aggressively
        const elementsToHide = [
          // Try multiple selectors for the sidebar
          '[data-ui="PaneLayout"] > div:first-child',
          '[data-ui="PaneLayout"] > div:nth-child(1)',
          '[data-ui="PaneLayout"] > div:nth-child(2)',
          // Alternative selectors
          '[data-testid="pane-layout"] > div:first-child',
          '[data-testid="pane-layout"] > div:nth-child(1)',
          // Find elements with specific widths that might be sidebars
          '[data-ui="PaneLayout"] > div[style*="width"]',
          // Find any navigation or structure elements
          '[data-ui="StructureToolPane"]',
          '[data-ui="DocumentListPane"]',
          // Find flex/grid containers that might be sidebars
          '[data-ui="PaneLayout"] > div:not(:last-child)',
        ]
        
        elementsToHide.forEach(selector => {
          const elements = document.querySelectorAll(selector)
          elements.forEach(el => {
            // Skip if it's the main editor pane (usually the last one or has specific indicators)
            if (el.querySelector('[data-ui="DocumentForm"]') || 
                el.querySelector('form') || 
                el === el.parentElement?.lastElementChild) {
              return
            }
            
            el.dataset.originalDisplay = el.style.display || getComputedStyle(el).display
            el.style.display = 'none'
            el.classList.add('sanity-hidden-for-fullscreen')
          })
        })
        
        // Add comprehensive styles
        addFullScreenStyles()
        
        // Add ESC key listener
        document.addEventListener('keydown', handleEscape)
      }
    }
  }
}

const handleEscape = (e) => {
  if (e.key === 'Escape') {
    // Trigger the same logic as clicking the button
    const action = fullScreenAction({ type: 'post' })
    action.onHandle()
  }
}

const addFullScreenStyles = () => {
  if (!document.getElementById('fullscreen-styles')) {
    const style = document.createElement('style')
    style.id = 'fullscreen-styles'
    style.textContent = `
      /* Hide navigation */
      .sanity-fullscreen-post [data-ui="Navbar"],
      .sanity-fullscreen-post [data-ui="NavbarWrapper"],
      .sanity-fullscreen-post nav {
        display: none !important;
      }
      
      /* Force the main layout to be single column */
      .sanity-fullscreen-post [data-ui="PaneLayout"] {
        display: flex !important;
        grid-template-columns: none !important;
        grid-template-areas: none !important;
      }
      
      /* Make the remaining pane take full width */
      .sanity-fullscreen-post [data-ui="PaneLayout"] > div:not(.sanity-hidden-for-fullscreen) {
        flex: 1 !important;
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
      }
      
      /* Ensure root takes full height */
      .sanity-fullscreen-post [data-ui="RootLayout"] {
        height: 100vh !important;
      }
      
      /* Hide any breadcrumbs or extra navigation */
      .sanity-fullscreen-post [data-ui="Breadcrumbs"] {
        display: none !important;
      }
      
      /* Prevent scrolling on body */
      .sanity-fullscreen-post {
        overflow: hidden !important;
      }
      
      /* Hide any resize handles */
      .sanity-fullscreen-post .resize-handle,
      .sanity-fullscreen-post [data-ui="SplitPaneWrapper"] .resize-handle {
        display: none !important;
      }
      
      /* Expand the document form and editor width */
      .sanity-fullscreen-post [data-ui="DocumentForm"],
      .sanity-fullscreen-post [data-ui="DocumentFormWrapper"] {
        max-width: none !important;
        width: 100% !important;
      }
      
      /* Expand the text editor specifically */
      .sanity-fullscreen-post .pt-editor,
      .sanity-fullscreen-post [data-testid="pt-editor"],
      .sanity-fullscreen-post [data-ui="PortableTextEditor"],
      .sanity-fullscreen-post .portable-text-editor {
        max-width: 90% !important;
        width: 90% !important;
        margin: 0 auto !important;
      }
      
      /* Override the specific pt-block max-width limitation */
      .sanity-fullscreen-post .pt-editable > .pt-block {
        max-width: none !important;
        width: 100% !important;
        margin: 0 !important;
      }
      
      /* Target the exact textbox container */
      .sanity-fullscreen-post .pt-editable {
        max-width: 90% !important;
        width: 90% !important;
        margin: 0 auto !important;
      }
      
      /* Override any parent container width limitations */
      .sanity-fullscreen-post [data-slate-editor="true"] {
        max-width: none !important;
        width: 100% !important;
      }
      
      /* Expand block content editor */
      .sanity-fullscreen-post [data-ui="BlockContent"],
      .sanity-fullscreen-post [data-testid="block-content"] {
        max-width: 90% !important;
        width: 90% !important;
      }
      
      /* Expand any input containers */
      .sanity-fullscreen-post [data-ui="FormField"] > div,
      .sanity-fullscreen-post [data-ui="FormFieldSet"] > div {
        max-width: none !important;
      }
      
      /* Make images in editor resizable */
      .sanity-fullscreen-post .portable-text-editor img,
      .sanity-fullscreen-post [data-ui="PortableTextEditor"] img {
        resize: both !important;
        overflow: auto !important;
        max-width: 100% !important;
        height: auto !important;
        cursor: nw-resize !important;
      }
      
  /* The fullscreen plugin intentionally avoids forcing text wrapping or floats
     for images. Images should be aligned with margins and sized by height in the
     editor; width is left to the editor's normal layout rules. */
    `
    document.head.appendChild(style)
  }
}

// Plugin that adds full-screen editing for posts
export const fullScreenPlugin = definePlugin({
  name: 'full-screen-editor',
  document: {
    actions: (prev, context) => {
      return [...prev, fullScreenAction]
    }
  }
})
