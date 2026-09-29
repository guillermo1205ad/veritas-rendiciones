import React, { useState } from 'react';
import { Network, AlertCircle, CheckCircle2, FileText, DollarSign, Scale, ArrowRight, Info, ShieldCheck } from 'lucide-react';

interface GraphNodeData {
  id: string;
  label: string;
  type: 'gasto' | 'documento' | 'presupuesto' | 'regla';
  status: 'ok' | 'missing' | 'warning' | 'normal';
  x: number;
  y: number;
  details: {
    folio?: string;
    monto?: string;
    emisor?: string;
    fecha?: string;
    descripcion: string;
    regla?: string;
  };
}

export const KnowledgeGraphVisualizer: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'case1' | 'case2'>('case1');
  const [selectedNode, setSelectedNode] = useState<GraphNodeData | null>(null);

  // Case 1: Honorarios Juan Pérez (Missing Activity Report)
  const case1Nodes: GraphNodeData[] = [
    {
      id: 'gasto_jp',
      label: 'Gasto: Honorarios Juan Pérez',
      type: 'gasto',
      status: 'warning',
      x: 320,
      y: 200,
      details: {
        monto: '$500.000',
        emisor: 'Juan Pérez Silva (15.420.913-4)',
        fecha: 'Agosto 2026',
        descripcion: 'Servicios de asesoría biotecnológica y muestreo de suelos. Marcado PENDIENTE por falta de entregable.'
      }
    },
    {
      id: 'doc_bh',
      label: 'Boleta Honorarios #849',
      type: 'documento',
      status: 'ok',
      x: 120,
      y: 90,
      details: {
        folio: 'BH-849',
        monto: '$500.000 (Bruto)',
        emisor: 'Juan Pérez Silva',
        fecha: '2026-08-28',
        descripcion: 'Boleta electrónica emitida correctamente a través del SII.'
      }
    },
    {
      id: 'doc_tef',
      label: 'Transferencia TEF #992014',
      type: 'documento',
      status: 'ok',
      x: 120,
      y: 220,
      details: {
        folio: 'TRX-992014',
        monto: '$431.250 (Líquido)',
        emisor: 'Banco de Chile -> Banco Santander',
        fecha: '2026-08-30',
        descripcion: 'Monto pagado coincide exactamente con el líquido tras la retención del 13.75%.'
      }
    },
    {
      id: 'doc_contrato',
      label: 'Contrato Vigente 2025-2026',
      type: 'documento',
      status: 'ok',
      x: 120,
      y: 330,
      details: {
        folio: 'CONV-2025-08',
        monto: '$500.000 mensual',
        emisor: 'Consorcio Tecnológico',
        fecha: 'Vigente',
        descripcion: 'Contrato de honorarios firmado que estipula entregable mensual obligatorio.'
      }
    },
    {
      id: 'doc_informe',
      label: 'Informe Actividades Agosto',
      type: 'documento',
      status: 'missing',
      x: 520,
      y: 90,
      details: {
        folio: 'NO_ENCONTRADO',
        descripcion: 'INFORME DE ACTIVIDADES FALTANTE: Las bases de FIA exigen que toda boleta de honorarios esté respaldada por un informe técnico mensual firmado.',
        regla: 'Bases Especiales FIA Art. 14 / Numeral 3.2'
      }
    },
    {
      id: 'item_rrhh',
      label: 'Ítem RRHH (Saldo $5.5M)',
      type: 'presupuesto',
      status: 'ok',
      x: 520,
      y: 220,
      details: {
        monto: 'Aprobado: $20M | Ejecutado: $14.5M | Disponible: $5.5M',
        descripcion: 'El presupuesto asignado a Recursos Humanos cuenta con holgura para este desembolso.'
      }
    },
    {
      id: 'regla_fia',
      label: 'Regla FIA: Admisibilidad',
      type: 'regla',
      status: 'warning',
      x: 520,
      y: 330,
      details: {
        regla: 'Bases Administrativas Concurso 2025',
        descripcion: 'La falta de informe técnico de respaldo motiva el rechazo total del gasto por el evaluador institucional.'
      }
    }
  ];

  // Case 2: Factura Proveedor XYZ (Fully backed)
  const case2Nodes: GraphNodeData[] = [
    {
      id: 'gasto_xyz',
      label: 'Gasto: Factura 1825 (Equipos)',
      type: 'gasto',
      status: 'ok',
      x: 320,
      y: 200,
      details: {
        monto: '$1.190.000',
        emisor: 'Proveedor XYZ Equipos SpA (77.104.992-3)',
        fecha: 'Agosto 2026',
        descripcion: 'Adquisición de balanza analítica de laboratorio. Cadena de custodia 100% verificada.'
      }
    },
    {
      id: 'doc_dte',
      label: 'Factura Electrónica #1825',
      type: 'documento',
      status: 'ok',
      x: 120,
      y: 110,
      details: {
        folio: '1825',
        monto: '$1.190.000 (IVA Incluido)',
        emisor: 'Proveedor XYZ Equipos SpA',
        fecha: '2026-08-15',
        descripcion: 'DTE tipo 33 validado ante el SII en estado vigente.'
      }
    },
    {
      id: 'doc_pago',
      label: 'Comprobante Bancario TEF',
      type: 'documento',
      status: 'ok',
      x: 120,
      y: 290,
      details: {
        folio: 'TRX-881923',
        monto: '$1.190.000',
        emisor: 'Banco Estado -> Banco Santander',
        fecha: '2026-08-16',
        descripcion: 'Pago bancario por el monto íntegro de la factura comercial.'
      }
    },
    {
      id: 'doc_cotiz',
      label: '3 Cotizaciones & Comparativo',
      type: 'documento',
      status: 'ok',
      x: 520,
      y: 110,
      details: {
        folio: 'COT-2026-EQUIP',
        descripcion: 'Cumple exigencia de 3 cotizaciones previas para adquisiciones sobre 100 UF.'
      }
    },
    {
      id: 'item_equip',
      label: 'Ítem Equipamiento ($9M Disp.)',
      type: 'presupuesto',
      status: 'ok',
      x: 520,
      y: 290,
      details: {
        monto: 'Aprobado: $15M | Ejecutado: $6M | Disponible: $9M',
        descripcion: 'Saldo disponible suficiente. Imputación presupuestaria correcta.'
      }
    }
  ];

  const currentNodes = selectedCase === 'case1' ? case1Nodes : case2Nodes;
  const activeNode = selectedNode || currentNodes[0];

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
      {/* Visualizer Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Network className="w-4 h-4" />
            <span>Motor de Grafos de Conocimiento en Acción</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">
            Visualizador de Trazabilidad y Cadena de Custodia
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            El sistema cruza cada documento con su contrato, pago, presupuesto y exigencia legal de la institución.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => {
              setSelectedCase('case1');
              setSelectedNode(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCase === 'case1'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Caso 1: Juan Pérez (Faltante Detectado)
          </button>
          <button
            onClick={() => {
              setSelectedCase('case2');
              setSelectedNode(null);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCase === 'case2'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Caso 2: Factura 1825 (100% Blindado)
          </button>
        </div>
      </div>

      {/* Main Interactive Grid: SVG Canvas + Inspector Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Interactive SVG Canvas */}
        <div className="lg:col-span-8 bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 relative overflow-hidden min-h-[380px] flex items-center justify-center">
          <svg className="w-full h-[360px]" viewBox="0 0 640 400">
            {/* Edges */}
            <defs>
              <linearGradient id="edgeGradOk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGradBroken" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e11d48" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Connecting lines from central node to surrounding nodes */}
            {currentNodes.slice(1).map((node) => {
              const centerNode = currentNodes[0];
              const isBroken = node.status === 'missing' || node.status === 'warning';
              return (
                <g key={`edge-${node.id}`}>
                  <line
                    x1={centerNode.x}
                    y1={centerNode.y}
                    x2={node.x}
                    y2={node.y}
                    stroke={isBroken ? '#f43f5e' : '#4f46e5'}
                    strokeWidth={isBroken ? 2.5 : 2}
                    strokeDasharray={isBroken ? '5,5' : 'none'}
                    className={isBroken ? 'animate-pulse' : ''}
                  />
                  {/* Label on line */}
                  <text
                    x={(centerNode.x + node.x) / 2}
                    y={(centerNode.y + node.y) / 2 - 6}
                    fill={isBroken ? '#f43f5e' : '#94a3b8'}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="middle"
                    className="select-none font-semibold"
                  >
                    {isBroken ? 'ENLACE ROTO' : 'CONCILIADO'}
                  </text>
                </g>
              );
            })}

            {/* Render Nodes */}
            {currentNodes.map((node) => {
              const isSelected = activeNode.id === node.id;
              let fillBg = '#1e1b4b'; // indigo
              let strokeCol = '#6366f1';
              let textCol = '#ffffff';

              if (node.status === 'ok') {
                fillBg = '#064e3b';
                strokeCol = '#10b981';
              } else if (node.status === 'missing') {
                fillBg = '#4c0519';
                strokeCol = '#f43f5e';
              } else if (node.status === 'warning') {
                fillBg = '#451a03';
                strokeCol = '#f59e0b';
              }

              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className="cursor-pointer transition-transform hover:scale-105"
                  transform={`translate(${node.x}, ${node.y})`}
                >
                  {/* Node Outer Glow if selected */}
                  {isSelected && (
                    <circle r="36" fill={strokeCol} opacity="0.25" className="animate-ping" />
                  )}
                  {/* Node Circle */}
                  <circle
                    r="26"
                    fill={fillBg}
                    stroke={strokeCol}
                    strokeWidth={isSelected ? 3 : 2}
                  />
                  {/* Icon Representation */}
                  <text
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={textCol}
                    fontSize="11"
                    fontFamily="monospace"
                    fontWeight="bold"
                    className="select-none"
                  >
                    {node.type === 'gasto' && '$'}
                    {node.type === 'documento' && 'DOC'}
                    {node.type === 'presupuesto' && 'PRE'}
                    {node.type === 'regla' && 'LEX'}
                  </text>
                  {/* Node Label underneath */}
                  <text
                    y="38"
                    textAnchor="middle"
                    fill="#e2e8f0"
                    fontSize="11"
                    fontWeight="600"
                    className="select-none pointer-events-none drop-shadow"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Canvas Helper Pill */}
          <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-400 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-indigo-400" />
            <span>Haz clic en cualquier nodo para inspeccionar sus metadatos y estado legal</span>
          </div>
        </div>

        {/* Inspector Panel */}
        <div className="lg:col-span-4 rounded-xl bg-slate-950 border border-slate-800 p-5">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800 mb-4">
            <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
              Inspector de Nodo
            </span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                activeNode.status === 'ok'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : activeNode.status === 'missing'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}
            >
              {activeNode.status === 'ok' && '✓ CONFORME'}
              {activeNode.status === 'missing' && '✗ FALTANTE CRÍTICO'}
              {activeNode.status === 'warning' && '⚠ OBSERVACIÓN / PENDIENTE'}
            </span>
          </div>

          <h4 className="text-base font-bold text-white mb-2">
            {activeNode.label}
          </h4>

          <div className="space-y-3 text-xs">
            {activeNode.details.monto && (
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-400">Monto Involucrado:</span>
                <span className="font-mono font-semibold text-white">{activeNode.details.monto}</span>
              </div>
            )}
            {activeNode.details.folio && (
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-400">Folio / Referencia:</span>
                <span className="font-mono text-indigo-300">{activeNode.details.folio}</span>
              </div>
            )}
            {activeNode.details.emisor && (
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-400">Contraparte / Emisor:</span>
                <span className="text-slate-200">{activeNode.details.emisor}</span>
              </div>
            )}
            {activeNode.details.fecha && (
              <div className="flex justify-between py-1.5 border-b border-slate-900">
                <span className="text-slate-400">Fecha / Período:</span>
                <span className="text-slate-200">{activeNode.details.fecha}</span>
              </div>
            )}
            {activeNode.details.regla && (
              <div className="p-2 rounded bg-amber-950/30 border border-amber-900/40 text-amber-300">
                <span className="font-bold">Regla Legal:</span> {activeNode.details.regla}
              </div>
            )}

            <div className="pt-2">
              <span className="text-slate-400 block mb-1 font-semibold">Diagnóstico del Cruce:</span>
              <p className="text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 leading-relaxed">
                {activeNode.details.descripcion}
              </p>
            </div>
          </div>

          {/* Action Callout */}
          <div className="mt-5 p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-300 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-indigo-400 mt-0.5" />
            <span>
              <strong>Acción Preventiva VÉRITAS:</strong> El consultor solicita y valida el informe de actividades con el proveedor antes de subir la rendición.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
