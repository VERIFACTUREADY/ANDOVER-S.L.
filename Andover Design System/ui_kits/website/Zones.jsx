// Zones.jsx — local SEO section for Madrid + Alicante. Only verified data shown.
// Madrid address is public (BORME). Alicante address NOT publicly verifiable — omitted.
// Photos: each <img> has onError fallback chain so a failed request never leaves a blank card.
const { useState } = React;

function ZonePhoto({ src, fallbackSrcs = [], alt, fallbackKind }) {
  // Try src first; on error, try each fallbackSrc in order; finally show the gradient fallback.
  const candidates = [src, ...fallbackSrcs];
  const [idx, setIdx] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const handleError = () => {
    if (idx + 1 < candidates.length) {
      setIdx(idx + 1);
    } else {
      setAllFailed(true);
    }
  };

  return (
    <div className={`zone-card-photo ${allFailed ? `fallback fallback-${fallbackKind}` : ""}`}>
      {!allFailed && (
        <img
          key={candidates[idx]}
          src={candidates[idx]}
          alt={alt}
          onError={handleError}
        />
      )}
      {allFailed && (
        <div className="zone-photo-fallback" aria-label={alt}>
          <span className="zone-photo-fallback-label">{alt}</span>
        </div>
      )}
    </div>
  );
}

function Zones() {
  return (
    <section id="zonas" className="zones-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">07 · Zonas de servicio</span>
          <h2>Madrid y Alicante.</h2>
          <p>Andover presta servicio en Madrid y Alicante, adaptándose a las necesidades de cada centro. Equipos locales, proximidad real.</p>
        </div>
        <div className="zones-grid reveal-stagger">
          <article className="zone-card">
            <ZonePhoto
              src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1000&q=85&auto=format&fit=crop"
              alt="Madrid"
              fallbackKind="madrid"
            />
            <div className="zone-card-body">
              <span className="pin">Sede social</span>
              <h3 className="place">Madrid</h3>
              <p>Servicio en colegios, centros educativos y colectividades de la Comunidad de Madrid.</p>
              <div className="zone-card-data">
                <span className="h">Dirección</span>
                <a href="https://maps.google.com/?q=Calle+Ana+de+Austria+107+Madrid" target="_blank" rel="noopener" className="v">
                  Calle Ana de Austria, 107 · 1º A<br/>28050 Madrid
                </a>
              </div>
              <div className="zone-card-data">
                <span className="h">Teléfono</span>
                <a href="tel:+34918119598" className="v">91 811 95 98</a>
              </div>
            </div>
          </article>

          <article className="zone-card">
            <ZonePhoto
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Alicante_2011.jpg?width=1200"
              fallbackSrcs={[
                "https://commons.wikimedia.org/wiki/Special:FilePath/Castillo_de_Santa_Barbara_Alicante_02.JPG?width=1200",
                "https://commons.wikimedia.org/wiki/Special:FilePath/Puerto_de_Alicante_desde_el_Castillo_de_Santa_B%C3%A1rbara.JPG?width=1200",
                "https://commons.wikimedia.org/wiki/Special:FilePath/Castello_de_Santa_B%C3%A0rbara_Alicante.jpg?width=1200",
              ]}
              alt="Alicante"
              fallbackKind="alicante"
            />
            <div className="zone-card-body">
              <span className="pin granate">Zona de servicio</span>
              <h3 className="place">Alicante</h3>
              <p>Servicio en colegios y entidades de la provincia de Alicante. Equipo conocedor del territorio y de los proveedores locales.</p>
              <div className="zone-card-data">
                <span className="h">Contacto</span>
                <a href="tel:+34918119598" className="v">91 811 95 98</a>
                <a href="mailto:personal@grupoandover.com" className="v">personal@grupoandover.com</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

window.Zones = Zones;
