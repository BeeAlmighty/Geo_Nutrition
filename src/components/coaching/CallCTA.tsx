'use client';

import { useState, useEffect } from 'react';
import { trackEvent } from '@/lib/gtag';

export default function CallCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    trackEvent({
      action: 'click',
      category: 'CTA',
      label: 'Floating Call Button',
      value: 1,
    });
    window.location.href = 'tel:+2347079797963';
  };

  return (
    <button
      onClick={handleCall}
      className={`fixed bottom-6 right-6 z-50 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-700 transition-all transform hover:scale-110 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Book a call"
    >
      <div className="flex items-center space-x-3 px-6 py-4">
        {/* Phone icon with pulse animation */}
        <div className="relative">
          <svg
            className="w-6 h-6 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          
          {/* Ping animation */}
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        
        {/* Text - hidden on mobile, shown on desktop */}
        <span className="hidden sm:block font-semibold text-base whitespace-nowrap">
          Book a Call
        </span>
      </div>
      
      {/* Hover tooltip for mobile */}
      <div className="sm:hidden absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Book a Call
        <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
}