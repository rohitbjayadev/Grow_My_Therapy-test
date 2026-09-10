import Image from 'next/image';
import { worthyPlaceContent } from '@/app/lib/constants';

export function WorthyPlaceSection() {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden">
      <Image
        src="/background.png"
        alt=""
        fill
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-black)', opacity: 0.35 }} />
      <div className="relative max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <h2
          style={{ color: 'var(--color-white)' }}
          className="max-w-2xl text-3xl md:text-5xl font-bold leading-tight text-center md:text-left"
        >
          {worthyPlaceContent.heading} <em className="font-semibold">{worthyPlaceContent.subheading}</em>
        </h2>
      </div>
    </section>
  );
}
