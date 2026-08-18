import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { playCyberSound } from '../ui/AudioToggle';

export const AlgorithmVisualizer: React.FC = () => {
  // Binary Search Interactive Simulation State
  const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
  const [target, setTarget] = useState<number>(23);
  const [low, setLow] = useState<number>(0);
  const [high, setHigh] = useState<number>(sortedArray.length - 1);
  const [mid, setMid] = useState<number | null>(null);
  const [step, setStep] = useState<number>(0);
  const [status, setStatus] = useState<'idle' | 'running' | 'found' | 'not_found'>('idle');
  const [log, setLog] = useState<string[]>([
    'Initialized array [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]. Set target = 23.',
  ]);

  const reset = () => {
    playCyberSound('click');
    setLow(0);
    setHigh(sortedArray.length - 1);
    setMid(null);
    setStep(0);
    setStatus('idle');
    setLog([`Reset simulation. Target: ${target}. Search space: indices [0..${sortedArray.length - 1}].`]);
  };

  const nextStep = () => {
    playCyberSound('click');
    if (status === 'found' || status === 'not_found') {
      reset();
      return;
    }

    if (low > high) {
      setStatus('not_found');
      setLog((prev) => [...prev, `❌ Low (${low}) > High (${high}). Target ${target} not present.`]);
      return;
    }

    const currentMid = Math.floor((low + high) / 2);
    setMid(currentMid);
    const midVal = sortedArray[currentMid];

    if (midVal === target) {
      setStatus('found');
      playCyberSound('success');
      setLog((prev) => [
        ...prev,
        `🎯 MATCH! array[${currentMid}] == ${target}. Target found in ${step + 1} comparisons (O(log N)).`,
      ]);
    } else if (midVal < target) {
      setLog((prev) => [
        ...prev,
        `Step ${step + 1}: array[${currentMid}] = ${midVal} < ${target}. Target must be in right half. low = ${currentMid + 1}.`,
      ]);
      setLow(currentMid + 1);
      setStep((s) => s + 1);
      setStatus('running');
    } else {
      setLog((prev) => [
        ...prev,
        `Step ${step + 1}: array[${currentMid}] = ${midVal} > ${target}. Target must be in left half. high = ${currentMid - 1}.`,
      ]);
      setHigh(currentMid - 1);
      setStep((s) => s + 1);
      setStatus('running');
    }
  };

  return (
    <div className="w-full rounded-xl bg-[#0b0e17] border border-white/15 p-5 shadow-2xl hud-corner">
      
      {/* Visualizer Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full dynamic-accent-bg animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            INTERACTIVE ALGORITHM RUNNER: BINARY SEARCH
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-400">Time: <span className="text-emerald-400">O(log N)</span></span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-400">Space: <span className="text-emerald-400">O(1)</span></span>
        </div>
      </div>

      {/* Target Selector & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-zinc-400">Select Target:</span>
          <div className="flex gap-1.5">
            {[8, 23, 56, 91, 100].map((val) => (
              <button
                key={val}
                onClick={() => {
                  setTarget(val);
                  reset();
                }}
                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                  target === val
                    ? 'dynamic-accent-bg text-white font-bold'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Step Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={nextStep}
            disabled={status === 'found' || status === 'not_found'}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg dynamic-accent-bg text-white text-xs font-mono font-semibold hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <Play className="w-3.5 h-3.5" />
            <span>STEP NEXT ({step + 1})</span>
          </button>
          <button
            onClick={reset}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            title="Reset Array"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Array Elements Visualization Grid */}
      <div className="py-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max justify-center sm:justify-start">
          {sortedArray.map((val, idx) => {
            const isMid = mid === idx;
            const isLow = low === idx;
            const isHigh = high === idx;
            const inRange = idx >= low && idx <= high;
            const isFound = status === 'found' && val === target;

            return (
              <div key={idx} className="flex flex-col items-center gap-1">
                {/* Pointer Indicators */}
                <div className="h-5 text-[10px] font-mono font-bold flex items-center justify-center">
                  {isMid && <span className="text-amber-400">MID</span>}
                  {!isMid && isLow && <span className="text-sky-400">L</span>}
                  {!isMid && isHigh && <span className="text-purple-400">H</span>}
                </div>

                {/* Array Cell */}
                <div
                  className={`w-11 h-12 rounded-lg border flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 ${
                    isFound
                      ? 'bg-emerald-500 text-black border-emerald-400 scale-110 shadow-lg shadow-emerald-500/40'
                      : isMid
                      ? 'bg-amber-500/20 text-amber-300 border-amber-400 scale-105'
                      : inRange
                      ? 'bg-white/10 text-white border-white/25'
                      : 'bg-black/40 text-zinc-600 border-white/5 opacity-40'
                  }`}
                >
                  {val}
                </div>

                {/* Index label */}
                <span className="text-[10px] font-mono text-zinc-500">[{idx}]</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Log Output Terminal */}
      <div className="mt-3 p-3 rounded-lg bg-[#07090e] border border-white/10 font-mono text-xs text-zinc-400 max-h-24 overflow-y-auto space-y-1">
        {log.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="dynamic-accent">❯</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
