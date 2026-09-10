import Image from 'next/image';
import { whoWeHelpContent } from '@/app/lib/constants';
import { ImagePlaceholder } from '@/app/components/ImagePlaceholder';

const areas = [
  { imgArea: '[grid-area:4/1/13/9] md:[grid-area:4/4/15/11]', textArea: '[grid-area:14/1/20/9] md:[grid-area:16/4/21/11]' },
  { imgArea: '[grid-area:21/1/30/9] md:[grid-area:4/11/15/18]', textArea: '[grid-area:31/1/37/9] md:[grid-area:16/11/22/18]' },
  { imgArea: '[grid-area:38/1/47/9] md:[grid-area:4/18/15/25]', textArea: '[grid-area:48/1/54/9] md:[grid-area:16/18/22/25]' },
];

export function WhoWeHelpSection() {
  const clientGroups = [
    {
      title: whoWeHelpContent.adults.title,
      href: whoWeHelpContent.adults.href,
      description: whoWeHelpContent.adults.description,
      image: '/working-professionals.png',
    },
    {
      title: whoWeHelpContent.couples.title,
      href: whoWeHelpContent.couples.href,
      description: whoWeHelpContent.couples.description,
      image: '/trauma_survivors.png',
    },
    {
      title: whoWeHelpContent.childrenTeens.title,
      href: whoWeHelpContent.childrenTeens.href,
      description: whoWeHelpContent.childrenTeens.description,
      image: '/entreprenour.png',
    },
  ];

  return (
    <section id="about" className="w-full bg-[var(--color-white)] py-12 md:py-20">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <div className="grid grid-cols-8 grid-rows-[repeat(53,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(21,auto)] md:gap-x-5 md:gap-y-6">
          <h2 className="[grid-area:1/1/3/9] text-4xl md:text-5xl font-bold">
            Who I <em className="accent-script">help</em>
          </h2>

          {clientGroups.map((group, idx) =>
            group.image ? (
              <div key={group.title} className={`relative ${areas[idx].imgArea} h-56 md:h-72 overflow-hidden rounded-lg`}>
                <Image src={group.image} alt={group.title} fill className="object-cover" />
              </div>
            ) : (
              <ImagePlaceholder key={group.title} className={`${areas[idx].imgArea} h-56 md:h-72 rounded-lg`} />
            )
          )}
          {clientGroups.map((group, idx) => (
            <div key={group.title + '-text'} className={`${areas[idx].textArea} space-y-2`}>
              <h4 className="text-xl md:text-2xl font-semibold text-[var(--color-black)]">
                {group.href ? (
                  <a href={group.href} className="hover:opacity-70 transition">
                    {group.title}
                  </a>
                ) : (
                  group.title
                )}
              </h4>
              <p className="text-[var(--color-black)] leading-relaxed">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
