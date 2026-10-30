# Sistema de diseño — Oficio

El trabajo es la prueba. Una empresa que construye software no se describe: se demuestra. Por eso
el elemento principal del sitio es una aplicación que funciona, y todo lo demás se queda callado
alrededor de ella.

La fuente de verdad son los tokens en `public/styles/tokens.css`. Este documento explica las
decisiones; los valores viven allá.

## Principios

1. **Una sola pieza protagonista.** La app del hero (`src/components/Configurator.astro`) se usa de
   verdad: cambia estados, recalcula indicadores, crea registros. Cada negocio tiene su propia
   pantalla: tablero, agenda, tabla o plano.
2. **La estructura lleva información.** Un cronograma muestra el acompañamiento; una tabla muestra
   el método. Si un borde, número o etiqueta no dice nada, no va.
3. **Nada se anima solo.** El movimiento responde a lo que hace la persona. No hay entradas al hacer
   scroll, ni brillos, ni transiciones entre páginas.
4. **Cero decoración.** Sin sombras, degradados, iconos de relleno ni tarjetas para agrupar lo que
   ya está agrupado.

## Color

Neutros fríos, tinta azul profundo y el cobalto del logo. El cobalto se usa como campo completo en
los momentos importantes; fuera de eso, solo para acciones y enlaces.

| Ground | Uso | Fondo | Texto |
|---|---|---|---|
| `.ground-light` | Canvas | `--white` | `--ink-900` |
| `.ground-dark` | Pie y secciones de peso | `--deep-900` | `--deep-100` |
| `.ground-cobalt` | Problema y cierre | `--cobalt` | `--white` |

Los componentes solo leen tokens contextuales (`--bg`, `--fg`, `--interactive`, `--action-bg`…).
Cambiar de ground no toca el componente. Todos los pares de texto pasan 4.5:1 y los bordes de
control 3:1.

Los colores de marca del Configurador son la única excepción a los tokens: representan el software
del cliente, no a Pragmasyn.

## Tipografía

Una familia: **Mona Sans**, variable en peso y ancho, autoalojada en
`public/fonts/mona-sans-latin-var.woff2`. El ancho y el peso hacen el trabajo de una segunda fuente.

| Clase | Tamaño | Uso |
|---|---|---|
| `.display` | 42 → 88 | H1 y cierres |
| `.h2` | 30 → 52 | Títulos de sección |
| `.h3` | 20 → 24 | Filas y subtítulos |
| `.lead` | 17 → 20 | Entrada de sección |
| `.small` / `.caption` | 14 / 13 | Apoyo |
| `.label` | 14 | Nombres de sección, en mayúscula inicial |

Sin mayúsculas sostenidas, sin cursivas de acento y sin flechas en los enlaces. Los números de la
app usan cifras tabulares.

## Composición

- Retícula de 12 columnas, máximo 1320 px.
- **Sección tipo documentación:** nombre en la columna izquierda (`.sec__name`, 1–3), contenido en
  la ancha (`.sec__body`, 4–12).
- **Apertura y cierre:** título en 1–8, explicación y acción en 9–12.
- **Filas de especificación:** `.spec__row`, dos columnas separadas por líneas.
- Las secciones llegan al borde de la ventana. Nada de paneles redondeados flotando.

## Geometría

El radio sigue la jerarquía: 4 px en estados y tarjetas de la app, 6 px en controles, 10 px en el
marco de la app. Sin píldoras.

## Movimiento

Tres duraciones (`--dur-1` a `--dur-3`, de 90 a 220 ms). Se usa en estados de control, la hoja del
menú y el cambio de negocio. Con `prefers-reduced-motion` todo es inmediato.

## Formulario

`/contacto` hace POST a `/api/contacto`, que `vercel.json` reenvía a un Worker propio
(`workers/contacto`). El mensaje llega al correo sin proveedor de formularios ni base de datos. Si
el envío falla, se ofrece el mismo mensaje ya escrito por WhatsApp.

## Reglas duras

- Todo texto sale de `docs/PROPUESTAS-COPY.md`.
- Sin valores crudos fuera de `tokens.css`, salvo las marcas de ejemplo del Configurador.
- Sin dependencias, fuentes externas, analítica ni cookies.
- Máximo un botón relleno por sección y un secundario.
- Todo control mide 44 px o más en móvil y tiene estado de foco visible.
- Sin JavaScript todo se lee y el selector de negocio sigue funcionando.
