import React from 'react'
import FullScreenLayout from './FullScreenLayout'

export default function PostDocumentView(props) {
  const { children, document } = props
  
  // Get the title for display
  const title = document?.title?.en || document?.title || 'Edit Post'
  
  return (
    <FullScreenLayout title={title}>
      {children}
    </FullScreenLayout>
  )
}
