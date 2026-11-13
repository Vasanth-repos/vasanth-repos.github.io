import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  angle: number;
  speed: number;
}

interface CyberGlyph {
  x: number;
  y: number;
  vy: number;
  char: string;
  opacity: number;
  size: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: -1000, y: -1000, radius: 160 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 13000), 85);
    const particles: Particle[] = [];

    const palette = [
      { fill: 'rgba(255, 42, 68, 0.7)', glow: 'rgba(255, 42, 68, 0.4)' }, // Crimson
      { fill: 'rgba(0, 240, 255, 0.65)', glow: 'rgba(0, 240, 255, 0.35)' }, // Cyan
      { fill: 'rgba(255, 255, 255, 0.5)', glow: 'rgba(255, 255, 255, 0.2)' }, // White
      { fill: 'rgba(168, 85, 247, 0.6)', glow: 'rgba(168, 85, 247, 0.3)' }, // Violet
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2.2 + 1.2;
      const theme = palette[Math.floor(Math.random() * palette.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius,
        baseRadius: radius,
        color: theme.fill,
        glowColor: theme.glow,
        angle: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
      });
    }

    // Floating cyber symbols
    const glyphSymbols = ['01', 'λ', '//', '0x', '{}', '=>', '<>', '::', 'fn', '[]'];
    const glyphs: CyberGlyph[] = [];
    const glyphCount = 14;

    for (let i = 0; i < glyphCount; i++) {
      glyphs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: -(Math.random() * 0.4 + 0.2),
        char: glyphSymbols[Math.floor(Math.random() * glyphSymbols.length)],
        opacity: Math.random() * 0.35 + 0.1,
        size: Math.floor(Math.random() * 6) + 10,
      });
    }

    let pulseTime = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      pulseTime += 0.025;

      // Draw floating code glyphs
      ctx.font = '11px "JetBrains Mono", monospace';
      for (let i = 0; i < glyphs.length; i++) {
        const g = glyphs[i];
        g.y += g.vy;
        if (g.y < -20) {
          g.y = height + 20;
          g.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${g.opacity * (0.8 + 0.2 * Math.sin(pulseTime + i))})`;
        ctx.fillText(g.char, g.x, g.y);
      }

      // Connect particle network lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 145) {
            const alpha = (1 - dist / 145) * 0.22;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            // Occasional traveling data pulse along line
            if ((i + j) % 7 === 0) {
              const progress = (Math.sin(pulseTime * 2 + i) + 1) / 2;
              const px = particles[i].x + (particles[j].x - particles[i].x) * progress;
              const py = particles[i].y + (particles[j].y - particles[i].y) * progress;
              ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Interactive mouse attraction lines
      if (mouse.x > 0 && mouse.y > 0) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.35;
            ctx.strokeStyle = `rgba(255, 42, 68, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update animated particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Linear velocity + sinusoidal wave drift
        p.angle += p.speed;
        p.x += p.vx + Math.cos(p.angle) * 0.3;
        p.y += p.vy + Math.sin(p.angle) * 0.3;

        // Bounce off canvas edges
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > width) { p.x = width; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > height) { p.y = height; p.vy *= -1; }

        // Mouse reaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 2;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
          p.radius = p.baseRadius * 1.8;
        } else {
          p.radius = p.baseRadius * (1 + 0.15 * Math.sin(pulseTime * 2 + i));
        }

        // Particle Glow Halo
        ctx.fillStyle = p.glowColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Particle Core
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
