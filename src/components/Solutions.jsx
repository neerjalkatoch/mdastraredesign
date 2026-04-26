'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  Target,
  Share2,
  Layout,
  PieChart,
  ArrowUpRight
} from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Search,
      title: 'SEO & Local SEO',
      description: 'Real results from real businesses we\'ve helped grow',
      color: '#00e5c0'
    },
    {
      icon: Target,
      title: 'Google Ads Management',
      description: 'High-intent traffic that converts',
      color: '#7c5cff'
    },
    {
      icon: Share2,
      title: 'Facebook & Instagram Ads',
      description: 'Scalable paid growth',
      color: '#ff6b9d'
    },
    {
      icon: Layout,
      title: 'Landing Page Optimization',
      description: 'Turn clicks into customers',
      color: '#ffb347'
    },
    {
      icon: PieChart,
      title: 'Conversion Tracking & Analytics',
      description: 'Measure what matters',
      color: '#4ade80'
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section className="section solutions" id="solutions" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">Full-Service Agency</span>
          <h2 className="heading-lg">
            Complete <span className="text-gradient">Digital Growth Solutions</span> Under One Roof
          </h2>
        </motion.div>

        <motion.div
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.a
              key={index}
              href="#"
              className="solution-card"
              variants={cardVariants}
              style={{ '--card-color': solution.color }}
            >
              <div className="solution-icon">
                <solution.icon size={28} />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
              </div>
              <div className="solution-arrow">
                <ArrowUpRight size={20} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
