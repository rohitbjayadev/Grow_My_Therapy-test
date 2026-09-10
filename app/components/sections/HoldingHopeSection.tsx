import Image from 'next/image';
import { holdingHopeContent, conejoPurposeContent } from '@/app/lib/constants';

export function HoldingHopeSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-light-accent)' }} className="w-full py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(29,auto)] gap-x-5 gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(17,auto)] md:gap-y-6">
          <h2 className="[grid-area:1/1/5/9] md:[grid-area:4/2/8/15] text-4xl md:text-5xl font-bold leading-tight text-[var(--color-black)]">
            {holdingHopeContent.heading}
          </h2>

          <div className="[grid-area:5/1/13/9] md:[grid-area:9/2/16/9] space-y-4">
            <p className="text-xl text-[var(--color-black)] font-semibold">
              <em>{conejoPurposeContent.heading}</em>
            </p>
            <p className="text-[var(--color-black)] leading-relaxed">{conejoPurposeContent.description}</p>
          </div>

          <div className="[grid-area:22/1/29/9] md:[grid-area:9/9/17/16] text-[var(--color-black)] leading-relaxed self-start">
            {conejoPurposeContent.furtherDescription}
          </div>

          <div className="relative [grid-area:14/1/21/9] md:[grid-area:1/18/17/26] md:-mr-[4vw] h-72 md:h-auto overflow-hidden rounded-lg md:rounded-none">
            <Image src="/patient.png" alt="A client reflecting quietly in a therapy session" fill sizes="(max-width: 768px) 90vw, 35vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
