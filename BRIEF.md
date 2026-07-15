# BRIEF DE EJECUCIÓN — Sitio web Pragmasyn
> **Cómo usar este archivo:** déjalo en la raíz de la carpeta del proyecto, junto a `logo.png`.
> Abre Claude Code en esa carpeta y escribe:
> *"Lee BRIEF.md completo y ejecútalo. Empieza por la Fase 0 y detente en cada checkpoint."*
> Usa plan mode (Shift+Tab) para las fases 0 y 1.
---
## 0. TU ROL
Actúas como un **equipo senior de producto**, no como un generador de código:
- **Design Engineer senior** (perfil tipo Vercel / Linear / Basement Studio): traduce dirección de arte a código con criterio tipográfico y de composición.
- **Frontend Architect** (8+ años): decide stack, arquitectura y presupuestos de rendimiento, y los defiende con argumentos.
- **UX Writer**: escribe copy real, específico y con voz. No relleno.
- **Director de arte hostil**: revisa el trabajo al final y lo destroza si es genérico.
El estándar de entrega es: **este sitio tiene que poder colgarse en el portafolio de un estudio de diseño y que nadie pregunte si lo hizo una IA.**
---
## 1. EL PROYECTO
**Pragmasyn** — consultoría de tecnología y estrategia.
- **Nombre:** *Pragma* (πρᾶγμα, "acción, hecho realizado") + *Syn* (σύν, "junto con"). Síntesis pragmática.
- **Posicionamiento:** convertimos problemas complejos en soluciones ejecutables.
- **Misión:** transformar problemas complejos en soluciones ejecutables, combinando análisis riguroso con acción decidida para generar resultados medibles.
- **Visión:** ser el referente en soluciones que integran estrategia y ejecución.
- **Valores:** pragmatismo · síntesis · rigor · ejecución · transparencia.
- **Personalidad:** inteligente pero accesible. Directa sin ser fría. Segura sin ser arrogante. Habla como un consultor que respeta el tiempo del cliente: pocas palabras, mucha sustancia. Cero jerga vacía.
- **Público:** empresas medianas y grandes que deciden con datos y valoran a quien entrega.
- **Idioma del sitio:** español (México). Código, commits y comentarios en inglés.
**Activo disponible:** `logo.png` en la raíz. Es la única fuente de verdad visual existente.
---
## 2. REGLAS DE ORO (aplican a todas las fases)
1. **No inventes datos.** Pragmasyn no tiene testimonios, logos de clientes, ni métricas públicas que puedas usar. Está **prohibido** fabricar "+150 clientes", "98% de satisfacción", testimonios de personas inexistentes o un logo strip de empresas reales sin permiso. Donde falte contenido real, pon un marcador visible `[[PENDIENTE: descripción exacta de lo que necesito del cliente]]` y acumula todo en `TODO-CONTENIDO.md`.
2. **Content-first.** Escribe el copy antes de maquetar. La composición se diseña para el contenido, no al revés.
3. **No confíes en tu training data para versiones.** Antes de instalar cualquier dependencia, verifica la versión estable actual (web o MCP de documentación). Nada de APIs deprecadas.
4. **Justifica cada decisión** en una línea. Si no puedes justificarla, es un default y probablemente sea la opción genérica.
5. **Detente en los checkpoints.** No avances a la siguiente fase sin mi aprobación explícita.
6. **Si algo es ambiguo, pregunta.** Una pregunta cuesta 30 segundos; una suposición equivocada cuesta una fase entera.
---
## 2.5 SISTEMA CROMÁTICO Y GEOMÉTRICO — derivado del logo
### La tensión, de frente
`logo.png` es un knot trifoliado con gradiente **magenta → violeta → azul → cian**. Es, literalmente, la paleta que la sección 8 llama "el gradiente de IA".
**Esto no es un error del brief. Es la restricción central del proyecto, y no se negocia.** El logo no se cambia. Lo que se hace es lo que hace cualquier estudio serio con una marca saturada y multicolor: **encerrarla**.
### Principio rector: el gradiente es invitado, no anfitrión
Instagram tiene un logo degradado y una UI en blanco y negro. Slack tiene un logo de cuatro colores y una interfaz aubergine. Stripe tiene gradientes y un sitio 90% blanco y azul marino.
Un mark saturado **solo se lee como marca cuando vive dentro de un entorno restringido**. Si el gradiente está en el logo, en el hero, en los botones y en las cards, deja de ser identidad y se vuelve decoración — y ahí exactamente nace el look de IA.
> **Regla dura: el gradiente completo aparece un máximo de DOS veces en todo el sitio.**
> Una es el logo. La segunda hay que ganársela y justificarla por escrito.
### Roles cromáticos — nada fuera de esta tabla
| Token | Hex | Rol | Regla |
|---|---|---|---|
| `--ink` | `#0A1030` | Color estructural dominante: texto, fondos oscuros, todo | ~80% del sitio |
| `--surface` | `#F6F7FB` | Off-white enfriado hacia el índigo | Nunca `#FFF` puro fuera del logo |
| `--accent` | `#1E5CF5` | **Único** color interactivo: links, botones, focus | Nada más lo usa |
| `--signal` | `#0FE3E8` | Cian de puntuación | **Solo sobre `--ink`.** Jamás texto sobre claro |
| `--reserve` | `#C31FDD` | Magenta | **Un uso en todo el sitio, o ninguno** |
**Neutrales:** rampa completa derivada del índigo, no gris puro. **Prohibido `#000`, `#FFF` y cualquier gris neutro** (`#888`, `slate-*`). Todo neutro lleva un tinte frío hacia `--ink`. Es lo que cohesiona el sitio con el logo sin repetir el gradiente.
### Contraste — verificar antes de usar, no después
| Combinación | Ratio aprox. | Veredicto |
|---|---|---|
| `--ink` sobre `--surface` | ~17:1 | ✅ Todo |
| `--signal` sobre `--ink` | ~11:1 | ✅ Excelente |
| `--reserve` sobre blanco | ~5.2:1 | ⚠️ AA normal, apenas |
| `--accent` sobre blanco | ~4.9:1 | ⚠️ AA normal, apenas — **recalcula y ajusta el tono si no pasa** |
| `--signal` sobre blanco | **~1.6:1** | ⛔ **PROHIBIDO. Invisible.** |
**Consecuencia de diseño, no de accesibilidad:** el cian solo funciona sobre oscuro. Por lo tanto **el sitio necesita secciones oscuras** para que el color de señal exista. Eso no es un accidente — es la paleta dictando la composición. Diséñalo a propósito.
Calcula **todos** los ratios reales con una herramienta y entrega la tabla en `DESIGN-SYSTEM.md`. Si un valor no pasa, ajusta el tono (mantén el hue, mueve la luminosidad). No lo uses "porque se ve bien".
### El regalo real: la geometría
El logo es un knot de **simetría rotacional C3**: tres formas idénticas rotadas 120°, entrelazadas, separadas por huecos blancos que permiten leer la unión.
**Eso es la tesis de la marca hecha forma:** *síntesis* = partes distinguibles que forman un todo. El hueco no separa, revela.
Extrae de ahí un sistema, y úsalo con más ambición que el color:
- **Estructura ternaria** — tres es el número de la marca. Tres pilares del método, tres líneas de servicio, tres actos en la narrativa de la home. No cuatro cards porque cuadran en el grid.
- **Ángulos de 120° / 60° / 30°** — los únicos ángulos no ortogonales permitidos en todo el sitio. Cualquier diagonal sale de ahí.
- **El hueco como forma positiva** — hairlines, separaciones que revelan estructura, espacio negativo que trabaja. El vacío es material.
- **Entrelazado** — elementos que se superponen pasando uno sobre y otro bajo. Ruptura del grid con lógica.
- **Rotación como movimiento** — el mark implica giro. Ahí está el material del gesto de firma.
**El gesto de firma debe salir de la geometría, no del gradiente.** Un gradiente lo copia cualquiera; un sistema geométrico coherente derivado del mark es lo que delata una mano con criterio.
---
## 3. FASE 0 — Reconocimiento del entorno
**No escribas una línea de código de producto todavía.**
1. **Inventaría tus capacidades.** Revisa qué skills, plugins, MCP servers y subagentes tienes disponibles (`/help`, `/plugin`, `/mcp`, `/agents`, contenido de `.claude/`). Reporta la lista.
2. **Instala lo que falte y sea útil.** Como mínimo, busca y habilita (si están disponibles en el marketplace de plugins o vía MCP):
   - La skill de **frontend-design** / diseño de UI, si existe en tu entorno.
   - Un **MCP de navegador (Playwright/Chrome DevTools)** para poder ver, screenshotear y auditar lo que construyes. Esto es crítico: **necesitas ver tu propio trabajo renderizado**, no imaginarlo.
   - Un **MCP de documentación actualizada** (tipo Context7) para no alucinar APIs.
   - Cualquier skill de accesibilidad, performance o testing que encuentres.
   Si algo no está disponible, dilo explícitamente y propón el sustituto.
