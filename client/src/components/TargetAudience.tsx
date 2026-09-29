import React from 'react';
import { Building2, GraduationCap, Users2, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onOpenContact: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>Perfil de Clientes y Alianzas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Para quién está diseñado este servicio?
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Trabajamos con organizaciones que entienden que el costo de un gasto rechazado o una rendición demorada supera por mucho el valor de un acompañamiento profesional preventivo.
          </p>
        </div>

        {/* 3 Segments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Segment 1: Universidades & Centros I+D */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 hover:border-indigo-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Universidades, Centros de I+D y Fundaciones
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Organizaciones con decenas de convenios en paralelo (ANID Fondef, Fondecyt, Corfo Centros, Fondos Regionales GORE) que sufren cuellos de botella en sus direcciones de finanzas y rendiciones.
              </p>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Consolidación de carteras multiproyecto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Preauditorías preventivas antes de revisiones ministeriales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Descarga administrativa total para investigadores principales</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-indigo-400">
              Ideal para oficinas de transferencia (OTL)
            </div>
          </div>

          {/* Segment 2: Empresas & Startups de Innovación */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 hover:border-sky-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Empresas & Consorcios Adjudicados
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Empresas que ganaron proyectos CORFO (Crea y Valida, Innova Alta Tecnología) o FIA y necesitan que sus ingenieros se dediquen 100% a la tecnología, no a conciliar boletas y cartolas bancarias.
              </p>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cierres documentales mensuales estandarizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Monitoreo continuo de topes de presupuesto por ítem</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Blindaje contra peticiones de restitución de fondos</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-sky-400">
              Ideal para gerencias de I+D y finanzas
            </div>
          </div>

          {/* Segment 3: Consultores de Rendiciones */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Consultores de Proyectos y Formuladores
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Profesionales y firmas que actualmente prestan servicios de rendición a terceros. No competimos contigo: te ofrecemos una alianza para que multipliques por 10 tu capacidad de clientes.
              </p>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Potencia tu servicio con nuestro motor de preauditoría</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Elimina el 80% de la carga manual repetitiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Modelo de marca compartida o subcontratación experta</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400">
              Alianza B2B para consultores
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-500/20 transition-all hover:scale-105"
          >
            <span>Conversar sobre tu cartera de proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
