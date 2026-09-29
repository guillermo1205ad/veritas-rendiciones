import React, { useState, useEffect } from 'react';
import { 
  Building2, Calendar, FileText, CheckCircle2, AlertTriangle, AlertCircle, 
  RotateCw, Download, ShieldCheck, TrendingUp, DollarSign, Layers, CheckSquare, XCircle, Search, RefreshCw
} from 'lucide-react';
import { Project, BudgetItem, Expense, PreAuditReport, PreAuditObservation, EarlyAlert } from '../types';
import { KnowledgeGraphVisualizer } from './KnowledgeGraphVisualizer';
import { 
  initialProject, initialBudgetItems, initialExpenses, 
  initialEarlyAlerts, initialPreAuditReport, initialObservations 
} from '../data/initialData';

export const PortalDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'presupuesto' | 'cruce' | 'grafo' | 'preauditoria'>('presupuesto');
  const [projectData, setProjectData] = useState<{
    project: Project | null;
    budget_items: BudgetItem[];
    early_alerts: EarlyAlert[];
  }>({
    project: initialProject,
    budget_items: initialBudgetItems,
    early_alerts: initialEarlyAlerts
  });
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [preAuditData, setPreAuditData] = useState<{
    report: PreAuditReport | null;
    observations: PreAuditObservation[];
  }>({
    report: initialPreAuditReport,
    observations: initialObservations
  });
  const [isRunningAudit, setIsRunningAudit] = useState(false);
  const [auditSuccessMsg, setAuditSuccessMsg] = useState<string | null>(null);

  // Fetch data from backend API if available
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error('API not available');
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          const mainProject = data[0];
          fetch(`/api/projects/${mainProject.id}`)
            .then((res) => res.json())
            .then((pDetails) => setProjectData(pDetails))
            .catch(() => {});

          fetch(`/api/projects/${mainProject.id}/expenses`)
            .then((res) => res.json())
            .then((expData) => setExpenses(expData))
            .catch(() => {});

          fetch(`/api/projects/${mainProject.id}/preaudit`)
            .then((res) => res.json())
            .then((auditData) => setPreAuditData(auditData))
            .catch(() => {});
        }
      })
      .catch(() => {
        // Retain initialData if on static host like GitHub Pages
      });
  }, []);

  const handleRunPreaudit = async () => {
    setIsRunningAudit(true);
    setAuditSuccessMsg(null);
    try {
      if (projectData.project) {
        await fetch(`/api/projects/${projectData.project.id}/run-preaudit`, {
          method: 'POST',
        }).catch(() => {});
      }
      setTimeout(() => {
        setAuditSuccessMsg('Preauditoría ejecutada con éxito. Grafo de relaciones actualizado.');
        setIsRunningAudit(false);
        setTimeout(() => setAuditSuccessMsg(null), 4000);
      }, 700);
    } catch {
      setIsRunningAudit(false);
    }
  };

  const project = projectData.project;

  return (
    <section id="portal-demo" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Simulador de Entorno de Control para Clientes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Así administramos y preauditamos tu proyecto
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Como cliente de nuestra asesoría, no tienes que lidiar con la complejidad técnica: nosotros cargamos, cruzamos y preauditamos todo, mientras tú mantienes visibilidad absoluta del estado financiero y documental.
          </p>
        </div>

        {/* Project Header Card */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold">
                  {project?.code || 'FIA-PYT-2025-1104'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  Fondo {project?.funding_agency || 'FIA'}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                  Mes {project?.current_execution_month || 8} de {project?.total_months || 18}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project?.title || 'Fortalecimiento Productivo y Bioprocesos para Agroindustria Sostenible'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Beneficiario: <strong className="text-slate-200">{project?.organization_name || 'Consorcio Tecnológico Austral SpA'}</strong> ({project?.organization_rut || '76.892.410-K'})
              </p>
            </div>

            {/* Health Score Pill */}
            <div className="flex items-center gap-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800 shrink-0">
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Estado Documental</div>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  {project?.document_health_score || '94.0'}%
                </div>
              </div>
              <div className="h-10 w-[1px] bg-slate-800"></div>
              <div className="text-xs text-slate-400 space-y-0.5 font-medium">
                <div><span className="text-white font-bold">184</span> gastos revisados</div>
                <div><span className="text-emerald-400 font-bold">171</span> completos</div>
                <div><span className="text-amber-400 font-bold">9</span> pendientes · <span className="text-rose-400 font-bold">4</span> observados</div>
              </div>
            </div>
          </div>

          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 text-center">
            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">Presupuesto Aprobado</div>
              <div className="text-lg sm:text-xl font-bold text-white font-mono mt-1">
                ${Number(project?.total_budget || 120000000).toLocaleString('es-CL')}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">Total Ejecutado</div>
              <div className="text-lg sm:text-xl font-bold text-indigo-400 font-mono mt-1">
                ${Number(project?.executed_budget || 76400000).toLocaleString('es-CL')}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">Rendido Oficial</div>
              <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono mt-1">
                ${Number(project?.reported_budget || 69800000).toLocaleString('es-CL')}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
              <div className="text-xs text-slate-400 font-medium">Pendiente de Rendir</div>
              <div className="text-lg sm:text-xl font-bold text-amber-400 font-mono mt-1">
                ${Number(project?.pending_to_report || 6600000).toLocaleString('es-CL')}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 col-span-2 sm:col-span-1">
              <div className="text-xs text-slate-400 font-medium">Presupuesto Disponible</div>
              <div className="text-lg sm:text-xl font-bold text-sky-400 font-mono mt-1">
                ${Number(project?.available_budget || 43600000).toLocaleString('es-CL')}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('presupuesto')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all shrink-0 flex items-center gap-2 ${
              activeTab === 'presupuesto'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Control Presupuestario & Alertas</span>
          </button>

          <button
            onClick={() => setActiveTab('cruce')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all shrink-0 flex items-center gap-2 ${
              activeTab === 'cruce'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Cruce Documental (Cadena de Respaldo)</span>
          </button>

          <button
            onClick={() => setActiveTab('grafo')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all shrink-0 flex items-center gap-2 ${
              activeTab === 'grafo'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Grafo de Conocimiento Interactivo</span>
          </button>

          <button
            onClick={() => setActiveTab('preauditoria')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all shrink-0 flex items-center gap-2 ${
              activeTab === 'preauditoria'
                ? 'border-indigo-500 text-indigo-400 bg-indigo-500/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Preauditoría Rendición N.º 8</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-rose-500/20 text-rose-300 font-bold">5 Obs</span>
          </button>
        </div>

        {/* Tab 1: Presupuesto & Alertas */}
        {activeTab === 'presupuesto' && (
          <div className="space-y-8 animate-fade-in">
            {/* Early Alerts Box */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <h4 className="text-base font-bold text-white">Alertas Tempranas Generadas por el Motor Preventivo</h4>
              </div>
              <div className="space-y-2.5">
                {projectData.early_alerts.map((alert, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-lg border text-xs sm:text-sm flex items-start gap-3 ${
                      alert.severity === 'danger'
                        ? 'bg-rose-950/30 border-rose-900/50 text-rose-200'
                        : 'bg-amber-950/30 border-amber-900/50 text-amber-200'
                    }`}
                  >
                    <span className="shrink-0 font-bold font-mono">
                      {alert.severity === 'danger' ? '⛔ ALERTA CRÍTICA:' : '⚠️ PREVENTIVA:'}
                    </span>
                    <span className="leading-relaxed">{alert.message}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Breakdown Table */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
              <div className="p-5 border-b border-slate-800 flex justify-between items-center">
                <div>
                  <h4 className="text-base font-bold text-white">Ejecución Presupuestaria por Ítem Aprobado</h4>
                  <p className="text-xs text-slate-400">Control estricto conforme a la matriz presupuestaria oficial del convenio</p>
                </div>
                <span className="text-xs font-mono text-indigo-400">Base: Subtotal $45.000.000 (Etapa 1)</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-xs uppercase font-mono text-slate-400 border-b border-slate-800">
                    <tr>
                      <th className="p-4">Ítem Presupuestario</th>
                      <th className="p-4">Presupuesto</th>
                      <th className="p-4">Ejecutado</th>
                      <th className="p-4">Disponible</th>
                      <th className="p-4">Ejecución</th>
                      <th className="p-4">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80 font-mono text-xs sm:text-sm">
                    {projectData.budget_items.map((item) => {
                      const pct = Number(item.execution_percentage);
                      const isHigh = pct >= 80;
                      return (
                        <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="p-4 font-sans font-semibold text-white">
                            {item.name}
                            <span className="block text-xs font-mono text-slate-400 font-normal">Código: {item.item_code}</span>
                          </td>
                          <td className="p-4 text-slate-200">
                            ${Number(item.approved_amount).toLocaleString('es-CL')}
                          </td>
                          <td className="p-4 text-indigo-300 font-semibold">
                            ${Number(item.executed_amount).toLocaleString('es-CL')}
                          </td>
                          <td className="p-4 text-emerald-400 font-semibold">
                            ${Number(item.available_amount).toLocaleString('es-CL')}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 bg-slate-800 rounded-full h-2 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    isHigh ? 'bg-amber-400' : 'bg-indigo-500'
                                  }`}
                                  style={{ width: `${Math.min(pct, 100)}%` }}
                                ></div>
                              </div>
                              <span className={isHigh ? 'text-amber-400 font-bold' : 'text-slate-300'}>
                                {pct.toFixed(1)}%
                              </span>
                            </div>
                          </td>
                          <td className="p-4 font-sans">
                            {isHigh ? (
                              <span className="px-2 py-0.5 rounded-full text-xs bg-amber-500/10 border border-amber-500/20 text-amber-300 font-medium">
                                En tope de consumo
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium">
                                Holgura normal
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                    {/* Total Row */}
                    <tr className="bg-slate-950 font-bold text-white border-t-2 border-slate-700">
                      <td className="p-4 font-sans">Total Etapa 1</td>
                      <td className="p-4">$45.000.000</td>
                      <td className="p-4 text-indigo-400">$28.700.000</td>
                      <td className="p-4 text-emerald-400">$16.300.000</td>
                      <td className="p-4 text-indigo-300 font-mono">63.8%</td>
                      <td className="p-4 font-sans font-normal text-xs text-slate-400">Control Global</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Cruce Documental */}
        {activeTab === 'cruce' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs sm:text-sm text-indigo-200 flex items-center justify-between">
              <span>
                <strong>Cruce Documental de Respaldo:</strong> Cada gasto se audita contra 7 variables obligatorias (Documento tributario, Pago bancario, Contrato, Informe de actividades, Respaldo tributario F29, Presupuesto y Fecha en período).
              </span>
              <span className="shrink-0 font-mono font-bold text-indigo-400">Total Gastos: 5 casos</span>
            </div>

            <div className="space-y-4">
              {expenses.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-xl bg-slate-900 border border-slate-800 p-5 hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400 font-bold">{exp.expense_number}</span>
                        <h4 className="text-base font-bold text-white">{exp.concept}</h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Beneficiario: <span className="text-slate-200">{exp.beneficiary_name}</span> ({exp.beneficiary_rut}) · Ítem: <span className="text-indigo-300">{exp.budget_item_name}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-base font-bold font-mono text-white">
                          ${Number(exp.gross_amount).toLocaleString('es-CL')}
                        </div>
                        <div className="text-[11px] text-slate-400">{exp.execution_period}</div>
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          exp.status === 'aprobado'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : exp.status === 'pendiente_respaldo'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        {exp.status === 'aprobado' && '✓ Aprobado para Rendir'}
                        {exp.status === 'pendiente_respaldo' && '⏳ Pendiente Respaldo'}
                        {exp.status === 'con_observacion' && '⚠ Con Observación'}
                        {exp.status === 'critico' && '⛔ Crítico / Duplicado'}
                      </span>
                    </div>
                  </div>

                  {/* Checklist of Backing Chain */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-3 text-xs">
                    {/* Tax Doc */}
                    <div className={`p-2 rounded-lg border ${exp.has_tax_doc ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-rose-950/20 border-rose-900/40 text-rose-300'}`}>
                      <div className="font-semibold">Doc. Tributario</div>
                      <div className="text-[11px] mt-0.5">{exp.has_tax_doc ? '✓ Encontrado' : '✗ Faltante'}</div>
                    </div>

                    {/* Payment Proof */}
                    <div className={`p-2 rounded-lg border ${exp.has_payment_proof ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-rose-950/20 border-rose-900/40 text-rose-300'}`}>
                      <div className="font-semibold">Pago TEF</div>
                      <div className="text-[11px] mt-0.5">{exp.has_payment_proof ? '✓ Coincide' : '✗ Sin TEF'}</div>
                    </div>

                    {/* Contract */}
                    <div className={`p-2 rounded-lg border ${exp.has_contract ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-400'}`}>
                      <div className="font-semibold">Contrato</div>
                      <div className="text-[11px] mt-0.5">{exp.has_contract ? '✓ Vigente' : 'No Aplica / N/A'}</div>
                    </div>

                    {/* Activity Report */}
                    <div className={`p-2 rounded-lg border ${exp.has_activity_report ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-rose-950/30 border-rose-800 text-rose-400 font-bold animate-pulse'}`}>
                      <div className="font-semibold">Informe Actividad</div>
                      <div className="text-[11px] mt-0.5">{exp.has_activity_report ? '✓ Entregado' : '✗ FALTANTE'}</div>
                    </div>

                    {/* Tax Respaldo */}
                    <div className={`p-2 rounded-lg border ${exp.has_tax_form ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-amber-950/20 border-amber-900/40 text-amber-300'}`}>
                      <div className="font-semibold">F29 / Impuestos</div>
                      <div className="text-[11px] mt-0.5">{exp.has_tax_form ? '✓ Conforme' : 'Pendiente F29'}</div>
                    </div>

                    {/* Budget Approval */}
                    <div className={`p-2 rounded-lg border ${exp.has_budget_approval ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-rose-950/20 border-rose-900/40 text-rose-300'}`}>
                      <div className="font-semibold">Presupuesto</div>
                      <div className="text-[11px] mt-0.5">{exp.has_budget_approval ? '✓ Con Saldo' : '✗ Sin Saldo'}</div>
                    </div>

                    {/* Period Valid */}
                    <div className={`p-2 rounded-lg border ${exp.is_period_valid ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' : 'bg-rose-950/20 border-rose-900/40 text-rose-300'}`}>
                      <div className="font-semibold">Fecha en Convenio</div>
                      <div className="text-[11px] mt-0.5">{exp.is_period_valid ? '✓ En Rango' : '✗ Fuera Plazo'}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Grafo de Conocimiento */}
        {activeTab === 'grafo' && (
          <div className="animate-fade-in">
            <KnowledgeGraphVisualizer />
          </div>
        )}

        {/* Tab 4: Preauditoría Rendición N.º 8 */}
        {activeTab === 'preauditoria' && (
          <div className="space-y-8 animate-fade-in">
            {/* Preaudit KPI Card */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">
                    Informe Preventivo
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    PREAUDITORÍA RENDICIÓN N.º {preAuditData.report?.rendition_number || 8}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Auditoría realizada antes de enviar la carpeta oficial a {project?.funding_agency || 'FIA'}. Detectamos observaciones y descalces de dinero de forma preventiva.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleRunPreaudit}
                    disabled={isRunningAudit}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRunningAudit ? 'animate-spin' : ''}`} />
                    <span>{isRunningAudit ? 'Re-analizando Grafo...' : 'Ejecutar Preauditoría en Vivo'}</span>
                  </button>

                  <button
                    onClick={() => alert('Generando expediente oficial preauditado en formato ZIP comprimido con índice foliado...')}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Descargar Expediente</span>
                  </button>
                </div>
              </div>

              {auditSuccessMsg && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{auditSuccessMsg}</span>
                </div>
              )}

              {/* Counts Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 text-center">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Docs Revisados</div>
                  <div className="text-xl font-bold text-white font-mono mt-1">
                    {preAuditData.report?.total_docs_reviewed || 74}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-900/50">
                  <div className="text-xs text-emerald-300 font-medium">Respaldados OK</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-1">
                    {preAuditData.report?.expenses_backed || 67}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-900/50">
                  <div className="text-xs text-amber-300 font-medium">Con Observaciones</div>
                  <div className="text-xl font-bold text-amber-400 font-mono mt-1">
                    {preAuditData.report?.expenses_observed || 5}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-900/50">
                  <div className="text-xs text-rose-300 font-medium">Gastos Críticos</div>
                  <div className="text-xl font-bold text-rose-400 font-mono mt-1">
                    {preAuditData.report?.expenses_critical || 2}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Docs Faltantes</div>
                  <div className="text-xl font-bold text-amber-400 font-mono mt-1">
                    {preAuditData.report?.missing_docs_count || 4}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium">Posibles Duplicados</div>
                  <div className="text-xl font-bold text-rose-400 font-mono mt-1">
                    {preAuditData.report?.potential_duplicates_count || 1}
                  </div>
                </div>
              </div>
            </div>

            {/* List of 5 Observations to solve */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6">
              <h4 className="text-base font-bold text-white mb-1">
                Plan de Subsanación: Observaciones Detectadas por la Preauditoría
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                Estas 5 inconsistencias fueron detectadas antes de entregar la rendición oficial. Nuestro equipo consultor entrega las instrucciones exactas para subsanarlas con la contraparte.
              </p>

              <div className="space-y-4">
                {preAuditData.observations.map((obs) => (
                  <div
                    key={obs.id}
                    className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          OBS #{obs.observation_number}
                        </span>
                        <h5 className="text-sm font-bold text-white">{obs.title}</h5>
                      </div>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-semibold self-start sm:self-auto ${
                          obs.severity === 'critica'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : obs.severity === 'alta'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        }`}
                      >
                        Severidad {obs.severity.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {obs.detail}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="text-slate-400">
                        <strong className="text-slate-300">Norma Referencial:</strong> {obs.funding_rule_reference}
                      </div>
                      <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Acción recomendada: {obs.recommended_action}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
