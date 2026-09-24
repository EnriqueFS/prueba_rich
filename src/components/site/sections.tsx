import {
  Ruler,
  Map,
  Waves,
  Target,
  FileType2,
  Building2,
  ClipboardList,
  HardHat,
  Zap,
  Cog,
  Plug,
  FileSpreadsheet,
  FileText,
  Camera,
  LineChart,
  Layers,
  Compass,
  Boxes,
  Satellite,
  Plane,
  MonitorCog,
  Landmark,
  PencilRuler,
  Home,
  Factory,
  Check,
  Lightbulb,
  Gauge,
  PiggyBank,
  Crosshair,
  Timer,
  Users,
  Handshake,
} from "lucide-react";
import { Section, Eyebrow, SectionTitle, Lead, QuoteLink, TechnicalPanel } from "./primitives";

/* ------------------------------ QUIÉNES SOMOS ----------------------------- */

const ATTRS = [
  { icon: Crosshair, title: "Precisión", copy: "Datos exactos para decisiones seguras." },
  { icon: Timer, title: "Eficiencia", copy: "Procesos ágiles y entregas puntuales." },
  { icon: Users, title: "Experiencia", copy: "Equipo multidisciplinario en campo y gabinete." },
  { icon: Handshake, title: "Compromiso", copy: "Acompañamiento en cada etapa del proyecto." },
];

