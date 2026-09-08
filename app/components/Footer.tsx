import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Conejo Valley Counseling</h3>
            <p className="text-sm text-gray-400">
              Professional mental health services providing compassionate care to families and individuals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-white transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition">
                  Specialties
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Couples Counseling
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Family Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg">Contact Info</h3>
            <address className="text-sm not-italic">
              <p>925 Broadbeck Dr</p>
              <p>Newbury Park, CA 91320</p>
              <p className="mt-2">(805) 555-0123</p>
              <p>
                <Link href="mailto:hello@example.com" className="hover:text-white transition">
                  hello@example.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 Conejo Valley Counseling. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms of Service
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
