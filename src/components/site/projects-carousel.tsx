import { useCallback, useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Section, Eyebrow, SectionTitle, Lead } from "./primitives";
import { track, WHATSAPP_URL } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export type ProjectCard = {
  id: string;
  /** Reemplazar por la ruta real (webp/avif + srcset) cuando exista la fotografía. */
  image?: { src: string; srcSet?: string; alt: string };
  name: string;
  service: string;
  location: string;
  description: string;
};

const PENDING = "[INFORMACIÓN PENDIENTE]";

/** Actualiza este arreglo cuando lleguen los proyectos reales. */
export const PROJECTS: ProjectCard[] = Array.from({ length: 8 }, (_, i) => ({
  id: `proyecto-pendiente-${i + 1}`,
  name: PENDING,
  service: PENDING,
  location: PENDING,
  description: PENDING,
}));

export function ProjectsCarousel({ items = PROJECTS }: { items?: ProjectCard[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    const onPointer = () => track("carousel_interaction", { method: "swipe" });
    api.on("select", onSelect);
    api.on("pointerUp", onPointer);
    return () => {
      api.off("select", onSelect);
      api.off("pointerUp", onPointer);
    };
  }, [api]);

  const goTo = useCallback(
    (i: number) => {
      api?.scrollTo(i);
      track("carousel_interaction", { method: "dot", index: i });
    },
    [api],
  );

  return (
    <Section id="proyectos" tone="white">
      <Eyebrow>Evidencia</Eyebrow>
      <SectionTitle>Proyectos que hablan por nuestro trabajo</SectionTitle>
      <Lead>Conoce algunos de los trabajos realizados por nuestro equipo.</Lead>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: false }}
        className="mt-10"
        aria-label="Carrusel de proyectos"
      >
        <CarouselContent className="-ml-4">
          {items.map((p, i) => (
            <CarouselItem key={p.id} className="basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3">
              <article className="h-full border border-border bg-background">
                {p.image ? (
                  <img
                    src={p.image.src}
                    srcSet={p.image.srcSet}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                    alt={p.image.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`[IMAGEN PROYECTO] — proyecto de topografía e ingeniería ${i + 1}, imagen pendiente`}
                    className="panel-technical flex aspect-[4/3] w-full flex-col items-center justify-center gap-3"
                  >
                    <ImageIcon className="size-9 text-teal" aria-hidden="true" strokeWidth={1.25} />
                    <span className="label-tech px-4 text-center text-[11px] text-white/55">
                      [IMAGEN PROYECTO]
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg leading-tight text-navy-deep">{p.name}</h3>
                  <p className="label-tech mt-2 text-[11px] text-teal">{p.service}</p>
                  <p className="label-tech mt-1 text-[11px] text-technical">{p.location}</p>
                  <p className="mt-3 text-sm leading-snug text-technical">{p.description}</p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Ir al proyecto">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === selected}
                aria-label={`Proyecto ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 w-6 transition-colors",
                  i === selected ? "bg-teal" : "bg-border hover:bg-technical/50",
                )}
              />
            ))}
          </div>
          <div className="hidden gap-2 sm:flex">
            <CarouselPrevious
              className="static size-11 translate-y-0 rounded-none border-navy/20 text-navy"
              onClick={() => track("carousel_interaction", { method: "arrow_prev" })}
            />
            <CarouselNext
              className="static size-11 translate-y-0 rounded-none border-navy/20 text-navy"
              onClick={() => track("carousel_interaction", { method: "arrow_next" })}
            />
          </div>
        </div>
      </Carousel>

      <div className="mt-10">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_whatsapp", { location: "proyectos" })}
          className="label-tech inline-flex min-h-11 items-center justify-center border-2 border-navy px-6 text-sm text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Hablar con un ingeniero
        </a>
      </div>
    </Section>
  );
}
