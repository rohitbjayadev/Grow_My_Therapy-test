import Link from 'next/link';
import Image from 'next/image';
import {
  companyInfo,
  contactInfo,
  footerNavLinks,
  footerTeamLinks,
  footerLegalLinks,
  gettingStartedContent,
} from '@/app/lib/constants';

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw] py-12 md:py-16">
        <div className="grid grid-cols-8 grid-rows-[repeat(30,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(9,auto)] md:gap-x-5 md:gap-y-4">
          <Image
            src={companyInfo.logo}
            alt={companyInfo.name}
            width={220}
            height={110}
            className="[grid-area:2/1/5/9] md:[grid-area:1/1/5/8] h-auto w-[160px] self-start"
          />

          <p className="[grid-area:5/1/10/9] md:[grid-area:4/1/9/9] text-[var(--color-black)] leading-relaxed self-start">
            {gettingStartedContent.paragraph}
          </p>

          <div className="[grid-area:10/2/15/8] md:[grid-area:1/11/6/15] space-y-3">
            <h3 className="text-xl font-bold text-[var(--color-black)] italic">Navigate</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--color-black)] hover:opacity-70 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="[grid-area:23/2/30/8] md:[grid-area:1/15/10/20] space-y-3">
            <h3 className="text-xl font-bold text-[var(--color-black)] italic">Our Team</h3>
            <ul className="space-y-2">
              {footerTeamLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--color-black)] hover:opacity-70 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="[grid-area:15/2/23/8] md:[grid-area:1/20/10/25] space-y-3">
            <h3 className="text-xl font-bold text-[var(--color-black)] italic">Contact</h3>
            <div className="space-y-1 text-[var(--color-black)]">
              <p>{contactInfo.addressLine1}</p>
              <p>{contactInfo.addressLine2}</p>
              <p>{contactInfo.addressLine3}</p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:opacity-70 transition">
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a href={contactInfo.phoneHref} className="hover:opacity-70 transition">
                  {contactInfo.phone}
                </a>
              </p>
              <p className="italic pt-2">{contactInfo.serviceAreas}</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--color-dark-accent)' }}>
        <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw] py-4">
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-center text-xs text-white">
            {footerLegalLinks.map((link) => (
              <span key={link.href} className="flex items-center gap-2">
                <Link href={link.href} className="hover:opacity-70 transition">
                  {link.label}
                </Link>
                <span aria-hidden="true">|</span>
              </span>
            ))}
            <span>
              Website by{' '}
              <a href="https://walkerstrategyco.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition">
                Walker Strategy Co.
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
