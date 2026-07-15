# CRITICA.md — Fase 6: Revisión hostil (+ evidencia QA de Fase 5)

> Sombrero puesto: director de arte externo, sin interés en ser amable. Dos pasadas, como exige el brief.

---

## 0. Evidencia QA (Fase 5) — reporte, no afirmación

Medido el 2026-07-15 sobre `npm run preview` local, Lighthouse vía `npx lighthouse` headless:

| Métrica | Objetivo | Móvil (throttling 4G) | Desktop | Veredicto |
|---|---|---|---|---|
| Performance | ≥95 | **99** | **100** | ✅ |
| Accessibility | ≥95 | **100** | **100** | ✅ (axe-core interno de Lighthouse) |
| Best Practices | ≥95 | **100** | **100** | ✅ |
| SEO | ≥95 | **100** | **100** | ✅ |
| LCP | <1.5s | 2.1s (simulación slow-4G; umbral "bueno" 2.5s) | **0.4s** | ✅ con nota honesta |
| CLS | <0.05 | **0** | **0** | ✅ |
| TBT (proxy INP) | <200ms | **0ms** | **0ms** | ✅ |
| JS inicial | <100KB gzip | **~2KB inline** (validación + observer) | ídem | ✅ 50× bajo presupuesto |
| Fuentes | autohospedadas, subset, ≤2 familias | 2 familias, 3 archivos woff2 variable, subset latin | ídem | ✅ |

Complementos verificados: 1 `<h1>` y 1 `<main>` por página con `lang="es-MX"` (6/6); formulario probado en vivo (errores por campo + `aria-invalid` + degradación honesta sin endpoint); sin overflow horizontal en 360/768/1440/2560; contenido centrado a 1360px en 2560 con los actos oscuros a sangre completa. Contraste: tabla completa calculada por herramienta en `DESIGN-SYSTEM.md` (y re-verificada en Fase 0). Home HTML 5.2KB gzip + tokens 3.2KB gzip.

**Límite declarado:** sin Safari/WebKit real en esta máquina (Windows). Se evitaron las trampas conocidas (`100vh` no se usa; `backdrop-filter` prohibido de origen); pendiente humo en iOS real al desplegar.

---

## 1. Conteo del gradiente de marca

**Dentro de las páginas: UNA aparición** — el logo del header (SVG inline). En todo el material: el favicon y la OG image también portan el mark a color, que ES el logo en contextos de identidad (pestaña del navegador, tarjeta social), no usos decorativos del gradiente. El segundo uso permitido está asignado y justificado por escrito a la OG image (`ARQUITECTURA.md`). En el cuerpo del sitio: cero gradientes en botones, cards, texto, bordes, fondos u hovers — verificado por grep, no por memoria. **Cumple la regla ≤2.**

## 2. Lista Negra, punto por punto

| Ítem | Veredicto |
|---|---|
| Gradiente fuera del logo / otros gradientes | ✅ Cero (grep) |
| Glassmorphism, backdrop-blur, blobs, aurora, logo difuminado de fondo | ✅ Cero (grep) |
| Grises neutros / colores de framework / #FFF / #000 | ✅ Cero: toda la rampa tinta a hue ~230 (grep) |
| Hero centrado + H1 + subtítulo + 2 botones + mockup | ⚠️→✅ **Encontrado y corregido en esta revisión**: el manifiesto tenía el par sólido+outline de template. El secundario ahora es un link editorial. Alineación: izquierda desde el día uno; mockup: nunca hubo. |
| Tres cards idénticas con ícono | ✅ Los servicios son filas editoriales numeradas sin íconos, con la columna central deliberadamente caída |
| Bento, rounded-2xl+shadow-lg, dark toggle, corporate memphis, grid de íconos | ✅ Cero; no existe una sola sombra en el sitio |
| Inter/Geist por default | ✅ Newsreader + Instrument Sans; 7 descartes por escrito en RESEARCH.md |
| Emojis en headings | ✅ Cero (la ✕ de "qué no hacemos" es glifo tipográfico en `--fg`) |
| Copy prohibido | ✅ Cero coincidencias (grep sobre `dist/`) |
| Datos/testimonios/clientes inventados | ✅ Cero; 9 pendientes reales en TODO-CONTENIDO.md |
| fade-up con stagger en todo / contadores / parallax | ✅ Un solo gesto (el tejido de la costura, una vez, con reduced-motion); hovers funcionales y nada más |
| Simetría absoluta / mismo padding-y | ✅ Actos con respiración distinta (192/128px según peso narrativo), composiciones descentradas |

