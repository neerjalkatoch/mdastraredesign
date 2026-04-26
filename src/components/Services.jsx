'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  Wrench,
  FileText,
  MapPin,
  Link2,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Search,
      step: '01',
      title: 'Discovery & Strategy Alignment',
      description: 'We start by aligning SEO with your business goals, service areas, competition, and customer search behavior in North Carolina.',
      highlight: 'Real demand and revenue potential, not guesswork.'
    },
    {
      icon: Wrench,
      step: '02',
      title: 'Technical SEO Foundation',
      description: 'A strong technical base ensures your website is fast, secure, mobile-friendly, and easy for search engines to crawl and index.',
      highlight: 'Site speed, Core Web Vitals, indexing issues fixed.'
    },
    {
      icon: FileText,
      step: '03',
      title: 'On-Page & Local Optimization',
      description: 'Key service pages and city-based landing pages are optimized for rankings and conversions.',
      highlight: 'Show up for "near me" and city-specific searches.'
    },
    {
      icon: MapPin,
      step: '04',
      title: 'Google Business Profile Optimization',
      description: 'Your Google Business Profile is optimized to increase calls, directions, and website visits through improved map pack visibility.',
      highlight: 'Accurate categories, local content, and tracking.'
    },
    {
      icon: Link2,
      step: '05',
      title: 'Authority & Link Building',
      description: 'We build high-quality, relevant backlinks through ethical outreach, local citations, and industry partnerships.',
      highlight: 'Strengthening trust and competitiveness in your market.'
    },
    {
      icon: BarChart3,
      step: '06',
      title: 'Tracking, Reporting & Revenue Focus',
      description: 'Every action is tracked—from rankings and traffic to calls and form submissions—so you always know what\'s improving.',
      highlight: 'How SEO contributes to leads and revenue.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="section services home-services" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Our Process</span>
          <h2 className="heading-lg">
            SEO Services <span className="text-gradient">Funnel & Process</span>
          </h2>
          <p>
            A Proven SEO Framework Built for Visibility, Leads & Long-Term Growth.
            Each phase is designed to move North Carolina businesses from low visibility
            to consistent, qualified leads.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
            >
              <div className="service-step">{service.step}</div>
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-highlight">
                <ArrowRight size={14} />
                <span>{service.highlight}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
