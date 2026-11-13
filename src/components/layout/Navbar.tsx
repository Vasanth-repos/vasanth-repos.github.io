import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Play } from 'lucide-react';
import { ThemeAccentSwitcher } from '../ui/ThemeAccentSwitcher';
import { AudioToggle, playCyberSound } from '../ui/AudioToggle';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onStartTour?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onStartTour }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'ailab', label: 'AI Lab' },
    { id: 'skills', label: 'Skills' },
    { id: 'creative', label: 'Creative' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollspy
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollTo = (id: string) => {
    playCyberSound('click');
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060709]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2.5'
          : 'bg-[#060709]/60 backdrop-blur-md py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-10">
          
          {/* Left: Brand Monogram & Status Telemetry */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2.5 group text-left"
              aria-label="Scroll to top"
            >
              <div className="relative w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center font-mono font-bold text-sm tracking-tighter group-hover:border-[var(--accent-color)] transition-colors overflow-hidden shrink-0 shadow-inner">
                <span className="text-white">V</span>
                <span className="dynamic-accent">B</span>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] dynamic-accent-bg opacity-80" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-zinc-100 tracking-wider">
                  VASANTHABALAN
                </div>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 leading-tight">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                  </span>
                  <span>OPEN FOR ROLES</span>
                </div>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation Links (Flex Flow, Never Overlaps) */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0d1017]/90 border border-white/10 rounded-full px-2 py-1 shadow-md shadow-black/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'dynamic-accent-bg text-white font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Center-Compact: Medium/Large Screens (768px-1279px) */}
          <nav className="hidden md:flex xl:hidden items-center gap-0.5 bg-[#0d1017]/90 border border-white/10 rounded-full px-1.5 py-1 shadow-md">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-mono transition-all ${
                    isActive
                      ? 'dynamic-accent-bg text-white font-semibold'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollTo('contact')}
              className="px-2 py-0.5 rounded-full text-[11px] font-mono text-zinc-400 hover:text-white"
            >
              More...
            </button>
          </nav>

          {/* Right: Clean Utility Toolset (Ctrl+K, Theme, Audio, Mobile Toggle) */}
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Guided Tour Trigger Button */}
            {onStartTour && (
              <button
                onClick={() => {
                  playCyberSound('click');
                  onStartTour();
                }}
                className="hidden lg:flex items-center gap-1.5 px-2.5 h-8 rounded-lg border border-white/10 bg-white/5 hover:border-[var(--accent-color)] text-xs font-mono text-zinc-300 hover:text-white transition-colors shadow-sm"
                title="Start Smooth Guided Auto-Tour"
              >
                <Play className="w-3 h-3 dynamic-accent fill-current" />
                <span className="text-[11px]">Tour</span>
              </button>
            )}

            {/* Command Palette Button */}
            <button
              onClick={() => {
                playCyberSound('click');
                onOpenCommandPalette();
              }}
              className="flex items-center gap-1.5 px-2.5 h-8 rounded-lg border border-white/10 bg-white/5 hover:border-[var(--accent-color)] text-xs font-mono text-zinc-300 hover:text-white transition-colors shadow-sm"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 dynamic-accent" />
              <span className="hidden sm:inline text-[11px] text-zinc-400">Ctrl+K</span>
            </button>

            {/* Theme Switcher */}
            <ThemeAccentSwitcher />

            {/* Audio Toggle */}
            <AudioToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                playCyberSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[52px] bg-[#060709]/98 backdrop-blur-2xl border-b border-white/15 p-5 shadow-2xl transition-all max-h-[85vh] overflow-y-auto z-50">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">CIT CHENNAI</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`p-3 rounded-lg text-left text-xs font-mono transition-all flex items-center justify-between ${
                      isActive
                        ? 'dynamic-accent-bg text-white font-bold shadow-md'
                        : 'bg-white/5 border border-white/10 text-zinc-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] opacity-60">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
