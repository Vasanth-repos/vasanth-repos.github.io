import React, { useState } from 'react';
import { Code2, ChevronRight, Zap, Brain } from 'lucide-react';
import { DSA_TOPICS } from '../../data/dsaTopics';
import { AlgorithmVisualizer } from './AlgorithmVisualizer';
import { playCyberSound } from '../ui/AudioToggle';
import { DsaTopic } from '../../types';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

export const DsaCommandCenter: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<DsaTopic>(DSA_TOPICS[0]);

  const handleSelectTopic = (topic: DsaTopic) => {
    playCyberSound('click');
    setSelectedTopic(topic);
  };

  return (
    <section id="dsa" className="relative py-20 bg-[#07090f] border-t border-white/10 overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>02 // ALGORITHMIC RIGOR</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                "I Like Problems That<br />
                <span className="dynamic-accent text-glow">Fight Back."</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-mono text-zinc-400">
                DSA isn't just an interview prep tool — it is the engineering crucible where time complexity, memory constraints, and edge case resilience are forged.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Top Badges & Metric Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Reveal direction="up" delay={50} duration={500}>
            <SpotlightCard className="p-4 sm:p-5 flex items-center justify-between hud-corner h-full">
              <div>
                <div className="text-[11px] font-mono text-zinc-400">PRIMARY PLATFORM</div>
                <div className="text-2xl font-extrabold font-mono text-white mt-0.5">400+ Solved</div>
                <div className="text-xs text-emerald-400 font-mono mt-0.5">LeetCode // Global Problem Vault</div>
              </div>
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
                <Code2 className="w-5 h-5" />
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal direction="up" delay={120} duration={500}>
            <SpotlightCard className="p-4 sm:p-5 flex items-center justify-between hud-corner h-full">
              <div>
                <div className="text-[11px] font-mono text-zinc-400">SPEED & SPEED ACCURACY</div>
                <div className="text-2xl font-extrabold font-mono text-white mt-0.5">350+ Problems</div>
                <div className="text-xs text-sky-400 font-mono mt-0.5">Skillrack // Time-Bounded Tests</div>
              </div>
              <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-400">
                <Zap className="w-5 h-5" />
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal direction="up" delay={190} duration={500}>
            <SpotlightCard className="p-4 sm:p-5 flex items-center justify-between hud-corner h-full">
              <div>
                <div className="text-[11px] font-mono text-zinc-400">CORE LANGUAGE</div>
                <div className="text-2xl font-extrabold font-mono text-white mt-0.5">C++ & Java</div>
                <div className="text-xs dynamic-accent font-mono mt-0.5">STL, Vectors, Priority Queues</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white">
                <Brain className="w-5 h-5" />
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        {/* Main Grid: Interactive Topics List on Left, Active Topic Deep Dive on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Topics Navigation List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            <div className="text-xs font-mono text-zinc-400 pb-1 px-1 flex items-center justify-between">
              <span>EXPLORE ALGORITHMIC DOMAINS</span>
              <span>8 CLUSTERS</span>
            </div>

            <div className="space-y-1.5 flex-1">
              {DSA_TOPICS.map((topic) => {
                const isSelected = selectedTopic.id === topic.id;
                return (
                  <button
                    key={topic.id}
                    onClick={() => handleSelectTopic(topic)}
                    className={`w-full p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between font-mono ${
                      isSelected
                        ? 'bg-gradient-to-r from-white/10 to-white/5 border-[var(--accent-color)] text-white shadow-md'
                        : 'bg-[#0b0e17] border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-zinc-100">{topic.title}</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-zinc-400">
                          {topic.count}+
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">{topic.category}</div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'dynamic-accent translate-x-1' : 'text-zinc-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Topic Deep-Dive HUD Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal direction="zoom" duration={500} className="h-full">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0b0e17] border border-white/15 shadow-2xl hud-corner h-full flex flex-col justify-between">
                
                <div>
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        ACTIVE CLUSTER // {selectedTopic.category}
                      </span>
                      <h3 className="text-2xl font-bold font-mono text-white mt-0.5">
                        {selectedTopic.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold">
                        {selectedTopic.count}+ Solved
                      </span>
                    </div>
                  </div>

                  {/* Difficulty Breakdown Meter */}
                  <div className="py-4 border-b border-white/5">
                    <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center justify-between">
                      <span>PROBLEM DIFFICULTY DISTRIBUTION</span>
                      <span className="text-zinc-500">
                        Easy: {selectedTopic.difficulty.easy} | Med: {selectedTopic.difficulty.medium} | Hard: {selectedTopic.difficulty.hard}
                      </span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-black/50 overflow-hidden flex p-0.5 border border-white/10">
                      <div
                        style={{ width: `${(selectedTopic.difficulty.easy / selectedTopic.count) * 100}%` }}
                        className="h-full bg-emerald-400 rounded-l-full transition-all duration-500"
                        title={`Easy: ${selectedTopic.difficulty.easy}`}
                      />
                      <div
                        style={{ width: `${(selectedTopic.difficulty.medium / selectedTopic.count) * 100}%` }}
                        className="h-full bg-amber-400 transition-all duration-500"
                        title={`Medium: ${selectedTopic.difficulty.medium}`}
                      />
                      <div
                        style={{ width: `${(selectedTopic.difficulty.hard / selectedTopic.count) * 100}%` }}
                        className="h-full bg-rose-500 rounded-r-full transition-all duration-500"
                        title={`Hard: ${selectedTopic.difficulty.hard}`}
                      />
                    </div>
                  </div>

                  {/* Key Solved Patterns */}
                  <div className="py-4 border-b border-white/5">
                    <div className="text-xs font-mono text-zinc-400 mb-2">MASTERED ALGORITHMIC PATTERNS</div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTopic.solvedPatterns.map((pattern, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                        >
                          ✓ {pattern}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Representative Problem & Target Invariants */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-b border-white/5 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-zinc-500 text-[10px]">BENCHMARK PROBLEM</div>
                      <div className="text-white font-medium mt-1">{selectedTopic.representativeProblem}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-zinc-500 text-[10px]">TIME / SPACE PROFILE</div>
                      <div className="dynamic-accent font-medium mt-1">{selectedTopic.timeComplexityFocus}</div>
                    </div>
                  </div>
                </div>

                {/* Notes & Takeaway */}
                <div className="pt-4 flex items-start gap-3">
                  <Brain className="w-5 h-5 dynamic-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-300 font-mono leading-relaxed">
                    <span className="text-white font-bold">Engineering Invariant:</span> {selectedTopic.notes}
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* Live Interactive Algorithm Visualizer Component */}
        <Reveal direction="up" delay={150} duration={600}>
          <div className="mt-10">
            <AlgorithmVisualizer />
          </div>
        </Reveal>

      </div>
    </section>
  );
};
