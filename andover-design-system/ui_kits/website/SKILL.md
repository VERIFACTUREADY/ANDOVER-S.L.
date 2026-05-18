---
name: andover-design
description: Use this skill to generate well-branded interfaces and assets for Andover Comedores y Limpiezas S.L. (catering de colectividades, comedores escolares, limpieza y personal auxiliar en Madrid y Alicante), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file at the root of this skill first — it contains the brand context, content fundamentals, visual foundations, and iconography rules. Then explore the other files available:

- `colors_and_type.css` — design tokens (colors, type, spacing, radius, shadow, motion). Import this file as your foundation.
- `brief.md` — original client brief, preserved verbatim. Reference when a content question is ambiguous.
- `assets/` — logo placeholders (granate on cream + reverse), monogram, motif SVGs (utensils, leaf, drop).
- `preview/` — design-system reference cards (palette, type, components). Useful as visual ground-truth when picking colors or styles.
- `ui_kits/website/` — full marketing website as a working React + Three.js prototype. Each section is a separate `.jsx` file (`Hero.jsx`, `Services.jsx`, `Method.jsx`, `ChaosToOrder.jsx`, `Contact.jsx`, etc.). Copy components from here for related work.

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy the needed assets and tokens into a new static HTML file and view it directly — do not build production infrastructure.

If working on **production code**, copy the assets, study the rules in `README.md` (especially the Content fundamentals and Visual foundations sections), and follow the tokens from `colors_and_type.css`.

### Brand rules of thumb
- Idioma: **castellano**, siempre.
- Tono: cercano, familiar, resolutivo, profesional — sin frases vacías.
- No inventar datos: usa placeholders elegantes (`[XX años]`, `[Nombre del colegio]`, `[Testimonio real]`).
- No emoji en superficies de marca.
- Fondos: cream/bone, nunca blanco puro.
- Granate (#7A1F2B) como color principal, verde (#2F6B4F) como contrapunto de confianza.
- Fraunces para titulares, Plus Jakarta Sans para UI, JetBrains Mono para etiquetas.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask 4–8 focused questions (audience, fidelity, surface, variations), then act as an expert designer who outputs HTML artifacts or production code, depending on the need.
