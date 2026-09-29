import React from 'react';
import { Eye, Network, UserCheck, Cpu, ShieldCheck } from 'lucide-react';

export const TechnologyExplainer: React.FC = () => {
  return (
    <section id="tecnologia" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Nuestra Ventaja Tecnológica Propietaria</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Por qué un servicio con Grafos de Conocimiento e IA Multimodal?
          </h2>
          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Una auditoría tradicional en planillas Excel es lenta, propensa al error humano y no detecta inconsistencias relacionales. Nosotros no vendemos una herramienta para que aprendas a usarla: aplicamos nuestra tecnología propietaria para resolver tus rendiciones con precisión matemática.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Multimodal AI */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 shadow-lg shadow-indigo-950/40">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">1. IA Multimodal Especializada</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                No es un simple lector OCR. Nuestros modelos multimodales comprenden facturas electrónicas (DTE 33), boletas de honorarios con retención legal, comprobantes de transferencia bancaria TEF, cartolas timbradas y contratos escaneados.
              </p>
              <ul className="text-xs text-slate-400 space-y-2.5 border-t border-white/[0.06] pt-5">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span className="text-slate-300">Extracción de RUT emisor/receptor, folios y fechas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span className="text-slate-300">Cálculo automático de retenciones de honorarios (13.75%)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span className="text-slate-300">Clasificación presupuestaria: RRHH, Operación, Inversión</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-indigo-400 font-mono font-semibold flex items-center justify-between">
              <span>Conciliación Tributaria SII</span>
              <span>99.4% precisión</span>
            </div>
          </div>

          {/* Pillar 2: Knowledge Graphs */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 shadow-lg shadow-sky-950/40">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">2. Grafos de Conocimiento</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Cada gasto es un nodo en una red relacional. Si un gasto de honorarios tiene boleta y transferencia pero le falta el informe técnico de actividades exigido por el convenio, el grafo detecta la rotura del enlace de custodia antes de la rendición.
              </p>
              <ul className="text-xs text-slate-400 space-y-2.5 border-t border-white/[0.06] pt-5">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span className="text-slate-300">Cruce relacional de cadena de custodia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span className="text-slate-300">Detección de folios duplicados en otras rendiciones</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span className="text-slate-300">Validación de topes presupuestarios por ítem en tiempo real</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-sky-400 font-mono font-semibold flex items-center justify-between">
              <span>Red Relacional PostgreSQL 16</span>
              <span>7 filtros en grafo</span>
            </div>
          </div>

          {/* Pillar 3: Human-in-the-Loop */}
          <div className="rounded-3xl glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-950/40">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">3. Criterio Consultor Senior</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                La IA no decide a ciegas sobre la admisibilidad jurídica de un gasto. Automatizamos la carpintería documental repetitiva y reservamos el criterio de los socios consultores para resolver las ambigüedades normativas de cada fondo.
              </p>
              <ul className="text-xs text-slate-400 space-y-2.5 border-t border-white/[0.06] pt-5">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300">Revisión de casos complejos por ingenieros y doctores</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300">Estrategia de defensa y descargos ante el evaluador</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300">Acompañamiento en solicitudes de reitemización y prórrogas</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-emerald-400 font-mono font-semibold flex items-center justify-between">
              <span>Validación y Descargo Legal</span>
              <span>100% Criterio Humano</span>
            </div>
          </div>

        </div>

        {/* Deliverable Callout Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-sky-950/40 border border-indigo-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">¿Qué recibe finalmente tu organización?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
              No una carpeta llena de archivos sin clasificar. Recibes un <strong>expediente blindado para el concurso</strong> con control presupuestario verificado, matriz de cruces, informe de preauditoría con observaciones subsanadas y tranquilidad absoluta ante el evaluador financiero.
            </p>
          </div>
          <div className="shrink-0 font-mono text-xs px-5 py-2.5 rounded-xl bg-slate-950 border border-indigo-500/30 text-indigo-300 flex items-center gap-2.5 shadow-lg">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold tracking-wide">Blindaje Auditoría 100%</span>
          </div>
        </div>

      </div>
    </section>
  );
};
