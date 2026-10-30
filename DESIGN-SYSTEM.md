# DESIGN-SYSTEM.md — «Hecho a tu medida» (octubre 2026)

> Papel cálido, serif editorial, una pieza de software flotando y capítulos oscuros para los momentos importantes. Tokens en [`public/styles/tokens.css`](public/styles/tokens.css), el único lugar con valores crudos. Estilos compartidos en [`src/styles/base.css`](src/styles/base.css). Todo el texto visible vive en `docs/PROPUESTAS-COPY.md` (no se versiona).

Sustituye por completo al sistema «Contraluz» / superficies (v2). La rampa índigo, `--signal`, `--accent`, `--reserve`, la costura entre actos y las sombras de tarjeta ya no existen.

---

## 1. Física: grounds

Cada bloque declara su suelo con `.ground-light` (papel) o `.ground-dark` (noche) y ese suelo define los tokens **contextuales**: `--bg`, `--bg-raised`, `--bg-sunken`, `--fg`, `--fg-secondary`, `--fg-muted`, `--hairline-color`, `--control-border`, `--interactive`, `--action-bg`, `--action-fg`, `--error-color`, `--focus-ring`. **Los componentes solo leen contextuales**; cambiar de suelo nunca toca un componente. Las primitivas (`--paper-*`, `--night-*`, `--cobalt*`) solo aparecen en `tokens.css`.

La página es papel (`<body class="ground-light">`). Los capítulos oscuros son paneles `.chapter.ground-dark` separados del borde por `--chapter-inset`, nunca bandas a sangre.

## 2. Color

| Grupo | Primitivas | Uso |
|---|---|---|
| Papel | `--paper-0` elevado · `--paper-50` lienzo · `--paper-100` hundido · `--paper-200` hairlines · `--paper-300` bordes de control | Suelo claro |
| Tinta | `--stone-600` apagado · `--stone-700` secundario · `--ink-900` texto | Texto sobre papel |
| Noche | `--night-950/900/800/700` superficies y hairlines · `--night-400/300/100` texto | Suelo oscuro |
| Cobalto | `--cobalt` acción · `--cobalt-strong` hover · `--cobalt-tint` seleccionado · `--cobalt-on-night(-strong)` enlaces sobre noche | Única acción de color |
| Cálido | `--warm-100` + `--warm-ink` | Un momento humano por página, como mucho |
| Estado | `--error`, `--error-on-night`, `--success` | Solo en validación |

Los contrastes medidos están junto a cada valor en `tokens.css`. El cobalto es acción: no decora.

## 3. Tipografía

- **Newsreader** (regular, y su cursiva) lidera los títulos: `.display`, `.display-2`, `.h2`, `.h3`.
- **Instrument Sans** lleva texto e interfaz. La jerarquía sale de la escala, no del peso (`--weight-serif` 400, `--weight-text` 430, `--weight-medium` 530, `--weight-strong` 620).
- Cada título grande lleva **una sola frase en cursiva** (`<em>`), la que marca el copy.
- Texto largo: máximo `--measure` (38rem). Títulos con `text-wrap: balance`.
- `.lead`, `.caption`, `.label` (mayúsculas condensadas) completan la escala.

## 4. Composición

- `.act` da el ritmo vertical; `.act__inner` centra a `--content-max` con `--margin`.
- `.grid-12` es la retícula. Los hijos declaran su posición con `--col: 1 / span 5`; por debajo de 56rem todo pasa a ancho completo y el `sticky` se quita.
- `.head` + `.label--rule` abren cada sección a la izquierda. Solo el cierre se centra (`.closing`).
- `.opening` abre todas las páginas: título en columnas 1–8, lead en 9–12.
- Ninguna sección usa «título centrado + tres tarjetas». Dos secciones seguidas nunca comparten composición.
- Cada contenedor agrupa algo real: nada de tarjetas decorativas.

## 5. Componentes

- **Botones** (`.btn`): píldora, máximo uno relleno por sección y un secundario como mucho. Estados hover, focus y activo; 44 px o más en móvil.
- **Header**: píldora de vidrio flotante. En 56rem o menos, marca más botón circular que abre una hoja (`<dialog>`) desde abajo.
- **Configurador** (`Configurator.astro`): sello del hero. Cuatro negocios de ejemplo; funciona sin JS con `:has()` y con JS usa view transitions. Sus colores de marca son lo único crudo fuera de tokens, porque representan el software del cliente.
- **Bento** (`.tile`): mosaicos con viñeta dibujada en CSS o SVG con tokens; el borde con luz sigue al puntero solo con `hover: hover`.
- **FAQ**: `<details>` nativos; el `+` se dibuja en CSS y gira 45° con `rotate`.
- **WhatsApp flotante**: círculo de 56 px, solo icono; no se pinta en `/contacto`.
- **Formulario**: campos `.field`; el error de campo hace un `wiggle` de 240 ms (±4 px) y el éxito es un toast de `.ground-dark` que se va a los 4 s.

## 6. Movimiento

Estado y jerarquía, nunca decoración. Solo `transform`, `translate`, `rotate`, `scale` y `opacity`, con propiedades nombradas (jamás `transition: all`). Duraciones: `--dur-1` 120 · `--dur-2` 180 · `--dur-3` 280 · `--dur-4` 420 · `--dur-reveal` 320 ms. Curvas: `--ease-out`, `--ease-in-out`, `--ease-back`.

Entradas por scroll: `[data-reveal]` con `threshold: 0.15`, índice de escalonado máximo 3 y retraso de 40 ms por índice. Nunca en la primera sección de una página. Con `prefers-reduced-motion` las duraciones colapsan y nada se desplaza.

## 7. Reglas duras

1. Ningún valor crudo fuera de `tokens.css`, salvo las marcas de ejemplo del configurador.
2. Sin dependencias, fuentes nuevas, imágenes de stock, gradientes decorativos, emojis ni analítica.
3. La única sombra es `--shadow-float`, y solo en piezas flotantes.
4. Máximo un botón relleno por sección.
5. Nunca `transition: all`; nunca `data-reveal` en la apertura.
6. Commits atómicos y `git add` con rutas explícitas.
