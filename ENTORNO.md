# ENTORNO.md — Fase 0: Reconocimiento

> Generado: 2026-07-15. Analista: Claude (equipo senior de producto según BRIEF.md §0).

---

## 1. Inventario de capacidades

### Runtime local (Windows 11)
| Herramienta | Versión | Uso en este proyecto |
|---|---|---|
| Node.js | 24.12.0 | Build del sitio, tooling |
| npm | 11.6.2 | Dependencias; `npm view <pkg> version` para verificar versiones estables reales |
| Python | 3.14.2 + Pillow 12.2.0 | Tooling de análisis de imagen y contraste (ya construido, ver `scratchpad`) |
| Git | disponible (worktree activo) | Commits atómicos convencionales |

### Navegador (crítico para "ver el propio trabajo")
- **Claude Browser (MCP integrado)**: navegación, screenshots, árbol de accesibilidad, consola, red, **resize custom** (permite auditar 360 → 2560 px) y forzar `prefers-color-scheme` claro/oscuro. **Cubre el requisito de Playwright/DevTools.**
- **Claude in Chrome (MCP)**: Chrome real del usuario, disponible como respaldo para verificación cross-engine parcial.
- ⚠️ Safari/WebKit real **no está disponible** en esta máquina (Windows). Sustituto: revisión manual de las trampas conocidas de iOS (`100vh`/`svh`, `backdrop-filter` — que de todos modos está prohibido por la Lista Negra —, rendering de fuentes) + validación estática de compatibilidad vía caniuse/MDN. Marcado como límite del entorno.

### Documentación actualizada
- **No hay MCP tipo Context7 disponible** (registro de conectores consultado: sin resultados).
- Sustituto: `npm view <pkg> version` (fuente de verdad para versiones estables) + WebFetch/WebSearch contra documentación oficial antes de instalar cualquier dependencia. Regla de oro §2.3 cubierta.

### Skills / agentes relevantes
| Disponible | Para qué |
|---|---|
| `artifact-design`, `dataviz` | Fundamentos de diseño visual y visualización |
| `code-review` (niveles low→ultra), `simplify`, `security-review` | QA de código |
| `verify`, `run` | Verificación end-to-end del sitio corriendo |
| Agentes `Explore` / `Plan` / `general-purpose` | Investigación de Fase 1 en paralelo |
- **No existe una skill dedicada "frontend-design"**. Sustituto: el propio BRIEF (§2.5, §8) actúa como spec de diseño + auditoría visual con screenshots reales en cada fase.

### QA (Fase 5) — plan de herramientas
- **Lighthouse** vía `npx lighthouse` (Node 24 lo soporta; se instala on-demand en Fase 5).
- **axe-core** inyectado vía el navegador MCP para WCAG 2.2.
- **Contraste**: script propio ya construido y validado (ver §4 abajo).

---

## 2. Estado real del repositorio

```
/  (repo "Web", branch de trabajo: claude/pragmasyn-website-726fe3)
├── README.md               (vacío)
├── Web/logo.png            (1024×1024 RGBA)
├── branding/logo/logo.png  (byte-idéntico al anterior, sha256 84c900…)
└── branding/Prompt para logo.md  (prompt con el que se generó el logo)
```

- `BRIEF.md` **no estaba en el repo** (llegó por chat); se agrega en este commit como fuente de verdad.
- El "Prompt para logo.md" documenta la intención original: paleta Midnight `#0B1020` / Electric Blue `#3B82F6` / AI Violet `#7C3AED` / Neo Cyan `#22D3EE`, gradiente institucional de uso moderado, y el requisito de que el logo funcione en monocromático y a 16px. **La paleta del BRIEF §2.5 sustituye a esa paleta** (los hex del prompt son colores Tailwind default — exactamente lo que la Lista Negra prohíbe). Coinciden en filosofía; mandan los tokens del BRIEF.

---

## 3. Auditoría de `logo.png` (análisis a nivel de píxel)

