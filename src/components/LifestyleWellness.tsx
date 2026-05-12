const FEATURES = [
  'Fully equipped gym with Technogym and a dedicated movement studio',
  'Infinity pool, children’s pool & 2 Jacuzzis',
  '2 glass-enclosed padel courts',
  'Landscaped amenity deck with sweeping views of the city skyline and iconic Burj Khalifa',
];

export default function LifestyleWellness() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* full-bleed background image with subtle dark overlay */}
      <div className="relative h-[780px] w-full">
        <img
          src="/images/gym.svg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/5 backdrop-blur-[1px]" />
      </div>

      {/* Heading section */}
      <div className="relative w-full bg-[rgba(212,189,156,0.33)] py-24">
        <div className="mx-auto max-w-[1440px] px-16">
          <div className="flex items-start justify-between">
            {/* heading */}
            <div className="font-display text-[64px] leading-[1.0] uppercase">
              <p>A lifestyle designed</p>
              <p className="pl-[310px]">around you</p>
            </div>

            {/* short description right side */}
            <p className="mt-8 max-w-[305px] text-[16px] text-ink leading-relaxed">
              City Tower offers a hospitality-driven residential experience,
              combining essential residential services with curated lifestyle
              and concierge offerings.
            </p>
          </div>

          {/* Lifestyle & wellness sub-block */}
          <div className="mt-20 grid grid-cols-12 gap-8">
            <div className="col-span-5 col-start-7">
              <p className="font-display text-[48px] leading-tight uppercase text-fade-sand">
                Lifestyle &amp;
                <br />
                <span className="pl-[110px] inline-block">wellness</span>
              </p>

              <p className="mt-6 mb-4 text-[12px] uppercase tracking-wider text-ink/70">
                Everyday convenience
              </p>

              <ul className="mt-4 flex flex-col gap-5">
                {FEATURES.map((feature, i) => (
                  <li
                    key={feature}
                    className="border-t border-ink/15 pt-5 text-[16px] text-ink leading-relaxed"
                  >
                    <span className="text-ink/50 mr-3 text-[12px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
