import React from 'react';
import { Building2, GraduationCap, Users2, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onOpenContact: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-[#07090e] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users2 className="w-3.5 h-3.5" />
            <span>Perfil de Clientes y Alianzas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Para quién está diseñado este servicio?
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Trabajamos con organizaciones que entienden que el costo de un gasto objetado o una rendición demorada supera por mucho el valor de un acompañamiento profesional preventivo.
          </p>
        </div>

        {/* 3 Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Segment 1: Universidades & Centros I+D */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 shadow-lg shadow-indigo-950/40">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Universidades & Centros de I+D
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Organizaciones con decenas de convenios en paralelo (ANID Fondef, Fondecyt, Corfo Centros, Fondos Regionales GORE) que sufren cuellos de botella en sus direcciones de finanzas y rendiciones.
              </p>
              <ul className="text-xs text-slate-400 space-y-3 border-t border-white/[0.06] pt-5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Consolidación de carteras multiproyecto</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Preauditorías preventivas antes de revisiones</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Descarga administrativa total para investigadores</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-indigo-400 font-semibold">
              Oficinas de Transferencia (OTL / VRIP)
            </div>
          </div>

          {/* Segment 2: Empresas & Consorcios Adjudicados */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 shadow-lg shadow-sky-950/40">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Empresas & Startups Adjudicadas
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Empresas que ganaron proyectos CORFO (Crea y Valida, Innova Alta Tecnología) o FIA y necesitan que sus ingenieros se dediquen 100% a la tecnología, no a conciliar boletas y cartolas bancarias.
              </p>
              <ul className="text-xs text-slate-400 space-y-3 border-t border-white/[0.06] pt-5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Cierres documentales mensuales estandarizados</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Monitoreo continuo de topes presupuestarios</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Blindaje contra peticiones de restitución</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-sky-400 font-semibold">
              Gerencias de I+D & Innovación
            </div>
          </div>

          {/* Segment 3: Consultores de Rendiciones */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 sm:p-9 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-950/40">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Consultores de Proyectos y Formuladores
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Profesionales y firmas que actualmente prestan servicios de rendición a terceros. No competimos contigo: te ofrecemos una alianza para que multipliques por 10 tu capacidad de clientes sin colapsar.
              </p>
              <ul className="text-xs text-slate-400 space-y-3 border-t border-white/[0.06] pt-5">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Potencia tu servicio con nuestro motor de preauditoría</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Elimina el 80% de la carga manual repetitiva</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">Modelo de marca compartida o subcontratación experta</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400 font-semibold">
              Alianza B2B para Consultoras
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-500/25 transition-all hover:scale-105"
          >
            <span>Conversar sobre tu cartera de proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
