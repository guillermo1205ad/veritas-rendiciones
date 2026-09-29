import { ArrowRight, ArrowUpRight, Mail, Plus } from 'lucide-react';
import './contact.css';

const nextSteps = [
  ['Nos cuentas tu situación', 'El organismo, la etapa de tu proyecto y qué necesitas resolver.'],
  ['Revisamos el punto de partida', 'Conversamos sobre tu documentación, tus plazos y las prioridades.'],
  ['Definimos cómo acompañarte', 'Te proponemos un alcance de trabajo acorde a tu proyecto.'],
];

export function AuditIntakeForm() {
  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="contact-eyebrow"><span aria-hidden="true" /> HABLEMOS DE TU PROYECTO</p>
          <h2 id="contact-heading">Tu próximo proyecto merece una <em>rendición clara.</em></h2>
          <p className="contact-description">
            Parte con un diagnóstico inicial sin costo. Cuéntanos dónde estás y
            encontremos el siguiente paso para ordenar tu rendición.
          </p>
          <ol className="contact-steps">
            {nextSteps.map(([title, description], index) => (
              <li key={title}>
                <span className="contact-step-number" aria-hidden="true">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
          <div className="contact-direct">
            <span>¿Prefieres escribirnos directamente?</span>
            <a href="mailto:guillermo1205ad@gmail.com">
              <Mail size={17} aria-hidden="true" />
              <span>guillermo1205ad@gmail.com</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-card-heading">
            <span className="contact-card-tag">PRIMERA CONVERSACIÓN · SIN COSTO</span>
            <h3>Empecemos por conocerte.</h3>
            <p>Completa tus datos y cuéntanos sobre tu proyecto.</p>
          </div>
          <form action="https://formsubmit.co/guillermo1205ad@gmail.com" method="POST" className="contact-form" aria-describedby="contact-privacy">
            <input type="hidden" name="_subject" value="Nueva consulta · Veritas Rendiciones" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_url" value="https://guillermo1205ad.github.io/veritas-rendiciones/" />
            <input type="hidden" name="_next" value="https://guillermo1205ad.github.io/veritas-rendiciones/gracias.html" />
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-website">Dejar este campo vacío</label>
              <input id="contact-website" type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-name">Nombre y apellido <span aria-hidden="true">*</span></label>
              <input id="contact-name" name="Nombre" type="text" autoComplete="name" placeholder="Tu nombre completo" maxLength={150} required />
            </div>
            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="contact-email">Correo electrónico <span aria-hidden="true">*</span></label>
                <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="nombre@organizacion.cl" maxLength={254} required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-phone">Teléfono <small>Opcional</small></label>
                <input id="contact-phone" name="Teléfono" type="tel" autoComplete="tel" placeholder="+56 9 1234 5678" maxLength={40} />
              </div>
            </div>
            <div className="contact-field-row">
              <div className="contact-field">
                <label htmlFor="contact-organization">Organización <span aria-hidden="true">*</span></label>
                <input id="contact-organization" name="Organización" type="text" autoComplete="organization" placeholder="Empresa o institución" maxLength={200} required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-agency">Organismo financiador</label>
                <select id="contact-agency" name="Organismo financiador" defaultValue="">
                  <option value="">Selecciona una opción</option>
                  {['CORFO', 'ANID', 'FIA', 'GORE', 'SERCOTEC', 'Otro', 'Por definir'].map((agency) => (
                    <option key={agency} value={agency}>{agency}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">¿En qué podemos ayudarte?</label>
              <textarea id="contact-message" name="Mensaje" rows={3} maxLength={5000} placeholder="Cuéntanos en qué etapa está tu proyecto y qué necesitas resolver." />
            </div>
            <details className="contact-project-details">
              <summary>Agregar datos del proyecto <Plus size={16} aria-hidden="true" /></summary>
              <div className="contact-extra-fields">
                <div className="contact-field">
                  <label htmlFor="contact-project">Nombre o código del proyecto <small>Opcional</small></label>
                  <input id="contact-project" name="Proyecto" type="text" placeholder="Nombre o código de referencia" maxLength={250} />
                </div>
                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="contact-budget">Presupuesto <small>Opcional</small></label>
                    <select id="contact-budget" name="Presupuesto (CLP)" defaultValue="">
                      <option value="">Selecciona un rango</option>
                      <option value="Hasta $40.000.000">Hasta $40.000.000</option>
                      <option value="Más de $40.000.000 y hasta $120.000.000">$40.000.001 a $120.000.000</option>
                      <option value="Más de $120.000.000 y hasta $300.000.000">$120.000.001 a $300.000.000</option>
                      <option value="Más de $300.000.000">Más de $300.000.000</option>
                      <option value="Por definir">Por definir</option>
                    </select>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-rut">RUT de la entidad <small>Opcional</small></label>
                    <input id="contact-rut" name="RUT de la entidad" type="text" placeholder="76.123.456-7" maxLength={20} />
                  </div>
                </div>
              </div>
            </details>
            <button className="contact-submit" type="submit">Solicitar mi diagnóstico <ArrowRight size={19} aria-hidden="true" /></button>
            <p id="contact-privacy" className="contact-privacy">
              Los campos con * son obligatorios. Usaremos estos datos para responder a tu consulta.
              Evita incluir información sensible o documentos de tu proyecto.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
