import { SectionHeader } from '@/app/components/index';

export function MethodsSection() {
  return (
    <section id="methods" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Therapeutic Methods"
          description="We combine multiple evidence-based approaches to create personalized treatment plans"
        />

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
  );
}
