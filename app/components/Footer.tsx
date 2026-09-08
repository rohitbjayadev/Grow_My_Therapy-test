import Link from 'next/link';
import { contactInfo, companyInfo } from '@/app/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">{companyInfo.name}</h3>
            <p className="text-sm text-gray-400">
              {companyInfo.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Family Therapy
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  Children & Teens
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Contact Info</h3>
            <address className="text-sm not-italic space-y-2">
              <div>
                <p className="text-gray-400">Address</p>
                <p>{contactInfo.address}</p>
              </div>
              <div>
                <p className="text-gray-400">Service Areas</p>
                <p>{contactInfo.serviceAreas}</p>
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p>
                  <Link href={`tel:${contactInfo.phone}`} className="hover:text-white transition">
                    {contactInfo.phone}
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p>
                  <Link href={`mailto:${contactInfo.email}`} className="hover:text-white transition">
                    {contactInfo.email}
                  </Link>
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
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
