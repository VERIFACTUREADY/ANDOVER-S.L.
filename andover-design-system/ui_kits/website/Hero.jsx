// Hero.jsx — cinematic photo composition with layered parallax + mouse tilt.
// No WebGL. Depth comes from CSS 3D transforms, scroll-driven layers, and image stacking.
const { useEffect, useRef, useState } = React;

function Hero() {
  const heroRef = useRef(null);
  const layersRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let mouseX = 0, mouseY = 0;
    let scrollY = 0;
    let rafId = null;

    const onMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5);
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5);
    };

    const onScroll = () => { scrollY = window.scrollY; };

    const tick = () => {
      if (!layersRef.current) return;
      const layers = layersRef.current.querySelectorAll("[data-depth]");
      layers.forEach(el => {
        const depth = parseFloat(el.dataset.depth);
        const tx = mouseX * 24 * depth;
        const ty = mouseY * 16 * depth - scrollY * 0.15 * depth;
        const rz = mouseX * 1.4 * depth;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rz}deg)`;
      });
      rafId = requestAnimationFrame(tick);
    };

    if (!reduced) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("scroll", onScroll, { passive: true });
      tick();
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="hero-bg" aria-hidden="true" />

      {/* Layered photo composition. Each layer moves at a different rate. */}
      <div className="hero-layers" ref={layersRef} aria-hidden="true">
        {/* Back layer — kitchen/blurred ambient */}
        <div className="hero-layer hero-layer-back" data-depth="0.3">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85&auto=format&fit=crop"
            alt=""
            loading="eager"
          />
        </div>

        {/* Mid layer — main feature plate */}
        <div className="hero-layer hero-layer-mid" data-depth="0.7">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=85&auto=format&fit=crop"
            alt=""
            loading="eager"
          />
        </div>

        {/* Front-left accent — fresh produce / herbs */}
        <div className="hero-layer hero-layer-front-left" data-depth="1.4">
          <img
            src="https://images.unsplash.com/photo-1564844536311-de546a28c87d?w=500&q=85&auto=format&fit=crop"
            alt=""
            loading="eager"
          />
        </div>

        {/* Front-right accent — bread / detail */}
        <div className="hero-layer hero-layer-front-right" data-depth="1.1">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85&auto=format&fit=crop"
            alt=""
            loading="eager"
          />
        </div>

        {/* Vignette + warm overlay for cohesion */}
        <div className="hero-vignette" />
      </div>

      <div className="container hero-content">
        <span className="eyebrow">Catering de colectividades · Madrid · Alicante</span>
        <h1>
          Comedores bien gestionados,<br/>
          centros más <em>tranquilos.</em>
        </h1>
        <p>
          Servicios integrales de comedor, limpieza y personal de apoyo para colegios
          y colectividades. Empresa familiar desde 1997.
        </p>
        <div className="hero-cta">
          <a href="#contacto" className="btn btn-primary">Solicitar información <span>→</span></a>
          <a href="#servicios" className="btn btn-secondary">Ver servicios</a>
        </div>
      </div>

      <div className="hero-foot">
        <div className="hero-foot-meta">
          <span className="hero-foot-num" data-countup="29">0</span>
          <span className="hero-foot-lbl">años de servicio<br/>desde 1997</span>
        </div>
        <div className="hero-foot-divider" />
        <div className="hero-foot-text">
          <span className="eyebrow">Sector 5629</span>
          <p>Restauración y comedores colectivos · Registro Mercantil de Madrid</p>
        </div>
        <a href="#que-hacemos" className="hero-foot-scroll" aria-label="Bajar a contenidos">
          <span>scroll</span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="1" y="1" width="12" height="18" rx="6"/>
            <circle cx="7" cy="6" r="1.2" fill="currentColor" stroke="none">
              <animate attributeName="cy" values="6;12;6" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </a>
      </div>
    </section>
  );
}

window.Hero = Hero;
