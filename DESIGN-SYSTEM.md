# Sistema de diseño — Luz

Una página oscura iluminada por el logo. Las referencias del dueño (Raycast, n8n, Authkit, Mercury,
Eraser, Vercel) coinciden en lo mismo: un mundo visual propio, profundidad hecha con luz y movimiento
con oficio. El software aparece como un objeto iluminado y el color vive en el arte de la marca.

La fuente de verdad son los tokens en `public/styles/tokens.css`. Este documento explica las
decisiones; los valores viven allá.

## Principios

1. **El logo es el arte.** Miles de triángulos (`src/components/Constellation.astro`) forman las tres
   cintas con su color real, se dispersan como campo de estrellas al bajar y se reúnen en el cierre.
   Si no hay WebGL 2 o JavaScript queda el arte estático de `Strands.astro`.
2. **El software se demuestra.** La app del hero funciona de verdad y los servicios
   (`src/components/BuildTiles.astro`) son piezas vivas, no filas de texto.
3. **Profundidad con luz.** Nada de sombras proyectadas: brillo interno (`--shadow-key`) y halos
   detrás de lo importante (`--glow-app`). La única excepción es la pantalla flotante de la hoja de
   papel (`--shadow-float`).
4. **El color es de la marca.** Los botones son neutros. El degradado de las cintas se reserva para
   el arte, el cronograma y las piezas vivas.
5. **El movimiento tiene oficio.** Rápido en lo que se toca, lento en lo que se lee.

## Color

| Ground | Uso | Fondo | Texto |
|---|---|---|---|
| `.ground-dark` | Toda la página | `--night-950` | `--mist-100` |
| `.ground-light` | La app del hero y avisos | `--white` | `--ink-900` |
| `.ground-paper` | La hoja de «El problema» en el inicio | `--white` | `--paper-ink` |
| `.ground-cobalt` | La tarjeta de WhatsApp en `/contacto` | `--cobalt` | `--white` |

`--night-950` nunca es negro puro: el azul del logo lo sostiene. Las superficies suben un paso cada
vez (`--night-900`, `--night-800`). Los componentes solo leen tokens contextuales, y todos los pares
de texto pasan 4.5:1.

Los colores de marca del Configurador son la excepción a los tokens: representan el software del
cliente, no a Pragmasyn.

**Hoja de papel.** «El problema» es el único momento claro y editorial de la página, inspirado en
Steep: casi acromático, con el morado del logo (`--lit-a`, `--surface-lit`) como único color, y solo en la respuesta «a tu
medida». Es una tarjeta del ancho del encabezado, nunca una banda de lado a lado: la constelación
debe seguir a la vista alrededor. Mientras el encabezado pasa sobre la hoja se vuelve casi sólido
(`--glass-alpha`), porque el vidrio sobre blanco baja el contraste del menú.

## Tipografía

Una familia: **Mona Sans**, variable en peso y ancho, en `public/fonts/mona-sans-latin-var.woff2`.
Los títulos grandes van ligeros (`--weight-display`, 440): la escala hace el trabajo, no el peso.
La excepción es el título de la hoja de papel, en **Newsreader** (`--font-serif`, peso 400, sin
cursiva), en `public/fonts/newsreader-latin-var.woff2`. Ningún otro elemento la usa, así que el
resto de las páginas no la descarga.

| Clase | Tamaño | Uso |
|---|---|---|
| `.display` | 46 → 104 | H1 y cierres |
| `.h2` | 32 → 60 | Títulos de sección |
| `.h3` | 20 → 24 | Filas y mosaicos |
| `.lead` | 17 → 20 | Entrada de sección |
| `.small` / `.caption` | 14 / 13 | Apoyo |

## Composición

- Retícula de 12 columnas, máximo 1320 px.
- **Hero:** título a la izquierda, arte que sale por la derecha, app debajo. Retícula técnica tenue.
- **Paneles:** radio de 20 px y `--shadow-key`. Agrupan piezas reales: comparación, cronograma,
  mosaicos, propiedad.
- **Sección tipo documentación:** nombre a la izquierda (`.sec__name`), contenido en la ancha.
- **Encabezado:** barra flotante de vidrio.

## Componentes

Antes que un bloque de texto, un componente. El texto aprobado sigue completo en la página; solo se
muestra menos a la vez.

| Componente | Qué es | Referencia |
|---|---|---|
| `Constellation` | Partículas que forman el logo; se apartan del cursor | Dala |
| `Marquee` | Franja de compromisos en movimiento continuo | n8n, Social Proof Row |
| `Versus` | Pantalla saturada contra pantalla a tu medida, con interruptor, sobre la hoja de papel | Steep, dope.security |
| `BuildTiles` | Servicios con pieza viva y borde tipo linterna | Mercury, Eraser, uimotion |
| `StepFlow` | Cuatro pasos como nodos con luz recorriendo la línea | n8n, Workflow Node |
| `OwnPass` | La propiedad como pase perforado que se inclina | dope.security, Boarding Pass |
| `Prompt` | Barra de comandos que lleva tu idea al formulario | Raycast |
| `MethodSteps` | Método por pasos, un paso abierto a la vez | n8n, Figure |
| `Clock` | Hora real de Ciudad de México en el pie | Max Yinger |
| `Icon` | Iconos de línea dibujados aquí | Authkit |

## Movimiento

| Momento | Qué pasa |
|---|---|
| Llegada | Título, texto, acciones, app y logo entran en orden. Solo CSS: no espera a un script. |
| Scroll | Los títulos llegan palabra por palabra y los bloques se asientan. |
| Hero | Las partículas forman el logo, huyen del cursor y la app se endereza al subir. |
| App | Las tarjetas viajan de columna, los números cambian con desenfoque, la app se arma al cambiar de negocio. |
| Comparación | Los módulos sobrantes se van, los tuyos crecen y dibujan su pieza, y la lista se enciende en morado. «A tu medida» dura el doble en pantalla. Cambia solo hasta que lo tocas. |
| Cronograma | Las barras se dibujan. |
| Servicios | Las piezas corren solo mientras están a la vista. |
| Páginas | Transición entre páginas; el encabezado no se mueve. |

Duraciones de 120 a 900 ms (`--dur-1` a `--dur-5`). Con `prefers-reduced-motion` todo se detiene, y
sin JavaScript no se oculta nada: las clases de entrada las agrega el script.

## Formulario

`/contacto` hace POST a `/api/contacto`, que `vercel.json` reenvía al Worker `workers/contacto`. El
mensaje llega al correo sin proveedor de formularios ni base de datos. Si falla, se ofrece el mismo
mensaje por WhatsApp.

## Reglas duras

- Todo texto sale de `docs/PROPUESTAS-COPY.md`.
- Sin valores crudos fuera de `tokens.css`, salvo las marcas de ejemplo del Configurador y las
  paradas de color de las cintas.
- Sin dependencias, fuentes externas, analítica ni cookies.
- Anima solo propiedades nombradas. Nunca `transition: all`.
- Todo control mide 44 px o más en móvil y tiene foco visible.
