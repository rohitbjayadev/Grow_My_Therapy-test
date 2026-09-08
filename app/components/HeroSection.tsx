export function HeroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Rebuild your foundation on solid ground and finally begin to <em className="font-bold not-italic text-blue-600">thrive</em>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Professional counseling services providing compassionate, evidence-based therapy for individuals, couples, families, and children. Both online and in-person sessions available throughout California.
            </p>
            <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg">
              Book an Appointment
            </button>
          </div>

          <div className="h-96 md:h-[450px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl overflow-hidden shadow-lg flex items-center justify-center border border-blue-200">
            <div className="text-center space-y-2">
              <svg className="w-16 h-16 mx-auto text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-400">Family & Therapy Imagery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
