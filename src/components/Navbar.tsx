'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';

interface MenuItem {
  label: string;
  href: string;
  submenu?: {
    label: string;
    href: string;
  }[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuItems: MenuItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/products',
      submenu: [
        { label: 'Vitamins', href: '/products/vitamins' },
        { label: 'Minerals', href: '/products/minerals' },
        { label: 'Supplements', href: '/products/supplements' },
        { label: 'Bundles', href: '/products/bundles' },
      ],
    },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-md transition-shadow duration-300 hover:shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 group"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <span className="text-white font-bold text-lg md:text-xl">G</span>
                </div>
                <span className="hidden sm:inline text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Geo Nutrition
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="px-3 lg:px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium text-sm lg:text-base transition-colors duration-200 flex items-center space-x-1 relative"
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300" />
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-0 w-48 bg-white/90 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 origin-top-left border border-white/20">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50/50 hover:text-emerald-600 text-sm transition-all duration-200 relative group/link"
                          >
                            <span className="relative">
                              {subitem.label}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover/link:w-full transition-all duration-300" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3 md:space-x-4">
              {/* Cart Icon */}
              <Link
                href="/cart"
                className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 group"
              >
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-200" />
                <span className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full text-white text-xs flex items-center justify-center font-bold shadow-md">
                  0
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-white/95 backdrop-blur-lg border-r border-white/20 z-30 md:hidden shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-20 pb-6 px-6 space-y-2 overflow-y-auto h-full">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg font-medium transition-all duration-200 flex items-center justify-between relative group"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-1 animate-in fade-in slide-in-from-top-1 duration-300">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg text-sm transition-all duration-200 relative group"
                        >
                          <span className="relative">
                            {subitem.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-lg font-medium transition-all duration-200 relative group"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}