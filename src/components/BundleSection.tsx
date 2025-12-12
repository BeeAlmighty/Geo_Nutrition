import { bundles } from '@/lib/bundles'
import BundleCard from './BundleCard'

export default function BundleSection() {
  return (
    <section id="bundles" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart <span className="text-emerald-600">Bundle Packs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save more with our expertly curated supplement bundles designed for specific health goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>
    </section>
  )
}
