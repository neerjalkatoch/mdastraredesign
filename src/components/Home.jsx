'use client';
import { useState } from 'react';
import { submitForm } from '../utils/formSubmit';
import CaseStudies from './CaseStudies';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Link from 'next/link';

export default function Home() {
  const [heroFormStatus, setHeroFormStatus] = useState('idle');
  const [openFaq, setOpenFaq] = useState(0);

  const valueProps = [
    {
      icon: "workspace_premium",
      title: 'Global Recognition Award 2025',
      desc: 'Recognized for measurable business impact'
    },
    {
      icon: "rocket_launch",
      title: 'Scalable Growth Systems',
      desc: 'Across paid ads, social media, search, and websites'
    },
    {
      icon: "trending_up",
      title: 'Performance-Driven Results',
      desc: 'Strategies that generate leads, sales, and brand growth'
    }
  ];

  const serviceCategories = [
    {
      icon: 'ads_click',
      title: 'Performance Advertising',
      items: [
        'Google Ads (Search, Display, Performance Max)',
        'Meta Ads (Facebook & Instagram)',
        'High-intent lead generation & sales funnels',
        'Conversion tracking and ROI optimization'
      ]
    },
    {
      icon: 'share',
      title: 'Social Media Marketing & Content Creation',
      items: [
        'Organic Facebook, Instagram & LinkedIn marketing',
        'Brand storytelling & content strategy',
        'Reels, creatives, carousels & ad content',
        'Community engagement & growth-focused posting'
      ]
    },
    {
      icon: 'search',
      title: 'SEO & Local Search Visibility',
      items: [
        'Search engine optimization (SEO)',
        'Google Business Profile optimization & growth',
        'Local SEO for Maps & "near me" searches',
        'Content-driven authority building'
      ]
    },
    {
      icon: 'layers',
      title: 'Website Design & Conversion Optimization',
      items: [
        'Conversion-focused website development',
        'Landing pages for ads & lead generation',
        'UX/UI optimization for higher conversions',
        'Mobile-first, SEO-ready builds'
      ]
    },
    {
      icon: 'monitoring',
      title: 'Analytics, Tracking & Growth Insights',
      items: [
        'GA4 & conversion tracking',
        'Lead & call attribution',
        'Performance dashboards',
        'Data-backed optimization decisions'
      ]
    },
    {
      icon: 'article',
      title: 'Content Marketing & Authority Building',
      items: [
        'Blog content & thought leadership',
        'Email marketing & nurture sequences',
        'Video content & brand storytelling',
        'Content strategy aligned with SEO goals'
      ]
    }
  ];

  const frameworkSteps = [
    {
      step: '01',
      title: 'Business & Audience Discovery',
      description: 'We understand your business goals, ideal customers, competition, and buying behavior before recommending channels or budgets.'
    },
    {
      step: '02',
      title: 'Channel Strategy & Funnel Design',
      description: 'We map the right mix of ads, social, search, content, and website funnels to attract, nurture, and convert customers.'
    },
    {
      step: '03',
      title: 'Campaign Execution & Optimization',
      description: 'Ads, content, SEO, and websites are launched with continuous testing, refinement, and performance tuning.'
    },
    {
      step: '04',
      title: 'Conversion & Revenue Tracking',
      description: 'We track what matters—calls, leads, bookings, and sales—so decisions are based on data, not assumptions.'
    },
    {
      step: '05',
      title: 'Scale What Works',
      description: 'Winning campaigns are scaled, underperforming tactics are refined or removed, and growth compounds over time.'
    }
  ];

  const reasons = [
    {
      icon: 'workspace_premium',
      title: 'Award-Winning Digital Growth Partner',
      description: 'Recognized with the Global Recognition Award 2025 for measurable business impact.'
    },
    {
      icon: 'trending_up',
      title: 'Revenue-Focused Strategies, Not Vanity Metrics',
      description: 'Every campaign is built to generate leads, sales, and scalable growth.'
    },
    {
      icon: 'layers',
      title: 'Industry-Specific Marketing Frameworks',
      description: 'Tailored strategies for healthcare, ecommerce, real estate, restaurants, and local businesses.'
    },
    {
      icon: 'verified',
      title: 'Google Partner-Certified Expertise',
      description: 'Platform-approved execution across Google Ads, analytics, and performance marketing.'
    },
    {
      icon: 'groups',
      title: 'Dedicated Growth Strategists',
      description: 'Hands-on experts focused on performance, ROI, and long-term success—never account hand-offs.'
    },
    {
      icon: 'support_agent',
      title: 'Transparent Reporting & Communication',
      description: 'Monthly performance reports, regular strategy calls, and clear dashboards—always know where your investment is going.'
    }
  ];

  const faqs = [
    {
      question: 'What services does MD Astra offer?',
      answer: 'MD Astra provides full-service digital marketing, including Google Ads, Meta Ads, social media marketing, SEO, Google Business Profile optimization, website development, and content creation.'
    },
    {
      question: 'Is MD Astra a social media marketing agency?',
      answer: 'Yes. MD Astra specializes in social media marketing and content creation designed to build trust, engagement, and conversion across Facebook, Instagram, and LinkedIn.'
    },
    {
      question: 'Do you manage paid ads and organic marketing together?',
      answer: 'Absolutely. We often combine paid advertising with organic social, SEO, and websites to maximize ROI and reduce long-term ad dependency.'
    },
    {
      question: 'How does MD Astra measure success?',
      answer: "We track leads, calls, bookings, conversions, and revenue, not just impressions or clicks. Clients always know what's working and why."
    },
    {
      question: 'How do I get started?',
      answer: 'Book a free strategy call, and our team will analyze your business, current marketing, and growth opportunities before recommending a tailored plan.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-primary text-xs font-bold font-label tracking-wider uppercase mb-6">Partnering for Growth</span>
            <h1 className="text-5xl md:text-7xl font-headline text-primary leading-tight mb-8">Award-Winning Digital Marketing &amp; Growth Partner</h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Grow faster with a digital marketing partner built for results. We design and execute performance-driven strategies that generate leads, sales, and long-term brand growth.
            </p>
            
            {/* Value Props Inline List */}
            <div className="mb-10 space-y-4">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">{prop.icon}</span>
                  <div>
                    <h4 className="font-bold text-primary font-headline">{prop.title}</h4>
                    <p className="text-sm text-on-surface-variant">{prop.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Strategy Call Form Card */}
            <div className="bg-white p-8 rounded-xl shadow-xl border border-outline-variant max-w-md">
              <h3 className="font-headline text-2xl text-tertiary mb-4">Book Your Free Strategy Call</h3>
              <form className="space-y-4" onSubmit={async (e) => {
                e.preventDefault();
                setHeroFormStatus('loading');
                const form = e.target;
                try {
                  await submitForm({
                    name: form.name.value,
                    email: form.email.value,
                    website: form.website.value,
                    phone: form.phone.value,
                    formName: 'Free Strategy Call',
                  });
                  setHeroFormStatus('success');
                  form.reset();
                } catch {
                  setHeroFormStatus('idle');
                }
              }}>
                <input name="name" className="w-full px-4 py-3 rounded border border-outline focus:ring-2 focus:ring-primary-container outline-none font-label transition-all" placeholder="Your Name *" type="text" required />
                <input name="email" className="w-full px-4 py-3 rounded border border-outline focus:ring-2 focus:ring-primary-container outline-none font-label transition-all" placeholder="Email Address *" type="email" required />
                <input name="phone" className="w-full px-4 py-3 rounded border border-outline focus:ring-2 focus:ring-primary-container outline-none font-label transition-all" placeholder="Phone Number *" type="tel" required />
                <input name="website" className="w-full px-4 py-3 rounded border border-outline focus:ring-2 focus:ring-primary-container outline-none font-label transition-all" placeholder="Website URL" type="url" />
                <button type="submit" disabled={heroFormStatus === 'loading'} className="w-full bg-secondary-container text-on-primary py-4 rounded-lg font-bold font-label hover:brightness-110 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-wait">
                  <span>{heroFormStatus === 'loading' ? 'Sending...' : 'Book an Appointment'}</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                {heroFormStatus === 'success' && (
                  <div className="text-green-600 text-sm font-label text-center pt-2 font-bold">Request Submitted! We'll reach out soon.</div>
                )}
              </form>
              <p className="text-[10px] text-on-surface-variant mt-4 text-center">We'll contact you within 24 hours. No spam, ever.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img className="w-full h-full object-cover" alt="Minimalist high-end abstract visualization of data growth with flowing purple waves and sharp crystal textures in a bright studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2USFRyNIHDbKThhtUpOgdxmDoS2nWEeQN3tj02Znz9C2jEva4YwziIo3jJ3YbUQaNrCh1xe4i9IBC7Ds3fbzFZDyXClmkq-sVoZ2skdvoGiOy0YttiondtyVATHsxEqxGRdUyoYKBpuWgPC9fDzPRO7bFuTStjkGdMv4pr4W2x1aTb0PrC4XpUB0L8NjlRXn9nxKB9JunATG-CQAlbzeaIphF5EuJ14LaQfh3aOR2HPQGBY2enpzhc9FmPvNjVrBH1gYJLf0ucSk"/>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed-dim/30 blur-3xl rounded-full -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary-fixed/40 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Embedded Original Case Studies */}
      <CaseStudies />

      {/* Services Grid: What We Do */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-primary text-xs font-bold font-label tracking-wider uppercase mb-6">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">End-to-End Digital Marketing Services That <span className="text-gradient">Drive Growth</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-outline-variant rounded-xl overflow-hidden border border-outline-variant shadow-lg">
            {serviceCategories.map((service, idx) => (
              <div key={idx} className="bg-white p-10 hover:bg-primary-fixed/20 transition-colors group">
                <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">{service.icon}</span>
                <h4 className="text-xl font-bold font-headline mb-4">{service.title}</h4>
                <ul className="space-y-2 text-xs font-label font-semibold text-secondary uppercase tracking-tight list-disc pl-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-on-surface-variant normal-case font-body tracking-normal font-normal">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Framework */}
      <section className="py-24 bg-surface-container-low" id="framework">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-primary text-xs font-bold font-label tracking-wider uppercase mb-6">Our Growth Framework</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">Strategy First. Execution Second. <span className="text-primary-container">Growth Always.</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">MD Astra executes digital marketing as a structured growth framework, not disconnected services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {frameworkSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group">
                <div className="text-3xl font-headline font-bold text-primary-fixed-dim mb-4 group-hover:text-primary transition-colors">{step.step}</div>
                <h3 className="text-lg font-bold font-headline mb-3 text-tertiary">{step.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Testimonials */}
      <Testimonials />

      {/* Why MD Astra Section */}
      <section className="py-24 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-primary text-xs font-bold font-label tracking-wider uppercase mb-6">Why MD Astra</span>
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">Why Businesses <span className="text-primary-container">Choose</span> MD Astra</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-surface-container-low border border-outline-variant hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary mb-4 block">{reason.icon}</span>
                <h3 className="text-xl font-bold font-headline mb-3 text-tertiary">{reason.title}</h3>
                <p className="text-sm text-on-surface-variant">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-surface-container-high" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-primary text-xs font-bold font-label tracking-wider uppercase mb-6">Got Questions?</span>
            <h2 className="text-4xl font-headline text-primary mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-outline-variant overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-surface-bright transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span className="font-bold font-headline text-lg text-tertiary pr-8">{faq.question}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`px-6 pb-5 pt-0 text-on-surface-variant text-sm transition-all duration-300 ${openFaq === idx ? 'block' : 'hidden'}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-on-primary/10 text-on-primary text-sm font-label mb-8">
            <span className="material-symbols-outlined text-sm">auto_awesome</span> Free Strategy Call Available
          </div>
          <h2 className="text-5xl font-headline mb-8">Ready to Scale Your Business?</h2>
          <p className="text-xl text-primary-fixed-dim mb-12">Whether you need more leads, stronger branding, or a complete digital growth strategy—MD Astra is built to deliver.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://api.leadconnectorhq.com/widget/booking/gb1g0SmK2JJgWjhewUpi" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-10 py-4 flex items-center justify-center gap-3 rounded-lg font-bold font-label hover:bg-primary-fixed transition-all shadow-2xl">
              <span className="material-symbols-outlined">chat</span> Book an Appointment
            </a>
            <a href="tel:+18557500568" className="border-2 border-primary-fixed-dim text-white flex items-center justify-center gap-3 px-10 py-4 rounded-lg font-bold font-label hover:bg-white/10 transition-all">
              <span className="material-symbols-outlined">phone</span> Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact Embed */}
      <Contact />
    </main>
  );
}
