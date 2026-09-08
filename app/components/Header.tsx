import Link from 'next/link';
import { navLinks, companyInfo } from '@/app/lib/constants';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-lg text-gray-900">
              {companyInfo.name}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md transition duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200 shadow-sm hover:shadow-md">
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 transition p-2">
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
