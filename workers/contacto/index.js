/**
 * Recibe el formulario de /contacto y lo manda, por Email Routing de Cloudflare,
 * a la bandeja verificada de Pragmasyn. Sin proveedor de formularios y sin base
 * de datos: el mensaje solo existe en el correo que nos llega.
 */
import { EmailMessage } from "cloudflare:email";

const LIMITS = { name: 120, company: 160, email: 200, size: 20, message: 5000 };
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ORIGIN = /^https:\/\/(pragmasyn\.com|paginaweb-pragmasin-[a-z0-9-]+\.vercel\.app)$/;

const reply = (status) =>
  new Response(JSON.stringify({ ok: status === 200 }), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

const base64 = (text) => {
  const bytes = new TextEncoder().encode(text);
  return btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(""));
};

export function buildMessage({ from, to, name, company, email, size, message }) {
  const subject = `Nuevo contacto Pragmasyn: ${name} (${company})`;
  const body = [
    `Nombre: ${name}`,
    `Empresa: ${company}`,
    `Correo: ${email}`,
    `Tamaño del equipo: ${size || "No lo indicó"}`,
    "",
    message,
  ].join("\n");

  // `email` ya pasó EMAIL_SHAPE, que no admite saltos de línea; lo demás va en base64.
  return [
    `From: Formulario Pragmasyn <${from}>`,
    `To: <${to}>`,
    `Reply-To: <${email}>`,
    `Subject: =?UTF-8?B?${base64(subject)}?=`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@pragmasyn.com>`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    base64(body).replace(/.{76}/g, "$&\r\n"),
  ].join("\r\n");
}

export default {
  async fetch(request, env) {
    if (request.method !== "POST") return reply(405);
    if (!ALLOWED_ORIGIN.test(request.headers.get("origin") ?? "")) return reply(403);

    let data;
    try {
      data = await request.json();
    } catch {
      return reply(400);
    }

    // Una persona nunca ve este campo. El robot recibe un 200 y no aprende nada.
    if (data.website) return reply(200);

    const field = (key) => String(data[key] ?? "").trim().slice(0, LIMITS[key]);
    const fields = {
      name: field("name"),
      company: field("company"),
      email: field("email"),
      size: field("size"),
      message: field("message"),
    };
    if (!fields.name || !fields.company || !fields.message || !EMAIL_SHAPE.test(fields.email)) {
      return reply(422);
    }

    const raw = buildMessage({ ...fields, from: env.CONTACT_FROM, to: env.CONTACT_TO });
    await env.EMAIL.send(new EmailMessage(env.CONTACT_FROM, env.CONTACT_TO, raw));
    return reply(200);
  },
};
