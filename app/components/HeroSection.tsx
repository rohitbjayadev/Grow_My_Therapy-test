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

          <div className="h-96 md:h-[500px] bg-gray-100 overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
              alt="Family and therapy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
