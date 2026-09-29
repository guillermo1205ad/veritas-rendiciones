export interface Project {
  id: string;
  organization_id: string;
  code: string;
  title: string;
  funding_agency: string;
  program_name: string;
  total_budget: string | number;
  executed_budget: string | number;
  reported_budget: string | number;
  pending_to_report: string | number;
  available_budget: string | number;
  start_date: string;
  end_date: string;
  current_execution_month: number;
  total_months: number;
  document_health_score: string | number;
  status: string;
  organization_name?: string;
  organization_rut?: string;
  organization_type?: string;
}

export interface BudgetItem {
  id: string;
  project_id: string;
  item_code: string;
  name: string;
  approved_amount: string | number;
  executed_amount: string | number;
  available_amount: string | number;
  execution_percentage: string | number;
}

export interface Expense {
  id: string;
  project_id: string;
  budget_item_id: string;
  budget_item_name?: string;
  budget_item_code?: string;
  expense_number: string;
  concept: string;
  beneficiary_name: string;
  beneficiary_rut: string;
  gross_amount: string | number;
  execution_period: string;
  expense_date: string;
  status: 'aprobado' | 'pendiente_respaldo' | 'con_observacion' | 'critico';
  backing_score: string | number;
  has_tax_doc: boolean;
  has_payment_proof: boolean;
  has_contract: boolean;
  has_activity_report: boolean;
  has_tax_form: boolean;
  has_budget_approval: boolean;
  is_period_valid: boolean;
  is_duplicate: boolean;
}

export interface PreAuditReport {
  id: string;
  project_id: string;
  rendition_number: number;
  audit_date: string;
  total_docs_reviewed: number;
  expenses_backed: number;
  expenses_observed: number;
  expenses_critical: number;
  missing_docs_count: number;
  potential_duplicates_count: number;
  overall_status: string;
  notes: string;
}

export interface PreAuditObservation {
  id: string;
  pre_audit_report_id: string;
  expense_id?: string;
  observation_number: number;
  severity: 'critica' | 'alta' | 'media' | 'baja';
  title: string;
  detail: string;
  funding_rule_reference: string;
  recommended_action: string;
  status: 'pendiente' | 'en_proceso' | 'resuelta';
  expense_concept?: string;
  beneficiary_name?: string;
  expense_amount?: string | number;
}

export interface GraphNode {
  id: string;
  node_id: string;
  node_type: 'Gasto' | 'Documento' | 'Proveedor' | 'ItemPresupuestario' | 'ReglaFinanciador';
  label: string;
  status: 'ok' | 'warning' | 'critical' | 'missing' | 'normal';
  properties: Record<string, any>;
}

export interface GraphEdge {
  id: string;
  source_node_id: string;
  target_node_id: string;
  relationship: string;
  status: 'valid' | 'broken' | 'discrepancy';
  description?: string;
}

export interface EarlyAlert {
  id: string;
  project_id: string;
  alert_type: string;
  severity: 'warning' | 'danger' | 'info';
  message: string;
  is_resolved: boolean;
  created_at: string;
}

export interface Founder {
  name: string;
  role: string;
  credentials: string[];
  specialties: string[];
  linkedin: string;
  bio: string;
}
