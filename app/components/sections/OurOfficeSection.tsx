import Image from 'next/image';
import { ourOfficeContent } from '@/app/lib/constants';

export function OurOfficeSection() {
  return (
    <section id="office" style={{ backgroundColor: 'var(--color-light-accent)' }} className="w-full py-16 md:py-24">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <p className="eyebrow-text text-[var(--color-black)]">{ourOfficeContent.eyebrow}</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-black)]">
              {ourOfficeContent.heading}
            </h2>

            <p className="text-[var(--color-black)] leading-relaxed text-lg max-w-md">
              {ourOfficeContent.description}
            </p>

            <ul className="flex flex-wrap gap-3">
              {ourOfficeContent.details.map((detail) => (
                <li
                  key={detail.label}
                  style={{ borderColor: 'var(--color-stone)', backgroundColor: 'var(--color-white)' }}
                  className="text-sm font-semibold px-4 py-2 rounded-full border text-[var(--color-black)]"
                >
                  {detail.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
            <div className="relative h-56 md:h-96 rounded-lg overflow-hidden mt-8 md:mt-12">
              <Image src="/office1.jpeg" alt="Dr. Reynolds' therapy office in Santa Monica" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover" />
            </div>
            <div className="relative h-56 md:h-96 rounded-lg overflow-hidden">
              <Image src="/office2.jpeg" alt="Seating area in Dr. Reynolds' therapy office" fill sizes="(max-width: 768px) 45vw, 25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
