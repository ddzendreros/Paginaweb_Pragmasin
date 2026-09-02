/**
 * Datos que solo puede aportar un humano. Un lugar, no diez.
 *
 * `whatsappNumber` va en formato internacional, solo dígitos (lada de país
 * incluida, sin "+", sin espacios). Mientras esté vacío, TODOS los accesos por
 * WhatsApp del sitio se apagan solos: no se publica un número inventado ni un
 * enlace roto. Llenar este campo enciende el botón flotante, el bloque de
 * /contacto, el enlace del pie y el respaldo del formulario.
 */
interface SiteData {
  email: string;
  whatsappNumber: string;
}

export const site: SiteData = {
  email: "contacto@pragmasyn.com",
  whatsappNumber: "525560628915",
};

/** Mensajes prellenados: distintos según de dónde salió la persona. */
export const waMessages = {
  flotante: "Hola Pragmasyn. Quiero saber qué puedo automatizar en mi operación.",
  contacto: "Hola Pragmasyn. Quiero contarles qué proceso me está costando más horas.",
  diagnostico: "Hola Pragmasyn. Me interesa el diagnóstico de 5 días.",
  pie: "Hola Pragmasyn. Tengo una pregunta.",
} as const;

/** Devuelve el enlace de WhatsApp, o null si todavía no hay número. */
export function whatsappUrl(message: string): string | null {
  if (!site.whatsappNumber) return null;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** ¿Hay WhatsApp configurado? Los componentes preguntan esto antes de pintar. */
export const hasWhatsapp: boolean = site.whatsappNumber.length > 0;
