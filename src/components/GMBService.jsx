'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  MapPin,
  TrendingUp,
  FileEdit,
  Star,
  BarChart3,
  CheckCircle2,
  XCircle,
  Phone,
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Search,
  Users,
  Target,
  MessageSquare,
  LineChart,
  Wrench,
  Utensils,
} from 'lucide-react';
import CaseStudies from './CaseStudies';
import './GMBService.css';

const gbpFeatured = [
  {
    slug: 'gbp-hvac-services',
    icon: Wrench,
    title: 'HVAC Google Business Profile',
    industry: 'Home Services – HVAC',
    location: 'Local / Hyper-Local',
    service: 'GBP Optimization',
    color: '#059669',
    colorBg: '#d1fae5',
    results: [
      { metric: '17→352', label: 'Profile Interactions' },
      { metric: '0→65', label: 'Inbound Calls' },
    ],
    highlights: [
      'From 17 to 352 interactions in just 4 months',
      'Website clicks grew from 17 to 150'
    ]
  },
  {
    slug: 'seo-restaurant-morrisville',
    icon: Utensils,
    title: 'Restaurant Local SEO & Maps',
    industry: 'Restaurant / Food & Beverage',
    location: 'Morrisville, NC',
    service: 'Local SEO & Maps',
    color: '#059669',
    colorBg: '#d1fae5',
    results: [
      { metric: 'Top 3', label: 'Google Maps Visibility' },
      { metric: '3x', label: 'Calls & Direction Requests' },
    ],
    highlights: [
      'Ranked for "biryani near me" and local food keywords',
      'Google Business Profile drove foot traffic and online orders'
    ]
  },
  {
    slug: 'seo-home-energy-hvac',
    icon: TrendingUp,
    title: 'Home Energy Local Growth',
    industry: 'Home Services – Energy & HVAC',
    location: 'Local / National',
    service: 'SEO & Local Lead Gen',
    color: '#059669',
    colorBg: '#d1fae5',
    results: [
      { metric: '+254', label: 'Backlinks Added' },
      { metric: '75%', label: 'Organic Click Growth' },
    ],
    highlights: [
      'Impressions grew from 15.4K to 52.5K in 6 months',
      'Local citation consistency boosted Maps visibility'
    ]
  },
];

