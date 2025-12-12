'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { formatPrice, calculateSavings } from '@/lib/utils';
import { event } from '@/lib/gtag';
import { WHATSAPP_URL } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import IngredientsBreakdown from '@/components/product/IngredientsBreakdown';
import CustomerReviews from '@/components/product/CustomerReviews';
import RelatedProducts from '@/components/product/RelatedProducts';
import { products } from '@/lib/products';
import {
	Heart,
	Share2,
	Check,
	AlertCircle,
	Truck,
	Shield,
	ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

interface ProductDetailsClientProps {
	product: Product;
}

export default function ProductDetailsClient({
	product,
}: ProductDetailsClientProps) {
	const [selectedImage, setSelectedImage] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [isWishlisted, setIsWishlisted] = useState(false);
	const [showNotification, setShowNotification] = useState(false);
	const [expandedTab, setExpandedTab] = useState<string | null>('about');

	event(
		'product_detail_view',
		'ecommerce',
		product.name,
		product.discountPrice || product.price
	);

	const productImages = [product.image, product.image, product.image];

	const handleAddToCart = () => {
		event('add_to_cart', 'ecommerce', product.name, quantity);
		setShowNotification(true);
		setTimeout(() => setShowNotification(false), 3000);
	};

	const handleWhatsAppOrder = () => {
		const message = `Hi! I'd like to order ${quantity}x ${product.name} (R${
			(product.discountPrice || product.price) * quantity
		}). Can you help me?`;
		event('whatsapp_click', 'engagement', 'product_detail_page', quantity);
		window.open(
			`${WHATSAPP_URL.split('?')[0]}?text=${encodeURIComponent(message)}`,
			'_blank'
		);
	};

	const handleWishlist = () => {
		setIsWishlisted(!isWishlisted);
		event('wishlist_toggle', 'engagement', product.name, isWishlisted ? 0 : 1);
	};

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: product.name,
					text: product.description,
					url: window.location.href,
				});
				event('share', 'engagement', product.name);
			} catch (err) {
				console.log('Share cancelled', err);
			}
		}
	};

	const finalPrice = product.discountPrice || product.price;
	const relatedProducts = products
		.filter(p => p.category === product.category && p.id !== product.id)
		.slice(0, 4);

	return (
		<>
			<Header />

			{/* ✅ RESPONSIVE: Breadcrumb */}
			<div className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 text-xs sm:text-sm text-gray-600 overflow-x-auto'>
				<Link
					href='/'
					className='hover:text-emerald-600 whitespace-nowrap'
				>
					Home
				</Link>
				<span className='mx-1'>/</span>
				<Link
					href='/#products'
					className='hover:text-emerald-600 whitespace-nowrap'
				>
					Products
				</Link>
				<span className='mx-1'>/</span>
				<span className='text-gray-900 font-semibold whitespace-nowrap'>
					{product.name}
				</span>
			</div>

			<main className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12'>
				{/* ✅ RESPONSIVE: Grid Layout - Stack on mobile, side-by-side on desktop */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 sm:mb-16'>
					{/* ✅ RESPONSIVE: Image Gallery */}
					<div className='order-1 lg:order-1'>
						<ProductImageGallery
							images={productImages}
							productName={product.name}
							selectedImage={selectedImage}
							onSelectImage={setSelectedImage}
						/>

						{/* ✅ RESPONSIVE: Image Actions */}
						<div className='flex gap-2 sm:gap-4 mt-4 sm:mt-6'>
							<button
								onClick={handleWishlist}
								className={`flex-1 flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3 border-2 rounded-lg font-semibold text-sm sm:text-base transition-all ${
									isWishlisted
										? 'border-red-500 text-red-500 bg-red-50'
										: 'border-gray-300 text-gray-700 hover:border-red-500'
								}`}
							>
								<Heart
									className={`w-4 h-4 sm:w-5 sm:h-5 ${
										isWishlisted ? 'fill-current' : ''
									}`}
								/>
								<span className='hidden sm:inline'>
									{isWishlisted ? 'Saved' : 'Save'}
								</span>
							</button>
							<button
								onClick={handleShare}
								className='flex-1 flex items-center justify-center gap-2 px-3 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm sm:text-base hover:border-emerald-500 transition-all'
							>
								<Share2 className='w-4 h-4 sm:w-5 sm:h-5' />
								<span className='hidden sm:inline'>Share</span>
							</button>
						</div>
					</div>

					{/* ✅ RESPONSIVE: Product Info */}
					<div className='order-2 lg:order-2'>
						{/* Badge */}
						<div className='inline-block mb-3 sm:mb-4'>
							<span className='px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold rounded-full capitalize'>
								{product.category}
							</span>
						</div>

						{/* ✅ RESPONSIVE: Title */}
						<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 sm:mt-4 mb-3 sm:mb-4 leading-tight'>
							{product.name}
						</h1>

						{/* ✅ RESPONSIVE: Description */}
						<p className='text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed'>
							{product.description}
						</p>

						{/* ✅ RESPONSIVE: Rating */}
						<div className='flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200'>
							<div className='flex gap-0.5 sm:gap-1'>
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className='w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400'
										viewBox='0 0 20 20'
									>
										<path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
									</svg>
								))}
							</div>
							<span className='text-xs sm:text-base text-gray-600'>
								(128 reviews)
							</span>
						</div>

						{/* ✅ RESPONSIVE: Price Section */}
						<div className='mb-6 sm:mb-8'>
							<div className='flex items-baseline gap-2 sm:gap-4 mb-1 sm:mb-2 flex-wrap'>
								<span className='text-4xl sm:text-5xl font-bold text-gray-900'>
									{formatPrice(finalPrice)}
								</span>
								{product.discountPrice && (
									<>
										<span className='text-xl sm:text-2xl text-gray-400 line-through'>
											{formatPrice(product.price)}
										</span>
										<span className='px-2 sm:px-3 py-1 bg-red-100 text-red-700 font-bold rounded-lg text-xs sm:text-sm'>
											{calculateSavings(product.price, product.discountPrice)}
										</span>
									</>
								)}
							</div>
							<p className='text-xs sm:text-base text-gray-600'>
								{product.dosage} · {product.category}
							</p>
						</div>

						{/* ✅ RESPONSIVE: Quantity Selector */}
						<div className='mb-6 sm:mb-8'>
							<label className='block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3'>
								Quantity
							</label>
							<div className='flex items-center gap-2 sm:gap-4'>
								<button
									onClick={() => setQuantity(Math.max(1, quantity - 1))}
									className='w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg font-semibold hover:border-emerald-500 transition-colors text-base sm:text-lg'
								>
									−
								</button>
								<input
									type='number'
									min='1'
									value={quantity}
									onChange={e =>
										setQuantity(Math.max(1, parseInt(e.target.value) || 1))
									}
									className='w-14 sm:w-16 text-center text-base sm:text-lg font-semibold border-2 border-gray-300 rounded-lg py-2'
								/>
								<button
									onClick={() => setQuantity(quantity + 1)}
									className='w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg font-semibold hover:border-emerald-500 transition-colors text-base sm:text-lg'
								>
									+
								</button>
								<span className='ml-auto text-lg sm:text-xl font-semibold text-gray-700'>
									{formatPrice(finalPrice * quantity)}
								</span>
							</div>
						</div>

						{/* ✅ RESPONSIVE: Action Buttons */}
						<div className='flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8'>
							<button
								onClick={handleWhatsAppOrder}
								className='w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-lg transition-all duration-300 active:scale-95'
							>
								Order Now via WhatsApp
							</button>
							<button
								onClick={handleAddToCart}
								className='w-full border-2 border-emerald-500 text-emerald-600 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-emerald-50 transition-all duration-300'
							>
								Add to Cart
							</button>
						</div>

						{/* ✅ RESPONSIVE: Notification */}
						{showNotification && (
							<div className='mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-green-50 border-l-4 border-green-500 rounded text-xs sm:text-base'>
								<Check className='w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0' />
								<span className='text-green-700 font-semibold'>
									Added to cart! Continue shopping or proceed to checkout.
								</span>
							</div>
						)}

						{/* ✅ RESPONSIVE: Trust Badges */}
						<div className='grid grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200'>
							<div className='flex items-center gap-2 sm:gap-3'>
								<Shield className='w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0' />
								<div>
									<p className='font-semibold text-gray-900 text-xs sm:text-base'>
										Authentic
									</p>
									<p className='text-xs text-gray-600'>100% genuine</p>
								</div>
							</div>
							<div className='flex items-center gap-2 sm:gap-3'>
								<Truck className='w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0' />
								<div>
									<p className='font-semibold text-gray-900 text-xs sm:text-base'>
										Fast Delivery
									</p>
									<p className='text-xs text-gray-600'>Same day</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ✅ RESPONSIVE: Accordion Tabs for Mobile */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mb-12 sm:mb-16'>
					<div className='lg:col-span-2'>
						{/* About Tab */}
						<div className='mb-4 lg:mb-12'>
							<button
								onClick={() =>
									setExpandedTab(expandedTab === 'about' ? null : 'about')
								}
								className='lg:hidden w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
							>
								<h2 className='text-lg font-bold text-gray-900'>
									About This Product
								</h2>
								<ChevronDown
									className={`w-6 h-6 transition-transform ${
										expandedTab === 'about' ? 'rotate-180' : ''
									}`}
								/>
							</button>
							<h2 className='hidden lg:block text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6'>
								About This Product
							</h2>

							{(expandedTab === 'about' || expandedTab === null) && (
								<div className='hidden lg:block'>
									<p className='text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6'>
										{product.longDescription}
									</p>
									<div className='bg-emerald-50 border-l-4 border-emerald-500 p-4 sm:p-6 rounded'>
										<p className='text-emerald-900 font-semibold mb-2'>
											✓ Quality Assured
										</p>
										<p className='text-sm sm:text-base text-emerald-800'>
											All products are tested for purity, potency, and safety.
											Third-party certified.
										</p>
									</div>
								</div>
							)}

							{(expandedTab === 'about' ||
								(expandedTab === null && window.innerWidth < 1024)) && (
								<div className='lg:hidden mt-4 animate-in fade-in'>
									<p className='text-base text-gray-700 leading-relaxed mb-4'>
										{product.longDescription}
									</p>
									<div className='bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded'>
										<p className='text-emerald-900 font-semibold mb-2'>
											✓ Quality Assured
										</p>
										<p className='text-sm text-emerald-800'>
											All products are tested for purity, potency, and safety.
											Third-party certified.
										</p>
									</div>
								</div>
							)}
						</div>

						{/* Benefits Section */}
						<div className='mb-8 sm:mb-12'>
							<h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6'>
								Key Benefits
							</h2>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
								{product.benefits.map((benefit, idx) => (
									<div
										key={idx}
										className='flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg'
									>
										<Check className='w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0 mt-0.5' />
										<span className='text-sm sm:text-base text-gray-900 font-semibold'>
											{benefit}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Ingredients */}
						<IngredientsBreakdown ingredients={product.ingredients} />

						{/* Dosage */}
						<div className='mb-8 sm:mb-12'>
							<h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6'>
								How to Use
							</h2>
							<div className='bg-gradient-to-br from-emerald-50 to-teal-50 p-4 sm:p-8 rounded-lg border border-emerald-200'>
								<div className='flex items-start gap-3 sm:gap-4'>
									<div className='w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0'>
										1
									</div>
									<div>
										<p className='font-semibold text-gray-900 text-sm sm:text-lg'>
											Recommended Dosage
										</p>
										<p className='text-xs sm:text-base text-gray-700 mt-1'>
											{product.dosage}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Safety */}
						<div className='mb-8 sm:mb-12'>
							<h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6'>
								Safety Information
							</h2>
							<div className='bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6'>
								<div className='flex gap-2 sm:gap-4'>
									<AlertCircle className='w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0 mt-1' />
									<div>
										<p className='font-semibold text-amber-900 mb-2 text-sm sm:text-base'>
											Important
										</p>
										<ul className='text-amber-800 text-xs sm:text-sm space-y-1 sm:space-y-2'>
											<li>• Keep out of reach of children</li>
											<li>
												• Consult a healthcare provider if pregnant or nursing
											</li>
											<li>
												• If you are on medication, consult your doctor before
												use
											</li>
											<li>• Do not exceed recommended dosage</li>
											<li>
												• Store in a cool, dry place away from direct sunlight
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* ✅ RESPONSIVE: Sidebar - Hidden on mobile, shown on desktop */}
					<div className='hidden lg:block'>
						<div className='relative bg-gray-50 p-6 rounded-lg border border-gray-200'>
							<h3 className='font-bold text-gray-900 mb-4 text-lg'>
								Quick Info
							</h3>
							<div className='space-y-4 text-sm'>
								<div>
									<p className='text-gray-600 font-semibold'>Category</p>
									<p className='text-gray-900 capitalize'>{product.category}</p>
								</div>
								<div>
									<p className='text-gray-600 font-semibold'>Dosage</p>
									<p className='text-gray-900'>{product.dosage}</p>
								</div>
								<div>
									<p className='text-gray-600 font-semibold'>Stock Status</p>
									<span className='inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold text-xs'>
										In Stock
									</span>
								</div>
								<div className='pt-4 border-t border-gray-200'>
									<p className='text-gray-600 font-semibold mb-2'>
										Ingredients ({product.ingredients.length})
									</p>
									<ul className='text-gray-900 space-y-1'>
										{product.ingredients.slice(0, 3).map((ing, idx) => (
											<li
												key={idx}
												className='text-xs'
											>
												• {ing}
											</li>
										))}
										{product.ingredients.length > 3 && (
											<li className='text-xs text-emerald-600 font-semibold'>
												+{product.ingredients.length - 3} more
											</li>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ✅ RESPONSIVE: Reviews and Related Products */}
				<CustomerReviews productId={product.id} />
				{relatedProducts.length > 0 && (
					<RelatedProducts products={relatedProducts} />
				)}
			</main>

			<Footer />
		</>
	);
}
