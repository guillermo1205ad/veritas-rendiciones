import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// 1. Health & Database Status
app.get('/api/health', async (req, res) => {
  try {
    const start = Date.now();
    const result = await pool.query('SELECT current_database(), version(), count(*) from projects');
    const latency = Date.now() - start;
    res.json({
      status: 'online',
      database: 'PostgreSQL 16',
      db_name: result.rows[0].current_database,
      projects_count: parseInt(result.rows[0].count, 10),
      latency_ms: latency,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// 2. Founders & Advisory Credentials
app.get('/api/founders', (req, res) => {
  res.json({
    title: 'Consultoría Estratégica & Liderazgo Tecnológico',
    description: 'No vendemos licencias de software: gestionamos y resolvemos la carga crítica de rendición con un equipo experto de consultores y tecnología propietaria de grafos de conocimiento e IA multimodal.',
    founders: [
      {
        name: 'Guillermo Peralta',
        role: 'Socio Consultor & Director de Inteligencia Artificial',
        credentials: [
          'Ingeniero Comercial',
          'Magíster en Ciencias Empresariales (Gestión del Emprendimiento)',
          'Doctor (c) en Ciencias de la Computación'
        ],
        specialties: [
          'Grafos de Conocimiento & Razonamiento Simbólico',
          'Modelos de IA Multimodal aplicados a Auditoría Documental',
          'Arquitectura de Datos y Automatización de Procesos Financieros'
        ],
        linkedin: 'https://www.linkedin.com/in/guillermo-peralta/',
        bio: 'Combina una sólida formación en finanzas y estrategia empresarial con investigación doctoral en ciencias de la computación, especializándose en sistemas inteligentes para conciliación y trazabilidad de información compleja.'
      },
      {
        name: 'Matías Cotroneo Urriola',
        role: 'Socio Consultor & Director de Gestión de Proyectos y Finanzas',
        credentials: [
          'Ingeniero Comercial',
          'Magíster en Ciencias Empresariales (Gestión del Emprendimiento)'
        ],
        specialties: [
          'Formulación, Ejecución y Rendición de Fondos Concursables',
          'Bases Administrativas CORFO, ANID, FIA y GORE',
          'Estructuración Presupuestaria y Estrategia Financiera Corporativa'
        ],
        linkedin: 'https://www.linkedin.com/in/matias-cotroneo-urriola-6368861a8/',
        bio: 'Especialista en dirección y rendición financiera de proyectos de innovación de alta complejidad, asegurando el cumplimiento estricto de convenios públicos y privados para evitar reparos y reintegros.'
      }
    ]
  });
});

// 3. Projects list
app.get('/api/projects', async (req, res) => {
  try {
    const query = `
      SELECT 
        p.*,
        o.name as organization_name,
        o.rut as organization_rut,
        o.organization_type
      FROM projects p
      JOIN organizations o ON p.organization_id = o.id
      ORDER BY p.created_at DESC
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Single project details with budget breakdown and alerts
app.get('/api/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const projectQuery = `
      SELECT p.*, o.name as organization_name, o.rut as organization_rut
      FROM projects p
      JOIN organizations o ON p.organization_id = o.id
      WHERE p.id = $1
    `;
    const projectResult = await pool.query(projectQuery, [id]);

    if (projectResult.rows.length === 0) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }

    const budgetQuery = `
      SELECT * FROM budget_items
      WHERE project_id = $1
      ORDER BY approved_amount DESC
    `;
    const budgetResult = await pool.query(budgetQuery, [id]);

    const alertsQuery = `
      SELECT * FROM early_alerts
      WHERE project_id = $1
      ORDER BY is_resolved ASC, created_at DESC
    `;
    const alertsResult = await pool.query(alertsQuery, [id]);

    res.json({
      project: projectResult.rows[0],
      budget_items: budgetResult.rows,
      early_alerts: alertsResult.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Expenses list with cross-document status
app.get('/api/projects/:id/expenses', async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
      SELECT 
        e.*,
        b.name as budget_item_name,
        b.item_code as budget_item_code
      FROM expenses e
      LEFT JOIN budget_items b ON e.budget_item_id = b.id
      WHERE e.project_id = $1
      ORDER BY e.expense_date DESC
    `;
    const result = await pool.query(query, [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. Pre-audit report & observations
app.get('/api/projects/:id/preaudit', async (req, res) => {
  try {
    const { id } = req.params;

    const reportQuery = `
      SELECT * FROM pre_audit_reports
      WHERE project_id = $1
      ORDER BY rendition_number DESC
      LIMIT 1
    `;
    const reportResult = await pool.query(reportQuery, [id]);

    if (reportResult.rows.length === 0) {
      return res.json({ report: null, observations: [] });
    }

    const report = reportResult.rows[0];

    const obsQuery = `
      SELECT 
        o.*,
        e.concept as expense_concept,
        e.beneficiary_name,
        e.gross_amount as expense_amount
      FROM pre_audit_observations o
      LEFT JOIN expenses e ON o.expense_id = e.id
      WHERE o.pre_audit_report_id = $1
      ORDER BY o.observation_number ASC
    `;
    const obsResult = await pool.query(obsQuery, [report.id]);

    res.json({
      report,
      observations: obsResult.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7. Knowledge Graph Data
app.get('/api/projects/:id/graph', async (req, res) => {
  try {
    const { id } = req.params;

    const nodesQuery = `SELECT * FROM graph_nodes WHERE project_id = $1`;
    const edgesQuery = `SELECT * FROM graph_edges WHERE project_id = $1`;

    const [nodesRes, edgesRes] = await Promise.all([
      pool.query(nodesQuery, [id]),
      pool.query(edgesQuery, [id])
    ]);

    res.json({
      nodes: nodesRes.rows,
      edges: edgesRes.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 8. Submit Lead / Consultation Request
app.post('/api/consultations', async (req, res) => {
  try {
    const {
      organization_name,
      rut,
      contact_name,
      contact_email,
      contact_phone,
      funding_agency,
      project_title,
      estimated_budget,
      current_situation
    } = req.body;

    if (!organization_name || !contact_name || !contact_email || !funding_agency) {
      return res.status(400).json({
        error: 'Por favor complete los campos obligatorios (Organización, Contacto, Email, Fondo).'
      });
    }

    const insertQuery = `
      INSERT INTO consultation_requests (
        organization_name, rut, contact_name, contact_email, contact_phone,
        funding_agency, project_title, estimated_budget, current_situation
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `;

    const values = [
      organization_name,
      rut || '',
      contact_name,
      contact_email,
      contact_phone || '',
      funding_agency,
      project_title || '',
      estimated_budget || 'No especificado',
      current_situation || ''
    ];

    const result = await pool.query(insertQuery, values);

    res.status(201).json({
      success: true,
      message: 'Solicitud de asesoría y preauditoría recibida exitosamente. Un socio consultor se comunicará dentro de las próximas 24 horas.',
      lead: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 9. Run simulated pre-audit trigger
app.post('/api/projects/:id/run-preaudit', async (req, res) => {
  try {
    const { id } = req.params;

    // Simulate graph evaluation update
    const updateTime = new Date().toISOString().split('T')[0];
    await pool.query(
      `UPDATE pre_audit_reports 
       SET audit_date = $1, total_docs_reviewed = 74 
       WHERE project_id = $2`,
      [updateTime, id]
    );

    res.json({
      success: true,
      message: 'Motor de cruce documental y reglas ejecutado con éxito. Grafo de relaciones actualizado.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
