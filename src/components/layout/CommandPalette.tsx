import React, { useState, useEffect, useRef } from 'react';
import { Search, Code, Cpu, Terminal, Compass, Mail, Sparkles, X, Layers, Flame, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCyberSound } from '../ui/AudioToggle';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Social' | 'Easter Eggs';
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'error') => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onShowToast }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToSection = (id: string) => {
    onClose();
    playCyberSound('open');
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socialLinks.email);
    onClose();
    playCyberSound('success');
    onShowToast(`Copied ${PERSONAL_INFO.socialLinks.email} to clipboard!`, 'success');
  };

  const triggerConfetti = () => {
    onClose();
    playCyberSound('success');
    onShowToast('🎉 System unlocked! Building solutions...', 'success');
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff2a44', '#00f0ff', '#ffffff', '#ffb703'],
    });
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-projects',
      title: 'Go to Featured Projects',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-rose-400" />,
      shortcut: 'G P',
      action: () => scrollToSection('projects'),
    },
    {
      id: 'nav-dsa',
      title: 'Go to DSA Command Center',
      category: 'Navigation',
      icon: <Code className="w-4 h-4 text-emerald-400" />,
      shortcut: 'G D',
      action: () => scrollToSection('dsa'),
    },
    {
      id: 'nav-hackathons',
      title: 'Go to Hackathon War Room',
      category: 'Navigation',
      icon: <Flame className="w-4 h-4 text-amber-400" />,
      shortcut: 'G H',
      action: () => scrollToSection('hackathons'),
    },
    {
      id: 'nav-ailab',
      title: 'Go to AI Lab & Local LLMs',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      shortcut: 'G A',
      action: () => scrollToSection('ailab'),
    },
    {
      id: 'nav-skills',
      title: 'Go to Technical Radar / Skills',
      category: 'Navigation',
      icon: <Compass className="w-4 h-4 text-purple-400" />,
      shortcut: 'G S',
      action: () => scrollToSection('skills'),
    },
    {
      id: 'nav-about',
      title: 'Go to About / Trajectory',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-blue-400" />,
      shortcut: 'G U',
      action: () => scrollToSection('about'),
    },
    {
      id: 'nav-contact',
      title: 'Go to Contact Form',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-pink-400" />,
      shortcut: 'G C',
      action: () => scrollToSection('contact'),
    },
    {
      id: 'act-email',
      title: `Copy Email (${PERSONAL_INFO.socialLinks.email})`,
      category: 'Actions',
      icon: <Mail className="w-4 h-4 text-indigo-400" />,
      shortcut: 'C E',
      action: copyEmail,
    },
    {
      id: 'soc-github',
      title: 'Open GitHub Profile',
      category: 'Social',
      icon: <GithubIcon className="w-4 h-4 text-zinc-300" />,
      action: () => {
        window.open(PERSONAL_INFO.socialLinks.github, '_blank');
        onClose();
      },
    },
    {
      id: 'soc-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: <LinkedinIcon className="w-4 h-4 text-sky-400" />,
      action: () => {
        window.open(PERSONAL_INFO.socialLinks.linkedin, '_blank');
        onClose();
      },
    },
    {
      id: 'east-confetti',
      title: 'Celebrate / Deploy Mode',
      category: 'Easter Eggs',
      icon: <Sparkles className="w-4 h-4 text-amber-300" />,
      action: triggerConfetti,
    },
  ];

  const filtered = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      playCyberSound('open');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
        playCyberSound('hover');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
        playCyberSound('hover');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Command Palette Modal */}
      <div className="relative w-full max-w-xl bg-[#0b0e15] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 hud-corner animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-white/10 bg-[#101420]">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section... (e.g. 'projects', 'dsa', 'copy email')"
            className="w-full bg-transparent px-3 py-4 text-sm text-zinc-100 placeholder-zinc-500 font-mono focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-zinc-500 hover:text-zinc-300 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[11px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-white/5 border border-white/10 ml-2">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 font-mono text-xs">
              <Terminal className="w-8 h-8 mx-auto mb-2 opacity-40" />
              No commands found matching "{query}"
            </div>
          ) : (
            filtered.map((cmd, idx) => (
              <button
                key={cmd.id}
                onClick={() => cmd.action()}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors font-mono text-xs ${
                  selectedIndex === idx
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded bg-white/5 border border-white/10">
                    {cmd.icon}
                  </span>
                  <div>
                    <div className="text-zinc-200 font-medium">{cmd.title}</div>
                    <div className="text-[10px] text-zinc-500">{cmd.category}</div>
                  </div>
                </div>
                {cmd.shortcut && (
                  <span className="text-[10px] text-zinc-500 font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                    {cmd.shortcut}
                  </span>
                )}
              </button>
            ))
          )}
        </div>

        {/* Modal Footer Helper */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#080a10] border-t border-white/10 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>Ctrl + K Quick Launcher</span>
        </div>
      </div>
    </div>
  );
};
