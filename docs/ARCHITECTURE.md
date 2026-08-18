# Architecture

## System Architecture
Single-page application (SPA) built with React 18, TypeScript, and Tailwind CSS, bundled with Vite 6. Data models are centralized in typed TypeScript modules to decouple UI rendering from content updates.

## Components
- **Layout**: Floating Navbar, Command Palette (`Ctrl+K`), Telemetry Footer, Custom Targeting Cursor, Web Audio SFX Toggle.
- **Hero**: ParticleCanvas (HTML5 Canvas 2D node physics), HeroTerminal (Interactive shell diagnostics), Cyber HUD Portrait Card.
- **DSA**: Topic Cluster Explorer, Step-by-Step Binary Search Interactive Visualizer.
- **Projects**: Memory Stack Architecture Flow, Category Filter Tabs, Detailed Case Study Modal.
- **AI Lab**: CLI Sandbox supporting real-time synthetic command execution.
- **Creative**: Tilt Photo Cards, Lightbox Modal.
- **Contact**: Validated Form, 1-Click Clipboard API integration, Toast notification system.

## Data Flow
User Actions -> Component State / Custom Hooks -> Audio Synthesis -> DOM Updates -> Dynamic CSS Variables (`--accent-color`, `--accent-glow`).

## Frontend
- React 18 with functional components and TypeScript strict mode.
- Tailwind CSS with custom cyber tokens and animations.
- Lucide React & Custom SVG Brand Icons.

## Backend / APIs
- Standalone static deployment capability on Vercel/Netlify.
- Prepared REST / GraphQL integration endpoints for LeetCode and GitHub metrics.

## External Services
- Google Fonts (Inter, Space Grotesk, JetBrains Mono, Syne).
- Web Audio API (synthetic procedural sound generation).
