const UNIT_SIZES: Array<{ label: string; size: string }> = [
  { label: 'Studio', size: '420 – 667 ft²' },
  { label: '1-Bedroom', size: '785 – 1777 ft²' },
  { label: '2-Bedrooms', size: '1497 – 2336 ft²' },
  { label: '3-Bedrooms', size: '1626 – 3476 ft²' },
  { label: '4-Bedrooms', size: '2863 – 3692 ft²' },
];

export default function SpaceToLive() {
  return (
    <section className="relative w-full bg-[rgba(212,189,156,0.33)]">
      <div className="relative mx-auto max-w-[1440px] px-16 py-32">
        {/* heading */}
        <div className="font-display text-[64px] leading-[1.0] uppercase mb-12">
          <p>Space to live,</p>
          <p className="pl-[110px]">work and</p>
          <p className="pl-[55px]">grow</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left: sofa interior with badge */}
          <div className="col-span-6 relative">
            <img
              src="/images/interior-sofa.svg"
              alt="Furnished apartment living area"
              className="h-[628px] w-full rounded-sm object-cover"
            />
            {/* circular studio badge overlapping bottom-left */}
            <img
              src="/images/studio-badge.svg"
              alt="Studio to 4-bedrooms badge"
              className="absolute -bottom-12 left-12 h-[150px] w-[150px] rounded-full"
            />
          </div>

          {/* Right: skyline + description + unit table */}
          <div className="col-span-6 flex flex-col gap-8">
            <img
              src="/images/skyline.svg"
              alt="City skyline view from City Tower"
              className="h-[628px] w-full rounded-sm object-cover"
            />
          </div>
        </div>

        {/* Below grid: description + table */}
        <div className="grid grid-cols-12 gap-8 mt-12">
          <div className="col-start-7 col-span-6 flex flex-col gap-6">
            <p className="text-[16px] text-ink leading-relaxed max-w-[440px]">
              City Tower&rsquo;s 695 residences range from spacious studios and
              apartments to expansive duplexes and four-bedroom penthouses, all
              designed to support modern living.
            </p>
            <p className="font-display uppercase text-[20px] tracking-wider">
              Studio to 4-Bedrooms
            </p>
            <dl className="flex flex-col">
              {UNIT_SIZES.map((unit) => (
                <div
                  key={unit.label}
                  className="flex items-center justify-between border-t border-ink/15 py-5 text-[16px]"
                >
                  <dt className="font-light">{unit.label}</dt>
                  <dd className="font-normal">{unit.size}</dd>
                </div>
              ))}
              <div className="border-b border-ink/15" />
            </dl>

            <p className="max-w-[420px] text-[16px] text-ink leading-relaxed">
              Residences are thoughtfully designed to support working lives and
              family living, while preserving privacy and balance. With
              expansive layouts larger than typical Dubai apartments, these
              intuitive spaces provide room to work, live and grow comfortably
              over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
