/**
 * Website Schema for site search integration
 * 
 * IMPACT:
 * - Enables site search in Google results
 * - Improves voice search optimization
 * - Better knowledge panel generation
 */

import { Schema, WebsiteSchemaProps } from './types'

export function generateWebsiteSchema({ baseUrl }: WebsiteSchemaProps): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    
    // ✅ Basic Info
    url: baseUrl,
    name: 'Geo Nutrition',
    description: 'Premium nutritional supplements for optimal health',
    
    // ✅ Site Search Action (for Google)
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}