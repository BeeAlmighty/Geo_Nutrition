import { event } from '@/lib/gtag';
import Image from 'next/image';

export default function Hero() {
	const handleOrderClick = () => {
		event('hero_cta_click', 'engagement', 'order_now', 1);
	};

	// ✅ TRACK EXPLORE PRODUCTS CLICK
	const handleExploreClick = () => {
		event(
			'explore_products_click', // action
			'engagement', // category
			'hero_section', // label
			1
		);
	};
	return (
		<section className='relative overflow-hidden bg-gradient-to-br from-emerald-100 to-gray-500 py-20 md:py-32'>
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20' />
				<div className='absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20' />
			</div>
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
							Premium Nutrition,{' '}
							<span className='bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent'>
								Peak Performance
							</span>
						</h1>
						<p className='text-lg text-gray-600 mb-8'>
							Geo Nutrition delivers science-backed supplements designed for
							optimal health and wellness. Join thousands of satisfied
							customers.
						</p>
						<div className='flex gap-4 flex-col sm:flex-row'>
							<button
								onClick={handleOrderClick}
								className='px-8 py-4 bg-gradient-to-r  from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'
							>
								Order Now via WhatsApp
							</button>
							<a
								href='#products'
								onClick={handleExploreClick}
								className='px-8 py-4 border-2 border-teal-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 text-center'
							>
								Explore Products
							</a>
						</div>
					</div>
					<div className='relative'>
						<div className='relative bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl h-96 flex items-center justify-center overflow-hidden'>
							<Image
								src='/images/hero4.webp'
								alt='Geo Nutrition Products'
								fill
								className='object-cover rounded-2xl'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
