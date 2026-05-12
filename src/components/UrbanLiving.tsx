export default function UrbanLiving() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative mx-auto max-w-[1440px] px-16 py-32">
        <div className="grid grid-cols-12 gap-8">
          {/* Left: copy block */}
          <div className="col-span-7 flex flex-col gap-12">
            {/* sub-headline */}
            <p className="max-w-[420px] text-[24px] leading-snug text-ink font-light">
              Studios to four-bedroom penthouses. Move-in from June 2026.
            </p>

            {/* big display heading */}
            <div className="font-display text-[64px] leading-[1.0] uppercase">
              <p>
                Urban living,
              </p>
              <p className="pl-[120px]">reimagined</p>
            </div>

            {/* paragraphs with progressive fade for the lower lines */}
            <div className="flex max-w-[505px] flex-col gap-[22px] text-[16px] leading-relaxed">
              <p className="text-ink">
                City Tower brings a calmer pace to urban living in one of
                Dubai&rsquo;s most desirable locations &ndash; Sheikh Zayed
                Road.
              </p>
              <p className="text-ink/60 blur-[1.5px]">
                The striking 93-story building offers 695 stunning residences,
                ranging from spacious studios to four-bedroom penthouses. City
                Tower&rsquo;s hospitality-driven services and unparalleled
                amenities create a truly distinctive living experience.
              </p>
              <p className="text-ink/30 blur-[1.5px]">
                Designed for residents with fast-paced lifestyles, City
                Tower&rsquo;s vertical neighborhood offers unmatched
                convenience, giving back precious hours each week.
              </p>
              <p className="text-ink/20 blur-[1.5px]">
                A home for those who value city proximity and effortless
                routines, where time is life&rsquo;s most precious asset.
              </p>
            </div>
          </div>

          {/* Right: stacked dining-area images with connecting vertical line */}
          <div className="col-span-5 relative">
            {/* vertical line that connects the images */}
            <div
              aria-hidden
              className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/15"
            />
            <div className="relative flex flex-col gap-[70px]">
              <img
                src="/images/dining-3.svg"
                alt="Dining area detail"
                className="h-[138px] w-full rounded-sm object-cover"
              />
              <img
                src="/images/dining-1.svg"
                alt="Dining area"
                className="h-[356px] w-full rounded-sm object-cover"
              />
              <img
                src="/images/dining-2.svg"
                alt="Dining area"
                className="h-[356px] w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
