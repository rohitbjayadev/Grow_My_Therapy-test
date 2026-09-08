export function HeroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-28 lg:py-40">
      <div className="max-w-[1800px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <h1 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1 }} className="text-gray-900">
              Rebuild your foundation on solid ground and finally begin to <em className="not-italic" style={{ fontWeight: 700 }}>thrive</em>
            </h1>
            <p style={{ fontFamily: "'Muli', sans-serif", fontSize: '1rem', lineHeight: 1.8 }} className="text-gray-700 max-w-lg">
              Professional counseling services providing compassionate, evidence-based therapy for individuals, couples, families, and children. Both online and in-person sessions available throughout California.
            </p>
            <button style={{ fontFamily: "'Muli', sans-serif", fontSize: '0.95rem' }} className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 transition duration-200">
              Book an Appointment
            </button>
          </div>

          <div className="h-96 md:h-[500px] bg-gray-100 overflow-hidden flex items-center justify-center">
            <div className="text-center space-y-2">
              <svg className="w-20 h-20 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span style={{ fontFamily: "'Muli', sans-serif" }} className="text-gray-500">Family & Therapy Imagery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
