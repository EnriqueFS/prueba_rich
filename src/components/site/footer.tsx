import { Mail, Phone } from "lucide-react";
import { LogoPlaceholder } from "./logo";
import { track, CONTACT } from "@/lib/tracking";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-12 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-3 md:px-8">
        <div>
          <LogoPlaceholder dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Servicios de ingeniería, topografía y construcción. Precisión en cada punto, valor en
            cada proyecto.
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <h2 className="text-lg text-white">Secciones</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {[
              ["Servicios", "#servicios"],
              ["Proceso", "#proceso"],
              ["Proyectos", "#proyectos"],
              ["Nosotros", "#nosotros"],
              ["Preguntas frecuentes", "#faq"],
              ["Cotización", "#cotizacion"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-teal">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg text-white">Contacto</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                onClick={() => track("click_phone", { location: "footer" })}
                className="inline-flex items-center gap-2 hover:text-teal"
              >
                <Phone className="size-4" aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                onClick={() => track("click_email", { location: "footer" })}
                className="inline-flex items-center gap-2 hover:text-teal"
              >
                <Mail className="size-4" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href="/aviso-de-privacidad" className="hover:text-teal">
                Aviso de privacidad{" "}
                <span className="label-tech text-[10px] text-white/40">[PENDIENTE]</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-5 pt-6 md:px-8">
        <p className="label-tech text-[11px] text-white/40">
          © {new Date().getFullYear()} PJ Ingeniería
        </p>
      </div>
    </footer>
  );
}