const GMBService = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const frameworkRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyUsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const frameworkInView = useInView(frameworkRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const whyUsInView = useInView(whyUsRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const services = [
    {
      icon: MapPin,
      title: 'Google Business Profile Setup & Optimization',
      items: [
        'Complete GMB setup or takeover',
        'Category, service, and attribute optimization',
        'Business description optimized for local SEO',
        'Location accuracy & trust signals'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Google Maps Ranking Optimization',
      items: [
        '"Near me" and city-based keyword targeting',
        'Local relevance & proximity optimization',
        'Competitor benchmarking',
        'Local SEO alignment for Maps visibility'
      ]
    },
    {
      icon: FileEdit,
      title: 'GMB Content & Posting Strategy',
      items: [
        'Weekly Google Business Profile posts',
        'Offers, updates, events & announcements',
        'Visual content optimization (images & videos)',
        'Engagement-focused posting cadence'
      ]
    },
    {
      icon: Star,
      title: 'Reviews & Reputation Management',
      items: [
        'Review generation strategy',
        'SEO-friendly review response management',
        'Reputation monitoring',
        'Trust & conversion optimization'
      ]
    },
    {
      icon: BarChart3,
      title: 'GMB Tracking, Insights & Reporting',
      items: [
        'Call, direction & website click tracking',
        'Monthly performance insights',
        'Visibility & action-based reporting',
        'ROI-focused optimization decisions'
      ]
    },
    {
      icon: Users,
      title: 'Local Citation & Directory Management',
      items: [
        'NAP consistency across directories',
        'Citation building & cleanup',
        'Industry-specific directory submissions',
        'Local authority & trust signal improvement'
      ]
    }
  ];

  const frameworkSteps = [
    {
      icon: Search,
      number: '01',
      title: 'Local Market & Competitor Analysis',
      description: 'We analyze your local competition, service area, and customer search behavior to identify ranking and visibility opportunities.'
    },
    {
      icon: Target,
      number: '02',
      title: 'Profile Optimization & Local Signals',
      description: 'Your profile is fully optimized with accurate data, relevant keywords, services, categories, and conversion-focused content.'
    },
    {
      icon: MapPin,
      number: '03',
      title: 'Google Maps Visibility Optimization',
      description: 'We strengthen your Maps presence using proximity signals, relevance improvements, citations, and local SEO integration.'
    },
    {
      icon: MessageSquare,
      number: '04',
      title: 'Engagement & Review Strategy',
      description: 'Consistent posting, review responses, and engagement signals help improve trust, rankings, and customer actions.'
    },
    {
      icon: LineChart,
      number: '05',
      title: 'Tracking, Reporting & Lead Focus',
      description: 'We track calls, direction requests, and website clicks—so you clearly see how GMB drives real customers.'
    },
    {
      icon: TrendingUp,
      number: '06',
      title: 'Ongoing Optimization & Growth Scaling',
      description: 'We continuously refine your profile, posting strategy, and local signals to maintain rankings and expand visibility as your business grows.'
    }
  ];

  const benefits = [
    'Showing up for "near me" and city-based searches',
    'Outranking competitors on Google Maps',
    'Driving more phone calls, visits, and bookings',
    'Building trust through reviews and active profiles',
    'Reducing dependency on paid ads',
    'Connecting with customers at the moment of decision'
  ];

  const painPoints = [
    'Doesn\'t generate calls',
    'Isn\'t ranking in the local map pack',
    'Has reviews but no engagement',
    'Lacks consistent updates'
  ];

  const whyChooseReasons = [
    {
      title: 'Local Visibility Experts, Not Just Listing Managers',
      description: 'We optimize for rankings, engagement, and conversions—not basic setup.'
    },
    {
      title: 'Revenue-Focused GMB Strategies',
      description: 'Every action is designed to drive calls, visits, and bookings.'
    },
    {
      title: 'Integrated with Local SEO & Ads',
      description: 'GMB works seamlessly with SEO and Google Ads for maximum impact.'
    },
    {
      title: 'Transparent Tracking & Reporting',
      description: 'Clear insights into calls, actions, and growth—no guesswork.'
    },
    {
      title: 'Dedicated Local Growth Strategists',
      description: 'Hands-on experts focused on performance, not automation-only tools.'
    },
    {
      title: 'Consistent Profile Activity & Content',
      description: 'Regular posts, photos, and updates that keep your profile active and competitive.'
    }
  ];

  const faqs = [
    {
      question: 'Do you manage Google Business Profiles for local businesses?',
      answer: 'Yes. MD Astra provides complete Google Business Profile management for local businesses across North Carolina.'
    },
    {
      question: 'Can you help my business rank higher on Google Maps?',
      answer: 'Yes. We specialize in Google Maps optimization and local SEO to improve visibility for high-intent searches.'
    },
    {
      question: 'How long does it take to see results from GMB optimization?',
      answer: 'Most businesses see improved visibility and engagement within 30–60 days, depending on competition and activity levels.'
    },
    {
      question: 'Do you help with Google reviews?',
      answer: 'Yes. We provide review generation strategies and SEO-friendly review response management.'
    },
    {
      question: 'Is GMB management included with SEO services?',
      answer: 'It can be. Many clients choose combined GMB + local SEO packages for stronger results.'
    },
    {
      question: 'Do you handle local citations and directory listings?',
      answer: 'Yes. We manage NAP consistency, citation building, and directory submissions to strengthen your local SEO and GMB authority.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <div className="gmb-service-page">
      {/* Hero Section */}
      <section className="section gmb-hero service-hero-dark" ref={heroRef}>
        <div className="hero-bg-image" style={{ backgroundImage: 'url(/heroes/gmb-hero.jpg)' }} />
        <div className="container">
          <motion.div
            className="gmb-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Google Business Profile Services</span>
            <h1 className="heading-xl">
              Google Business Profile (GMB) <span className="text-gradient">Growth Partner</span>
            </h1>
            <p className="gmb-hero-subtitle">
              Local Visibility. Real Leads. Measurable Growth.
            </p>
          </motion.div>

          <motion.div
            className="gmb-hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-md">Get Found Where Local Customers Search & Decide</h2>
            <p>
              Your Google Business Profile is the <strong>most powerful local marketing asset</strong> for any local business. MD Astra helps businesses turn Google Maps and local search visibility into <strong>calls, visits, bookings, and revenue</strong>—not just impressions.
            </p>
            <p>
              We build <strong>local visibility systems that convert intent into customers</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      <CaseStudies featured={gbpFeatured} />

      {/* Services Section */}
      <section className="section section-alt gmb-services" id="gmb-services" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">What We Do</span>
            <h2 className="heading-lg">
              Google Business Profile Services <span className="text-gradient">Built for Local Growth</span>
            </h2>
          </motion.div>

          <motion.div
            className="gmb-services-grid"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="gmb-service-card"
                variants={cardVariants}
              >
                <div className="gmb-service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="gmb-service-title">{service.title}</h3>
                <ul className="gmb-service-list">
                  {service.items.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="section gmb-framework" id="gmb-framework" ref={frameworkRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={frameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Our Process</span>
            <h2 className="heading-lg">
              Our GMB <span className="text-gradient">Growth Framework</span>
            </h2>
            <p>
              A Structured Approach to Local Search Dominance. At MD Astra, Google Business Profile optimization follows a clear, repeatable growth framework designed for local businesses.
            </p>
          </motion.div>

          <motion.div
            className="gmb-framework-steps"
            variants={containerVariants}
            initial="hidden"
            animate={frameworkInView ? "visible" : "hidden"}
          >
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                className="gmb-framework-step"
                variants={cardVariants}
              >
                <div className="gmb-step-number">{step.number}</div>
                <div className="gmb-step-icon">
                  <step.icon size={24} />
                </div>
                <div className="gmb-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt gmb-benefits" ref={benefitsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why GMB Matters</span>
            <h2 className="heading-lg">
              How Google Business Profile Helps <span className="text-gradient">Local Businesses Grow</span>
            </h2>
            <p>
              For local customers, Google Maps is often the final decision point.
            </p>
          </motion.div>

          <div className="gmb-benefits-grid">
            <motion.div
              className="gmb-benefits-card gmb-benefits-positive"
              initial={{ opacity: 0, x: -40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="gmb-benefits-card-header">
                <div className="gmb-benefits-icon gmb-benefits-icon-positive">
                  <CheckCircle2 size={24} />
                </div>
                <h3>A strong Google Business Profile helps by:</h3>
              </div>
              <ul className="gmb-benefits-list">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="gmb-benefit-check">
                      <CheckCircle2 size={18} />
                    </span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="gmb-benefits-card gmb-benefits-negative"
              initial={{ opacity: 0, x: 40 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="gmb-benefits-card-header">
                <div className="gmb-benefits-icon gmb-benefits-icon-negative">
                  <XCircle size={24} />
                </div>
                <h3>If your Google Business Profile:</h3>
              </div>
              <ul className="gmb-benefits-list gmb-benefits-list-negative">
                {painPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="gmb-benefit-x">
                      <XCircle size={18} />
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="gmb-benefits-conclusion">
                <p>Then it's not working as a growth channel.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="gmb-benefits-statement"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>
              MD Astra turns Google Business Profiles into <strong>predictable lead sources—not passive listings</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section gmb-why-choose" ref={whyUsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Why Choose Us</span>
            <h2 className="heading-lg">
              Why Local Businesses <span className="text-gradient">Choose MD Astra</span>
            </h2>
          </motion.div>

          <motion.div
            className="gmb-why-choose-list"
            variants={containerVariants}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                className="gmb-why-choose-item"
                variants={cardVariants}
              >
                <div className="gmb-why-choose-bullet">
                  <ArrowRight size={20} />
                </div>
                <div className="gmb-why-choose-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt gmb-faq" id="gmb-faq" ref={faqRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Got Questions?</span>
            <h2 className="heading-lg">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p>Google Business Profile Services</p>
          </motion.div>

          <motion.div
            className="gmb-faq-list"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`gmb-faq-item ${openFaqIndex === index ? 'open' : ''}`}
              >
                <button
                  className="gmb-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span className="gmb-faq-icon">
                    <HelpCircle size={20} />
                  </span>
                  <span className="gmb-faq-question">{faq.question}</span>
                  <span className="gmb-faq-chevron">
                    <ChevronDown size={20} />
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      className="gmb-faq-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gmb-cta" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="gmb-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">
              Ready to Dominate <span className="text-gradient">Local Search?</span>
            </h2>
            <p>
              If you want more calls, visits, and visibility from Google Maps, MD Astra is built to deliver.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">
              <Phone size={20} />
              Book a Free GMB Growth Strategy Call
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GMBService;
