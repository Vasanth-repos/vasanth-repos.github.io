import React, { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1800,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease out expo formula for natural deceleration
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeOutProgress * end);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, end, duration]);

  if (end === 9999) {
    return <span ref={ref} className={className}>∞</span>;
  }

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
};
