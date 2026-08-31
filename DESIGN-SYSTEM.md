# DESIGN-SYSTEM.md — Fase 2 · revisión v2 (agosto 2026)

> Dirección aprobada en Checkpoint 1: **C «Contraluz»**. Tokens implementados en [`public/styles/tokens.css`](public/styles/tokens.css).
>
> **Revisión v2 — lenguaje de superficies.** El reposicionamiento de marca (automatización operativa con IA) vino con un cambio de interfaz: de plano editorial a **superficies apiladas**, en la línea de las interfaces de Apple. Lo que cambió y lo que no:
>
> | Se conserva | Cambia en v2 |
> |---|---|
> | Paleta completa (rampa índigo, accent, signal, reserve) | Radios: de 2/4px a una rampa 6→28px + píldora |
> | Las dos familias tipográficas | Quién manda: **Instrument Sans lidera los títulos**; Newsreader pasa a acento de marca |
> | Actos oscuro/claro y tokens contextuales | Superficies: tarjetas con `--surface-card` / `--surface-border` / sombra difusa |
> | La costura entre actos | La tarjeta que cruza pierde el corte a 30° y gana radio grande |
> | `--angle-weave` como única diagonal | Queda reservado al mark, ya no se usa en cortes de UI |
> | Un solo gesto de firma | Se suma una curva de entrada única (`--ease-rise`) para todo lo que llega al hacer scroll |
> | Focus diseñado, reduced-motion desde tokens | Header sticky translúcido (`backdrop-filter`) y botón flotante de WhatsApp |

---

## 0. La física del sistema

El sitio se compone de **actos**: secciones oscuras (análisis) y claras (ejecución) entretejidas. Cada acto declara su suelo con `.ground-dark` o `.ground-light`, y el suelo define los tokens contextuales (`--bg`, `--fg`, `--interactive`, `--hairline-color`, `--focus-ring`, `--selection-*`…). **Los componentes solo consumen tokens contextuales** — nunca primitivas, nunca valores crudos. Cambiar un componente de acto no requiere tocarlo: el acto define la física, el componente obedece.

Regla de una línea por decisión: cada token del archivo lleva su justificación como comentario junto al valor.

## 1. Color

### Primitivas (rampa índigo — cero grises neutros)
Todos los "grises" cargan el hue de la tinta (~230°). `#000`, `#FFF` y cualquier `slate/gray` están prohibidos y no existen en el archivo.

| Token | Hex | Rol |
|---|---|---|
| `--ink-950` | `#060B22` | pozos (wells) sobre oscuro |
| `--ink-900` | `#0A1030` | **estructural dominante** |
| `--ink-800` | `#111844` | superficies elevadas sobre oscuro |
| `--ink-700` | `#262E55` | hairlines sobre oscuro |
| `--ink-600` | `#3D4577` | secundario fuerte sobre claro |
| `--ink-500` | `#565F9A` | texto secundario sobre claro |
| `--ink-450` | `#5A6499` | UI muted sobre oscuro |
| `--ink-400` | `#868DB5` | UI muted sobre claro |
| `--ink-350` | `#8A93C4` | texto secundario sobre oscuro |
| `--ink-300` / `--ink-250` | `#AEB4D2` / `#454F85` | disabled claro/oscuro (exentos de AA por norma) |
| `--ink-200` | `#D9DCEC` | hairlines sobre claro |
| `--ink-100` | `#ECEEF7` | superficies hundidas sobre claro |
| `--ink-050` | `#F6F7FB` | surface — nunca `#FFF` |
| `--accent` / `--accent-strong` | `#1E5CF5` / `#184AC6` | interactivo sobre claro + hover |
| `--signal` / `--signal-strong` | `#0FE3E8` / `#3FEAEE` | interactivo/puntuación sobre oscuro + hover |
| `--reserve` | `#C31FDD` | ver §1.2 |

### 1.1 Tabla de contraste — completa, medida con herramienta (WCAG 2.x)

