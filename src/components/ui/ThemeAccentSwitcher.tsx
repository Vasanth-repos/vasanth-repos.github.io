import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { playCyberSound } from './AudioToggle';

export type AccentTheme = 'crimson' | 'cyan' | 'emerald' | 'amber' | 'purple';

const THEMES: { id: AccentTheme; name: string; color: string }[] = [
  { id: 'crimson', name: 'Crimson Red (Default)', color: '#ff2a44' },
  { id: 'cyan', name: 'Cyber Cyan', color: '#00f0ff' },
  { id: 'emerald', name: 'Matrix Emerald', color: '#00ff9d' },
  { id: 'amber', name: 'Solar Amber', color: '#ffb703' },
  { id: 'purple', name: 'Neon Purple', color: '#c084fc' },
];

export const ThemeAccentSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<AccentTheme>('crimson');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vb_theme_accent') as AccentTheme | null;
    if (saved && ['crimson', 'cyan', 'emerald', 'amber', 'purple'].includes(saved)) {
      setTheme(saved);
    }
  }, []);

  const setTheme = (theme: AccentTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('vb_theme_accent', theme);
    document.documentElement.setAttribute('data-theme', theme);
    playCyberSound('click');
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          playCyberSound('click');
        }}
        title="Theme Accent Customizer"
        className="flex items-center gap-1.5 px-2.5 h-8 rounded-lg border border-white/10 bg-white/5 hover:border-[var(--accent-color)] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
        aria-label="Change theme accent color"
      >
        <span
          className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow-sm"
          style={{ backgroundColor: THEMES.find((t) => t.id === currentTheme)?.color }}
        />
        <Palette className="w-3.5 h-3.5 text-zinc-400" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 p-2 rounded-xl bg-[#0e111a] border border-white/15 shadow-2xl z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="text-[10px] font-mono text-zinc-400 px-2.5 py-1 uppercase tracking-wider border-b border-white/10 mb-1 flex items-center justify-between">
              <span>Theme Accent</span>
              <span className="text-[9px] dynamic-accent">CSS TOKENS</span>
            </div>
            <div className="space-y-1">
              {THEMES.map((theme) => {
                const isSelected = currentTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-mono text-left transition-colors ${
                      isSelected
                        ? 'bg-white/10 text-white font-bold'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: theme.color }}
                      />
                      <span>{theme.name}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 dynamic-accent" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
