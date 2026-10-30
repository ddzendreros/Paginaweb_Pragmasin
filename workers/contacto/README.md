# Formulario de contacto

El formulario de `/contacto` hace POST a `/api/contacto`. `vercel.json` lo reenvía a este
Worker en `formulario.pragmasyn.com`, y el Worker manda el mensaje por el Email Routing de
Cloudflare, que ya atiende el correo del dominio. No hay proveedor de formularios ni base de
datos.

## Despliegue

Se hace una vez, y otra si cambia el código. `CONTACT_TO` es la bandeja que recibe los mensajes:
debe estar verificada en Cloudflare, en Email Routing → Destination addresses.

```bash
npx wrangler login
```

```bash
npx wrangler secret put CONTACT_TO --config workers/contacto/wrangler.toml
```

```bash
npx wrangler deploy --config workers/contacto/wrangler.toml
```

Mientras el Worker no esté desplegado, el formulario ofrece mandar el mismo mensaje por WhatsApp.
