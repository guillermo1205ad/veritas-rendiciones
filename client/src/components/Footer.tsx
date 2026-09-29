import React from 'react';
import { ShieldCheck, ExternalLink, Database } from 'lucide-react';

const LinkedInIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white font-mono">
                  VÉRITAS
                </span>
                <span className="text-xs text-indigo-400 block -mt-1 font-medium">
                  Preauditoría & Rendiciones de Proyectos
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              No vendemos licencias de software: gestionamos y blindamos las rendiciones financieras de empresas, universidades y fundaciones con un equipo experto de consultores, Grafos de Conocimiento e Inteligencia Artificial Multimodal.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                PostgreSQL 16 Relacional & Grafos
              </span>
              <span>•</span>
              <span>Reglas CORFO / ANID / FIA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#propuesta" className="hover:text-white transition-colors">
                  Propuesta de Valor
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodología Preventiva
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-white transition-colors">
                  Grafos & IA Multimodal
                </a>
              </li>
              <li>
                <a href="#portal-demo" className="hover:text-white transition-colors">
                  Portal de Control en Vivo
                </a>
              </li>
              <li>
                <a href="#consultores" className="hover:text-white transition-colors">
                  Equipo Consultor
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Solicitar Diagnóstico
                </a>
              </li>
            </ul>
          </div>

          {/* Founders & Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Socios Consultores
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-semibold text-white">Guillermo Peralta</div>
                <div className="text-slate-400 text-[11px]">Ing. Comercial · M.Sc. · Dr. (c) Cs. Computación</div>
                <a
                  href="https://www.linkedin.com/in/guillermo-peralta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 mt-0.5 text-[11px]"
                >
                  <LinkedInIcon className="w-3 h-3 text-[#0a66c2]" />
                  <span>Ver perfil de LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="pt-2 border-t border-slate-900">
                <div className="font-semibold text-white">Matías Cotroneo Urriola</div>
                <div className="text-slate-400 text-[11px]">Ing. Comercial · M.Sc. Ciencias Empresariales</div>
                <a
                  href="https://www.linkedin.com/in/matias-cotroneo-urriola-6368861a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 mt-0.5 text-[11px]"
                >
                  <LinkedInIcon className="w-3 h-3 text-[#0a66c2]" />
                  <span>Ver perfil de LinkedIn</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} VÉRITAS Preauditoría & Rendiciones. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Acuerdo de Confidencialidad (NDA) Estricto</span>
            <span>•</span>
            <span>Chile</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
