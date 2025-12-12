'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Lolade',
    role: 'Fitness Enthusiast',
    content: 'Geo Nutrition supplements made my workout journey a whole lot easier!',
    rating: 5,
    image: '/images/testimonials/lolade.jpg',
  },
  {
    id: 2,
    name: 'Moses',
    role: 'Health Coach',
    content: 'My clients absolutely love these supplements. Great quality and fast delivery.',
    rating: 5,
    image: '/images/testimonials/moses.jpg',
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Wellness Blogger',
    content: 'Premium supplements at reasonable prices. Cannot recommend enough!',
    rating: 5,
    image: '/images/testimonials/testimonial-3.jpg',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by <span className="text-emerald-600">Our Customers</span>
          </h2>
          <p className="text-lg text-gray-600">See what real people are saying about Geo Nutrition</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="flex gap-1 mb-6">
              {Array(testimonials[current].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-900 font-semibold mb-8">
              &quot;{testimonials[current].content}&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-emerald-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
