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
        <div className="space-y-1 text-zinc-300">
          <div>NAME                     ID           SIZE     MODIFIED</div>
          <div>qwen2.5-coder:7b-instruct  7b2a91f3     4.7 GB   Active runtime</div>
          <div>deepseek-r1:8b           d4f19b20     4.9 GB   Offline testing</div>
          <div>gemini-2.5-flash-api     cloud-v2     remote   Primary fallback</div>
        </div>
      ),
    },
    {
      command: 'cat ~/ai-status.nfo',
      output: (
        <div className="space-y-1 text-emerald-400">
          <div>[✔] Local Ollama Daemon: ACTIVE (Port: 11434)</div>
          <div>[✔] Inference Engine: Quantized 4-bit CUDA/Metal</div>
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
        <div className="space-y-1 text-zinc-300">
          <div>Available AI Lab commands:</div>
          <div>  <span className="text-cyan-400">models</span>       - List installed local LLMs</div>
          <div>  <span className="text-cyan-400">status</span>       - Check Ollama daemon and inference stats</div>
          <div>  <span className="text-cyan-400">benchmark</span>    - Run token/sec generation test</div>
          <div>  <span className="text-cyan-400">ast-test</span>     - Simulate local AST code repair</div>
          <div>  <span className="text-cyan-400">clear</span>        - Clear terminal history</div>
        </div>
      );
    } else if (trimmed === 'models' || trimmed === 'ollama list') {
      resNode = (
        <div className="space-y-1 text-zinc-300">
          <div>• <span className="text-white font-bold">qwen2.5-coder:7b</span> - Code generation & refactoring (Default local)</div>
          <div>• <span className="text-white font-bold">gemini-2.5-flash</span> - Cloud fallback via API</div>
          <div>• <span className="text-white font-bold">chromadb-embeddings</span> - Local AST vector search</div>
        </div>
      );
    } else if (trimmed === 'status') {
      resNode = (
        <div className="space-y-1 text-emerald-400">
          <div>AI LAB NODE STATUS: ● ONLINE</div>
          <div className="text-zinc-400">Runtime: Ollama v0.5.4 | GPU Accel: Metal/CUDA enabled | Memory footprint: 4.8GB</div>
        </div>
      );
    } else if (trimmed === 'benchmark') {
      resNode = (
        <div className="space-y-1 text-zinc-200">
          <div>Running 256-token prompt on Qwen2.5-Coder (7B)...</div>
          <div className="text-emerald-400">Output: 26.4 tokens/second | Time to First Token (TTFT): 112ms | Memory: 4.6 GB</div>
          <div className="text-zinc-500">// Benchmarked on local workstation hardware</div>
        </div>
      );
    } else if (trimmed === 'ast-test') {
      resNode = (
        <div className="space-y-1 text-zinc-300">
          <div className="text-amber-400">[AST Scanner] Detected off-by-one error in binary search: mid = low + (high-low)/2; high = mid - 1</div>
          <div className="text-emerald-400">[Synthesizer] Generated patch verified against test invariants with 0 errors.</div>
        </div>
      );
    } else if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      resNode = (
        <div className="text-rose-400">
          Command not recognized: '{cmd}'. Type <span className="text-white underline cursor-pointer" onClick={() => handleRunCommand('help')}>help</span> for available commands.
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
    <section id="ailab" className="relative py-24 bg-[#060709] border-t border-white/10 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
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

        {/* AI Lab Main Grid: Terminal on Left, Highlights & Capabilities on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive CLI Sandbox */}
          <div className="lg:col-span-7">
            <Reveal direction="left" duration={600}>
              <div className="rounded-2xl bg-[#090c14] border border-white/15 shadow-2xl overflow-hidden hud-corner">
                
                {/* Terminal Titlebar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0e121d] border-b border-white/10">
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
                <div className="flex flex-wrap items-center gap-1.5 p-3 bg-[#0a0d17] border-b border-white/5 text-xs font-mono">
                  <span className="text-zinc-500 text-[11px] mr-1">QUICK RUN:</span>
                  {['models', 'status', 'benchmark', 'ast-test', 'help'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleRunCommand(cmd)}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 hover:text-white transition-colors text-[11px]"
                    >
                      ${cmd}
                    </button>
                  ))}
                </div>

                {/* Terminal Scroll Output Window */}
                <div className="p-5 font-mono text-xs max-h-80 overflow-y-auto space-y-4">
                  {history.map((h, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span className="text-cyan-400 font-bold">$</span>
                        <span className="text-white">{h.command}</span>
                      </div>
                      <div className="pl-4 border-l border-white/10">{h.output}</div>
                    </div>
                  ))}
                  <div ref={terminalEndRef} />
                </div>

                {/* Terminal Interactive Input Field */}
                <div className="p-3 bg-[#0c101a] border-t border-white/10 flex items-center gap-2">
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
                    <Play className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Column: AI Philosophy & Architecture Highlights */}
          <div className="lg:col-span-5 space-y-4">
            
            <Reveal direction="right" delay={100} duration={500}>
              <SpotlightCard className="p-6 hud-corner space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                  <span>OFFLINE-FIRST AI PARADIGM</span>
                </div>
                <h3 className="text-lg font-bold font-mono text-white">
                  Zero-Leak Local Inference
                </h3>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  By running quantized models (Qwen2.5-Coder 7B) through Ollama locally on consumer hardware, proprietary code stays 100% private, zero token API costs are incurred, and development workflows work uninterrupted during outages.
                </p>
              </SpotlightCard>
            </Reveal>

            <Reveal direction="right" delay={200} duration={500}>
              <SpotlightCard className="p-6 hud-corner space-y-3">
                <div className="text-xs font-mono text-zinc-400">CURRENT AI STACK</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">LOCAL RUNTIME</div>
                    <div className="text-white font-bold mt-0.5">Ollama Daemon</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">CODE LLM</div>
                    <div className="text-cyan-300 font-bold mt-0.5">Qwen2.5-Coder 7B</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">CLOUD FALLBACK</div>
                    <div className="text-white font-bold mt-0.5">Gemini 2.5 Flash</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">VECTOR STORE</div>
                    <div className="text-emerald-400 font-bold mt-0.5">ChromaDB Local</div>
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
