import React, { useState } from 'react'
import { Card, Text, Box, Flex, Stack, TextArea, Button } from '@sanity/ui'

export default function ImageWithAlignment(props) {
  const { value, renderDefault } = props
  const [demoText, setDemoText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum."
  )
  
  if (!value) {
    return renderDefault(props)
  }

  const { size = 'medium', caption } = value

  // Size mappings
  const sizeMap = {
    small: '25%',
    medium: '50%',
    large: '75%',
    full: '100%',
  }

  // Container style for the whole editor preview
  const editorPreviewStyle = {
    position: 'relative',
    padding: '20px',
    border: '1px dashed #ccc',
    borderRadius: '4px',
    margin: '20px 0',
    backgroundColor: '#f9f9f9',
    maxWidth: '100%'
  }

  // Image container styles (no floats — avoid text wrapping)
  const getImageContainerStyle = () => {
    const baseStyle = {
      width: sizeMap[size],
      maxWidth: sizeMap[size],
      border: '1px solid #eee',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'block',
    }

    // Always center horizontally; alignment removed
    return {
      ...baseStyle,
      margin: '0 auto 20px auto',
    }
  }

  // Title style
  const previewTitleStyle = {
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '15px',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#555',
  }

  // Clear float after the preview (not strictly needed since we don't float anymore)
  const clearStyle = { height: '1px' }

  return (
    <>
      {/* Image component itself */}
      <Card 
        padding={2} 
        radius={2} 
        shadow={1}
        style={{ marginBottom: '15px' }}
      >
        <div style={{ width: '100%' }}>
          {renderDefault(props)}
        </div>
        
        {caption && (
          <Box paddingTop={2}>
            <Text size={1} style={{ fontStyle: 'italic', textAlign: 'center' }}>
              {caption}
            </Text>
          </Box>
        )}
        
        <Box paddingTop={1}>
          <Text size={0} muted style={{ textAlign: 'center' }}>
            {size} size (height)
          </Text>
        </Box>
      </Card>
      
      {/* Live Preview Section for text wrapping */}
      <div style={editorPreviewStyle}>
        <div style={previewTitleStyle}>Preview</div>
        
        <div>
              {/* Image preview */}
          <div style={getImageContainerStyle()}>
            <img 
              src={value?.asset?._ref ? `https://cdn.sanity.io/images/2gj6gi86/production/${value.asset._ref.replace('image-', '').replace('-png', '.png').replace('-jpg', '.jpg').replace('-jpeg', '.jpeg').replace('-webp', '.webp')}?h=300` : ''}
              alt={value?.alt || ''}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {caption && (
              <div style={{ textAlign: 'center', padding: '8px', fontSize: '0.8em', fontStyle: 'italic' }}>
                {caption}
              </div>
            )}
          </div>

          {/* Demo text below the image rather than wrapping */}
          <div style={{ color: '#333', lineHeight: '1.6', fontSize: '0.9em' }}>
            {demoText.split('\n').map((paragraph, i) => (
              <p key={i} style={{ marginBottom: '10px' }}>{paragraph}</p>
            ))}
          </div>

          {/* Spacer */}
          <div style={clearStyle}></div>
        </div>
        
        {/* Text input for customizing the demo text */}
        <Stack space={3} marginTop={4}>
          <Text weight="semibold">Demo Text:</Text>
          <TextArea
            rows={4}
            value={demoText}
            onChange={event => setDemoText(event.currentTarget.value)}
            style={{ width: '100%' }}
          />
        </Stack>
      </div>
    </>
  )
}
