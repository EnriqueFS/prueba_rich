import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de privacidad | PJ Ingeniería" },
      {
        name: "description",
        content: "Aviso de privacidad de PJ Ingeniería. Documento pendiente de publicación.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Aviso de privacidad | PJ Ingeniería" },
      {
        property: "og:description",
        content: "Aviso de privacidad de PJ Ingeniería. Documento pendiente de publicación.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
    ],
    links: [{ rel: "canonical", href: "/aviso-de-privacidad" }],
  }),
  component: Aviso,
});

function Aviso() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5 py-20">
      <h1 className="text-4xl text-navy-deep">Aviso de privacidad</h1>
      <p className="label-tech mt-4 text-teal">[INFORMACIÓN PENDIENTE]</p>
      <p className="mt-4 leading-relaxed text-technical">
        El aviso de privacidad de PJ Ingeniería aún no está publicado. En cuanto se proporcione el
        texto legal definitivo, se integrará en esta página.
      </p>
      <Link
        to="/"
        className="label-tech mt-8 inline-flex min-h-11 w-fit items-center border-2 border-navy px-6 text-sm text-navy hover:bg-navy hover:text-white"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
