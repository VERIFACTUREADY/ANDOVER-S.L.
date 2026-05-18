// Services.jsx — "Qué hacemos" PHOTO CARDS + cinematic feature blocks.

// ---------- Tilt card behavior ----------
function useTilt(ref) {
  const { useEffect } = React;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 6}deg) translateY(-6px)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}

function TiltCard({ children, className }) {
  const ref = React.useRef(null);
  useTilt(ref);
  return <article ref={ref} className={className}>{children}</article>;
}

// ---------- Service grid · PHOTO TILES ----------
// Each service tile is now a photo with an overlay title. No icons.
const TILES = [
  { id: 1, title: "Gestión de comedor",     text: "Coordinación diaria, sin sobresaltos.",
    photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop" },
  { id: 2, title: "Limpieza profesional",   text: "Espacios cuidados y protocolos claros.", verde: true,
    photo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=85&auto=format&fit=crop" },
  { id: 3, title: "Cocineras",              text: "Equipo con criterio y oficio.",
    photo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85&auto=format&fit=crop" },
  { id: 4, title: "Monitores",              text: "Acompañamiento atento durante el servicio.", verde: true,
    photo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85&auto=format&fit=crop" },
  { id: 5, title: "Auxiliares y apoyo",     text: "Manos extra cuando el centro las necesita.",
    photo: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=85&auto=format&fit=crop" },
  { id: 6, title: "Coordinación diaria",    text: "Un único interlocutor, una visión común.", verde: true,
    photo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85&auto=format&fit=crop" },
  { id: 7, title: "Resolución rápida",      text: "Atendemos cualquier incidencia con rapidez.",
    photo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=85&auto=format&fit=crop" },
  { id: 8, title: "Mejoras personalizadas", text: "Adaptamos el servicio a cada centro.", verde: true,
    photo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85&auto=format&fit=crop" },
];

function ServicesGrid() {
  return (
    <section id="que-hacemos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">01 · Qué hacemos</span>
          <h2>Soluciones integrales para el día a día del centro.</h2>
          <p>Comedor, limpieza y personal de apoyo coordinados desde una misma visión.</p>
        </div>
        <div className="services-photo-grid reveal-stagger">
          {TILES.map(t => (
            <TiltCard key={t.id} className={`service-photo-card ${t.verde ? "verde" : ""}`}>
              <div className="service-photo-wrap">
                <img src={t.photo} alt={t.title} loading="lazy" />
                <div className="service-photo-overlay" />
              </div>
              <div className="service-photo-body">
                <span className="num">{String(t.id).padStart(2, "0")}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
              <span className="service-photo-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M5 10h10"/><path d="M11 5l5 5-5 5"/>
                </svg>
              </span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Feature blocks: cinematic stacked photos ----------
const FEATURES = [
  {
    num: "A",
    title: "Gestión de comedores",
    body: "Organizamos el comedor como un servicio integral: previsión, abastecimiento, equipo, atención y supervisión. Un único interlocutor y una propuesta pensada para cada centro.",
    points: ["Coordinación diaria con dirección y AMPA", "Menús equilibrados y revisados", "Personal estable, formado y propio", "Seguimiento de incidencias"],
    main: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop",
    accent: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=85&auto=format&fit=crop",
    alt: "Servicio de comedor profesional",
  },
  {
    num: "B",
    title: "Limpieza profesional",
    body: "Higiene, orden y continuidad. La limpieza del comedor y de los espacios asociados se ejecuta con protocolos claros, productos adecuados y supervisión periódica.",
    points: ["Protocolos APPCC y registros", "Productos eco cuando es posible", "Turnos adaptados al horario del centro", "Refuerzo en incidencias puntuales"],
    main: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=85&auto=format&fit=crop",
    accent: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&q=85&auto=format&fit=crop",
    alt: "Detalle de limpieza profesional",
    reverse: true,
  },
  {
    num: "C",
    title: "Monitores y atención",
    body: "El momento del comedor también es educativo. Nuestros monitores acompañan, atienden y crean un ambiente sereno para los alumnos y para el equipo del centro.",
    points: ["Personal cualificado y vocacional", "Ratios respetados según la edad", "Comunicación directa con familias y centro", "Actividades de patio y sobremesa"],
    main: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85&auto=format&fit=crop",
    accent: "https://images.unsplash.com/photo-1597393353415-b3730f3719fe?w=600&q=85&auto=format&fit=crop",
    alt: "Niños en colegio durante actividad",
  },
  {
    num: "D",
    title: "Cocineras y auxiliares",
    body: "El oficio importa. Nuestro equipo de cocina y auxiliares trabaja con criterio, coordinación y profesionalidad — y se mantiene estable a lo largo del curso.",
    points: ["Personal con experiencia en colectividades", "Formación continua en seguridad alimentaria", "Apoyo en montaje, servicio y limpieza", "Sustituciones gestionadas por Andover"],
    main: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&auto=format&fit=crop",
    accent: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=85&auto=format&fit=crop",
    alt: "Equipo de cocina profesional",
    reverse: true,
  },
  {
    num: "E",
    title: "Servicio personalizado por centro",
    body: "Cada centro tiene su realidad — número de comensales, espacios, horarios, perfil de las familias. Por eso cada propuesta de Andover es diferente.",
    points: ["Diagnóstico inicial sin compromiso", "Propuesta a medida, con números claros", "Revisión periódica de mejoras", "Cambios sin trámites largos"],
    main: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=85&auto=format&fit=crop",
    accent: "https://images.unsplash.com/photo-1564844536311-de546a28c87d?w=600&q=85&auto=format&fit=crop",
    alt: "Bol saludable y equilibrado",
  },
];

function FeatureVisual({ main, accent, alt }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = null;
    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const p = Math.max(-1, Math.min(1, (center - vh / 2) / (vh / 1.2)));
      const mainImg = el.querySelector(".feat-main img");
      const accentEl = el.querySelector(".feat-accent");
      if (mainImg) mainImg.style.transform = `scale(${1.08 + p * -0.06}) translateY(${p * 18}px)`;
      if (accentEl) accentEl.style.transform = `translate3d(${p * -18}px, ${p * 28}px, 0) rotate(${-p * 3}deg)`;
    };
    tick();
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, []);

  return (
    <div className="feature-visual" ref={ref}>
      <div className="feat-main">
        <img src={main} alt={alt} loading="lazy" />
      </div>
      <div className="feat-accent">
        <img src={accent} alt="" loading="lazy" />
      </div>
      <div className="feat-grain" aria-hidden="true" />
    </div>
  );
}

function ServicesDetail() {
  return (
    <section id="servicios" className="tight" style={{ background: "var(--bone)" }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">02 · Servicios</span>
          <h2>Cinco líneas, una sola visión.</h2>
          <p>Todo el servicio gira en torno a la misma idea: que el centro pueda dedicarse a lo suyo mientras nosotros nos encargamos del resto.</p>
        </div>
        {FEATURES.map(f => (
          <div key={f.num} className={`feature-block ${f.reverse ? "reverse" : ""} reveal`}>
            <div className="feature-text">
              <span className="num">{f.num} · Servicio</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <ul>{f.points.map(p => <li key={p}>{p}</li>)}</ul>
              <a href="#contacto" className="btn-link">Pedir información <span className="arr">→</span></a>
            </div>
            <FeatureVisual main={f.main} accent={f.accent} alt={f.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

window.ServicesGrid = ServicesGrid;
window.ServicesDetail = ServicesDetail;
