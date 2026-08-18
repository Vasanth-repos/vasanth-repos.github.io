import React from 'react';

const ITEMS = [
  'LEETCODE 400+ PROBLEMS',
  'C++ STL & ALGORITHMS',
  'DYNAMIC PROGRAMMING',
  'GRAPH THEORY & MST',
  'MEMORY STACK (SPACED REPETITION)',
  'REACT & TYPESCRIPT',
  'OLLAMA & LOCAL LLMS',
  'QWEN2.5-CODER',
  'FLASK & PYTHON',
  'MONGODB & POSTGRESQL',
  'DAVINCI RESOLVE STUDIO',
  'HACKATHON RAPID PROTOTYPING',
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full py-4 bg-[#050608] border-y border-white/5 overflow-hidden font-mono text-xs select-none">
      {/* Edge gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050608] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050608] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8">
        {[...ITEMS, ...ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8 shrink-0">
            <span className="text-zinc-400 hover:text-white transition-colors tracking-wider font-semibold">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full dynamic-accent-bg opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
};
