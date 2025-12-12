'use client'

import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'

interface RelatedProductsProps {
  products: Product[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="py-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        You Might Also Like
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}