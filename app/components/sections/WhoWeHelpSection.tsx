import { Card, SectionHeader } from '@/app/components/index';

const clientGroups = [
  {
    title: 'Adults',
    description: 'Navigate personal challenges, anxiety, depression, relationships, and life transitions. We help you build resilience and find meaning in your life.',
    href: '#adults',
  },
  {
    title: 'Couples',
    description: 'Strengthen your relationship through improved communication, conflict resolution, deeper intimacy, and emotional connection. Therapy for marriage and partnerships.',
    href: '#couples',
  },
  {
    title: 'Children & Teens',
    description: 'Support healthy development, build coping skills, and address behavioral, emotional, and academic challenges in a safe, nurturing environment.',
    href: '#children',
  },
];

export function WhoWeHelpSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Who We Help"
          description="We provide compassionate, evidence-based therapy for individuals at every stage of life"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientGroups.map((group, idx) => (
            <Card
              key={idx}
              title={group.title}
              description={group.description}
              href={group.href}
              withLink
              variant="light"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