export function Nosotros() {
  return (
    <Section id="nosotros" tone="white">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="min-w-0">
          <Eyebrow>Quiénes somos</Eyebrow>
          <SectionTitle>Un equipo de ingeniería civil que trabaja desde el terreno</SectionTitle>
          <p className="mt-5 max-w-xl leading-relaxed text-technical">
            PJ Ingeniería es un equipo multidisciplinario mexicano que integra ingeniería civil,
            eléctrica, mecánica, topografía e instalaciones. Trabajamos con más de 8 años de
            experiencia combinada del equipo en proyectos de distintas escalas.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-technical">
            Cada levantamiento, plano y proyecto se desarrolla cumpliendo la normatividad vigente
            aplicable, para que la información con la que tomas decisiones sea precisa, confiable y
            lista para construir.
          </p>
        </div>
        <TechnicalPanel
          ratio="aspect-[4/3]"
          icon={<Compass className="size-12" aria-hidden="true" strokeWidth={1.25} />}
          label="[PLACEHOLDER FOTOGRAFÍA PJ]"
        />
      </div>

      <div className="mt-12 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {ATTRS.map(({ icon: Icon, title, copy }) => (
          <div key={title} className="border-b border-border py-6 pr-6 lg:border-b-0">
            <Icon className="size-5 text-teal" aria-hidden="true" />
            <h3 className="mt-3 text-xl text-navy-deep">{title}</h3>
            <p className="mt-1 text-sm leading-snug text-technical">{copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- SERVICIOS ------------------------------- */

const SERVICIOS = [
  {
    icon: Ruler,
    title: "Levantamiento topográfico",
    copy: "Obtención de datos precisos del terreno mediante equipos especializados.",
  },
  {
    icon: Map,
    title: "Planimetría de terreno",
    copy: "Representación gráfica de linderos, construcciones existentes y elementos relevantes.",
  },
  {
    icon: Waves,
    title: "Curvas de nivel",
    copy: "Modelado altimétrico del terreno para análisis, diseño y proyección.",
  },
  {
    icon: Target,
    title: "Replanteo en sitio",
    copy: "Trazado de ejes, niveles y puntos de referencia para garantizar una correcta ejecución.",
  },
  {
    icon: FileType2,
    title: "Planos CAD",
    copy: "Planos profesionales para integrarse a proyectos de arquitectura e ingeniería.",
  },
  {
    icon: Building2,
    title: "Propuesta arquitectónica en terreno",
    copy: "Análisis del terreno para desarrollar propuestas preliminares.",
  },
  {
    icon: ClipboardList,
    title: "Proyectos ejecutivos",
    copy: "Planos, memorias de cálculo, especificaciones, procedimientos y modelados.",
  },
  {
    icon: HardHat,
    title: "Ingeniería civil",
    copy: "Diseño estructural, cimentaciones, estudios y ejecución de obra.",
  },
];

const SERVICIOS_SEC = [
  { icon: Zap, title: "Ingeniería eléctrica", copy: "Diseño y revisión de instalaciones eléctricas del proyecto." },
  { icon: Cog, title: "Ingeniería mecánica", copy: "Soluciones mecánicas integradas al proyecto ejecutivo." },
  { icon: Plug, title: "Instalaciones industriales y residenciales", copy: "Instalaciones proyectadas y ejecutadas según normatividad." },
];

export function Servicios() {
  return (
    <Section id="servicios" tone="surface">
      <Eyebrow>Nuestros servicios</Eyebrow>
      <SectionTitle>Levantamiento topográfico e ingeniería civil en un solo equipo</SectionTitle>
      <Lead>
        Desde el servicio de levantamiento topográfico hasta el proyecto ejecutivo y la ejecución de
        obra, cubrimos cada etapa con información técnica verificable.
      </Lead>

      <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SERVICIOS.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="bg-background p-6 transition-colors hover:bg-white">
            <Icon className="size-6 text-teal" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-4 text-xl leading-tight text-navy-deep">{title}</h3>
            <p className="mt-2 text-sm leading-snug text-technical">{copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-px bg-border sm:grid-cols-3">
        {SERVICIOS_SEC.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="flex gap-3 bg-surface px-4 py-4">
            <Icon className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
            <div className="min-w-0">
              <h3 className="text-base text-navy-deep">{title}</h3>
              <p className="mt-1 text-sm leading-snug text-technical">{copy}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <QuoteLink location="servicios">Cotizar mi proyecto</QuoteLink>
      </div>
    </Section>
  );
}

/* --------------------------------- PROCESO -------------------------------- */

const PASOS = [
  { n: "01", title: "Levantamiento", copy: "Captura de datos en campo con equipos GNSS RTK y estación total." },
  { n: "02", title: "Planimetría", copy: "Representación gráfica de linderos y elementos del terreno." },
  { n: "03", title: "Curvas de nivel", copy: "Modelado altimétrico para entender el comportamiento del terreno." },
  { n: "04", title: "Análisis del terreno", copy: "Interpretación técnica de la información levantada." },
  { n: "05", title: "Propuesta arquitectónica", copy: "Esquema preliminar acorde a las condiciones reales del sitio." },
  { n: "06", title: "Proyecto ejecutivo", copy: "Planos, memorias y especificaciones listos para construir." },
];

const BENEFICIOS = [
  { icon: Crosshair, title: "Conocimiento preciso del terreno" },
  { icon: Lightbulb, title: "Mejores decisiones de diseño" },
  { icon: Gauge, title: "Optimización de recursos" },
  { icon: PiggyBank, title: "Ahorro de tiempo y costos" },
];

export function Proceso() {
  return (
    <Section id="proceso" tone="white">
      <Eyebrow>Proceso</Eyebrow>
      <SectionTitle>Del terreno a tu proyecto</SectionTitle>
      <Lead>Información precisa que se convierte en decisiones inteligentes.</Lead>

      <ol className="mt-10 grid gap-px bg-border md:grid-cols-3 lg:grid-cols-6">
        {PASOS.map((p) => (
          <li key={p.n} className="relative bg-background p-5">
            <span className="label-tech block text-teal">{p.n}</span>
            <h3 className="mt-2 text-lg leading-tight text-navy-deep">{p.title}</h3>
            <p className="mt-2 text-sm leading-snug text-technical">{p.copy}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFICIOS.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-start gap-3 border-l-2 border-teal pl-3">
            <Icon className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
            <p className="text-sm font-medium leading-snug text-navy-deep">{title}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <QuoteLink location="proceso" variant="outline">
          Necesito un levantamiento
        </QuoteLink>
      </div>
    </Section>
  );
}

/* ------------------------------- ENTREGABLES ------------------------------ */

const ENTREGABLES = [
  { icon: FileType2, title: "Planos topográficos en CAD/DWG" },
  { icon: Map, title: "Planimetría y altimetría" },
  { icon: Waves, title: "Curvas de nivel" },
  { icon: Satellite, title: "Coordenadas UTM" },
  { icon: FileText, title: "Memoria descriptiva" },
  { icon: Camera, title: "Reporte fotográfico" },
  { icon: LineChart, title: "Secciones y perfiles (cuando corresponda)" },
  { icon: Layers, title: "Modelos digitales de terreno (cuando corresponda)" },
];

export function Entregables() {
  return (
    <Section id="entregables" tone="surface">
      <Eyebrow>Entregables</Eyebrow>
      <SectionTitle>Información lista para trabajar</SectionTitle>
      <Lead>
        Cada levantamiento se entrega en formatos compatibles con tu flujo de diseño y ejecución.
      </Lead>

      <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {ENTREGABLES.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-start gap-3 bg-surface p-5">
            <Icon className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="text-base leading-tight text-navy-deep">{title}</h3>
          </div>
        ))}
      </div>

      <p className="label-tech mt-8 flex flex-wrap items-center gap-4 text-technical">
        <span className="inline-flex items-center gap-2">
          <FileType2 className="size-4" aria-hidden="true" /> DWG
        </span>
        <span className="inline-flex items-center gap-2">
          <FileText className="size-4" aria-hidden="true" /> PDF
        </span>
        <span className="inline-flex items-center gap-2">
          <FileSpreadsheet className="size-4" aria-hidden="true" /> XLSX
        </span>
        <span className="inline-flex items-center gap-2">
          <Boxes className="size-4" aria-hidden="true" /> MDT
        </span>
      </p>
    </Section>
  );
}

/* --------------------------- APOYO EN CONSTRUCCIÓN ------------------------ */

const CONSTRUCCION = [
  { icon: Target, title: "Replanteo de ejes", copy: "Trazo en sitio conforme al proyecto autorizado." },
  { icon: Ruler, title: "Niveles y referencias", copy: "Bancos de nivel y referencias para toda la obra." },
  { icon: ClipboardList, title: "Control de obra", copy: "Verificación topográfica durante el proceso constructivo." },
  { icon: Check, title: "Verificación de elementos", copy: "Comprobación de posición y geometría de elementos." },
  { icon: Landmark, title: "As-built / obra terminada", copy: "Levantamiento final de lo realmente construido." },
];

export function Construccion() {
  return (
    <Section id="construccion" tone="navy">
      <Eyebrow dark>Apoyo en construcción</Eyebrow>
      <SectionTitle dark>Precisión también durante la construcción</SectionTitle>
      <Lead dark>
        Control de obra y replanteo topográfico para garantizar que tu obra se construya conforme al
        proyecto.
      </Lead>

      <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
        {CONSTRUCCION.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="bg-navy p-5">
            <Icon className="size-6 text-teal" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-4 text-lg leading-tight text-white">{title}</h3>
            <p className="mt-2 text-sm leading-snug text-white/65">{copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <QuoteLink location="construccion" variant="ghost-dark">
          Cotizar apoyo para mi obra
        </QuoteLink>
      </div>
    </Section>
  );
}

/* ------------------------------- TECNOLOGÍA ------------------------------- */

const TECNOLOGIA = [
  { icon: Satellite, title: "Equipos GNSS RTK", copy: "Base y rover para posicionamiento de alta exactitud." },
  { icon: Ruler, title: "Estaciones totales electrónicas", copy: "Medición angular y de distancia en campo." },
  { icon: Plane, title: "Drones para fotogrametría", copy: "Cobertura aérea para superficies y ortomosaicos." },
  {
    icon: MonitorCog,
    title: "Software especializado",
    copy: "Civil 3D, AutoCAD, ArcGIS, STAAD Pro y Revit / Revit MEP.",
  },
];

export function Tecnologia() {
  return (
    <Section id="tecnologia" tone="white">
      <Eyebrow>Tecnología y equipo</Eyebrow>
      <SectionTitle>Tecnología que respalda la precisión</SectionTitle>
      <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {TECNOLOGIA.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="bg-background p-6">
            <Icon className="size-7 text-teal" aria-hidden="true" strokeWidth={1.25} />
            <h3 className="mt-4 text-xl leading-tight text-navy-deep">{title}</h3>
            <p className="mt-2 text-sm leading-snug text-technical">{copy}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------- PARA QUIÉN TRABAJAMOS ----------------------- */

const CLIENTES = [
  { icon: HardHat, title: "Constructoras" },
  { icon: PencilRuler, title: "Despachos de arquitectura e ingeniería" },
  { icon: Building2, title: "Desarrolladores inmobiliarios" },
  { icon: Home, title: "Particulares" },
  { icon: Factory, title: "Industria y comercio" },
];

export function Clientes() {
  return (
    <Section id="clientes" tone="surface">
      <Eyebrow>Para quién trabajamos</Eyebrow>
      <SectionTitle>Topografía para construcción a cualquier escala</SectionTitle>
      <Lead>
        Nos adaptamos a proyectos de diferentes escalas, desde terrenos particulares hasta
        desarrollos de mayor complejidad.
      </Lead>

      <div className="mt-10 grid grid-cols-2 gap-px bg-border lg:grid-cols-5">
        {CLIENTES.map(({ icon: Icon, title }) => (
          <div key={title} className="flex flex-col items-start gap-3 bg-surface p-5">
            <Icon className="size-6 text-teal" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="text-base leading-tight text-navy-deep">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- POR QUÉ PJ ------------------------------- */

const RAZONES = [
  "Servicios integrales: ingeniería, topografía y construcción en un solo equipo.",
  "Información precisa y confiable.",
  "Entregables profesionales.",
  "Experiencia multidisciplinaria: equipo con más de 8 años combinados.",
  "Atención personalizada.",
  "Cumplimiento de normatividad vigente aplicable (NOM, RCDF, DRO/CSE según corresponda).",
  "Tecnología especializada.",
];

export function PorQue() {
  return (
    <Section id="por-que" tone="navy">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="min-w-0">
          <Eyebrow dark>Por qué PJ Ingeniería</Eyebrow>
          <SectionTitle dark>Razones para trabajar con nosotros</SectionTitle>
          <ul className="mt-8 space-y-3">
            {RAZONES.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-white/85 md:text-base">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <TechnicalPanel
          ratio="aspect-[4/3]"
          icon={<Building2 className="size-12" aria-hidden="true" strokeWidth={1.25} />}
          label="[PLACEHOLDER FOTOGRAFÍA PJ]"
          className="border-white/15"
        />
      </div>
    </Section>
  );
}
