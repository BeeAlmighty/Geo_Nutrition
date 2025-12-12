import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Personalized Nutrition Coaching | Geo Nutrition',
  description: 'Transform your health with expert nutrition coaching. Choose from 12-week or 24-week personalized programs designed to help you achieve lasting results.',
  keywords: [
    'nutrition coaching',
    'personal nutrition coach',
    'weight loss coaching',
    'health coaching Nigeria',
    'nutrition transformation',
    '12 week program',
    '24 week program',
    'meal planning',
    'nutrition expert',
    'health transformation',
  ],
  openGraph: {
    title: 'Personalized Nutrition Coaching | Geo Nutrition',
    description: 'Transform your health with expert nutrition coaching. Choose from 12-week or 24-week personalized programs.',
    type: 'website',
    url: 'https://geo-nutrition.com/coaching',
    siteName: 'Geo Nutrition',
    locale: 'en_NG',
    images: [
      {
        url: '/images/coaching-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Geo Nutrition Coaching Programs',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personalized Nutrition Coaching | Geo Nutrition',
    description: 'Transform your health with expert nutrition coaching programs.',
    images: ['/images/coaching-og.jpg'],
    creator: '@geonutrition',
  },
  alternates: {
    canonical: 'https://geo-nutrition.com/coaching',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CoachingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}