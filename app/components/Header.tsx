import Link from 'next/link';
import { navLinks, companyInfo } from '@/app/lib/constants';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-[5vw]">
        <div className="flex justify-between items-center" style={{ height: '75px', paddingTop: '1.4vw', paddingBottom: '1.4vw' }}>
          <div className="flex-shrink-0" style={{ height: '75px', display: 'flex', alignItems: 'center' }}>
            <Link href="/" className="text-gray-900" style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '1.75rem', fontWeight: 700 }}>
              {companyInfo.name}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition"
                style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 transition" style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }}>
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 transition p-2">
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
