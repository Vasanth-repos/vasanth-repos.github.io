import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

// Web Audio API sound synthesizer for subtle sci-fi clicks and hums
export const playCyberSound = (type: 'click' | 'hover' | 'open' | 'success') => {
  if (typeof window === 'undefined') return;
  const audioEnabled = localStorage.getItem('vb_audio_enabled') === 'true';
  if (!audioEnabled) return;

  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      gain.gain.setValueAtTime(0.02, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.02);
      osc.start(now);
      osc.stop(now + 0.02);
    } else if (type === 'open') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.06); // E5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.16);
      osc.start(now);
      osc.stop(now + 0.16);
    }
  } catch {
    // AudioContext blocked or not supported
  }
};

export const AudioToggle: React.FC<{ onToggle?: (enabled: boolean) => void }> = ({ onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(() => {
    return localStorage.getItem('vb_audio_enabled') === 'true';
  });

  const toggle = () => {
    const next = !isEnabled;
    setIsEnabled(next);
    localStorage.setItem('vb_audio_enabled', String(next));
    if (next) {
      setTimeout(() => playCyberSound('success'), 50);
    }
    if (onToggle) onToggle(next);
  };

  return (
    <button
      onClick={toggle}
      title={isEnabled ? 'Audio Feedback ON' : 'Audio Feedback MUTED'}
      className="flex items-center gap-1.5 px-2.5 h-8 rounded-lg border border-white/10 bg-white/5 hover:border-[var(--accent-color)] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
      aria-label="Toggle sound feedback"
    >
      {isEnabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 dynamic-accent" />
          <span className="hidden sm:inline">SFX</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
          <span className="hidden sm:inline text-zinc-500">MUTE</span>
        </>
      )}
    </button>
  );
};
