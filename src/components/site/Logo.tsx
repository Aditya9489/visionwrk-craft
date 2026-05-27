export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`serif text-xl tracking-tight ${className}`}>
      <span className="italic">V</span>isionwrk
      <span className="ml-1 align-super text-[8px] tracking-[0.3em] not-italic" style={{ fontFamily: "var(--font-mono)" }}>
        ®
      </span>
    </span>
  );
}
