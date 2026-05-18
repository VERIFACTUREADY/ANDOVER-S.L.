// Contact.jsx — form + ONLY verified contact data. No placeholder emails, no WhatsApp
// (no real WhatsApp number on record; landline is not a WhatsApp Business line).
const { useState } = React;

// Verified — see verified-data.md
const PHONE_DISPLAY = "91 811 95 98";
const PHONE_DIAL = "+34918119598";
const EMAIL = "personal@grupoandover.com";
const ADDRESS = "Calle Ana de Austria, 107 · 1º A · 28050 Madrid";
const WEB = "www.grupoandover.com";

const MOTIVOS = [
  "Soy un colegio o centro interesado",
  "Soy cliente actual",
  "Soy proveedor",
  "Quiero trabajar con Andover",
  "Administración / facturación",
  "Otro",
];

function Contact() {
  const [form, setForm] = useState({
    nombre: "", empresa: "", ciudad: "", telefono: "", email: "", motivo: MOTIVOS[0], mensaje: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real submit — Formspree, fetch() to backend, etc.
    setSent(true);
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <span className="eyebrow">10 · Contacto</span>
              <h2>Cuéntanos cómo es tu centro.</h2>
              <p>Estudiamos cada propuesta sin compromiso. Respondemos en menos de 24 horas con una primera valoración.</p>
            </div>
            <div className="contact-block">
              <div className="h">Teléfono</div>
              <a className="v" href={`tel:${PHONE_DIAL}`}>{PHONE_DISPLAY}</a>
            </div>
            <div className="contact-block">
              <div className="h">Correo</div>
              <a className="v" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="contact-block">
              <div className="h">Oficina</div>
              <a className="v" href="https://maps.google.com/?q=Calle+Ana+de+Austria+107+Madrid" target="_blank" rel="noopener">{ADDRESS}</a>
            </div>
            <div className="contact-block">
              <div className="h">Web del grupo</div>
              <a className="v" href={`https://${WEB}`} target="_blank" rel="noopener">{WEB} ↗</a>
            </div>
          </div>

          {sent ? (
            <form className="contact-form" style={{ alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 480 }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--verde)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>
              </svg>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: "var(--granate-ink)", margin: "16px 0 8px", fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}>Mensaje recibido</h3>
              <p style={{ color: "var(--ink-soft)" }}>Te contestaremos en menos de 24 horas.</p>
            </form>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>Nombre</label>
                  <input type="text" required value={form.nombre} onChange={set("nombre")} placeholder="Tu nombre" />
                </div>
                <div className="field">
                  <label>Empresa / centro</label>
                  <input type="text" value={form.empresa} onChange={set("empresa")} placeholder="Nombre del centro" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label>Ciudad</label>
                  <input type="text" value={form.ciudad} onChange={set("ciudad")} placeholder="Madrid · Alicante · …" />
                </div>
                <div className="field">
                  <label>Teléfono</label>
                  <input type="tel" value={form.telefono} onChange={set("telefono")} placeholder="+34" />
                </div>
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" required value={form.email} onChange={set("email")} placeholder="tu@correo.es" />
              </div>
              <div className="field">
                <label>Motivo</label>
                <select value={form.motivo} onChange={set("motivo")}>
                  {MOTIVOS.map(m => <option key={m}>{m}</option>)}
                </select>
              </div>
              <div className="field">
                <label>Mensaje</label>
                <textarea value={form.mensaje} onChange={set("mensaje")} placeholder="Cuéntanos brevemente cómo es el centro y qué necesitáis." />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Enviar mensaje <span>→</span></button>
                <span className="legal">Al enviar aceptas la <a href="#privacidad" style={{ color: "var(--granate)" }}>política de privacidad</a>.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
