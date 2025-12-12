import { ReactNode } from 'react';

interface SEOWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOWrapper({
  children,
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  noindex = false,
}: SEOWrapperProps) {
  // The actual SEO meta tags are handled by Next.js metadata API in page.tsx
  // This component is a wrapper for consistent structure and future enhancements
  
  return (
    <>
      {/* JSON-LD structured data for coaching page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Geo Nutrition Coaching',
            description: description,
            url: canonical || 'https://geonutrition.com/coaching',
            image: ogImage,
            priceRange: '₦₦₦',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'NG',
            },
            telephone: '+234-707-979-7963',
            areaServed: {
              '@type': 'Country',
              name: 'Nigeria',
            },
            serviceType: 'Nutrition Coaching',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Coaching Programs',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '12-Week Transformation Program',
                    description: 'Personalized nutrition coaching for quick results',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: '24-Week Complete Transformation',
                    description: 'Extended coaching for sustainable lifestyle change',
                  },
                },
              ],
            },
          }),
        }}
      />
      
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://geonutrition.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Coaching',
                item: 'https://geonutrition.com/coaching',
              },
            ],
          }),
        }}
      />
      
      {children}
    </>
  );
}