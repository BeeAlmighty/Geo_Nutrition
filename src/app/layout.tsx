import type { Metadata } from 'next';
import '@/styles/globals.css';
import { seoConfig } from '@/lib/seo.config';
import Analytics from '@/components/Analytics';

// ✅ NEW: Import schema generators from modular SEO library
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo';
import RootLayoutClient from '@/components/RootLayoutClient';

export const metadata: Metadata = {
	title: {
		template: '%s | Geo Nutrition',
		default: 'Geo Nutrition - Premium Supplements',
	},
	description: seoConfig.description,
	metadataBase: new URL(seoConfig.baseUrl),
	openGraph: {
		type: 'website',
		locale: 'en_ZA',
		url: seoConfig.baseUrl,
		siteName: seoConfig.siteName,
		images: [
			{
				url: seoConfig.ogImage,
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		creator: seoConfig.twitterHandle,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// ✅ NEW: Generate schemas using modular library
	const organizationSchema = generateOrganizationSchema({
		baseUrl: seoConfig.baseUrl,
		email: 'support@geonutrition.com',
		phone: '+27-123-456-789',
		organizationName: 'Geo Nutrition',
		description: seoConfig.description,
	});

	const websiteSchema = generateWebsiteSchema({
		baseUrl: seoConfig.baseUrl,
		siteName: seoConfig.siteName,
		description: seoConfig.description,
	});

	return (
		<html
			lang='en'
			data-scroll-behavior='smooth'
		>
			<head>
				{/* ✅ Analytics */}
				<Analytics />

				{/* ✅ Viewport Meta */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, viewport-fit=cover'
				/>

				{/* ✅ NEW: Organization Schema (Who you are) */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
					suppressHydrationWarning
				/>

				{/* ✅ NEW: Website Schema (Site search integration) */}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteSchema),
					}}
					suppressHydrationWarning
				/>
			</head>
			<body className='font-sans antialiased'>
				{/* ✅ Client Component for interactive features */}
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
