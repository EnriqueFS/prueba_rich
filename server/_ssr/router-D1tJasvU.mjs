import { n as __toESM } from "../_runtime.mjs";
import { h as require_react, m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CONTACT } from "./tracking-BHoxOpT_.mjs";
import { n as FAQS } from "./faq-D4yN3mlK.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D1tJasvU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-bgVISyGU.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Servicios de Ingeniería, Topografía y Construcción | PJ Ingeniería" },
			{
				name: "description",
				content: "Servicios de ingeniería, levantamientos topográficos, planimetría, proyectos ejecutivos y apoyo en construcción. Solicita una cotización con PJ Ingeniería."
			},
			{
				name: "author",
				content: "PJ Ingeniería"
			},
			{
				property: "og:site_name",
				content: "PJ Ingeniería"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "es_MX"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{ children: "window.dataLayer=window.dataLayer||[];/* Contenedores pendientes: Google Tag Manager [GTM-ID], Google Analytics 4 [GA4-ID], Meta Pixel [META-PIXEL-ID] */" }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$2 = () => import("./routes-BpYzU2JR.mjs");
var TITLE = "Servicios de Ingeniería, Topografía y Construcción | PJ Ingeniería";
var DESCRIPTION = "Servicios de ingeniería, levantamientos topográficos, planimetría, proyectos ejecutivos y apoyo en construcción. Solicita una cotización con PJ Ingeniería.";
var jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "#organization",
			name: "PJ Ingeniería",
			description: DESCRIPTION,
			email: CONTACT.email,
			telephone: CONTACT.phoneTel
		},
		{
			"@type": "ProfessionalService",
			"@id": "#service",
			name: "PJ Ingeniería",
			description: "Levantamiento topográfico, planimetría, curvas de nivel, replanteo, planos CAD, proyectos ejecutivos, ingeniería civil y apoyo en construcción.",
			email: CONTACT.email,
			telephone: CONTACT.phoneTel,
			areaServed: "MX"
		},
		{
			"@type": "WebSite",
			"@id": "#website",
			name: "PJ Ingeniería",
			inLanguage: "es-MX",
			publisher: { "@id": "#organization" }
		},
		{
			"@type": "FAQPage",
			mainEntity: FAQS.map((f) => ({
				"@type": "Question",
				name: f.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: f.a
				}
			}))
		}
	]
};
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "es_MX"
			},
			{
				property: "og:site_name",
				content: "PJ Ingeniería"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: TITLE
			},
			{
				name: "twitter:description",
				content: DESCRIPTION
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(jsonLd)
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./aviso-de-privacidad-BIgAzfWc.mjs");
var Route$1 = createFileRoute("/aviso-de-privacidad")({
	head: () => ({
		meta: [
			{ title: "Aviso de privacidad | PJ Ingeniería" },
			{
				name: "description",
				content: "Aviso de privacidad de PJ Ingeniería. Documento pendiente de publicación."
			},
			{
				name: "robots",
				content: "noindex, follow"
			},
			{
				property: "og:title",
				content: "Aviso de privacidad | PJ Ingeniería"
			},
			{
				property: "og:description",
				content: "Aviso de privacidad de PJ Ingeniería. Documento pendiente de publicación."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "es_MX"
			}
		],
		links: [{
			rel: "canonical",
			href: "/aviso-de-privacidad"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./gracias-J7FOTBEu.mjs");
var Route = createFileRoute("/gracias")({
	head: () => ({
		meta: [
			{ title: "Gracias por tu solicitud | PJ Ingeniería" },
			{
				name: "description",
				content: "Recibimos tu solicitud de cotización de servicios de ingeniería, topografía y construcción. Te contactaremos a la brevedad."
			},
			{
				name: "robots",
				content: "noindex, follow"
			},
			{
				property: "og:title",
				content: "Gracias por tu solicitud | PJ Ingeniería"
			},
			{
				property: "og:description",
				content: "Recibimos tu solicitud de cotización. Te contactaremos a la brevedad."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "es_MX"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gracias"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	AvisoDePrivacidadRoute: Route$1.update({
		id: "/aviso-de-privacidad",
		path: "/aviso-de-privacidad",
		getParentRoute: () => Route$3
	}),
	GraciasRoute: Route.update({
		id: "/gracias",
		path: "/gracias",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
