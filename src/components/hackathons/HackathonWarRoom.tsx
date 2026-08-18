import React from 'react';
import { Flame } from 'lucide-react';
import { HACKATHON_SPRINT } from '../../data/portfolioData';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

export const HackathonWarRoom: React.FC = () => {
  const sprintStages = [
    { name: 'IDEA', desc: 'Identify genuine user pain points' },
    { name: 'VALIDATE', desc: 'Feasibility & tech differentiator' },
    { name: 'PROTOTYPE', desc: 'Core algorithmic spine' },
    { name: 'BUILD', desc: 'Full-stack integration' },
    { name: 'BREAK & DEBUG', desc: 'Stress test under heavy edge cases' },
    { name: 'SHIP & DEMO', desc: '100% reliable live judging flow' },
  ];

  return (
    <section id="hackathons" className="relative py-24 bg-[#080a10] border-t border-white/10 overflow-hidden">
      
      {/* Glow accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>04 // RAPID PROTOTYPING</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                Built Under<br />
                <span className="text-amber-400 text-glow">Pressure.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-mono text-zinc-400">
                Hackathons are where theory meets execution. 24–48 hour non-stop sprints turning raw problem statements into working, demoable software.
              </p>
            </div>
          </div>
        </Reveal>

        {/* The 6-Stage Hackathon Build Pipeline Bar */}
        <Reveal direction="up" delay={100} duration={600}>
          <div className="mb-14 p-6 rounded-2xl bg-[#0c0f18] border border-white/15 hud-corner">
            <div className="text-xs font-mono text-zinc-400 mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>THE 24-HOUR BATTLE LOOP</span>
              </span>
              <span className="text-zinc-500">SPEED × RELIABILITY</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {sprintStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between space-y-2 hover:border-amber-400/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-amber-400">
                    <span>PHASE 0{idx + 1}</span>
                    {idx < sprintStages.length - 1 && <span className="opacity-40">→</span>}
                  </div>
                  <div className="text-xs font-bold font-mono text-white">{stage.name}</div>
                  <div className="text-[10px] text-zinc-400 leading-snug">{stage.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Hackathon Build Dossiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HACKATHON_SPRINT.map((hack, idx) => (
            <Reveal key={hack.id} direction="up" delay={idx * 100} duration={500}>
              <SpotlightCard className="p-6 hud-corner flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300">
                      {hack.timeframe}
                    </span>
                    <span className="text-zinc-500">{hack.track}</span>
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white">
                    {hack.title}
                  </h3>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-zinc-300">
                    <span className="text-amber-400 font-bold">PROJECT: </span>
                    {hack.projectBuilt}
                  </div>

                  <div className="space-y-2 text-xs font-mono text-zinc-400">
                    <div>
                      <span className="text-zinc-500">Critical Challenge: </span>
                      <span className="text-zinc-300">{hack.keyChallenge}</span>
                    </div>
                    <div>
                      <span className="text-emerald-400">Key Takeaway: </span>
                      <span className="text-zinc-300">{hack.takeaway}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {hack.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
