// Method.jsx — sticky photo on the left that cross-fades through 5 photos as the user
// scrolls through 5 numbered steps. No 3D — depth comes from layered photo composition
// and smooth crossfades.
const { useEffect, useRef, useState } = React;

const STEPS = [
  {
    n: "01", title: "Escuchamos al centro",
    text: "Visita, conversación, identificación de prioridades reales. Sin compromiso.",
    photo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85&auto=format&fit=crop",
    alt: "Reunión de trabajo profesional",
  },
  {
    n: "02", title: "Diseñamos una propuesta",
    text: "Cada colegio es distinto. La propuesta también — con números claros.",
    photo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85&auto=format&fit=crop",
    alt: "Planificación sobre escritorio",
  },
  {
    n: "03", title: "Coordinamos el equipo",
    text: "Comedor, limpieza y personal de apoyo bajo una misma dirección.",
    photo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&auto=format&fit=crop",
    alt: "Equipo de cocina coordinado",
  },
  {
    n: "04", title: "Supervisamos el día a día",
    text: "Seguimiento operativo y revisión periódica de mejoras posibles.",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop",
    alt: "Bandejas servidas en comedor",
  },
  {
    n: "05", title: "Resolvemos cualquier incidencia",
    text: "Respuesta rápida cuando surge un imprevisto. Sin escalados largos.",
    photo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=85&auto=format&fit=crop",
    alt: "Detalle de servicio profesional",
  },
];

function Method() {
  const refs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(Number(e.target.dataset.idx));
      });
    }, { threshold: 0.55, rootMargin: "-20% 0px -40% 0px" });
    refs.current.forEach(r => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="metodo" className="method-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">04 · Nuestro método</span>
          <h2>Del primer contacto al servicio diario.</h2>
          <p>Cinco pasos sencillos para que el centro pase a estar tranquilo.</p>
        </div>

        <div className="method-grid">
          {/* Sticky photo stage */}
          <div className="method-stage">
            <div className="method-stage-inner">
              <div className="method-photos">
                {STEPS.map((s, i) => (
                  <img
                    key={s.n}
                    src={s.photo}
                    alt={s.alt}
                    className={active === i ? "in" : ""}
                    loading="lazy"
                  />
                ))}
                <div className="method-overlay" />
              </div>
              <div className="method-caption">
                <span className="method-step-num">PASO {STEPS[active].n}</span>
                <span className="method-step-title">{STEPS[active].title}</span>
              </div>
              <div className="method-progress" aria-hidden="true">
                <div className="method-progress-bar" style={{ height: `${((active + 1) / STEPS.length) * 100}%` }} />
                {STEPS.map((s, i) => (
                  <span key={s.n} className={`method-dot ${i <= active ? "done" : ""}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <div className="method-rail">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                ref={el => refs.current[i] = el}
                data-idx={i}
                className={`method-step ${active === i ? "in" : ""} ${i < active ? "seen" : ""}`}
              >
                <span className="method-step-tag">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
            <div className="method-cta">
              <a href="#contacto" className="btn btn-primary">Empezar conversación <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Method = Method;
