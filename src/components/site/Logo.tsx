import logo from "@/assets/logo.png";

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logo}
      alt="Visonwrk"
      className={`h-7 w-auto md:h-8 ${invert ? "invert" : ""} ${className}`}
    />
  );
}
