export function HonoringSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(13,auto)] gap-x-[11px] gap-y-6 md:grid-cols-24 md:grid-rows-[repeat(14,auto)] md:gap-x-5">
          <div className="[grid-area:1/1/10/10] md:[grid-area:1/1/15/15] md:-ml-[4vw] h-64 md:h-auto overflow-hidden rounded-lg md:rounded-none">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/6f1501bf-74a5-4c57-a957-8ce4c5876848/Jennifer+A+-+Images+%285%29.jpg"
              alt="Family of four standing on a beach, holding hands, facing the ocean at sunset."
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="[grid-area:10/1/14/9] md:[grid-area:9/15/15/25] self-end text-3xl md:text-4xl font-bold leading-tight text-[var(--color-black)]">
            Honoring where you&apos;ve been <em className="accent-script">&amp;</em> helping shape where you&apos;re headed.
          </h2>
        </div>
      </div>
    </section>
  );
}
