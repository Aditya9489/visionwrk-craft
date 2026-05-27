import { Reveal } from "./Reveal";

const quotes = [
  {
    q: "Their lead system gave us back roughly twelve hours a week. Conversions are up — the inbox is quieter.",
    n: "Operations Lead",
    c: "Wellness Studio · Bangalore",
  },
  {
    q: "Felt less like hiring an agency and more like adding a quiet ops partner who actually understood the workflow.",
    n: "Founder",
    c: "D2C Brand · Mumbai",
  },
  {
    q: "Clean, considered, and shipped on time. No bloat. The system simply works.",
    n: "Managing Partner",
    c: "Consulting Firm · Delhi",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-[var(--color-bone)] py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">— Field notes</p>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl">
                What clients <span className="italic">say</span>.
              </h2>
            </div>
            <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              003 selected
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.n} delay={i * 120}>
              <figure className="flex h-full flex-col justify-between bg-[var(--color-bone)] p-10">
                <blockquote className="font-serif text-2xl leading-[1.25] tracking-[-0.01em]">
                  &ldquo;{q.q}&rdquo;
                </blockquote>
                <figcaption className="mt-10 border-t border-foreground/15 pt-6">
                  <p className="text-sm">{q.n}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {q.c}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
