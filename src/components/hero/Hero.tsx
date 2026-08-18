import React, { useState } from 'react';
import { ArrowRight, Code2, ChevronDown, Layers } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { HeroTerminal } from './HeroTerminal';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { playCyberSound } from '../ui/AudioToggle';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleCardMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    playCyberSound('click');
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-tech-grid"
    >
      {/* Background Particle Mesh */}
      <ParticleCanvas />

      {/* Radial Gradient Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-color)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Headline & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Radar Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full dynamic-accent-bg animate-ping" />
              <span className="w-2 h-2 rounded-full dynamic-accent-bg -ml-4" />
              <span>CHENNAI INSTITUTE OF TECHNOLOGY // CSE</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.08]">
                BUILDING <span className="dynamic-accent text-glow">SYSTEMS.</span><br />
                SOLVING <span className="text-zinc-200">PROBLEMS.</span><br />
                EXPLORING <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">AI.</span>
              </h1>
            </div>

            {/* Identity & Mission Subtitle */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>, a Computer Science Engineering student bridging algorithmic rigor (400+ LeetCode) with production full-stack engineering and local AI agents.
              </p>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 flex items-center gap-2">
                <span className="dynamic-accent font-bold">// MOTTO:</span>
                <span className="text-zinc-300 italic">{PERSONAL_INFO.motto}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('projects')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg dynamic-accent-bg text-white font-mono text-xs font-semibold hover:brightness-110 shadow-lg shadow-[var(--accent-glow)] transition-all transform hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4" />
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('dsa')}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs font-medium hover:border-[var(--accent-color)] transition-all"
              >
                <Code2 className="w-4 h-4 dynamic-accent" />
                <span>DSA JOURNEY (400+)</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-4 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 font-mono text-xs hover:text-white transition-colors"
                title="Direct Contact"
              >
                GET IN TOUCH
              </button>
            </div>

            {/* Integrated Interactive Developer Terminal */}
            <div className="w-full pt-4">
              <HeroTerminal />
            </div>

          </div>

          {/* RIGHT COLUMN: Cyber Portrait & HUD Targeting Reticle */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-md group"
            >
              {/* Outer Glowing Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-color)] to-sky-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Central Card Container */}
              <div className="relative rounded-2xl bg-[#090b11] border border-white/20 overflow-hidden shadow-2xl hud-corner">
                
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e111a] border-b border-white/10 text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full dynamic-accent-bg animate-pulse" />
                    <span>SYS_ID: VB-2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <span>GRID: 13.0827° N, 80.2707° E</span>
                  </div>
                </div>

                {/* Primary Cyber Portrait Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={PERSONAL_INFO.images.heroHud}
                    alt="Vasanthabalan B - Software Engineer Poster"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Scrim & Scanline Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-transparent opacity-80" />
                  <div className="scanline-overlay opacity-40" />

                  {/* Dynamic HUD Target Overlay */}
                  <div className="absolute top-4 right-4 p-2 rounded bg-black/60 backdrop-blur-md border border-white/20 text-right">
                    <div className="text-[10px] font-mono text-zinc-400">STATUS</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">READY TO SHIP</div>
                  </div>

                  {/* Bottom Float Metadata */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#0a0d15]/80 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono font-bold text-white">VASANTHABALAN B</div>
                        <div className="text-[10px] font-mono text-zinc-400">CSE @ Chennai Institute of Tech</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono font-bold dynamic-accent">400+ LC</div>
                        <div className="text-[10px] font-mono text-zinc-400">350+ Skillrack</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Quick Stacks Footer */}
                <div className="p-3 bg-[#0c0f17] border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">C++</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">React</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">Flask</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">Ollama</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">LIVE HUD</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollTo('metrics')}
            className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors group"
            aria-label="Scroll to metrics"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase group-hover:text-[var(--accent-color)]">
              SCROLL DOWN
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-[var(--accent-color)]" />
          </button>
        </div>
      </div>
    </section>
  );
};
