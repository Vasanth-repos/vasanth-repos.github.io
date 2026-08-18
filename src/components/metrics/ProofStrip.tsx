import React from 'react';
import { Code2, BarChart3, Rocket, Infinity } from 'lucide-react';
import { METRICS } from '../../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Infinity: <Infinity className="w-5 h-5" />,
};

export const ProofStrip: React.FC = () => {
  return (
    <section id="metrics" className="relative py-12 bg-[#080a10] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Header Tag */}
        <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-6 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg animate-pulse" />
            <span className="uppercase tracking-widest text-zinc-400">TELEMETRY // VERIFIED PROOF</span>
          </div>
          <div className="hidden sm:block">DATA ACCURACY: 100% (AUTHENTIC METRICS ONLY)</div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className={`p-6 rounded-xl border transition-all duration-300 hud-corner group ${
                metric.highlight
                  ? 'bg-gradient-to-b from-[#111624] to-[#0c0e16] border-[var(--accent-color)]/40 hover:border-[var(--accent-color)] shadow-lg hover:shadow-[var(--accent-subtle)]'
                  : 'bg-[#0d0f17] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                  {iconMap[metric.iconName]}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  ID: #{metric.id.toUpperCase()}
                </span>
              </div>

              {/* Number Value */}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                  {metric.value === 9999 ? '∞' : metric.value}
                </span>
                {metric.value !== 9999 && metric.suffix && (
                  <span className="text-2xl font-bold font-mono dynamic-accent">
                    {metric.suffix}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-zinc-200 font-mono">
                  {metric.label}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  {metric.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
