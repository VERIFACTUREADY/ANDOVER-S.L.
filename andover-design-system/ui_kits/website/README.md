# Andover · UI kit · Marketing website

Single-page marketing site that demonstrates the full design system applied. Built as the canonical reference for the Andover web presence.

## Sections (in order)
1. **Header** — sticky translucent capsule with blur, CTA pill.
2. **Hero** — claim + Three.js 3D scene (cubiertos, plato, hoja, gota orbitando).
3. **Qué hacemos** — 8 service tiles with motif glyphs.
4. **Por qué Andover** — 4 trust pillars.
5. **Servicios** — feature blocks for each service line.
6. **Nuestro método** — animated 5-step timeline.
7. **Del problema a la tranquilidad** — visual before/after transition.
8. **Para quién trabajamos** — audience tiles.
9. **Madrid y Alicante** — local SEO section.
10. **Confianza** — testimonial + logo placeholders.
11. **Galería** — image grid placeholders.
12. **Contacto** — full form with motivo selector + WhatsApp CTA.
13. **Footer** — links, legal placeholders.

## Stack
- React 18 via UMD + Babel standalone (in-browser JSX).
- Three.js for the hero 3D scene.
- IntersectionObserver for scroll-reveal — no GSAP required for current behavior; can be swapped if more advanced timelines are needed.
- No build step — single `index.html` opens directly in any browser.

## Files
```
index.html        · entry point
site.css          · website-specific styles (tokens come from ../../colors_and_type.css)
Header.jsx        · sticky header
Hero.jsx          · hero + ThreeScene
Services.jsx      · "Qué hacemos" + service feature blocks
Pillars.jsx       · "Por qué Andover"
Method.jsx        · timeline
ChaosToOrder.jsx  · before/after transition section
Audience.jsx      · "Para quién trabajamos"
Zones.jsx         · Madrid + Alicante
Trust.jsx         · testimonial + logo wall
Gallery.jsx       · photo grid placeholders
Contact.jsx       · form + WhatsApp CTA
Footer.jsx        · footer
```

## Placeholders to replace
- `[LOGO ANDOVER]` — real logo file
- `[Foto real …]` — gallery images
- `[Testimonio real]` — quote copy + names
- `[Teléfono principal]`, `[Email …]`, `[Dirección …]` — contact info
- `[XX]` — any numerical fact (years, centros, comidas/día)

## Form integration
The contact form does **not** post anywhere. To wire it up:
- **Formspree:** set the `<form action="https://formspree.io/f/XXXX">`.
- **WhatsApp:** the alt CTA already builds a `wa.me/` URL — drop the real phone into `WHATSAPP_NUMBER` in `Contact.jsx`.
- **Backend / CRM:** replace the `handleSubmit` in `Contact.jsx`.
