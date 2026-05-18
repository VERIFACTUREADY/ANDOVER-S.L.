// Gallery.jsx — image grid with real catering-themed photos (Unsplash License).
const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=900&q=80&auto=format&fit=crop", alt: "Comedor con bandejas servidas", kind: "wide tall" },
  { src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&auto=format&fit=crop", alt: "Plato emplatado", kind: "" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop", alt: "Equipo de cocina profesional", kind: "" },
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop", alt: "Detalle de productos de limpieza", kind: "" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop", alt: "Servicio de catering en marcha", kind: "wide" },
  { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop", alt: "Bol saludable con verduras", kind: "" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop", alt: "Niños en el colegio", kind: "tall" },
  { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80&auto=format&fit=crop", alt: "Bandejas de catering", kind: "" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80&auto=format&fit=crop", alt: "Logística de comidas", kind: "wide" },
];

function Gallery() {
  return (
    <section className="tight">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">09 · Galería</span>
          <h2>El día a día, sin filtros.</h2>
          <p>Imágenes representativas del servicio: comedor, equipo, plato, limpieza y logística. Cuando estén disponibles las fotografías reales del cliente, sustituirán a estas.</p>
        </div>
        <div className="gallery-grid reveal-stagger">
          {PHOTOS.map((p, i) => (
            <div key={i} className={`gallery-item ${p.kind}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <span className="gallery-caption">Imagen representativa · sustituir por foto real</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Gallery = Gallery;