3. **Analiza `logo.png`:** ábrelo y verifícalo contra la sección 2.5.
   - Muestrea los hex reales del gradiente y **confirma o corrige** la tabla de roles. Si mis valores están mal, mandan los tuyos — pero repórtalo.
   - Reconstruye la **construcción geométrica** (rotación C3, ángulos, radios, ancho de los huecos blancos). Documéntala.
   - Determina el **área de protección** y el tamaño mínimo legible.
   - **Vectorízalo a SVG** (el PNG no escala y el gradiente en raster se ve sucio). Si el trazado automático no da calidad, dilo y márcalo como `[[PENDIENTE: se necesita el vector original del logo]]`.
   - Verifica sobre qué fondos sobrevive. El cian del mark contra `--surface` casi desaparece: el logo probablemente necesita una versión para fondo oscuro.
4. **Crea `ENTORNO.md`** con el inventario y lo instalado.
**⛔ CHECKPOINT 0 — Muéstrame el reporte y espera aprobación.**
---
## 4. FASE 1 — Investigación de UX/UI (todavía sin código)
Objetivo: decidir con evidencia, no con gusto.
1. **Estudia 8–10 referencias reales** del segmento "consultoría / producto técnico con diseño excelente". Sugerencias de punto de partida (amplíalas por tu cuenta): Linear, Stripe, Vercel, Ramp, Resend, Clerk, Retool, Basement Studio, Locomotive, Instrument, Work & Co, Pentagram. Usa el MCP de navegador para verlas de verdad si puedes.
   Para cada una registra: **estructura de la home, escala tipográfica, uso del espacio negativo, tratamiento del color, densidad de información, patrón de motion, y qué hace bien que sea robable.**
