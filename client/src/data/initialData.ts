import { Project, BudgetItem, Expense, PreAuditReport, PreAuditObservation, EarlyAlert } from '../types';

export const initialProject: Project = {
  id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
  organization_id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
  code: 'FIA-PYT-2025-1104',
  title: 'Fortalecimiento Productivo y Bioprocesos para Agroindustria Sostenible',
  funding_agency: 'FIA',
  program_name: 'Proyectos de Innovación de Interés Regional',
  total_budget: 120000000,
  executed_budget: 76400000,
  reported_budget: 69800000,
  pending_to_report: 6600000,
  available_budget: 43600000,
  start_date: '2025-03-01',
  end_date: '2026-08-31',
  current_execution_month: 8,
  total_months: 18,
  document_health_score: 94.0,
  status: 'en_preauditoria',
  organization_name: 'Consorcio Tecnológico & Innovación Austral SpA',
  organization_rut: '76.892.410-K',
  organization_type: 'empresa'
};

export const initialBudgetItems: BudgetItem[] = [
  {
    id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    item_code: 'RRHH',
    name: 'Recursos Humanos',
    approved_amount: 20000000,
    executed_amount: 14500000,
    available_amount: 5500000,
    execution_percentage: 72.5
  },
  {
    id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    item_code: 'OPERACION',
    name: 'Operación',
    approved_amount: 10000000,
    executed_amount: 8200000,
    available_amount: 1800000,
    execution_percentage: 82.0
  },
  {
    id: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    item_code: 'EQUIPAMIENTO',
    name: 'Equipamiento e Inversión',
    approved_amount: 15000000,
    executed_amount: 6000000,
    available_amount: 9000000,
    execution_percentage: 40.0
  }
];

export const initialExpenses: Expense[] = [
  {
    id: 'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    budget_item_id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    budget_item_name: 'Recursos Humanos',
    budget_item_code: 'RRHH',
    expense_number: 'G-2026-08-01',
    concept: 'Honorarios Juan Pérez — Agosto 2026',
    beneficiary_name: 'Juan Pérez Silva',
    beneficiary_rut: '15.420.913-4',
    gross_amount: 500000,
    execution_period: 'Agosto 2026',
    expense_date: '2026-08-28',
    status: 'pendiente_respaldo',
    backing_score: 80.0,
    has_tax_doc: true,
    has_payment_proof: true,
    has_contract: true,
    has_activity_report: false, // FALTANTE SEGÚN CONTEXTO
    has_tax_form: true,
    has_budget_approval: true,
    is_period_valid: true,
    is_duplicate: false
  },
  {
    id: 'e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    budget_item_id: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
    budget_item_name: 'Equipamiento e Inversión',
    budget_item_code: 'EQUIPAMIENTO',
    expense_number: 'G-2026-08-02',
    concept: 'Factura N.º 1825 — Balanza analítica y Centrífuga',
    beneficiary_name: 'Proveedor XYZ Equipos SpA',
    beneficiary_rut: '77.104.992-3',
    gross_amount: 1190000,
    execution_period: 'Agosto 2026',
    expense_date: '2026-08-15',
    status: 'aprobado',
    backing_score: 100.0,
    has_tax_doc: true,
    has_payment_proof: true,
    has_contract: true,
    has_activity_report: true,
    has_tax_form: true,
    has_budget_approval: true,
    is_period_valid: true,
    is_duplicate: false
  },
  {
    id: 'f2a3b4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    budget_item_id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    budget_item_name: 'Recursos Humanos',
    budget_item_code: 'RRHH',
    expense_number: 'G-2026-08-03',
    concept: 'Boleta de honorarios N.º 52 — Asistente de Campo',
    beneficiary_name: 'Camila Soto Morales',
    beneficiary_rut: '18.902.114-1',
    gross_amount: 350000,
    execution_period: 'Agosto 2026',
    expense_date: '2026-08-25',
    status: 'con_observacion',
    backing_score: 60.0,
    has_tax_doc: true,
    has_payment_proof: true,
    has_contract: true,
    has_activity_report: true,
    has_tax_form: false,
    has_budget_approval: true,
    is_period_valid: true,
    is_duplicate: false
  },
  {
    id: 'a3b4c5d6-e7f8-9a0b-1c2d-3e4f5a6b7c8d',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    budget_item_id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    budget_item_name: 'Operación',
    budget_item_code: 'OPERACION',
    expense_number: 'G-2026-08-04',
    concept: 'Gasto en insumos de laboratorio e impresión técnica',
    beneficiary_name: 'Servicios Gráficos e Insumos Ltda.',
    beneficiary_rut: '76.120.301-2',
    gross_amount: 245000,
    execution_period: 'Agosto 2026',
    expense_date: '2026-08-10',
    status: 'con_observacion',
    backing_score: 50.0,
    has_tax_doc: true,
    has_payment_proof: true,
    has_contract: false,
    has_activity_report: false,
    has_tax_form: false,
    has_budget_approval: false,
    is_period_valid: true,
    is_duplicate: false
  },
  {
    id: 'b4c5d6e7-f8a9-0b1c-2d3e-4f5a6b7c8d9e',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    budget_item_id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    budget_item_name: 'Operación',
    budget_item_code: 'OPERACION',
    expense_number: 'G-2026-08-05',
    concept: 'Factura N.º 4091 — Reactivos y Medios de Cultivo',
    beneficiary_name: 'Química Central S.A.',
    beneficiary_rut: '96.551.020-8',
    gross_amount: 410000,
    execution_period: 'Agosto 2026',
    expense_date: '2026-08-05',
    status: 'critico',
    backing_score: 40.0,
    has_tax_doc: true,
    has_payment_proof: false,
    has_contract: false,
    has_activity_report: false,
    has_tax_form: false,
    has_budget_approval: true,
    is_period_valid: true,
    is_duplicate: true
  }
];

