const LOCATION_PILLS = [
  '5-minute walk to Emirates Towers Metro',
  'Quick links to DIFC and Downtown',
  '15 minutes to Dubai International Airport (DXB)',
  'Direct access to Sheikh Zayed Road and Jumeirah Garden City',
];

export default function YourCity() {
  return (
    <section className="relative w-full bg-ink text-white overflow-hidden">
      {/* background night cityscape */}
      <img
        src="/images/city-night.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      {/* subtle radial darkening */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(33,3,2,0) 0%, rgba(33,3,2,0.7) 80%)',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-16 py-28">
        <div className="grid grid-cols-12 gap-8">
          {/* Left: headline + pills */}
          <div className="col-span-7 flex flex-col">
            <h2 className="font-display text-[64px] leading-[1.0] uppercase text-fade-light">
              Your city,
              <br />
              <span className="pl-[170px] inline-block">within</span>
              <br />
              <span className="pl-[78px] inline-block">minutes</span>
            </h2>

            <p className="mt-10 max-w-[350px] text-[16px] text-white leading-relaxed">
              Situated along Sheikh Zayed Road, City Tower is located in one of
              Dubai&rsquo;s most connected corridors, between DIFC, Downtown,
              and Jumeirah, and prominently situated alongside the city&rsquo;s
              iconic landmarks.
            </p>

            <ul className="mt-10 flex flex-col items-start gap-3">
              {LOCATION_PILLS.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full bg-white/15 backdrop-blur-md px-5 py-2 text-[16px] text-white"
                >
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: moon/sphere graphic */}
          <div className="col-span-4 col-start-9 relative flex items-start justify-center pt-12">
            <img
              src="/images/moon.svg"
              alt=""
              aria-hidden
              className="h-[150px] w-[130px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
