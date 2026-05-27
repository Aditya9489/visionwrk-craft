import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[var(--color-ink)] text-[var(--color-bone)] grain">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pb-16 pt-32 md:px-10 md:pt-40">
        <div>
          <Reveal>
            <p className="eyebrow text-white/60">— Visonwrk · AI Automation Studio</p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-10 max-w-5xl font-serif text-[44px] leading-[1.02] tracking-[-0.02em] md:text-[88px] lg:text-[104px]">
              Automating Business.
              <br />
              <span className="italic text-white/85">Elevating</span> Growth.
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              AI-powered automation systems designed to reduce manual workload,
              improve lead conversion, and streamline operations for modern
              businesses.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-black transition-all hover:bg-white/90"
              >
                Book a Free Consultation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white/90 hover:bg-white/5 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={700}>
          <div className="mt-20 flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-8 text-white/60">
            <div className="max-w-xs">
              <p className="eyebrow text-white/40">Index 001</p>
              <p className="mt-2 text-sm">
                A studio practice for businesses that prefer systems over noise.
              </p>
            </div>
            <div className="flex items-center gap-10 text-[11px] uppercase tracking-[0.22em]">
              <div>
                <p className="text-white/35">Est.</p>
                <p className="mt-1 text-white">MMXXV</p>
              </div>
              <div>
                <p className="text-white/35">Based</p>
                <p className="mt-1 text-white">Remote / India</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-white/35">Focus</p>
                <p className="mt-1 text-white">AI · Ops · Growth</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
