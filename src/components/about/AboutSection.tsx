import React from 'react';
import { User, GraduationCap, Code2, Rocket, Cpu, Briefcase, MapPin } from 'lucide-react';
import { CAREER_TRAJECTORY } from '../../data/portfolioData';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const stepIcons = [
  <GraduationCap className="w-5 h-5" key="1" />,
  <Code2 className="w-5 h-5" key="2" />,
  <Rocket className="w-5 h-5" key="3" />,
  <Cpu className="w-5 h-5" key="4" />,
  <Briefcase className="w-5 h-5" key="5" />,
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#080a10] border-t border-white/10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono dynamic-accent mb-2">
                <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg" />
                <span>08 // BACKGROUND & TRAJECTORY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                A student. A builder.<br />
                <span className="dynamic-accent text-glow">A work in progress.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-mono text-zinc-400">
                Building stronger fundamentals, shipping better software architectures, and turning increasingly difficult challenges into working code.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 2-Column: Biography on Left, 5-Stage Trajectory Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Bio */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal direction="left" duration={500}>
              <SpotlightCard className="p-6 rounded-2xl space-y-4 hud-corner">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <User className="w-4 h-4 dynamic-accent" />
                    <span>ENGINEER PROFILE</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>Chennai, India</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-zinc-300 font-sans leading-relaxed">
                  <p>
                    I am a Computer Science Engineering student at <strong className="text-white">Chennai Institute of Technology</strong> focused on becoming a high-impact <strong className="text-white">Software Development Engineer</strong>.
                  </p>
                  <p>
                    My engineering journey is grounded in continuous practice: solving over <strong className="dynamic-accent">400+ LeetCode</strong> and <strong className="text-sky-400">350+ Skillrack</strong> problems, building end-to-end full-stack systems, and rapidly shipping hackathon prototypes under hard time constraints.
                  </p>
                  <p>
                    I am passionate about turning ideas into working systems rather than stopping at theoretical concepts. Whether it's architecting an intelligent spaced-repetition engine like <strong className="text-white">Memory Stack</strong> or testing local LLMs via Ollama, I strive for engineering clarity and relentless execution.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">CURRENT FOCUS</div>
                    <div className="text-white font-bold mt-0.5">SDE Roles & DSA</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">AVAILABILITY</div>
                    <div className="text-emerald-400 font-bold mt-0.5">Immediate 2026</div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Right Column: 5-Stage Career Trajectory Road */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-zinc-400 pb-2 px-1 flex items-center justify-between">
              <span>CAREER TRAJECTORY & MILESTONES</span>
              <span>WHERE I'M HEADING</span>
            </div>

            <div className="space-y-3">
              {CAREER_TRAJECTORY.map((stage, idx) => (
                <Reveal key={stage.step} direction="up" delay={idx * 70} duration={500}>
                  <SpotlightCard className="p-4 sm:p-5 flex items-start gap-4 hud-corner group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm font-bold dynamic-accent shrink-0 group-hover:scale-110 group-hover:bg-[var(--accent-subtle)] transition-all">
                      {stepIcons[idx]}
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-bold font-mono text-white group-hover:text-[var(--accent-color)] transition-colors">
                          {stage.role}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                          {stage.badge}
                        </span>
                      </div>

                      <div className="text-xs font-mono text-zinc-400">
                        {stage.location}
                      </div>

                      <p className="text-xs text-zinc-300 font-sans leading-relaxed pt-1">
                        {stage.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