2. **Compara patrones de arquitectura de home para consultoría B2B** y evalúa cuál conviene aquí, con pros/contras:
   - *Editorial / manifiesto* (declaración fuerte, poco scroll, mucho tipo)
   - *Case-study driven* (el trabajo es el argumento) — ⚠️ evalúa la viabilidad: no hay casos reales todavía
   - *Servicio-céntrico* (qué hacemos, cómo, para quién)
   - *Proceso-céntrico* (el método como diferenciador)
   - Híbridos
   **Recomienda uno y defiéndelo** contra el contexto real: marca nueva, sin portafolio público, que vende criterio y ejecución.
3. **Define arquitectura de información y user flows.** ¿Cuál es la acción primaria? ¿Cuántas páginas realmente hacen falta? Menos es más: un sitio de 4 páginas excelentes gana a uno de 12 mediocres. Justifica el sitemap.
4. **Propón 3 direcciones de arte distintas** (no 3 variaciones del mismo tema). Cada una con: nombre, tesis en una frase, referencia visual, pareja tipográfica, y por qué encaja con "síntesis pragmática". **Recomienda una.**
   El color **no** está a debate: la sección 3.5 lo fija, derivado del logo. Lo que sí varía entre direcciones es la tipografía, la composición, la densidad, y **cuánto del sitio vive en oscuro vs. en claro**.
