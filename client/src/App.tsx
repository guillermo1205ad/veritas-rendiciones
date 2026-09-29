import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, CheckCheck, FileCheck2, FolderCheck, Network, ShieldCheck, Menu, X, Plus, Minus, ChevronDown, Building2, GraduationCap, Handshake, MoveUpRight, Layers3 } from 'lucide-react';
import { PortalDemo } from './components/PortalDemo';
import { AuditIntakeForm } from './components/AuditIntakeForm';

function Brand({ light = false }: { light?: boolean }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#inicio" aria-label="Véritas, inicio"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 42"><path d="M4 5h8l10 25-4 10L4 5Zm18 0h14L23 35l-4-10L28 5" fill="currentColor"/></svg></span><span className="brand-name">VÉRITAS<span>ADVISORY & RENDICIONES</span></span></a>;
}

function HeroGraphic() {
  return <div className="hero-art" aria-label="Ilustración de trazabilidad documental: contrato, factura e informe conectados a un gasto verificado">
    <div className="art-topline"><span><span className="status-dot"/> INTELIGENCIA DOCUMENTAL</span><span>V / 01</span></div>
    <div className="art-grid"/>
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
    <svg className="connections" viewBox="0 0 560 520" fill="none" aria-hidden="true"><path d="M112 190L282 267L446 168M282 267L404 390M282 267L111 364" stroke="#87a991" strokeWidth="1"/><path d="M112 190L282 267L446 168M282 267L404 390" stroke="#d6edaa" strokeWidth="2" strokeDasharray="3 8" className="flow-line"/><circle cx="282" cy="267" r="76" stroke="#92aa95" strokeOpacity=".35"/></svg>
    <div className="graph-center"><ShieldCheck size={39} strokeWidth={1.2}/><span>Cada gasto.<br/><strong>Con respaldo.</strong></span></div>
    <div className="document-node node-contract"><span className="node-icon"><FileCheck2 size={20}/></span><div><small>01 / CONTRATO</small><strong>Todo comienza aquí.</strong></div><Check size={16}/></div>
    <div className="document-node node-invoice"><span className="node-icon"><FolderCheck size={20}/></span><div><small>02 / FACTURA</small><strong>Respaldo conectado.</strong></div><Check size={16}/></div>
    <div className="node-dot"><Network size={20}/></div>
    <div className="document-node node-report"><span className="node-icon"><CheckCheck size={21}/></span><div><small>03 / INFORME</small><strong>Coherencia verificada.</strong></div><Check size={16}/></div>
    <div className="art-footer"><span>Del documento a la certeza.</span><span>CRUCE + CRITERIO EXPERTO <ArrowUpRight size={14}/></span></div>
    <div className="art-caption"><span className="caption-icon"><Layers3 size={22}/></span><div><strong>Una visión completa.</strong><span>Personas, documentos y presupuesto.</span></div><span className="caption-line"/></div>
  </div>;
}

const services = [
  { icon: FolderCheck, number: '01', title: 'Orden que se sostiene.', description: 'Organizamos contratos, facturas, transferencias e informes para que cada gasto tenga una cadena de respaldo clara.', detail: 'Gestión documental mensual' },
  { icon: ShieldCheck, number: '02', title: 'Anticipación que protege.', description: 'Identificamos documentos faltantes, duplicidades y diferencias antes de presentar tu rendición.', detail: 'Preauditoría preventiva' },
  { icon: Network, number: '03', title: 'Un equipo que responde.', description: 'Te acompañamos en el control del presupuesto y en la preparación de respuestas a observaciones del financiador.', detail: 'Acompañamiento experto' },
];
const steps = [
  ['Entendemos tu proyecto', 'Revisamos el convenio, las bases y el presupuesto para definir una matriz de control a tu medida.'],
  ['Conectamos los respaldos', 'Ordenamos la documentación y cruzamos los datos con grafos de conocimiento e IA multimodal.'],
  ['Revisamos antes de rendir', 'Detectamos brechas y priorizamos las correcciones con la revisión de nuestros consultores.'],
  ['Te acompañamos al cierre', 'Preparamos el expediente y apoyamos la respuesta a observaciones de cada rendición.'],
];
const faqs = [
  ['¿Es un software o un servicio de consultoría?', 'Es un servicio gestionado por consultores. Nuestro equipo organiza, cruza y revisa los antecedentes de tu proyecto, apoyado por tecnología. Tú cuentas con acompañamiento y visibilidad del proceso.'],
  ['¿Pueden ayudarme si el proyecto ya está en ejecución?', 'Sí. El diagnóstico inicial permite revisar el estado de tu documentación, identificar pendientes y definir un plan de trabajo según la etapa y la próxima fecha de rendición.'],
  ['¿Con qué fondos trabajan?', 'Acompañamos proyectos financiados por CORFO, ANID, FIA, GORE, SERCOTEC y otros fondos. El alcance se define según las bases, el convenio y las necesidades de cada proyecto.'],
  ['¿Qué incluye el diagnóstico inicial sin costo?', 'Una conversación para entender tu proyecto, conocer el estado de sus respaldos y detectar las principales necesidades de gestión. A partir de eso, definimos el alcance y te presentamos una propuesta.'],
  ['¿La preauditoría garantiza que se apruebe la rendición?', 'La preauditoría ayuda a detectar y corregir inconsistencias antes de presentar los antecedentes. La revisión y la aprobación final corresponden al organismo financiador.'],
];

