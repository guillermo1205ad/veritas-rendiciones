import React from 'react';
import { ShieldAlert, Network, ArrowRight, FileCheck, Shield, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenPortal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPortal, onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden bg-grid-pattern">
      {/* Dynamic Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-sky-500/10 to-transparent blur-[120px] pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Executive Tag Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.1] text-xs font-medium text-slate-300 mb-8 backdrop-blur-xl shadow-xl shadow-black/20 hover:border-indigo-500/40 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-400 font-semibold">Servicio Gestionado por Expertos:</span>
            <span className="text-white font-medium">Asumimos y blindamos tu rendición</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Preauditoría y Gestión Integral de{' '}
            <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-400 bg-clip-text text-transparent">
              Rendiciones de Proyectos
            </span>
          </h1>

          {/* Clear Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Acompañamos a empresas, universidades, consultoras y fundaciones que ejecutan subsidios{' '}
            <strong className="text-white font-semibold">CORFO, ANID, FIA y GORE</strong>. 
            Administramos la documentación mes a mes, cruzamos los respaldos con{' '}
            <span className="text-indigo-300 font-semibold underline decoration-indigo-500/40 decoration-2 underline-offset-4">
              Grafos de Conocimiento
            </span> e{' '}
            <span className="text-sky-300 font-semibold underline decoration-sky-500/40 decoration-2 underline-offset-4">
              IA Multimodal
            </span>, 
            detectando observaciones antes de presentar cada rendición oficial.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2.5 group"
            >
              <span>Solicitar Diagnóstico y Propuesta</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenPortal}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 border border-white/[0.1] font-semibold text-sm sm:text-base transition-all hover:border-indigo-500/40 flex items-center justify-center gap-2.5"
            >
              <Network className="w-4 h-4 text-indigo-400" />
              <span>Ver Simulación del Portal en Vivo</span>
            </button>
          </div>

          {/* KPI Numbers Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl mb-16 text-left">
            <div className="p-3 border-r border-white/[0.06] last:border-none">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Trazabilidad Documental</div>
            </div>
            <div className="p-3 sm:border-r border-white/[0.06] last:border-none">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">$0</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Reintegros Objetados</div>
            </div>
            <div className="p-3 border-r border-white/[0.06] last:border-none">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">Mes a Mes</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Cierres Preventivos</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">7 Puntos</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Cruce de Respaldo en Grafo</div>
            </div>
          </div>

          {/* Institutional Trust Badges */}
          <div className="pt-8 border-t border-white/[0.06]">
            <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-6">
              Expertos en normativas y manuales de rendición de fondos concursables
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>CORFO (Crea y Valida · Innova)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>ANID (Fondef · Fondecyt)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>FIA (Innovación Agraria)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>GORE (FNDR / Fondos Regionales)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>SERCOTEC & Fondos Privados</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
              Cruce Documental de Respaldo
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No revisamos archivos aislados. Verificamos que cada boleta, factura o liquidación cuente con su contrato vigente, comprobante de transferencia bancaria coincidente, respaldo tributario e informe de actividades mensual.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
              Grafos de Conocimiento & Reglas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Representamos cada proyecto como una red interconectada. Si un entregable técnico falta o un monto transferido difiere de la boleta, el grafo detecta la rotura lógica al instante, impidiendo reparos del fondo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-7 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
              Servicio Preventivo Mes a Mes
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No esperes al mes 18 con una caja llena de comprobantes desordenados. Auditamos y cerramos cada mes de ejecución. Si en marzo falta una transferencia, la subsanamos en marzo, no al cierre del proyecto.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
