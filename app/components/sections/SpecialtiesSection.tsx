import { SpecialtyCard, SectionHeader } from '@/app/components/index';
import { specialties } from '@/app/lib/constants';

export function SpecialtiesSection() {
  return (
    <section id="specialties" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Specialties"
          description="Evidence-based treatment approaches for complex and nuanced conditions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, idx) => (
            <SpecialtyCard key={idx} title={specialty.title} description={specialty.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
