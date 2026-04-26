'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { TrendingUp, Target, MapPin, Building2, ShoppingCart, Heart, ArrowUpRight, Utensils, Gavel, Wrench, GraduationCap, Home as HomeIcon } from 'lucide-react';
import './CaseStudies.css';

const defaultFeatured = [
  {
    slug: 'google-ads-ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Google Ads',
    industry: 'E-commerce / DTC (Sporting Goods)',
    location: 'National',
    service: 'Google Ads (PPC)',
    color: '#4285F4',
    colorBg: '#e8f0fe',
    results: [
      { metric: '$525K+', label: 'Revenue Generated' },
      { metric: '23.4x', label: 'Return on Ad Spend' },
    ],
    highlights: [
      'From underperforming to $23.40 for every $1 spent',
      'Built a scalable, repeatable revenue framework'
    ]
  },
  {
    slug: 'google-ads-legal-services',
    icon: Gavel,
    title: 'Legal Services Google Ads',
    industry: 'Legal Services',
    location: 'Local / Regional',
    service: 'Google Ads (PPC)',
    color: '#6b21a8',
    colorBg: 'var(--color-primary-bg)',
    results: [
      { metric: '108', label: 'Qualified Leads (30 Days)' },
      { metric: '108x', label: 'Lead Volume Increase' },
    ],
    highlights: [
      'Scaled from 1 lead to 108 in just 30 days',
      'High-intent targeting for family & business law'
    ]
  },
  {
    slug: 'meta-ads-real-estate-auction',
    icon: HomeIcon,
    title: 'Real Estate Meta Ads',
    industry: 'Real Estate (Auction)',
    location: 'Local / Regional',
    service: 'Meta (Facebook) Ads',
    color: '#1877F2',
    colorBg: '#e7f0ff',
    results: [
      { metric: '2,859', label: 'Leads in 30 Days' },
      { metric: 'High', label: 'Lead Quality' },
    ],
    highlights: [
      'Rapid scaling within a 30-day auction window',
      'Predictable pipeline for auction timelines'
    ]
  }
];

const CaseStudies = ({ featured: featuredProp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = featuredProp || defaultFeatured;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="section case-studies" id="case-studies" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Proven Results</span>
          <h2 className="heading-lg">
            Case Studies: <span className="text-gradient">Real Results</span>
          </h2>
          <p>
            MD Astra is a Google Partner-certified digital marketing company serving businesses across the USA,
            delivering measurable growth through SEO, Google Ads, and Meta Ads.
          </p>
        </motion.div>

        <motion.div
          className="case-studies-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featured.map((study, index) => (
            <motion.div
              key={index}
              className="case-study-card"
              variants={cardVariants}
              style={{ '--accent-color': study.color, '--accent-bg': study.colorBg }}
            >
              <div className="case-study-header">
                <div className="case-study-icon">
                  <study.icon size={24} />
                </div>
                <div className="case-study-meta">
                  <span className="case-study-service">{study.service}</span>
                </div>
              </div>

              <h3 className="case-study-title">{study.title}</h3>

              <div className="case-study-info">
                <div className="info-item">
                  <Target size={14} />
                  <span>{study.industry}</span>
                </div>
                <div className="info-item">
                  <MapPin size={14} />
                  <span>{study.location}</span>
                </div>
              </div>

              <div className="case-study-results">
                {study.results.map((result, i) => (
                  <div key={i} className="result-item">
                    <span className="result-metric">{result.metric}</span>
                    <span className="result-label">{result.label}</span>
                  </div>
                ))}
              </div>

              <ul className="case-study-highlights">
                {study.highlights.map((highlight, i) => (
                  <li key={i}>
                    <TrendingUp size={14} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/case-studies/${study.slug}`} className="case-study-link" onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
                View Full Case Study
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All CTA */}
        <motion.div
          className="all-case-studies"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/case-studies" className="btn btn-secondary btn-lg all-case-studies-btn">
            Explore All Case Studies
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
