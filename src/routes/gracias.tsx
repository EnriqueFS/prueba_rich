import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/tracking";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title: "Gracias por tu solicitud | PJ Ingeniería" },
      {
        name: "description",
        content:
          "Recibimos tu solicitud de cotización de servicios de ingeniería, topografía y construcción. Te contactaremos a la brevedad.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Gracias por tu solicitud | PJ Ingeniería" },
      {
        property: "og:description",
        content: "Recibimos tu solicitud de cotización. Te contactaremos a la brevedad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
    ],
    links: [{ rel: "canonical", href: "/gracias" }],
  }),
  component: Gracias,
});

function Gracias() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-navy px-5 text-center text-white">
      <div className="max-w-md">
        <Check className="mx-auto size-12 text-teal" aria-hidden="true" />
        <h1 className="mt-6 text-4xl">Gracias por tu solicitud</h1>
        <p className="mt-4 text-white/75">
          Un ingeniero de PJ Ingeniería revisará tu proyecto y te contactará a la brevedad.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-tech inline-flex min-h-12 items-center justify-center bg-teal px-6 text-sm text-white"
          >
            Hablar por WhatsApp
          </a>
          <Link
            to="/"
            className="label-tech inline-flex min-h-12 items-center justify-center border-2 border-white/40 px-6 text-sm text-white hover:bg-white hover:text-navy"
          >
            Volver al inicio
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/50">
          {CONTACT.phoneDisplay} · {CONTACT.email}
        </p>
      </div>
    </main>
  );
}