**Sobre claro (`--ink-050`):**
| Par | Ratio | Uso permitido |
|---|---|---|
| ink-900 | **17.36:1** | ✅ todo texto |
| ink-600 | **8.47:1** | ✅ texto |
| ink-500 | **5.61:1** | ✅ texto secundario |
| accent | **5.02:1** | ✅ texto interactivo y UI |
| accent-strong | **6.92:1** | ✅ hover |
| reserve | **4.30:1** | ⚠️ solo UI (≥3) o texto grande — aquí solo lo usa el borde de error |
| ink-400 | **3.02:1** | ✅ solo UI, nunca texto |
| ink-200 (hairline) | 1.27:1 | decorativo, exento |
| ink-300 (disabled) | 1.91:1 | exento por norma |
| **signal** | **1.49:1** | ⛔ **PROHIBIDO — verificado** |

**Sobre oscuro (`--ink-900`):**
| Par | Ratio | Uso permitido |
|---|---|---|
| ink-050 | **17.36:1** | ✅ todo texto |
| signal | **11.66:1** | ✅ texto interactivo y UI |
| ink-350 | **6.24:1** | ✅ texto secundario |
| reserve | **4.04:1** | ⚠️ solo UI o texto grande |
| accent | **3.46:1** | ⚠️ solo UI/texto grande → **el interactivo del oscuro es `--signal`** |
| ink-450 | **3.29:1** | ✅ solo UI |
| ink-700 (hairline) | 1.42:1 | decorativo, exento |
| ink-250 (disabled) | 2.40:1 | exento por norma |

**Sobre superficies secundarias:** ink-900/ink-100 **16.06:1** ✅ · accent/ink-100 **4.65:1** ✅ · ink-500/ink-100 **5.18:1** ✅ · signal/ink-800 **10.64:1** ✅ · ink-350/ink-800 **5.70:1** ✅ · botón primario oscuro (ink-900 sobre signal) **11.66:1** ✅ · botón primario claro (ink-050 sobre accent) **5.02:1** ✅.

**Cero ítems reprobados en uso.** Las dos advertencias del brief quedaron resueltas por regla de uso, no por excepción.

### 1.2 El único uso de `--reserve` (justificación por escrito)
El magenta es el **color del estado de error del formulario de contacto** — el único formulario del sitio. Justificación: (a) es semántica, no decoración: solo aparece cuando el usuario se equivoca; (b) sale del vértice caliente del logo, así que el "grito" pertenece a la paleta; (c) en un sitio de 4 páginas su presencia esperada es cero visitas de cada diez. El error nunca depende solo del color: siempre va con mensaje de texto y `aria-invalid`. **Ningún otro elemento puede usar `--reserve`.**

### 1.3 Gradiente de marca
Apariciones autorizadas hasta ahora: **1 (el logo)**. El segundo uso permitido por el brief **no está asignado** — si ningún candidato lo gana en Fase 4, se queda sin usar.

## 2. Tipografía

### La pareja (y sus descartes)
- **Newsreader** (serif variable, `opsz` + `wght 200–800`, SIL OFL) — display y voz editorial. Es la voz del criterio: una serif con filo sobre tinta (patrón validado en Resend/Work & Co, RESEARCH §1). El eje óptico ajusta el dibujo por tamaño: display afilado, texto legible.
- **Instrument Sans** (grotesk variable, `wght 400–700` + **`wdth` 75–100%**, SIL OFL) — cuerpo y UI. El eje de ancho da el contraste de "peso **y ancho**" que exige §8 del brief sin cargar una tercera familia: condensada 80% para anotaciones, cifras e índices.
- **Cambio respecto al Checkpoint 1, reportado:** la dirección C proponía General Sans; se sustituyó por Instrument Sans porque (a) General Sans no se distribuye por npm y exigía descarga manual fuera de la cadena de suministro verificable, (b) Instrument Sans añade el eje `wdth` que General Sans no tiene, (c) misma familia tonal grotesk-geométrica-humanista. Si no convence en el specimen, se revierte.
- **Descartes por escrito (regla Inter/Geist):** Inter, Geist, Space Grotesk, Satoshi, Poppins, Manrope, DM Sans — defaults de cohorte "sitio AI", sin postura o sobreexpuestas.

### Autohospedaje
3 archivos woff2 subset latin (cubre es-MX completo) en `design/fonts/`, `font-display: swap`: Newsreader normal (132 KB) + itálica (147 KB), Instrument Sans normal (57 KB). La itálica de UI no paga renta y no se envía. Fase 5 evaluará poda adicional de glifos.

