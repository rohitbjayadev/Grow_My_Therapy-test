import Image from 'next/image';
import { teamContent } from '@/app/lib/constants';

export function TeamSection() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/beach-view.png" alt="Woman sitting on the beach at sunset in Santa Monica" fill sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--color-white) 0%, var(--color-white) 35%, color-mix(in srgb, var(--color-white) 55%, transparent) 55%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-[6vw] md:px-[4vw] py-16 md:py-28">
        <div className="max-w-lg space-y-4">
          <p className="eyebrow-text text-[var(--color-black)]">{teamContent.eyebrow}</p>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-black)]">
            {teamContent.heading}
          </h2>

          <div className="space-y-4">
            <p className="text-[var(--color-black)] leading-relaxed text-lg">{teamContent.paragraph}</p>
            <p className="text-[var(--color-black)] leading-relaxed text-lg">{teamContent.secondParagraph}</p>
          </div>

          <a href={teamContent.buttonHref} className="inline-block btn-secondary">
            {teamContent.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
