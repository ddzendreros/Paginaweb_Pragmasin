# Sistema de diseño — Luz

Una página oscura iluminada por el logo. Las referencias del dueño (Raycast, n8n, Authkit, Mercury,
Eraser, Vercel) coinciden en lo mismo: un mundo visual propio, profundidad hecha con luz y movimiento
con oficio. El software aparece como un objeto iluminado y el color vive en el arte de la marca.

La fuente de verdad son los tokens en `public/styles/tokens.css`. Este documento explica las
decisiones; los valores viven allá.

## Principios

1. **El logo es el arte.** Las tres cintas (`src/components/Strands.astro`) entran por el borde de la
   ventana a gran escala, en giro lento. Nadie más tiene esta imagen.
2. **El software se demuestra.** La app del hero funciona de verdad y los servicios
   (`src/components/BuildTiles.astro`) son piezas vivas, no filas de texto.
3. **Profundidad con luz.** Nada de sombras proyectadas: brillo interno (`--shadow-key`) y halos
   detrás de lo importante (`--glow-app`).
4. **El color es de la marca.** Los botones son neutros. El degradado de las cintas se reserva para
   el arte, el cronograma y las piezas vivas.
5. **El movimiento tiene oficio.** Rápido en lo que se toca, lento en lo que se lee.

## Color

| Ground | Uso | Fondo | Texto |
|---|---|---|---|
| `.ground-dark` | Toda la página | `--night-950` | `--mist-100` |
| `.ground-light` | La app del hero y avisos | `--white` | `--ink-900` |
| `.ground-cobalt` | La tarjeta de WhatsApp en `/contacto` | `--cobalt` | `--white` |

`--night-950` nunca es negro puro: el azul del logo lo sostiene. Las superficies suben un paso cada
vez (`--night-900`, `--night-800`). Los componentes solo leen tokens contextuales, y todos los pares
de texto pasan 4.5:1.

Los colores de marca del Configurador son la excepción a los tokens: representan el software del
cliente, no a Pragmasyn.

## Tipografía

Una familia: **Mona Sans**, variable en peso y ancho, en `public/fonts/mona-sans-latin-var.woff2`.
Los títulos grandes van ligeros (`--weight-display`, 440): la escala hace el trabajo, no el peso.

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

## Movimiento

| Momento | Qué pasa |
|---|---|
| Llegada | Título, texto, acciones, app y logo entran en orden. Solo CSS: no espera a un script. |
| Scroll | Los títulos llegan palabra por palabra y los bloques se asientan. |
| Hero | El logo gira, se inclina hacia el puntero y la app se endereza al subir. |
| App | Las tarjetas viajan de columna, los números cambian con desenfoque, la app se arma al cambiar de negocio. |
| Comparación | Lo que pide el software genérico se tacha al aparecer. |
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
