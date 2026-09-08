import Link from 'next/link';
import Image from 'next/image';
import { navLinks, companyInfo } from '@/app/lib/constants';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-[5vw]">
        <div className="flex justify-between items-center" style={{ height: '75px', paddingTop: '1.4vw', paddingBottom: '1.4vw' }}>
          <div className="flex-shrink-0" style={{ height: '75px', display: 'flex', alignItems: 'center' }}>
            <Link href="/">
              <Image
                src={companyInfo.logo}
                alt={companyInfo.name}
                width={150}
                height={75}
                style={{ height: 'auto' }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className="relative text-[var(--color-black)] transition flex items-center gap-1 py-1 after:content-[''] after:block after:h-px after:bg-[var(--color-black)] after:w-0 after:mx-auto after:transition-[width] after:duration-500 group-hover:after:w-full"
                    style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }}
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full hidden group-hover:block bg-white border border-gray-200 shadow-lg min-w-[220px] py-0 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-[var(--color-black)] hover:border-b hover:border-[var(--color-black)] transition"
                        style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.9rem' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[var(--color-black)] transition py-1 after:content-[''] after:block after:h-px after:bg-[var(--color-black)] after:w-0 after:mx-auto after:transition-[width] after:duration-500 hover:after:w-full"
                  style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Link href="/contact" className="btn-secondary text-sm">
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
