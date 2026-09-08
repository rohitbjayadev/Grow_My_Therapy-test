import Link from 'next/link';
import { contactInfo, companyInfo } from '@/app/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 md:py-20">
      <div className="max-w-[1800px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '1.25rem', fontWeight: 700 }} className="text-white">
              {companyInfo.name}
            </h3>
            <p style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.9rem', lineHeight: 1.6 }} className="text-gray-400">
              {companyInfo.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '1.1rem', fontWeight: 700 }} className="text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[{ label: 'Home', href: '#' }, { label: 'About', href: '#about' }, { label: 'FAQs', href: '#team' }, { label: 'Contact', href: '#' }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.9rem' }} className="text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '1.1rem', fontWeight: 700 }} className="text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Individual Therapy', href: '#' },
                { label: 'Couples Therapy', href: '#' },
                { label: 'Family Therapy', href: '#' },
                { label: 'Children & Teens', href: '#' },
              ].map((service) => (
                <li key={service.href}>
                  <Link href={service.href} style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.9rem' }} className="text-gray-400 hover:text-white transition">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '1.1rem', fontWeight: 700 }} className="text-white">
              Contact Info
            </h3>
            <div style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.9rem' }} className="space-y-3">
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Address</p>
                <p className="text-gray-400">{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Service Areas</p>
                <p className="text-gray-400 text-xs">{contactInfo.serviceAreas}</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Phone</p>
                <Link href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition">
                  {contactInfo.phone}
                </Link>
              </div>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-wide mb-1">Email</p>
                <Link href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition">
                  {contactInfo.email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600" style={{ fontFamily: "'Muli', sans-serif" }}>
            <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-gray-400 transition">
                Terms
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-400 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-400 transition">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
