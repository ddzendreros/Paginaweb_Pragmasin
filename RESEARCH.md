# RESEARCH.md — Fase 1: Investigación UX/UI

> Generado: 2026-07-15. Todas las referencias fueron visitadas en vivo con el navegador (screenshots reales), salvo donde se indica. Las observaciones marcadas ◇ se complementan con conocimiento previo del sitio cuando la carga dinámica impidió capturar una sección.

---

## 1. Referencias estudiadas (10)

### 1.1 Linear — linear.app
- **Estructura:** hero de declaración + producto como prueba inmediata (screenshot de la app real ocupa el primer scroll). Nav mínima.
- **Tipografía:** grotesk propia, H1 enorme con tracking negativo, subtítulo diminuto → **contraste de escala agresivo** (relación display:body ~6:1).
- **Espacio negativo:** masivo arriba, denso abajo. Ritmo variable real.
- **Color:** monocromo oscuro casi total; el color solo existe dentro de screenshots del producto.
- **Densidad:** baja arriba → alta en secciones de features.
- **Motion:** revelados sutiles al scroll; secciones lazy que entran ya compuestas (verificado: una sección a medio cargar aparece como bloque negro).
- **Robable:** hero alineado a la izquierda; el producto como única imagen; la disciplina monocroma.

### 1.2 Stripe — stripe.com *(estructura vía texto; el canvas WebGL bloqueó el screenshot)*
- **Estructura:** hero con gradiente animado encerrado en un canvas → **el resto del sitio es claro, blanco y azul marino**. Producto por bloques temáticos.
- **Dato clave:** el eyebrow del hero es una métrica REAL y viva: "PBI mundial que funciona con Stripe: 1.68117547%". Autoridad con datos verdaderos, no adjetivos.
- **Color:** el caso canónico del brief — gradiente de marca confinado a UNA aparición de alto impacto.
- **Robable:** la contención cromática; UI de producto real como ilustración; cifras reales como ornamento.

### 1.3 Vercel — vercel.com
- **Estructura:** H1 de dos palabras ("Agentic Infrastructure") + 2 botones + **el triángulo del logo como única pieza visual del hero** + logo strip de clientes reales.
- **Tipografía:** Geist propia, escala brutal, tracking apretado.
- **Espacio negativo:** el hero es 80% vacío negro.
- **Color:** negro/blanco absolutos. Cero acento.
- **Motion:** glow sutilísimo tras el triángulo; nada más.
- **Robable:** **la geometría del logo como protagonista visual en vez del color** — exactamente la tesis §2.5 del brief. (Su B/N puro está prohibido para nosotros: nuestros neutros tintan a `--ink`.)

### 1.4 Ramp — ramp.com
- **Estructura:** eyebrow con métrica real viva ("US corporate payments processed by Ramp: 0.78%") → H1 con ingenio ("Time is money. Save both.") → captura de email + CTA único → documentos del producto como textura → ticker de datos en vivo.
- **Tipografía:** grotesk generosa; el headline es VOZ, no jerga.
- **Color:** off-white cálido + **un solo amarillo ácido usado exactamente una vez** (el CTA). Lección de acento único.
- **Densidad:** media-alta, editorial, textura de puntos tipo papel técnico.
- **Robable:** headline con ingenio específico del negocio; un acento = un uso; datos reales como decoración funcional.

### 1.5 Resend — resend.com
- **Estructura:** hero oscuro de máximo vacío: badge → H1 → 2 líneas → CTA + link. Nada más en el primer viewport.
- **Tipografía:** **display SERIF de alto contraste sobre negro** ("Email for developers") + grotesk para UI. Una serif en un producto dev = decisión con carácter, humaniza lo técnico.
- **Color:** negro con textura sutilísima; blanco tipográfico.
- **Robable:** la serif sobre oscuro como gesto de autoridad editorial en contexto técnico.

### 1.6 Basement Studio — basement.studio
- **Estructura:** una sola idea maximalista: escena 3D wireframe B/N que ocupa todo; nav mono con contadores "(25)".
- **Tipografía:** mono + grotesk condensada, actitud punk ("We make cool shit that performs").
- **Color:** blanco y negro totales. Otra vez: la firma es geometría/dibujo, no color.
- **Robable:** compromiso total con UN gesto; contadores reales en la nav (honestidad de inventario). Su maximalismo 3D NO es robable para consultoría B2B seria.

