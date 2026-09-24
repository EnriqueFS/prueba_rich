import { MessageCircle, Crosshair, Timer, Users, Handshake, Mountain } from "lucide-react";
import { track, WHATSAPP_URL } from "@/lib/tracking";
import { TechnicalPanel } from "./primitives";

export const ATTRIBUTES = [
  { icon: Crosshair, title: "Precisión", copy: "Datos exactos para decisiones seguras." },
  { icon: Timer, title: "Eficiencia", copy: "Procesos ágiles y entregas puntuales." },
  { icon: Users, title: "Experiencia", copy: "Equipo multidisciplinario en campo y gabinete." },
  { icon: Handshake, title: "Compromiso", copy: "Acompañamiento en cada etapa del proyecto." },
];

export function Hero() {
  return (
    <section id="inicio" className="relative bg-navy pt-24 text-white md:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{ backgroundImage: "var(--texture-contour)" }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 md:px-8 md:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-w-0">
            <p className="label-tech mb-4 flex items-center gap-3 text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              PJ Ingeniería
            </p>
            <h1 className="text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
              Servicios de Ingeniería, Topografía y Construcción
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Precisión técnica para tomar mejores decisiones desde el terreno hasta la ejecución de
              tu proyecto.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#cotizacion"
                onClick={() => track("click_quote", { cta_location: "hero" })}
                className="label-tech inline-flex min-h-12 items-center justify-center bg-teal px-7 text-sm text-white transition-colors hover:bg-teal/90"
              >
                Solicitar cotización
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_whatsapp", { location: "hero" })}
                className="label-tech inline-flex min-h-12 items-center justify-center gap-2 border-2 border-white/40 px-7 text-sm text-white transition-colors hover:bg-white hover:text-navy"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <TechnicalPanel
              priority
              ratio="aspect-[4/3]"
              icon={<Mountain className="size-12" aria-hidden="true" strokeWidth={1.25} />}
              label="[PLACEHOLDER FOTOGRAFÍA PJ]"
              className="border-white/15"
            />
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy-deep">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4 md:px-8">
          {ATTRIBUTES.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="flex min-w-0 flex-col gap-2 py-6 md:py-7">
              <Icon className="size-5 text-teal" aria-hidden="true" />
              <p className="font-display text-lg font-bold uppercase text-white">{title}</p>
              <p className="text-sm leading-snug text-white/60">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
