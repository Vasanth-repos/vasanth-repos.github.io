import React from 'react';
import { User, GraduationCap, Code2, Rocket, Cpu, Briefcase, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { CAREER_TRAJECTORY, PERSONAL_INFO } from '../../data/portfolioData';
import { Reveal } from '../ui/Reveal';
import { SpotlightCard } from '../ui/SpotlightCard';

const stepIcons = [
  <GraduationCap className="w-4 h-4" key="1" />,
  <Code2 className="w-4 h-4" key="2" />,
  <Rocket className="w-4 h-4" key="3" />,
  <Cpu className="w-4 h-4" key="4" />,
  <Briefcase className="w-4 h-4" key="5" />,
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-[#080a10] border-t border-white/10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
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

        {/* 2-Column: Biography + Photo Card on Left, 5-Stage Trajectory Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Editorial Bio + Photo / Highlights Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <Reveal direction="left" duration={500} className="flex-1">
              <SpotlightCard className="p-5 sm:p-6 rounded-2xl space-y-3.5 hud-corner h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <User className="w-4 h-4 dynamic-accent" />
                      <span>ENGINEER PROFILE</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>Chennai, India</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                    <p>
                      I am a Computer Science Engineering student at <strong className="text-white">Chennai Institute of Technology</strong> focused on becoming a high-impact <strong className="text-white">Software Development Engineer</strong>.
                    </p>
                    <p>
                      My engineering journey is grounded in continuous practice: solving over <strong className="dynamic-accent">400+ LeetCode</strong> and <strong className="text-sky-400">350+ Skillrack</strong> problems, building end-to-end full-stack systems, and rapidly shipping hackathon prototypes under hard time constraints.
                    </p>
                    <p>
                      Whether architecting an intelligent spaced-repetition engine like <strong className="text-white">Memory Stack</strong> or testing local LLMs via Ollama, I strive for engineering clarity and relentless execution.
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-mono shrink-0">
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">CURRENT FOCUS</div>
                    <div className="text-white font-bold mt-0.5">SDE Roles & DSA</div>
                  </div>
                  <div className="p-2 rounded bg-white/5 border border-white/5">
                    <div className="text-zinc-500 text-[10px]">AVAILABILITY</div>
                    <div className="text-emerald-400 font-bold mt-0.5">Immediate 2026</div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            {/* Left Balancer Card: Visual Portrait Banner + Key Strengths */}
            <Reveal direction="up" delay={100} duration={500}>
              <div className="rounded-2xl bg-[#0b0e17] border border-white/10 overflow-hidden shadow-lg hud-corner">
                <div className="flex items-center gap-3.5 p-3.5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-black">
                    <img
                      src={PERSONAL_INFO.images.crimsonGlow}
                      alt="Vasanthabalan B Portrait"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-white">
                      <Award className="w-3.5 h-3.5 dynamic-accent" />
                      <span>ENGINEERING STRENGTHS</span>
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 leading-snug">
                      Data Structures • Clean Architecture • Fast Debugging
                    </div>
                  </div>
                </div>

                <div className="px-3.5 py-2 bg-black/40 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>CIT CSE DEPT</span>
                  </span>
                  <span className="text-zinc-500">CONTINUOUS LEARNING</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 5-Stage Career Trajectory Road */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-2">
            <div className="text-xs font-mono text-zinc-400 pb-0.5 px-1 flex items-center justify-between">
              <span>CAREER TRAJECTORY & MILESTONES</span>
              <span>WHERE I'M HEADING</span>
            </div>

            <div className="space-y-2.5 flex-1 flex flex-col justify-between">
              {CAREER_TRAJECTORY.map((stage, idx) => (
                <Reveal key={stage.step} direction="up" delay={idx * 50} duration={500} className="flex-1">
                  <SpotlightCard className="p-3.5 sm:p-4 flex items-start gap-3.5 hud-corner group h-full">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold dynamic-accent shrink-0 group-hover:scale-110 group-hover:bg-[var(--accent-subtle)] transition-all">
                      {stepIcons[idx]}
                    </div>

                    <div className="space-y-0.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold font-mono text-white group-hover:text-[var(--accent-color)] transition-colors">
                          {stage.role}
                        </h4>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-zinc-300">
                          {stage.badge}
                        </span>
                      </div>

                      <div className="text-[11px] font-mono text-zinc-400">
                        {stage.location}
                      </div>

                      <p className="text-[11px] text-zinc-300 font-sans leading-relaxed pt-0.5">
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
