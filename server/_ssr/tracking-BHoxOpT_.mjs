//#region node_modules/.nitro/vite/services/ssr/assets/tracking-BHoxOpT_.js
function track(event, payload = {}) {
	if (typeof window === "undefined") return;
	try {
		window.dataLayer = window.dataLayer || [];
		window.dataLayer.push({
			event,
			...payload
		});
	} catch {}
}
var CONTACT = {
	phoneDisplay: "55 2197 8854",
	phoneTel: "+525521978854",
	email: "pj_ingenieria@outlook.com",
	whatsappMessage: "Hola, vi el sitio de PJ Ingeniería y me gustaría solicitar una cotización para un proyecto."
};
var WHATSAPP_URL = `https://wa.me/525521978854?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
//#endregion
export { WHATSAPP_URL as n, track as r, CONTACT as t };
