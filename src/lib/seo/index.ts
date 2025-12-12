export {
  generateProductSchema,
} from './productSchema'

export {
  generateBreadcrumbSchema,
} from './breadcrumbSchema'

export {
  generateOrganizationSchema,
} from './organizationSchema'

export {
  generateWebsiteSchema,
} from './websiteSchema'

export {
  getDateOneYearFromNow,
  capitalizeWords,
  capitalizeCategory,
  formatPrice,
  buildImageArray,
} from './helpers'

// ============================================
// ✅ EXPORT ALL TYPES
// ============================================

export type {
  // Base types
  Schema,
  SchemaContext,
} from './types'

export type {
  // Price/Offer types
  PriceSpecification,
  Offer,
} from './types'

export type {
  // Organization types
  PostalAddress,
  ContactPoint,
  Organization,
  Brand,
} from './types'

export type {
  // Rating types
  AggregateRating,
  Rating,
} from './types'

export type {
  // Breadcrumb types
  BreadcrumbList,
  BreadcrumbItem,
} from './types'

export type {
  // Product types
  ProductSchema,
} from './types'

export type {
  // Website types
  WebsiteSchema,
  SearchAction,
} from './types'

// ============================================
// ✅ EXPORT PROPS TYPES (THIS WAS MISSING!)
// ============================================

export type {
  ProductSchemaProps,
  BreadcrumbSchemaProps,
  OrganizationSchemaProps,
  WebsiteSchemaProps,
} from './types'

export type {
  // Validation types
  SchemaValidationResult,
  SchemaValidationError,
  SchemaValidationWarning,
} from './types'

export type {
  // Helper types
  ImageArray,
} from './types'