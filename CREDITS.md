# CREDITS.md — Licencias de fuentes y assets

## Tipografía (autohospedada, subset latin)

| Familia | Diseño | Licencia | Fuente de descarga | Uso |
|---|---|---|---|---|
| **Newsreader** (variable: wght 200–800, opsz 6–72, + itálica) | Production Type | SIL Open Font License 1.1 | paquete npm `@fontsource-variable/newsreader@5.2.10` | Display serif (voz de autoridad) |
| **Instrument Sans** (variable: wght 400–700, wdth 75–100) | Rodrigo Fuenzalida / Instrument | SIL Open Font License 1.1 | paquete npm `@fontsource-variable/instrument-sans@5.2.8` | Texto y UI |

La OFL permite uso comercial, autohospedaje y subsetting. Archivos en `design/fonts/`.
Nota: la dirección aprobada proponía General Sans (Fontshare); se sustituyó por Instrument Sans por dos razones: distribución por cadena npm verificable (Fontshare solo distribuye por zip manual) y el eje de ancho variable 75–100, que da el contraste de "peso y ancho" que exige BRIEF §8. Cambio reportado en el checkpoint correspondiente.

## Imágenes

**El sitio no usa fotografía** (decisión documentada en `CONTENIDO.md`). No hay imágenes de stock que acreditar.

## Logo

- Origen: `logo.png` provisto por el cliente (raster 1024×1024 generado con IA; prompt en `branding/Prompt para logo.md`).
- Sistema vectorial (`branding/logo/*.svg`, favicons, OG) reconstruido en este proyecto a partir del canal alfa del original — fidelidad verificada: IoU 0.9917. No es un rediseño: es el mismo mark, vectorizado.

## Herramientas de build de assets (no se distribuyen con el sitio)

potracer (trazado), resvg (raster de verificación), Pillow y fontTools (favicons/OG), todas con licencias permisivas (MIT/BSD/Apache).
