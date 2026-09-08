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
    <section id="methods" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Therapeutic Methods"
          description="We combine multiple evidence-based approaches to create personalized treatment plans"
        />

        <div className="space-y-12">
          {methods.map((method, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={idx % 2 === 1 ? 'order-2 md:order-1' : ''}>
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                  <span className="text-gray-500">Therapy Method Image</span>
                </div>
              </div>
              <div className={`space-y-4 ${idx % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900">{method.title}</h3>
                <p className="text-gray-700 leading-relaxed">
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
