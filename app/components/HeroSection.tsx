import { heroSectionContent } from '@/app/lib/constants';

export function HeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-light-accent)' }} className="w-full py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(24,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(18,auto)] md:gap-y-4">
          <div className="[grid-area:15/1/24/7] md:[grid-area:2/1/17/9] md:-ml-[4vw] h-64 md:h-full overflow-hidden rounded-sm">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg"
              alt="family therapy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="[grid-area:18/8/24/9] md:[grid-area:7/24/17/25] h-40 md:h-full overflow-hidden rounded-sm">
            <img
              src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg"
              alt="child therapy"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="[grid-area:2/1/5/9] md:[grid-area:2/11/4/19] eyebrow-text text-center md:text-left text-[var(--color-black)]">
            {heroSectionContent.eyebrow}
          </p>

          <div className="[grid-area:5/1/12/9] md:[grid-area:7/11/15/23] space-y-6">
            <h1 style={{ fontFamily: "'Cormorant Infant', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2 }} className="text-[var(--color-black)]">
              Rebuild your foundation on solid ground and finally begin to{' '}
              <em className="accent-script">thrive</em>.
            </h1>
            <p style={{ fontFamily: "'Muli', sans-serif", fontSize: '1rem', lineHeight: 1.7 }} className="text-[var(--color-black)]">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          <a
            href="/contact"
            className="[grid-area:12/1/14/9] md:[grid-area:15/11/17/23] self-start btn-primary"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