### 1.7 Locomotive — locomotive.ca
- **Estructura:** intro con scramble tipográfico que "decodifica" el mensaje ("Digital-First Design" / "Based in Montreal"), composición descentrada a la derecha.
- **Motion:** el motion ES la marca — texto que se resuelve desde ruido. Comunica "convertimos caos en claridad" sin decirlo.
- **Color:** B/N.
- **Robable:** un solo gesto de motion con significado narrativo (ruido→orden = análisis→síntesis). Peligro: retrasa la lectura si dura >1s — el brief lo prohíbe si estorba.

### 1.8 Work & Co — work.co
- **Estructura:** logo bloque rojo + headline grotesk ("We solve complex problems through design & technology" — casi nuestro posicionamiento) → **cita real de Fast Company en serif** → "Latest" con casos.
- **Tipografía:** grotesk para declaración + serif para la cita = jerarquía de voces.
- **Color:** claro, un solo rojo (logo, hairline superior, links). Acento único otra vez.
- **Robable:** **autoridad prestada** — validación de terceros real en lugar de testimonios fabricados; hairlines con etiqueta como divisores de sección.

### 1.9 Pentagram — pentagram.com
- **Estructura:** el hero es una **oración interactiva como UI**: "We design [Everything ⌄] for [Everyone ⌄]" — los dropdowns filtran el portafolio. ◇ Grid de casos debajo.
- **Tipografía:** serif del wordmark + grotesk utilitaria.
- **Robable:** el gesto de firma hecho de puro contenido (una oración que es interfaz). Cero tecnología exótica, máxima memorabilidad.

### 1.10 Instrument — instrument.com
- **Estructura:** intro animada por letras; ◇ debajo: bloques de casos a pantalla completa alternando claro/oscuro, tipografía enorme.
- **Robable:** ◇ la alternancia de actos claro/oscuro por sección como ritmo narrativo.

### Patrones transversales (evidencia, no gusto)
1. **Ningún hero centrado con dos botones** en las 10 referencias — todos alinean a la izquierda o descentran. La Lista Negra tiene razón empírica.
2. **Acento único usado con avaricia** (Ramp amarillo, Work & Co rojo) o monocromo total (Vercel, Basement, Locomotive).
3. **Autoridad = datos reales o terceros reales**, nunca adjetivos: métrica viva (Stripe, Ramp), prensa (Work & Co), producto a la vista (Linear).
4. **La firma sale de geometría, motion o contenido — no de color:** triángulo (Vercel), wireframe (Basement), scramble (Locomotive), oración-UI (Pentagram).
5. **Serif como voz de autoridad** en contextos técnicos (Resend display, Work & Co citas, Pentagram wordmark).
6. **Contraste de escala tipográfica agresivo** en todos; cuerpo pequeño y honesto.

---

## 2. Arquitectura de home — comparativa y decisión

**Contexto real que manda:** marca nueva, cero casos públicos, cero testimonios, cero logos de clientes. Vende criterio y ejecución. Público: empresas medianas/grandes que deciden con datos.

| Patrón | Pros | Contras | Veredicto |
|---|---|---|---|
| **Editorial / manifiesto** | Máxima diferenciación; luce criterio (lo único que hay en inventario); barato en assets | Sin sustancia debajo se queda en pose; poco SEO de servicio | Fuerte **como apertura**, insuficiente solo |
| **Case-study driven** | El más convincente cuando hay casos | **No hay casos.** Fabricarlos está prohibido (§2.1) y arruinaría la marca | ⛔ Inviable hoy; re-evaluar cuando existan 2–3 casos reales |
| **Servicio-céntrico** | Claridad comercial; SEO; expectativa B2B estándar | Commoditiza: cualquier consultora tiene la misma página; invita comparación por precio | Necesario **como capa**, no como tesis |
| **Proceso-céntrico** | El método es el único activo demostrable de una marca nueva; vende criterio, que es lo que Pragmasyn dice ser | Un proceso sin evidencia puede sonar a humo si no es específico de verdad | Fuerte **como núcleo** si el método es concreto y con nombre propio |
| **Híbrido M→P→S** | Cubre atención (manifiesto), diferenciación (proceso) y claridad comercial (servicios) sin inventar nada | Exige disciplina: tres actos, no un Frankenstein | ✅ **Elegido** |

