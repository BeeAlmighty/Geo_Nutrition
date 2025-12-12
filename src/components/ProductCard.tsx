'use client';
// Generic blur data URL
const BLUR_DATA_URL =
	'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 400 400%27%3E%3Crect fill=%27%23f3f4f6%27 width=%27400%27 height=%27400%27/%3E%3C/svg%3E';
import { Product } from '@/types';
import { formatPrice, calculateSavings } from '@/lib/utils';
import { event } from '@/lib/gtag';
// import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/constants';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	// const handleAddToCart = () => {
	// 	event(
	// 		'add_to_cart',
	// 		'ecommerce',
	// 		product.name,
	// 		product.discountPrice || product.price
	// 	);
	// };

	const handleWhatsAppOrder = () => {
		const message = `Hi! I'd like to order 1 x ${product.name} (N${
			(product.discountPrice || product.price) * 1
		}). Can you help me?`;
		event('whatsapp_click', 'engagement', 'product_detail_page', 1);
		window.open(
			`${WHATSAPP_URL.split('?')[0]}?text=${encodeURIComponent(message)}`,
			'_blank'
		);
	};
	const handleProductClick = () => {
		event(
			'product_view',
			'ecommerce',
			product.name,
			product.discountPrice || product.price
		);
	};

	return (
		<div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group'>
			<div className='relative overflow-hidden h-64 bg-gray-100'>
				<div className='relative overflow-hidden h-64'>
					<Image
						src={product.image}
						alt={product.name}
						fill
						className='object-cover group-hover:scale-110 transition-transform duration-500'
						quality={85}
						priority={false}
						sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
						placeholder='blur'
						blurDataURL={BLUR_DATA_URL} // ✅ ADD THIS LINE
					/>
				</div>
				{product.discountPrice && (
					<div className='absolute top-4 right-4 bg-[#FFCF40] text-black px-3 py-1 rounded-full text-sm font-semibold'>
						{calculateSavings(product.price, product.discountPrice)}
					</div>
				)}
			</div>

			<div className='p-6'>
				<div className='mb-3'>
					<span className='inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full capitalize'>
						{product.category}
					</span>
				</div>

				<Link
					href={`/supplements/${product.slug}`}
					onClick={handleProductClick}
					className='block text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors mb-2'
				>
					{product.name}
				</Link>

				<p className='text-gray-600 text-sm mb-4'>{product.description}</p>

				<div className='mb-4'>
					<div className='flex items-baseline gap-2'>
						<span className='text-2xl font-bold text-gray-900'>
							{formatPrice(product.discountPrice || product.price)}
						</span>
						{product.discountPrice && (
							<span className='text-lg text-gray-400 line-through'>
								{formatPrice(product.price)}
							</span>
						)}
					</div>
				</div>

				<div className='flex gap-2 mb-4'>
					{product.benefits.slice(0, 2).map(benefit => (
						<span
							key={benefit}
							className='text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded'
						>
							{benefit}
						</span>
					))}
				</div>

				{/* <button
					onClick={handleAddToCart}
					className='w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
				>
					<ShoppingCart className='w-4 h-4' />
					Add to Cart
				</button> */}
				<button
					onClick={handleWhatsAppOrder}
					className='w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer'
				>
					Order Now via WhatsApp
				</button>
			</div>
		</div>
	);
}
