'use client'

import { Bundle } from '@/types'
import { formatPrice } from '@/lib/utils'
import { event } from '@/lib/gtag'
import { Gift } from 'lucide-react'

interface BundleCardProps {
  bundle: Bundle
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const handleBundleClick = () => {
    event('bundle_click', 'ecommerce', bundle.name, bundle.discountPrice || bundle.price)
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="relative h-64 bg-gradient-to-br from-emerald-50 to-teal-50 overflow-hidden">
          <img
            src={bundle.image}
            alt={bundle.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-[#FFCF40] text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
            <Gift className="w-4 h-4" />
            Bundle Deal
          </div>
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Save {formatPrice(bundle.savings)}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{bundle.description}</p>

          <div className="mb-4">
            <p className="text-xs text-gray-500 font-semibold mb-2">INCLUDES:</p>
            <ul className="space-y-1">
              {bundle.products && bundle.products.length > 0 ? (
                bundle.products.map((product, index) => (
                  <li key={product?.id || index} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {product?.name || 'Product'}
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-500 italic">No products in this bundle</li>
              )}
            </ul>
          </div>

          <div className="mb-6 pt-4 border-t border-gray-200">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(bundle.discountPrice || bundle.price)}
              </span>
              {bundle.discountPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(bundle.price)}
                </span>
              )}
            </div>
            <p className="text-xs text-emerald-600 font-semibold">Value: {formatPrice(bundle.price)}</p>
          </div>

          <button
            onClick={handleBundleClick}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Bundle Now
          </button>
        </div>
      </div>
    </div>
  )
}