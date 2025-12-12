// * This is a CLIENT COMPONENT that wraps children
//  * - Has 'use client' directive ✅
//  * - Contains useEffect hooks ✅
//  * - Handles page tracking ✅
//  * - Captures UTM params ✅
//  */
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview, captureUTM } from '@/lib/gtag'

interface RootLayoutClientProps {
  children: React.ReactNode
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  const pathname = usePathname()

  // ✅ TRACK PAGE VIEWS ON ROUTE CHANGE
  useEffect(() => {
    pageview(pathname)
  }, [pathname])

  // ✅ CAPTURE UTM PARAMETERS ON INITIAL LOAD
  useEffect(() => {
    const utm = captureUTM()

    // ✅ SEND UTM DATA TO API FOR LOGGING
    if (utm.source || utm.campaign) {
      fetch('/api/utm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          utm_source: utm.source,
          utm_campaign: utm.campaign,
          utm_medium: utm.medium,
          utm_content: utm.content,
          utm_term: utm.term,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          pageUrl: window.location.href,
        }),
      }).catch((err) => console.error('UTM capture error:', err))
    }
  }, [])

  return <>{children}</>
}
