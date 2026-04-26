'use client'
import { Utensils, Heart, Wrench } from 'lucide-react';
import Hero from './Hero';
import CaseStudies from './CaseStudies';
import Services from './Services';
import Benefits from './Benefits';
import Solutions from './Solutions';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';
import FAQ from './FAQ';
import CTA from './CTA';
import Contact from './Contact';

const seoFeatured = [
  {
    slug: 'seo-restaurant-morrisville',
    icon: Utensils,
    title: 'Restaurant Local SEO',
    industry: 'Restaurant / Food & Beverage',
    location: 'Morrisville, NC',
    service: 'Local SEO',
    color: '#6b21a8',
    colorBg: 'var(--color-primary-bg)',
    results: [
      { metric: '150%', label: 'Organic Traffic Increase' },
      { metric: 'Top 3', label: 'Google Maps Visibility' },
    ],
    highlights: [
      'Ranked for "biryani near me" and local food keywords',
      '3x increase in calls and direction requests'
    ]
  },
  {
    slug: 'seo-healthcare-physical-therapy',
    icon: Heart,
    title: 'Healthcare SEO Growth',
    industry: 'Physical Therapy / Healthcare',
    location: 'United States',
    service: 'Organic SEO',
    color: '#6b21a8',
    colorBg: 'var(--color-primary-bg)',
    results: [
      { metric: '200%+', label: 'Organic Traffic Growth' },
      { metric: '3x', label: 'Conversion Rate Lift' },
    ],
    highlights: [
      '180% increase in US-based visitors',
      '50+ keyword rankings improved across service pages'
    ]
  },
  {
    slug: 'seo-home-energy-hvac',
    icon: Wrench,
    title: 'Home Energy & HVAC SEO',
    industry: 'Home Services – HVAC & Energy',
    location: 'Local / National',
    service: 'SEO & Lead Generation',
    color: '#6b21a8',
    colorBg: 'var(--color-primary-bg)',
    results: [
      { metric: '75%', label: 'Organic Click Growth' },
      { metric: '+254', label: 'Backlinks Added' },
    ],
    highlights: [
      'Impressions grew from 15.4K to 52.5K in 6 months',
      '64 new organic keywords ranked'
    ]
  },
];

const SEOService = () => {
  return (
    <main>
      <Hero />
      <CaseStudies featured={seoFeatured} />
      <Services />
      <Benefits />
      <Solutions />
      <Testimonials />
      <CTA />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </main>
  );
};

export default SEOService;
