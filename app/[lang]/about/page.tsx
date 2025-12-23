'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { aboutContent } from '@/app/[lang]/about/aboutContent';

// Dynamic imports مع loading states
const HeroSection = dynamic(() => import('@/app/[lang]/about/HeroAboutSection'), {
  loading: () => <div className="min-h-screen bg-gray-900 animate-pulse" />,
});

const StatsSection = dynamic(() => import('@/app/[lang]/about/StatusAboutSection'), {
  loading: () => <div className="py-20 bg-white animate-pulse" />,
});

const ManagementMessage = dynamic(() => import('@/app/[lang]/about/ManagementMessage'), {
  loading: () => <div className="py-24 bg-gray-50 animate-pulse" />,
});

const StorySection = dynamic(() => import('@/app/[lang]/about/StoryAboutSection'), {
  loading: () => <div className="py-24 bg-gray-50 animate-pulse" />,
});

const ValuesSection = dynamic(() => import('@/app/[lang]/about/ValuesAboutSection'), {
  loading: () => <div className="py-24 bg-white animate-pulse" />,
});

const TimelineSection = dynamic(() => import('@/app/[lang]/about/TimelineAboutSection'), {
  loading: () => <div className="py-24 bg-gray-50 animate-pulse" />,
});

const WhySection = dynamic(() => import('@/app/[lang]/about/WhyChooseUsAboutSection'), {
  loading: () => <div className="py-24 bg-white animate-pulse" />,
});

const CTASection = dynamic(() => import('@/app/[lang]/about/CTAAboutSection'), {
  loading: () => <div className="py-24 bg-[#49A799] animate-pulse" />,
});

export default function AboutPage() {
  const params = useParams();
  const currentLang = (params?.lang as string) || 'ar';
  const isRTL = currentLang === 'ar';
  const data = aboutContent[currentLang as 'ar' | 'en'];

  return (
    <div className="min-h-screen bg-gray-50" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Management Message */}
      <ManagementMessage data={data.management} isRTL={isRTL} />

      {/* Hero Section */}
      <HeroSection data={data.hero} />

      {/* Stats Section */}
      <StatsSection stats={data.stats} />

      {/* Story Section */}
      <StorySection data={data.story} isRTL={isRTL} />

      {/* Values Section */}
      <ValuesSection data={data.values} />

      {/* Timeline Section */}
      <TimelineSection data={data.timeline} />

      {/* Why Section */}
      <WhySection data={data.why} isRTL={isRTL} />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}