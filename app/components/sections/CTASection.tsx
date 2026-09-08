export function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Your Needs Are Always Top Priority</h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Take the first step toward healing and growth. Schedule a consultation with one of our experienced therapists today. We offer both online and in-person sessions.
        </p>
        <button className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition duration-200 shadow-lg hover:shadow-xl">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
}