### 3.1 Datos duros del archivo
| Propiedad | Valor | Contra el spec del prompt original |
|---|---|---|
| Dimensiones | 1024×1024 px | ⚠️ Pedía ≥4096×4096 |
| Fondo | **Transparente real** (α=0 en 89.4% del lienzo) | ✅ |
| Alfa | Casi binario: 5.5% opaco, 4.8% en 192–254 (antialias), 0.1% intermedio | ✅ recorte duro, sin glow en el asset compuesto |
| Núcleo sólido | bbox (257,251)–(750,689) → 493×438 px, ~48% del ancho del lienzo | ⚠️ Pedía 70–80% |
| Centroide del mark | (504, 526) vs centro (512, 512) | Ligeramente abajo-izquierda → **centrar ópticamente al colocarlo** |

⚠️ Nota técnica: el RGB bajo las zonas α=0 contiene un render con glow y fondo gris. Invisible al componer correctamente, pero **cualquier herramienta que ignore el canal alfa (o un export mal hecho) resucita el glow gris**. Tratar el PNG solo con pipelines que respeten alfa.

### 3.2 Colores reales muestreados (mandan sobre cualquier suposición)
| Familia | Hex muestreado | Presencia | Token BRIEF más cercano | Δ hue |
|---|---|---|---|---|
| Magenta | `#CC03FF` | Hotspot mínimo en el vértice superior (~0.4% de los px saturados) | `--reserve #C31FDD` | 4° |
| Violeta | `#B10BFE` | Transición vértice → lado izquierdo | — (vive dentro del gradiente) | — |
| Azul | `#0457FE` | **Dominante** (~55% del mark) | `--accent #1E5CF5` | 3° |
| Azure | `#0076FE` | Transición azul → cian | — | — |
| Cian | `#00CAF9` | Lado derecho / cola inferior | `--signal #0FE3E8` | 10° |

**Veredicto: la tabla de roles del BRIEF §2.5 se CONFIRMA.** Los tokens son derivados tonales coherentes con el mark (Δ hue ≤ 10°), no muestras literales — correcto para una paleta de UI. Única observación: `--signal` es 10° más verde que el cian real del logo; si en Fase 2 se quiere apego máximo, existe margen para acercarlo manteniendo el contraste sobre `--ink` (hoy 11.66:1, hay holgura de sobra).

### 3.3 Construcción geométrica
- **Tres cintas tipo aleta/creciente** entrelazadas formando un triángulo redondeado, vértice arriba, con weave sobre-bajo real (cada cinta pasa sobre una y bajo la otra).
- **Simetría rotacional C3 aproximada: IoU = 0.912** al rotar ±120° sobre el centroide. Es un raster generado por IA: la simetría es intencional pero imperfecta (wobble visible al medir, no a simple vista).
- El gradiente rota con la forma: magenta (vértice) → violeta → azul (lado izq.) → azure → cian (lado der./cola). Refuerza la lectura de giro horario.
- **Los huecos entre cintas son transparencia real** — el fondo se ve a través. Es literalmente la tesis del brief ("el hueco no separa, revela") ya materializada en el asset. Ancho variable, se afila hacia las colas.
- Las cintas llevan un **sombreado oscuro baked-in** en los bordes de solape (visible como filo navy sobre fondos claros; se funde sobre `--ink`).
- Ángulos: la envolvente es un triángulo de Reuleaux-like con vértices a ~120° entre sí — consistente con el sistema 120°/60°/30° del BRIEF §2.5.

### 3.4 Supervivencia por fondo (composites generados y verificados visualmente)
| Fondo | Veredicto |
|---|---|
| `--ink #0A1030` | ✅ **Hogar natural.** Los huecos se funden con el fondo, el cian brilla, el sombreado baked-in desaparece. |
| `--surface #F6F7FB` | ✅ Funciona. Los huecos leen como luz. La cola cian pierde algo de fuerza pero el mark sobrevive. |
| `#FFF` puro | ✅ Similar a surface. |
| Tonos medios (grises, azules medios) | ⛔ Evitar: el azul y el cian pierden separación del fondo. |
| Conclusión | **No se necesita una versión especial para oscuro — el logo está diseñado para oscuro.** Lo que se necesita es la variante monocromática (Fase 3) para contextos de un solo color. |

