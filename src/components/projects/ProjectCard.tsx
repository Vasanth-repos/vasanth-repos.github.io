import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import { playCyberSound } from '../ui/AudioToggle';
import { GithubIcon } from '../ui/BrandIcons';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#0c0e17] border border-white/10 hover:border-[var(--accent-color)]/50 transition-all duration-300 hud-corner group shadow-lg overflow-hidden h-full">
      
      {/* Project Mockup Visual Header */}
      {project.image && (
        <div
          className="relative aspect-[16/10] w-full overflow-hidden bg-black cursor-pointer border-b border-white/10"
          onClick={() => {
            playCyberSound('open');
            onOpenCaseStudy(project);
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-transparent opacity-80" />
          <div className="scanline-overlay opacity-20" />

          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold dynamic-accent uppercase tracking-wider">
            {project.category}
          </div>

          <div className="absolute top-2.5 right-2.5 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-zinc-300">
            {project.status}
          </div>
        </div>
      )}

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {!project.image && (
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold dynamic-accent uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                {project.status}
              </span>
            </div>
          )}

          <h3
            onClick={() => {
              playCyberSound('open');
              onOpenCaseStudy(project);
            }}
            className="text-lg font-bold font-mono text-white group-hover:text-[var(--accent-color)] transition-colors cursor-pointer"
          >
            {project.title}
          </h3>
          
          <p className="text-xs text-zinc-400 font-mono mt-0.5 mb-2 line-clamp-1 italic">
            "{project.tagline}"
          </p>

          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>
        </div>

        {/* Card Footer Tech & CTAs */}
        <div className="pt-3 border-t border-white/5 space-y-3">
          {/* Technologies */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              onClick={() => {
                playCyberSound('open');
                onOpenCaseStudy(project);
              }}
              className="flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-[var(--accent-color)] transition-colors group/btn"
            >
              <span>View Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-1.5">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="View GitHub"
                  aria-label="GitHub repository"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {project.links.demo && project.links.demo !== '#' && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Live Demo"
                  aria-label="Live demo website"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
