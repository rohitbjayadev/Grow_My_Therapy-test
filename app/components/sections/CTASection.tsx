export function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Your Needs Are Always Top Priority</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Take the first step toward healing and growth. Schedule a consultation with one of our experienced therapists today. We offer both online and in-person sessions.
        </p>
        <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition inline-block">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
}
