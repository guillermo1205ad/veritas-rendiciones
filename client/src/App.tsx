import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { TechnologyExplainer } from './components/TechnologyExplainer';
import { PortalDemo } from './components/PortalDemo';
import { FoundersSection } from './components/FoundersSection';
import { TargetAudience } from './components/TargetAudience';
import { AuditIntakeForm } from './components/AuditIntakeForm';
import { Footer } from './components/Footer';

export function App() {
  const scrollToPortal = () => {
    const el = document.getElementById('portal-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenPortal={scrollToPortal} onOpenContact={scrollToContact} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero with Value Proposition and Trust Badges */}
        <Hero onOpenPortal={scrollToPortal} onOpenContact={scrollToContact} />

        {/* 2. The Problem & The Preventive Monthly Lifecycle */}
        <ProblemSolution />

        {/* 3. The Technology: Multimodal AI + Knowledge Graphs + Human-in-the-Loop */}
        <TechnologyExplainer />

        {/* 4. Live Simulation & Pre-audit Demo Portal */}
        <PortalDemo />

        {/* 5. Founders & Lead Advisors (Guillermo Peralta & Matías Cotroneo) */}
        <FoundersSection />

        {/* 6. Who this is for: Universities, Companies, Consultants */}
        <TargetAudience onOpenContact={scrollToContact} />

        {/* 7. Consultation & Diagnostic Intake Form (PostgreSQL) */}
        <AuditIntakeForm />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}

export default App;
