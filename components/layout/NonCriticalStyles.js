"use client"

import { useEffect, useState } from 'react'

// Loads large, non-critical CSS after first render to reduce render-blocking
export default function NonCriticalStyles() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (loaded) return

    const links = [
      // Defer icon fonts CSS
      'assets/css/font-awesome-all.css',
    ]

    links.forEach((href) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.media = 'print'
      link.onload = () => { link.media = 'all' }
      document.head.appendChild(link)
    })

    setLoaded(true)
  }, [loaded])

  return null
}