### 3.5 Tamaño mínimo y área de protección
- Test de reducción real (16/24/32/48/64 px sobre `--ink`):
  - **≥32px**: el knot y el weave leen completos. ✔ favicon 32.
  - **24px**: legible, weave comprimido pero presente.
  - **16px**: solo sobrevive la silueta triangular; el entrelazado desaparece. → **el favicon 16px necesita variante simplificada** (silueta plana mono o dos tonos, se genera en Fase 3).
- **Tamaño mínimo recomendado del mark completo: 24px** de alto en UI.
- **Área de protección propuesta**: 0.25× la altura del mark por lado (equivale aprox. al grosor de una cinta). Se formaliza con diagrama en Fase 3.

### 3.6 Vectorización
- **El auto-trace no es viable con calidad**: raster con gradientes + antialias ancho + simetría imperfecta = paths sucios y bandas de color.
- **Plan (Fase 3): reconstrucción manual en SVG** — se dibuja UNA cinta como path, se instancia rotada 0°/120°/240° (C3 perfecta, mejor que el original), tres `linearGradient` mapeados a las muestras reales de §3.2. El SVG reconstruido se vuelve el master; el PNG queda como referencia.
- Registrado en `TODO-CONTENIDO.md`: `[[PENDIENTE: vector original del logo, si existe]]` — si el cliente lo tiene, manda sobre la reconstrucción.

---

## 4. Contraste — ratios REALES calculados (corrige la tabla del BRIEF §2.5)

Calculados con luminancia relativa WCAG 2.x (script en scratchpad, reutilizable en Fase 2):

| Combinación | BRIEF decía | **Real** | Veredicto |
|---|---|---|---|
| `--ink` sobre `--surface` | ~17:1 | **17.36:1** | ✅ AAA — confirmado |
| `--signal` sobre `--ink` | ~11:1 | **11.66:1** | ✅ AAA — confirmado |
| `--accent` sobre blanco | ~4.9:1 | **5.38:1** | ✅ AA — mejor de lo que el brief temía, no requiere ajuste |
| `--accent` sobre `--surface` | — | **5.02:1** | ✅ AA |
| `--reserve` sobre blanco | ~5.2:1 | **4.60:1** | ⚠️ AA normal, más apretado de lo declarado |
| `--reserve` sobre `--surface` | — | **4.30:1** | ⛔ Falla AA texto normal → sobre claro, `--reserve` solo en texto grande (≥24px / 18.7px bold) o UI, o se oscurece el tono en Fase 2 |
| `--signal` sobre blanco/surface | ~1.6:1 | **1.59:1 / 1.49:1** | ⛔ Prohibido — confirmado |
| `--accent` sobre `--ink` | — | **3.46:1** | ⚠️ Solo UI/texto grande. **Consecuencia de diseño: en secciones oscuras el color interactivo de texto es `--signal`, no `--accent`.** |
| `--surface` sobre `--ink` | — | **17.36:1** | ✅ AAA |

Dos hallazgos que el brief no tenía:
1. **`--reserve` sobre surface falla AA** para texto normal — su único uso permitido (si se usa) debe ser grande, o sobre oscuro, o con tono ajustado.
2. **`--accent` no alcanza para texto normal sobre `--ink`** — la paleta dicta que el oscuro le pertenece al cian y el claro al azul. Simetría útil: cada mitad del sitio tiene su propio color interactivo, ambos del logo.

---

## 5. Límites declarados del entorno
1. **Sin Safari/WebKit real** (Windows). Mitigación descrita en §1.
2. **Sin MCP de documentación** tipo Context7. Mitigación: npm registry + docs oficiales vía web.
3. **Logo master es raster 1024px generado por IA** con C3 imperfecta. Mitigación: reconstrucción vectorial en Fase 3 + `[[PENDIENTE]]` del vector original.
4. Lighthouse/axe se instalan on-demand en Fase 5 (no se congela versión hoy).
