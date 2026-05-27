import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="text-white" />
            <p className="mt-6 max-w-sm text-sm text-white/55">
              A studio building quiet, custom AI automation systems for modern
              businesses.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.22em] uppercase text-white/40">
              hello@visionwrk.com
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-white/40">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#why" className="hover:text-white">Why Visionwrk</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#founder" className="hover:text-white">Founder</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-white/40">Elsewhere</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#contact" className="hover:text-white">Book a Call →</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.22em] text-white/35 md:flex-row md:items-center">
          <p>© MMXXV Visionwrk — All rights reserved.</p>
          <p>Studio · Remote / India</p>
        </div>
      </div>
    </footer>
  );
}
