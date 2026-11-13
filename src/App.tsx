import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { HeroTerminal } from './components/hero/HeroTerminal';
import { ProofStrip } from './components/metrics/ProofStrip';
import { TechMarquee } from './components/ui/TechMarquee';
import { EngineeringMindset } from './components/mindset/EngineeringMindset';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AILabTerminal } from './components/ailab/AILabTerminal';
import { TechConstellation } from './components/skills/TechConstellation';
import { AboutSection } from './components/about/AboutSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { CustomCursor } from './components/ui/CustomCursor';
import { Toast, ToastMessage } from './components/ui/Toast';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { AutoTourGuide } from './components/ui/AutoTourGuide';
import { Reveal } from './components/ui/Reveal';

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, text, type }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const startTour = () => {
    setTourActive(true);
    showToast('Auto-Tour Active: Smooth controlled downward presentation', 'info');
  };

  const closeTour = () => {
    setTourActive(false);
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
    <div className="min-h-screen bg-[#060709] text-zinc-100 selection:bg-[var(--accent-color)] selection:text-white relative font-sans overflow-x-hidden">
      {/* Scroll Progress Bar at the top of the viewport */}
      <ScrollProgress />

      {/* Custom Precision HUD Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onStartTour={startTour}
      />

      {/* Main Content Progression */}
      <main>
        {/* Full Cinematic Homepage Landing with Punchy Headline & Visual Design */}
        <Hero onStartTour={startTour} />

        {/* Dedicated Interactive Developer Terminal Section */}
        <section id="terminal" className="relative py-14 lg:py-20 bg-[#07090e] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal direction="up" duration={450}>
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-8 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg animate-pulse" />
                  <span className="uppercase tracking-widest text-zinc-300 font-bold">
                    SYSTEM RUNTIME // LIVE DIAGNOSTIC CONSOLE
                  </span>
                </div>
                <div className="hidden sm:block text-[11px] text-zinc-400 font-mono">
                  ACTIVE HOST: VASANTH@CIT-CHENNAI · LATENCY: 0.8ms
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={80} duration={500}>
              <HeroTerminal />
            </Reveal>
          </div>
        </section>

        {/* Verified Proof Metrics Strip */}
        <ProofStrip />

        {/* Continuous Tech Stack Marquee */}
        <TechMarquee />

        {/* Engineering Mindset & Pillars */}
        <EngineeringMindset />

        {/* Flagship Projects & Case Study Modal */}
        <ProjectsSection />

        {/* AI Lab Terminal & Quantized Model Sandbox */}
        <AILabTerminal />

        {/* Technical Skill Radar & Constellation */}
        <TechConstellation />

        {/* About Trajectory & Roadmap */}
        <AboutSection />

        {/* Transmission & Contact Form */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Telemetry Footer */}
      <Footer />

      {/* Controlled Downward Auto-Tour Guide Controller */}
      <AutoTourGuide
        isActive={tourActive}
        onClose={closeTour}
        onActivate={startTour}
      />

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
