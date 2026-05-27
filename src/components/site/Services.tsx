import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    title: "Lead Follow-Up System",
    blurb:
      "An AI-powered system that automatically follows up with potential customers through WhatsApp and email — reducing manual workload while improving response rates and lead conversion.",
    features: [
      "WhatsApp follow-ups",
      "Email automation",
      "CRM integration",
      "Smart reminders",
      "Lead tracking",
      "Reduced manual effort",
    ],
  },
  {
    no: "02",
    title: "Custom Business Automation",
    blurb:
      "Tailor-made automation systems engineered around your specific workflow and operational needs — from internal task pipelines to customer-facing automations.",
    features: [
      "CRM automation",
      "AI workflows",
      "Internal task automation",
      "Customer support systems",
      "Appointment automation",
      "Process optimization",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">— Services</p>
            <h2 className="mt-6 text-4xl leading-[1.05] md:text-5xl">
              Two systems.
              <br />
              <span className="italic text-muted-foreground">Engineered to compound.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Every engagement begins with a discovery call. From there we map,
              prototype, and deploy quietly — so the work shows in your numbers,
              not your inbox.
            </p>
          </Reveal>

          <div className="md:col-span-8 space-y-px bg-border">
            {services.map((s, i) => (
              <Reveal key={s.no} delay={i * 120}>
                <article className="group relative bg-background p-8 md:p-12 transition-colors hover:bg-[var(--color-bone)]">
                  <div className="flex items-baseline justify-between gap-6">
                    <p className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground">
                      / {s.no}
                    </p>
                    <span className="h-px flex-1 bg-border" />
                    <span className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground">
                      Service
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-3xl md:text-[44px] tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                    {s.blurb}
                  </p>

                  <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-[13px] text-foreground/80"
                      >
                        <span className="inline-block h-px w-4 bg-foreground/40" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
