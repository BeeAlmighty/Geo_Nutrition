export const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '+2347079797963'
export const WHATSAPP_MESSAGE = 'Hi! I\'m interested in ordering from Geo Nutrition. Can you help me?'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/#products' },
  { label: 'Bundles', href: '/#bundles' },
  { label: 'About', href: '/#about' },
  { label: 'Coaching', href: '/coaching' },
]

export const SOCIAL_LINKS = {
  whatsapp: WHATSAPP_URL,
  instagram: 'https://instagram.com/geo_nutrition_',
  facebook: 'https://facebook.com/geonutrition',
}