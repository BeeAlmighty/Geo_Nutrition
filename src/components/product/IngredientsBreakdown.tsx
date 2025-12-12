'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface IngredientsBreakdownProps {
  ingredients: string[]
}

export default function IngredientsBreakdown({ ingredients }: IngredientsBreakdownProps) {
  const [showAll, setShowAll] = useState(false)

  const displayedIngredients = showAll ? ingredients : ingredients.slice(0, 5)

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Active Ingredients
      </h2>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
        <div className="space-y-4">
          {displayedIngredients.map((ingredient, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                ✓
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{ingredient}</p>
                <p className="text-sm text-gray-700 mt-1">
                  High-quality pharmaceutical grade ingredient
                </p>
              </div>
            </div>
          ))}
        </div>

        {ingredients.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 w-full flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            {showAll ? 'Show Less' : `Show ${ingredients.length - 5} More`}
            <ChevronDown className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </div>
  )
}