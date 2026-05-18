// Pillars.jsx — "Por qué Andover": dark band with 4 pillars.
const PILLARS = [
  { n: "01", title: "Empresa familiar desde 1997",   text: "Decisiones cercanas y relaciones largas. Casi tres décadas trabajando con centros y colectividades." },
  { n: "02", title: "Respuesta rápida",   text: "Cuando surge una incidencia, hay alguien al otro lado. Sin escalados largos." },
  { n: "03", title: "Servicio adaptado",  text: "Cada centro es distinto. Diseñamos una propuesta pensada para su realidad." },
  { n: "04", title: "Gestión integral",   text: "Comedor, limpieza y personal coordinados desde una misma visión." },
];

function Pillars() {
  return (
    <section className="tight">
      <div className="container">
        <div className="pillars-band reveal">
          <div className="section-head" style={{ marginBottom: 48 }}>
            <span className="eyebrow">03 · Por qué Andover</span>
            <h2>Cercanía familiar,<br/>gestión profesional.</h2>
            <p>Andover trabaja cerca de cada centro, entiende sus necesidades y responde con rapidez.</p>
          </div>
          <div className="pillars-grid">
            {PILLARS.map(p => (
              <div key={p.n} className="pillar">
                <span className="n">{p.n}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Pillars = Pillars;
