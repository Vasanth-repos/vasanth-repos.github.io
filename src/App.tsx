import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { ProofStrip } from './components/metrics/ProofStrip';
import { EngineeringMindset } from './components/mindset/EngineeringMindset';
import { DsaCommandCenter } from './components/dsa/DsaCommandCenter';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { HackathonWarRoom } from './components/hackathons/HackathonWarRoom';
import { AILabTerminal } from './components/ailab/AILabTerminal';
import { TechConstellation } from './components/skills/TechConstellation';
import { CreativeStudio } from './components/creative/CreativeStudio';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { CustomCursor } from './components/ui/CustomCursor';
import { Toast, ToastMessage } from './components/ui/Toast';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, text, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#060709] text-zinc-100 selection:bg-[var(--accent-color)] selection:text-white relative font-sans">
      {/* Custom Precision HUD Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Progression */}
      <main>
        <Hero />
        <ProofStrip />
        <EngineeringMindset />
        <DsaCommandCenter />
        <ProjectsSection />
        <HackathonWarRoom />
        <AILabTerminal />
        <TechConstellation />
        <CreativeStudio />
        <AboutSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Telemetry Footer */}
      <Footer />

      {/* Ctrl + K Command Palette Launcher Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification System */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
};

export default App;
