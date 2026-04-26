'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { submitForm } from '../utils/formSubmit';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Apex, North Carolina, 27502, USA',
      color: '#00e5c0'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+1 855-750-0568',
      link: 'tel:+18557500568',
      color: '#7c5cff'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@mdastra.com',
      link: 'mailto:info@mdastra.com',
      color: '#ff6b9d'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM', 'Sun: Closed'],
      color: '#ffb347'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      website: form.website.value,
      phone: form.phone.value,
      message: form.message.value,
      consent: form.consent.checked,
      formName: 'Contact Form',
    };

    try {
      await submitForm(formData);
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="overline">Get In Touch</span>
            <h2 className="heading-lg">
              Schedule a <span className="text-gradient">Consultation!</span>
            </h2>
            <p className="contact-description">
              Start Your Journey Today! Whether you have a question about our services,
              need a custom strategy, or want to start a project, we'd love to hear from you.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  style={{ '--card-accent': info.color }}
                >
                  <div className="contact-card-icon">
                    <info.icon size={20} />
                  </div>
                  <div className="contact-card-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.content}</a>
                    ) : Array.isArray(info.content) ? (
                      info.content.map((line, i) => <span key={i}>{line}</span>)
                    ) : (
                      <span>{info.content}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h3>Start Your Journey Today!!</h3>
                <p>Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              {status === 'success' ? (
                <div className="form-success">
                  <CheckCircle size={48} />
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="sr-only">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="input"
                        placeholder="Name *"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email" className="sr-only">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="input"
                        placeholder="Email *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-website" className="sr-only">Website URL</label>
                      <input
                        id="contact-website"
                        name="website"
                        type="url"
                        className="input"
                        placeholder="Website URL"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-phone" className="sr-only">Phone</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        className="input"
                        placeholder="Phone *"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="input"
                      placeholder="Tell us about your project..."
                      rows={5}
                    />
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
                        {' '}and consent to receive communications from MD Astra. I understand I can unsubscribe at any time.
                      </span>
                    </label>
                  </div>

                  {status === 'error' && (
                    <div className="form-error">
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
