import {
  companyInfo,
  contactInfo,
  footerNavLinks,
  footerSpecialtyLinks,
  gettingStartedContent,
} from '@/app/lib/constants';

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw] py-12 md:py-16">
        <div className="grid grid-cols-8 grid-rows-[repeat(30,auto)] gap-x-[11px] gap-y-4 md:grid-cols-24 md:grid-rows-[repeat(9,auto)] md:gap-x-5 md:gap-y-4">
          <div className="[grid-area:2/1/5/9] md:[grid-area:1/1/5/8] self-start">
            <span style={{ fontFamily: "'Cormorant Infant', serif" }} className="block text-2xl font-bold text-[var(--color-black)]">
              {companyInfo.name}
            </span>
            <span className="eyebrow-text block text-[var(--color-dark-accent)]">{companyInfo.title}</span>
          </div>

          <p className="[grid-area:5/1/10/9] md:[grid-area:4/1/9/9] text-[var(--color-black)] leading-relaxed self-start">
            {gettingStartedContent.paragraph}
          </p>

          <div className="[grid-area:10/2/15/8] md:[grid-area:1/11/6/15] space-y-3">
            <h3 className="text-xl font-bold text-[var(--color-black)] italic">Navigate</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[var(--color-black)] hover:opacity-70 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="[grid-area:23/2/30/8] md:[grid-area:1/15/10/20] space-y-3">
            <h3 className="text-xl font-bold text-[var(--color-black)] italic">Specialties</h3>
            <ul className="space-y-2">
              {footerSpecialtyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[var(--color-black)] hover:opacity-70 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="[grid-area:15/2/23/8] md:[grid-area:1/20/10/25] space-y-3">
            <h3 className="text-xl font-bold text-[var(--color-black)] italic">Contact</h3>
            <div className="space-y-1 text-[var(--color-black)]">
              <p>{contactInfo.addressLine1}</p>
              <p>{contactInfo.addressLine2}</p>
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

      <div style={{ backgroundColor: 'var(--color-black)' }}>
        <div className="max-w-[1500px] mx-auto px-[6vw] md:px-[4vw] py-4">
          <div className="flex justify-center items-center text-center text-xs text-white">
            <span>&copy; {new Date().getFullYear()} {companyInfo.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
