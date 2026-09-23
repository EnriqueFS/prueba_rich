import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as WHATSAPP_URL, t as CONTACT } from "./tracking-BHoxOpT_.mjs";
import { R as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gracias-J7FOTBEu.js
var import_jsx_runtime = require_jsx_runtime();
function Gracias() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-navy px-5 text-center text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "mx-auto size-12 text-teal",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 text-4xl",
					children: "Gracias por tu solicitud"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-white/75",
					children: "Un ingeniero de PJ Ingeniería revisará tu proyecto y te contactará a la brevedad."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: WHATSAPP_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "label-tech inline-flex min-h-12 items-center justify-center bg-teal px-6 text-sm text-white",
						children: "Hablar por WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "label-tech inline-flex min-h-12 items-center justify-center border-2 border-white/40 px-6 text-sm text-white hover:bg-white hover:text-navy",
						children: "Volver al inicio"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-white/50",
					children: [
						CONTACT.phoneDisplay,
						" · ",
						CONTACT.email
					]
				})
			]
		})
	});
}
//#endregion
export { Gracias as component };
