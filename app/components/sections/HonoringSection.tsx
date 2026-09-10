import Image from 'next/image';

export function HonoringSection() {
  return (
    <section className="w-full bg-[var(--color-white)] py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(13,auto)] gap-x-[11px] gap-y-6 md:grid-cols-24 md:grid-rows-[repeat(14,auto)] md:gap-x-5">
          <div className="relative [grid-area:1/1/10/10] md:[grid-area:1/1/15/15] md:-ml-[4vw] aspect-[3/2] w-full overflow-hidden rounded-lg md:rounded-none">
            <Image src="/sea.png" alt="Woman looking out at the sea at sunset" fill sizes="(max-width: 768px) 95vw, 55vw" className="object-cover" />
          </div>
          <h2 className="[grid-area:10/1/14/9] md:[grid-area:9/15/15/25] self-end text-3xl md:text-4xl font-bold leading-tight text-[var(--color-black)]">
            Structured enough to feel supportive, with space for reflection and{' '}
            <em className="accent-script">depth</em>.
          </h2>
        </div>
      </div>
    </section>
  );
}
