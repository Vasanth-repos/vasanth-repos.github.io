import React from 'react';
import { Terminal, Target, Compass } from 'lucide-react';
import { MINDSET_PILLARS, PERSONAL_INFO } from '../../data/portfolioData';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

export const EngineeringMindset: React.FC = () => {
  return (
    <section id="mindset" className="relative py-20 bg-[#06070a] overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono dynamic-accent mb-2">
                <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg" />
                <span>01 // ENGINEERING PHILOSOPHY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                I don’t just build projects.<br />
                <span className="dynamic-accent text-glow">I question them.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-mono text-zinc-400">
                Discipline in requirements definition and algorithmic analysis separates durable software from disposable weekend hacks.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Content Layout: Pillars on Left, Editorial Poster Art on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 4 Mindset Questioning Cards with Staggered Motion */}
          <div className="lg:col-span-7 space-y-3.5">
            {MINDSET_PILLARS.map((pillar, idx) => (
              <Reveal key={idx} direction="left" delay={idx * 60} duration={500}>
                <SpotlightCard className="p-4 sm:p-5 hud-corner group">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold dynamic-accent shrink-0 group-hover:scale-110 group-hover:bg-[var(--accent-subtle)] transition-all">
                      0{idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold font-mono text-white group-hover:text-[var(--accent-color)] transition-colors">
                        {pillar.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}

            {/* Quote Callout Banner */}
            <Reveal direction="up" delay={250} duration={500}>
              <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--accent-color)]/15 via-white/5 to-transparent border border-white/10 flex items-center gap-3">
                <Terminal className="w-5 h-5 dynamic-accent shrink-0" />
                <div className="text-xs font-mono text-zinc-300">
                  <span className="font-bold text-white">Execution Rule:</span> "Progress is better than perfection. Solve edge cases upfront, ship verifiable code, and iterate relentlessly."
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Editorial Poster Showcase with Balanced Highlights */}
          <div className="lg:col-span-5 space-y-3">
            <Reveal direction="zoom" delay={150} duration={600}>
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#090b12] shadow-2xl group hud-corner hover:border-[var(--accent-color)]/50 transition-all duration-500">
                
                {/* Image Frame with Editorial Texture */}
                <div className="relative aspect-[4/4.5] overflow-hidden">
                  <img
                    src={PERSONAL_INFO.images.editorialStairs}
                    alt="Vasanthabalan B Editorial - Focus Build Create"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Vignette & Scanline Blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b12] via-transparent to-transparent opacity-75" />
                  <div className="scanline-overlay opacity-30" />

                  {/* Overlaid Typography Tag */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-zinc-300">
                    DISCIPLINE // FOCUS
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/15">
                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      "Progress is better than perfection."
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      Engineering discipline & continuous problem solving
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Bar */}
                <div className="px-4 py-2.5 bg-[#0e111a] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>EDITORIAL POSTER</span>
                  <span className="dynamic-accent font-semibold">VB // 2026</span>
                </div>
              </div>
            </Reveal>

            {/* Right Balancer Badge */}
            <Reveal direction="up" delay={200} duration={500}>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 dynamic-accent" />
                  <span className="text-zinc-300">Precision First</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-zinc-300">System Design</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
