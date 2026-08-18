import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';
import { playCyberSound } from '../ui/AudioToggle';
import { PERSONAL_INFO } from '../../data/portfolioData';

type TerminalTab = 'whoami' | 'metrics' | 'stack' | 'philosophy';

export const HeroTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TerminalTab>('whoami');
  const [copied, setCopied] = useState(false);

  const terminalTabs: { id: TerminalTab; label: string; command: string }[] = [
    { id: 'whoami', label: 'whoami', command: 'cat ~/vasanthabalan.nfo' },
    { id: 'metrics', label: 'metrics', command: 'run ./dsa_proof.sh' },
    { id: 'stack', label: 'stack', command: 'neofetch --core' },
    { id: 'philosophy', label: 'philosophy', command: 'cat ~/motto.md' },
  ];

  const content: Record<TerminalTab, React.ReactNode> = {
    whoami: (
      <div className="space-y-1.5 text-zinc-300 font-mono text-xs">
        <div className="text-zinc-500">// USER PROFILE IDENTITY</div>
        <div className="flex flex-wrap gap-x-4">
          <span className="text-zinc-400">user:</span>
          <span className="text-white font-semibold">vasanthabalan@builder-os</span>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <span className="text-zinc-400">role:</span>
          <span className="text-emerald-400">Computer Science Engineer // Aspiring SDE</span>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <span className="text-zinc-400">institute:</span>
          <span className="text-zinc-200">Chennai Institute of Technology</span>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <span className="text-zinc-400">focus:</span>
          <span className="dynamic-accent">DSA (C++) · Full-Stack (React/Node/Flask) · Local AI</span>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <span className="text-zinc-400">status:</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Active · Solving · Building · Competing
          </span>
        </div>
      </div>
    ),
    metrics: (
      <div className="space-y-1.5 text-zinc-300 font-mono text-xs">
        <div className="text-zinc-500">// VERIFIED BENCHMARKS & STATS</div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-zinc-400 text-[10px]">LEETCODE</span>
            <div className="text-base font-bold text-white">400+ Solved</div>
            <div className="text-[10px] text-zinc-400">Arrays, DP, Trees, Graphs</div>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-zinc-400 text-[10px]">SKILLRACK</span>
            <div className="text-base font-bold text-white">350+ Problems</div>
            <div className="text-[10px] text-zinc-400">C++ / Java Timed Runs</div>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-zinc-400 text-[10px]">PROJECTS</span>
            <div className="text-base font-bold text-white">10+ Built</div>
            <div className="text-[10px] text-zinc-400">Full-Stack, AI & IoT</div>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10">
            <span className="text-zinc-400 text-[10px]">RELIABILITY</span>
            <div className="text-base font-bold dynamic-accent">100% Demo Ready</div>
            <div className="text-[10px] text-zinc-400">Hackathon battle-tested</div>
          </div>
        </div>
      </div>
    ),
    stack: (
      <div className="space-y-1.5 text-zinc-300 font-mono text-xs">
        <div className="text-zinc-500">// PRIMARY TOOLCHAIN & RUNTIMES</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
          <div><span className="text-zinc-500">Core:</span> <span className="text-white">C++, Python, Java</span></div>
          <div><span className="text-zinc-500">Web:</span> <span className="text-white">TypeScript, React, Vite</span></div>
          <div><span className="text-zinc-500">Backend:</span> <span className="text-white">Node.js, Express, Flask</span></div>
          <div><span className="text-zinc-500">DB:</span> <span className="text-white">MongoDB, SQL, Supabase</span></div>
          <div><span className="text-zinc-500">AI:</span> <span className="dynamic-accent">Ollama, Qwen2.5, Gemini</span></div>
          <div><span className="text-zinc-500">Creative:</span> <span className="text-white">DaVinci Resolve Studio</span></div>
        </div>
      </div>
    ),
    philosophy: (
      <div className="space-y-2 text-zinc-300 font-mono text-xs">
        <div className="text-zinc-500">// CORE ENGINEERING MINDSET</div>
        <div className="p-2.5 rounded bg-white/5 border-l-2 border-[var(--accent-color)] italic text-zinc-200">
          "{PERSONAL_INFO.quote}"
        </div>
        <div className="text-[11px] text-zinc-400">
          "Focus on systems that endure. Code is merely the raw material; what matters is the discipline, latency, and correctness delivered to the user."
        </div>
        <div className="text-[10px] text-zinc-500 pt-1">
          // DISCIPLINE TODAY, FREEDOM TOMORROW.
        </div>
      </div>
    ),
  };

  const copyCurrent = () => {
    const tab = terminalTabs.find((t) => t.id === activeTab);
    if (!tab) return;
    navigator.clipboard.writeText(`$ ${tab.command}`);
    setCopied(true);
    playCyberSound('click');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl bg-[#0a0c13]/90 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden hud-corner">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f121b] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 ml-2">
            <TerminalIcon className="w-3 h-3 text-zinc-500" />
            <span>vasanthabalan@cit:~</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {terminalTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                playCyberSound('click');
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                activeTab === tab.id
                  ? 'bg-white/15 text-white font-medium shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}

          <button
            onClick={copyCurrent}
            className="p-1 rounded text-zinc-500 hover:text-zinc-200 hover:bg-white/5 ml-1 transition-colors"
            title="Copy command"
            aria-label="Copy terminal command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Command Prompt */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3 pb-2 border-b border-white/5">
          <span className="dynamic-accent font-bold">$</span>
          <span className="text-zinc-200">{terminalTabs.find((t) => t.id === activeTab)?.command}</span>
          <span className="w-2 h-3.5 dynamic-accent-bg inline-block animate-pulse ml-0.5" />
        </div>

        {/* Dynamic Tab Body */}
        <div className="min-h-[140px] flex items-center">
          {content[activeTab]}
        </div>
      </div>

      {/* Terminal Status Footer */}
      <div className="px-4 py-2 bg-[#08090f] border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg animate-pulse" />
          <span>SHELL: ZSH_STATION</span>
        </div>
        <span>UTF-8 // 60 FPS REACT RUNTIME</span>
      </div>
    </div>
  );
};
