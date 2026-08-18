import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { ThemeAccentSwitcher } from '../ui/ThemeAccentSwitcher';
import { AudioToggle, playCyberSound } from '../ui/AudioToggle';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'dsa', label: 'DSA' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'ailab', label: 'AI Lab' },
    { id: 'skills', label: 'Skills' },
    { id: 'creative', label: 'Creative' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scrollspy
      const sections = ['hero', ...navLinks.map((l) => l.id)];
      const scrollPos = window.scrollY + 200;

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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060709]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group text-left"
            aria-label="Scroll to top"
          >
            <div className="relative w-8 h-8 rounded bg-white/5 border border-white/15 flex items-center justify-center font-mono font-bold text-sm tracking-tighter group-hover:border-[var(--accent-color)] transition-colors overflow-hidden">
              <span className="text-white">V</span>
              <span className="dynamic-accent">B</span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] dynamic-accent-bg opacity-70" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-mono font-bold text-zinc-200 tracking-wider">
                VASANTHABALAN
              </div>
              <div className="text-[10px] font-mono text-zinc-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg animate-pulse" />
                <span>BUILDER_OS // v2.6</span>
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0d1017]/80 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'dynamic-accent-bg text-white font-medium shadow-md'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Side Tools: Status, Command Palette Button, Theme, Audio, Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 -ml-4" />
            <span>OPEN TO OPPORTUNITIES</span>
          </div>

          {/* Command Palette Button */}
          <button
            onClick={() => {
              playCyberSound('click');
              onOpenCommandPalette();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-white/10 bg-white/5 hover:border-[var(--accent-color)] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            title="Open Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5 dynamic-accent" />
            <span className="hidden sm:inline text-[11px] text-zinc-400">Ctrl+K</span>
          </button>

          {/* Theme & Audio Controls */}
          <ThemeAccentSwitcher />
          <AudioToggle />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              playCyberSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#060709]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">CIT CHENNAI</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border font-mono text-xs text-left transition-colors ${
                    activeSection === link.id
                      ? 'border-[var(--accent-color)] bg-white/10 text-white font-bold'
                      : 'border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] opacity-40">→</span>
                </button>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-white/10 border border-white/15 text-xs font-mono text-zinc-200 flex items-center justify-center gap-2"
              >
                <Command className="w-4 h-4 dynamic-accent" />
                Open Command Palette (Search)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
