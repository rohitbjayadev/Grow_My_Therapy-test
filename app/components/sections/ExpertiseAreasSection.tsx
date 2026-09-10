import Link from 'next/link';
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
            const content = (
              <span className="text-lg font-bold italic" style={{ color: 'var(--color-black)' }}>
                {tag.label}
              </span>
            );
            return (
              <div
                key={tag.label}
                style={style}
                className="[grid-row:var(--m-r1)/var(--m-r2)] [grid-column:1/9] md:[grid-row:var(--d-r1)/var(--d-r2)] md:[grid-column:var(--d-c1)/var(--d-c2)] border-b pb-2 flex items-end"
              >
                {tag.href ? (
                  <Link href={tag.href} className="hover:opacity-70 transition">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
