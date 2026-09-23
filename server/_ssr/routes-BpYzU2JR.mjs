import { n as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime, u as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as WHATSAPP_URL, r as track, t as CONTACT } from "./tracking-BHoxOpT_.mjs";
import { A as FileText, B as Camera, C as Landmark, D as Handshake, E as HardHat, F as Cog, H as Boxes, I as ClipboardList, M as Factory, N as Crosshair, O as Gauge, P as Compass, R as Check, S as Layers, T as House, U as ArrowRight, V as Building2, W as ArrowLeft, _ as Menu, a as Timer, b as LoaderCircle, c as Ruler, d as PiggyBank, f as Phone, g as MessageCircle, h as MonitorCog, i as Users, j as FileSpreadsheet, k as FileTypeCorner, l as Plug, m as Mountain, n as X, o as Target, p as PencilRuler, r as Waves, s as Satellite, t as Zap, u as Plane, v as Map, w as Image, x as Lightbulb, y as Mail, z as ChartLine } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as QuoteLink, c as TechnicalPanel, i as Lead, l as cn, o as Section, r as Faq, s as SectionTitle, t as Eyebrow } from "./faq-D4yN3mlK.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BpYzU2JR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* PLACEHOLDER — el archivo de logo oficial de PJ Ingeniería aún no está disponible.
* Cuando llegue el PNG/SVG oficial, reemplaza este bloque por:
*   <img src={logo} alt="PJ Ingeniería" className="h-10 w-auto" />
* No recrear ni reinterpretar el logo.
*/
function LogoPlaceholder({ dark = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("label-tech inline-flex min-h-11 items-center border border-dashed px-3 py-2 text-[11px] leading-tight", dark ? "border-white/40 text-white/80" : "border-navy/40 text-navy", className),
		children: "[LOGO OFICIAL PJ INGENIERÍA]"
	});
}
var NAV = [
	{
		label: "Servicios",
		href: "#servicios"
	},
	{
		label: "Proceso",
		href: "#proceso"
	},
	{
		label: "Proyectos",
		href: "#proyectos"
	},
	{
		label: "Nosotros",
		href: "#nosotros"
	},
	{
		label: "Contacto",
		href: "#cotizacion"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors", scrolled ? "border-b border-navy/10 bg-background shadow-sm" : "bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#inicio",
				className: "flex min-w-0 items-center",
				"aria-label": "PJ Ingeniería — inicio",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoPlaceholder, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Navegación principal",
						className: "hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex items-center gap-6",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "label-tech text-[13px] text-navy transition-colors hover:text-teal",
								children: item.label
							}) }, item.href))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => track("click_whatsapp", { location: "header" }),
						"aria-label": "Hablar por WhatsApp",
						className: "inline-flex size-11 items-center justify-center border border-navy/20 text-navy transition-colors hover:bg-navy hover:text-white lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#cotizacion",
						onClick: () => track("click_quote", { cta_location: "header" }),
						className: "label-tech hidden min-h-11 items-center bg-teal px-5 text-[13px] text-white transition-colors hover:bg-teal/90 md:inline-flex",
						children: "Solicitar cotización"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						"aria-label": open ? "Cerrar menú" : "Abrir menú",
						className: "inline-flex size-11 items-center justify-center border border-navy/20 text-navy lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							"aria-hidden": "true"
						})
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			"aria-label": "Navegación móvil",
			className: "border-t border-navy/10 bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mx-auto w-full max-w-6xl px-5 py-2",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-navy/5 last:border-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "label-tech flex min-h-12 items-center text-[13px] text-navy",
						children: item.label
					})
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#cotizacion",
						onClick: () => {
							setOpen(false);
							track("click_quote", { cta_location: "mobile_menu" });
						},
						className: "label-tech flex min-h-12 items-center justify-center bg-teal text-[13px] text-white",
						children: "Solicitar cotización"
					})
				})]
			})
		})]
	});
}
var ATTRIBUTES = [
	{
		icon: Crosshair,
		title: "Precisión",
		copy: "Datos exactos para decisiones seguras."
	},
	{
		icon: Timer,
		title: "Eficiencia",
		copy: "Procesos ágiles y entregas puntuales."
	},
	{
		icon: Users,
		title: "Experiencia",
		copy: "Equipo multidisciplinario en campo y gabinete."
	},
	{
		icon: Handshake,
		title: "Compromiso",
		copy: "Acompañamiento en cada etapa del proyecto."
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative bg-navy pt-24 text-white md:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 opacity-50",
				style: { backgroundImage: "var(--texture-contour)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-6xl px-5 pb-12 md:px-8 md:pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "label-tech mb-4 flex items-center gap-3 text-teal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px w-8 bg-teal",
									"aria-hidden": "true"
								}), "PJ Ingeniería"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl leading-[0.95] sm:text-5xl lg:text-6xl",
								children: "Servicios de Ingeniería, Topografía y Construcción"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg",
								children: "Precisión técnica para tomar mejores decisiones desde el terreno hasta la ejecución de tu proyecto."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cotizacion",
									onClick: () => track("click_quote", { cta_location: "hero" }),
									className: "label-tech inline-flex min-h-12 items-center justify-center bg-teal px-7 text-sm text-white transition-colors hover:bg-teal/90",
									children: "Solicitar cotización"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									onClick: () => track("click_whatsapp", { location: "hero" }),
									className: "label-tech inline-flex min-h-12 items-center justify-center gap-2 border-2 border-white/40 px-7 text-sm text-white transition-colors hover:bg-white hover:text-navy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "size-4",
										"aria-hidden": "true"
									}), "Hablar por WhatsApp"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalPanel, {
							priority: true,
							ratio: "aspect-[4/3]",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mountain, {
								className: "size-12",
								"aria-hidden": "true",
								strokeWidth: 1.25
							}),
							label: "[PLACEHOLDER FOTOGRAFÍA PJ]",
							className: "border-white/15"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-t border-white/10 bg-navy-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4 md:px-8",
					children: ATTRIBUTES.map(({ icon: Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-2 py-6 md:py-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5 text-teal",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-bold uppercase text-white",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-snug text-white/60",
								children: copy
							})
						]
					}, title))
				})
			})
		]
	});
}
var ATTRS = [
	{
		icon: Crosshair,
		title: "Precisión",
		copy: "Datos exactos para decisiones seguras."
	},
	{
		icon: Timer,
		title: "Eficiencia",
		copy: "Procesos ágiles y entregas puntuales."
	},
	{
		icon: Users,
		title: "Experiencia",
		copy: "Equipo multidisciplinario en campo y gabinete."
	},
	{
		icon: Handshake,
		title: "Compromiso",
		copy: "Acompañamiento en cada etapa del proyecto."
	}
];
function Nosotros() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "nosotros",
		tone: "white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Quiénes somos" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Un equipo de ingeniería civil que trabaja desde el terreno" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl leading-relaxed text-technical",
						children: "PJ Ingeniería es un equipo multidisciplinario mexicano que integra ingeniería civil, eléctrica, mecánica, topografía e instalaciones. Trabajamos con más de 8 años de experiencia combinada del equipo en proyectos de distintas escalas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl leading-relaxed text-technical",
						children: "Cada levantamiento, plano y proyecto se desarrolla cumpliendo la normatividad vigente aplicable, para que la información con la que tomas decisiones sea precisa, confiable y lista para construir."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalPanel, {
				ratio: "aspect-[4/3]",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
					className: "size-12",
					"aria-hidden": "true",
					strokeWidth: 1.25
				}),
				label: "[PLACEHOLDER FOTOGRAFÍA PJ]"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4",
			children: ATTRS.map(({ icon: Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border py-6 pr-6 lg:border-b-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-5 text-teal",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-xl text-navy-deep",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-snug text-technical",
						children: copy
					})
				]
			}, title))
		})]
	});
}
var SERVICIOS$1 = [
	{
		icon: Ruler,
		title: "Levantamiento topográfico",
		copy: "Obtención de datos precisos del terreno mediante equipos especializados."
	},
	{
		icon: Map,
		title: "Planimetría de terreno",
		copy: "Representación gráfica de linderos, construcciones existentes y elementos relevantes."
	},
	{
		icon: Waves,
		title: "Curvas de nivel",
		copy: "Modelado altimétrico del terreno para análisis, diseño y proyección."
	},
	{
		icon: Target,
		title: "Replanteo en sitio",
		copy: "Trazado de ejes, niveles y puntos de referencia para garantizar una correcta ejecución."
	},
	{
		icon: FileTypeCorner,
		title: "Planos CAD",
		copy: "Planos profesionales para integrarse a proyectos de arquitectura e ingeniería."
	},
	{
		icon: Building2,
		title: "Propuesta arquitectónica en terreno",
		copy: "Análisis del terreno para desarrollar propuestas preliminares."
	},
	{
		icon: ClipboardList,
		title: "Proyectos ejecutivos",
		copy: "Planos, memorias de cálculo, especificaciones, procedimientos y modelados."
	},
	{
		icon: HardHat,
		title: "Ingeniería civil",
		copy: "Diseño estructural, cimentaciones, estudios y ejecución de obra."
	}
];
var SERVICIOS_SEC = [
	{
		icon: Zap,
		title: "Ingeniería eléctrica",
		copy: "Diseño y revisión de instalaciones eléctricas del proyecto."
	},
	{
		icon: Cog,
		title: "Ingeniería mecánica",
		copy: "Soluciones mecánicas integradas al proyecto ejecutivo."
	},
	{
		icon: Plug,
		title: "Instalaciones industriales y residenciales",
		copy: "Instalaciones proyectadas y ejecutadas según normatividad."
	}
];
function Servicios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "servicios",
		tone: "surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Nuestros servicios" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Levantamiento topográfico e ingeniería civil en un solo equipo" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Desde el servicio de levantamiento topográfico hasta el proyecto ejecutivo y la ejecución de obra, cubrimos cada etapa con información técnica verificable." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4",
				children: SERVICIOS$1.map(({ icon: Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-background p-6 transition-colors hover:bg-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-6 text-teal",
							"aria-hidden": "true",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl leading-tight text-navy-deep",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-snug text-technical",
							children: copy
						})
					]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-px bg-border sm:grid-cols-3",
				children: SERVICIOS_SEC.map(({ icon: Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex gap-3 bg-surface px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "mt-0.5 size-4 shrink-0 text-teal",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base text-navy-deep",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-snug text-technical",
							children: copy
						})]
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteLink, {
					location: "servicios",
					children: "Cotizar mi proyecto"
				})
			})
		]
	});
}
var PASOS = [
	{
		n: "01",
		title: "Levantamiento",
		copy: "Captura de datos en campo con equipos GNSS RTK y estación total."
	},
	{
		n: "02",
		title: "Planimetría",
		copy: "Representación gráfica de linderos y elementos del terreno."
	},
	{
		n: "03",
		title: "Curvas de nivel",
		copy: "Modelado altimétrico para entender el comportamiento del terreno."
	},
	{
		n: "04",
		title: "Análisis del terreno",
		copy: "Interpretación técnica de la información levantada."
	},
	{
		n: "05",
		title: "Propuesta arquitectónica",
		copy: "Esquema preliminar acorde a las condiciones reales del sitio."
	},
	{
		n: "06",
		title: "Proyecto ejecutivo",
		copy: "Planos, memorias y especificaciones listos para construir."
	}
];
var BENEFICIOS = [
	{
		icon: Crosshair,
		title: "Conocimiento preciso del terreno"
	},
	{
		icon: Lightbulb,
		title: "Mejores decisiones de diseño"
	},
	{
		icon: Gauge,
		title: "Optimización de recursos"
	},
	{
		icon: PiggyBank,
		title: "Ahorro de tiempo y costos"
	}
];
function Proceso() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "proceso",
		tone: "white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Proceso" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Del terreno a tu proyecto" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Información precisa que se convierte en decisiones inteligentes." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 grid gap-px bg-border md:grid-cols-3 lg:grid-cols-6",
				children: PASOS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative bg-background p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-tech block text-teal",
							children: p.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-lg leading-tight text-navy-deep",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-snug text-technical",
							children: p.copy
						})
					]
				}, p.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: BENEFICIOS.map(({ icon: Icon, title }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 border-l-2 border-teal pl-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "mt-0.5 size-4 shrink-0 text-teal",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium leading-snug text-navy-deep",
						children: title
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteLink, {
					location: "proceso",
					variant: "outline",
					children: "Necesito un levantamiento"
				})
			})
		]
	});
}
var ENTREGABLES = [
	{
		icon: FileTypeCorner,
		title: "Planos topográficos en CAD/DWG"
	},
	{
		icon: Map,
		title: "Planimetría y altimetría"
	},
	{
		icon: Waves,
		title: "Curvas de nivel"
	},
	{
		icon: Satellite,
		title: "Coordenadas UTM"
	},
	{
		icon: FileText,
		title: "Memoria descriptiva"
	},
	{
		icon: Camera,
		title: "Reporte fotográfico"
	},
	{
		icon: ChartLine,
		title: "Secciones y perfiles (cuando corresponda)"
	},
	{
		icon: Layers,
		title: "Modelos digitales de terreno (cuando corresponda)"
	}
];
function Entregables() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "entregables",
		tone: "surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Entregables" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Información lista para trabajar" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Cada levantamiento se entrega en formatos compatibles con tu flujo de diseño y ejecución." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4",
				children: ENTREGABLES.map(({ icon: Icon, title }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "mt-0.5 size-5 shrink-0 text-teal",
						"aria-hidden": "true",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base leading-tight text-navy-deep",
						children: title
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "label-tech mt-8 flex flex-wrap items-center gap-4 text-technical",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileTypeCorner, {
							className: "size-4",
							"aria-hidden": "true"
						}), " DWG"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "size-4",
							"aria-hidden": "true"
						}), " PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, {
							className: "size-4",
							"aria-hidden": "true"
						}), " XLSX"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
							className: "size-4",
							"aria-hidden": "true"
						}), " MDT"]
					})
				]
			})
		]
	});
}
var CONSTRUCCION = [
	{
		icon: Target,
		title: "Replanteo de ejes",
		copy: "Trazo en sitio conforme al proyecto autorizado."
	},
	{
		icon: Ruler,
		title: "Niveles y referencias",
		copy: "Bancos de nivel y referencias para toda la obra."
	},
	{
		icon: ClipboardList,
		title: "Control de obra",
		copy: "Verificación topográfica durante el proceso constructivo."
	},
	{
		icon: Check,
		title: "Verificación de elementos",
		copy: "Comprobación de posición y geometría de elementos."
	},
	{
		icon: Landmark,
		title: "As-built / obra terminada",
		copy: "Levantamiento final de lo realmente construido."
	}
];
function Construccion() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "construccion",
		tone: "navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				dark: true,
				children: "Apoyo en construcción"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				dark: true,
				children: "Precisión también durante la construcción"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, {
				dark: true,
				children: "Control de obra y replanteo topográfico para garantizar que tu obra se construya conforme al proyecto."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5",
				children: CONSTRUCCION.map(({ icon: Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-navy p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-6 text-teal",
							"aria-hidden": "true",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg leading-tight text-white",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-snug text-white/65",
							children: copy
						})
					]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteLink, {
					location: "construccion",
					variant: "ghost-dark",
					children: "Cotizar apoyo para mi obra"
				})
			})
		]
	});
}
var TECNOLOGIA = [
	{
		icon: Satellite,
		title: "Equipos GNSS RTK",
		copy: "Base y rover para posicionamiento de alta exactitud."
	},
	{
		icon: Ruler,
		title: "Estaciones totales electrónicas",
		copy: "Medición angular y de distancia en campo."
	},
	{
		icon: Plane,
		title: "Drones para fotogrametría",
		copy: "Cobertura aérea para superficies y ortomosaicos."
	},
	{
		icon: MonitorCog,
		title: "Software especializado",
		copy: "Civil 3D, AutoCAD, ArcGIS, STAAD Pro y Revit / Revit MEP."
	}
];
function Tecnologia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "tecnologia",
		tone: "white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Tecnología y equipo" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Tecnología que respalda la precisión" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4",
				children: TECNOLOGIA.map(({ icon: Icon, title, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-background p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-7 text-teal",
							"aria-hidden": "true",
							strokeWidth: 1.25
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-xl leading-tight text-navy-deep",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-snug text-technical",
							children: copy
						})
					]
				}, title))
			})
		]
	});
}
var CLIENTES = [
	{
		icon: HardHat,
		title: "Constructoras"
	},
	{
		icon: PencilRuler,
		title: "Despachos de arquitectura e ingeniería"
	},
	{
		icon: Building2,
		title: "Desarrolladores inmobiliarios"
	},
	{
		icon: House,
		title: "Particulares"
	},
	{
		icon: Factory,
		title: "Industria y comercio"
	}
];
function Clientes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "clientes",
		tone: "surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Para quién trabajamos" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Topografía para construcción a cualquier escala" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Nos adaptamos a proyectos de diferentes escalas, desde terrenos particulares hasta desarrollos de mayor complejidad." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-px bg-border lg:grid-cols-5",
				children: CLIENTES.map(({ icon: Icon, title }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-3 bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-6 text-teal",
						"aria-hidden": "true",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base leading-tight text-navy-deep",
						children: title
					})]
				}, title))
			})
		]
	});
}
var RAZONES = [
	"Servicios integrales: ingeniería, topografía y construcción en un solo equipo.",
	"Información precisa y confiable.",
	"Entregables profesionales.",
	"Experiencia multidisciplinaria: equipo con más de 8 años combinados.",
	"Atención personalizada.",
	"Cumplimiento de normatividad vigente aplicable (NOM, RCDF, DRO/CSE según corresponda).",
	"Tecnología especializada."
];
function PorQue() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "por-que",
		tone: "navy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						dark: true,
						children: "Por qué PJ Ingeniería"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						dark: true,
						children: "Razones para trabajar con nosotros"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: RAZONES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-0.5 size-5 shrink-0 text-teal",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed text-white/85 md:text-base",
								children: r
							})]
						}, r))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechnicalPanel, {
				ratio: "aspect-[4/3]",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
					className: "size-12",
					"aria-hidden": "true",
					strokeWidth: 1.25
				}),
				label: "[PLACEHOLDER FOTOGRAFÍA PJ]",
				className: "border-white/15"
			})]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var PENDING = "[INFORMACIÓN PENDIENTE]";
