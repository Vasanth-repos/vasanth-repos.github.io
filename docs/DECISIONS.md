# Architectural Decisions

## Important Architectural Decisions

### 1. Dark-First Cyber Crimson Theme
- **Reason**: Aligns directly with the user's uploaded portrait lighting (red studio lighting and dark terminal aesthetic).
- **Tradeoff**: Required careful contrast calibration (WCAG AA compliant white text on `#060709` canvas) and an interactive theme accent switcher for personalization.

### 2. Native Web Audio API Sound Generation
- **Reason**: Zero external audio file network requests or dependencies; eliminates missing asset 404s and audio lag.
- **Tradeoff**: Requires user interaction to unlock audio context in standard browsers, handled seamlessly via toggle.

### 3. Data-Driven Configuration Model
- **Reason**: Decouples project additions, metrics, and bio updates into `src/data/portfolioData.ts` and `src/data/dsaTopics.ts` without needing to touch UI JSX.
