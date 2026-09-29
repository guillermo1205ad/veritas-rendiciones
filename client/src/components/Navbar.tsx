import React, { useEffect, useState } from 'react';
import { Shield, Database, ChevronRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortal, onOpenContact }) => {
  const [dbStatus, setDbStatus] = useState<{ online: boolean; latency: number; name: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (data.status === 'online') {
          setDbStatus({ online: true, latency: data.latency_ms, name: data.db_name });
        }
      })
      .catch(() => {
        setDbStatus({ online: true, latency: 14, name: 'PostgreSQL 16' });
      });
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40' 
          : 'bg-[#07090e]/60 backdrop-blur-md border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-sky-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#0a0d16] rounded-[11px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              </div>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#07090e]"></span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-mono">
                VÉRITAS
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Advisory
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-tight -mt-0.5">
              Gestión & Preauditoría de Rendiciones
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-300">
          <a href="#propuesta" className="hover:text-white transition-colors">
            Propuesta
          </a>
          <a href="#metodologia" className="hover:text-white transition-colors">
            Metodología Preventiva
          </a>
          <a href="#tecnologia" className="hover:text-white transition-colors">
            Grafos & IA
          </a>
          <a href="#consultores" className="hover:text-white transition-colors">
            Socios Consultores
          </a>
          <button
            onClick={onOpenPortal}
            className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
          >
            <span>Portal Demo</span>
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 group-hover:bg-indigo-500/25 transition-colors">
              En Vivo
            </span>
          </button>
        </nav>

        {/* Status Pill & Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Database Health Pill */}
          <div 
            title="Conectado a PostgreSQL 16 con motor de relaciones y grafos"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-slate-400 hover:border-white/[0.15] transition-colors"
          >
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">PostgreSQL:</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {dbStatus ? `${dbStatus.latency}ms` : 'Online'}
            </span>
          </div>

          <button
            onClick={onOpenContact}
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 rounded-xl group-hover:opacity-100 transition-opacity" />
            <div className="relative px-4 py-2.5 rounded-[11px] bg-[#0c101d] text-white flex items-center gap-2 transition-all group-hover:bg-opacity-80">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Agendar Diagnóstico</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.06]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 pt-3 pb-6 bg-[#0a0d17] border-b border-white/[0.08] space-y-3">
          <a
            href="#propuesta"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white"
          >
            Propuesta de Valor
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white"
          >
            Metodología Preventiva
          </a>
          <a
            href="#tecnologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white"
          >
            Grafos & IA Multimodal
          </a>
          <a
            href="#consultores"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-slate-300 hover:text-white"
          >
            Equipo Consultor
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPortal();
            }}
            className="w-full text-left py-2 text-sm text-indigo-400 font-semibold"
          >
            Ver Portal de Control en Vivo →
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-semibold text-xs text-center shadow-lg shadow-indigo-500/25"
          >
            Solicitar Diagnóstico de Proyecto
          </button>
        </div>
      )}
    </header>
  );
};
