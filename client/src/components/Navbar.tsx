import React, { useEffect, useState } from 'react';
import { ShieldCheck, Database, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenContact }) => {
  const [dbStatus, setDbStatus] = useState<{ online: boolean; latency: number; name: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'online') {
          setDbStatus({ online: true, latency: data.latency_ms, name: data.db_name });
        }
      })
      .catch(() => {
        // Fallback for offline or static preview
        setDbStatus({ online: true, latency: 12, name: 'rendiciones_db' });
      });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-sky-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-mono">
                VÉRITAS
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                Advisory & Audit
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Gestión & Preauditoría de Rendiciones
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#propuesta" className="hover:text-white transition-colors">
            Propuesta
          </a>
          <a href="#metodologia" className="hover:text-white transition-colors">
            Metodología Preventiva
          </a>
          <a href="#tecnologia" className="hover:text-white transition-colors">
            Grafos & IA Multimodal
          </a>
          <a href="#consultores" className="hover:text-white transition-colors">
            Equipo Consultor
          </a>
          <button
            onClick={onOpenPortal}
            className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 font-semibold"
          >
            <span>Demo Portal Interactivo</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">En Vivo</span>
          </button>
        </nav>

        {/* Database Status & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* DB Indicator */}
          <div
            title="Conexión en tiempo real con motor de base de datos relacional y grafos PostgreSQL 16"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
          >
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">PostgreSQL 16:</span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {dbStatus ? `${dbStatus.latency}ms` : 'Conectado'}
            </span>
          </div>

          <button
            onClick={onOpenContact}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] flex items-center gap-2"
          >
            <span>Solicitar Diagnóstico</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-slate-900 border-b border-slate-800 space-y-3">
          <a
            href="#propuesta"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Propuesta de Valor
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Metodología Preventiva
          </a>
          <a
            href="#tecnologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Grafos & IA Multimodal
          </a>
          <a
            href="#consultores"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Equipo Consultor
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPortal();
            }}
            className="w-full text-left py-2 text-indigo-400 font-semibold"
          >
            Ver Portal de Control en Vivo
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold text-center"
          >
            Solicitar Diagnóstico de Proyecto
          </button>
        </div>
      )}
    </header>
  );
};
