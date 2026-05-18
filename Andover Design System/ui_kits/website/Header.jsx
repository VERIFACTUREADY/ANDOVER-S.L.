// Header.jsx — sticky translucent capsule header for Andover.
const { useState, useEffect } = React;

function Header({ active = "inicio" }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "inicio",   label: "Inicio",    href: "#inicio" },
    { id: "servicios", label: "Servicios", href: "#servicios" },
    { id: "metodo",   label: "Método",    href: "#metodo" },
    { id: "zonas",    label: "Zonas",     href: "#zonas" },
    { id: "confianza", label: "Confianza", href: "#confianza" },
    { id: "contacto", label: "Contacto",  href: "#contacto" },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="bar">
        <a href="#inicio" className="brand brand-logo" style={{ textDecoration: "none" }}>
          <img src="../../assets/logo-andover-original.jpeg" alt="Andover · Comedores y Limpiezas S.L." />
        </a>
        <nav>
          {nav.map(n => (
            <a key={n.id} href={n.href} className={active === n.id ? "active" : ""} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary cta" href="#contacto">Solicitar información <span>→</span></a>
        <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menú">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (<><path d="M6 6l12 12"/><path d="M18 6l-12 12"/></>) : (<><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>)}
          </svg>
        </button>
      </div>
    </header>
  );
}

window.Header = Header;
