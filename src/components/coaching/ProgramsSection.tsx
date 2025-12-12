'use client';

import { useState } from 'react';
import ProgramCard from './ProgramCard';
import { programs } from '@/lib/programs';
import { Shield, Star, Award, TrendingUp, Zap, Clock } from 'lucide-react';

export default function ProgramsSection() {
	const [activeTab, setActiveTab] = useState<'12-week' | 'monthly-plan'>(
		'12-week'
	);

	const selectedProgram =
		activeTab === '12-week' ? programs[0] : programs[1];

	return (
		<section
			id="programs"
			className="relative py-16 sm:py-20 md:py-24 lg:py-28 px-4 overflow-hidden"
		>
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
				<div className="absolute top-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 animate-blob" />
				<div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000" />
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<div className="text-center mb-12 md:mb-16 animate-fadeInUp">
					<div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
						<Zap className="w-4 h-4" />
						Proven Program
					</div>

					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
						Start Your{' '}
						<span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
							Transformation
						</span>
					</h2>

					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						Choose the plan that fits your lifestyle and timeline.
					</p>
				</div>

				{/* Stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 animate-fadeInUp animation-delay-200">
					{[
						{ icon: Star, label: '4.9/5 Rating', value: '500+ Reviews' },
						{ icon: Award, label: '95% Success', value: 'Goal Achievement' },
						{ icon: TrendingUp, label: 'Avg. 10kg', value: 'Weight Loss' },
						{ icon: Clock, label: '12 Weeks', value: 'See Results' },
					].map((stat, index) => (
						<div
							key={index}
							className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
						>
							<div className="flex flex-col items-center text-center">
								<div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#F4C430] to-[#FFCF40] rounded-xl flex items-center justify-center mb-3">
									<stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
								</div>
								<p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
								<p className="text-sm md:text-base font-bold text-gray-900">
									{stat.value}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* 🔥 Tabs */}
				<div className="flex justify-center mb-10 animate-fadeInUp animation-delay-300 cursor-pointer">
					<div className="bg-white/70 backdrop-blur-md p-1 rounded-full shadow-md flex gap-2 cursor-pointer">
						<button
							onClick={() => setActiveTab('12-week')}
							className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
								activeTab === '12-week'
									? 'bg-emerald-600 text-white shadow'
									: 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							Quarterly Plan
						</button>

						<button
							onClick={() => setActiveTab('monthly-plan')}
							className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
								activeTab === 'monthly-plan'
									? 'bg-emerald-600 text-white shadow'
									: 'text-gray-600 hover:bg-gray-100'
							}`}
						>
							Monthly Plan
						</button>
					</div>
				</div>

				{/* 🔥 Responsive Card Layout (2 cards on large screens) */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fadeInUp animation-delay-400">
					{/* When tab = 12-week, show both OR one depending on your preference */}
					{activeTab === '12-week' && (
						<ProgramCard program={programs[0]} />
					)}

					{activeTab === 'monthly-plan' && (
						<ProgramCard program={programs[1]} />
					)}
				</div>

				{/* Trust */}
				<div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 mt-14 animate-fadeInUp animation-delay-600">
					<div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
						{/* Money-back */}
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
								<Shield className="w-8 h-8 text-emerald-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
								30-Day Money-Back
							</h3>
							<p className="text-sm text-gray-600">
								Not satisfied? Get a full refund.
							</p>
						</div>

						{/* Payments */}
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
								<svg
									className="w-8 h-8 text-emerald-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
								Flexible Payment Plans
							</h3>
							<p className="text-sm text-gray-600">
								Split payments available.
							</p>
						</div>

						{/* Community */}
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
								<svg
									className="w-8 h-8 text-emerald-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
								Community Access
							</h3>
							<p className="text-sm text-gray-600">
								Get support, motivation & accountability.
							</p>
						</div>
					</div>
				</div>

				{/* Contact */}
				<div className="mt-12 text-center animate-fadeInUp animation-delay-800">
					<p className="text-gray-600 mb-4">Have questions?</p>
					<a
						href="tel:+2347079797963"
						className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800"
					>
						<svg
							className="w-5 h-5"
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
						<span>Talk to our team — Free consultation</span>
					</a>
				</div>
			</div>

			{/* Animations */}
			<style jsx global>{`
				@keyframes fadeInUp {
					from { opacity: 0; transform: translateY(30px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes blob {
					0%, 100% { transform: translate(0) scale(1); }
					33% { transform: translate(30px, -50px) scale(1.1); }
					66% { transform: translate(-20px, 20px) scale(0.9); }
				}
				.animate-fadeInUp { animation: fadeInUp .8s ease-out forwards; }
				.animate-blob { animation: blob 7s infinite; }
				.animation-delay-200 { animation-delay: .2s; }
				.animation-delay-300 { animation-delay: .3s; }
				.animation-delay-400 { animation-delay: .4s; }
				.animation-delay-600 { animation-delay: .6s; }
				.animation-delay-800 { animation-delay: .8s; }
			`}</style>
		</section>
	);
}
