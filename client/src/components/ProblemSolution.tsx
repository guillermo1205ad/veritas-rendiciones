import React from 'react';
import { AlertCircle, CheckCircle2, Clock, FileWarning, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="propuesta" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3">
            El Problema Real de las Rendiciones
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ganar un proyecto es un logro. Rendirlo no debería convertirse en una pesadilla.
          </p>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Durante la ejecución se acumulan cientos de documentos. Si una organización espera al final del proyecto para revisar, se enfrenta a contratos vencidos, transferencias extraviadas y el riesgo inminente de reintegros de fondos.
          </p>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional Way (Pain) */}
          <div className="rounded-2xl bg-rose-950/20 border border-rose-900/40 p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-400">
                <FileWarning className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">El Enfoque Tradicional</h3>
                <p className="text-xs text-rose-300 font-medium">Revisión tardía, desorden y riesgo financiero</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <span><strong>Colapso al cierre del plazo:</strong> Se acumulan 18 meses de facturas, cartolas y boletas en carpetas dispersas dos semanas antes del informe final.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <span><strong>Documentación irrecuperable:</strong> Proveedores inubicables, informes de actividades que nadie redactó a tiempo y transferencias sin conciliar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <span><strong>Descuadres presupuestarios:</strong> Gastos imputados al ítem equivocado o gastos que exceden el tope permitido por las bases de CORFO/ANID/FIA.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✕</span>
                <span><strong>Reparos y multas del financiamiento:</strong> Observaciones masivas del ejecutivo financiero y riesgo de tener que devolver dinero con cargo a la empresa.</span>
              </li>
            </ul>
          </div>

          {/* VÉRITAS Way (Preventive & Managed) */}
          <div className="rounded-2xl bg-indigo-950/20 border border-indigo-500/30 p-8 relative overflow-hidden shadow-xl shadow-indigo-500/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">El Acompañamiento VÉRITAS</h3>
                <p className="text-xs text-indigo-300 font-medium">Gestión mensual, blindaje documental y preauditoría</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <span><strong>Cierres preventivos mensuales:</strong> Si en marzo falta un respaldo bancario, lo detectamos y solicitamos en marzo, no 12 meses después.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <span><strong>Cadena de custodia completa:</strong> Verificamos boleta + contrato + transferencia + retención tributaria + informe de actividades antes de imputar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <span><strong>Preauditoría antes de rendir:</strong> Generamos el informe de preauditoría que revela observaciones con anticipación para corregirlas de inmediato.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">✓</span>
                <span><strong>Gestión de subsanaciones:</strong> Si el organismo emite alguna observación, preparamos la carpeta oficial de respuesta y descargos técnicos.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lifecycle Flow */}
        <div id="metodologia" className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Ciclo Completo de Acompañamiento</span>
              <h3 className="text-xl font-bold text-white mt-1">Cómo gestionamos tu proyecto de punta a punta</h3>
            </div>
            <div className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              Cobertura continua durante los 12, 18, 24 o 36 meses de ejecución
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xs font-mono font-bold text-indigo-400 mb-2">01 / ADJUDICACIÓN</div>
              <h4 className="text-base font-bold text-white mb-2">Matriz de Control Inicial</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cargamos el convenio, presupuesto aprobado, carta Gantt, manual de rendición y bases del fondo (CORFO, ANID, FIA, etc.) para crear las reglas de validación.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xs font-mono font-bold text-sky-400 mb-2">02 / MENSUALIDAD</div>
              <h4 className="text-base font-bold text-white mb-2">Ingesta y Cruce Documental</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Recibimos facturas, boletas y comprobantes. La IA Multimodal extrae datos y el Grafo de Conocimiento verifica la coherencia entre emisor, monto e ítem presupuestario.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xs font-mono font-bold text-emerald-400 mb-2">03 / PREAUDITORÍA</div>
              <h4 className="text-base font-bold text-white mb-2">Detección de Observaciones</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Antes de subir a la plataforma oficial, ejecutamos una preauditoría integral. Identificamos documentos faltantes, duplicidades y descalces de dinero.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-xs font-mono font-bold text-purple-400 mb-2">04 / CIERRE Y RESPUESTA</div>
              <h4 className="text-base font-bold text-white mb-2">Expediente Blindado</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Entrega del expediente ordenado listo para aprobación del evaluador. Si el financiador formula dudas, preparamos la carpeta de subsanación documental.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
