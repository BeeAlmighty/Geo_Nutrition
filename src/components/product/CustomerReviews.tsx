'use client'

import { Star, ThumbsUp } from 'lucide-react'
import { useState } from 'react'

interface Review {
  id: number
  author: string
  rating: number
  title: string
  content: string
  date: string
  helpful: number
}

const mockReviews: Review[] = [
  {
    id: 1,
    author: 'John Doe',
    rating: 5,
    title: 'Excellent Quality!',
    content:
      'I have been using this product for 3 weeks now and I can already see the difference. Great value for money. Highly recommended!',
    date: '2 weeks ago',
    helpful: 24,
  },
  {
    id: 2,
    author: 'Sarah Johnson',
    rating: 5,
    title: 'Best supplement I have tried',
    content:
      'Fast delivery, authentic product, and noticeable results. This is my go-to supplement now.',
    date: '1 month ago',
    helpful: 18,
  },
  {
    id: 3,
    author: 'Mike Chen',
    rating: 4,
    title: 'Good product, minor issue',
    content:
      'The product itself is great, but the packaging could be better. Still, very happy with my purchase.',
    date: '1 month ago',
    helpful: 12,
  },
]

interface CustomerReviewsProps {
  productId: string
}

export default function CustomerReviews({ }: CustomerReviewsProps) {
  const [helpfulReviews, setHelpfulReviews] = useState<number[]>([])

  const handleHelpful = (reviewId: number) => {
    setHelpfulReviews((prev) =>
      prev.includes(reviewId)
        ? prev.filter((id) => id !== reviewId)
        : [...prev, reviewId]
    )
  }

  const avgRating = (
    mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length
  ).toFixed(1)

  return (
    <section className="mb-16 py-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Rating Summary */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-lg border border-emerald-200">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {avgRating}
            </div>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(parseFloat(avgRating))
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 font-semibold">
              Based on {mockReviews.length} reviews
            </p>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700 w-12">
                  {star} ★
                </span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${(mockReviews.filter((r) => r.rating === star).length / mockReviews.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8 text-right">
                  {mockReviews.filter((r) => r.rating === star).length}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
            Write a Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="md:col-span-2 space-y-6">
          {mockReviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="font-bold text-gray-900">{review.title}</p>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <p className="text-gray-700 mb-4">{review.content}</p>

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-600">
                  By {review.author}
                </p>
                <button
                  onClick={() => handleHelpful(review.id)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-lg font-semibold text-sm transition-all ${
                    helpfulReviews.includes(review.id)
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  {review.helpful + (helpfulReviews.includes(review.id) ? 1 : 0)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}