## 3. ¿Qué tres cosas delatarían que esto lo pudo hacer una IA?

1. **El par de botones del hero** (sólido + outline). Era el tic de template más fuerte del sitio. **Corregido**: CTA primario + link editorial.
2. **Los tokens de acento usados como decoración**: "Empieza con" en azul y el borde de la nota de honestidad en `--accent`, violando la regla "solo interactivo" de la propia tabla de roles. Es el tipo de indisciplina que un sistema de una IA comete y un diseñador con criterio no. **Corregido**: ambos a `--fg`; el cian conserva su rol de puntuación solo sobre oscuro ("Entregable").
3. **La etapa Síntesis — la que lleva el nombre de la marca — era tipográficamente la más débil de la página del método** (grotesk pequeña dentro de una tarjeta, entre dos etapas con H2 de 38px). Una IA reparte jerarquía por plantilla; una mano decide dónde está el énfasis. **Corregido**: las tarjetas de la costura hablan ahora en la voz display (Newsreader), marcándolas como especiales en vez de menores.

## 4. Si tuviera que reconstruir una sección desde cero, ¿cuál?

**El cierre repetido.** Las tres páginas principales cierran con la misma fórmula (display-2 + botón sobre oscuro). Es consistencia defendible en un sitio de 4 páginas, pero es la sección con menos idea propia del sitio: no usa la geometría, no usa la costura, no dice nada que el hero no dijera. Si hubiera una iteración más, el cierre debería ser el espejo del manifiesto (el hueco cerrándose: la promesa cumplida tipográficamente). Se deja anotado como deuda de diseño consciente, no como descuido.

## 5. ¿El gesto de firma está bien ejecutado o es una excusa?

El gesto: **la costura** — la frontera entre actos con un elemento que la cruza, esquinas cortadas a 30° (única diagonal, derivada de los 120° del mark), −0.5° de rotación deliberada, y el único motion del sitio (tejerse una vez al entrar al viewport). Está bien ejecutado porque es **estructural, no cosmético**: en `/metodo` el elemento que cruza es la etapa Síntesis y en `/servicios` es Ejecución de proyectos — el contenido que une los dos mundos es literalmente el que está en la costura. Sale de la geometría del logo, no de su color, que es exactamente lo que exigía el brief. Donde admite crítica: en la home el contenido de la tarjeta que cruza es el más débil de los tres (un link al método); funciona, pero es el único de los tres cruces que es navegación en vez de sustancia.

## 6. ¿Se distingue de las referencias o solo las imita?

Toma patrones verificados (hero izquierdo, acento único por mundo, autoridad sin datos inventados, serif sobre oscuro) pero la **estructura de actos entretejidos con costuras narrativas no está en ninguna de las 10 referencias estudiadas** — Instrument alterna actos, pero no los entrelaza ni les da significado (análisis=oscuro, ejecución=claro, síntesis=la unión). El sitio se parece a su propio logo más de lo que se parece a Linear o a Stripe. La prueba de intercambiabilidad del copy pasa: "el hueco entre la decisión y la entrega", "Análisis. Síntesis. Ejecución.", la etimología — nada de esto sobrevive con otro nombre encima.

## 7. Segunda pasada (post-fixes)

Re-verificado tras aplicar §3: build limpio, `astro check` 0 errores/0 warnings, greps de Lista Negra en cero, el hero ya no tiene el par de template, los acentos respetan la tabla de roles, y las costuras tienen la voz display. Los hallazgos de la primera pasada están **resueltos en código**, no anotados para después. Queda como deuda declarada: el cierre repetido (§4) y el humo en iOS real al desplegar (§0).
