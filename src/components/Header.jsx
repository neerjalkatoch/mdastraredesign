'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown States
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  // Mobile Dropdown States
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCaseStudiesOpen, setIsMobileCaseStudiesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { label: 'SEO Service', href: '/services/seo' },
    { label: 'Website Development', href: '/services/website-development' },
    { label: 'GMB Service', href: '/services/gmb' },
    { label: 'Content Marketing', href: '/services/content-marketing' },
    { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
    { label: 'Google Ads', href: '/services/google-ads' },
  ];

  const caseStudyGroups = [
    {
      category: 'SEO',
      links: [
        { label: 'Restaurant (Morrisville, NC)', href: '/case-studies/seo-restaurant-morrisville' },
        { label: 'Physical Therapy / Healthcare', href: '/case-studies/seo-healthcare- physical-therapy' },
        { label: 'Home Energy & HVAC', href: '/case-studies/seo-home-energy-hvac' },
      ],
    },
    {
      category: 'Google Ads',
      links: [
        { label: 'Healthcare (Raleigh, NC)', href: '/case-studies/google-ads-healthcare-raleigh' },
        { label: 'E-commerce (23.4x ROAS)', href: '/case-studies/google-ads-ecommerce' },
        { label: 'Legal Services', href: '/case-studies/google-ads-legal-services' },
      ],
    },
    {
      category: 'Meta Ads',
      links: [
        { label: 'Real Estate Training', href: '/case-studies/meta-ads-real-estate-training' },
        { label: 'Food & Tiffin Services', href: '/case-studies/meta-ads-food-tiffin-services' },
        { label: 'Real Estate Auction', href: '/case-studies/meta-ads-real-estate-auction' },
      ],
    },
    {
      category: 'Google Business Profile',
      links: [
        { label: 'HVAC Services', href: '/case-studies/gbp-hvac-services' },
      ],
    },
  ];

  const industryLinks = [
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Restaurant', href: '/industries/restaurant' },
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'Ecommerce', href: '/industries/ecommerce' },
    { label: 'Local Service Business', href: '/industries/local-service' },
    { label: 'Legal Services & Law Firms', href: '/industries/legal-services' },
    { label: 'Education & Coaching', href: '/industries/education' },
    { label: 'Fashion & Lifestyle', href: '/industries/fashion' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (path) => {
    if (path === '/' && pathname !== '/') return false;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return pathname === path;
  };

  const getLinkClasses = (path) => {
    if (isActive(path)) {
      return "text-primary border-b-2 border-primary pb-1 font-semibold transition-all duration-300 whitespace-nowrap";
    }
    return "text-zinc-600 font-medium hover:text-primary transition-all duration-300 whitespace-nowrap";
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-neutral-50/95 backdrop-blur-sm border-b border-indigo-100 shadow-sm' : 'bg-transparent'}`}>
        
        {/* Very top thin info bar */}
        <div className={`w-full bg-zinc-900 text-zinc-300 text-xs py-1.5 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex gap-4 items-center">
              <a href="tel:+18557500568" className="hover:text-white flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">phone</span> +1 855-750-0568</a>
              <a href="mailto:info@mdastra.com" className="hover:text-white flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">mail</span> info@mdastra.com</a>
            </div>
            <div className="flex gap-4 items-center">
              <span className="hidden md:flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> Working Hours: 9:00 - 6:00 Mon - Fri</span>
            </div>
          </div>
        </div>

        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <img src="/logo.png" alt="MD Astra" className="h-9 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-headline text-primary tracking-tight leading-tight">MDASTRA</span>
              <span className="text-[7px] font-bold tracking-[0.15em] text-zinc-500 leading-none">YOUR PARTNER IN PROGRESS</span>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 relative">
            <Link href="/" className={getLinkClasses('/')}>Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative py-2 px-1 cursor-pointer group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="text-zinc-600 font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                Services <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </div>
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-outline-variant py-2 flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} href={service.href} className="px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-surface-container-high hover:text-primary transition-colors">
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Case Studies Dropdown */}
            <div 
              className="relative py-2 px-1 cursor-pointer group"
              onMouseEnter={() => setIsCaseStudiesOpen(true)}
              onMouseLeave={() => setIsCaseStudiesOpen(false)}
            >
              <div className="text-zinc-600 font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                Case Studies <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </div>
              {isCaseStudiesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-xl border border-outline-variant p-6 grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2">
                  {caseStudyGroups.map((group) => (
                    <div key={group.category}>
                      <h4 className="font-bold text-primary font-headline uppercase tracking-wider text-xs mb-3 border-b pb-2">{group.category}</h4>
                      <div className="flex flex-col gap-2">
                        {group.links.map((study) => (
                          <Link key={study.href} href={study.href} className="text-sm font-body text-zinc-600 hover:text-primary transition-colors">
                            {study.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative py-2 px-1 cursor-pointer group"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <div className="text-zinc-600 font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                Industries <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </div>
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-outline-variant py-2 flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {industryLinks.map((ind) => (
                    <Link key={ind.href} href={ind.href} className="px-5 py-2.5 text-sm font-medium text-zinc-700 hover:bg-surface-container-high hover:text-primary transition-colors">
                      {ind.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className={getLinkClasses('/about')}>About</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/gb1g0SmK2JJgWjhewUpi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-primary-container text-on-primary px-6 py-2.5 rounded font-label font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md"
            >
              Get in touch
            </a>
            
            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop & Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-6 overflow-y-auto">
          <div className="flex flex-col gap-4 font-headline text-2xl text-tertiary font-medium">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            
            {/* Mobile Services */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services <span className="material-symbols-outlined">{isMobileServicesOpen ? 'expand_less' : 'expand_more'}</span>
              </button>
              {isMobileServicesOpen && (
                <div className="flex flex-col gap-3 py-4 pl-4 text-lg font-body text-zinc-600">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} href={service.href} onClick={() => setIsMobileMenuOpen(false)}>{service.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Case Studies */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsMobileCaseStudiesOpen(!isMobileCaseStudiesOpen)}
              >
                Case Studies <span className="material-symbols-outlined">{isMobileCaseStudiesOpen ? 'expand_less' : 'expand_more'}</span>
              </button>
              {isMobileCaseStudiesOpen && (
                <div className="flex flex-col gap-6 py-4 pl-4">
                  {caseStudyGroups.map((group) => (
                    <div key={group.category}>
                      <span className="text-sm uppercase tracking-wider text-primary font-bold">{group.category}</span>
                      <div className="flex flex-col gap-3 mt-2 text-lg font-body text-zinc-600">
                        {group.links.map((study) => (
                          <Link key={study.href} href={study.href} onClick={() => setIsMobileMenuOpen(false)}>
                            {study.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button 
                className="flex items-center justify-between w-full text-left"
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
              >
                Industries <span className="material-symbols-outlined">{isMobileIndustriesOpen ? 'expand_less' : 'expand_more'}</span>
              </button>
              {isMobileIndustriesOpen && (
                <div className="flex flex-col gap-3 py-4 pl-4 text-lg font-body text-zinc-600">
                  {industryLinks.map((industry) => (
                    <Link key={industry.href} href={industry.href} onClick={() => setIsMobileMenuOpen(false)}>{industry.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            
            <a 
              href="https://api.leadconnectorhq.com/widget/booking/gb1g0SmK2JJgWjhewUpi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-primary-container text-on-primary py-4 rounded-lg font-label font-bold text-center text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
