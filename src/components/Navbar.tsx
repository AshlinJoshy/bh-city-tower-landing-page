import Img from './Img';

const NAV_LINKS = [
  'Buy',
  'Rent',
  'Commercial',
  'Off-Plan',
  'Luxury',
  'International',
  'Services',
  'Insights',
  'About',
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(237,232,228,0.6)] backdrop-blur-md">
      <div className="mx-auto flex h-[87px] max-w-[1440px] items-center justify-between px-16 pb-[22px] pt-4">
        <a href="#top" className="flex items-center">
          <Img
            src="/images/bh-logo-dark"
            alt="bh-homes"
            className="h-[30px] w-[221px]"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-[16px] text-ink">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#register"
          className="inline-flex h-[50px] w-[203px] items-center justify-center rounded-full bg-ink text-white text-[16px] hover:opacity-90 transition-opacity"
        >
          Register your interest
        </a>
      </div>
    </header>
  );
}