**Decisión: híbrido Manifiesto → Método → Servicios, en tres actos** (tres: el número de la marca, §2.5).
- **Acto 1 — Manifiesto:** la postura ("los proyectos no fallan por falta de ideas; fallan en la ejecución"). Gana la atención y filtra al público correcto.
- **Acto 2 — Método:** el diferenciador. Tres etapas derivadas del propio nombre: **Análisis → Síntesis → Ejecución** (el centro es literalmente la marca: Pragma+Syn). Es lo único que una marca sin portafolio puede demostrar: cómo piensa.
- **Acto 3 — Servicios + acción:** aterriza en lo concreto y cierra en la acción primaria.
- **Defensa contra el contexto:** no requiere un solo dato inventado; convierte la ausencia de portafolio en una postura ("no vendemos historias: vendemos método"); y es honesto — que es un valor declarado de la marca.

## 3. Arquitectura de información y flujos

**Acción primaria del sitio: agendar una conversación de diagnóstico** (contacto). Todo lo demás es soporte. KPI: contactos calificados.

**Sitemap — 4 páginas + 1 legal:**

| Ruta | Rol | Justificación (una línea) |
|---|---|---|
| `/` | Los tres actos (manifiesto → método resumido → servicios resumidos → CTA) | La conversión ocurre aquí; lo demás profundiza |
| `/metodo` | El método completo, etapa por etapa, con entregables de cada una | Es la "página de producto" de una consultora sin casos: el método ES el producto |
| `/servicios` | Las tres líneas de servicio con alcance y para quién | El comprador B2B compara; darle una URL específica que compartir internamente |
| `/contacto` | Formulario mínimo + correo directo + qué esperar después de escribir | Reducir fricción de la única conversión que importa |
| `/privacidad` | Aviso de privacidad | Obligatorio en México (LFPDPPP) si un formulario capta datos personales |

**Lo que NO lleva el sitemap:** blog (sin motor de contenido real todavía — un blog con 2 posts de relleno es peor que ninguno), página "nosotros" separada (la postura del manifiesto la sustituye hasta que exista equipo público que mostrar → `[[PENDIENTE]]`), casos (no existen → `[[PENDIENTE]]`).

**Flujo primario:** decisor llega (referido/LinkedIn/búsqueda) → manifiesto lo filtra en 10 segundos → valida criterio en `/metodo` → cierra en `/contacto`. **Flujo secundario:** llega directo a `/servicios` por link compartido → método resumido → contacto.

---

## 4. Tres direcciones de arte

El color está fijo (§2.5). Varían: tipografía, composición, densidad, y proporción oscuro/claro.

### Dirección A — «Memorándum»
- **Tesis:** el sitio es el entregable: un documento de consultoría impecable — si el memo es así de claro, imagina el trabajo.
- **Proporción:** ~85% claro / 15% oscuro (una sola banda oscura: el método + footer).
- **Referencia visual:** Ramp (textura de papel técnico, densidad editorial) + Work & Co (hairlines etiquetadas, cita en serif).
- **Composición:** grid editorial denso, márgenes generosos, numeración de secciones (01/02/03), hairlines con etiqueta, ritmo de "documento que se lee".
- **Pareja tipográfica:** **Fraunces** (serif variable con optical sizing, carácter cálido sin ser vieja — display) + **Archivo** (grotesk neutral-cálida — cuerpo/UI). Ambas SIL OFL, autohospedables.
- **Por qué encaja:** "pocas palabras, mucha sustancia" hecho forma; el rigor como estética.
- **Riesgo:** el cian (`--signal`) casi no existe → se desperdicia la mitad viva de la paleta; puede leer "despacho tradicional".

### Dirección B — «Sala de máquinas»
- **Tesis:** la consultoría vista desde donde las cosas se ejecutan de verdad: precisión de instrumento, no de brochure.
- **Proporción:** ~75% oscuro / 25% claro.
- **Referencia visual:** Linear + Resend (vacío oscuro disciplinado) + anotaciones tipo plano de ingeniería (coordenadas, medidas, mono).
- **Composición:** vacío oscuro masivo, hairlines cian como instrumentación, anotaciones en mono (etiquetas, índices), bloques claros como "planos impresos".
- **Pareja tipográfica:** **Archivo Expanded** (display ancho, autoridad técnica) + **IBM Plex Mono** (anotaciones — Plex tiene carácter y es OFL).
- **Por qué encaja:** ejecución y rigor literales; el cian brilla en su hábitat; muy diferenciado del B2B mexicano típico.
- **Riesgo:** disfraz de dev-tool para una consultora de estrategia; puede sentirse frío para decisores no técnicos; `--reserve` (magenta) casi imposible de colocar.

