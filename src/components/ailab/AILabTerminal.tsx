import React, { useState, useRef } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { playCyberSound } from '../ui/AudioToggle';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

interface CliHistory {
  command: string;
  output: React.ReactNode;
}

export const AILabTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CliHistory[]>([
    {
      command: 'ollama list',
      output: (
        <div className="space-y-0.5 text-zinc-300 text-[11px]">
          <div>NAME                     ID           SIZE     STATUS</div>
          <div>qwen2.5-coder:7b-instruct  7b2a91f3     4.7 GB   Active runtime</div>
          <div>gemini-2.5-flash-api     cloud-v2     remote   Primary fallback</div>
        </div>
      ),
    },
    {
      command: 'cat ~/ai-status.nfo',
      output: (
        <div className="space-y-0.5 text-emerald-400 text-[11px]">
          <div>[✔] Local Ollama Daemon: ACTIVE (Port: 11434)</div>
          <div>[✔] Privacy: 100% Zero-Telemetry Offline Mode</div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const handleRunCommand = (cmd: string) => {
    playCyberSound('click');
    const trimmed = cmd.trim().toLowerCase();
    let resNode: React.ReactNode;

    if (trimmed === 'help') {
      resNode = (
        <div className="space-y-0.5 text-zinc-300 text-[11px]">
          <div>Available commands: <span className="text-cyan-400">models</span>, <span className="text-cyan-400">status</span>, <span className="text-cyan-400">benchmark</span>, <span className="text-cyan-400">ast-test</span>, <span className="text-cyan-400">clear</span></div>
        </div>
      );
    } else if (trimmed === 'models' || trimmed === 'ollama list') {
      resNode = (
        <div className="space-y-0.5 text-zinc-300 text-[11px]">
          <div>• <span className="text-white font-bold">qwen2.5-coder:7b</span> (Local) | • <span className="text-white font-bold">gemini-2.5-flash</span> (API)</div>
        </div>
      );
    } else if (trimmed === 'status') {
      resNode = (
        <div className="space-y-0.5 text-emerald-400 text-[11px]">
          <div>AI LAB NODE: ● ONLINE | Ollama v0.5.4 | GPU Accel: Metal/CUDA</div>
        </div>
      );
    } else if (trimmed === 'benchmark') {
      resNode = (
        <div className="space-y-0.5 text-zinc-200 text-[11px]">
          <div className="text-emerald-400">Environment: Local Quantized Execution | Zero Telemetry</div>
        </div>
      );
    } else if (trimmed === 'ast-test') {
      resNode = (
        <div className="space-y-0.5 text-zinc-300 text-[11px]">
          <div className="text-emerald-400">[Synthesizer] Generated AST patch verified against test invariants with 0 errors.</div>
        </div>
      );
    } else if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      resNode = (
        <div className="text-rose-400 text-[11px]">
          Unknown: '{cmd}'. Type <span className="text-white underline cursor-pointer" onClick={() => handleRunCommand('help')}>help</span>.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: resNode }]);
    setInputVal('');
    setTimeout(() => {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <section id="ailab" className="relative py-20 bg-[#060709] border-t border-white/10 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>05 // EXPERIMENTS & LOCAL LLMS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                AI Lab &<br />
                <span className="text-cyan-400 text-glow">Local Intelligence.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-mono text-zinc-400">
                Exploring the frontiers of local offline models (Ollama + Qwen2.5-Coder), vector retrieval pipelines, and AI-assisted software engineering.
              </p>
            </div>
          </div>
        </Reveal>

        {/* AI Lab Main Grid: Terminal on Left, Capabilities on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Interactive CLI Sandbox */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal direction="left" duration={500} className="h-full">
              <div className="rounded-2xl bg-[#090c14] border border-white/15 shadow-2xl overflow-hidden hud-corner h-full flex flex-col justify-between">
                
                <div>
                  {/* Terminal Titlebar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e121d] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-xs font-mono text-zinc-400 ml-2">
                        ai-lab@vasanthabalan:~ (ollama-sandbox)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30">
                      ● LOCAL LLM ACTIVE
                    </span>
                  </div>

                  {/* Quick Command Buttons */}
                  <div className="flex flex-wrap items-center gap-1.5 p-2.5 bg-[#0a0d17] border-b border-white/5 text-xs font-mono">
                    <span className="text-zinc-500 text-[11px] mr-1">QUICK RUN:</span>
                    {['models', 'status', 'benchmark', 'ast-test', 'help'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => handleRunCommand(cmd)}
                        className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 hover:text-white transition-colors text-[10px]"
                      >
                        ${cmd}
                      </button>
                    ))}
                  </div>

                  {/* Terminal Scroll Output Window */}
                  <div className="p-4 font-mono text-xs h-60 overflow-y-auto space-y-2.5">
                    {history.map((h, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <span className="text-cyan-400 font-bold">$</span>
                          <span className="text-white">{h.command}</span>
                        </div>
                        <div className="pl-3 border-l border-white/10">{h.output}</div>
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>
                </div>

                {/* Terminal Interactive Input Field */}
                <div className="p-2.5 bg-[#0c101a] border-t border-white/10 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono font-bold pl-2">$</span>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && inputVal.trim()) {
                        handleRunCommand(inputVal);
                      }
                    }}
                    placeholder="Type an AI command (e.g. 'benchmark', 'models', 'help')..."
                    className="w-full bg-transparent text-xs font-mono text-white placeholder-zinc-500 focus:outline-none"
                  />
                  <button
                    onClick={() => inputVal.trim() && handleRunCommand(inputVal)}
                    className="p-1.5 rounded bg-white/10 hover:bg-cyan-500 hover:text-black text-zinc-300 transition-colors"
                    aria-label="Run command"
                  >
                    <Play className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: AI Highlights Matched in Height */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            
            <Reveal direction="right" delay={80} duration={500} className="flex-1">
              <SpotlightCard className="p-5 hud-corner space-y-2 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>OFFLINE-FIRST AI PARADIGM</span>
                  </div>
                  <h3 className="text-base font-bold font-mono text-white">
                    Zero-Leak Local Inference
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed mt-1">
                    By running quantized models (Qwen2.5-Coder 7B) through Ollama locally on consumer hardware, proprietary code stays 100% private with zero API costs.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>SECURITY: 100% AIR-GAPPED</span>
                  <span className="text-cyan-400 font-semibold">ZERO TELEMETRY</span>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal direction="right" delay={140} duration={500}>
              <SpotlightCard className="p-4 hud-corner space-y-2">
                <div className="text-xs font-mono text-zinc-400">CURRENT AI STACK</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[9px]">LOCAL RUNTIME</div>
                    <div className="text-white font-bold text-[11px] mt-0.5">Ollama Daemon</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[9px]">CODE LLM</div>
                    <div className="text-cyan-300 font-bold text-[11px] mt-0.5">Qwen2.5-Coder 7B</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[9px]">CLOUD FALLBACK</div>
                    <div className="text-white font-bold text-[11px] mt-0.5">Gemini 2.5 Flash</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[9px]">VECTOR STORE</div>
                    <div className="text-emerald-400 font-bold text-[11px] mt-0.5">ChromaDB Local</div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
};
