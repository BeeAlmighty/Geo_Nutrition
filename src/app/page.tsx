// 'use client'

// import { useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Header from '@/components/Header'
// import Hero from '@/components/Hero'
// import ProductGrid from '@/components/ProductGrid'
// // import BundleSection from '@/components/BundleSection'
// import Testimonials from '@/components/Testimonials'
// import FAQ from '@/components/FAQ'
// import Footer from '@/components/Footer'
// import WhatsAppCTA from '@/components/WhatsAppCTA'
// import { event } from '@/lib/gtag'
// import BundleSection from '@/components/BundleSection'

// export default function Home() {
//   const searchParams = useSearchParams()

//   useEffect(() => {
//     // Log UTM parameters to GA4
//     const utm_source = searchParams.get('utm_source')
//     const utm_campaign = searchParams.get('utm_campaign')
//     const utm_medium = searchParams.get('utm_medium')

//     if (utm_source || utm_campaign || utm_medium) {
//       event('utm_capture', 'marketing', `${utm_source}-${utm_campaign}`, 1)

//       // Call API to log UTM data
//       fetch('/api/utm', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           utm_source,
//           utm_campaign,
//           utm_medium,
//           timestamp: new Date().toISOString(),
//         }),
//       })
//     }
//   }, [searchParams])

//   return (
//     <>
//       <Header />
//       <Hero />
//       <ProductGrid />
//       <BundleSection />
//       <Testimonials />
//       <FAQ />
//       <Footer />
//       <WhatsAppCTA />
//     </>
//   )
// }
'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import BundleSection from '@/components/BundleSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import { event } from '@/lib/gtag'

// Wrap the part using useSearchParams in a small client component
function UTMCapture() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const utm_source = searchParams.get('utm_source')
    const utm_campaign = searchParams.get('utm_campaign')
    const utm_medium = searchParams.get('utm_medium')

    if (utm_source || utm_campaign || utm_medium) {
      event('utm_capture', 'marketing', `${utm_source}-${utm_campaign}`, 1)

      fetch('/api/utm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          utm_source,
          utm_campaign,
          utm_medium,
          timestamp: new Date().toISOString(),
        }),
      })
    }
  }, [searchParams])

  return null
}

export default function Home() {
  return (
    <>
      {/* Wrap UTMCapture in Suspense */}
      <Suspense fallback={null}>
        <UTMCapture />
      </Suspense>

      <Header />
      <Hero />
      <ProductGrid />
      <BundleSection />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppCTA />
    </>
  )
}
