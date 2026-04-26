'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, MapPin, BarChart3, CheckCircle } from 'lucide-react';
import { submitForm } from '../utils/formSubmit';
import './Hero.css';

const Hero = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const valueProps = [
    {
      icon: TrendingUp,
      title: 'Sustained Organic Growth',
      desc: 'Driven by high-intent search demand'
    },
    {
      icon: MapPin,
      title: 'North Carolina-Focused Local SEO',
      desc: 'Strategies aligned with real customer behavior'
    },
    {
      icon: BarChart3,
      title: 'Transparent Performance Tracking',
      desc: 'Tied directly to leads, calls, and conversions'
    }
  ];

  return (
    <section className="hero">
      <motion.div
        className="hero-bg-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Rank at the Top in{' '}
            <span className="text-gradient">North Carolina</span>{' '}
            with MD Astra
          </motion.h1>

          <motion.div
            className="hero-value-props"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {valueProps.map((prop, index) => (
              <div key={index} className="value-prop">
                <div className="value-prop-icon">
                  <prop.icon size={22} />
                </div>
                <div className="value-prop-text">
                  <strong>{prop.title}</strong>
                  <span>{prop.desc}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="https://api.leadconnectorhq.com/widget/booking/gb1g0SmK2JJgWjhewUpi" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Book an Appointment
              <ArrowRight size={18} />
            </a>
            <a href="tel:+18557500568" className="btn btn-secondary btn-lg">
              Contact Us: +1 855-750-0568
            </a>
          </motion.div>

        </div>

        <motion.div
          className="hero-form-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="hero-form-card">
            <div className="hero-form-header">
              <h3>Get Your Free SEO Audit</h3>
              <p>Transform your online presence with personalized strategies</p>
            </div>
            {formStatus === 'success' ? (
              <div className="form-success">
                <CheckCircle size={48} />
                <h4>Request Submitted!</h4>
                <p>We'll get back to you within 24 hours with your free audit.</p>
                <button className="btn btn-secondary" onClick={() => setFormStatus('idle')}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <form className="hero-form" onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('loading');
                  const form = e.target;
                  try {
                    await submitForm({
                      name: form.name.value,
                      email: form.email.value,
                      website: form.website.value,
                      phone: form.phone.value,
                      consent: form.consent.checked,
                      formName: 'Free SEO Audit',
                    });
                    setFormStatus('success');
                    form.reset();
                  } catch {
                    setFormStatus('idle');
                  }
                }}>
                  <div className="form-group">
                    <label htmlFor="hero-name" className="sr-only">Name</label>
                    <input id="hero-name" name="name" type="text" className="input" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hero-email" className="sr-only">Email</label>
                    <input id="hero-email" name="email" type="email" className="input" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hero-website" className="sr-only">Website URL</label>
                    <input id="hero-website" name="website" type="url" className="input" placeholder="Website URL" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hero-phone" className="sr-only">Phone</label>
                    <input id="hero-phone" name="phone" type="tel" className="input" placeholder="Phone Number" />
                  </div>
                  <div className="form-group form-consent">
                    <label className="consent-label">
                      <input
                        type="checkbox"
                        name="consent"
                        className="consent-checkbox"
                        required
                      />
                      <span className="consent-text">
                        I agree to the{' '}
                        <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                        {' '}and consent to receive communications from MD Astra.
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full" disabled={formStatus === 'loading'}>
                    {formStatus === 'loading' ? 'Sending...' : (
                      <>Book an Appointment <ArrowRight size={18} /></>
                    )}
                  </button>
                </form>
                <p className="form-disclaimer">
                  We'll contact you within 24 hours. No spam, ever.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="hero-floating-stats">
        <motion.div
          className="floating-stat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="stat-number">150%</span>
          <span className="stat-label">Avg. Traffic Growth</span>
        </motion.div>
        <motion.div
          className="floating-stat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span className="stat-number">10+</span>
          <span className="stat-label">Years Experience</span>
        </motion.div>
        <motion.div
          className="floating-stat"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="stat-number">500+</span>
          <span className="stat-label">Clients Served</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
