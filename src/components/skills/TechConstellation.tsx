import React from 'react';
import { Code2, Server, Database, Cpu, Wrench, Shield, Zap, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../../data/portfolioData';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const categoryIcons: Record<string, React.ReactNode> = {
  'Problem Solving & DSA': <Code2 className="w-5 h-5 dynamic-accent" />,
  'Full-Stack Development': <Server className="w-5 h-5 text-sky-400" />,
  'Data & Databases': <Database className="w-5 h-5 text-emerald-400" />,
  'Artificial Intelligence': <Cpu className="w-5 h-5 text-cyan-400" />,
  'Tools & Workflow': <Wrench className="w-5 h-5 text-purple-400" />,
};

export const TechConstellation: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 bg-[#080a10] border-t border-white/10 overflow-hidden">
      
      {/* Ambient background accent */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>06 // TECHNICAL RADAR</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                The Engineer Behind<br />
                <span className="text-purple-400 text-glow">The Systems.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-mono text-zinc-400">
                No meaningless percentage bars. Grouped by concrete engineering competencies and production application.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Top Grid: Portrait + Skills Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait Card + Telemetry Balancer Widgets */}
          <div className="lg:col-span-4 space-y-4">
            <Reveal direction="left" duration={600}>
              <div className="rounded-2xl bg-[#0b0e17] border border-white/15 overflow-hidden shadow-2xl hud-corner group hover:border-purple-400/40 transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={PERSONAL_INFO.images.studioDark}
                    alt="Vasanthabalan B Studio Portrait"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-transparent opacity-80" />
                  <div className="scanline-overlay opacity-30" />

                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/15">
                    <div className="text-xs font-mono font-bold text-white uppercase">
                      VASANTHABALAN B
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      Continuous learning, solving & engineering
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#0e111a] border-t border-white/10 text-xs font-mono text-zinc-400 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">ENGINEERING MODE:</span>
                    <span className="text-emerald-400 font-bold">ACTIVE DEPLOY</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">ACADEMIC BASE:</span>
                    <span className="text-white">CIT CHENNAI (CSE)</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Left Balancer Card 1: Core Principles */}
            <Reveal direction="up" delay={100} duration={500}>
              <SpotlightCard className="p-4 rounded-xl hud-corner space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>DEVELOPMENT PHILOSOPHY</span>
                </div>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  "Solve the algorithmic bottleneck first, structure clean data boundaries second, and optimize performance before deployment."
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>DISCIPLINE TODAY</span>
                  <span className="text-purple-400 font-semibold">FREEDOM TOMORROW</span>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Left Balancer Card 2: Competency Badges */}
            <Reveal direction="up" delay={150} duration={500}>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#0c0f18] border border-white/10 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-white font-bold text-[11px]">Rapid Prototyping</div>
                    <div className="text-[9px] text-zinc-500">24-48h Sprints</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#0c0f18] border border-white/10 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-white font-bold text-[11px]">System Reliability</div>
                    <div className="text-[9px] text-zinc-500">100% Demo Pass</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clustered Skills Cards */}
          <div className="lg:col-span-8 space-y-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 60} duration={500}>
                <SpotlightCard className="p-5 sm:p-6 hud-corner hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-lg bg-white/5 border border-white/10">
                        {categoryIcons[cat.title] || <Code2 className="w-4 h-4" />}
                      </span>
                      <div>
                        <h3 className="text-base font-bold font-mono text-white">{cat.title}</h3>
                        <p className="text-xs text-zinc-400 font-sans">{cat.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between hover:scale-[1.02]"
                      >
                        <div className="text-xs font-bold font-mono text-zinc-200">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 mt-1 flex items-center justify-between">
                          <span>{skill.level}</span>
                          {skill.tag && (
                            <span className="text-[9px] px-1 py-0.2 rounded bg-white/10 text-zinc-400">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
