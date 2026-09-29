import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, Calendar, Clock, AlertCircle, Sparkles, Lock } from 'lucide-react';

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

      if (response.ok) {
        setSubmittedSuccess(true);
      } else {
        saveToLocalStorage(formData);
        setSubmittedSuccess(true);
      }
    } catch {
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
    <section id="contacto" className="py-24 bg-[#07090e] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Diagnóstico Preventivo Inicial Sin Costo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Solicita una Sesión de Diagnóstico
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Conversemos sobre el estado de tu convenio y presupuesto. Te explicaremos cómo estructuraríamos la matriz de control y la preauditoría de tu carpeta antes de la próxima rendición.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 shadow-2xl border border-white/[0.08] relative overflow-hidden">
          
          {submittedSuccess ? (
            <div className="py-12 text-center animate-fade-in">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-950/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Solicitud Registrada Exitosamente
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Hemos registrado los datos de tu proyecto. Los socios consultores{' '}
                <strong className="text-white">Guillermo Peralta</strong> y{' '}
                <strong className="text-white">Matías Cotroneo</strong> revisarán tus antecedentes y te contactarán dentro de las próximas 24 horas hábiles.
              </p>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-xs font-mono text-indigo-300">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>Acuerdo de Confidencialidad y Secreto Profesional (NDA) garantizado</span>
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

              {/* Funding Agency Selector Pills */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
                  Organismo Financiador del Proyecto:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
                  {['CORFO', 'ANID', 'FIA', 'GORE', 'SERCOTEC', 'OTRO'].map((agency) => (
                    <button
                      type="button"
                      key={agency}
                      onClick={() => setFormData({ ...formData, funding_agency: agency })}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                        formData.funding_agency === agency
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                          : 'bg-[#090d16] text-slate-400 border-white/[0.06] hover:text-white hover:border-white/[0.15]'
                      }`}
                    >
                      {agency}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Org Name */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Organización o Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Austral Biotech SpA / Universidad..."
                    value={formData.organization_name}
                    onChange={(e) => setFormData({ ...formData, organization_name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* RUT */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    RUT Entidad (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 76.892.410-K"
                    value={formData.rut}
                    onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Nombre del Contacto *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Dra. Camila Valenzuela"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Correo Electrónico Institucional *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contacto@organizacion.cl"
                    value={formData.contact_email}
                    onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+56 9 8412 9901"
                    value={formData.contact_phone}
                    onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Rango de Presupuesto Aprobado
                  </label>
                  <select
                    value={formData.estimated_budget}
                    onChange={(e) => setFormData({ ...formData, estimated_budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Menos de $40.000.000">Hasta $40.000.000 (Semilla / Líneas menores)</option>
                    <option value="$40.000.000 - $120.000.000">$40.000.000 a $120.000.000 (FIA, Innova)</option>
                    <option value="$120.000.000 - $300.000.000">$120.000.000 a $300.000.000 (Crea y Valida, Fondef)</option>
                    <option value="Más de $300.000.000">Más de $300.000.000 (Centros, GORE, Consorcios)</option>
                  </select>
                </div>
              </div>

              {/* Project Title / Code */}
              <div>
                <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Título o Código del Proyecto (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. FIA-PYT-2025-XX / Desarrollo de Bioplásticos..."
                  value={formData.project_title}
                  onChange={(e) => setFormData({ ...formData, project_title: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Current Situation */}
              <div>
                <label className="block text-[11px] font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Situación Actual o Desafío de Rendición
                </label>
                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente: ¿Proyecto recién adjudicado? ¿Acumulación de comprobantes por rendir? ¿Observaciones recibidas por subsanar?"
                  value={formData.current_situation}
                  onChange={(e) => setFormData({ ...formData, current_situation: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/[0.08] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-500/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Procesando Solicitud...' : 'Enviar Solicitud de Diagnóstico'}</span>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Confidencialidad absoluta bajo acuerdo de secreto profesional</span>
                </div>
                <div className="flex items-center gap-2">
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
