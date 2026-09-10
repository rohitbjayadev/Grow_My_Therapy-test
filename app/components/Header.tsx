'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks, companyInfo } from '@/app/lib/constants';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-white)] border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-[5vw]">
        <div className="flex justify-between items-center gap-3" style={{ minHeight: '75px', paddingTop: '1.4vw', paddingBottom: '1.4vw' }}>
          <div className="flex-shrink min-w-0" style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" className="leading-tight block min-w-0" onClick={() => setMenuOpen(false)}>
              <span style={{ fontFamily: "'Cormorant Infant', serif" }} className="block text-lg md:text-2xl font-bold text-[var(--color-black)] truncate">
                {companyInfo.name}
              </span>
              <span className="eyebrow-text block text-[var(--color-dark-accent)] truncate text-[0.65rem] tracking-[0.08em] md:text-[0.85rem] md:tracking-[0.12em]">
                {companyInfo.title}
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[var(--color-black)] transition py-1 after:content-[''] after:block after:h-px after:bg-[var(--color-black)] after:w-0 after:mx-auto after:transition-[width] after:duration-500 hover:after:w-full"
                style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#contact" className="btn-secondary text-sm">
              Contact
            </a>
          </div>

          <div className="md:hidden flex-shrink-0">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="text-[var(--color-black)] transition p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[var(--color-black)]"
                style={{ fontFamily: "'Muli', sans-serif", fontSize: '1rem' }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-secondary text-sm self-start">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
