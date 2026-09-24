import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Eyebrow, SectionTitle, Lead } from "./primitives";

export const FAQS = [
  {
    q: "¿Qué incluye un levantamiento topográfico?",
    a: "El servicio de levantamiento topográfico incluye la obtención de datos precisos del terreno con equipos GNSS RTK y estación total, la planimetría con linderos y construcciones existentes, curvas de nivel y coordenadas UTM, entregados en planos CAD/DWG junto con la memoria descriptiva y el reporte fotográfico.",
  },
  {
    q: "¿Para qué sirve la planimetría de un terreno?",
    a: "La planimetría representa gráficamente linderos, construcciones existentes y elementos relevantes del terreno. Es la base de la topografía para construcción: permite conocer la superficie real disponible y diseñar con información confiable.",
  },
  {
    q: "¿Cuándo necesito curvas de nivel?",
    a: "Cuando el terreno presenta desniveles o cuando el diseño requiere análisis altimétrico. Las curvas de nivel permiten modelar el comportamiento del terreno para análisis, diseño y proyección, y optimizar movimientos de tierra.",
  },
  {
    q: "¿Qué información necesito para solicitar una cotización?",
    a: "Con tus datos de contacto, el servicio requerido, la ubicación del proyecto y una breve descripción es suficiente para orientarte. Si cuentas con documentación previa del predio, ayuda a precisar el alcance.",
  },
  {
    q: "¿Qué entregables puedo recibir después de un levantamiento?",
    a: "Planos topográficos en CAD/DWG, planimetría y altimetría, curvas de nivel, coordenadas UTM, memoria descriptiva y reporte fotográfico; además, secciones y perfiles o modelos digitales de terreno cuando el proyecto lo requiere.",
  },
  {
    q: "¿PJ Ingeniería puede apoyar durante la construcción?",
    a: "Sí. Damos apoyo en obra con replanteo topográfico de ejes, niveles y referencias, control de obra, verificación de elementos y levantamiento as-built de la obra terminada.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="surface">
      <Eyebrow>Preguntas frecuentes</Eyebrow>
      <SectionTitle>Resolvemos tus dudas antes de cotizar</SectionTitle>
      <Lead>Información clara sobre alcances, entregables y apoyo en obra.</Lead>

      <Accordion type="single" collapsible className="mt-8 max-w-3xl border-t border-border">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`} className="border-b border-border">
            <AccordionTrigger className="py-5 text-left font-display text-lg font-bold uppercase leading-tight text-navy-deep hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-technical">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