### Dirección C — «Contraluz» ★ recomendada
- **Tesis:** síntesis hecha composición — dos mundos (análisis, oscuro; ejecución, claro) entretejidos como las cintas del logo: el hueco entre ellos es donde se lee la unión.
- **Proporción:** ~55% oscuro / 45% claro en **actos alternados deliberados** (no toggle: composición).
- **Referencia visual:** Instrument (actos alternados a pantalla llena) + Resend (serif sobre oscuro) + Pentagram (el gesto hecho de contenido).
- **Composición:** la home son tres actos que se entretejen: las **costuras entre secciones cortan en diagonal de 30°** (la única diagonal permitida, derivada de los 120° del mark) y un elemento de cada acto **sangra a través de la costura** hacia el siguiente (el entrelazado sobre-bajo del knot, hecho layout). El "hueco" del logo se vuelve sistema: hairlines que separan revelando el fondo del acto contiguo.
- **Pareja tipográfica:** **Newsreader** (serif con optical sizing, editorial y filosa — display, brilla sobre `--ink` como Resend) + **General Sans** (grotesk con carácter geométrico-humanista — cuerpo/UI; Fontshare ITF-FFL, comercial y autohospedable).
- **Por qué encaja:** es la única dirección donde la restricción de la paleta (el cian solo vive en oscuro, el azul solo en claro — medido en Fase 0: 11.66:1 vs 3.46:1) se convierte en **estructura narrativa**: cada mitad del sitio tiene su color interactivo propio, ambos del logo. Y el gesto de firma sale de la geometría C3 (costura a 30°, entrelazado), no del gradiente — exactamente lo que exige §2.5.
- **Riesgo:** la costura diagonal exige ejecución impecable (clip-path + alineación óptica); mal hecha parece error. Mitigación: se usa solo en las costuras entre actos (2–3 por página), el grid interno permanece ortogonal.

**Recomendación: C («Contraluz»), con A como plan B.** C es la única que usa TODA la paleta en sus términos, deriva su firma de la geometría del mark, y convierte la restricción central del brief en el argumento visual del sitio. A es excelente pero deja al logo sin su hábitat oscuro; B es la más fotogénica pero la menos honesta para una consultora de estrategia.

**Nota sobre la regla Inter/Geist (§8):** descartadas por escrito antes de elegir: Inter y Geist (defaults del ecosistema, firma visual de "sitio AI 2024–25"), Space Grotesk y Satoshi (los nuevos defaults de la misma cohorte), Poppins y Manrope (geométricas sin voz, omnipresentes en templates), DM Sans (neutralidad sin postura).

---

## 5. Qué NO vamos a hacer y por qué

| No haremos | Por qué |
|---|---|
| Casos de estudio, testimonios, logos o métricas | No existen; fabricarlos viola §2.1 y destruiría la credibilidad de una marca que vende transparencia |
| Bento grid | El contenido (3 actos, 3 etapas, 3 servicios) es ternario y narrativo, no un catálogo de features |
| 3D / WebGL / canvas animado | Presupuesto de JS <100KB y LCP <1.5s (§9); además la firma ya la da la geometría, no hace falta espectáculo |
| Scroll-jacking y parallax | Retrasan la lectura; el público decide con datos y tiene prisa |
| Dark mode toggle | El claro/oscuro aquí es composición con significado, no preferencia del usuario; un toggle la destruiría |
| Blog / recursos al lanzamiento | Sin motor de contenido real, un blog vacío comunica abandono; se agrega cuando exista cadencia |
| Página "Nosotros" con equipo | No hay equipo público confirmado → `[[PENDIENTE]]`; el manifiesto carga la identidad mientras tanto |
| Chatbot / widget de chat | Fricción visual y de performance; la acción primaria es una conversación real, no una simulada |
| Versión en inglés al lanzamiento | Público definido: México; una traducción a medias debilita ambas versiones; la IA queda preparada para i18n futura |
| CMS | Contenido estático de 4 páginas mantenido por quien ya edita el repo; un CMS es renta sin inquilino |
| Contadores animados, logo-strip, hero centrado con 2 botones, gradientes fuera del logo, glassmorphism, blobs | Lista Negra §8, verificada empíricamente en §1: ninguna referencia de élite los usa |
