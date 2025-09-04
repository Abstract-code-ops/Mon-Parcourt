import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Flex, Box } from '@sanity/ui'
import { ExpandIcon, CollapseIcon } from '@sanity/icons'

export default function FullScreenLayout({ children, title }) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  // Handle ESC key to exit full-screen mode
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFullScreen])

  // Toggle full-screen class on body
  useEffect(() => {
    if (isFullScreen) {
      document.body.classList.add('sanity-fullscreen-mode')
    } else {
      document.body.classList.remove('sanity-fullscreen-mode')
    }

    return () => {
      document.body.classList.remove('sanity-fullscreen-mode')
    }
  }, [isFullScreen])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  if (isFullScreen) {
    return (
      <div className="sanity-fullscreen-container">
        <style jsx global>{`
          .sanity-fullscreen-mode {
            overflow: hidden;
          }
          
          .sanity-fullscreen-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            background: white;
            display: flex;
            flex-direction: column;
          }
          
          .sanity-fullscreen-header {
            padding: 12px 16px;
            border-bottom: 1px solid #e1e3e6;
            background: white;
            z-index: 10000;
            flex-shrink: 0;
          }
          
          .sanity-fullscreen-content {
            flex: 1;
            overflow: auto;
            padding: 0;
          }
        `}</style>
        
        <div className="sanity-fullscreen-header">
          <Flex justify="space-between" align="center">
            <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
              {title || 'Edit Post'} (Full Screen - Press ESC to exit)
            </h2>
            <Button
              icon={CollapseIcon}
              mode="ghost"
              tone="default"
              onClick={toggleFullScreen}
              title="Exit full screen (ESC)"
            />
          </Flex>
        </div>
        
        <div className="sanity-fullscreen-content">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Floating Full Screen Button */}
      <Box
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 1000,
        }}
      >
        <Button
          icon={ExpandIcon}
          mode="ghost"
          tone="primary"
          onClick={toggleFullScreen}
          title="Enter full screen mode"
          text="Full Screen"
          style={{
            backgroundColor: 'white',
            border: '1px solid #e1e3e6',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      </Box>
      
      {children}
    </div>
  )
}
