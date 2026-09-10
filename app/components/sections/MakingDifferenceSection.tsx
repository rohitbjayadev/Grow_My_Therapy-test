import Image from 'next/image';
import { makingDifferenceContent } from '@/app/lib/constants';

export function MakingDifferenceSection() {
  return (
    <section id="approach" style={{ backgroundColor: 'var(--color-light-accent)' }} className="w-full py-12 md:py-20">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(41,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(24,auto)] md:gap-x-5 md:gap-y-6">
          <p className="[grid-area:3/1/5/9] md:[grid-area:4/2/6/14] eyebrow-text text-[var(--color-black)]">
            {makingDifferenceContent.eyebrow}
          </p>

          <h2 className="[grid-area:5/1/8/8] md:[grid-area:8/2/10/19] text-4xl md:text-5xl font-bold text-[var(--color-black)]">
            {makingDifferenceContent.heading}
          </h2>

          <div className="relative [grid-area:9/1/17/9] md:[grid-area:4/20/22/26] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/dr_consulting.png"
              alt="Dr. Maya Reynolds in a therapy session"
              fill
              sizes="(max-width: 768px) 90vw, 25vw"
              className="object-cover"
            />
          </div>

          <p className="[grid-area:18/1/28/9] md:[grid-area:11/2/20/10] text-xl text-[var(--color-black)] font-semibold">
            <em>{makingDifferenceContent.mainPoint}</em>
          </p>

          <p className="[grid-area:28/1/38/9] md:[grid-area:11/10/20/18] text-[var(--color-black)] leading-relaxed">
            {makingDifferenceContent.description}
            <br />
            <br />
            {makingDifferenceContent.secondDescription}
          </p>

          <a
            href={makingDifferenceContent.buttonHref}
            className="[grid-area:38/1/40/9] md:[grid-area:21/2/23/18] self-start btn-primary"
          >
            {makingDifferenceContent.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
