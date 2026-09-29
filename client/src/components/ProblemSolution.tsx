import React from 'react';
import { FileWarning, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="propuesta" className="py-24 bg-[#07090e] border-y border-white/[0.06] relative overflow-hidden">
      {/* Subtle Glow Accents */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-rose-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            El Problema Real de las Rendiciones
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ganar un proyecto es un logro.<br className="hidden sm:inline" /> 
            <span className="text-slate-400">Rendirlo no debería convertirse en una pesadilla.</span>
          </h2>
          <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            Durante la ejecución se acumulan cientos de documentos. Si una organización espera al final del proyecto para revisar, se enfrenta a contratos vencidos, transferencias extraviadas y el riesgo inminente de reintegros millonarios de fondos.
          </p>
        </div>

        {/* Side-by-side comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Traditional Way (Pain) */}
          <div className="rounded-3xl bg-gradient-to-b from-rose-950/20 to-transparent border border-rose-900/30 p-8 sm:p-10 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-rose-900/30">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shadow-lg shadow-rose-950/50 shrink-0">
                <FileWarning className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">El Enfoque Tradicional</h3>
                <p className="text-xs text-rose-300 font-medium mt-0.5">Revisión reactiva, desorden acumulado y alto riesgo financiero</p>
              </div>
            </div>

            <ul className="space-y-5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <div>
                  <strong className="text-white">Colapso al cierre del plazo:</strong> Se acumulan 18 meses de facturas, cartolas y boletas en carpetas dispersas dos semanas antes del informe final.
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <div>
                  <strong className="text-white">Documentación irrecuperable:</strong> Proveedores inubicables, informes de actividades que nadie redactó a tiempo y transferencias sin conciliar.
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <div>
                  <strong className="text-white">Descuadres presupuestarios:</strong> Gastos imputados al ítem equivocado o gastos que exceden el tope permitido por las bases de CORFO/ANID/FIA.
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <div>
                  <strong className="text-white">Reparos y devolución de subsidio:</strong> Observaciones masivas del ejecutivo financiero y riesgo de tener que devolver dinero con cargo al patrimonio de la empresa.
                </div>
              </li>
            </ul>
          </div>

          {/* VÉRITAS Way (Preventive & Managed) */}
          <div className="rounded-3xl bg-gradient-to-b from-indigo-950/30 to-slate-950/40 border border-indigo-500/30 p-8 sm:p-10 relative overflow-hidden shadow-2xl shadow-indigo-500/5">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-indigo-500/20">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-950/50 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">El Acompañamiento VÉRITAS</h3>
                <p className="text-xs text-indigo-300 font-medium mt-0.5">Gestión preventiva mensual, blindaje relacional y preauditoría</p>
              </div>
            </div>

            <ul className="space-y-5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <div>
                  <strong className="text-white">Cierres preventivos mensuales:</strong> Si en marzo falta un respaldo bancario, lo detectamos y solicitamos en marzo, no 12 meses después.
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <div>
                  <strong className="text-white">Cadena de custodia completa:</strong> Verificamos boleta + contrato + transferencia + retención tributaria + informe de actividades antes de imputar.
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <div>
                  <strong className="text-white">Preauditoría antes de rendir:</strong> Generamos el informe de preauditoría que revela observaciones con anticipación para corregirlas de inmediato.
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <div>
                  <strong className="text-white">Gestión y defensa de observaciones:</strong> Si el organismo emite alguna duda técnica, estructuramos la carpeta oficial de respuesta y descargos.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Lifecycle Stepper */}
        <div id="metodologia" className="rounded-3xl glass-panel p-8 sm:p-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                Ciclo de Acompañamiento Integral
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
                Cómo gestionamos tu proyecto de punta a punta
              </h3>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-white/[0.04] px-4 py-2 rounded-xl border border-white/[0.08] self-start md:self-auto">
              Cobertura continua durante 12, 18, 24 o 36 meses
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.06] hover:border-indigo-500/30 transition-colors">
              <div className="text-xs font-mono font-bold text-indigo-400 mb-3 flex items-center justify-between">
                <span>FASE 01</span>
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Matriz de Control Inicial</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cargamos el convenio, presupuesto aprobado, carta Gantt, manual de rendición y bases del fondo (CORFO, ANID, FIA, etc.) para crear el motor de reglas de validación.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.06] hover:border-sky-500/30 transition-colors">
              <div className="text-xs font-mono font-bold text-sky-400 mb-3 flex items-center justify-between">
                <span>FASE 02</span>
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Ingesta y Cruce Documental</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Recibimos facturas, boletas y comprobantes mes a mes. La IA Multimodal extrae datos y el Grafo de Conocimiento verifica la coherencia entre emisor, monto e ítem.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.06] hover:border-emerald-500/30 transition-colors">
              <div className="text-xs font-mono font-bold text-emerald-400 mb-3 flex items-center justify-between">
                <span>FASE 03</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Preauditoría Preventiva</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Antes de subir a la plataforma oficial, ejecutamos una preauditoría integral. Identificamos documentos faltantes, duplicidades y descalces de dinero.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#090d16] border border-white/[0.06] hover:border-purple-500/30 transition-colors">
              <div className="text-xs font-mono font-bold text-purple-400 mb-3 flex items-center justify-between">
                <span>FASE 04</span>
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Expediente Blindado</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Entrega del expediente foliado listo para aprobación del evaluador. Si el financiador formula dudas, preparamos la carpeta oficial de subsanación técnica.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
