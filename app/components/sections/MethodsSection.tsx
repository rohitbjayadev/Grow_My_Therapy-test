import { SectionHeader } from '@/app/components/index';

const methods = [
  {
    title: 'EMDR Therapy',
    description: 'Eye Movement Desensitization and Reprocessing is an evidence-based treatment proven effective for trauma and PTSD. It helps your brain process distressing memories safely.',
  },
  {
    title: 'Brainspotting',
    description: 'An advanced trauma processing technique that accesses the brain\'s natural healing mechanisms. It focuses on identifying and processing the neurophysiological sources of emotional and physical pain.',
  },
  {
    title: 'Somatic Therapy',
    description: 'Body-based healing approaches that recognize the connection between mind and body. This method helps release stored trauma and tension held in the nervous system.',
  },
  {
    title: 'Parts Work Therapy',
    description: 'Internal Family Systems approaches help you understand different parts of yourself. This method integrates these parts toward wholeness and healing.',
  },
];

export function MethodsSection() {
  return (
    <section id="methods" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Therapeutic Methods"
          description="We combine multiple evidence-based approaches to create personalized treatment plans"
        />

        <div className="space-y-16 mt-12">
          {methods.map((method, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl h-72 flex items-center justify-center border border-blue-200 shadow-sm">
                  <svg className="w-24 h-24 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className={`space-y-4 ${idx % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
