'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
	id: string;
	name: string;
	program: string;
	image: string;
	rating: number;
	text: string;
	result: string;
}

const testimonials: Testimonial[] = [
	{
		id: '1',
		name: 'Lolade',
		program: '12-Week Program',
		image: '/images/testimonials/lolade.jpg',
		rating: 5,
		text: 'I now feel more energetic, fit, and proud of how far I’ve come. He doesn’t just help you lose weight, he helps you build a mindset that keeps you in shape for life. I’m truly grateful for his encouragement, patience, and commitment to my journey.',
		result: 'Lost 10kg in 12 weeks',
	},
	{
		id: '2',
		name: 'Chioma Okonkwo',
		program: '12-Week Program',
		image: '/images/testimonials/lolade.jpg',
		rating: 5,
		text: 'Best investment I made in my health. The meal plans were easy to follow and the supplement recommendations were spot-on. I feel amazing!',
		result: 'Lost 12kg, improved energy levels',
	},
	{
		id: '3',
		name: 'Ibrahim Musa',
		program: '24-Week Program',
		image: '/images/testimonials/lolade.jpg',
		rating: 5,
		text: 'As someone with a busy schedule, I thought it would be impossible. But the coaching adapted to my lifestyle. The results speak for themselves.',
		result: 'Lost 15kg, reduced blood pressure',
	},
];

export default function TestimonialsSection() {
	const [hasError, setHasError] = useState(false);

	return (
		<section className='py-20 px-4 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Real Results from Real People
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Don&apos;t just take our word for it. See what our clients have
						achieved with personalized coaching.
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{testimonials.map(testimonial => (
						<div
							key={testimonial.id}
							className='bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'
						>
							{/* Rating */}
							<div className='flex items-center mb-4'>
								{[...Array(testimonial.rating)].map((_, i) => (
									<svg
										key={i}
										className='w-5 h-5 text-yellow-400 fill-current'
										viewBox='0 0 20 20'
									>
										<path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
									</svg>
								))}
							</div>

							{/* Testimonial text */}
							<p className='text-gray-700 mb-6 italic leading-relaxed'>
								&quot;{testimonial.text}&quot;
							</p>

							{/* Result badge */}
							<div className='bg-emerald-100 text-emerald-800 rounded-lg px-4 py-2 mb-4 text-sm font-semibold inline-block'>
								✓ {testimonial.result}
							</div>

							{/* Author info */}
							<div className='flex items-center pt-4 border-t border-emerald-200'>
								<div className='w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-3 overflow-hidden'>
									{/* <div className='w-full h-full flex items-center justify-center'> */}
									{!hasError ? (
										<Image
											src={testimonial.image}
											alt={testimonial.name}
											width={200} // adjust as needed
											height={200} // adjust as needed
											className='w-full h-full object-cover'
											onError={() => setHasError(true)}
										/>
									) : (
										<span className='text-emerald-700 font-bold text-lg'>
											{testimonial.name.charAt(0)}
										</span>
									)}
									{/* </div> */}
								</div>
								<div>
									<p className='font-semibold text-gray-900'>
										{testimonial.name}
									</p>
									<p className='text-sm text-gray-600'>{testimonial.program}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Social proof */}
				<div className='mt-12 text-center'>
					<p className='text-gray-600 mb-4'>Join over 500+ satisfied clients</p>
					<div className='flex items-center justify-center space-x-8'>
						<div className='text-center'>
							<p className='text-3xl font-bold text-emerald-600'>4.9/5</p>
							<p className='text-sm text-gray-600'>Average Rating</p>
						</div>
						<div className='text-center'>
							<p className='text-3xl font-bold text-emerald-600'>500+</p>
							<p className='text-sm text-gray-600'>Success Stories</p>
						</div>
						<div className='text-center'>
							<p className='text-3xl font-bold text-emerald-600'>95%</p>
							<p className='text-sm text-gray-600'>Goal Achievement</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
