import { Product } from '@/types'

// ============================================
// ✅ BASE SCHEMA TYPES
// ============================================

/**
 * Base schema structure following schema.org standards
 */

export interface SchemaContext {
  '@context': 'https://schema.org'
  '@type': string
}

export interface Schema extends SchemaContext {
  [key: string]: string | number | boolean | object | undefined
}

// ============================================
// ✅ PRICE/OFFER TYPES
// ============================================

export interface PriceSpecification {
  '@type': 'PriceSpecification' | 'Offer'
  priceCurrency: 'NGN'
  price: string | number
  priceValidUntil?: string
}

export interface Offer extends PriceSpecification {
  '@type': 'Offer'
  url: string
  itemCondition: string
  availability: string
  seller: Organization
}

// ============================================
// ✅ ORGANIZATION TYPES
// ============================================

export interface PostalAddress {
  '@type': 'PostalAddress'
  addressCountry: string
  addressLocality?: string
  addressRegion?: string
  streetAddress?: string
  postalCode?: string
}

export interface ContactPoint {
  '@type': 'ContactPoint'
  contactType: string
  email?: string
  telephone?: string
  url?: string
}

export interface Organization {
  '@type': 'Organization'
  name: string
  url?: string
  logo?: string
  description?: string
  address?: PostalAddress
  contactPoint?: ContactPoint
  sameAs?: string[]
  foundingDate?: string
}

export interface Brand {
  '@type': 'Brand'
  name: string
  logo?: string
  url?: string
}

// ============================================
// ✅ RATING TYPES
// ============================================

export interface AggregateRating {
  '@type': 'AggregateRating'
  ratingValue: string | number
  reviewCount: string | number
  bestRating?: string | number
  worstRating?: string | number
}

export interface Rating {
  '@type': 'Rating'
  ratingValue: string | number
  author?: Organization
}

// ============================================
// ✅ BREADCRUMB TYPES
// ============================================

export interface BreadcrumbItem {
  '@type': 'ListItem'
  position: number
  name: string
  item: string
}

export interface BreadcrumbList {
  '@type': 'BreadcrumbList'
  itemListElement: BreadcrumbItem[]
}

// ============================================
// ✅ PRODUCT TYPES
// ============================================

export interface ProductSchema extends SchemaContext {
  '@type': 'Product'
  '@id': string
  name: string
  description: string
  image: string | string[]
  sku: string
  brand: Brand
  manufacturer: Organization
  offers: Offer | Offer[]
  aggregateRating?: AggregateRating
  category?: string
  activeIngredient?: string
  dosageUnit?: string
}

// ============================================
// ✅ WEBSITE TYPES
// ============================================

export interface SearchAction {
  '@type': 'SearchAction'
  target: {
    '@type': 'EntryPoint'
    urlTemplate: string
  }
  'query-input': string
}

export interface WebsiteSchema extends SchemaContext {
  '@type': 'WebSite'
  url: string
  name: string
  description?: string
  potentialAction?: SearchAction
  sameAs?: string[]
}

// ============================================
// ✅ FUNCTION PARAMETER TYPES (Props)
// ============================================

/**
 * Props for schema generation functions
 * Uses Product type from @/types instead of 'any'
 */

export interface ProductSchemaProps {
  product: Product
  baseUrl: string
}

export interface BreadcrumbSchemaProps {
  product: Product
  baseUrl: string
}

export interface OrganizationSchemaProps {
  baseUrl: string
  email?: string
  phone?: string
  organizationName?: string
  description?: string
}

export interface WebsiteSchemaProps {
  baseUrl: string
  siteName?: string
  description?: string
}

// ============================================
// ✅ HELPER FUNCTION RETURN TYPES
// ============================================

/**
 * Return types for utility functions
 */

export interface ImageArray extends Array<string> {
  length: 3
}

// ============================================
// ✅ VALIDATION TYPES (Optional)
// ============================================

/**
 * Types for schema validation
 */

export interface SchemaValidationResult {
  valid: boolean
  errors: SchemaValidationError[]
  warnings: SchemaValidationWarning[]
}

export interface SchemaValidationError {
  field: string
  message: string
  severity: 'error'
}

export interface SchemaValidationWarning {
  field: string
  message: string
  severity: 'warning'
}
