import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { playCyberSound } from '../ui/AudioToggle';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playCyberSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040507] border-t border-white/10 py-12 text-zinc-400 font-mono text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-white text-xs">
              VB
            </div>
            <div>
              <div className="text-white font-bold">{PERSONAL_INFO.name}</div>
              <div className="text-[10px] text-zinc-500">{PERSONAL_INFO.role}</div>
            </div>
          </div>

          {/* Center Telemetry Status */}
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold">SYSTEM ONLINE</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">BUILD 2026.08</span>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors ml-2"
              title="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. Built with curiosity, algorithmic discipline + React.
          </div>

          <div className="flex items-center gap-4">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">Ctrl + K</kbd> anywhere</span>
            <span>SYSTEMS // SDE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
