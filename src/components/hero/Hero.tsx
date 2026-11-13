import React from 'react';
import { ArrowRight, Terminal as TerminalIcon, ChevronDown, Play, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';
import { playCyberSound } from '../ui/AudioToggle';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';
import { Reveal } from '../ui/Reveal';

interface HeroProps {
  onStartTour?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTour }) => {
  const scrollToNextSection = () => {
    playCyberSound('click');
    const target = document.getElementById('terminal') || document.getElementById('metrics');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-8 overflow-hidden bg-[#060709] bg-tech-grid"
    >
      {/* 60fps Particle Mesh Background */}
      <ParticleCanvas />

      {/* Cyber Glowing Orbs with Fluid Orbital Motion */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-color)]/15 rounded-full blur-[180px] pointer-events-none animate-pulse-orb" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-drift-a" />
      <div className="absolute top-1/3 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px] pointer-events-none animate-drift-b" />

      {/* Cyber Ambient Scanner Motion Sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-[var(--accent-color)]/15 to-transparent animate-light-sweep" />
      </div>

      {/* Main Viewport Content Frame - Balanced 2-Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Narrative Headline & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Core Discipline Badge */}
            <Reveal direction="down" duration={450}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full dynamic-accent-bg animate-pulse" />
                <span>COMPUTER SCIENCE ENGINEER // CIT CHENNAI</span>
              </div>
            </Reveal>

            {/* Punchy Editorial Headline */}
            <Reveal direction="left" delay={60} duration={500}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.08]">
                BUILDING SYSTEMS.<br />
                <span className="dynamic-accent text-glow">SOLVING PROBLEMS.</span><br />
                <span className="text-zinc-400">EXPLORING AI.</span>
              </h1>
            </Reveal>

            {/* Bio Subtitle */}
            <Reveal direction="left" delay={120} duration={500}>
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-sans leading-relaxed">
                I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Computer Science Engineering student at Chennai Institute of Technology focused on Data Structures & Algorithms, full-stack systems engineering, and practical AI integrations.
              </p>
            </Reveal>

            {/* Telemetry Proof Badges */}
            <Reveal direction="up" delay={140} duration={500}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono pt-1">
                <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 flex items-center gap-2 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg" />
                  <span>400+ LEETCODE SOLVED</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 flex items-center gap-2 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>350+ SKILLRACK</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 flex items-center gap-2 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>4+ CORE DOMAINS</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2 font-semibold backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AVAILABLE FOR SDE ROLES</span>
                </div>
              </div>
            </Reveal>

            {/* Action Buttons & Guided Tour Trigger */}
            <Reveal direction="up" delay={160} duration={500}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  onClick={() => playCyberSound('click')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl dynamic-accent-bg text-white font-mono text-xs font-bold hover:brightness-110 shadow-lg shadow-[var(--accent-glow)] transition-all transform hover:-translate-y-0.5"
                >
                  <span>EXPLORE SYSTEMS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {onStartTour && (
                  <button
                    onClick={() => {
                      playCyberSound('click');
                      onStartTour();
                    }}
                    className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs font-bold transition-all transform hover:-translate-y-0.5 shadow-md"
                    title="Start an automated, smooth guided downward tour of this portfolio"
                  >
                    <Play className="w-3.5 h-3.5 fill-current dynamic-accent" />
                    <span>GUIDED AUTO-TOUR</span>
                  </button>
                )}

                <a
                  href="#contact"
                  onClick={() => playCyberSound('click')}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs font-semibold hover:text-white transition-all transform hover:-translate-y-0.5"
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
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Right Column: Seamlessly Blended Hero Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center justify-end relative">
            <Reveal direction="fade" delay={120} duration={600} className="w-full max-w-sm sm:max-w-md relative flex items-center justify-center">
              
              {/* Atmospheric Cyber Back-Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[var(--accent-color)]/20 blur-[100px] pointer-events-none -z-10" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/15 blur-[90px] pointer-events-none -z-10" />

              {/* The Blended Silhouette (Cropped at pocket level, fading seamlessly into background) */}
              <div className="relative w-full flex justify-center items-end select-none">
                <img
                  src={PERSONAL_INFO.images.heroHud}
                  alt="Vasanthabalan B — Software Systems Engineer"
                  className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] filter contrast-[1.04]"
                  loading="eager"
                />

                {/* Seamless Bottom Gradient Blend into Hero Section Background */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060709] via-[#060709]/80 to-transparent pointer-events-none" />
              </div>

            </Reveal>
          </div>

        </div>
      </div>

      {/* Smooth Downward Scroll Indicator (Homepage Anchor) */}
      <div className="relative z-10 w-full pt-4 pb-2 flex flex-col items-center justify-center">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-all cursor-pointer focus:outline-none"
          aria-label="Smooth scroll down to system console and metrics"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1.5">
            <span>SCROLL TO DISCOVER DOSSIER</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-[var(--accent-color)] transition-colors shadow-inner">
            <span className="w-1.5 h-2.5 rounded-full dynamic-accent-bg animate-bounce" />
          </div>
        </button>
      </div>

    </section>
  );
};
