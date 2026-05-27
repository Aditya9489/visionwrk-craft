import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-ink)] py-40 text-[var(--color-bone)] md:py-56 grain">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-white/45">— The invitation</p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="mt-10 font-serif text-[44px] leading-[1.02] md:text-[96px] lg:text-[120px] tracking-[-0.025em]">
            Build systems
            <br />
            that work <span className="italic text-white/80">while you sleep.</span>
          </h2>
        </Reveal>
        <Reveal delay={350}>
          <a
            href="mailto:hello@visionwrk.com"
            className="mt-16 inline-flex items-center gap-4 bg-white px-9 py-5 text-[11px] uppercase tracking-[0.24em] text-black hover:bg-white/90 transition-colors"
          >
            Schedule a Consultation
            <span>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
