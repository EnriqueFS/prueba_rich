import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Section, Eyebrow, SectionTitle, Lead } from "./primitives";
import { track, CONTACT } from "@/lib/tracking";

const SERVICIOS = [
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
  "Otro",
];

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre.").max(100),
  telefono: z
    .string()
    .trim()
    .regex(/^[\d\s()+-]{10,20}$/, "Ingresa un teléfono válido a 10 dígitos."),
  email: z.string().trim().email("Ingresa un correo electrónico válido.").max(255),
  empresa: z.string().trim().max(120).optional(),
  servicio: z.string().min(1, "Selecciona el servicio requerido."),
  ubicacion: z.string().trim().max(160).optional(),
  descripcion: z.string().trim().min(10, "Describe brevemente tu proyecto.").max(1000),
  privacidad: z.literal(true, { errorMap: () => ({ message: "Debes aceptar el aviso de privacidad." }) }),
});

type FieldName =
  | "nombre"
  | "telefono"
  | "email"
  | "empresa"
  | "servicio"
  | "ubicacion"
  | "descripcion"
  | "privacidad";

type Errors = Partial<Record<FieldName, string>>;

export function QuoteForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const started = useRef(false);

  const onFirstFocus = () => {
    if (started.current) return;
    started.current = true;
    track("form_start");
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      privacidad: fd.get("privacidad") === "on",
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as FieldName] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");

    // TODO: conectar el envío real (Lovable Cloud u otro backend).
    await new Promise((r) => setTimeout(r, 600));

    track("generate_lead", { servicio: parsed.data.servicio });
    setStatus("success");
    // Redirección preparada a /gracias
    setTimeout(() => navigate({ to: "/gracias" }), 2500);
  }

  const fieldClass =
    "mt-2 min-h-11 rounded-none border-input bg-background text-base focus-visible:ring-teal";

  return (
    <Section id="cotizacion" tone="navy">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <Eyebrow dark>Cotización</Eyebrow>
          <SectionTitle dark>Cuéntanos sobre tu proyecto</SectionTitle>
          <Lead dark>
            Compártenos algunos datos y te ayudaremos a identificar el servicio que necesitas.
          </Lead>
          <ul className="mt-8 space-y-2 text-sm text-white/70">
            <li>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                onClick={() => track("click_phone", { location: "cotizacion" })}
                className="hover:text-teal"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                onClick={() => track("click_email", { location: "cotizacion" })}
                className="hover:text-teal"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-0 bg-background p-6 md:p-8">
          {status === "success" ? (
            <div role="status" className="py-10 text-center">
              <Check className="mx-auto size-10 text-teal" aria-hidden="true" />
              <h3 className="mt-4 text-2xl text-navy-deep">Solicitud enviada</h3>
              <p className="mt-2 text-sm text-technical">
                Gracias por contactar a PJ Ingeniería. Te responderemos a la brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} onFocus={onFirstFocus} noValidate className="grid gap-5">
              <Field id="nombre" label="Nombre*" error={errors.nombre}>
                <Input id="nombre" name="nombre" autoComplete="name" className={fieldClass} />
              </Field>
              <Field id="telefono" label="Teléfono*" error={errors.telefono}>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className={fieldClass}
                />
              </Field>
              <Field id="email" label="Correo electrónico*" error={errors.email}>
                <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
              </Field>
              <Field id="empresa" label="Empresa (opcional)" error={errors.empresa}>
                <Input id="empresa" name="empresa" autoComplete="organization" className={fieldClass} />
              </Field>
              <Field id="servicio" label="Servicio requerido*" error={errors.servicio}>
                <select
                  id="servicio"
                  name="servicio"
                  defaultValue=""
                  onChange={(e) => track("select_service", { servicio: e.target.value })}
                  className={`${fieldClass} w-full border px-3 py-2 outline-none focus:ring-2 focus:ring-teal`}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {SERVICIOS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="ubicacion" label="Ubicación del proyecto (opcional)" error={errors.ubicacion}>
                <Input id="ubicacion" name="ubicacion" className={fieldClass} />
              </Field>
              <Field id="descripcion" label="Descripción del proyecto*" error={errors.descripcion}>
                <Textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  className="mt-2 rounded-none border-input bg-background text-base focus-visible:ring-teal"
                />
              </Field>

              <div>
                <div className="flex items-start gap-3">
                  <Checkbox id="privacidad" name="privacidad" className="mt-1 rounded-none" />
                  <Label htmlFor="privacidad" className="text-sm font-normal leading-snug text-technical">
                    Acepto el{" "}
                    <a href="/aviso-de-privacidad" className="text-teal underline">
                      aviso de privacidad
                    </a>{" "}
                    <span className="label-tech text-[11px]">[PENDIENTE DE PUBLICACIÓN]</span>
                  </Label>
                </div>
                {errors.privacidad && (
                  <p className="mt-1 text-sm text-destructive">{errors.privacidad}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                onClick={() => track("click_quote", { cta_location: "form_submit" })}
                className="label-tech inline-flex min-h-12 items-center justify-center gap-2 bg-teal px-6 text-sm text-white transition-colors hover:bg-teal/90 disabled:opacity-70"
              >
                {status === "sending" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                Solicitar cotización
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="label-tech text-[11px] text-navy">
        {label}
      </Label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
