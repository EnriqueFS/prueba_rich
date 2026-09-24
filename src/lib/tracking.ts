/**
 * dataLayer tracking helpers.
 * Container IDs are intentionally NOT set — replace [GTM-ID], [GA4-ID] and
 * [META-PIXEL-ID] placeholders in src/routes/__root.tsx when available.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type TrackEvent =
  | "click_whatsapp"
  | "click_phone"
  | "click_email"
  | "form_start"
  | "generate_lead"
  | "select_service"
  | "click_quote"
  | "carousel_interaction";

export function track(event: TrackEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...payload });
  } catch {
    /* tracking must never break the UI */
  }
}

export const CONTACT = {
  phoneDisplay: "55 2197 8854",
  phoneTel: "+525521978854",
  email: "pj_ingenieria@outlook.com",
  whatsappMessage:
    "Hola, vi el sitio de PJ Ingeniería y me gustaría solicitar una cotización para un proyecto.",
};

export const WHATSAPP_URL = `https://wa.me/525521978854?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;
