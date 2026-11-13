import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, FastForward, SkipForward, X } from 'lucide-react';
import { playCyberSound } from './AudioToggle';

export interface TourSection {
  id: string;
  title: string;
  headline: string;
}

export const TOUR_SECTIONS: TourSection[] = [
  { id: 'hero', title: 'Main Headline', headline: 'Building Systems. Solving Problems. Exploring AI.' },
  { id: 'terminal', title: 'Runtime Console', headline: 'Developer Diagnostics & Telemetry' },
  { id: 'metrics', title: 'Verified Proof', headline: '400+ LeetCode, 350+ Skillrack Solutions' },
  { id: 'mindset', title: 'Philosophy', headline: 'Discipline Today, Freedom Tomorrow' },
  { id: 'projects', title: 'Projects', headline: 'Memory Stack & Production Systems' },
  { id: 'ailab', title: 'AI Sandbox', headline: 'Local Quantized LLMs & Code Intelligence' },
  { id: 'skills', title: 'Tech Radar', headline: 'Languages, Frameworks, Architecture' },
  { id: 'creative', title: 'Creative', headline: 'DaVinci Resolve Studio & Visual Systems' },
  { id: 'about', title: 'Trajectory', headline: 'Engineering Roadmap & Evolution' },
  { id: 'contact', title: 'Transmission', headline: 'Open for SDE Roles & Engineering Inquiries' },
];

interface AutoTourGuideProps {
  isActive: boolean;
  onClose: () => void;
  onActivate?: () => void;
}

export const AutoTourGuide: React.FC<AutoTourGuideProps> = ({
  isActive,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState<1 | 1.5 | 2>(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [userInterrupted, setUserInterrupted] = useState(false);

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const isPlayingRef = useRef(isPlaying);
  const speedRef = useRef(speed);

  isPlayingRef.current = isPlaying;
  speedRef.current = speed;

  // Auto-scroll loop
  const scrollStep = useCallback((timestamp: number) => {
    if (!isPlayingRef.current) return;

    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    // Normal 60fps delta is ~16.6ms. Base speed: ~1.2px per frame at 1x
    const pixels = (delta / 16.6) * 1.35 * speedRef.current;
    
    // Check if reached bottom
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight - 5;
    if (window.scrollY >= maxScroll) {
      setIsPlaying(false);
      playCyberSound('success');
      return;
    }

    window.scrollBy({ top: pixels, left: 0, behavior: 'auto' });
    animationFrameRef.current = requestAnimationFrame(scrollStep);
  }, []);

  // Update current section based on scroll position
  useEffect(() => {
    const handleScrollUpdate = () => {
      const scrollMiddle = window.scrollY + window.innerHeight * 0.4;
      for (let i = TOUR_SECTIONS.length - 1; i >= 0; i--) {
        const elem = document.getElementById(TOUR_SECTIONS[i].id);
        if (elem && elem.offsetTop <= scrollMiddle) {
          setCurrentSectionIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollUpdate, { passive: true });
    handleScrollUpdate();
    return () => window.removeEventListener('scroll', handleScrollUpdate);
  }, []);

  // Detect user manual scroll to gently pause auto-scroll
  useEffect(() => {
    if (!isPlaying) return;

    const handleUserInteraction = () => {
      if (isPlayingRef.current) {
        setIsPlaying(false);
        setUserInterrupted(true);
      }
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isPlaying]);

  // Start or pause scrolling loop
  useEffect(() => {
    if (isActive && isPlaying) {
      lastTimeRef.current = 0;
      animationFrameRef.current = requestAnimationFrame(scrollStep);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, isPlaying, scrollStep]);

  // Sync isPlaying when activated
  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
      setUserInterrupted(false);
    } else {
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlay = () => {
    playCyberSound('click');
    setUserInterrupted(false);
    setIsPlaying((prev) => !prev);
  };

  const cycleSpeed = () => {
    playCyberSound('click');
    setSpeed((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1));
  };

  const skipToNextSection = () => {
    playCyberSound('click');
    const nextIndex = (currentSectionIndex + 1) % TOUR_SECTIONS.length;
    const nextSection = TOUR_SECTIONS[nextIndex];
    const elem = document.getElementById(nextSection.id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(nextIndex);
    }
  };

  const current = TOUR_SECTIONS[currentSectionIndex] || TOUR_SECTIONS[0];

  if (!isActive) return null;

  return (
    <aside
      aria-label="Guided Tour Controls"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94vw] max-w-xl animate-float-slow"
    >
      <div className="relative rounded-2xl bg-[#090c14]/95 border border-white/20 p-3 sm:p-4 shadow-2xl backdrop-blur-xl hud-corner">
        
        {/* Top Info Bar */}
        <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            </span>
            <span className="text-[11px] text-zinc-400 truncate">
              {isPlaying ? 'GUIDED TOUR RUNNING' : userInterrupted ? 'PAUSED (MANUAL SCROLL)' : 'TOUR PAUSED'}
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-white font-bold text-[11px] truncate hidden sm:inline">
              {current.title}: {current.headline}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] text-zinc-400 font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
              {currentSectionIndex + 1}/{TOUR_SECTIONS.length}
            </span>
            <button
              onClick={() => {
                playCyberSound('click');
                onClose();
              }}
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Exit Tour"
              aria-label="Exit Guided Tour"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Controls Row */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Main Play/Pause Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                isPlaying
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                  : 'dynamic-accent-bg text-white shadow-lg shadow-[var(--accent-glow)] hover:brightness-110'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{userInterrupted ? 'RESUME' : 'PLAY'}</span>
                </>
              )}
            </button>

            {/* Speed Toggle */}
            <button
              onClick={cycleSpeed}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              title="Change auto-scroll speed"
            >
              <FastForward className="w-3.5 h-3.5 dynamic-accent" />
              <span>{speed}x</span>
            </button>

            {/* Skip to Next Section */}
            <button
              onClick={skipToNextSection}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              title="Skip to next section"
            >
              <SkipForward className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline">NEXT</span>
            </button>
          </div>

          {/* Current Section Indicator Badge */}
          <div className="text-[11px] font-mono text-zinc-400 truncate text-right">
            <span className="dynamic-accent font-semibold">{current.title}</span>
          </div>

        </div>

      </div>
    </aside>
  );
};
