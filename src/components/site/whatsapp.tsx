import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { track, WHATSAPP_URL } from "@/lib/tracking";

const KEY = "pj_wa_popup_closed";

export function WhatsAppWidget() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    let closed = false;
    try {
      closed = sessionStorage.getItem(KEY) === "1";
    } catch {
      closed = false;
    }
    if (closed) return;
    const t = setTimeout(() => setPopup(true), 10000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setPopup(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage bloqueado: solo se oculta en esta vista */
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3">
      {popup && (
        <div
          role="dialog"
          aria-label="¿Tienes un proyecto por iniciar?"
          className="relative w-72 border border-navy/10 bg-background p-4 shadow-lg"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Cerrar mensaje"
            className="absolute right-1 top-1 inline-flex size-9 items-center justify-center text-technical hover:text-navy"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
          <h3 className="pr-8 text-lg leading-tight text-navy-deep">
            ¿Tienes un proyecto por iniciar?
          </h3>
          <p className="mt-2 text-sm leading-snug text-technical">
            Cuéntanos qué necesitas y te ayudamos a identificar el servicio adecuado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("click_whatsapp", { location: "popup" })}
            className="label-tech mt-4 inline-flex min-h-11 w-full items-center justify-center bg-teal px-4 text-[12px] text-white hover:bg-teal/90"
          >
            Hablar con un ingeniero
          </a>
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("click_whatsapp", { location: "floating_button" })}
        aria-label="Hablar por WhatsApp con PJ Ingeniería"
        className="inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </div>
  );
}
