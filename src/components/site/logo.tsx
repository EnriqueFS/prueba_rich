import { cn } from "@/lib/utils";

/**
 * PLACEHOLDER — el archivo de logo oficial de PJ Ingeniería aún no está disponible.
 * Cuando llegue el PNG/SVG oficial, reemplaza este bloque por:
 *   <img src={logo} alt="PJ Ingeniería" className="h-10 w-auto" />
 * No recrear ni reinterpretar el logo.
 */
export function LogoPlaceholder({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "label-tech inline-flex min-h-11 items-center border border-dashed px-3 py-2 text-[11px] leading-tight",
        dark ? "border-white/40 text-white/80" : "border-navy/40 text-navy",
        className,
      )}
    >
      [LOGO OFICIAL PJ INGENIERÍA]
    </span>
  );
}
