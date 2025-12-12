'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'Are your supplements safe?',
    answer: 'Yes, all our supplements are manufactured following strict quality standards and are tested for purity and potency.',
  },
  {
    id: 2,
    question: 'How long does delivery take?',
    answer: 'We offer express delivery in as much as 24 hours.',
  },
  {
    id: 3,
    question: 'Can I return products?',
    answer: 'Absolutely! We offer a 30-day money-back guarantee if you\'re not satisfied with your purchase.',
  },
  {
    id: 4,
    question: 'Do you offer international shipping?',
    answer: 'No, we don\'t.',
  },
  {
    id: 5,
    question: 'Are there any discounts for bulk orders?',
    answer: 'Yes! We offer special pricing for bulk orders. Contact our sales team for a custom quote.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our products and services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openId === faq.id && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
