import Image from 'next/image';
import { heroSectionContent } from '@/app/lib/constants';

export function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-light-accent)' }} className="w-full py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(24,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(18,auto)] md:gap-y-4">
          <div className="relative [grid-area:15/1/24/7] md:[grid-area:2/1/17/9] md:-ml-[4vw] aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/dr-reynolds-portrait.png"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <p className="[grid-area:2/1/5/9] md:[grid-area:2/11/4/19] md:-ml-[57px] eyebrow-text text-center md:text-left text-[var(--color-black)]">
            {heroSectionContent.eyebrow}
          </p>

          <div className="[grid-area:5/1/12/9] md:[grid-area:7/11/15/23] md:-ml-[57px] space-y-6">
            <h1 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2 }} className="text-[var(--color-black)]">
              Therapy that combines practical tools with real{' '}
              <em className="accent-script">depth</em>.
            </h1>
            <p style={{ fontFamily: "'Muli', sans-serif", fontSize: '1rem', lineHeight: 1.7 }} className="text-[var(--color-black)]">
              {heroSectionContent.subheading}
            </p>
          </div>

          <a
            href="#contact"
            className="[grid-area:12/1/14/9] md:[grid-area:15/11/17/23] md:-ml-[57px] self-start btn-primary"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
