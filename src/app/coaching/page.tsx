import { Metadata } from 'next';
import CoachingHero from '@/components/coaching/CoachingHero';
import ProgramsSection from '@/components/coaching/ProgramsSection';
import LeadForm from '@/components/coaching/LeadForm';
import TestimonialsSection from '@/components/coaching/TestimonialsSection';
import CallCTA from '@/components/coaching/CallCTA';
import Header from '@/components/coaching/Header';
import Footer from '@/components/Footer';
import SEOWrapper from '@/components/SeoWrapper';

export const metadata: Metadata = {
  title: 'Personalized Nutrition Coaching | Geo Nutrition',
  description: 'Transform your health with expert nutrition coaching. Choose from 12-week or 24-week personalized programs designed to help you achieve lasting results.',
  openGraph: {
    title: 'Personalized Nutrition Coaching | Geo Nutrition',
    description: 'Transform your health with expert nutrition coaching. Choose from 12-week or 24-week personalized programs.',
    type: 'website',
    url: 'https://geonutrition.com/coaching',
    images: [
      {
        url: '/images/coaching-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Geo Nutrition Coaching Programs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personalized Nutrition Coaching | Geo Nutrition',
    description: 'Transform your health with expert nutrition coaching programs.',
    images: ['/images/coaching-og.jpg'],
  },
};

export default function CoachingPage() {
  return (
    <SEOWrapper
      title="Personalized Nutrition Coaching | Geo Nutrition"
      description="Transform your health with expert nutrition coaching. Choose from 12-week or 24-week personalized programs designed to help you achieve lasting results."
      canonical="https://geonutrition.com/coaching"
    >
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <Header />
        
        {/* Hero Section */}
        <CoachingHero />
        
        {/* Programs Section */}
        <ProgramsSection />
        
        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Geo Nutrition Coaching?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Personalized Plans</h3>
                <p className="text-gray-600">Customized nutrition strategies tailored to your unique goals, lifestyle, and preferences.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Guidance</h3>
                <p className="text-gray-600">Work directly with certified nutrition coaches who understand your journey.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Results</h3>
                <p className="text-gray-600">Join hundreds of clients who have transformed their health and achieved lasting results.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Lead Generation Form */}
        <LeadForm />
        
        <Footer />
        
        {/* Floating Call CTA */}
        <CallCTA />
      </div>
    </SEOWrapper>
  );
}