import { worthyPlaceContent } from '@/app/lib/constants';

export function WorthyPlaceSection() {
  return (
    <section className="relative w-full py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/54" />
      </div>
      <div className="relative max-w-[1500px] mx-auto px-[6vw] md:px-[4vw]">
        <h2
          style={{ color: 'var(--color-light-accent)' }}
          className="max-w-2xl text-3xl md:text-5xl font-bold leading-tight text-center md:text-left"
        >
          {worthyPlaceContent.heading} <em className="font-semibold">{worthyPlaceContent.subheading}</em>
        </h2>
      </div>
    </section>
  );
}
