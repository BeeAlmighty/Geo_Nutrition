'use client';

import { Program } from '@/lib/programs';
import { trackEvent } from '@/lib/gtag';
import { Check, Phone, Sparkles } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const handleBookCall = () => {
    trackEvent({
      action: 'click',
      category: 'Program',
      label: `Book Call - ${program.name}`,
      value: program.price,
    });
    window.location.href = 'tel:+2347079797963';
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discount = program.originalPrice
    ? Math.round(
        ((program.originalPrice - program.price) / program.originalPrice) * 100
      )
    : 0;

  return (
    <div
      className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
        program.popular
          ? 'ring-2 ring-emerald-500 scale-105 md:scale-110'
          : 'hover:scale-105'
      } cursor-pointer`}
    >
      {/* Popular badge */}
      {program.popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-[length:200%_100%] animate-shimmer text-white py-2 text-center font-bold text-sm tracking-wide">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            MOST POPULAR CHOICE
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Discount badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-br from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full font-bold text-xs shadow-lg animate-pulse">
          Save {discount}%
        </div>
      )}

      <div className={`p-6 md:p-8 ${program.popular ? 'pt-12' : ''}`}>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">
            {program.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-semibold text-base md:text-lg">
              {program.duration}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">{program.bestFor}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {formatPrice(program.price)}
            </span>
            {program.originalPrice && (
              <span className="text-lg md:text-xl text-gray-400 line-through">
                {formatPrice(program.originalPrice)}
              </span>
            )}
          </div>

          {discount > 0 && (
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              <span>Best Value</span>
              <span className="text-emerald-500">•</span>
              <span className="font-bold">
                Save {formatPrice(program.originalPrice! - program.price)}
              </span>
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {program.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 group/item"
              style={{
                animation: 'slideIn 0.3s ease-out',
                animationDelay: `${idx * 0.05}s`,
                animationFillMode: 'both',
              }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 group-hover/item:bg-emerald-200 transition-colors">
                <Check className="w-3 h-3 text-emerald-600" />
              </div>
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={handleBookCall}
          className={`group/button relative w-full py-4 px-6 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02] overflow-hidden ${
            program.popular
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg hover:shadow-2xl'
              : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-xl'
          }`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 group-hover/button:rotate-12 transition-transform" />
            Book a Call Now
          </span>
          {program.popular && (
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover/button:opacity-100 transition-opacity" />
          )}
        </button>

        {/* Trust indicators */}
        <div className="mt-4 space-y-2">
          <p className="text-center text-gray-500 text-xs md:text-sm">
            Free consultation • No commitment required
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>3 spots left</span>
            </div>
            <span className="text-gray-300">•</span>
            <span>30-day money-back</span>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/0 via-transparent to-teal-500/0 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-500 pointer-events-none" />

      {/* Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
