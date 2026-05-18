# Andover Design System

**Andover Comedores y Limpiezas S.L.** — Servicios integrales de comedor, limpieza y personal de apoyo para colegios y colectividades en Madrid y Alicante.

> *"Comedores bien gestionados, centros más tranquilos."*

This design system codifies the brand identity, visual foundations, and UI patterns for Andover — a family-run B2B services company that needs to feel modern, premium and trustworthy without losing its warm, human character.

---

## Brand at a glance

| | |
|---|---|
| **Sector** | B2B services — catering de colectividades, limpieza, personal auxiliar |
| **Audience** | Responsables de colegios, centros educativos, colectividades, proveedores, candidatos |
| **Geography** | Madrid · Alicante |
| **Idea fuerza** | *"Andover se encarga de todo para que el centro esté tranquilo."* |
| **Tone** | Familiar · Cercana · Resolutiva · Profesional · Moderna · Flexible |

## Sources

This system was built from a written brief plus public records research (BORME, Informa D&B, Axesor, eInforma, LinkedIn). The original brief is preserved in `brief.md`. **Verified company data** (CIF, address, phone, year founded, size) lives in `verified-data.md` — it's the single source of truth for those fields; never invent numbers, leave `[placeholder]` until the client confirms. photography, testimonials — replace the corresponding placeholders flagged throughout the system with `[LOGO ANDOVER]`, `[Foto real]`, `[Testimonio real]`, etc.

---

## Index

```
README.md                  · this file — brand context, fundamentals, iconography
brief.md                   · original written brief (preserved verbatim)
colors_and_type.css        · CSS tokens — color, type, spacing, radius, shadow, motion
SKILL.md                   · skill entry-point for Claude Code / Agent Skills
assets/                    · logos, motifs, illustrations, placeholder imagery
fonts/                     · webfonts (loaded via Google Fonts CDN)
preview/                   · design-system cards (Type, Colors, Spacing, Components, Brand)
ui_kits/website/           · Andover marketing website — full clickable landing
```

---

## Content fundamentals

### Language & voice
- **Idioma:** castellano (España). Nunca inglés salvo términos técnicos universales (catering).
- **Persona:** tercera persona o "nosotros" implícito — "Andover trabaja…", "Nos encargamos…". Evitar "yo" o frases corporativas distantes en tercera persona pura ("la empresa").
- **Trato al cliente:** "tu centro", "vuestro colegio" — cercano sin ser informal de chiringuito.

### Tono
| Sí | No |
|---|---|
| Familiar, cercano, tranquilizador | Infantil, simpaticón |
| Profesional, claro, enfocado a beneficios | Distante, corporativo, frío |
| Resolutivo, concreto | Vago, vacío, "líderes del sector" |
| Comercial sin presión | Agresivo, urgente, vendedor |

### Casing y puntuación
- Titulares: **Sentence case** ("Comedores bien gestionados, centros más tranquilos.") — NUNCA Title Case ni MAYÚSCULAS gritonas.
- El nombre de marca **ANDOVER** sí puede ir en mayúsculas en el logotipo y en menciones destacadas en el hero. En cuerpo de texto: "Andover".
- Subtítulo de marca: **"Comedores y Limpiezas S.L."** — siempre con "y" minúscula, "S.L." con puntos.
- Punto final en titulares cortos cuando son frases completas ("Centros más tranquilos.").

### Ejemplos de copy aprobado
- *"Nos encargamos de todo para que el centro pueda centrarse en lo importante."*
- *"Un equipo cercano, una respuesta rápida y un servicio adaptado a cada centro."*
- *"Comedor, limpieza y personal de apoyo coordinados desde una misma visión."*
- *"Cada centro tiene su realidad. Por eso cada propuesta de Andover es diferente."*
- *"La tranquilidad de saber que siempre hay alguien al otro lado."*

### Reglas duras
- **No inventar datos.** Sin métricas, sin años de experiencia, sin número de colegios — usar placeholders elegantes: `[XX años]`, `[Nombre del colegio]`, `[Testimonio real]`.
- **No emoji** en superficies de marca. El tono es premium-cercano, no chat.
- **No exagerar.** Evitar "líderes", "los mejores", "número uno". La cercanía se demuestra, no se proclama.
- **Bilingüismo:** todo en castellano. No mezclar inglés salvo términos técnicos universales.

