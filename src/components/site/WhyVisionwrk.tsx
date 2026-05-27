import { Reveal } from "./Reveal";

const pillars = [
  { t: "Custom-built systems", d: "Nothing off-the-shelf. Every workflow shaped to your operation." },
  { t: "Efficiency first", d: "We remove steps before we add software." },
  { t: "Modern AI integration", d: "LLMs woven into real business logic, not chat toys." },
  { t: "Personalised solutions", d: "A studio approach — small team, deep ownership." },
  { t: "Scalable workflows", d: "Designed to hold under volume, not just demos." },
  { t: "Minimal complexity", d: "You operate it on day one without a manual." },
];

export function WhyVisonwrk() {
  return (
    <section id="why" className="relative bg-[var(--color-ink)] py-32 text-[var(--color-bone)] md:py-48 grain">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow text-white/45">— Why Visonwrk</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              A quieter way to <span className="italic">build</span> the modern company.
            </h2>
            <p className="mt-8 max-w-md text-white/55">
              We don't sell tools. We assemble the invisible infrastructure that
              lets a small team behave like a much larger one.
            </p>
          </Reveal>

          <div className="md:col-span-7 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <div className="bg-[var(--color-ink)] p-8 h-full transition-colors hover:bg-white/[0.03]">
                  <p className="font-mono text-[11px] tracking-[0.22em] text-white/35">
                    0{i + 1}
                  </p>
                  <h3 className="mt-6 font-serif text-2xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
