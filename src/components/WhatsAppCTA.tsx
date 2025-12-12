'use client'

import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'
import { event } from '@/lib/gtag'

export default function WhatsAppCTA() {
  const handleClick = () => {
    event('whatsapp_click', 'engagement', 'floating_button')
    window.open(WHATSAPP_URL, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold">
          Chat on WhatsApp
        </div>
      </div>
    </button>
  )
}