---

## Visual foundations

### Color
La paleta moderniza el granate y el verde tradicionales del sector con un tratamiento digital y sofisticado. **Crema cálido** como base (no blanco puro) — es la firma del sistema y lo que separa a Andover de las webs genéricas de catering.

| Token | Hex | Uso |
|---|---|---|
| `--granate` | `#7A1F2B` | Color principal de marca, CTAs, acentos |
| `--granate-deep` | `#4A111A` | Hover, headings sobre crema, sombras tintadas |
| `--verde` | `#2F6B4F` | Color secundario, confianza, frescura, sello "ok" |
| `--verde-soft` | `#DDE9DF` | Fondos de sección alternativos, tarjetas de servicio |
| `--cream` | `#F6F1E8` | Fondo principal — la base del sistema |
| `--bone` | `#FAF8F3` | Blanco roto para tarjetas sobre crema |
| `--ink` | `#111111` | Negro suave para cuerpo de texto |
| `--ink-soft` | `#6E6A64` | Gris cálido para texto secundario |

Reglas:
- El fondo NUNCA es blanco puro `#FFFFFF`. Siempre `--cream` o `--bone`.
- Granate y verde NO se combinan en gradientes. Se yuxtaponen — granate como acento, verde como contrapunto puntual.
- Los granates oscuros se usan con moderación, sobre todo para texto sobre crema o como fondo de sección "premium".

### Tipografía
- **Display / Titulares:** **Fraunces** — serif moderna, contemporánea, con calidez. Pesos 400 y 600. Usar `font-optical-sizing: auto` y `font-variation-settings: "SOFT" 50, "WONK" 0` para una versión cálida y refinada.
- **Cuerpo / UI:** **Plus Jakarta Sans** — sans neutra, geométrica suave, muy legible. Pesos 400/500/600/700.
- **Datos / Etiquetas:** **JetBrains Mono** — para etiquetas técnicas, números, códigos, capítulos de método (`01 ·`, `02 ·`).

> **Sustitución de fuentes:** todas las fuentes se cargan desde Google Fonts. Si más adelante la marca adopta tipografías propietarias (p. ej. Satoshi, General Sans), sustituir en `colors_and_type.css` la `@import` y los `--font-*` tokens.

### Espaciado y rejilla
Escala basada en 4px. Tokens: `--s-1` (4px) … `--s-12` (96px). Las secciones grandes usan `--s-12` o `--s-16` (128px) entre bloques.

- **Ancho máximo de contenido:** 1280px (`--container`).
- **Padding lateral móvil:** 24px. Desktop: 64px o más.
- **Espaciado entre secciones:** generoso. La web premium respira.

### Radios
- **Botones, chips, badges:** `--radius-pill` (full) o `--radius-md` (12px).
- **Tarjetas:** `--radius-lg` (20px) — la firma del sistema.
- **Imágenes y media:** `--radius-xl` (28px).
- **Inputs:** `--radius-md` (12px).

### Sombras
Sombras **suaves, cálidas y bajas en saturación** — nunca grises duros. Usar tintes muy diluidos del granate oscuro.

- `--shadow-sm` — elevación de input al focus.
- `--shadow-md` — tarjetas en reposo.
- `--shadow-lg` — tarjetas en hover, modales.
- `--shadow-glow-granate` — borde luminoso sutil para CTA destacado.

### Bordes
Bordes finos, color `--cream-line` (granate diluido al 8%). Nunca grises planos. El borde es decorativo, no estructural.

