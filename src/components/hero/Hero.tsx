import React, { useState } from 'react';
import { ArrowRight, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';
import { HeroTerminal } from './HeroTerminal';
import { playCyberSound } from '../ui/AudioToggle';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { Reveal } from '../ui/Reveal';

export const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-[#060709] bg-tech-grid">
      
      {/* 60fps Particle Mesh Background */}
      <ParticleCanvas />

      {/* Cyber Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-color)]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative Headline & Interactive Terminal */}
          <div className="lg:col-span-7 space-y-6">
            
            <Reveal direction="down" duration={450}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full dynamic-accent-bg animate-pulse" />
                <span>{PERSONAL_INFO.institution} // COMPUTER SCIENCE</span>
              </div>
            </Reveal>

            {/* Punchy Editorial Headline */}
            <Reveal direction="left" delay={80} duration={550}>
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.08]">
                  BUILDING SYSTEMS.<br />
                  <span className="dynamic-accent text-glow">SOLVING PROBLEMS.</span><br />
                  <span className="text-zinc-400">EXPLORING AI.</span>
                </h1>
              </div>
            </Reveal>

            {/* Bio Subtitle */}
            <Reveal direction="left" delay={140} duration={550}>
              <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-sans leading-relaxed">
                I'm <strong className="text-white font-semibold">Vasanthabalan B</strong>, a CS Engineer focused on competitive algorithmic problem solving (400+ LeetCode), full-stack software development, and offline local LLM architectures.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={200} duration={550}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#projects"
                  onClick={() => playCyberSound('click')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg dynamic-accent-bg text-white font-mono text-xs font-bold hover:brightness-110 shadow-lg shadow-[var(--accent-glow)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>EXPLORE SYSTEMS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  onClick={() => playCyberSound('click')}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs font-semibold hover:text-white transition-all transform hover:-translate-y-0.5"
                >
                  <TerminalIcon className="w-4 h-4 dynamic-accent" />
                  <span>CONTACT ME</span>
                </a>

                {/* Social Quick Links */}
                <div className="flex items-center gap-2 ml-1">
                  <a
                    href={PERSONAL_INFO.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Live Interactive Hero Terminal */}
            <Reveal direction="up" delay={250} duration={600}>
              <div className="pt-2">
                <HeroTerminal />
              </div>
            </Reveal>

          </div>

          {/* Right Column: 3D Tilt HUD Portrait Card with Balancer Stats */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Reveal direction="zoom" delay={150} duration={600}>
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="relative w-full max-w-sm sm:max-w-md rounded-2xl p-1 bg-gradient-to-b from-white/20 via-[var(--accent-color)]/40 to-transparent shadow-2xl group hud-corner"
              >
                
                {/* Inner Card Frame */}
                <div className="relative rounded-2xl bg-[#0a0c13] overflow-hidden border border-white/10">
                  
                  {/* Portrait Media with HUD Reticle */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-black">
                    <img
                      src={PERSONAL_INFO.images.heroHud}
                      alt="Vasanthabalan B HUD Poster"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient & Scanline Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c13] via-transparent to-transparent opacity-80" />
                    <div className="scanline-overlay opacity-30" />

                    {/* HUD Targeting Telemetry */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                      <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/20">
                        TARGET: SDE // CIT CHENNAI
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400 font-bold px-2 py-0.5 rounded bg-black/70 border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        ONLINE
                      </span>
                    </div>

                    {/* Lower Card Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/15">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div>
                          <div className="text-white font-bold tracking-wider uppercase">VASANTHABALAN B</div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">Focus. Build. Create.</div>
                        </div>
                        <Sparkles className="w-4 h-4 dynamic-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Footer Strip on Card */}
                  <div className="p-3.5 bg-[#0e111a] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg" />
                      <span>400+ LEETCODE // C++ STL</span>
                    </span>
                    <span className="text-zinc-500">SYS: VERIFIED</span>
                  </div>

                </div>

              </div>
            </Reveal>

            {/* Quick Balancer Mini Pill */}
            <Reveal direction="up" delay={250} duration={500} className="w-full max-w-sm sm:max-w-md mt-3">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>350+ Skillrack Timed Solutions</span>
                </span>
                <span className="dynamic-accent font-semibold">10+ Shipped Apps</span>
              </div>
            </Reveal>
          </div>

        </div>

      </div>

    </section>
  );
};
