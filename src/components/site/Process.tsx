import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discovery Call", d: "We listen first. Understand the business, the bottleneck, the ambition." },
  { n: "02", t: "Workflow Analysis", d: "Every manual step mapped. Every redundancy identified." },
  { n: "03", t: "System Development", d: "Bespoke AI workflows engineered and tested against your data." },
  { n: "04", t: "Deployment & Support", d: "Quiet rollout, hands-on calibration, ongoing iteration." },
];

export function Process() {
  return (
    <section id="process" className="relative bg-background py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">— Process</p>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl md:text-6xl tracking-[-0.02em]">
            A measured path from <span className="italic">conversation</span> to deployment.
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-border md:block" />
          <div className="grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="relative">
                  <div className="relative z-10 mb-6 flex h-[84px] items-center">
                    <div className="flex h-3 w-3 items-center justify-center bg-background">
                      <span className="h-2 w-2 rounded-full bg-foreground" />
                    </div>
                    <span className="ml-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      Step {s.n}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
