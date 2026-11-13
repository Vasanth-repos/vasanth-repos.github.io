import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';
import { playCyberSound } from '../ui/AudioToggle';
import { GithubIcon } from '../ui/BrandIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl bg-[#0a0d15] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 hud-corner max-h-[90vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0f131f] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 dynamic-accent">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold dynamic-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-zinc-300 font-mono">
                  {project.status}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              playCyberSound('click');
              onClose();
            }}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 divide-y divide-white/10">
          
          {/* Section 1: Problem & Solution */}
          <div className="space-y-6">
            <p className="text-base text-zinc-300 leading-relaxed font-sans">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                <div className="text-xs font-mono font-bold text-rose-400 flex items-center gap-1.5">
                  <span>THE BOTTLENECK // PROBLEM</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <span>THE ENGINEERING SOLUTION</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: System Architecture */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono font-bold text-white uppercase tracking-wider">
              <Cpu className="w-4 h-4 dynamic-accent" />
              <span>SYSTEM ARCHITECTURE & DATA FLOW</span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              {project.architecture.overview}
            </p>

            {/* Step Flow Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {project.architecture.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0f121d] border border-white/10 space-y-2 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold dynamic-accent">
                      STAGE 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-mono">{step.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Engineering Decisions */}
          <div className="pt-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-mono font-bold text-white uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>KEY ENGINEERING TRADE-OFFS & DECISIONS</span>
            </div>
            <ul className="space-y-2.5">
              {project.engineeringDecisions.map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-zinc-300 font-mono">
                  <span className="dynamic-accent font-bold mt-0.5">❯</span>
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Key Features & Stack */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                CORE CAPABILITIES
              </div>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                TECH STACK & RUNTIMES
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.futureRoadmap.length > 0 && (
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-zinc-500 mb-1">FUTURE ROADMAP:</div>
                  <div className="text-xs text-zinc-400 font-mono">
                    {project.futureRoadmap[0]}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 bg-[#090b11] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs font-mono text-zinc-500">
            VASANTHABALAN B // PRODUCTION SYSTEM DOSSIER
          </div>
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.links.demo && project.links.demo !== '#' && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg dynamic-accent-bg text-white text-xs font-mono font-semibold hover:brightness-110 shadow-md transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
