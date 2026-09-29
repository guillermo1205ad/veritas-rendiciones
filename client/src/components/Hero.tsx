import React from 'react';
import { ShieldAlert, Sparkles, Network, ArrowRight, CheckCircle2, FileCheck, Layers, AlertTriangle } from 'lucide-react';

interface HeroProps {
  onOpenPortal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPortal, onOpenContact }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Proposition Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">Servicio Gestionado por Expertos:</span>
            <span>No vendemos software, resolvemos y blindamos tu rendición</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Preauditoría y Gestión Integral de{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
              Rendiciones de Proyectos
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Acompañamos a empresas, universidades, consultoras y fundaciones que ejecutan fondos{' '}
            <strong className="text-white font-semibold">CORFO, ANID, FIA y GORE</strong>. 
            Administramos la documentación mes a mes, cruzamos los respaldos con{' '}
            <span className="text-indigo-300 font-semibold underline decoration-indigo-500/40">Grafos de Conocimiento</span> e{' '}
            <span className="text-sky-300 font-semibold underline decoration-sky-500/40">IA Multimodal</span>, 
            y detectamos observaciones antes de presentar cada rendición oficial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-base shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <span>Solicitar Diagnóstico y Propuesta</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenPortal}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all hover:border-indigo-500/50 flex items-center justify-center gap-2"
            >
              <Network className="w-5 h-5 text-indigo-400" />
              <span>Ver Simulación de Preauditoría en Vivo</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-slate-800/80">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
              Especialistas en bases y manuales de rendición de fondos públicos y privados
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-slate-300 font-semibold text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span>CORFO (Innova, Crea y Valida)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span>ANID (Fondef, Fondecyt)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>FIA (Innovación Agraria)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>GORE (FNDR / FIC-R)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                <span>SERCOTEC & Fondos Privados</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid (Context from Prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Cruce Documental de Respaldo
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No revisamos archivos aislados. Verificamos que cada boleta, factura o liquidación cuente con su contrato vigente, comprobante de transferencia bancaria, respaldo tributario e informe de actividades mensual.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Grafos de Conocimiento & Reglas
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Representamos cada proyecto como una red interconectada. Si un informe falta o un monto transferido difiere de la boleta, el grafo detecta la ruptura lógica al instante, impidiendo errores antes de la entrega.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Servicio Preventivo Mes a Mes
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              No esperes al mes 18 con una caja llena de comprobantes desordenados. Cerramos y auditamos cada mes de ejecución. Si en marzo falta una transferencia, la subsanamos en marzo, no al cierre del proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
