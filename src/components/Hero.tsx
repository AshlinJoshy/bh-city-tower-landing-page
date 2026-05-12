import Img from './Img';

export default function Hero() {
  return (
    <section id="top" className="relative w-full bg-ink text-white overflow-hidden">
      <div className="relative mx-auto h-[848px] max-w-[1440px]">
        {/* dark background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0707] via-ink to-[#160202]" />

        {/* cloud overlay (left) */}
        <Img
          src="/images/hero-cloud"
          aria-hidden
          className="absolute -left-[105px] top-[420px] w-[905px] h-[540px] object-cover mix-blend-screen opacity-40"
        />

        {/* main tower (centered, behind heading) */}
        <Img
          src="/images/hero-tower"
          aria-hidden
          className="absolute left-1/2 top-[180px] -translate-x-1/2 w-[635px] h-[652px] object-cover"
        />

        {/* second tower (right) */}
        <Img
          src="/images/hero-tower-2"
          aria-hidden
          className="absolute left-[882px] top-[440px] w-[759px] h-[614px] object-cover mix-blend-luminosity opacity-70"
        />

        {/* eyebrow heading */}
        <div className="absolute left-16 top-[80px] z-10">
          <p className="font-display text-[14px] uppercase tracking-[0.3em] text-white/80">
            City Tower
          </p>
        </div>

        {/* huge heading top - "MOMENTS FROM THE CITY, MINUTES TO HOME" */}
        <h1 className="absolute left-16 top-[136px] z-10 max-w-[1100px] font-display text-[64px] leading-[1.0] uppercase text-fade-light">
          Moments from the city,
          <br />
          minutes to home
        </h1>

        {/* "Check the view" pill - top right of image */}
        <div className="absolute right-[120px] top-[360px] z-10 flex items-center gap-2 rounded-full border border-white/20 bg-white/80 backdrop-blur-md px-4 py-2 text-ink">
          <span className="inline-block h-[10px] w-[10px] rounded-full bg-ink" />
          <span className="text-[14px]">Check the view</span>
        </div>

        {/* sub headline + CTA, lower-center */}
        <div className="absolute left-1/2 top-[700px] z-10 -translate-x-1/2 flex flex-col items-center gap-6">
          <a
            href="#register"
            className="inline-flex h-[38px] w-[197px] items-center justify-center rounded-full bg-ink/90 backdrop-blur-md text-[16px] text-white"
          >
            Register your interest
          </a>
        </div>
      </div>
    </section>
  );
}