### Escala v2 — razón ~1.25 (tercera mayor)
La v1 usaba 1.333 para un display serif de 120px. Con sans en los titulares esa rampa se vuelve gritona: el sans a tamaño display necesita **tracking negativo y menos escalón**. `small` se queda en 14px.

**Reparto de familias (el cambio de v2):** Instrument Sans toma display, display-2, h1, h2, h3 y h4. Newsreader se reserva para el acento de marca — la etimología griega, el slogan del pie y las citas — vía `.serif` y `.serif-italic`.

| Rol | Tamaño | line-height | letter-spacing | Familia/peso |
|---|---|---|---|---|
| display | fluido 42 → 72px | 1.05 | −0.035em | Instrument 680 |
| display-2 | fluido 36 → 56px | 1.08 | −0.03em | Instrument 680 |
| h1 | fluido 32 → 48px | 1.1 | −0.028em | Instrument 680 |
| h2 | fluido 28 → 40px | 1.15 | −0.022em | Instrument 640 |
| h3 | fluido 22 → 26px | 1.25 | −0.015em | Instrument 640 |
| h4 | 19px | 1.35 | −0.008em | Instrument 530 |
| lead | fluido 18 → 21px | 1.5 | −0.005em | Instrument 430, `--fg-secondary` |
| body | 16→17px fluido | 1.6 | 0 | Instrument 430 |
| small | 14px | 1.5 | +0.002em | Instrument 430 |
| caption | 12px | 1.4 | +0.01em (+0.08em en caps) | Instrument 530, wdth 80% |
| numeral | fluido 32 → 48px | 1 | −0.022em | Instrument 680, tabular, wdth 80% |
| acento serif | tamaño del contexto | — | 0 | Newsreader 460 / 340 itálica |

Detalles obligatorios ya en sistema: `text-wrap: balance` en headlines, `text-wrap: pretty` en prosa, tracking positivo en mayúsculas, medida limitada a `--measure` (38rem ≈ 66ch) para prosa y `--measure-wide` (46rem) para encabezados de sección centrados.

## 3. Grid y espaciado
- **12 columnas**, gutter `clamp(16→32px)`, margen `clamp(20→80px)`, contenido max **1216px** (v2: se cerró desde 1360 porque las composiciones ahora se centran; el texto no se estira).
- **Ritmo vertical:** una sola decisión, en `.act` — `padding-block: clamp(64px, 8vw, 128px)`. Las secciones respiran igual en todo el sitio, así el scroll no tiene huecos muertos (el defecto más visible de la v1).
- Espaciado base **4/8**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- **Permiso explícito para romper el grid:** los elementos que cruzan una costura (`--z-weave`) pueden salirse de columnas y sangrar; es el entrelazado del mark hecho layout, no un accidente. Todo otro rompimiento requiere justificación de una línea en el código.

## 4. Geometría (del mark, no del gusto)
- `--angle-weave: 30deg` — **la única diagonal del sitio** (familia 120°/60°/30° del knot C3). Se usa en cortes locales: esquinas de elementos que cruzan costuras, remates de hairlines. **Las costuras entre actos son horizontales con UN cruce local a 30°** — como en el knot: los cruces son eventos locales, no diagonales globales.
- Hairlines 1px/2px = el hueco que revela, no caja que encierra. Reglas con etiqueta (patrón Work & Co).
- **Radios v2 — rampa continua, no un 8px para todo:** `--radius-xs` 6px (chips) · `--radius-s` 10px (inputs) · `--radius-m` 14px (renglones de lista) · `--radius-l` 20px (tarjetas) · `--radius-xl` 28px (paneles) · `--radius-pill` (botones y distintivos). El filo de 2px de la v1 se retiró: con superficies apiladas leía a caja, no a control.
- **Elevación:** la luz se difunde, no cae en caja dura. `--shadow-1/2/3` componen dos capas (contacto + difusión) con el índigo diluido por canal (`--rgb-ink`). Sobre tinta la sombra es invisible por definición: ahí eleva el borde (`--surface-border`), no la sombra — por eso `--shadow-card` vale `none` en `.ground-dark`.
- **Cristal:** `--surface-glass` + `blur(20px) saturate(180%)` en el header sticky y en el botón flotante. Es el único efecto que se permite; no hay "glassmorphism" decorativo en tarjetas.
- `--angle-weave` (30°) queda **reservado al mark**. La tarjeta que cruza la costura ya no se corta en diagonal: cruza con radio grande y sombra `--shadow-3`.

