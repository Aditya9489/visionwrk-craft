import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Lead Follow-Up System",
    tag: "Service · 01",
    price: "Custom",
    points: [
      "WhatsApp + Email follow-ups",
      "CRM integration",
      "Smart reminders & lead scoring",
      "Reporting dashboard",
    ],
  },
  {
    name: "Business Automation Systems",
    tag: "Service · 02",
    price: "Custom",
    points: [
      "Workflow discovery & mapping",
      "Bespoke AI workflows",
      "Internal & customer-facing flows",
      "Ongoing optimisation",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">— Engagement</p>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-[-0.02em]">
                Pricing, <span className="italic text-muted-foreground">on request.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Visionwrk is currently in its early growth phase. All clients receive
              a <span className="text-foreground">two-week free trial</span> period on
              both services.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <div className="group flex h-full flex-col justify-between bg-background p-10 md:p-12 transition-colors hover:bg-[var(--color-bone)]">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground">
                    {t.tag}
                  </p>
                  <h3 className="mt-8 font-serif text-3xl md:text-4xl">{t.name}</h3>
                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="font-serif text-5xl italic">{t.price}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Pricing
                    </span>
                  </div>
                  <ul className="mt-10 space-y-3">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-foreground/80">
                        <span className="inline-block h-px w-5 bg-foreground/40" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="mt-12 inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-[11px] uppercase tracking-[0.22em] hover:gap-5 transition-all"
                >
                  Book a Discovery Call →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Pricing depends on workflow complexity and business requirements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
