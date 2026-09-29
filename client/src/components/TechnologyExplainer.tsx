import React from 'react';
import { BrainCircuit, Network, UserCheck, Cpu, Database, Eye, ShieldCheck, Zap } from 'lucide-react';

export const TechnologyExplainer: React.FC = () => {
  return (
    <section id="tecnologia" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Nuestra Ventaja Tecnológica Propietaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Por qué un servicio con Grafos de Conocimiento e IA Multimodal?
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Una auditoría tradicional en planillas Excel es lenta, propensa al error humano y no detecta inconsistencias relacionales. Nosotros no vendemos una herramienta para que aprendas a usarla: nosotros aplicamos nuestra tecnología de punta para resolver tus rendiciones con precisión milimétrica.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1: Multimodal AI */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 hover:border-indigo-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. IA Multimodal Especializada</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                No es un simple lector de texto. Nuestros modelos multimodales comprenden facturas electrónicas (DTE 33), boletas de honorarios con retención, comprobantes de transferencia bancaria, cartolas timbradas y contratos en formato PDF escaneado.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>Extracción de RUT emisor/receptor, folios y fechas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>Cálculo automático de retenciones de honorarios (13.75%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>Clasificación presupuestaria: RRHH, Operación, Inversión</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-indigo-400 font-mono">
              99.4% precisión en conciliación tributaria
            </div>
          </div>

          {/* Pillar 2: Knowledge Graphs */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 hover:border-sky-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 mb-5">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Grafos de Conocimiento</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Cada gasto es un nodo en una red relacional. Si un gasto de honorarios tiene boleta y comprobante pero le falta el informe de actividades exigido por el convenio, el grafo detecta la rotura del enlace de custodia antes de la rendición.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Cruce relacional de cadena de custodia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Detección de folios y facturas duplicadas en otras rendiciones</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Validación de topes presupuestarios por ítem en tiempo real</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-sky-400 font-mono">
              Trazabilidad relacional multicapa en PostgreSQL
            </div>
          </div>

          {/* Pillar 3: Human-in-the-Loop */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Criterio Experto y Decisión</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                La IA no decide a ciegas sobre la admisibilidad jurídica de un gasto. Automatizamos la carpintería documental repetitiva y reservamos el criterio de los socios consultores para resolver las ambigüedades normativas de cada fondo.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Revisión de casos complejos por ingenieros comerciales y doctores</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Estrategia de defensa y subsanación ante observaciones del financiador</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Acompañamiento en solicitudes de reitemización y prórrogas</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-emerald-400 font-mono">
              Validación humana de excepciones y descargos
            </div>
          </div>
        </div>

        {/* Illustrative Callout: What the Client Receives */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-900/40 via-slate-900 to-sky-900/40 border border-indigo-500/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">¿Qué recibe finalmente tu organización?</h3>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              No una carpeta llena de archivos sin clasificar. Recibes un <strong>expediente blindado para el concurso</strong> con control presupuestario verificado, matriz de cruces, informe de preauditoría con observaciones subsanadas y tranquilidad absoluta ante el evaluador financiero.
            </p>
          </div>
          <div className="shrink-0 font-mono text-xs px-4 py-2 rounded-xl bg-slate-950 border border-indigo-500/30 text-indigo-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Blindaje Auditoría 100%</span>
          </div>
        </div>

      </div>
    </section>
  );
};
