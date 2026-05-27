export function Logo({ className = "" }: { className?: string; invert?: boolean }) {
  return (
    <span className={`serif text-xl md:text-2xl tracking-tight ${className}`}>
      <span className="font-medium">Vison</span>
      <span className="italic font-light">wrk.</span>
    </span>
  );
}
