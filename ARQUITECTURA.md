# ARQUITECTURA.md — Fase 4: Stack y decisiones

> Cada decisión con su justificación de una línea (BRIEF §2.4). Versiones verificadas contra el registro de npm el 2026-07-15, no contra memoria.

## Stack

| Decisión | Elección | Justificación (una línea) |
|---|---|---|
| Framework | **Astro 7.0.9** (output estático) | Sitio 100% marketing: el guardrail del brief pide mínimo JS al cliente, y Astro entrega HTML puro con JS opt-in. |
| Versión | 7.0.9 (estable actual) | Verificada con `npm view astro version`; se revisó la guía de migración v7 (compiler estricto, `compressHTML` default JSX). |
| `compressHTML: true` | En vez del default `'jsx'` de v7 | Sitio de prosa: las reglas JSX comen espacios alrededor de elementos inline dentro de párrafos. |
| TypeScript | `astro/tsconfigs/strictest` + `astro check` en CI mental | El brief exige strict sin `any`; strictest lo supera (0 errores, 0 warnings). |
| Componentes UI | **Ninguna librería** | 6 páginas, 4 componentes propios: una librería sería renta sin inquilino y riesgo de "look shadcn". |
| Cliente JS | ~2KB inline total (validación de formulario + observer del gesto) | Presupuesto <100KB gzip: cumplido ~50×; cero frameworks de cliente, cero islands. |
| Integraciones | Solo `@astrojs/sitemap@3.7.3` | SEO técnico exigido en Fase 5; paga su renta generando el sitemap desde las rutas reales. |
| Fuentes | Estáticas en `public/fonts` (3 woff2 variable, subset latin) | Autohospedadas con `font-display: swap` + preload; latin cubre es-MX completo. |
| Tokens | `public/styles/tokens.css` como asset estático | Un solo archivo consumido por el sitio Y el specimen; sin build-step no hay deriva entre ambos. |
| Dominio | Placeholder `https://pragmasyn.example` vía `SITE_URL` | No se inventa un dominio real; `.example` es TLD reservado y canonical/sitemap/robots se regeneran solos al fijarlo. |
| Formulario | POST JSON a `PUBLIC_FORM_ENDPOINT` (env) | No existe backend/correo todavía; sin endpoint degrada al mensaje de error con contacto directo — no hay estado fingido. |

## Estructura

```
/
├── astro.config.mjs          # site, sitemap, compressHTML
├── public/
│   ├── fonts/                # 3 × woff2 variable, subset latin
│   ├── styles/tokens.css     # LA fuente de verdad visual (Fase 2)
│   ├── design/specimen.html  # specimen vivo, consume los mismos tokens
│   ├── favicon.svg/.ico, apple-touch-icon.png, og-image.png
├── src/
│   ├── styles/base.css       # lengua visual compartida (solo tokens)
│   ├── layouts/BaseLayout.astro   # head/SEO/JSON-LD, skip-link, header, footer
│   ├── components/
│   │   ├── SiteHeader.astro  # única aparición del gradiente (el logo)
│   │   ├── SiteFooter.astro  # mark mono currentColor
│   │   └── Seam.astro        # la costura: cruce a 30° + el único gesto de motion
│   └── pages/                # index, metodo, servicios, contacto, privacidad, 404, robots.txt.ts
└── branding/logo/            # sistema de logo (master SVG trazado, IoU 0.9917)
```

## El patrón «Contraluz» en código

- Cada página abre en acto oscuro y cierra en oscuro; la ejecución/conversión vive en claro.
- `.ground-dark` / `.ground-light` fijan la física (tokens contextuales); los componentes solo consumen `--fg/--bg/--interactive/...` — cambiar de acto jamás toca un componente.
- `Seam.astro` es el entrelazado: un elemento del acto claro cruza la frontera hacia el oscuro con esquinas cortadas a 30° (la única diagonal, `--angle-weave`) y −0.5° de rotación deliberada.
- En `/metodo` y `/servicios`, el elemento que cruza es narrativo: la etapa **Síntesis** y el servicio **Ejecución de proyectos** son literalmente la costura entre los dos mundos.
- El único gesto de motion con personalidad: la tarjeta de la costura "se teje" al entrar al viewport una sola vez (`--dur-4`, `--ease-weave`, IntersectionObserver, respeta `prefers-reduced-motion` vía tokens).

## Conteo del gradiente de marca (regla ≤2)

1. El logo a color en el header (inline SVG).
2. La OG image (`/og-image.png`) — justificación escrita: es la tarjeta social de la marca fuera del sitio, el único lugar donde el mark debe cargar solo toda la identidad.

En el resto del sitio el mark es mono (`currentColor`, footer) y no existe ningún otro gradiente.

## Cómo correr

```bash
npm install
npm run dev        # desarrollo en :4321
npm run build      # dist/ estático
npm run preview    # sirve dist/ en :4321
npx astro check    # TypeScript strictest
```
