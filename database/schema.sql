-- ============================================================================
-- BASE DE DATOS: RENDICIONES Y PREAUDITORÍA INTELIGENTE
-- Esquema para Servicio de Gestión y Preauditoría de Proyectos Financiados
-- Respaldado por Grafos de Conocimiento e Inteligencia Artificial Multimodal
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. ORGANIZACIONES / CLIENTES
CREATE TABLE IF NOT EXISTS organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    rut VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    organization_type VARCHAR(100) NOT NULL, -- 'empresa', 'universidad', 'centro_investigacion', 'fundacion', 'cooperativa', 'consultora'
    contact_name VARCHAR(150),
    contact_email VARCHAR(150),
    contact_phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. PROYECTOS ADJUDICADOS
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
    code VARCHAR(100) NOT NULL, -- ej: FIA-PYT-2026-0042 o CORFO-INNOVA-8932
    title VARCHAR(300) NOT NULL,
    funding_agency VARCHAR(100) NOT NULL, -- 'CORFO', 'ANID', 'FIA', 'GORE', 'SERCOTEC', 'PRIVADO'
    program_name VARCHAR(150), -- 'Crea y Valida', 'Fondef IDeA', 'Incentivo Tributario I+D', etc.
    total_budget NUMERIC(15, 2) NOT NULL,
    executed_budget NUMERIC(15, 2) DEFAULT 0,
    reported_budget NUMERIC(15, 2) DEFAULT 0, -- Rendido
    pending_to_report NUMERIC(15, 2) DEFAULT 0, -- Pendiente de rendir
    available_budget NUMERIC(15, 2) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    current_execution_month INT DEFAULT 1,
    total_months INT NOT NULL,
    document_health_score NUMERIC(5, 2) DEFAULT 100.0, -- % estado documental
    status VARCHAR(50) DEFAULT 'en_ejecucion', -- 'adjudicado', 'en_ejecucion', 'en_preauditoria', 'cerrado'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. ÍTEMS PRESUPUESTARIOS
CREATE TABLE IF NOT EXISTS budget_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    item_code VARCHAR(50) NOT NULL, -- 'RRHH', 'OPERACION', 'EQUIPAMIENTO', 'SUBCONTRATOS'
    name VARCHAR(150) NOT NULL,
    approved_amount NUMERIC(15, 2) NOT NULL,
    executed_amount NUMERIC(15, 2) DEFAULT 0,
    available_amount NUMERIC(15, 2) NOT NULL,
    execution_percentage NUMERIC(5, 2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. DOCUMENTOS DE RESPALDO (Extraídos y clasificados por IA Multimodal)
CREATE TABLE IF NOT EXISTS documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    document_type VARCHAR(100) NOT NULL, -- 'factura', 'boleta_honorarios', 'transferencia', 'contrato', 'informe_actividades', 'formulario_f29', 'cotizacion'
    folio VARCHAR(100),
    issuer_name VARCHAR(255),
    issuer_rut VARCHAR(50),
    receiver_name VARCHAR(255),
    receiver_rut VARCHAR(50),
    issue_date DATE,
    gross_amount NUMERIC(15, 2) DEFAULT 0,
    tax_amount NUMERIC(15, 2) DEFAULT 0,
    net_amount NUMERIC(15, 2) DEFAULT 0,
    description TEXT,
    file_name VARCHAR(255),
    file_url TEXT,
    ai_classification VARCHAR(100),
    ai_confidence NUMERIC(5, 2) DEFAULT 95.0,
    metadata JSONB DEFAULT '{}'::jsonb, -- almacena campos extraídos de la imagen/PDF por IA multimodal
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. GASTOS Y CADENA DE CRUCE DOCUMENTAL
CREATE TABLE IF NOT EXISTS expenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    budget_item_id UUID REFERENCES budget_items(id) ON DELETE SET NULL,
    expense_number VARCHAR(50),
    concept VARCHAR(300) NOT NULL,
    beneficiary_name VARCHAR(255) NOT NULL,
    beneficiary_rut VARCHAR(50) NOT NULL,
    gross_amount NUMERIC(15, 2) NOT NULL,
    execution_period VARCHAR(50), -- ej: 'Agosto 2026'
    expense_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'pendiente_respaldo', -- 'aprobado', 'pendiente_respaldo', 'con_observacion', 'critico'
    backing_score NUMERIC(5, 2) DEFAULT 0.0, -- % completitud de respaldo
    has_tax_doc BOOLEAN DEFAULT FALSE,
    has_payment_proof BOOLEAN DEFAULT FALSE,
    has_contract BOOLEAN DEFAULT FALSE,
    has_activity_report BOOLEAN DEFAULT FALSE,
    has_tax_form BOOLEAN DEFAULT FALSE,
    has_budget_approval BOOLEAN DEFAULT TRUE,
    is_period_valid BOOLEAN DEFAULT TRUE,
    is_duplicate BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. ENLACES DOCUMENTALES DE CUSTODIA (Cruces de Respaldo)
CREATE TABLE IF NOT EXISTS expense_document_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    expense_id UUID REFERENCES expenses(id) ON DELETE CASCADE,
    document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
    role VARCHAR(100) NOT NULL, -- 'documento_tributario', 'comprobante_transferencia', 'contrato', 'informe_actividades', 'respaldo_tributario'
    match_status VARCHAR(50) DEFAULT 'matched', -- 'matched', 'monto_discrepante', 'fecha_fuera_rango', 'no_encontrado'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. NODOS Y ARISTAS DEL GRAFO DE CONOCIMIENTO (Knowledge Graph)
CREATE TABLE IF NOT EXISTS graph_nodes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    node_id VARCHAR(100) NOT NULL,
    node_type VARCHAR(50) NOT NULL, -- 'Gasto', 'Documento', 'Proveedor', 'ItemPresupuestario', 'ReglaFinanciador'
    label VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'normal', -- 'ok', 'warning', 'critical', 'missing'
    properties JSONB DEFAULT '{}'::jsonb
);

