'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  TrendingUp,
  UserPlus,
  MapPin,
  Share2,
  MousePointerClick,
  CheckCircle2,
  Shield,
  BarChart3,
  Stethoscope
} from 'lucide-react';

export default function HealthcareIndustry() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-background text-on-background font-body">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative z-10"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUpVariant} className="font-label text-xs font-semibold text-primary uppercase mb-6 block tracking-widest">
              Healthcare Exclusive Marketing
            </motion.span>
            <motion.h1 variants={fadeUpVariant} className="font-headline text-5xl font-medium text-on-surface mb-8 leading-tight tracking-tight">
              Elevating Medical Practices with Precision Digital Marketing.
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="font-body text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              We blend clinical-grade data with editorial-level strategy to help healthcare providers reach the right patients at the right moment.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <button className="bg-[#9D72FF] text-white px-8 py-4 rounded-full font-label font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                Book Your Growth Audit
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-full font-label font-medium text-sm hover:bg-surface-container transition-all duration-300">
                View Methodology
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-surface-variant">
              <img 
                alt="Modern clean hospital corridor with a professional female doctor walking confidently with a digital tablet in soft bright natural lighting" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMHZjOon3JS-aXiZphsDxv6Muh2KahC5hpWZuyf89Xakll7zAVg1-y2LLcccNbW2PDRbAc8J7c_gZL2zgdKUVb29UrFLc5sVSrDbYbi6EUwDpYkn0WI8tsixs-CCNdC2HDIp3J4jIak-q7i-LC_lfrZF1G1E-RnUM78-EgmWVZ42AKUwPfMUka4-k_NdGEUuLZC8bTEvuTXQpLiQgjanTxw6Ku0SmCFMcM-h0HkrThaWcdIrdU4Q6LA25u3ZZpBYBZVrn8r65svFs"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-surface-variant max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <TrendingUp className="text-primary w-6 h-6" />
                <span className="font-label text-xs font-semibold text-primary uppercase tracking-widest">Live Success Metric</span>
              </div>
              <p className="font-headline text-2xl font-medium text-on-surface">+142%</p>
              <p className="font-body text-base text-on-surface-variant">Avg. Increase in Qualified Patient Inquiries</p>
            </div>
          </motion.div>
        </div>
        {/* Decorative subtle background shape */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-surface-container-low rounded-l-[200px] opacity-50"></div>
      </section>

      {/* Healthcare Marketing Services (Bento Grid) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="font-headline text-3xl font-medium text-on-surface mb-4">Patient-Centric Solutions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Card 1 */}
            <div className="md:col-span-8 bg-surface-container-low p-12 rounded-3xl border border-surface-variant flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm">
                  <UserPlus className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl font-medium mb-4">Patient Acquisition Systems</h3>
                <p className="font-body text-base text-on-surface-variant mb-8 max-w-lg">
                  Advanced lead management and conversion funnels designed specifically for the unique journey of a healthcare seeker.
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <span className="bg-white px-4 py-2 rounded-full text-xs font-label font-semibold tracking-widest text-primary border border-surface-variant">CRM Integration</span>
                <span className="bg-white px-4 py-2 rounded-full text-xs font-label font-semibold tracking-widest text-primary border border-surface-variant">Lead Scoring</span>
                <span className="bg-white px-4 py-2 rounded-full text-xs font-label font-semibold tracking-widest text-primary border border-surface-variant">Appointment Scheduling</span>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="md:col-span-4 bg-white p-10 rounded-3xl border border-surface-variant hover:border-primary/30 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-8">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-medium mb-4">Local SEO</h3>
              <p className="font-body text-base text-on-surface-variant">
                Dominating the map pack for high-intent medical searches in your specific service area.
              </p>
            </div>

            {/* Small Card 2 */}
            <div className="md:col-span-4 bg-white p-10 rounded-3xl border border-surface-variant hover:border-primary/30 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-8">
                <Share2 className="text-primary w-6 h-6" />
              </div>
              <h3 className="font-headline text-2xl font-medium mb-4">Social Media</h3>
              <p className="font-body text-base text-on-surface-variant">
                Building trust and community through authority-driven healthcare content and active engagement.
              </p>
            </div>

            {/* Large Card 2 */}
            <div className="md:col-span-8 bg-[#F3EFFF] p-12 rounded-3xl border border-[#D1BCFF]/30 flex flex-col md:flex-row gap-12 hover:border-primary/30 transition-all duration-300">
              <div className="md:w-1/2">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm">
                  <MousePointerClick className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl font-medium mb-4">Paid Media Strategy</h3>
                <p className="font-body text-base text-on-surface-variant">
                  HIPAA-compliant Google Ads and Meta campaigns that deliver consistent return on ad spend.
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <img 
                  alt="Analytics Chart" 
                  className="rounded-xl shadow-lg border border-white" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_7a2JW_4_yQ25WB19nszjZF4lTVOAvizaY0KdFP1JYOz4lmTwjWx4oR4voMIXorqNAhG4cchbxViK6XhCWjn8gSK-YKa8JYQezdi8DhWBpVGPnx3cIXNLXTC2zI566eVu4EmQALCMhyDSwIyPLu4DliUDoZE6_3y8LLdV30X72tv4kdq_VNWxYDT4Rn787xoJ0_E7qMGtf9cODFKNuSRNsv6-rkrgL2xypyVdoozyFfVHUI7LII6ZPjTPDq7mng8-jdtKkFhHE8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Quote */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-8">
          <div className="pl-12 border-l-4 border-primary italic">
            <blockquote className="font-headline text-3xl font-medium text-on-surface leading-relaxed">
              "Marketing in healthcare isn't just about clicks; it's about building a digital bridge of trust between a provider and a patient in need. We treat every campaign with the same precision as a surgical procedure."
            </blockquote>
            <cite className="block mt-8 font-label text-xs font-semibold text-primary uppercase tracking-widest not-italic">
              Marcus Astra — Founder & Strategy Lead
            </cite>
          </div>
        </div>
      </section>

      {/* Growth Framework (Step-by-Step) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl font-medium text-on-surface mb-6">The 6-Step Precision Framework</h2>
              <p className="font-body text-xl text-on-surface-variant">
                Our systematic approach to scaling healthcare practices, from initial visibility to long-term patient loyalty.
              </p>
            </div>
            <button className="bg-[#9D72FF] text-white px-10 py-5 rounded-full font-label font-medium text-sm hover:bg-primary transition-all duration-300">
              Download Framework PDF
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <div className="group">
              <div className="font-headline text-6xl text-[#9D72FF]/20 font-bold mb-4 group-hover:text-[#9D72FF]/40 transition-colors">01</div>
              <h4 className="font-headline text-2xl font-medium mb-4">Patient Intent & Market Analysis</h4>
              <p className="font-body text-base text-on-surface-variant">We analyze how patients search for symptoms, treatments, and providers—mapping demand to high-intent keywords and channels.</p>
            </div>
            
            <div className="group">
              <div className="font-headline text-6xl text-[#9D72FF]/20 font-bold mb-4 group-hover:text-[#9D72FF]/40 transition-colors">02</div>
              <h4 className="font-headline text-2xl font-medium mb-4">Channel Strategy & Funnel Design</h4>
              <p className="font-body text-base text-on-surface-variant">We design the right mix of Google Ads, local SEO, content, and social media to capture demand at every stage of the patient journey.</p>
            </div>
            
            <div className="group">
              <div className="font-headline text-6xl text-[#9D72FF]/20 font-bold mb-4 group-hover:text-[#9D72FF]/40 transition-colors">03</div>
              <h4 className="font-headline text-2xl font-medium mb-4">Trust & Authority Building</h4>
              <p className="font-body text-base text-on-surface-variant">Healthcare decisions require confidence. We strengthen trust through reviews, educational content, local authority signals, and consistent messaging.</p>
            </div>
            
            <div className="group">
              <div className="font-headline text-6xl text-[#9D72FF]/20 font-bold mb-4 group-hover:text-[#9D72FF]/40 transition-colors">04</div>
              <h4 className="font-headline text-2xl font-medium mb-4">Conversion & Booking Optimization</h4>
              <p className="font-body text-base text-on-surface-variant">Every campaign is aligned with appointment booking, call handling, and lead quality—reducing wasted spend and improving ROI.</p>
            </div>
            
            <div className="group">
              <div className="font-headline text-6xl text-[#9D72FF]/20 font-bold mb-4 group-hover:text-[#9D72FF]/40 transition-colors">05</div>
              <h4 className="font-headline text-2xl font-medium mb-4">Measurement & Scaling</h4>
              <p className="font-body text-base text-on-surface-variant">We track patient inquiries, cost per lead, and booking trends—scaling what works and refining underperforming tactics.</p>
            </div>
            
            <div className="group">
              <div className="font-headline text-6xl text-[#9D72FF]/20 font-bold mb-4 group-hover:text-[#9D72FF]/40 transition-colors">06</div>
              <h4 className="font-headline text-2xl font-medium mb-4">Patient Retention</h4>
              <p className="font-body text-base text-on-surface-variant">We implement email engagement, follow-up sequences, and referral strategies that keep patients connected and drive word-of-mouth growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MD Astra (Cards) */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline text-3xl font-medium text-on-surface text-center mb-24">The MD Astra Advantage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-3xl border border-surface-variant text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F3EFFF] rounded-full flex items-center justify-center mb-8">
                <Shield className="text-primary w-8 h-8" />
              </div>
              <h5 className="font-headline text-2xl font-medium mb-4">HIPAA Native</h5>
              <p className="font-body text-base text-on-surface-variant">
                Security isn't an afterthought. Every strategy we deploy is built within the strict confines of medical privacy regulations.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-3xl border border-surface-variant text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F3EFFF] rounded-full flex items-center justify-center mb-8">
                <Stethoscope className="text-primary w-8 h-8" />
              </div>
              <h5 className="font-headline text-2xl font-medium mb-4">Clinical Expertise</h5>
              <p className="font-body text-base text-on-surface-variant">
                Our content team includes medical writers who understand complex pathologies and procedures, ensuring authority.
              </p>
            </div>
            
            <div className="bg-white p-12 rounded-3xl border border-surface-variant text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#F3EFFF] rounded-full flex items-center justify-center mb-8">
                <BarChart3 className="text-primary w-8 h-8" />
              </div>
              <h5 className="font-headline text-2xl font-medium mb-4">Pure Performance</h5>
              <p className="font-body text-base text-on-surface-variant">
                No vanity metrics. We focus on cost-per-patient-acquisition and net practice revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-primary p-16 rounded-[40px] text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-5xl font-medium mb-8">Ready to Scale Your Practice?</h2>
              <p className="font-body text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                Schedule a 30-minute growth consultation with our healthcare strategy team today.
              </p>
              <button className="bg-white text-primary px-12 py-6 rounded-full font-label font-medium text-sm hover:bg-surface-container-high transition-all duration-300">
                Request Your Consultation
              </button>
            </div>
            {/* Abstract decorative element */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
