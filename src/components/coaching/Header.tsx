'use client';

import { useState } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/gtag';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (label: string) => {
    trackEvent({
      action: 'click',
      category: 'Navigation',
      label: label,
      value: 1,
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center"
            onClick={() => handleNavClick('Logo')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GN</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Geo Nutrition
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              onClick={() => handleNavClick('Home')}
            >
              Home
            </Link>
            {/* <Link
              href="/supplements"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              onClick={() => handleNavClick('Supplements')}
            >
              Supplements
            </Link> */}
            <Link
              href="/coaching"
              className="text-emerald-600 font-semibold border-b-2 border-emerald-600"
              onClick={() => handleNavClick('Coaching')}
            >
              Coaching
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              onClick={() => handleNavClick('About')}
            >
              About
            </Link>
            {/* <Link
              href="#contact"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              onClick={() => handleNavClick('Contact')}
            >
              Contact
            </Link> */}
            <a
              href="tel:+2347079797963"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105"
              onClick={() => handleNavClick('Header Call Button')}
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2 py-1"
                onClick={() => {
                  handleNavClick('Home Mobile');
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </Link>
              {/* <Link
                href="/supplements"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2 py-1"
                onClick={() => {
                  handleNavClick('Supplements Mobile');
                  setIsMobileMenuOpen(false);
                }}
              >
                Supplements
              </Link> */}
              <Link
                href="/coaching"
                className="text-emerald-600 font-semibold px-2 py-1"
                onClick={() => {
                  handleNavClick('Coaching Mobile');
                  setIsMobileMenuOpen(false);
                }}
              >
                Coaching
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2 py-1"
                onClick={() => {
                  handleNavClick('About Mobile');
                  setIsMobileMenuOpen(false);
                }}
              >
                About
              </Link>
              {/* <Link
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors px-2 py-1"
                onClick={() => {
                  handleNavClick('Contact Mobile');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </Link> */}
              <a
                href="tel:+2347079797963"
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all text-center"
                onClick={() => {
                  handleNavClick('Header Call Button Mobile');
                  setIsMobileMenuOpen(false);
                }}
              >
                Book a Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}