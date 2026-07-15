# Pragmasyn — sitio web

Consultoría de tecnología y estrategia. **Problemas complejos, soluciones ejecutables.**

Sitio estático construido con [Astro 7](https://astro.build), cero frameworks de cliente, ~2KB de JS total. Dirección de arte «Contraluz»: actos oscuros (análisis) y claros (ejecución) entretejidos como las cintas del logo.

## Correr el proyecto

```bash
npm install
npm run dev        # desarrollo en http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/
npx astro check    # TypeScript (strictest)
```

Requiere Node ≥ 22.12.

## Mapa del repo

| Ruta | Qué es |
|---|---|
| `BRIEF.md` | El brief de ejecución — fuente de verdad del proyecto |
| `ENTORNO.md` → `RESEARCH.md` → `DESIGN-SYSTEM.md` → `CONTENIDO.md` → `ARQUITECTURA.md` → `CRITICA.md` | Entregables por fase (0→6) |
| `TODO-CONTENIDO.md` | Todo lo que falta del cliente (`[[PENDIENTE]]`); **el sitio no lanza hasta vaciarlo** |
| `public/styles/tokens.css` | Design tokens — el único lugar donde viven valores de diseño |
| `public/design/specimen.html` | Specimen tipográfico vivo (mismos tokens): `/design/specimen.html` |
| `branding/logo/` | Sistema de logo: SVG master (trazado del original, IoU 0.9917), mono, favicons, OG |
| `src/` | Layout, 4 componentes y 6 páginas |

## Decisiones clave (detalle en `ARQUITECTURA.md` y `DESIGN-SYSTEM.md`)

- **El gradiente de marca aparece exactamente 2 veces:** el logo del header y la OG image. Nada más lo usa — es la regla dura del brief.
- **Dos colores interactivos, uno por mundo:** azul `--accent` sobre claro (5.02:1), cian `--signal` sobre oscuro (11.66:1). Ambos salen del logo; ninguno cruza de mundo.
- **Sin fotografía**, a propósito: no hay fotos reales que mostrar y el stock fingiría que sí (justificación completa en `CONTENIDO.md`).
- **Formulario:** requiere `PUBLIC_FORM_ENDPOINT` (variable de entorno) al desplegar; sin él degrada con honestidad al mensaje de contacto directo.
- **Dominio:** placeholder `pragmasyn.example` vía `SITE_URL`; canonical, sitemap y robots se regeneran al fijar el real.

## Antes de lanzar

1. Vaciar `TODO-CONTENIDO.md` (correo real, razón social, dominio, endpoint del formulario, revisión legal del aviso).
2. `SITE_URL=https://dominio-real npm run build`.
3. Re-correr el QA de Fase 5 (Lighthouse ≥95 en las cuatro categorías) sobre el hosting real.
