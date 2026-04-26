import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
          <img src="/logo.png" alt="MD Astra" className="h-8 w-auto" />
          <div className="flex flex-col">
            <span className="text-lg font-bold font-headline text-white tracking-tight leading-tight">MDASTRA</span>
            <span className="text-[6px] font-bold tracking-[0.15em] text-zinc-400 leading-none">YOUR PARTNER IN PROGRESS</span>
          </div>
        </Link>
          <p className="text-zinc-400 text-xs font-label">© {new Date().getFullYear()} MD Astra Digital. Elevating brands through strategic marketing.</p>
        </div>
        <div className="flex gap-8 text-center md:text-left flex-wrap justify-center md:justify-end">
          <Link href="/privacy-policy" className="text-zinc-400 text-xs font-label hover:text-indigo-300 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-zinc-400 text-xs font-label hover:text-indigo-300 transition-colors">Terms of Service</Link>
          <a href="https://www.linkedin.com/company/md-astra" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs font-label hover:text-indigo-300 transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/mdastra555" target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-xs font-label hover:text-indigo-300 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
