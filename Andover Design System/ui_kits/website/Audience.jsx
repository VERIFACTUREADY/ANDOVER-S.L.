// Audience.jsx — "Para quién trabajamos" tiles + a scrolling photo marquee.
const AUD = [
  { n: "A", title: "Colegios",            text: "Públicos, concertados y privados." },
  { n: "B", title: "Centros educativos",  text: "Infantil, primaria y secundaria." },
  { n: "C", title: "Colectividades",      text: "Centros con comedor diario." },
  { n: "D", title: "Empresas",            text: "Comedor de empresa o catering puntual." },
  { n: "E", title: "Entidades",           text: "Con servicios auxiliares en marcha." },
];

const MARQUEE = [
  { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=85&auto=format&fit=crop", alt: "Comedor con bandejas" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=85&auto=format&fit=crop", alt: "Niños en colegio" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=85&auto=format&fit=crop", alt: "Equipo de cocina" },
  { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=85&auto=format&fit=crop", alt: "Plato saludable" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85&auto=format&fit=crop", alt: "Servicio de catering" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85&auto=format&fit=crop", alt: "Logística de comidas" },
];

function Audience() {
  return (
    <section className="tight audience-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">06 · Para quién trabajamos</span>
          <h2>Centros distintos, criterio común.</h2>
          <p>Andover trabaja con organizaciones que necesitan que el comedor, la limpieza y el personal estén bien gestionados sin tener que pensar en ello cada día.</p>
        </div>
        <div className="audience-grid reveal-stagger">
          {AUD.map(a => (
            <article key={a.n} className="audience-tile">
              <span className="n">{a.n}</span>
              <h4>{a.title}</h4>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Full-bleed photo marquee */}
      <div className="aud-marquee" aria-hidden="true">
        <div className="aud-marquee-track">
          {[...MARQUEE, ...MARQUEE].map((p, i) => (
            <div key={i} className="aud-marquee-item">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Audience = Audience;
