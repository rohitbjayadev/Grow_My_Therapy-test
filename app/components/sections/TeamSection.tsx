import { teamContent } from '@/app/lib/constants';

export function TeamSection() {
  return (
    <section id="team" style={{ backgroundColor: 'var(--color-light-accent)' }} className="w-full py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(32,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(16,auto)] md:gap-x-5 md:gap-y-4">
          <div className="[grid-area:1/1/7/5] md:[grid-area:4/1/16/3] md:-ml-[4vw] h-48 md:h-auto overflow-hidden rounded-lg md:rounded-none">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg"
              alt="A person picking up seashells on a sandy beach."
              className="w-full h-full object-cover"
            />
          </div>

          <p className="[grid-area:8/1/10/9] md:[grid-area:1/5/3/15] eyebrow-text text-[var(--color-black)]">
            {teamContent.eyebrow}
          </p>

          <h2 className="[grid-area:10/1/13/9] md:[grid-area:4/5/8/15] text-4xl md:text-5xl font-bold text-[var(--color-black)]">
            Find a therapist who is the right fit for <em className="accent-script">you</em>.
          </h2>

          <div className="[grid-area:13/1/21/9] md:[grid-area:8/5/14/15] space-y-4">
            <p className="text-[var(--color-black)] leading-relaxed text-lg">{teamContent.paragraph}</p>
            <p className="text-[var(--color-black)] leading-relaxed text-lg">{teamContent.secondParagraph}</p>
          </div>

          <a
            href={teamContent.buttonHref}
            className="[grid-area:21/1/23/9] md:[grid-area:14/5/16/15] self-start btn-secondary"
          >
            {teamContent.buttonLabel}
          </a>

          <div className="[grid-area:24/1/32/9] md:[grid-area:1/17/16/26] md:-mr-[4vw] h-64 md:h-auto overflow-hidden rounded-lg md:rounded-none">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg"
              alt="A person in a striped dress pointing at shells on the sandy beach, with a child in blue shorts standing barefoot nearby."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
