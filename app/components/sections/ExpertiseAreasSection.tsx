import { expertiseTags } from '@/app/lib/constants';
import type { CSSProperties } from 'react';

export function ExpertiseAreasSection() {
  return (
    <section className="w-full bg-[var(--color-white)] py-12 md:py-20">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(27,auto)] gap-x-[11px] gap-y-3 md:grid-cols-24 md:grid-rows-[repeat(12,auto)] md:gap-y-6">
          <h3 className="[grid-area:1/1/3/9] md:[grid-area:1/2/4/8] text-3xl md:text-4xl font-bold">
            My areas of <em className="accent-script">expertise</em>
          </h3>

          {expertiseTags.map((tag, idx) => {
            const mRowStart = idx * 2 + 4;
            const col = idx < 6 ? 0 : 1;
            const rowInCol = idx % 6;
            const style = {
              '--m-r1': mRowStart,
              '--m-r2': mRowStart + 2,
              '--d-r1': rowInCol * 2 + 1,
              '--d-r2': rowInCol * 2 + 3,
              '--d-c1': col === 0 ? 9 : 17,
              '--d-c2': col === 0 ? 17 : 25,
            } as CSSProperties;
            const isAndMore = tag.label === 'and more..';
            const wordClassName = `inline-block text-xl italic pb-1 transition hover:opacity-70 ${
              isAndMore ? '' : 'border-b'
            }`;
            const wordStyle = {
              fontFamily: "'Cormorant Infant', serif",
              color: 'var(--color-black)',
              borderColor: 'var(--color-stone)',
            };
            return (
              <div
                key={tag.label}
                style={style}
                className="[grid-row:var(--m-r1)/var(--m-r2)] [grid-column:1/9] md:[grid-row:var(--d-r1)/var(--d-r2)] md:[grid-column:var(--d-c1)/var(--d-c2)] flex items-end pb-2"
              >
                {tag.href ? (
                  <a href={tag.href} className={wordClassName} style={wordStyle}>
                    {tag.label}
                  </a>
                ) : (
                  <span className={wordClassName} style={wordStyle}>
                    {tag.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
