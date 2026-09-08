import Link from 'next/link';

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl text-blue-900">
              CVC
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-900 transition">
              About
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-blue-900 transition">
              Our Team
            </Link>
            <Link href="#specialties" className="text-gray-700 hover:text-blue-900 transition">
              Specialties
            </Link>
            <Link href="#methods" className="text-gray-700 hover:text-blue-900 transition">
              Methods
            </Link>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Book an Appointment
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-900 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
