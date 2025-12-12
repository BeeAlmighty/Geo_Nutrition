'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { NAVIGATION_LINKS } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll for sticky header effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<>
			{/* Sticky Header */}
			<header
				className={`sticky top-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-white/95 backdrop-blur-md shadow-lg'
						: 'bg-white/80 backdrop-blur-sm shadow-md'
				}`}
			>
				<nav className='border-b border-gray-100'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-between items-center h-16 md:h-20'>
							{/* Logo */}
							<div className='flex-shrink-0'>
								<Link
									href='/'
									className='flex items-center space-x-2 group'
								>
									<div className='relative w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-105'>
										<Image
											src='/images/logo/gn-logo.png'
											alt='Geo Nutrition Logo'
											fill
											sizes='(max-width: 768px) 48px, (max-width: 1200px) 56px, 64px'
											className='object-contain'
											priority
										/>
									</div>
									<span className='hidden sm:inline text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
										Geo Nutrition
									</span>
								</Link>
							</div>

							{/* Desktop Menu */}
							<div className='hidden md:flex items-center space-x-1 lg:space-x-2'>
								{NAVIGATION_LINKS.map(link => (
									<Link
										key={link.label}
										href={link.href}
										className='px-3 lg:px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium text-sm lg:text-base transition-colors duration-200 relative group'
									>
										<span>{link.label}</span>
										<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300' />
									</Link>
								))}
							</div>

							{/* Right Section */}
							<div className='flex items-center space-x-3 md:space-x-4'>
								<Link
									href='/cart'
									className='relative p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200 group'
									aria-label='Shopping cart'
								>
									<ShoppingCart className='w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform' />
									<span className='absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full text-white text-xs flex items-center justify-center font-bold'>
										0
									</span>
								</Link>

								<button
									onClick={() => setIsOpen(!isOpen)}
									className='md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors'
									aria-label='Toggle menu'
									aria-expanded={isOpen}
								>
									{isOpen ? (
										<X className='w-6 h-6' />
									) : (
										<Menu className='w-6 h-6' />
									)}
								</button>
							</div>
						</div>
					</div>
				</nav>
			</header>

			{/* Mobile Menu Backdrop */}
			{isOpen && (
				<div
					className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fadeIn'
					onClick={() => setIsOpen(false)}
					aria-hidden='true'
				/>
			)}

			{/* Mobile Sidebar - Slide in from right */}
			<div
				className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Mobile Menu Header */}
				<div className='flex items-center justify-between p-4 border-b border-gray-100'>
					<span className='text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
						Menu
					</span>
					<button
						onClick={() => setIsOpen(false)}
						className='p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors'
						aria-label='Close menu'
					>
						<X className='w-6 h-6' />
					</button>
				</div>

				{/* Mobile Menu Links */}
				<nav className='px-4 py-6 space-y-2'>
					{NAVIGATION_LINKS.map((link, index) => (
						<Link
							key={link.label}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className='block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-all duration-200 relative group'
							style={{
								animation: isOpen
									? `slideIn 0.3s ease-out ${index * 0.05}s both`
									: 'none',
							}}
						>
							<span className='relative flex items-center'>
								{link.label}
								<svg
									className='w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</span>
						</Link>
					))}
				</nav>

				{/* Mobile Menu Footer */}
				<div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100'>
					<Link
						href='/cart'
						onClick={() => setIsOpen(false)}
						className='flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200'
					>
						<ShoppingCart className='w-5 h-5 mr-2' />
						View Cart (0)
					</Link>
				</div>
			</div>

			{/* Animations */}
			<style
				jsx
				global
			>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
					}
					to {
						opacity: 1;
					}
				}

				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateX(20px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				.animate-fadeIn {
					animation: fadeIn 0.2s ease-out;
				}
			`}</style>
		</>
	);
}
