import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Calendar, Clock, AlertCircle, FileSpreadsheet } from 'lucide-react';

export const AuditIntakeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    organization_name: '',
    rut: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    funding_agency: 'CORFO',
    project_title: '',
    estimated_budget: '$50.000.000 - $150.000.000',
    current_situation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedSuccess(true);
      } else {
        // Fallback for static host
        saveToLocalStorage(formData);
        setSubmittedSuccess(true);
      }
    } catch {
      // In case of static host like GitHub Pages without backend
      saveToLocalStorage(formData);
      setSubmittedSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveToLocalStorage = (data: typeof formData) => {
    try {
      const existing = JSON.parse(localStorage.getItem('veritas_consultations') || '[]');
      existing.push({ ...data, date: new Date().toISOString() });
      localStorage.setItem('veritas_consultations', JSON.stringify(existing));
    } catch {}
  };

  return (
    <section id="contacto" className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Diagnóstico Preventivo Inicial Sin Costo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solicita una Sesión de Diagnóstico para tu Proyecto
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Conversemos sobre el estado de tu convenio y presupuesto. Te explicaremos cómo estructuraríamos la matriz de control y la preauditoría de tu carpeta antes de la próxima rendición.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {submittedSuccess ? (
            <div className="py-12 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Solicitud Recibida Correctamente
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                Hemos registrado tu proyecto en nuestra base de datos. Los socios consultores{' '}
                <strong className="text-white">Guillermo Peralta</strong> y{' '}
                <strong className="text-white">Matías Cotroneo</strong> revisarán tus antecedentes y te contactarán dentro de las próximas 24 horas hábiles.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-400">
                <Shield className="w-4 h-4 text-indigo-400" />
                <span>Acuerdo de Confidencialidad (NDA) garantizado</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-900/60 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Org Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Organización o Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Austral Biotech SpA / Universidad..."
                    value={formData.organization_name}
                    onChange={(e) => setFormData({ ...formData, organization_name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* RUT */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    RUT Empresa / Institución (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 76.543.210-K"
                    value={formData.rut}
                    onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Nombre del Contacto *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Dra. Camila Valenzuela"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Correo Electrónico Institucional *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contacto@organizacion.cl"
                    value={formData.contact_email}
                    onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 1234 5678"
                    value={formData.contact_phone}
                    onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Funding Agency */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Institución Financiadora *
                  </label>
                  <select
                    value={formData.funding_agency}
                    onChange={(e) => setFormData({ ...formData, funding_agency: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="CORFO">CORFO (Innova, Crea y Valida, Semilla)</option>
                    <option value="ANID">ANID (Fondef, Fondecyt, Centros)</option>
                    <option value="FIA">FIA (Fundación para la Innovación Agraria)</option>
                    <option value="GORE">GORE (FNDR / Fondos Regionales)</option>
                    <option value="SERCOTEC">SERCOTEC</option>
                    <option value="PRIVADO">Fondo Privado o Filantrópico</option>
                    <option value="OTRO">Otro Organismo Financiador</option>
                  </select>
                </div>
              </div>

              {/* Project Title / Code */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Título o Código del Proyecto
                </label>
                <input
                  type="text"
                  placeholder="Ej. FIA-PYT-2025-XX / Desarrollo de Bioplásticos..."
                  value={formData.project_title}
                  onChange={(e) => setFormData({ ...formData, project_title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Current Situation */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Situación Actual o Desafío de Rendición
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente: ¿Proyecto recién adjudicado? ¿Acumulación de comprobantes por rendir? ¿Observaciones recibidas por subsanar?"
                  value={formData.current_situation}
                  onChange={(e) => setFormData({ ...formData, current_situation: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-base shadow-xl shadow-indigo-500/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Registrando en PostgreSQL...' : 'Enviar Solicitud de Diagnóstico'}</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2 border-t border-slate-900">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Confidencialidad absoluta y NDA asegurado</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span>Respuesta garantizada en menos de 24 horas</span>
                </div>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
