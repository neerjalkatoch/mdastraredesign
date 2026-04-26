'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What SEO services does MD Astra offer?',
      answer: 'MD Astra provides full-service search engine optimization (SEO) for businesses in Charlotte, Raleigh, and across North Carolina. Our services include local SEO, technical SEO, on-page optimization, content strategy, Google Business Profile optimization, link building, and conversion-focused SEO designed to generate real leads and revenue—not just rankings.'
    },
    {
      question: 'Is MD Astra a local SEO company in Charlotte and Raleigh?',
      answer: 'Yes! MD Astra is headquartered in Apex, North Carolina and serves businesses throughout the state, with a strong focus on Charlotte, Raleigh, Cary, Durham, and surrounding areas. Our local expertise means we understand the competitive landscape and customer behavior specific to North Carolina markets.'
    },
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO is a long-term investment. Most businesses start seeing meaningful improvements in rankings and traffic within 3-6 months, with significant results typically occurring between 6-12 months. The timeline depends on factors like your current website state, competition level, and the scope of work. We focus on building sustainable growth rather than quick fixes.'
    },
    {
      question: 'How much do MD Astra SEO services cost?',
      answer: 'Our SEO packages are customized based on your business goals, competition, and current website performance. We offer flexible pricing structures to accommodate businesses of all sizes. Contact us for a free consultation to discuss your specific needs and receive a tailored proposal.'
    },
    {
      question: 'Does MD Astra offer local SEO packages for small businesses?',
      answer: 'Absolutely. We understand that small businesses have unique needs and budgets. We offer scalable local SEO solutions designed specifically for small businesses looking to improve their visibility in local search results and Google Maps. Our packages focus on driving calls, visits, and leads from nearby customers.'
    },
    {
      question: 'What is the contract term for MD Astra SEO services?',
      answer: 'We typically recommend a minimum 6-month commitment to allow adequate time for SEO strategies to take effect and show measurable results. However, we offer flexible arrangements and can discuss shorter or longer terms based on your business situation. Our goal is to build lasting partnerships based on results.'
    },
    {
      question: 'Can I cancel or pause SEO services if needed?',
      answer: 'Yes, we understand business needs change. Our contracts include provisions for pausing or canceling services with appropriate notice (typically 30 days). We believe in transparency and flexibility—if our services aren\'t delivering value, we\'ll work with you to find a solution.'
    },
    {
      question: 'How do I get started with MD Astra SEO services?',
      answer: 'Getting started is easy! Simply schedule a free consultation call where we\'ll discuss your business goals, current online presence, and competition. From there, we\'ll conduct an audit and create a customized SEO strategy. Once you approve, our team gets to work implementing your growth plan.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section faq home-faq" id="faq" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Got Questions?</span>
          <h2 className="heading-lg">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-trigger"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-icon">
                  <HelpCircle size={20} />
                </span>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-chevron">
                  <ChevronDown size={20} />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-content"
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
  );
};

export default FAQ;
