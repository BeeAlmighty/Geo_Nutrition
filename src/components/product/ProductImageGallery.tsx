'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImageGalleryProps {
  images: string[]
  productName: string
  selectedImage: number
  onSelectImage: (index: number) => void
}

// Generic blur data URL for all images
const BLUR_DATA_URL =
  'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 400%27%3E%3Crect fill=%27%23f3f4f6%27 width=%27400%27 height=%27400%27/%3E%3C/svg%3E'

export default function ProductImageGallery({
  images,
  productName,
  selectedImage,
  onSelectImage,
}: ProductImageGalleryProps) {
  const nextImage = () => {
    onSelectImage((selectedImage + 1) % images.length)
  }

  const prevImage = () => {
    onSelectImage((selectedImage - 1 + images.length) % images.length)
  }

  return (
    <div>
      {/* Main Image */}
      {/* ✅ FIXED: Changed from <img> to <Image> with fill prop */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4 group">
        <Image
          src={images[selectedImage]}
          alt={`${productName} - View ${selectedImage + 1}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          quality={90}
          priority={selectedImage === 0}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {selectedImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => onSelectImage(idx)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:border-emerald-500 ${
                idx === selectedImage ? 'border-emerald-600' : 'border-gray-300'
              }`}
            >
              {/* ✅ FIXED: Changed from <img> to <Image> for thumbnails */}
              <Image
                src={image}
                alt={`${productName} - Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                quality={75}
                priority={false}
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}