import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug } from '@/lib/products'
import { seoConfig } from '@/lib/seo.config'
import {
  generateProductSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo'
import ProductDetailsClient from '@/components/product/ProductDetailsClient'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.longDescription,
      images: [product.image],
      type: 'website',
    },
    keywords: [product.name, product.category, ...product.benefits],
  }
}

// ✅ CLEAN & MODULAR
export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // ✅ Generate schemas using modular functions
  const productSchema = generateProductSchema({
    product,
    baseUrl: seoConfig.baseUrl,
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    product,
    baseUrl: seoConfig.baseUrl,
  })

  return (
    <>
      {/* ✅ Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
        suppressHydrationWarning
      />

      {/* ✅ Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        suppressHydrationWarning
      />

      <ProductDetailsClient product={product} />
    </>
  )
}