'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-blue-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Rebuild your foundation on solid ground and finally begin to thrive
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Professional counseling services tailored to help individuals, couples, families, and children navigate life's challenges with compassion and expertise.
              </p>
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-semibold">
                Book an Appointment
              </button>
            </div>

            {/* Right Image */}
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Family & Therapy Imagery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section id="about" className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide compassionate, evidence-based therapy for individuals at every stage of life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adults Card */}
            <div className="bg-blue-50 rounded-lg p-8 space-y-4 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Adults</h3>
              <p className="text-gray-700">
                Navigate personal challenges, work-life balance, anxiety, depression, and life transitions with professional support.
              </p>
              <Link href="#" className="text-blue-900 font-semibold hover:text-blue-700 transition">
                Learn more →
              </Link>
            </div>

            {/* Couples Card */}
            <div className="bg-blue-50 rounded-lg p-8 space-y-4 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Couples</h3>
              <p className="text-gray-700">
                Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.
              </p>
              <Link href="#" className="text-blue-900 font-semibold hover:text-blue-700 transition">
                Learn more →
              </Link>
            </div>

            {/* Children & Teens Card */}
            <div className="bg-blue-50 rounded-lg p-8 space-y-4 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-gray-900">Children & Teens</h3>
              <p className="text-gray-700">
                Support healthy development, build coping skills, and address behavioral or emotional challenges in a safe space.
              </p>
              <Link href="#" className="text-blue-900 font-semibold hover:text-blue-700 transition">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="specialties" className="w-full py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Evidence-based treatment approaches for complex and nuanced conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Trauma & PTSD', desc: 'Specialized trauma-informed care' },
              { title: 'EMDR Therapy', desc: 'Eye Movement Desensitization & Reprocessing' },
              { title: 'Dissociation', desc: 'Treatment for dissociative disorders' },
              { title: 'Family Therapy', desc: 'Strengthen family relationships' },
              { title: 'Couples Counseling', desc: 'Build healthy partnerships' },
              { title: 'Special Needs Parenting', desc: 'Support for complex parenting' },
            ].map((specialty, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section id="methods" className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Therapeutic Methods
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine multiple evidence-based approaches to create personalized treatment plans
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">EMDR Therapy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Eye Movement Desensitization and Reprocessing is an evidence-based treatment proven effective for trauma and PTSD. It helps your brain process distressing memories safely.
                </p>
              </div>
              <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Therapy Method Image</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center order-2 md:order-1">
                <span className="text-gray-500">Therapy Method Image</span>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900">Family Systems Therapy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand that individual challenges often exist within family dynamics. Our family systems approach addresses patterns and improves relationships for everyone involved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced, compassionate therapists dedicated to your wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Smith', title: 'LMFT, Director', specialty: 'Trauma & EMDR' },
              { name: 'Jane Doe', title: 'LMFT', specialty: 'Family Therapy' },
              { name: 'John Johnson', title: 'AMFT', specialty: 'Couples Counseling' },
              { name: 'Sarah Williams', title: 'APCC', specialty: 'Child Therapy' },
              { name: 'Michael Brown', title: 'LMFT', specialty: 'Addiction & Recovery' },
              { name: 'Emily Davis', title: 'APCC', specialty: 'Anxiety & Depression' },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Therapist Photo</span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-900 font-semibold">{member.title}</p>
                  <p className="text-sm text-gray-600">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Take the first step toward healing and growth. Schedule a consultation with one of our experienced therapists today.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition inline-block">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
