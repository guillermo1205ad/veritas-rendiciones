import React from 'react';
import { ExternalLink, GraduationCap, Award, BrainCircuit, TrendingUp, ShieldCheck } from 'lucide-react';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const FoundersSection: React.FC = () => {
  return (
    <section id="consultores" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Liderazgo Experto & Credenciales de Excelencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consultores Principales
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Nuestro valor no reside en entregarte una clave de acceso a una plataforma, sino en asumir la responsabilidad técnica y financiera de tus rendiciones con un equipo de alto nivel que une rigor de negocios y ciencia de datos de frontera.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Guillermo Peralta */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Guillermo Peralta
                  </h3>
                  <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                    Socio Consultor & Director de Inteligencia Artificial
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/guillermo-peralta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Guillermo Peralta"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white border border-slate-800 transition-all shrink-0 flex items-center gap-1.5 text-xs font-semibold"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0a66c2] group-hover:text-white" />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Degrees / Credentials */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Ingeniero Comercial</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Magíster en Ciencias Empresariales</strong> (Gestión del Emprendimiento)</span>
                </div>
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Doctor (c) en Ciencias de la Computación</strong></span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Especialista en la intersección de modelos financieros y sistemas complejos de computación. Lidera la arquitectura de <strong>Grafos de Conocimiento</strong> e <strong>IA Multimodal</strong> para conciliación tributaria, trazabilidad de gastos públicos y preauditoría automatizada de expedientes de innovación.
              </p>

              {/* Focus Areas */}
              <div className="pt-4 border-t border-slate-900">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Áreas de Especialidad:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                    Grafos de Conocimiento
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                    IA Multimodal para Documentos
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                    Automatización Simbólica
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Matías Cotroneo Urriola */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 hover:border-sky-500/50 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

            <div>
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    Matías Cotroneo Urriola
                  </h3>
                  <p className="text-sm font-semibold text-sky-400 mt-0.5">
                    Socio Consultor & Director de Gestión de Proyectos
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/matias-cotroneo-urriola-6368861a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Matías Cotroneo Urriola"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-slate-400 hover:text-white border border-slate-800 transition-all shrink-0 flex items-center gap-1.5 text-xs font-semibold"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0a66c2] group-hover:text-white" />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Degrees / Credentials */}
              <div className="space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Ingeniero Comercial</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Magíster en Ciencias Empresariales</strong> (Gestión del Emprendimiento)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Especialista en Finanzas de Proyectos & Fondos Concursables</strong></span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Consultor con amplia experiencia en formulación, control financiero y rendición de proyectos de subsidio estatal. Experto en bases administrativas de <strong>CORFO, FIA, ANID y GORE</strong>, garantizando que cada gasto cumpla con los estándares jurídicos y contables exigidos por los convenios.
              </p>

              {/* Focus Areas */}
              <div className="pt-4 border-t border-slate-900">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Áreas de Especialidad:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                    Bases CORFO & ANID
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                    Estrategia Presupuestaria
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                    Defensa ante Observaciones
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* The Synergy Callout */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              La Sinergia: Visión de Negocios + Frontera Tecnológica
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              No somos una empresa de contabilidad tradicional que se satura con planillas, ni una startup que te abandona con un software sin soporte. Somos dos consultores con postgrados en ciencias empresariales e informática que asumen tu rendición como un socio estratégico de confianza.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
