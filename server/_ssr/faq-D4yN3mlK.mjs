import { n as __toESM } from "../_runtime.mjs";
import { a as Trigger2, h as require_react, i as Root2, m as require_jsx_runtime, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as track } from "./tracking-BHoxOpT_.mjs";
import { L as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-D4yN3mlK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Section({ id, tone = "white", className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("scroll-mt-20 py-16 md:py-24", {
			white: "bg-background text-foreground",
			surface: "bg-surface text-foreground",
			navy: "bg-navy text-white",
			"navy-deep": "bg-navy-deep text-white"
		}[tone], className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-6xl px-5 md:px-8",
			children
		})
	});
}
function Eyebrow({ children, dark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("label-tech mb-3 flex items-center gap-3", dark ? "text-teal" : "text-teal"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-px w-8 bg-teal",
			"aria-hidden": "true"
		}), children]
	});
}
function SectionTitle({ children, dark, as: Tag = "h2", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		className: cn("text-3xl md:text-5xl", dark ? "text-white" : "text-navy-deep", className),
		children
	});
}
function Lead({ children, dark, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("mt-4 max-w-2xl text-base leading-relaxed md:text-lg", dark ? "text-white/75" : "text-technical", className),
		children
	});
}
/** Navy panel with contour-line treatment — used instead of stock photography. */
function TechnicalPanel({ label, icon, className, ratio = "aspect-[4/3]", priority = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "img",
		"aria-label": label,
		"data-priority": priority ? "true" : void 0,
		className: cn("panel-technical flex flex-col items-center justify-center gap-4 border border-white/10 text-center", ratio, className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 opacity-40",
				style: {
					backgroundImage: "var(--texture-grid)",
					backgroundSize: "48px 48px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative text-teal",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "label-tech relative px-4 text-white/55",
				children: label
			})
		]
	});
}
function QuoteLink({ children, location, variant = "solid", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "#cotizacion",
		onClick: () => track("click_quote", { cta_location: location }),
		className: cn("label-tech inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 text-sm transition-colors", {
			solid: "bg-teal text-white hover:bg-teal/90",
			outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
			"ghost-dark": "border-2 border-white/40 text-white hover:bg-white hover:text-navy"
		}[variant], className),
		children
	});
}
var FAQS = [
	{
		q: "¿Qué incluye un levantamiento topográfico?",
		a: "El servicio de levantamiento topográfico incluye la obtención de datos precisos del terreno con equipos GNSS RTK y estación total, la planimetría con linderos y construcciones existentes, curvas de nivel y coordenadas UTM, entregados en planos CAD/DWG junto con la memoria descriptiva y el reporte fotográfico."
	},
	{
		q: "¿Para qué sirve la planimetría de un terreno?",
		a: "La planimetría representa gráficamente linderos, construcciones existentes y elementos relevantes del terreno. Es la base de la topografía para construcción: permite conocer la superficie real disponible y diseñar con información confiable."
	},
	{
		q: "¿Cuándo necesito curvas de nivel?",
		a: "Cuando el terreno presenta desniveles o cuando el diseño requiere análisis altimétrico. Las curvas de nivel permiten modelar el comportamiento del terreno para análisis, diseño y proyección, y optimizar movimientos de tierra."
	},
	{
		q: "¿Qué información necesito para solicitar una cotización?",
		a: "Con tus datos de contacto, el servicio requerido, la ubicación del proyecto y una breve descripción es suficiente para orientarte. Si cuentas con documentación previa del predio, ayuda a precisar el alcance."
	},
	{
		q: "¿Qué entregables puedo recibir después de un levantamiento?",
		a: "Planos topográficos en CAD/DWG, planimetría y altimetría, curvas de nivel, coordenadas UTM, memoria descriptiva y reporte fotográfico; además, secciones y perfiles o modelos digitales de terreno cuando el proyecto lo requiere."
	},
	{
		q: "¿PJ Ingeniería puede apoyar durante la construcción?",
		a: "Sí. Damos apoyo en obra con replanteo topográfico de ejes, niveles y referencias, control de obra, verificación de elementos y levantamiento as-built de la obra terminada."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "faq",
		tone: "surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Preguntas frecuentes" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Resolvemos tus dudas antes de cotizar" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Información clara sobre alcances, entregables y apoyo en obra." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-8 max-w-3xl border-t border-border",
				children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `faq-${i}`,
					className: "border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-5 text-left font-display text-lg font-bold uppercase leading-tight text-navy-deep hover:no-underline",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-5 text-sm leading-relaxed text-technical",
						children: f.a
					})]
				}, f.q))
			})
		]
	});
}
//#endregion
export { QuoteLink as a, TechnicalPanel as c, Lead as i, cn as l, FAQS as n, Section as o, Faq as r, SectionTitle as s, Eyebrow as t };
