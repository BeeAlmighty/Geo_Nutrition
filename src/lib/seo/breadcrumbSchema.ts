/**
 * Breadcrumb Schema for navigation in search results
 * 
 * IMPACT:
 * - Shows navigation path in SERPs
 * - Improves CTR for category pages
 * - Better mobile search experience
 */

import { Schema, BreadcrumbSchemaProps } from './types'
import { capitalizeCategory } from './helpers'

interface BreadcrumbItem {
  '@type': 'ListItem'
  position: number
  name: string
  item: string
}

export function generateBreadcrumbSchema({
  product,
  baseUrl,
}: BreadcrumbSchemaProps): Schema {
  const items: BreadcrumbItem[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Products',
      item: `${baseUrl}/#products`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: capitalizeCategory(product.category),
      item: `${baseUrl}/#products?category=${product.category}`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: product.name,
      item: `${baseUrl}/supplements/${product.slug}`,
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}