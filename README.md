# VÉRITAS | Servicio de Gestión y Preauditoría de Rendiciones de Proyectos

> **Plataforma Web en React + Base de Datos PostgreSQL 16**
> *Servicio gestionado de acompañamiento, cruce documental y preauditoría mensual para proyectos financiados por CORFO, ANID, FIA, GORE y fondos privados.*

---

## 🎯 Enfoque Estratégico y Modelo de Negocio

> **"No vendemos software de autoservicio: resolvemos y gestionamos la carga crítica de rendiciones de las empresas utilizando Grafos de Conocimiento e Inteligencia Artificial Multimodal."**

A diferencia de un SaaS genérico que traslada el trabajo al cliente, **VÉRITAS** ofrece un **servicio de consultoría y gestión integral (Tech-Enabled Advisory)**:
1. **Acompañamiento Preventivo Mes a Mes:** Cierres mensuales desde la adjudicación hasta el cierre final (no esperar al mes 18 con carpetas desordenadas).
2. **Cruce Documental de Respaldo:** Cada gasto se valida relacionalmente contra su cadena de custodia completa:
   - Boleta/Factura tributaria (SII).
   - Comprobante de transferencia bancaria (TEF coincidente con valor líquido).
   - Contrato vigente del prestador.
   - Formulario 29 / acreditación de retención tributaria.
   - **Informe de actividades mensual (entregable técnico obligatorio).**
   - Disponibilidad presupuestaria en el ítem (RRHH, Operación, Equipamiento).
   - Validez de fecha dentro del período autorizado del convenio.
3. **Preauditoría antes de Presentar:** Ejecución de informe preventivo tipo *"Preauditoría Rendición N.º X"* con detección previa de observaciones, discrepancias de monto y posibles duplicados.
4. **Subsanación y Gestión de Observaciones:** Preparación de carpetas oficiales de respuesta ante requerimientos de los organismos financiadores.

---

## 👥 Equipo Consultor & Liderazgo

- **Guillermo Peralta** — Socio Consultor & Director de Inteligencia Artificial
  - Ingeniero Comercial
  - Magíster en Ciencias Empresariales (Gestión del Emprendimiento)
  - Doctor (c) en Ciencias de la Computación
  - Especialidad: *Grafos de Conocimiento, IA Multimodal para extracción documental y automatización simbólica.*
  - [Perfil de LinkedIn](https://www.linkedin.com/in/guillermo-peralta/)

- **Matías Cotroneo Urriola** — Socio Consultor & Director de Gestión de Proyectos
  - Ingeniero Comercial
  - Magíster en Ciencias Empresariales (Gestión del Emprendimiento)
  - Especialidad: *Bases administrativas CORFO, ANID, FIA y GORE, estructuración de presupuestos y finanzas de proyectos.*
  - [Perfil de LinkedIn](https://www.linkedin.com/in/matias-cotroneo-urriola-6368861a8/)

---

## 🏗️ Arquitectura Técnica

```
├── client/                     # Frontend en React 19 + TypeScript + Vite + Tailwind CSS v4
│   ├── src/
│   │   ├── components/         # Navbar, Hero, ProblemSolution, TechnologyExplainer,
│   │   │                       # PortalDemo, KnowledgeGraphVisualizer, FoundersSection,
│   │   │                       # TargetAudience, AuditIntakeForm, Footer
│   │   ├── types/              # Interfaces TypeScript de Proyectos, Gastos, Grafos, etc.
│   │   ├── App.tsx             # Ensamble de la aplicación
│   │   └── main.tsx
│   └── vite.config.ts          # Configuración Vite con Proxy a API Express /api
│
├── server/                     # Backend API en Node.js + Express
│   ├── db.js                   # Conexión pg.Pool a PostgreSQL 16
│   ├── index.js                # Endpoints REST para proyectos, preauditoría, grafos y leads
│   └── package.json
│
├── database/                   # Modelado y Scripts de Base de Datos
│   ├── schema.sql              # DDL de PostgreSQL: tablas relacionales y grafos
│   └── seed.sql                # Datos de prueba realistas (CORFO, FIA, gastos, observaciones)
│
└── package.json                # Scripts raíz unificados (concurrently, dev, db:start, db:init)
```

---

## 🚀 Puesta en Marcha Rápida

### 1. Requisitos Previos
- **Node.js** (v18+)
- **PostgreSQL 16** (instalado y en ejecución)

### 2. Iniciar el Servidor de Base de Datos PostgreSQL
```bash
# Iniciar el motor PostgreSQL (si no está corriendo)
npm run db:start

# Crear la base de datos y cargar esquema + datos de prueba
npm run db:init
```

### 3. Ejecutar el Proyecto Completo (Frontend + Backend)
```bash
npm run dev
```
- **Frontend Web:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:5001/api/health](http://localhost:5001/api/health)

---

## 📊 Endpoints de la API

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Estado del motor PostgreSQL 16 y latencia de consulta |
| `GET` | `/api/founders` | Perfiles, credenciales y especialidades de los consultores |
| `GET` | `/api/projects` | Lista de proyectos adjudicados y métricas globales |
| `GET` | `/api/projects/:id` | Detalle del proyecto, ejecución por ítem y alertas tempranas |
| `GET` | `/api/projects/:id/expenses` | Gastos con checklist de cruce documental (7 filtros) |
| `GET` | `/api/projects/:id/graph` | Nodos y aristas para el visualizador de Grafo de Conocimiento |
| `GET` | `/api/projects/:id/preaudit` | Último informe de preauditoría y observaciones detalladas |
| `POST` | `/api/projects/:id/run-preaudit` | Ejecución en vivo del motor de preauditoría |
| `POST` | `/api/consultations` | Registro de solicitud de diagnóstico de proyecto en PostgreSQL |

---

## 🔒 Confidencialidad y Seguridad
Todos los expedientes financieros, contratos, DTEs e informes de actividades de los clientes están resguardados bajo acuerdos estrictos de confidencialidad (NDA).