/** Actualiza este arreglo cuando lleguen los proyectos reales. */
var PROJECTS = Array.from({ length: 8 }, (_, i) => ({
	id: `proyecto-pendiente-${i + 1}`,
	name: PENDING,
	service: PENDING,
	location: PENDING,
	description: PENDING
}));
function ProjectsCarousel({ items = PROJECTS }) {
	const [api, setApi] = (0, import_react.useState)();
	const [selected, setSelected] = (0, import_react.useState)(0);
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
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
	const goTo = (0, import_react.useCallback)((i) => {
		api?.scrollTo(i);
		track("carousel_interaction", {
			method: "dot",
			index: i
		});
	}, [api]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "proyectos",
		tone: "white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Evidencia" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Proyectos que hablan por nuestro trabajo" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, { children: "Conoce algunos de los trabajos realizados por nuestro equipo." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
				setApi,
				opts: {
					align: "start",
					loop: false
				},
				className: "mt-10",
				"aria-label": "Carrusel de proyectos",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
					className: "-ml-4",
					children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
						className: "basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full border border-border bg-background",
							children: [p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image.src,
								srcSet: p.image.srcSet,
								sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw",
								alt: p.image.alt,
								loading: "lazy",
								decoding: "async",
								width: 800,
								height: 600,
								className: "aspect-[4/3] w-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								role: "img",
								"aria-label": `[IMAGEN PROYECTO] — proyecto de topografía e ingeniería ${i + 1}, imagen pendiente`,
								className: "panel-technical flex aspect-[4/3] w-full flex-col items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
									className: "size-9 text-teal",
									"aria-hidden": "true",
									strokeWidth: 1.25
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label-tech px-4 text-center text-[11px] text-white/55",
									children: "[IMAGEN PROYECTO]"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg leading-tight text-navy-deep",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label-tech mt-2 text-[11px] text-teal",
										children: p.service
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "label-tech mt-1 text-[11px] text-technical",
										children: p.location
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-snug text-technical",
										children: p.description
									})
								]
							})]
						})
					}, p.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						role: "tablist",
						"aria-label": "Ir al proyecto",
						children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": i === selected,
							"aria-label": `Proyecto ${i + 1}`,
							onClick: () => goTo(i),
							className: cn("h-1.5 w-6 transition-colors", i === selected ? "bg-teal" : "bg-border hover:bg-technical/50")
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden gap-2 sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, {
							className: "static size-11 translate-y-0 rounded-none border-navy/20 text-navy",
							onClick: () => track("carousel_interaction", { method: "arrow_prev" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, {
							className: "static size-11 translate-y-0 rounded-none border-navy/20 text-navy",
							onClick: () => track("carousel_interaction", { method: "arrow_next" })
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => track("click_whatsapp", { location: "proyectos" }),
					className: "label-tech inline-flex min-h-11 items-center justify-center border-2 border-navy px-6 text-sm text-navy transition-colors hover:bg-navy hover:text-white",
					children: "Hablar con un ingeniero"
				})
			})
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var SERVICIOS = [
	"Levantamiento topográfico",
	"Planimetría",
	"Curvas de nivel",
	"Replanteo",
	"Planos CAD",
	"Proyecto ejecutivo",
	"Ingeniería civil",
	"Ingeniería eléctrica",
	"Ingeniería mecánica",
	"Construcción",
	"Otro"
];
var schema = objectType({
	nombre: stringType().trim().min(2, "Ingresa tu nombre.").max(100),
	telefono: stringType().trim().regex(/^[\d\s()+-]{10,20}$/, "Ingresa un teléfono válido a 10 dígitos."),
	email: stringType().trim().email("Ingresa un correo electrónico válido.").max(255),
	empresa: stringType().trim().max(120).optional(),
	servicio: stringType().min(1, "Selecciona el servicio requerido."),
	ubicacion: stringType().trim().max(160).optional(),
	descripcion: stringType().trim().min(10, "Describe brevemente tu proyecto.").max(1e3),
	privacidad: literalType(true, { errorMap: () => ({ message: "Debes aceptar el aviso de privacidad." }) })
});
function QuoteForm() {
	const navigate = useNavigate();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const started = (0, import_react.useRef)(false);
	const onFirstFocus = () => {
		if (started.current) return;
		started.current = true;
		track("form_start");
	};
	async function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = {
			nombre: String(fd.get("nombre") ?? ""),
			telefono: String(fd.get("telefono") ?? ""),
			email: String(fd.get("email") ?? ""),
			empresa: String(fd.get("empresa") ?? ""),
			servicio: String(fd.get("servicio") ?? ""),
			ubicacion: String(fd.get("ubicacion") ?? ""),
			descripcion: String(fd.get("descripcion") ?? ""),
			privacidad: fd.get("privacidad") === "on"
		};
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) next[issue.path[0]] = issue.message;
			setErrors(next);
			return;
		}
		setErrors({});
		setStatus("sending");
		await new Promise((r) => setTimeout(r, 600));
		track("generate_lead", { servicio: parsed.data.servicio });
		setStatus("success");
		setTimeout(() => navigate({ to: "/gracias" }), 2500);
	}
	const fieldClass = "mt-2 min-h-11 rounded-none border-input bg-background text-base focus-visible:ring-teal";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "cotizacion",
		tone: "navy",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						dark: true,
						children: "Cotización"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						dark: true,
						children: "Cuéntanos sobre tu proyecto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, {
						dark: true,
						children: "Compártenos algunos datos y te ayudaremos a identificar el servicio que necesitas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-2 text-sm text-white/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${CONTACT.phoneTel}`,
							onClick: () => track("click_phone", { location: "cotizacion" }),
							className: "hover:text-teal",
							children: CONTACT.phoneDisplay
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							onClick: () => track("click_email", { location: "cotizacion" }),
							className: "hover:text-teal",
							children: CONTACT.email
						}) })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 bg-background p-6 md:p-8",
				children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "status",
					className: "py-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mx-auto size-10 text-teal",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl text-navy-deep",
							children: "Solicitud enviada"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-technical",
							children: "Gracias por contactar a PJ Ingeniería. Te responderemos a la brevedad."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					onFocus: onFirstFocus,
					noValidate: true,
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "nombre",
							label: "Nombre*",
							error: errors.nombre,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "nombre",
								name: "nombre",
								autoComplete: "name",
								className: fieldClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "telefono",
							label: "Teléfono*",
							error: errors.telefono,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "telefono",
								name: "telefono",
								type: "tel",
								inputMode: "tel",
								autoComplete: "tel",
								className: fieldClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "email",
							label: "Correo electrónico*",
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								autoComplete: "email",
								className: fieldClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "empresa",
							label: "Empresa (opcional)",
							error: errors.empresa,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "empresa",
								name: "empresa",
								autoComplete: "organization",
								className: fieldClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "servicio",
							label: "Servicio requerido*",
							error: errors.servicio,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "servicio",
								name: "servicio",
								defaultValue: "",
								onChange: (e) => track("select_service", { servicio: e.target.value }),
								className: `${fieldClass} w-full border px-3 py-2 outline-none focus:ring-2 focus:ring-teal`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Selecciona una opción"
								}), SERVICIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "ubicacion",
							label: "Ubicación del proyecto (opcional)",
							error: errors.ubicacion,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "ubicacion",
								name: "ubicacion",
								className: fieldClass
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "descripcion",
							label: "Descripción del proyecto*",
							error: errors.descripcion,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "descripcion",
								name: "descripcion",
								rows: 4,
								className: "mt-2 rounded-none border-input bg-background text-base focus-visible:ring-teal"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								id: "privacidad",
								name: "privacidad",
								className: "mt-1 rounded-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
								htmlFor: "privacidad",
								className: "text-sm font-normal leading-snug text-technical",
								children: [
									"Acepto el",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/aviso-de-privacidad",
										className: "text-teal underline",
										children: "aviso de privacidad"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-tech text-[11px]",
										children: "[PENDIENTE DE PUBLICACIÓN]"
									})
								]
							})]
						}), errors.privacidad && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-destructive",
							children: errors.privacidad
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: status === "sending",
							onClick: () => track("click_quote", { cta_location: "form_submit" }),
							className: "label-tech inline-flex min-h-12 items-center justify-center gap-2 bg-teal px-6 text-sm text-white transition-colors hover:bg-teal/90 disabled:opacity-70",
							children: [status === "sending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "size-4 animate-spin",
								"aria-hidden": "true"
							}), "Solicitar cotización"]
						})
					]
				})
			})]
		})
	});
}
function Field({ id, label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			className: "label-tech text-[11px] text-navy",
			children: label
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-destructive",
			role: "alert",
			children: error
		})
	] });
}
var KEY = "pj_wa_popup_closed";
function WhatsAppWidget() {
	const [popup, setPopup] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let closed = false;
		try {
			closed = sessionStorage.getItem(KEY) === "1";
		} catch {
			closed = false;
		}
		if (closed) return;
		const t = setTimeout(() => setPopup(true), 1e4);
		return () => clearTimeout(t);
	}, []);
	const dismiss = () => {
		setPopup(false);
		try {
			sessionStorage.setItem(KEY, "1");
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3",
		children: [popup && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-label": "¿Tienes un proyecto por iniciar?",
			className: "relative w-72 border border-navy/10 bg-background p-4 shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: dismiss,
					"aria-label": "Cerrar mensaje",
					className: "absolute right-1 top-1 inline-flex size-9 items-center justify-center text-technical hover:text-navy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-4",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "pr-8 text-lg leading-tight text-navy-deep",
					children: "¿Tienes un proyecto por iniciar?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-snug text-technical",
					children: "Cuéntanos qué necesitas y te ayudamos a identificar el servicio adecuado."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => track("click_whatsapp", { location: "popup" }),
					className: "label-tech mt-4 inline-flex min-h-11 w-full items-center justify-center bg-teal px-4 text-[12px] text-white hover:bg-teal/90",
					children: "Hablar con un ingeniero"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: WHATSAPP_URL,
			target: "_blank",
			rel: "noopener noreferrer",
			onClick: () => track("click_whatsapp", { location: "floating_button" }),
			"aria-label": "Hablar por WhatsApp con PJ Ingeniería",
			className: "inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
				className: "size-7",
				"aria-hidden": "true"
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy-deep py-12 text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-3 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoPlaceholder, { dark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-white/60",
					children: "Servicios de ingeniería, topografía y construcción. Precisión en cada punto, valor en cada proyecto."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Navegación del pie de página",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg text-white",
						children: "Secciones"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm text-white/70",
						children: [
							["Servicios", "#servicios"],
							["Proceso", "#proceso"],
							["Proyectos", "#proyectos"],
							["Nosotros", "#nosotros"],
							["Preguntas frecuentes", "#faq"],
							["Cotización", "#cotizacion"]
						].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							className: "hover:text-teal",
							children: label
						}) }, href))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg text-white",
					children: "Contacto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${CONTACT.phoneTel}`,
							onClick: () => track("click_phone", { location: "footer" }),
							className: "inline-flex items-center gap-2 hover:text-teal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), CONTACT.phoneDisplay]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${CONTACT.email}`,
							onClick: () => track("click_email", { location: "footer" }),
							className: "inline-flex items-center gap-2 hover:text-teal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-4",
								"aria-hidden": "true"
							}), CONTACT.email]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/aviso-de-privacidad",
							className: "hover:text-teal",
							children: [
								"Aviso de privacidad",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label-tech text-[10px] text-white/40",
									children: "[PENDIENTE]"
								})
							]
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-5 pt-6 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "label-tech text-[11px] text-white/40",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" PJ Ingeniería"
				]
			})
		})]
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nosotros, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Servicios, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proceso, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Entregables, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Construccion, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsCarousel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tecnologia, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clientes, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PorQue, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppWidget, {})
		]
	});
}
//#endregion
export { Landing as component };