const currentYear = new Date().getFullYear();

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <a href="#contenido" className="skip-link">Saltar al contenido</a>
    <header className="site-header">
      <div className="container nav-inner"><Brand/>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} id="main-navigation" aria-label="Navegación principal">
          <a href="#propuesta" onClick={closeMenu}>El servicio</a><a href="#metodologia" onClick={closeMenu}>Cómo trabajamos</a><a href="#consultores" onClick={closeMenu}>Nuestro equipo</a><a href="#contacto" onClick={closeMenu} className="button nav-cta">Conversemos <ArrowUpRight size={16}/></a>
        </nav>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>
    <main id="contenido">
      <section className="hero" id="inicio">
        <div className="container hero-layout">
          <div className="hero-copy"><p className="eyebrow"><span className="small-line"/> GESTIÓN & PREAUDITORÍA DE PROYECTOS</p>
            <h1>Tu proyecto<br/>merece avanzar.<br/><em>Sin rendiciones<br className="desktop-break"/> que lo frenen.</em></h1>
            <p className="hero-description">Tú impulsas la innovación. Nosotros ordenamos, revisamos y acompañamos tus rendiciones de fondos, de principio a fin.</p>
            <div className="hero-actions"><a href="#contacto" className="button button-primary">Solicitar diagnóstico <ArrowUpRight size={19}/></a><a href="#portal-demo" className="text-link">Explorar el servicio <ArrowRight size={17}/></a></div>
            <div className="hero-assurance"><span><Check size={14}/> Diagnóstico inicial sin costo</span><span><Check size={14}/> Atención directa de los socios</span></div>
          </div>
          <HeroGraphic/>
        </div>
        <div className="container hero-bottom"><span>MENOS CARGA ADMINISTRATIVA. MÁS FOCO EN TU PROYECTO.</span><a href="#propuesta" aria-label="Descubrir el servicio"><ChevronDown size={19}/></a><span>SANTIAGO, CHILE · ACOMPAÑAMIENTO REMOTO</span></div>
      </section>
      <div className="funding-strip"><div className="container funding-inner"><p>ACOMPAÑAMOS TUS<br/><strong>PROYECTOS FINANCIADOS POR</strong></p><div className="funding-names" aria-label="CORFO, ANID, FIA, GORE y SERCOTEC"><span className="corfo-word">CORFO<span>Corporación de Fomento</span></span><span>ANID<span>Investigación y Desarrollo</span></span><span className="fia-word">FIA<span>Innovación Agraria</span></span><span>GORE<span>Gobiernos Regionales</span></span><span className="sercotec-word">Sercotec<span>Crece con tu empresa</span></span></div></div></div>
      <section id="propuesta" className="section services-section"><div className="container">
        <div className="section-heading two-column"><div><p className="eyebrow">LA TRANQUILIDAD TAMBIÉN SE PLANIFICA</p><h2>Ganar el fondo fue el inicio.<br/><em>Rendirlo bien es el siguiente paso.</em></h2></div><p className="section-intro">Una rendición no se resuelve el último día. Se construye mes a mes, con documentos consistentes y decisiones a tiempo.</p></div>
        <div className="services-grid">{services.map(({icon: Icon, number, title, description, detail}) => <article className="service-card" key={number}><div className="service-top"><Icon size={28} strokeWidth={1.3}/><span>{number} /</span></div><h3>{title}</h3><p>{description}</p><div className="service-detail">{detail}<ArrowUpRight size={18}/></div></article>)}</div>
        <div className="service-note"><ShieldCheck size={18}/><p>Consultoría especializada + inteligencia documental.<strong> La tecnología conecta. Nuestro equipo interpreta.</strong></p></div>
      </div></section>
      <section id="metodologia" className="method-section section"><div className="container">
        <div className="method-heading"><div><p className="eyebrow">UN MÉTODO CLARO. UN EQUIPO A TU LADO.</p><h2>De la primera carpeta<br/><em>al último respaldo.</em></h2></div><div><p>Convertimos la complejidad de tu rendición en un proceso ordenado, visible y acompañado.</p><a href="#contacto" className="text-link">Hablemos de tu proyecto <ArrowUpRight size={18}/></a></div></div>
        <div className="method-grid">{steps.map(([title, description], i) => <article className="method-step" key={title}><div className="step-track"><span>0{i+1}</span><ArrowRight size={17}/></div><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="method-bottom"><span><span className="status-dot"/> SEGUIMIENTO MES A MES</span><p>Un respaldo no debería buscarse cuando ya es tarde.</p></div>
      </div></section>
      <PortalDemo/>
      <section id="consultores" className="section team-section"><div className="container">
        <div className="section-heading two-column"><div><p className="eyebrow">PERSONAS DETRÁS DE CADA RESPALDO</p><h2>Rigor en los números.<br/><em>Compromiso con tu proyecto.</em></h2></div><p className="section-intro">Trabajas directamente con los socios. Combinamos gestión financiera y ciencias de la computación para entender el problema completo.</p></div>
        <div className="team-grid"><article className="person-card"><div className="person-avatar avatar-one" aria-hidden="true"><span>GP</span><span className="avatar-label">ESTRATEGIA + TECNOLOGÍA</span><Network size={85} strokeWidth={.7}/></div><div className="person-info"><div className="person-title"><h3>Guillermo Peralta</h3><a href="https://www.linkedin.com/in/guillermo-peralta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Guillermo Peralta"><ArrowUpRight size={20}/></a></div><p className="person-role">SOCIO · DIRECCIÓN DE INTELIGENCIA ARTIFICIAL</p><p>Ingeniero Comercial y Magíster en Ciencias Empresariales. Doctor (c) en Ciencias de la Computación.</p><div className="expertise"><span>Grafos de conocimiento</span><span>IA multimodal</span></div></div></article>
        <article className="person-card"><div className="person-avatar avatar-two" aria-hidden="true"><span>MC</span><span className="avatar-label">GESTIÓN + CONTROL</span><Layers3 size={85} strokeWidth={.7}/></div><div className="person-info"><div className="person-title"><h3>Matías Cotroneo Urriola</h3><a href="https://www.linkedin.com/in/matias-cotroneo-urriola-6368861a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Matías Cotroneo Urriola"><ArrowUpRight size={20}/></a></div><p className="person-role">SOCIO · DIRECCIÓN DE GESTIÓN DE PROYECTOS</p><p>Ingeniero Comercial y Magíster en Ciencias Empresariales. Especialista en finanzas de proyectos y fondos concursables.</p><div className="expertise"><span>Control presupuestario</span><span>Gestión de rendiciones</span></div></div></article></div>
      </div></section>
      <section className="audience-section section"><div className="container audience-layout"><div><p className="eyebrow">PARA QUIENES HACEN QUE LAS IDEAS AVANCEN</p><h2>Tu organización.<br/>Tu desafío.<br/><em>Nuestro compromiso.</em></h2><a href="#contacto" className="text-link">Encontrar mi solución <ArrowUpRight size={18}/></a></div><div className="audience-list">{[
        [Building2, 'Empresas & startups', 'Dedica tu energía a ejecutar el proyecto. Te acompañamos con el orden documental y el seguimiento del presupuesto.'],
        [GraduationCap, 'Universidades & centros de I+D', 'Apoyo para equipos que gestionan convenios, investigadores y múltiples rendiciones en paralelo.'],
        [Handshake, 'Consultoras & fundaciones', 'Capacidad especializada para tu cartera de proyectos, con apoyo en revisión documental y preauditoría.'],
      ].map(([Icon, title, description]) => {const AudienceIcon = Icon as typeof Building2; return <article className="audience-row" key={title as string}><AudienceIcon size={25} strokeWidth={1.3}/><div><h3>{title as string}</h3><p>{description as string}</p></div><ArrowUpRight className="audience-arrow" size={19}/></article>;})}</div></div></section>
      <section className="section faq-section"><div className="container faq-layout"><div><p className="eyebrow">ANTES DE CONVERSAR</p><h2>Claridad desde<br/><em>el primer momento.</em></h2><p className="section-intro">Las respuestas a las preguntas que quizás ya te estás haciendo.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <article className={`faq-item ${openFaq === i ? 'faq-open' : ''}`} key={question}><h3><button type="button" aria-expanded={openFaq === i} aria-controls={`faq-answer-${i}`} id={`faq-question-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{question}{openFaq === i ? <Minus size={18}/> : <Plus size={18}/>}</button></h3><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={openFaq !== i}><p>{answer}</p></div></article>)}</div></div></section>
      <AuditIntakeForm/>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-main"><div><Brand light/><p>Más claridad. Más control.<br/>Más espacio para avanzar.</p></div><div className="footer-links"><a href="#propuesta">El servicio</a><a href="#metodologia">Cómo trabajamos</a><a href="#portal-demo">Explorar la demostración</a></div><div className="footer-contact"><span>HABLEMOS DE TU PROYECTO</span><a href="mailto:guillermo1205ad@gmail.com">guillermo1205ad@gmail.com <MoveUpRight size={15}/></a><p>Santiago, Chile · Atención remota</p></div></div><div className="footer-bottom"><span>© {currentYear} Véritas Advisory. Todos los derechos reservados.</span><span>Servicio independiente de los organismos financiadores.</span><a href="#inicio">Volver arriba ↑</a></div></div></footer>
  </>;
}
export default App;
