'use client'

import React, { Suspense, lazy } from 'react'
import SuspensePreloader from '@/components/elements/SuspensePreloader'

export default function ClientLazy({ loader, ...props }) {
  const Component = lazy(loader)
  return (
    <Suspense fallback={<SuspensePreloader />}>
      <Component {...props} />
    </Suspense>
  )
}
