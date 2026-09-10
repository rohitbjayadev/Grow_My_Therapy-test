import Link from 'next/link';
import { navLinks, companyInfo } from '@/app/lib/constants';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-white)] border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-[5vw]">
        <div className="flex justify-between items-center" style={{ height: '75px', paddingTop: '1.4vw', paddingBottom: '1.4vw' }}>
          <div className="flex-shrink-0" style={{ height: '75px', display: 'flex', alignItems: 'center' }}>
            <Link href="/" className="leading-tight">
              <span style={{ fontFamily: "'Cormorant Infant', serif" }} className="block text-2xl font-bold text-[var(--color-black)]">
                {companyInfo.name}
              </span>
              <span className="eyebrow-text block text-[var(--color-dark-accent)]">{companyInfo.title}</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[var(--color-black)] transition py-1 after:content-[''] after:block after:h-px after:bg-[var(--color-black)] after:w-0 after:mx-auto after:transition-[width] after:duration-500 hover:after:w-full"
                style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="#contact" className="btn-secondary text-sm">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-[var(--color-black)] transition p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
