'use client';

import { trackEvent } from '@/lib/gtag';
import Image from 'next/image';
import { Phone, CheckCircle2 } from 'lucide-react';

export default function CoachingHero() {
	const handleBookCall = () => {
		trackEvent({
			action: 'click',
			category: 'CTA',
			label: 'Hero Book Call Button',
			value: 1,
		});
		window.location.href = 'tel:+2347079797963';
	};

	const benefits = [
		'One-on-one coaching sessions tailored to you',
		'Custom meal plans and supplement recommendations',
		'Weekly check-ins and progress tracking',
	];

	return (
		<section className='relative min-h-screen flex items-center py-20 sm:py-24 md:py-28 lg:py-32 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-emerald-100 to-gray-500'>
			{/* Animated background patterns */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-0 left-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob' />
				<div className='absolute top-0 right-0 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000' />
				<div className='absolute bottom-0 left-1/2 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000' />
			</div>

			<div className='max-w-7xl mx-auto w-full relative z-10'>
				<div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
					{/* Left content */}
					<div className='order-2 lg:order-1 text-center lg:text-left'>
						{/* Trust badge */}
						<div className='inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeInUp'>
							<span className='relative flex h-2 w-2'>
								<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
								<span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
							</span>
							500+ Success Stories
						</div>

						{/* Main heading */}
						<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight tracking-tight animate-fadeInUp animation-delay-200'>
							Transform Your Health with{' '}
							<span className='bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent animate-gradient'>
								Personalized Coaching
							</span>
						</h1>

						{/* Subheading */}
						<p className='text-base sm:text-lg md:text-xl text-gray-50 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fadeInUp animation-delay-400'>
							Stop guessing and start achieving. Get expert guidance, custom
							nutrition plans, and the accountability you need to reach your
							health goals.
						</p>

						{/* Key benefits */}
						<ul className='space-y-3 md:space-y-4 mb-8 md:mb-10 animate-fadeInUp animation-delay-600'>
							{benefits.map((benefit, index) => (
								<li
									key={index}
									className='flex items-start gap-3 text-left'
								>
									<CheckCircle2 className='w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0 mt-0.5' />
									<span className='text-sm md:text-base text-gray-700 leading-relaxed'>
										{benefit}
									</span>
								</li>
							))}
						</ul>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp animation-delay-800'>
							<button
								onClick={handleBookCall}
								className='group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1'
							>
								<Phone className='w-5 h-5 group-hover:rotate-12 transition-transform' />
								Book Free Consultation
								<span className='absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity' />
							</button>

							<a
								href='#programs'
								className='inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 shadow-md hover:shadow-lg'
							>
								View Programs
								<svg
									className='w-5 h-5 group-hover:translate-x-1 transition-transform'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M19 9l-7 7-7-7'
									/>
								</svg>
							</a>
						</div>

						{/* Social proof */}
						<div className='mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-200 animate-fadeInUp animation-delay-1000'>
							<div className='flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 text-center lg:text-left'>
								<div>
									<p className='text-2xl md:text-3xl font-bold text-gray-900'>
										4.9/5
									</p>
									<p className='text-xs md:text-sm text-gray-100'>
										Average Rating
									</p>
								</div>
								<div className='w-px h-12 bg-gray-200 hidden sm:block' />
								<div>
									<p className='text-2xl md:text-3xl font-bold text-gray-900'>
										95%
									</p>
									<p className='text-xs md:text-sm text-gray-300'>
										Goal Achievement
									</p>
								</div>
								<div className='w-px h-12 bg-gray-200 hidden sm:block' />
								<div>
									<p className='text-2xl md:text-3xl font-bold text-gray-900'>
										12 Weeks
									</p>
									<p className='text-xs md:text-sm text-gray-200'>
										Average Results
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right image/visual */}
					<div className='order-1 lg:order-2 animate-fadeInUp animation-delay-400'>
						<div className='relative group'>
							{/* Main image container */}
							<div className='relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl'>
								<div className='relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3]'>
									<Image
										src='/images/coachingHero2.jpg'
										alt='Nutrition coaching session - Professional nutritionist working with client'
										fill
										priority
										className='object-cover'
										sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px'
										quality={90}
									/>
									{/* Gradient overlay */}
									<div className='absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-teal-900/10' />
								</div>

								{/* Floating badge */}
								<div className='absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 md:p-5 transform transition-all duration-300 hover:scale-110 hover:rotate-1'>
									<div className='flex items-center gap-2 sm:gap-3'>
										<div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center'>
											<span className='text-white font-bold text-lg sm:text-xl'>
												✓
											</span>
										</div>
										<div>
											<p className='text-emerald-600 font-bold text-xl sm:text-2xl md:text-3xl leading-none'>
												500+
											</p>
											<p className='text-gray-700 text-xs sm:text-sm font-medium'>
												Success Stories
											</p>
										</div>
									</div>
								</div>

								{/* Bottom stat card */}
								<div className='absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl px-4 py-3 sm:px-5 sm:py-4 transform transition-all duration-300 hover:scale-105'>
									<div className='flex items-center gap-3'>
										<div className='flex -space-x-2'>
											<div className='w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white' />
											<div className='w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white' />
											<div className='w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 border-2 border-white' />
										</div>
										<div>
											<p className='text-gray-900 font-semibold text-sm'>
												Join 500+ clients
											</p>
											<p className='text-gray-600 text-xs'>
												transforming their health
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Decorative elements */}
							<div className='absolute -bottom-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-30 blur-2xl -z-10' />
							<div className='absolute -top-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full opacity-30 blur-2xl -z-10' />
						</div>
					</div>
				</div>
			</div>

			{/* Custom animations */}
			<style
				jsx
				global
			>{`
				@keyframes fadeInUp {
					from {
						opacity: 0;
						transform: translateY(30px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				@keyframes blob {
					0%,
					100% {
						transform: translate(0px, 0px) scale(1);
					}
					33% {
						transform: translate(30px, -50px) scale(1.1);
					}
					66% {
						transform: translate(-20px, 20px) scale(0.9);
					}
				}

				@keyframes gradient {
					0%,
					100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}

				.animate-fadeInUp {
					animation: fadeInUp 0.8s ease-out forwards;
				}

				.animate-blob {
					animation: blob 7s infinite;
				}

				.animate-gradient {
					background-size: 200% 200%;
					animation: gradient 3s ease infinite;
				}

				.animation-delay-200 {
					animation-delay: 0.2s;
				}

				.animation-delay-400 {
					animation-delay: 0.4s;
				}

				.animation-delay-600 {
					animation-delay: 0.6s;
				}

				.animation-delay-800 {
					animation-delay: 0.8s;
				}

				.animation-delay-1000 {
					animation-delay: 1s;
				}

				.animation-delay-2000 {
					animation-delay: 2s;
				}

				.animation-delay-4000 {
					animation-delay: 4s;
				}
			`}</style>
		</section>
	);
}
