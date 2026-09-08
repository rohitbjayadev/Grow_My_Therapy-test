export function HeroSection() {
  return (
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
  );
}