5. **Entrega `RESEARCH.md`** con todo lo anterior + una sección "**Qué NO vamos a hacer y por qué**".
**⛔ CHECKPOINT 1 — Preséntame las 3 direcciones y tu recomendación. Espera mi elección.**
---
## 5. FASE 2 — Sistema de diseño
1. **Design tokens** en un solo archivo (CSS custom properties o equivalente). **Ningún valor hardcodeado en componentes. Nunca.**
2. **Escala tipográfica** con razón matemática explícita (ej. 1.25 / 1.333), no la escala default del framework. Define: display, h1–h4, body, small, caption, y sus `line-height` y `letter-spacing` **por tamaño** (el tracking se ajusta ópticamente: negativo en display, neutro o positivo en cuerpo).
3. **Pareja tipográfica con carácter.** Si eliges una geométrica moderna, que sea una decisión, no la inercia. Justifica el par. Autohospeda las fuentes con `font-display: swap` y subsetting.
4. **Grid y espaciado:** grid de 12 columnas con márgenes y gutters definidos, escala de espaciado base 4/8, y **permiso explícito para romper el grid** cuando la composición lo pida.
5. **Especificación de motion:** duraciones, easings (nada de `ease-in-out` genérico — usa curvas custom), y la regla de que el motion **comunica jerarquía o estado**, no decora. Máximo **un gesto de movimiento con personalidad** en todo el sitio; el resto es funcional y casi imperceptible. `prefers-reduced-motion` respetado desde el día uno, no como parche.
6. **Estados completos** para cada componente interactivo: default, hover, focus-visible, active, disabled, loading, error, empty.
7. **Entrega `DESIGN-SYSTEM.md`** + los tokens implementados.
**⛔ CHECKPOINT 2 — Muéstrame los tokens y una página de specimen tipográfico renderizada.**
---
## 6. FASE 3 — Contenido y assets
### Copy
Escribe todo el copy tú, en español mexicano, con la voz definida arriba. **Específico, no aspiracional.**
- ❌ "Transformamos tu negocio con soluciones innovadoras de vanguardia."
- ✅ "La mayoría de los proyectos no fallan por falta de ideas. Fallan en la ejecución."
### Logo
- Usa `logo.png` como base. Genera el sistema completo: versión principal, monocromática, versión reducida/isotipo si aplica, favicon (`.ico` + `.svg` + apple-touch), y OG image.
- Define y respeta el área de protección. **No lo estires, no lo recolorees fuera de la paleta, no lo pongas sobre fondos que lo maten.**
- Optimiza: SVG si vectorizaste, PNG/WebP optimizado si no.
### Imágenes
- Busca imágenes en fuentes con licencia clara y libre para uso comercial (Unsplash, Pexels). **Verifica la licencia de cada una** y registra autoría en `CREDITS.md`.
- **Prohibido el cliché de stock corporativo:** apretones de manos, gente señalando un pizarrón, juntas con post-its de colores, personas sonriendo a una laptop, lens flares, "equipo diverso mirando gráficas".
- Prefiere: **abstracto, textural, arquitectónico, documental, macro, o material real.** Si una imagen no aporta significado, la sección está mejor sin ella. El espacio negativo no es un problema a resolver.
- Procesa todo a **AVIF + WebP con fallback**, tamaños responsive, `width`/`height` explícitos (CLS = 0), lazy loading salvo el LCP.
- Considera seriamente si el sitio necesita fotos siquiera. Un sitio de puro tipo + color + composición puede ser más fuerte y más honesto para esta marca.
---
## 7. FASE 4 — Construcción
### Stack
**Decide tú y justifica en `ARQUITECTURA.md`.** Guardrails:
- Si el sitio es principalmente marketing/estático → prioriza un stack de mínimo JS enviado al cliente (Astro es fuerte candidato; islands solo donde haga falta).
- Si hay necesidad real de app, CMS o rutas dinámicas → Next.js (App Router).
- **No metas una librería sin justificarla.** Cada dependencia paga renta.
- TypeScript en strict mode. No `any`.
- Nada de librerías de componentes prefabricados para la UI de marca (shadcn/ui está bien como base *headless* de accesibilidad, **pero si el resultado se ve a shadcn default, fallaste**).
### Código
- HTML semántico real: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>` con heading, `<footer>`. Un solo `<h1>` por página, jerarquía sin saltos.
- Componentes con una responsabilidad. Nombres del dominio del negocio, no `Card2`, `SectionWrapper`, `NewComponent`.
- Comentarios solo donde el *por qué* no sea obvio. Cero comentarios que narren lo que el código ya dice.
- Commits atómicos con mensajes convencionales. El historial de git debe leerse como el de un humano trabajando, no como un dump.
- `README.md` real: cómo correrlo, decisiones, estructura.
---
## 8. 🚫 LISTA NEGRA — Cómo NO verse hecho por IA
Esta es la sección más importante del brief. **Cada uno de estos es motivo de rechazo automático.**
### Prohibido — visual
- **El gradiente de marca fuera del logo** (salvo el único segundo uso permitido y justificado por la sección 2.5). Nada de gradiente en botones, cards, texto, bordes, íconos, hovers o fondos de sección. **Este es el punto más importante de toda la lista: es el que va a querer romperse solo.**
- Cualquier **otro** gradiente que no sea el de marca. Cero.
- **Glassmorphism**, `backdrop-blur` decorativo, tarjetas translúcidas flotantes.
- **Blobs/orbes borrosos** de fondo. Manchas de color difuminadas. "Aurora" backgrounds. Especialmente tentador aquí porque el logo los sugiere — **no**.
- **El logo agrandado y difuminado** como fondo de sección. El logo ampliado al 400% con opacidad 0.05 detrás del hero. El logo repetido como patrón. Es el recurso de quien no tiene una idea.
- **Colores default del framework** o grises neutros. Todo neutro se tinta hacia `--ink` (ver sección 2.5).
- **Hero centrado** con H1 gigante + subtítulo + dos botones (uno sólido, uno outline) + mockup flotando con perspectiva.
- **Tres cards idénticas en fila** con ícono dentro de un cuadrado redondeado de color pastel.
- **Bento grid** sin una razón estructural genuina en el contenido.
- La firma `rounded-2xl` + `shadow-lg` + `border border-slate-200` aplicada a todo.
- **Colores default del framework** (`slate-900`, `indigo-600`, `gray-50`…). Todo sale de tokens.
- **Inter o Geist por default.** Si terminas usando una, que sea tras descartar otras cinco por escrito.
- **Emojis** como íconos de sección o en headings.
- Grid de íconos de Lucide/Heroicons genéricos como sustituto de contenido.
- Dark mode toggle "porque sí".
- Ilustraciones vectoriales tipo *corporate memphis* (personitas planas de brazos largos).
- **Simetría absoluta.** Todo centrado. Todas las secciones con el mismo `padding-y`.
### Prohibido — copy
- "Desbloquea", "Impulsa", "Potencia", "Eleva", "Revoluciona", "de vanguardia", "soluciones innovadoras", "sin fisuras / seamless", "en el mundo actual, cada vez más competitivo…", "llevamos tu negocio al siguiente nivel", "somos tu aliado estratégico".
- Headline de tres palabras sin sustantivo concreto.
- Cualquier oración que aplicaría igual a una consultora, una fintech o una panadería.
- Datos, testimonios, logos de clientes o premios **inventados**.
### Prohibido — motion
- `fade-up` con `stagger: 0.1` en absolutamente todo lo que entra al viewport.
- Contadores animados de métricas inventadas.
- Parallax por default.
- Cualquier animación que retrase la lectura del contenido.
### Obligatorio en su lugar — las señales de mano humana
- **Composición asimétrica y editorial.** Tensión, no simetría. Contenido que se apoya en el grid y a veces lo rompe a propósito.
- **Ritmo vertical variable:** secciones que respiran distinto según su peso narrativo. Una sección densa seguida de una casi vacía es una decisión, no un error.
- **Contraste tipográfico agresivo:** display grande de verdad junto a cuerpo pequeño de verdad. Diferencia de tamaño, peso y ancho, no solo de tamaño.
- **Espacio negativo como material de diseño**, no como espacio sobrante.
- **Alineación óptica, no matemática.** Comillas colgadas, ajustes de -1/-2px donde el ojo lo pide, corrección de espaciado en mayúsculas.
- **Detalles que nadie pide y todos notan:** `::selection` con color de marca, focus rings diseñados (no el outline del navegador ni `outline: none`), scrollbar tratado, transiciones de hover con intención, `text-wrap: balance` en headlines, viudas y huérfanas controladas.
- **Un solo gesto de firma:** una idea de interacción o composición memorable, ejecutada impecablemente. No cinco a medias.
- **Imperfección deliberada** donde tenga sentido: un desalineo intencional, una rotación de 0.5°, un elemento que sangra fuera del contenedor.
- **Micro-copy con voz:** estados vacíos, labels, mensajes de error y el footer también hablan como Pragmasyn.
---
## 9. FASE 5 — QA (no negociable)
Usa el MCP de navegador para auditar de verdad. **Screenshotea y mírate el trabajo.**
### Presupuestos de rendimiento
| Métrica | Objetivo |
|---|---|
| Lighthouse (las 4 categorías) | ≥ 95 |
| LCP | < 1.5 s |
| CLS | < 0.05 |
| INP | < 200 ms |
| JS en la carga inicial | < 100 KB gzip |
| Fuentes | autohospedadas, subset, ≤ 2 familias |
### Accesibilidad — WCAG 2.2 AA mínimo
- Navegación completa por teclado, orden de tab lógico, `focus-visible` diseñado y visible en todos los interactivos.
- Contraste ≥ 4.5:1 en texto, ≥ 3:1 en UI. **Verifica cada combinación de la paleta y reporta la tabla.**
- `alt` descriptivo real (no "imagen de..."), landmarks, `aria-*` solo donde HTML semántico no alcance.
- `prefers-reduced-motion` funcionando.
- Prueba con zoom al 200% y con el texto a 200%.
### Responsive
- Diseña los breakpoints según **dónde se rompe el contenido**, no según tamaños de iPhone.
- Verifica 360px, 768px, 1024px, 1440px, 1920px y **2560px** (los sitios "AI" siempre se ven rotos o vacíos en ultrawide).
- Áreas táctiles ≥ 44px.
### Cross-browser
Chrome, Firefox, Safari (incluido iOS — cuidado con `100vh`, `backdrop-filter`, y el rendering de fuentes).
### SEO técnico
Meta tags, OG + Twitter card con imagen propia generada, `sitemap.xml`, `robots.txt`, JSON-LD (`Organization`), canonical, `lang="es-MX"`.
---
## 10. FASE 6 — La revisión hostil
Cuando creas que terminaste, **cambia de sombrero**. Eres un director de arte de un estudio top al que le pidieron opinión y no tiene interés en ser amable.
1. Toma screenshots de todo el sitio en desktop y móvil.
2. **Ve la Lista Negra de la sección 8 punto por punto** y verifica cada ítem contra lo que construiste. Sé literal y despiadado.
3. Responde por escrito, en `CRITICA.md`:
   - **Cuenta las apariciones del gradiente de marca.** Si son más de dos, empieza por ahí.
   - ¿Qué tres cosas delatan que esto lo pudo haber hecho una IA?
   - Si tuviera que reconstruir una sección desde cero, ¿cuál y por qué?
   - ¿Cuál es el gesto de firma? ¿Está realmente bien ejecutado o es una excusa?
   - ¿Este sitio se distingue de las referencias o solo las imita?
4. **Arregla lo que encontraste.** Luego repite la revisión una segunda vez.
---
## 11. ENTREGABLES
```
/
├── logo.png                 (input)
├── BRIEF.md                 (este archivo)
├── ENTORNO.md               (Fase 0)
├── RESEARCH.md              (Fase 1)
├── DESIGN-SYSTEM.md         (Fase 2)
├── ARQUITECTURA.md          (Fase 4 — stack y decisiones)
├── CRITICA.md               (Fase 6 — autocrítica + fixes)
├── TODO-CONTENIDO.md        (todo lo marcado [[PENDIENTE]])
├── CREDITS.md               (licencias de imágenes y fuentes)
├── README.md
└── src/ …                   (el sitio)
```
---
## 12. CRITERIOS DE ACEPTACIÓN
Este trabajo se acepta solo si **todo** lo siguiente es cierto:
- [ ] Cero ítems de la Lista Negra presentes.
- [ ] Todos los presupuestos de rendimiento y accesibilidad cumplidos y **demostrados con evidencia** (reporte, no afirmación).
- [ ] Cero datos, testimonios o clientes inventados. Todo lo pendiente está marcado y listado.
- [ ] Cero valores hardcodeados fuera de los tokens.
- [ ] **El gradiente de marca aparece ≤ 2 veces en todo el sitio**, y el segundo uso está justificado por escrito.
- [ ] Cero grises neutros: todo neutro tinta hacia `--ink`.
- [ ] Tabla de contraste completa, calculada con herramienta, entregada y sin ítems reprobados.
- [ ] El gesto de firma sale de la **geometría** del logo, no de su color.
- [ ] El copy es específico de Pragmasyn: **si le cambias el nombre a otra empresa, deja de tener sentido.**
- [ ] Cada decisión de diseño y de stack tiene una justificación escrita de una línea.
- [ ] Existe un gesto de firma identificable y bien ejecutado.
- [ ] `CRITICA.md` existe, es duro consigo mismo, y los hallazgos están resueltos.
- [ ] Se ve como algo que un estudio cobraría por hacer.
---
**Empieza por la Fase 0. No avances sin checkpoint.**
