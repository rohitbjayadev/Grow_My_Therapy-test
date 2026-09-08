import Link from 'next/link';
import { contactInfo, companyInfo } from '@/app/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">{companyInfo.name}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {companyInfo.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  Family Therapy
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition">
                  Children & Teens
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base">Contact Info</h3>
            <div className="text-sm space-y-3">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Address</p>
                <p className="text-gray-400">{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Service Areas</p>
                <p className="text-gray-400 text-xs">{contactInfo.serviceAreas}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</p>
                <p>
                  <Link href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition">
                    {contactInfo.phone}
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
                <p>
                  <Link href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition text-sm">
                    {contactInfo.email}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
