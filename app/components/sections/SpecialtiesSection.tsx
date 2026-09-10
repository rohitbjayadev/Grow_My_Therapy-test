import { specialties } from '@/app/lib/constants';

const gridAreas = [
  '[grid-area:6/1/15/9] md:[grid-area:4/10/13/17]',
  '[grid-area:16/1/25/9] md:[grid-area:15/10/24/17]',
  '[grid-area:26/1/35/9] md:[grid-area:4/18/13/25]',
  '[grid-area:36/1/44/9] md:[grid-area:15/18/24/25]',
];

export function SpecialtiesSection() {
  return (
    <section id="specialties" className="w-full bg-[var(--color-white)] py-12 md:py-20">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(44,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(25,auto)] md:gap-x-5 md:gap-y-6">
          <h3 className="[grid-area:3/1/5/9] md:[grid-area:3/2/7/9] text-3xl md:text-4xl font-bold">
            My <em className="accent-script">specialties</em> include…
          </h3>

          {specialties.map((specialty, idx) => (
            <div
              key={specialty.title}
              style={{ backgroundColor: 'var(--color-light-accent)', borderColor: 'var(--color-stone)' }}
              className={`${gridAreas[idx]} space-y-3 p-6 rounded-lg border`}
            >
              <h4 className="text-xl font-bold text-[var(--color-black)]">{specialty.title}</h4>
              <p className="text-[var(--color-black)] leading-relaxed">{specialty.desc}</p>
              <a href={specialty.href} className="btn-primary">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
