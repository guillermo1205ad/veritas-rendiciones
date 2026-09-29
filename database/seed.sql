-- SEED DATA: Rendiciones y Preauditoría Inteligente
-- Proyecto de Demostración para Asesoría de Rendiciones

INSERT INTO organizations (id, rut, name, organization_type, contact_name, contact_email, contact_phone)
VALUES (
    'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
    '76.892.410-K',
    'Consorcio Tecnológico & Innovación Austral SpA',
    'empresa',
    'Dra. Marcela Lagos',
    'proyectos@innovacionaustral.cl',
    '+56 9 8412 9901'
) ON CONFLICT (rut) DO NOTHING;

-- Proyecto Principal
INSERT INTO projects (
    id, organization_id, code, title, funding_agency, program_name,
    total_budget, executed_budget, reported_budget, pending_to_report, available_budget,
    start_date, end_date, current_execution_month, total_months, document_health_score, status
) VALUES (
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
    'FIA-PYT-2025-1104',
    'Fortalecimiento Productivo y Bioprocesos para Agroindustria Sostenible',
    'FIA',
    'Proyectos de Innovación de Interés Regional',
    120000000.00,
    76400000.00,
    69800000.00,
    6600000.00,
    43600000.00,
    '2025-03-01',
    '2026-08-31',
    8,
    18,
    94.00,
    'en_preauditoria'
) ON CONFLICT (id) DO NOTHING;

-- Ítems Presupuestarios (Como en el ejemplo del contexto)
INSERT INTO budget_items (id, project_id, item_code, name, approved_amount, executed_amount, available_amount, execution_percentage)
VALUES 
(
    'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'RRHH',
    'Recursos Humanos',
    20000000.00,
    14500000.00,
    5500000.00,
    72.50
),
(
    'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'OPERACION',
    'Operación',
    10000000.00,
    8200000.00,
    1800000.00,
    82.00
),
(
    'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'EQUIPAMIENTO',
    'Equipamiento e Inversión',
    15000000.00,
    6000000.00,
    9000000.00,
    40.00
) ON CONFLICT (id) DO NOTHING;

