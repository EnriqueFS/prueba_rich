import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aviso-de-privacidad-BIgAzfWc.js
var import_jsx_runtime = require_jsx_runtime();
function Aviso() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-5 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl text-navy-deep",
				children: "Aviso de privacidad"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-tech mt-4 text-teal",
				children: "[INFORMACIÓN PENDIENTE]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 leading-relaxed text-technical",
				children: "El aviso de privacidad de PJ Ingeniería aún no está publicado. En cuanto se proporcione el texto legal definitivo, se integrará en esta página."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "label-tech mt-8 inline-flex min-h-11 w-fit items-center border-2 border-navy px-6 text-sm text-navy hover:bg-navy hover:text-white",
				children: "Volver al inicio"
			})
		]
	});
}
//#endregion
export { Aviso as component };
