import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .interactive-element');
        setIsHovered(!!isInteractive);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Target Dot */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          backgroundColor: 'var(--accent-color)',
          boxShadow: '0 0 10px var(--accent-glow)',
        }}
      />

      {/* Outer Tracking Reticle Ring */}
      <div
        className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '42px' : '26px',
          height: isHovered ? '42px' : '26px',
          borderColor: isHovered ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'var(--accent-subtle)' : 'transparent',
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
        }}
      />
    </>
  );
};