CREATE TABLE IF NOT EXISTS graph_edges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    source_node_id VARCHAR(100) NOT NULL,
    target_node_id VARCHAR(100) NOT NULL,
    relationship VARCHAR(100) NOT NULL, -- 'RESPALDADO_POR', 'PAGADO_MEDIANTE', 'IMPUTADO_A', 'EMITIDO_POR', 'SUJETO_A_REGLA'
    status VARCHAR(50) DEFAULT 'valid', -- 'valid', 'broken', 'discrepancy'
    description TEXT
);

-- 8. INFORMES DE PREAUDITORÍA (Antes de Rendición Oficial)
CREATE TABLE IF NOT EXISTS pre_audit_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    rendition_number INT NOT NULL,
    audit_date DATE DEFAULT CURRENT_DATE,
    total_docs_reviewed INT DEFAULT 0,
    expenses_backed INT DEFAULT 0,
    expenses_observed INT DEFAULT 0,
    expenses_critical INT DEFAULT 0,
    missing_docs_count INT DEFAULT 0,
    potential_duplicates_count INT DEFAULT 0,
    overall_status VARCHAR(50) DEFAULT 'con_observaciones', -- 'aprobado_listo_para_rendir', 'con_observaciones_menores', 'requiere_accion_inmediata'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. OBSERVACIONES ESPECÍFICAS DE PREAUDITORÍA
CREATE TABLE IF NOT EXISTS pre_audit_observations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pre_audit_report_id UUID REFERENCES pre_audit_reports(id) ON DELETE CASCADE,
    expense_id UUID REFERENCES expenses(id) ON DELETE SET NULL,
    observation_number INT NOT NULL,
    severity VARCHAR(50) NOT NULL, -- 'critica', 'alta', 'media', 'baja'
    title VARCHAR(300) NOT NULL,
    detail TEXT NOT NULL,
    funding_rule_reference VARCHAR(255), -- ej: 'Bases Administrativas CORFO Art. 24'
    recommended_action TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pendiente', -- 'pendiente', 'en_proceso', 'resuelta'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. ALERTAS TEMPRANAS EN TIEMPO REAL
CREATE TABLE IF NOT EXISTS early_alerts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    alert_type VARCHAR(100) NOT NULL, -- 'presupuesto_limite', 'duplicidad', 'monto_discrepante', 'fecha_invalida', 'documento_faltante'
    severity VARCHAR(50) NOT NULL, -- 'warning', 'danger', 'info'
    message TEXT NOT NULL,
    is_resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 11. SOLICITUDES DE ASESORÍA / DIAGNÓSTICO (LEADS Y REUNIONES DE PROSPECTOS)
CREATE TABLE IF NOT EXISTS consultation_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    organization_name VARCHAR(255) NOT NULL,
    rut VARCHAR(50),
    contact_name VARCHAR(150) NOT NULL,
    contact_email VARCHAR(150) NOT NULL,
    contact_phone VARCHAR(50),
    funding_agency VARCHAR(100) NOT NULL, -- 'CORFO', 'ANID', 'FIA', 'GORE', 'SERCOTEC', 'OTRO'
    project_title VARCHAR(300),
    estimated_budget VARCHAR(100),
    current_situation TEXT,
    status VARCHAR(50) DEFAULT 'recibida', -- 'recibida', 'contactada', 'diagnostico_agendado', 'propuesta_enviada'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ÍNDICES DE RENDIMIENTO
CREATE INDEX IF NOT EXISTS idx_projects_org ON projects(organization_id);
CREATE INDEX IF NOT EXISTS idx_budget_items_proj ON budget_items(project_id);
CREATE INDEX IF NOT EXISTS idx_documents_proj ON documents(project_id);
CREATE INDEX IF NOT EXISTS idx_expenses_proj ON expenses(project_id);
CREATE INDEX IF NOT EXISTS idx_graph_nodes_proj ON graph_nodes(project_id);
CREATE INDEX IF NOT EXISTS idx_graph_edges_proj ON graph_edges(project_id);
CREATE INDEX IF NOT EXISTS idx_preaudit_proj ON pre_audit_reports(project_id);
