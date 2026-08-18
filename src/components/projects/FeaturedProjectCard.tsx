import React from 'react';
import { ArrowRight, Cpu, Layers } from 'lucide-react';
import { Project } from '../../types';
import { playCyberSound } from '../ui/AudioToggle';
import { GithubIcon } from '../ui/BrandIcons';

interface FeaturedProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#121624] via-[#0d101a] to-[#080a10] border border-[var(--accent-color)]/50 p-6 sm:p-8 shadow-2xl shadow-[var(--accent-subtle)] hud-corner overflow-hidden group">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full dynamic-accent-bg text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-md">
            {project.badge || 'FLAGSHIP ARCHITECTURE'}
          </span>
          <span className="text-xs font-mono text-zinc-400">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>STATUS: {project.status.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Grid: Info on Left, UI Mockup & System Flow on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 items-center">
        
        {/* Left Column: Description & Value Proposition */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Quick Problem Callout */}
          <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-1 text-xs font-mono">
            <span className="text-rose-400 font-bold">// THE PROBLEM SOLVED:</span>
            <p className="text-zinc-300">
              DSA concept retention decay after weeks of practice. Computes real-time forgetfulness curves to surface forgotten edge cases before tech interviews.
            </p>
          </div>

          {/* Technologies */}
          <div className="pt-2">
            <div className="text-[11px] font-mono text-zinc-500 mb-2">ENGINEERED WITH:</div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => {
                playCyberSound('open');
                onOpenCaseStudy(project);
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-lg dynamic-accent-bg text-white font-mono text-xs font-bold hover:brightness-110 shadow-lg shadow-[var(--accent-glow)] transition-all"
            >
              <span>OPEN FULL CASE STUDY</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-200 font-mono text-xs hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual UI Mockup + Interactive Flow Nodes */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* UI Mockup Card with Scanline and Cyber Frame */}
          {project.image && (
            <div className="relative rounded-xl overflow-hidden border border-white/20 bg-black shadow-2xl group/img">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a10] via-transparent to-transparent opacity-60" />
              <div className="scanline-overlay opacity-20" />
              
              {/* Telemetry Tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono">
                <span className="flex items-center gap-1.5 text-white">
                  <Layers className="w-3.5 h-3.5 dynamic-accent" />
                  <span>LIVE REVISION ENGINE PREVIEW</span>
                </span>
                <span className="text-emerald-400 font-semibold">94.8% RECALL OPTIMIZATION</span>
              </div>
            </div>
          )}

          {/* Compact System Flow Diagram */}
          <div className="p-4 rounded-xl bg-[#090b12] border border-white/15 space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 dynamic-accent" />
                <span>PIPELINE ARCHITECTURE</span>
              </span>
              <span className="text-[10px] text-zinc-500">MICROSERVICES FLOW</span>
            </div>

            {/* 4 compact step pills in a 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.architecture.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#0e121c] border border-white/10 flex items-start gap-2.5 hover:border-[var(--accent-color)]/40 transition-colors"
                >
                  <div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[11px] font-bold dynamic-accent shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-bold font-mono text-white leading-tight">{step.title}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
