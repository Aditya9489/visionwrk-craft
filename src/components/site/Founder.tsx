import founder from "@/assets/founder.jpg";
import { Reveal } from "./Reveal";

export function Founder() {
  return (
    <section id="founder" className="relative bg-card py-32 md:py-48">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground">
            <img
              src={founder}
              alt="Adi, founder of Visonwrk"
              width={896}
              height={1120}
              loading="lazy"
              className="h-full w-full object-cover object-center grayscale contrast-110"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
                Founder · Visonwrk
              </p>
              <p className="mt-1 font-serif text-2xl">Adi</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="md:col-span-7 flex flex-col justify-center">
          <p className="eyebrow">— About the founder</p>
          <h2 className="mt-6 font-serif text-3xl leading-[1.15] md:text-5xl tracking-[-0.02em]">
            "Most businesses don't need more software.
            <br />
            <span className="italic text-muted-foreground">
              They need fewer steps."
            </span>
          </h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-foreground/75">
            Founded by <span className="text-foreground">Adi</span>, a student at
            NIT Kurukshetra with experience in media marketing and digital
            content creation. Having previously run a successful YouTube channel,
            he combines creative strategy with technical automation systems to
            help businesses modernize and scale efficiently.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground/15 pt-8 max-w-lg">
            <div>
              <p className="font-serif text-3xl">NIT</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Kurukshetra
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl italic">Media</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                + Marketing
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl">AI</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Automation
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