-- Documentos extraídos por IA Multimodal
INSERT INTO documents (
    id, project_id, document_type, folio, issuer_name, issuer_rut,
    issue_date, gross_amount, tax_amount, net_amount, description,
    file_name, ai_classification, ai_confidence, metadata
) VALUES
(
    'f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'boleta_honorarios',
    'BH-849',
    'Juan Pérez Silva',
    '15.420.913-4',
    '2026-08-28',
    500000.00,
    68750.00,
    431250.00,
    'Servicios de asesoría biotecnológica y muestreo de suelos - Agosto 2026',
    'boleta_849_juan_perez.pdf',
    'Boleta Electrónica de Honorarios (SII)',
    99.2,
    '{"retencion_pct": 13.75, "periodo": "2026-08", "tipo_honorario": "profesional"}'::jsonb
),
(
    'a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'transferencia',
    'TRX-992014',
    'Banco de Chile',
    '76.892.410-K',
    '2026-08-30',
    431250.00,
    0.00,
    431250.00,
    'Transferencia electrónica fondos líquidos a Juan Pérez Silva',
    'comprobante_banco_chile_992014.pdf',
    'Comprobante TEF Bancario',
    98.7,
    '{"banco_destino": "Banco Santander", "cuenta_destino": "00-58291-0"}'::jsonb
),
(
    'b8c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'contrato',
    'CONV-2025-08',
    'Consorcio Tecnológico Austral',
    '76.892.410-K',
    '2025-03-01',
    6000000.00,
    0.00,
    6000000.00,
    'Contrato de prestación de servicios a honorarios Juan Pérez Silva',
    'contrato_honorarios_juan_perez_firmado.pdf',
    'Contrato / Convenio Prestación Servicios',
    96.5,
    '{"vigencia_desde": "2025-03-01", "vigencia_hasta": "2026-08-31", "monto_mensual": 500000}'::jsonb
),
(
    'c9d0e1f2-a3b4-5c6d-7e8f-9a0b1c2d3e4f',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'factura',
    '1825',
    'Proveedor XYZ Equipos SpA',
    '77.104.992-3',
    '2026-08-15',
    1190000.00,
    190000.00,
    1000000.00,
    'Balanza analítica de precisión y centrífuga digital de laboratorio',
    'factura_1825_proveedor_xyz.pdf',
    'Factura Electrónica Afecta (DTE 33)',
    99.8,
    '{"folio_sii": "1825", "iva": 190000, "item_presupuestario": "Equipamiento"}'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- Gastos analizados en la matriz de control
INSERT INTO expenses (
    id, project_id, budget_item_id, expense_number, concept,
    beneficiary_name, beneficiary_rut, gross_amount, execution_period,
    expense_date, status, backing_score,
    has_tax_doc, has_payment_proof, has_contract, has_activity_report,
    has_tax_form, has_budget_approval, is_period_valid, is_duplicate
) VALUES
(
    'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    'G-2026-08-01',
    'Honorarios Juan Pérez — Agosto 2026',
    'Juan Pérez Silva',
    '15.420.913-4',
    500000.00,
    'Agosto 2026',
    '2026-08-28',
    'pendiente_respaldo',
    80.00,
    TRUE, -- Boleta encontrada
    TRUE, -- Transferencia encontrada
    TRUE, -- Contrato encontrado
    FALSE, -- INFORME DE ACTIVIDADES FALTANTE (Caso exacto del usuario)
    TRUE, -- Respaldo tributario encontrado
    TRUE, -- Presupuesto disponible correcto
    TRUE, -- Período correcto
    FALSE
),
(
    'e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
    'G-2026-08-02',
    'Factura N.º 1825 — Balanza analítica y Centrífuga',
    'Proveedor XYZ Equipos SpA',
    '77.104.992-3',
    1190000.00,
    'Agosto 2026',
    '2026-08-15',
    'aprobado',
    100.00,
    TRUE, -- Factura encontrada
    TRUE, -- Comprobante de pago encontrado
    TRUE, -- Orden de compra / cotización
    TRUE, -- Acta de recepción conforme
    TRUE,
    TRUE, -- Saldo disponible de ítem: $3.450.000
    TRUE, -- Dentro del período
    FALSE -- No duplicado
),
(
    'f2a3b4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    'G-2026-08-03',
    'Boleta de honorarios N.º 52 — Asistente de Campo',
    'Camila Soto Morales',
    '18.902.114-1',
    350000.00,
    'Agosto 2026',
    '2026-08-25',
    'con_observacion',
    60.00,
    TRUE,
    TRUE,
    TRUE,
    TRUE,
    FALSE,
    TRUE,
    TRUE,
    FALSE
),
(
    'a3b4c5d6-e7f8-9a0b-1c2d-3e4f5a6b7c8d',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    'G-2026-08-04',
    'Gasto en insumos de laboratorio e impresión técnica',
    'Servicios Gráficos e Insumos Ltda.',
    '76.120.301-2',
    245000.00,
    'Agosto 2026',
    '2026-08-10',
    'con_observacion',
    50.00,
    TRUE,
    TRUE,
    FALSE,
    FALSE,
    FALSE,
    FALSE, -- Requiere revisión de imputación presupuestaria
    TRUE,
    FALSE
),
(
    'b4c5d6e7-f8a9-0b1c-2d3e-4f5a6b7c8d9e',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    'G-2026-08-05',
    'Factura N.º 4091 — Reactivos y Medios de Cultivo',
    'Química Central S.A.',
    '96.551.020-8',
    410000.00,
    'Agosto 2026',
    '2026-08-05',
    'critico',
    40.00,
    TRUE,
    FALSE, -- Falta transferencia bancaria
    FALSE,
    FALSE,
    FALSE,
    TRUE,
    TRUE,
    TRUE -- Alerta: Potencialmente duplicado respecto a rendición anterior
) ON CONFLICT (id) DO NOTHING;

-- Enlaces de Custodia
INSERT INTO expense_document_links (expense_id, document_id, role, match_status, notes)
VALUES
(
    'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
    'f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
    'documento_tributario',
    'matched',
    'Boleta BH-849 coincide exactamente en monto y emisor.'
),
(
    'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
    'a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d',
    'comprobante_transferencia',
    'matched',
    'TEF por $431.250 coincide con valor líquido tras retención del 13.75%.'
),
(
    'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
    'b8c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e',
    'contrato',
    'matched',
    'Contrato vigente hasta 2026-08-31 con cláusula de informe de actividades obligatorio.'
),
(
    'e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b',
    'c9d0e1f2-a3b4-5c6d-7e8f-9a0b1c2d3e4f',
    'documento_tributario',
    'matched',
    'Factura 1825 con DTE 33 verificada en SII y cadena de pago bancaria completa.'
) ON CONFLICT DO NOTHING;

-- Preauditoría N.º 8
INSERT INTO pre_audit_reports (
    id, project_id, rendition_number, audit_date,
    total_docs_reviewed, expenses_backed, expenses_observed, expenses_critical,
    missing_docs_count, potential_duplicates_count, overall_status, notes
) VALUES (
    'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    8,
    '2026-08-31',
    74,
    67,
    5,
    2,
    4,
    1,
    'requiere_accion_inmediata',
    'Preauditoría preventiva ejecutada con motor FIA-2026 y validación de grafo de relaciones. Se detectan 5 observaciones clave a resolver antes de subir a plataforma oficial.'
) ON CONFLICT (id) DO NOTHING;

-- Observaciones detalladas de la Preauditoría N.º 8
INSERT INTO pre_audit_observations (
    pre_audit_report_id, expense_id, observation_number, severity,
    title, detail, funding_rule_reference, recommended_action, status
) VALUES
(
    'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
    1,
    'alta',
    'Falta informe de actividades correspondiente al período agosto 2026',
    'Honorarios de Juan Pérez ($500.000). Se encontró boleta, contrato y transferencia, pero no el informe de actividades exigido por el convenio.',
    'Bases Especiales FIA Art. 14 / Manual de Rendición Numeral 3.2',
    'Solicitar al prestador la entrega inmediata del informe de actividades mensual firmado antes de incluir el gasto en la rendición.',
    'pendiente'
),
(
    'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    'f2a3b4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c',
    2,
    'alta',
    'Boleta de honorarios N.º 52 presenta una diferencia entre monto documentado y monto pagado',
    'La boleta indica un monto líquido de $301.875, sin embargo el comprobante de transferencia bancaria registra un pago de $295.000 (Diferencia de $6.875).',
    'Criterio General de Rendición CGR / Manual Financiero',
    'Revisar si existió descuento o comisión no declarada, o emitir transferencia de ajuste complementaria.',
    'pendiente'
),
(
    'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
    3,
    'media',
    'Falta comprobante de pago previsional/F29 según exigencia de retención',
    'Para el prestador independiente, se requiere adjuntar el Formulario 29 del mes correspondiente para acreditar el pago de la retención del 13.75%.',
    'Ley de Rentas / Bases FIA Respaldo Tributario',
    'Adjuntar certificado de declaración y pago F29 del SII correspondiente al período tributario.',
    'en_proceso'
),
(
    'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    'a3b4c5d6-e7f8-9a0b-1c2d-3e4f5a6b7c8d',
    4,
    'media',
    'Revisar imputación presupuestaria de gasto por $245.000',
    'El gasto fue imputado al ítem "Operación", pero el detalle de la factura incluye servicios de diseño que corresponden contractualmente al ítem "Subcontratos/Servicios".',
    'Matriz Presupuestaria Aprobada Anexo 2',
    'Reasignar el asiento al ítem presupuestario correcto o solicitar reitemización antes de presentar.',
    'pendiente'
),
(
    'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
    'b4c5d6e7-f8a9-0b1c-2d3e-4f5a6b7c8d9e',
    5,
    'critica',
    'Documento potencialmente duplicado respecto de una rendición anterior',
    'La Factura N.º 4091 de Química Central S.A. posee el mismo folio, RUT y monto que un gasto rendido parcialmente en la Rendición N.º 6 (Julio 2026).',
    'Prohibición Expresa de Doble Imputación - Bases Generales',
    'Excluir el gasto inmediatamente o presentar la nota de crédito o aclaración formal de saldo no rendido previamente.',
    'pendiente'
) ON CONFLICT DO NOTHING;

-- Alertas tempranas activas
INSERT INTO early_alerts (project_id, alert_type, severity, message, is_resolved)
VALUES
(
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'presupuesto_limite',
    'warning',
    'El ítem Operación alcanzó el 82.0% de ejecución. Al ritmo actual alcanzará el tope en 45 días.',
    FALSE
),
(
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'documento_faltante',
    'danger',
    'Honorarios Juan Pérez ($500.000): Marcado PENDIENTE por falta de Informe de Actividades.',
    FALSE
),
(
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'duplicidad',
    'danger',
    'Se detectó un documento (Folio 4091) con el mismo folio utilizado anteriormente en la Rendición N.º 6.',
    FALSE
),
(
    'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    'monto_discrepante',
    'warning',
    'El monto del comprobante de transferencia no coincide con el documento tributario en Boleta N.º 52.',
    FALSE
);

-- Nodos del Grafo de Conocimiento para el Gasto de Juan Pérez
INSERT INTO graph_nodes (project_id, node_id, node_type, label, status, properties)
VALUES
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'EXP_01', 'Gasto', 'Honorarios Juan Pérez ($500.000)', 'warning', '{"mes": "Agosto 2026", "monto": 500000}'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'DOC_BH849', 'Documento', 'Boleta Honorarios #849', 'ok', '{"folio": "849", "monto": 500000}'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'DOC_TRX992', 'Documento', 'Transferencia TEF #992014', 'ok', '{"monto": 431250, "estado": "conciliado"}'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'DOC_CONV25', 'Documento', 'Contrato Prestación Servicios', 'ok', '{"vigencia": "2025-2026"}'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'DOC_INF_MISS', 'Documento', 'Informe de Actividades Mensual', 'missing', '{"obligatorio": true, "estado": "FALTANTE"}'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'ITEM_RRHH', 'ItemPresupuestario', 'Ítem Recursos Humanos (Disponible: $5.5M)', 'ok', '{"saldo": 5500000}'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'RULE_FIA_14', 'ReglaFinanciador', 'Regla FIA: Informe de Actividades Obligatorio', 'critical', '{"sancion": "Gasto no elegible"}');

-- Aristas del Grafo
INSERT INTO graph_edges (project_id, source_node_id, target_node_id, relationship, status, description)
VALUES
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'EXP_01', 'DOC_BH849', 'RESPALDADO_POR', 'valid', 'Documento tributario válido ante SII'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'EXP_01', 'DOC_TRX992', 'PAGADO_MEDIANTE', 'valid', 'Pago bancario transferido a cuenta informada'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'EXP_01', 'DOC_CONV25', 'SUSTENTADO_EN', 'valid', 'Contrato laboral o de honorarios vigente'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'EXP_01', 'DOC_INF_MISS', 'REQUIERE_INFORME', 'broken', 'Falta archivo del informe de actividades'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'EXP_01', 'ITEM_RRHH', 'IMPUTADO_A', 'valid', 'Saldo suficiente en ítem presupuestario'),
('b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', 'DOC_INF_MISS', 'RULE_FIA_14', 'VIOLA_NORMA', 'broken', 'Incumplimiento de la norma FIA por falta de entregable');
