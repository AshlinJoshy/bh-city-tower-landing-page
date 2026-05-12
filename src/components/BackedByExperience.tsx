import Img from './Img';

export default function BackedByExperience() {
  return (
    <section className="relative w-full bg-ink text-white overflow-hidden">
      {/* background interior image with low opacity */}
      <Img
        src="/images/interior-dark"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity"
      />

      <div className="relative mx-auto max-w-[1440px] px-16 py-32">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column: heading + section label */}
          <div className="col-span-7">
            <p className="text-[16px] text-white mb-12">/ 04</p>
            <div className="font-display text-[64px] leading-[1.05] uppercase text-fade-sand">
              <p>Backed by</p>
              <p className="pl-[88px]">experience,</p>
              <p className="pl-[44px]">designed for</p>
              <p className="pl-[176px]">living</p>
            </div>
          </div>

          {/* Right column: small inset image */}
          <div className="col-span-3 col-start-10 flex justify-end">
            <Img
              src="/images/experience-small"
              aria-hidden
              className="h-[400px] w-[320px] rounded-sm object-cover"
            />
          </div>
        </div>

        {/* Lower row: small image + credit text */}
        <div className="mt-20 grid grid-cols-12 gap-8">
          {/* small left image */}
          <div className="col-span-4 col-start-1">
            <Img
              src="/images/lifestyle-detail"
              aria-hidden
              className="h-[430px] w-full rounded-sm object-cover"
            />
          </div>

          {/* credit text on the right */}
          <div className="col-span-5 col-start-7 flex flex-col gap-4 self-end">
            <p className="text-[16px] text-white">
              Owned by The Galleria Investments.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[16px] text-white">Developed by</span>
              <span className="inline-flex h-6 items-center text-[16px] font-medium text-white">
                galleria
              </span>
            </div>
            <p className="text-[16px] text-white max-w-[420px]">
              City Tower makes everyday life effortless and friction free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