## 5. Motion
| Token | Valor | Uso |
|---|---|---|
| `--dur-1` 120ms + `--ease-swift` | `cubic-bezier(0.32, 0, 0.18, 1)` | hover, focus, micro |
| `--dur-2` 200ms + `--ease-swift` | | cambios de estado |
| `--dur-3` 320ms + `--ease-swift` | | revelados de contenido |
| `--dur-4` 560ms + `--ease-rise` | `cubic-bezier(0.16, 1, 0.3, 1)` | paneles y el gesto de la costura |
| `--dur-5` 720ms + `--ease-rise` | | entradas al hacer scroll (`[data-reveal]`) |
| `--ease-exit` | `cubic-bezier(0.5, 0.1, 0.9, 0.4)` | elementos que salen |

Reglas: el motion comunica jerarquía o estado, nunca decora; `prefers-reduced-motion` colapsa todas las duraciones a 0.01ms **desde los tokens** — ningún componente necesita enterarse.

**Cambio en v2 — la entrada al hacer scroll.** La v1 prohibía el fade-up con stagger por ser el tic de los sitios hechos con plantilla. En v2 se admite **una sola** implementación, con condiciones: una curva única (`--ease-rise`) para todo el sitio, desplazamiento corto (24px), stagger derivado de la posición entre hermanos y tope de 6 pasos, se dispara una vez y se deja de observar, y sin JS el contenido se ve igual (hay un `<noscript>` que lo garantiza). El criterio: si cada sección tuviera su propia animación sería decoración; una sola curva es sistema.

## 6. Estados de componentes (matriz completa)

| Componente | default | hover | focus-visible | active | disabled | loading | error | empty |
|---|---|---|---|---|---|---|---|---|
| **Link** | `--interactive` subrayado 1px, offset 0.2em | `--interactive-strong`, subrayado 2px | anillo 2px offset 3px color `--focus-ring` | = hover | n/a | n/a | n/a | n/a |
| **Botón primario** | píldora, fondo `--interactive`, texto `--on-interactive`, min 48px | fondo `--interactive-strong` + sube 1px + sombra | anillo contextual | vuelve a 0 | fondo `--bg-sunken`, texto `--fg-disabled`, cursor not-allowed | spinner 2px sobre texto transparente, `aria-busy` | n/a | n/a |
| **Botón secundario** | píldora de cristal: `--surface-card` + borde `--surface-border` + blur | fondo y borde suben un escalón, sube 1px | anillo | vuelve a 0 | = primario | = primario | n/a | n/a |
| **Tarjeta** | `--surface-card`, borde `--surface-border`, radio 20px, sombra `--shadow-card` | solo si es enlace: fondo y borde suben, sube 4px, `--shadow-card-hover` | anillo | n/a | n/a | n/a | n/a | n/a |
| **Input** | fondo `--bg-raised`, borde `--surface-border`, placeholder `--fg-muted-ui`, min 48px, radio 10px | borde `--surface-border-hover` | borde `--interactive` + halo de 2px del mismo color | n/a | fondo sunken, texto disabled | n/a | borde `--reserve` (2px sobre claro), mensaje de texto + `aria-invalid` | placeholder con voz |
| **Select** | igual que input; la flecha se dibuja con bordes rotados (ningún data URI puede leer un token) | = input | = input | n/a | = input | n/a | = input | opción "Selecciona" |
| **Estado vacío** | borde discontinuo hairline + microcopy con voz ("Aquí no hay nada todavía — a propósito.") | — | — | — | — | — | — | ✓ |

Sistema global ya implementado: `::selection` invertida por acto (fondo `--selection-bg`), focus ring **diseñado** (2px + offset 3px, color del acto), scrollbar se tratará en Fase 4 con los mismos tokens.

## 7. Archivos
```
design/
├── tokens.css        ← única fuente de verdad (fuentes, color, tipo, grid, motion)
├── specimen.html     ← consume SOLO tokens; auditado en 1280 y 360px
└── fonts/            ← woff2 variables subset latin, autohospedadas
```
En Fase 4 `tokens.css` se importa al stack tal cual (o se mueve con `git mv`); ningún componente podrá declarar valores propios.
