/**
 * Organization Schema for brand identity
 * 
 * IMPACT:
 * - Tells Google who you are
 * - Improves branded search visibility
 * - Builds trust signals
 */

import { Schema, OrganizationSchemaProps } from './types'

export function generateOrganizationSchema({
  baseUrl,
  email = 'support@geonutrition.com',
  phone = '+2347079797963',
}: OrganizationSchemaProps): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    
    // ✅ Basic Info
    name: 'Geo Nutrition',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Premium nutritional supplements for optimal health',
    
    // ✅ Company Info
    foundingDate: '2023',
    
    // ✅ Address (Update with real data)
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Nigeria',
    },
    
    // ✅ Contact Info
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: email,
      telephone: phone,
    },
    
    // ✅ Social Media
    sameAs: [
      'https://www.instagram.com/geo_nutrition_',
      'https://www.facebook.com/geonutrition',
      'https://www.whatsapp.com/contact/geonutrition',
    ],
  }
}