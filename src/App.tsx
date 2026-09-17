import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LiveEmiDemo } from './components/LiveEmiDemo';
import { SkillsSection } from './components/SkillsSection';
import { CyberTerminal } from './components/CyberTerminal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenTerminal = () => {
    const termEl = document.getElementById('cyber-ops');
    if (termEl) {
      termEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToEmi = () => {
    const emiEl = document.getElementById('emi-tool');
    if (emiEl) {
      emiEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      {/* Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Hero Section */}
      <Hero 
        onOpenTerminal={handleOpenTerminal}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* About & Education Journey */}
      <AboutSection />

      {/* Featured Projects & Repositories */}
      <ProjectsSection onScrollToEmi={handleScrollToEmi} />

      {/* Working Interactive Nepalese Rupee EMI Calculator Tool */}
      <LiveEmiDemo />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Interactive Cyber Security Terminal Console */}
      <CyberTerminal />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
