import React from 'react';
import { ExternalLink, GraduationCap, Award, BrainCircuit, TrendingUp, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const FoundersSection: React.FC = () => {
  return (
    <section id="consultores" className="py-24 bg-[#07090e] border-t border-white/[0.06] relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-indigo-500/5 via-sky-500/5 to-purple-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Liderazgo Experto & Credenciales de Excelencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Socios Consultores Principales
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Nuestro valor no reside en entregarte una clave de acceso a una plataforma, sino en asumir la responsabilidad técnica y financiera de tus rendiciones con un equipo de alto nivel que une rigor de negocios y ciencia de datos de frontera.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Guillermo Peralta */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

            <div>
              {/* Header Info with Monogram Crest */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1px] shadow-lg shadow-indigo-500/20 shrink-0">
                    <div className="w-full h-full bg-[#0a0d16] rounded-[15px] flex items-center justify-center text-white font-mono font-bold text-lg">
                      GP
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                      Guillermo Peralta
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-indigo-400 mt-0.5">
                      Socio Consultor & Director de IA
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/guillermo-peralta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Guillermo Peralta"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-[#0077b5] text-slate-400 hover:text-white border border-white/[0.08] hover:border-transparent transition-all shrink-0 flex items-center gap-1.5 text-xs font-semibold shadow-md"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Degrees / Credentials */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-300 bg-[#090d16] p-4 rounded-2xl border border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Ingeniero Comercial</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Magíster en Ciencias Empresariales</strong> (Gestión del Emprendimiento)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <BrainCircuit className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Doctor (c) en Ciencias de la Computación</strong></span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Especialista en la intersección de modelos financieros y sistemas complejos de computación. Lidera la arquitectura de <strong>Grafos de Conocimiento</strong> e <strong>IA Multimodal</strong> para conciliación tributaria, trazabilidad de gastos públicos y preauditoría automatizada de expedientes de innovación.
              </p>

              {/* Focus Areas */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-bold">
                  Áreas de Especialidad:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                    Grafos de Conocimiento
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                    IA Multimodal de Documentos
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                    Automatización Simbólica
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Matías Cotroneo Urriola */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

            <div>
              {/* Header Info with Monogram Crest */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 p-[1px] shadow-lg shadow-sky-500/20 shrink-0">
                    <div className="w-full h-full bg-[#0a0d16] rounded-[15px] flex items-center justify-center text-white font-mono font-bold text-lg">
                      MC
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
                      Matías Cotroneo Urriola
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-400 mt-0.5">
                      Socio Consultor & Director de Gestión
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/matias-cotroneo-urriola-6368861a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Matías Cotroneo Urriola"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-[#0077b5] text-slate-400 hover:text-white border border-white/[0.08] hover:border-transparent transition-all shrink-0 flex items-center gap-1.5 text-xs font-semibold shadow-md"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Degrees / Credentials */}
              <div className="space-y-2.5 mb-6 text-xs text-slate-300 bg-[#090d16] p-4 rounded-2xl border border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>Ingeniero Comercial</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span><strong>Magíster en Ciencias Empresariales</strong> (Gestión del Emprendimiento)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Especialista en Finanzas de Proyectos & Fondos Concursables</strong></span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Consultor con amplia experiencia en formulación, control financiero y rendición de proyectos de subsidio estatal. Experto en bases administrativas de <strong>CORFO, FIA, ANID y GORE</strong>, garantizando que cada gasto cumpla con los estándares jurídicos y contables exigidos por los convenios.
              </p>

              {/* Focus Areas */}
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 font-bold">
                  Áreas de Especialidad:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                    Bases CORFO & ANID
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                    Estrategia Presupuestaria
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300">
                    Defensa ante Observaciones
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Synergy Callout Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8 shadow-2xl border border-indigo-500/25">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-lg shadow-indigo-950/50">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              La Sinergia: Visión de Negocios + Frontera Tecnológica
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              No somos una empresa de contabilidad tradicional que se satura con planillas, ni una startup que te abandona con un software sin soporte. Somos dos consultores con postgrados en ciencias empresariales e informática que asumen tu rendición como un socio estratégico de confianza.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
