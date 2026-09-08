import { TeamCard, SectionHeader } from '@/app/components/index';

const teamMembers = [
  { name: 'Dr. Smith', title: 'LMFT, Director', specialty: 'Trauma & EMDR' },
  { name: 'Jane Doe', title: 'LMFT', specialty: 'Family Therapy' },
  { name: 'John Johnson', title: 'AMFT', specialty: 'Couples Counseling' },
  { name: 'Sarah Williams', title: 'APCC', specialty: 'Child Therapy' },
  { name: 'Michael Brown', title: 'LMFT', specialty: 'Addiction & Recovery' },
  { name: 'Emily Davis', title: 'APCC', specialty: 'Anxiety & Depression' },
];

export function TeamSection() {
  return (
    <section id="team" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Team"
          description="Experienced, compassionate therapists dedicated to your wellbeing"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} name={member.name} title={member.title} specialty={member.specialty} />
          ))}
        </div>
      </div>
    </section>
  );
}
