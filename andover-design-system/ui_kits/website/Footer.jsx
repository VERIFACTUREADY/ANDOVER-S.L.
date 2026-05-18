// Footer.jsx — granate-deep footer with verified company data only.
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand footer-brand">
              <img src="../../assets/logo-andover-original.jpeg" alt="Andover" />
            </div>
            <p>Servicios integrales de comedor, limpieza y personal de apoyo para colegios y colectividades en Madrid y Alicante. Empresa familiar desde 1997.</p>
            <p className="footer-legal-line">
              CIF B81740425 · Registro Mercantil de Madrid
            </p>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <a href="#servicios">Gestión de comedores</a>
            <a href="#servicios">Limpieza profesional</a>
            <a href="#servicios">Monitores</a>
            <a href="#servicios">Cocineras y auxiliares</a>
            <a href="#servicios">Servicio personalizado</a>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <a href="tel:+34918119598">91 811 95 98</a>
            <a href="mailto:personal@grupoandover.com">personal@grupoandover.com</a>
            <a href="https://www.grupoandover.com" target="_blank" rel="noopener">www.grupoandover.com</a>
            <span className="footer-address">C/ Ana de Austria, 107 · 1º A<br/>28050 Madrid</span>
          </div>
          <div className="footer-col">
            <h5>Zonas</h5>
            <a href="#zonas">Madrid</a>
            <a href="#zonas">Alicante</a>
            <h5 style={{ marginTop: 18 }}>Más</h5>
            <a href="#contacto">Trabaja con nosotros</a>
            <a href="#contacto">Proveedores</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Andover Comedores y Limpiezas S.L.</span>
          <span className="footer-bottom-links">
            <a href="#aviso">Aviso legal</a>
            <a href="#privacidad">Privacidad</a>
            <a href="#cookies">Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