### Movimiento
- **Easing por defecto:** `cubic-bezier(0.22, 1, 0.36, 1)` — *easeOutQuint*, salida elegante.
- **Duración estándar:** 280ms para microinteracciones, 600ms para reveal, 900–1200ms para escenas de scroll.
- **Hover de tarjeta:** `translateY(-4px)` + sombra crece. NUNCA escala dramática.
- **Press:** `scale(0.98)` + sombra se reduce.
- **Reveal en scroll:** `translateY(20px)` + `opacity 0 → 1`, escalonado 60ms entre hijos.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` desactiva todas las transiciones largas y movimientos parallax; mantiene cambios de color/opacidad.

### Imagen y fotografía
- **Vibe:** cálida, natural, luz suave de día. Nunca foto-stock evidente (mesa de oficina con manos sonrientes).
- **Sujetos:** comedor real, manos preparando comida, equipo en acción, detalle de bandeja/plato/cubiertos. Personas siempre en contexto — nunca posando.
- **Color grading:** ligeramente cálido. Sin filtros saturados.
- **Tratamiento:** esquinas `--radius-xl`, opcionalmente con un sutil overlay crema al 6% para integrar con la paleta.

### Fondos y texturas
- Fondo principal: liso `--cream`.
- Secciones alternativas: liso `--verde-soft` o `--bone`.
- Sin gradientes saturados. Si hay gradiente, es entre dos crema-claros para sugerir profundidad.
- **No** patrones repetitivos, **no** texturas de papel, **no** ruido — el sistema es limpio.

### 3D y motifs
Los elementos 3D del hero y de las tarjetas son objetos geométricos primitivos (toro, esfera, plano fino) renderizados con materiales **mate, ligeramente translúcidos**, casi cerámicos. Representan: plato, cubiertos, bandeja, hoja, gota.

- Iluminación: ambiente cálido + un foco granate suave y un foco verde suave para teñir las sombras.
- Movimiento: flotación lenta (4–8s loop), rotación muy sutil, parallax al mover el ratón.
- En móvil: simplificar a 2–3 elementos o estáticos.

---

## Iconography

Andover no tiene un sistema de iconos propio. Para esta marca usamos **Lucide** (vía CDN) — un set open-source con stroke uniforme, esquinas redondeadas y peso visual ligero que encaja con el carácter limpio y cálido del sistema. Tamaño base 20px, stroke 1.75.

**Alternativas aceptables** si el cliente prefiere otro estilo más adelante:
- **Phosphor** (variante *duotone* o *regular*) — más caracter, ligero detalle decorativo.
- **Heroicons outline** — más corporativo, menos cálido.

**No usar:**
- Emoji (`🍽️ 🧹 👨‍🍳`) — rompe el tono premium.
- Iconos planos coloridos con fondos circulares (estética 2018 SaaS).
- SVGs custom con caras felices o personajes — infantilizan la marca.

### Iconografía decorativa de marca
Para hero y secciones destacadas, usamos **silhouetas geométricas simples** de utensilios (tenedor, cuchara, plato) y elementos naturales (hoja, gota) — renderizadas en 3D con Three.js o como SVG monocromo en granate/verde. Estos motifs sustituyen a los iconos planos genéricos del sector.

### Logo
El logo real **no ha sido suministrado**. Se proporciona un wordmark provisional en `assets/logo-andover.svg` que sigue las reglas:
- "ANDOVER" en versalitas amplias, peso medio, tracking abierto.
- "Comedores y Limpiezas S.L." debajo, mono pequeño, color `--ink-soft`.
- Color por defecto: `--granate`. Variantes: blanco sobre granate, granate sobre crema.
- Espacio de protección mínimo: altura de la "A" en todos los lados.

---

## Caveats / Open questions
- **Logo real pendiente.** El wordmark provisional es un placeholder fiel a las reglas; sustituir cuando llegue la versión definitiva.
- **Fotografía pendiente.** Sin fotos reales del comedor, equipo o instalaciones. La UI kit usa placeholders etiquetados claramente.
- **Fuentes:** Fraunces + Plus Jakarta Sans son sustitución desde Google Fonts. Si el cliente quiere Satoshi o General Sans, requieren licencia comercial — flag pendiente.
- **Datos pendientes:** años de experiencia, número de colegios, testimonios, métricas — todos marcados como `[placeholder]` en la kit. NO se han inventado.
- **3D real-time** en el hero: implementado con Three.js. Si rendimiento en gama baja de móvil es un problema, hay fallback a SVG estático preparado.
