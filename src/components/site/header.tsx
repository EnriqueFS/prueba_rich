import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoPlaceholder } from "./logo";
import { track, WHATSAPP_URL } from "@/lib/tracking";

const NAV = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#cotizacion" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled ? "border-b border-navy/10 bg-background shadow-sm" : "bg-background",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 md:px-8">
        <a href="#inicio" className="flex min-w-0 items-center" aria-label="PJ Ingeniería — inicio">
          <LogoPlaceholder />
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="label-tech text-[13px] text-navy transition-colors hover:text-teal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp", { location: "header" })}
            aria-label="Hablar por WhatsApp"
            className="inline-flex size-11 items-center justify-center border border-navy/20 text-navy transition-colors hover:bg-navy hover:text-white lg:hidden"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
          </a>

          <a
            href="#cotizacion"
            onClick={() => track("click_quote", { cta_location: "header" })}
            className="label-tech hidden min-h-11 items-center bg-teal px-5 text-[13px] text-white transition-colors hover:bg-teal/90 md:inline-flex"
          >
            Solicitar cotización
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex size-11 items-center justify-center border border-navy/20 text-navy lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navegación móvil"
          className="border-t border-navy/10 bg-background lg:hidden"
        >
          <ul className="mx-auto w-full max-w-6xl px-5 py-2">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-navy/5 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label-tech flex min-h-12 items-center text-[13px] text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#cotizacion"
                onClick={() => {
                  setOpen(false);
                  track("click_quote", { cta_location: "mobile_menu" });
                }}
                className="label-tech flex min-h-12 items-center justify-center bg-teal text-[13px] text-white"
              >
                Solicitar cotización
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
