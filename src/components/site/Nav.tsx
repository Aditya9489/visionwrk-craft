import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Visonwrk" },
  { href: "#pricing", label: "Pricing" },
  { href: "#founder", label: "Founder" },
  { href: "#process", label: "Process" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" aria-label="Visonwrk home"><Logo /></a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-foreground px-4 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
