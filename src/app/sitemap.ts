import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { seoConfig } from '@/lib/seo.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.baseUrl

  const productPages = products.map((product) => ({
    url: `${baseUrl}/supplements/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...productPages,
  ]
}