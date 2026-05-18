// ChaosToOrder.jsx — cinematic split-screen "antes / después" with scroll-driven reveal.
// No 3D, no Three.js. Effect: two photo halves that interlock and shift in/out of frame
// based on scroll position, with kinetic typography between them.
const { useEffect, useRef, useState } = React;

function ChaosToOrder() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setProgress(1); return; }

    const tick = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = -rect.height + vh * 0.30;
      const span = start - end;
      const p = Math.max(0, Math.min(1, (start - rect.top) / span));
      // Ease the value
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setProgress(eased);
    };
    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  // Progress mapped to motion:
  //  - antes panel slides up & out
  //  - despues panel slides up from below
  //  - center line/word transitions
  const chaosTx = `translateY(${-progress * 18}%)`;
  const orderTx = `translateY(${(1 - progress) * 22}%)`;

  return (
    <section className="cto-section" ref={sectionRef}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">05 · Del problema a la tranquilidad</span>
          <h2>Lo desordenado, ordenado.</h2>
          <p>Cuando varias piezas funcionan por separado, todo cuesta más. Andover coordina comedor, limpieza, personal e incidencias bajo una única visión.</p>
        </div>

        <div className="cto-stage" aria-hidden="false">
          <div className="cto-panel cto-panel-before" style={{ transform: chaosTx }}>
            <img
              src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1400&q=85&auto=format&fit=crop"
              alt="Bandeja y elementos dispersos antes de organizar el servicio"
              loading="lazy"
            />
            <div className="cto-panel-meta">
              <span className="cto-tag">Antes</span>
              <ul>
                <li>Incidencias dispersas</li>
                <li>Coordinación lenta</li>
                <li>Equipos sin enlace</li>
              </ul>
            </div>
          </div>

          <div className="cto-panel cto-panel-after" style={{ transform: orderTx }}>
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85&auto=format&fit=crop"
              alt="Servicio de comedor organizado y en marcha"
              loading="lazy"
            />
            <div className="cto-panel-meta">
              <span className="cto-tag verde">Con Andover</span>
              <ul className="ok">
                <li>Una sola dirección</li>
                <li>Respuesta inmediata</li>
                <li>Servicio adaptado</li>
              </ul>
            </div>
          </div>

          <div className="cto-headline" aria-hidden="true">
            <span className="cto-arrow" style={{ transform: `scaleX(${0.3 + progress * 0.7})` }} />
            <span className="cto-word">organizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ChaosToOrder = ChaosToOrder;