export const initialEarlyAlerts: EarlyAlert[] = [
  {
    id: 'alert-1',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    alert_type: 'presupuesto_limite',
    severity: 'warning',
    message: 'El ítem Operación alcanzó el 82.0% de ejecución. Al ritmo actual alcanzará el tope en 45 días.',
    is_resolved: false,
    created_at: new Date().toISOString()
  },
  {
    id: 'alert-2',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    alert_type: 'documento_faltante',
    severity: 'danger',
    message: 'Honorarios Juan Pérez ($500.000): Marcado PENDIENTE por falta de Informe de Actividades.',
    is_resolved: false,
    created_at: new Date().toISOString()
  },
  {
    id: 'alert-3',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    alert_type: 'duplicidad',
    severity: 'danger',
    message: 'Se detectó un documento (Folio 4091) con el mismo folio utilizado anteriormente en la Rendición N.º 6.',
    is_resolved: false,
    created_at: new Date().toISOString()
  },
  {
    id: 'alert-4',
    project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    alert_type: 'monto_discrepante',
    severity: 'warning',
    message: 'El monto del comprobante de transferencia no coincide con el documento tributario en Boleta N.º 52.',
    is_resolved: false,
    created_at: new Date().toISOString()
  }
];

export const initialPreAuditReport: PreAuditReport = {
  id: 'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
  project_id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
  rendition_number: 8,
  audit_date: '2026-08-31',
  total_docs_reviewed: 74,
  expenses_backed: 67,
  expenses_observed: 5,
  expenses_critical: 2,
  missing_docs_count: 4,
  potential_duplicates_count: 1,
  overall_status: 'requiere_accion_inmediata',
  notes: 'Preauditoría preventiva ejecutada con motor FIA-2026 y validación de grafo de relaciones.'
};

export const initialObservations: PreAuditObservation[] = [
  {
    id: 'obs-1',
    pre_audit_report_id: 'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    observation_number: 1,
    severity: 'alta',
    title: 'Falta informe de actividades correspondiente al período agosto 2026',
    detail: 'Honorarios de Juan Pérez ($500.000). Se encontró boleta, contrato y transferencia, pero no el informe de actividades exigido por el convenio.',
    funding_rule_reference: 'Bases Especiales FIA Art. 14 / Manual de Rendición Numeral 3.2',
    recommended_action: 'Solicitar al prestador la entrega inmediata del informe de actividades mensual firmado antes de incluir el gasto en la rendición.',
    status: 'pendiente'
  },
  {
    id: 'obs-2',
    pre_audit_report_id: 'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    observation_number: 2,
    severity: 'alta',
    title: 'Boleta de honorarios N.º 52 presenta una diferencia entre monto documentado y monto pagado',
    detail: 'La boleta indica un monto líquido de $301.875, sin embargo el comprobante de transferencia bancaria registra un pago de $295.000 (Diferencia de $6.875).',
    funding_rule_reference: 'Criterio General de Rendición CGR / Manual Financiero',
    recommended_action: 'Revisar si existió descuento o comisión no declarada, o emitir transferencia de ajuste complementaria.',
    status: 'pendiente'
  },
  {
    id: 'obs-3',
    pre_audit_report_id: 'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    observation_number: 3,
    severity: 'media',
    title: 'Falta comprobante de pago previsional/F29 según exigencia de retención',
    detail: 'Para el prestador independiente, se requiere adjuntar el Formulario 29 del mes correspondiente para acreditar el pago de la retención del 13.75%.',
    funding_rule_reference: 'Ley de Rentas / Bases FIA Respaldo Tributario',
    recommended_action: 'Adjuntar certificado de declaración y pago F29 del SII correspondiente al período tributario.',
    status: 'en_proceso'
  },
  {
    id: 'obs-4',
    pre_audit_report_id: 'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    observation_number: 4,
    severity: 'media',
    title: 'Revisar imputación presupuestaria de gasto por $245.000',
    detail: 'El gasto fue imputado al ítem "Operación", pero el detalle de la factura incluye servicios de diseño que corresponden contractualmente al ítem "Subcontratos/Servicios".',
    funding_rule_reference: 'Matriz Presupuestaria Aprobada Anexo 2',
    recommended_action: 'Reasignar el asiento al ítem presupuestario correcto o solicitar reitemización antes de presentar.',
    status: 'pendiente'
  },
  {
    id: 'obs-5',
    pre_audit_report_id: 'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    observation_number: 5,
    severity: 'critica',
    title: 'Documento potencialmente duplicado respecto de una rendición anterior',
    detail: 'La Factura N.º 4091 de Química Central S.A. posee el mismo folio, RUT y monto que un gasto rendido parcialmente en la Rendición N.º 6 (Julio 2026).',
    funding_rule_reference: 'Prohibición Expresa de Doble Imputación - Bases Generales',
    recommended_action: 'Excluir el gasto inmediatamente o presentar la nota de crédito o aclaración formal de saldo no rendido previamente.',
    status: 'pendiente'
  }
];
