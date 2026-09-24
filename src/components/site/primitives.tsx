import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { track } from "@/lib/tracking";

export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  tone?: "white" | "surface" | "navy" | "navy-deep";
  className?: string;
  children: ReactNode;
}) {
  const tones = {
    white: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    navy: "bg-navy text-white",
    "navy-deep": "bg-navy-deep text-white",
  } as const;

  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-24", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={cn("label-tech mb-3 flex items-center gap-3", dark ? "text-teal" : "text-teal")}>
      <span className="h-px w-8 bg-teal" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  dark,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "text-3xl md:text-5xl",
        dark ? "text-white" : "text-navy-deep",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lead({
  children,
  dark,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
        dark ? "text-white/75" : "text-technical",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Navy panel with contour-line treatment — used instead of stock photography. */
export function TechnicalPanel({
  label,
  icon,
  className,
  ratio = "aspect-[4/3]",
  priority = false,
}: {
  label: string;
  icon?: ReactNode;
  className?: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      data-priority={priority ? "true" : undefined}
      className={cn(
        "panel-technical flex flex-col items-center justify-center gap-4 border border-white/10 text-center",
        ratio,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "var(--texture-grid)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative text-teal">{icon}</div>
      <span className="label-tech relative px-4 text-white/55">{label}</span>
    </div>
  );
}

export function QuoteLink({
  children,
  location,
  variant = "solid",
  className,
}: {
  children: ReactNode;
  location: string;
  variant?: "solid" | "outline" | "ghost-dark";
  className?: string;
}) {
  const variants = {
    solid: "bg-teal text-white hover:bg-teal/90",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    "ghost-dark": "border-2 border-white/40 text-white hover:bg-white hover:text-navy",
  } as const;

  return (
    <a
      href="#cotizacion"
      onClick={() => track("click_quote", { cta_location: location })}
      className={cn(
        "label-tech inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-sm transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
