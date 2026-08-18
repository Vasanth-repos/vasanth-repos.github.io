/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#060709',
          secondary: '#0b0d13',
          card: '#10131a',
          elevated: '#171b26',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 42, 68, 0.35)',
        },
        crimson: {
          50: '#fff1f2',
          100: '#ffe4e6',
          400: '#fb7185',
          500: '#ff2a44',
          600: '#e11d48',
          700: '#be123c',
          glow: 'rgba(255, 42, 68, 0.45)',
        },
        cyber: {
          cyan: '#00f0ff',
          emerald: '#00ff9d',
          amber: '#ffb703',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'Monaco', '"Courier New"', 'monospace'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'crimson-glow': '0 0 25px rgba(255, 42, 68, 0.35)',
        'crimson-glow-lg': '0 0 50px rgba(255, 42, 68, 0.45)',
        'cyan-glow': '0 0 25px rgba(0, 240, 255, 0.35)',
        'emerald-glow': '0 0 25px rgba(0, 255, 157, 0.35)',
        'hud-card': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        'dot-matrix': "radial-gradient(rgba(255, 42, 68, 0.15) 1px, transparent 1px)",
        'cyber-gradient': 'linear-gradient(135deg, rgba(255, 42, 68, 0.15) 0%, rgba(16, 19, 26, 0.8) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
