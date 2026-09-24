import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import {
  Nosotros,
  Servicios,
  Proceso,
  Entregables,
  Construccion,
  Tecnologia,
  Clientes,
  PorQue,
} from "@/components/site/sections";
import { ProjectsCarousel } from "@/components/site/projects-carousel";
import { Faq, FAQS } from "@/components/site/faq";
import { QuoteForm } from "@/components/site/quote-form";
import { WhatsAppWidget } from "@/components/site/whatsapp";
import { SiteFooter } from "@/components/site/footer";
import { CONTACT } from "@/lib/tracking";

const TITLE = "Servicios de Ingeniería, Topografía y Construcción | PJ Ingeniería";
const DESCRIPTION =
  "Servicios de ingeniería, levantamientos topográficos, planimetría, proyectos ejecutivos y apoyo en construcción. Solicita una cotización con PJ Ingeniería.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#organization",
      name: "PJ Ingeniería",
      description: DESCRIPTION,
      email: CONTACT.email,
      telephone: CONTACT.phoneTel,
    },
    {
      "@type": "ProfessionalService",
      "@id": "#service",
      name: "PJ Ingeniería",
      description:
        "Levantamiento topográfico, planimetría, curvas de nivel, replanteo, planos CAD, proyectos ejecutivos, ingeniería civil y apoyo en construcción.",
      email: CONTACT.email,
      telephone: CONTACT.phoneTel,
      areaServed: "MX",
    },
    {
      "@type": "WebSite",
      "@id": "#website",
      name: "PJ Ingeniería",
      inLanguage: "es-MX",
      publisher: { "@id": "#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:site_name", content: "PJ Ingeniería" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Proceso />
        <Entregables />
        <Construccion />
        <ProjectsCarousel />
        <Tecnologia />
        <Clientes />
        <PorQue />
        <Faq />
        <QuoteForm />
      </main>
      <SiteFooter />
      <WhatsAppWidget />
    </div>
  );
}
