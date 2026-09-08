import { Card, SectionHeader } from '@/app/components/index';

export function WhoWeHelpSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Who We Help"
          description="We provide compassionate, evidence-based therapy for individuals at every stage of life"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Adults"
            description="Navigate personal challenges, work-life balance, anxiety, depression, and life transitions with professional support."
            href="#adults"
            withLink
            variant="light"
          />
          <Card
            title="Couples"
            description="Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection."
            href="#couples"
            withLink
            variant="light"
          />
          <Card
            title="Children & Teens"
            description="Support healthy development, build coping skills, and address behavioral or emotional challenges in a safe space."
            href="#children"
            withLink
            variant="light"
          />
        </div>
      </div>
    </section>
  );
}
