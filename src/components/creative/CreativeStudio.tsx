import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';
import { CREATIVE_SHOWCASE } from '../../data/portfolioData';
import { playCyberSound } from '../ui/AudioToggle';
import { Reveal } from '../ui/Reveal';

export const CreativeStudio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenLightbox = (imgSrc: string) => {
    playCyberSound('open');
    setSelectedImage(imgSrc);
  };

  return (
    <section id="creative" className="relative py-20 bg-[#06070a] border-t border-white/10 overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="up" duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>07 // CREATIVE DIRECTION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
                Code isn't the only thing<br />
                <span className="text-rose-400 text-glow">I create.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm font-mono text-zinc-400">
                Visual storytelling, color grading in DaVinci Resolve, and poster typography complement technical rigor with creative communication.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3-Column Creative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREATIVE_SHOWCASE.map((item, idx) => (
            <Reveal key={item.id} direction="up" delay={idx * 80} duration={600}>
              <div className="rounded-2xl bg-[#0b0e17] border border-white/10 overflow-hidden shadow-xl hover:border-rose-400/40 transition-all duration-300 hud-corner flex flex-col justify-between group h-full">
                {/* Media Image Showcase with Hover Zoom */}
                <div
                  className="relative aspect-[4/5] overflow-hidden bg-black cursor-pointer"
                  onClick={() => handleOpenLightbox(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17] via-transparent to-transparent opacity-80" />
                  
                  {/* View Full Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-xs font-mono text-white flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Image</span>
                    </span>
                  </div>

                  {/* Overlaid Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-rose-300">
                    {item.tag}
                  </div>

                  {item.quote && (
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-200 italic">
                      "{item.quote}"
                    </div>
                  )}
                </div>

                {/* Text Info */}
                <div className="p-5 space-y-2.5">
                  <div className="text-[11px] font-mono text-zinc-400">{item.role}</div>
                  <h3 className="text-base font-bold font-mono text-white group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Software tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.software.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white/20 transition-colors z-10"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged creative visual"
              className="max-h-[85vh] w-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
