import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { Project } from '../../types';
import { playCyberSound } from '../ui/AudioToggle';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const categories = ['All', 'AI Systems', 'Full-Stack', 'Systems × IoT', 'FinTech', 'Cybersecurity'];

  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const otherProjects = PROJECTS_DATA.filter((p) => !p.featured);

  const filteredProjects = otherProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Full-Stack') return p.category.includes('Full-Stack');
    return p.category.includes(activeCategory);
  });

  const handleCategoryChange = (cat: string) => {
    playCyberSound('click');
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="relative py-24 bg-[#06070a] border-t border-white/10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono dynamic-accent mb-2">
              <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg" />
              <span>03 // ENGINEERING PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Things I've Actually<br />
              <span className="dynamic-accent text-glow">Built & Shipped.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm font-mono text-zinc-400">
              No generic boilerplate templates. Every system is built to solve a concrete problem with verifiable architecture and clean engineering.
            </p>
          </div>
        </div>

        {/* Featured Flagship Project: Memory Stack */}
        <div className="mb-16">
          <FeaturedProjectCard
            project={featuredProject}
            onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
          />
        </div>

        {/* Other Projects Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Filter className="w-4 h-4 dynamic-accent" />
            <span>FILTER BY DOMAIN:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'dynamic-accent-bg text-white font-bold shadow-md'
                    : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
            />
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};
