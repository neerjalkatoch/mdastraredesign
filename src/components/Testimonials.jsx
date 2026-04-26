'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [stepPx, setStepPx] = useState(0);

  const testimonials = [
    // Company reviews first
    {
      name: 'Soul Flavorscape of India',
      role: 'Restaurant',
      time: '2 months ago',
      rating: 5,
      content: 'MD Astra has truly excelled in promoting our business through various channels. Their expertise in SEO, social media marketing, and Google ads has significantly enhanced our online presence and visibility. We have seen remarkable improvements in our engagement and traffic, thanks to their dedicated efforts and innovative strategies. We would highly recommend to give them a chance to promote your business too.',
      avatar: 'SF'
    },
    {
      name: 'Triangles Biryani',
      role: 'Restaurant',
      time: '2 months ago',
      rating: 5,
      content: 'Worked with Madhu for my business, MDAstra is a reliable digital marketing agency. Their expertise in SEO, PPC, and social media marketing made a huge difference for our business. Thanks to their strategies, we\'ve seen significant growth in our online presence and customer base.',
      avatar: 'TB'
    },
    {
      name: 'FAADOO',
      role: 'Food Entrepreneur',
      time: 'Recently',
      rating: 5,
      content: 'I recently launched my gourmet hot sauce venture and was looking for direction and advice. I was fortunate to meet up with Madhu and Yogesh to discuss this. They were very helpful and always available. I believe MD Astra firmly recognizes in building value through personal relationship and are willing to go the extra mile.',
      avatar: 'FA'
    },
    // Jennifer next
    {
      name: 'Jennifer Dressler',
      role: 'Business Owner (Ecommerce)',
      time: '7 months ago',
      rating: 5,
      content: 'We\'ve been working with MD Astra for 4 or 5 months now. Our numbers have been greatly improved on our website and we have future plans to expand our work with them, across all of our businesses. Madu has put together an amazing team that works hard to deliver on our needs and goals. Very personalized service.',
      avatar: 'JD'
    },
    // Individual reviews
    {
      name: 'Chaitali Patel',
      role: 'Healthcare Professional',
      time: '8 months ago',
      rating: 5,
      content: 'MD Astra has been a great asset to the development of my practice, Reflex Physical Therapy. Their team is dedicated, knowledgeable, responsive, and truly understands the needs of a growing healthcare practice. Their strategic guidance, planning, creativity, and personalized approach was outstanding for the branding, increasing visibility and marketing of my business. Highly recommend MD Astra to any entrepreneur looking for marketing support in the digital world.',
      avatar: 'CP'
    },
    {
      name: 'Suruchi Gandhi',
      role: 'Entrepreneur',
      time: '11 months ago',
      rating: 5,
      content: 'MD Astra and their team have been incredible in helping me expand my business on social media. Their expertise, dedication, and strategic approach have made a significant impact. Madhu, the owner of MD Astra, is an absolute pleasure to work with—she is patient, kind, and exceptionally knowledgeable. I highly recommend MD Astra to anyone looking to enhance their online presence and grow their business effectively!',
      avatar: 'SG'
    },
    {
      name: 'Vara Prasad Reddy',
      role: 'Store Owner',
      time: '9 months ago',
      rating: 5,
      content: 'We worked with MD Astra on promoting our business and saw new customers increase to our store. They performed very well in reaching to customers. Madhu always comes up with new ideas and thoughts.',
      avatar: 'VR'
    },
{
      name: 'Vishal Patel',
      role: 'Business Owner',
      time: 'a year ago',
      rating: 5,
      content: 'MD Astra, services are really good, they pay finest attention to details and implement it according. The team expertises in Social Media and Content marketing. Would highly recommend to explore their packages and options.',
      avatar: 'VP'
    },
    {
      name: 'Vaibhavi Parekh',
      role: 'Business Owner',
      time: 'a year ago',
      rating: 5,
      content: 'I hired Madhu for social media marketing on various platforms for my business and her services are outstanding! She is very approachable, listens to her client\'s needs and easy to work with. I would recommend her without any hesitation.',
      avatar: 'VP'
    },
    {
      name: 'Aditi Bhatnagar',
      role: 'Entrepreneur',
      time: 'a year ago',
      rating: 5,
      content: 'Thank you MD Astra for helping my business grow and help me achieve my goal. You and your team are the most hardworking and innovative I came across the globe.',
      avatar: 'AB'
    },
    {
      name: 'Babita Shaw',
      role: 'Creative Professional',
      time: 'a year ago',
      rating: 5,
      content: 'It has helped me reach an audience, showcase my work effectively, and connect with clients who value my craft.',
      avatar: 'BS'
    }
  ];

  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const currentIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 1024) return 2;
      if (window.innerWidth <= 1200) return 3;
      return 4;
    };

    const updateCarouselMetrics = () => {
      setVisibleCount(getVisibleCount());

      if (trackRef.current) {
        const card = trackRef.current.querySelector('.testimonial-card');
        if (card) {
          const trackStyles = window.getComputedStyle(trackRef.current);
          const gap = parseFloat(trackStyles.gap || '0');
          const cardWidth = card.getBoundingClientRect().width;
          setStepPx(cardWidth + gap);
        }
      }
    };

    updateCarouselMetrics();
    window.addEventListener('resize', updateCarouselMetrics);

    return () => window.removeEventListener('resize', updateCarouselMetrics);
  }, []);

  // Auto-slide every 4 seconds, pause on hover
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const max = Math.max(0, testimonials.length - visibleCount);
        const clamped = Math.min(prev, max);
        return clamped >= max ? 0 : clamped + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, visibleCount, testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(Math.min(prev, maxIndex) - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(Math.min(prev, maxIndex) + 1, maxIndex));
  };

  return (
    <section className="section testimonials home-testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Client Reviews</span>
          <h2 className="heading-lg">
            What Our <span className="text-gradient">Clients Say</span> About Us
          </h2>
          <p>
            Real results from real businesses we've helped grow
          </p>
        </motion.div>

        <div
          className="testimonials-wrapper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            ref={trackRef}
            className="testimonials-track"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transform: `translateX(-${currentIndex * stepPx}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <span className="testimonial-time">{testimonial.time}</span>
                  </div>
                  <div className="testimonial-google">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                </div>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <div className="testimonial-content">
                  <Quote className="quote-icon" size={20} />
                  <p>{testimonial.content}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="testimonials-controls">
          <button
            className="control-btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="control-dots">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                className={`control-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="control-btn"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
