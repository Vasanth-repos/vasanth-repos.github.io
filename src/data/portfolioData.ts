import { Project, MetricItem, HackathonExperience, BuildLogItem, CreativeItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Vasanthabalan B',
  role: 'Computer Science Engineering Student / Aspiring SDE',
  institution: 'Chennai Institute of Technology',
  location: 'Chennai, India',
  availability: 'Open to Opportunities & SDE Internships',
  bioHeadline: 'BUILDING SYSTEMS. SOLVING PROBLEMS. EXPLORING AI.',
  bioSummary: 'Computer Science Engineering student focused on Data Structures & Algorithms, full-stack systems engineering, and practical AI integrations. I bridge algorithmic rigor with production-grade engineering to turn complex challenges into working software.',
  quote: "I don't just write code. I build solutions.",
  motto: 'Focus. Build. Create. // Discipline Today, Freedom Tomorrow.',
  socialLinks: {
    github: 'https://github.com/vasanthabalan',
    linkedin: 'https://linkedin.com/in/vasanthabalan',
    leetcode: 'https://leetcode.com/vasanthabalan',
    skillrack: 'https://www.skillrack.com',
    email: 'vasanthabalan.dev@gmail.com',
  },
  images: {
    heroHud: './assets/images/profile-cyber-hud.png',
    crimsonGlow: './assets/images/profile-crimson-glow.jpg',
    editorialStairs: './assets/images/profile-editorial-stairs.jpg',
    studioDark: './assets/images/profile-studio-dark.jpg',
    vintageColumn: './assets/images/profile-vintage-column.jpg',
  }
};

export const METRICS: MetricItem[] = [
  {
    id: 'leetcode',
    value: 400,
    suffix: '+',
    label: 'LeetCode Problems',
    sublabel: 'Array, DP, Graphs & Binary Search focus',
    iconName: 'Code2',
    highlight: true,
  },
  {
    id: 'skillrack',
    value: 350,
    suffix: '+',
    label: 'Skillrack Solutions',
    sublabel: 'Time-bounded algorithmic problems in C++ & Java',
    iconName: 'BarChart3',
  },
  {
    id: 'projects',
    value: 10,
    suffix: '+',
    label: 'Projects Built',
    sublabel: 'Full-stack apps, AI tools & hackathon builds',
    iconName: 'Rocket',
    highlight: true,
  },
  {
    id: 'passion',
    value: 9999,
    suffix: '∞',
    label: 'Things Still To Build',
    sublabel: 'Continuous exploration & system architecture',
    iconName: 'Infinity',
  },
];

export const MINDSET_PILLARS = [
  {
    question: "Is it actually useful?",
    detail: "Every line of code should solve a genuine bottleneck, not just demonstrate syntax for the sake of it."
  },
  {
    question: "Does it already exist?",
    detail: "If standard tooling exists, leverage it. If building from scratch, introduce a distinct technical differentiator."
  },
  {
    question: "Can it scale under load?",
    detail: "Design data structures and backend endpoints with amortized complexity and memory safety in mind from day one."
  },
  {
    question: "How can execution be sharper?",
    detail: "Prioritize end-to-end reliability, snappy response times (<100ms), and intuitive UX over bloated feature lists."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'memory-stack',
    title: 'Memory Stack',
    category: 'AI × Education',
    tagline: 'Intelligent DSA Revision & Spaced Repetition Engine',
    description: 'An AI-powered spaced repetition learning system engineered specifically for Data Structures & Algorithms. It analyzes submission history, pinpoints weak conceptual clusters (e.g. 2-pointer edge cases or graph cycles), and schedules personalized revision queues to beat the forgetting curve.',
    featured: true,
    status: 'Building',
    badge: 'FLAGSHIP PROJECT',
    image: './assets/images/project-memory-stack.jpg',
    technologies: ['React', 'TypeScript', 'Flask', 'Python', 'MongoDB', 'Scikit-Learn', 'Tailwind CSS'],
    problem: 'Computer Science students and competitive programmers solve hundreds of DSA problems but forget edge cases, invariants, and pattern archetypes after 3–4 weeks without targeted revision.',
    solution: 'Memory Stack implements an adaptive spaced repetition algorithm combined with concept tagging. By logging user attempt timestamps, mistake patterns, and execution complexity, the system computes a real-time "Concept Retention Index" and generates a daily 3-problem micro-revision queue.',
    architecture: {
      overview: 'Microservices architecture with a React SPA frontend communicating over REST to a Python/Flask analytics engine that computes memory decay curves against MongoDB activity logs.',
      steps: [
        {
          title: 'Problem Logging',
          desc: 'User records solved problem, approach taken, time complexity, and self-reported struggle points.',
          icon: 'FileCode2'
        },
        {
          title: 'Concept Extraction',
          desc: 'Engine tags topic hierarchies (e.g. DP → 0/1 Knapsack, Graphs → Tarjan’s SCC).',
          icon: 'Tags'
        },
        {
          title: 'Memory Decay Modeling',
          desc: 'Applies modified Ebbinghaus curve adjusted by problem difficulty and historical accuracy.',
          icon: 'Activity'
        },
        {
          title: 'Smart Practice Queue',
          desc: 'Delivers daily targeted drills exactly when concept retention drops below 65%.',
          icon: 'Brain'
        }
      ]
    },
    engineeringDecisions: [
      'Engineered Flask backend with async Celery workers to recalculate retention indices in the background without blocking API endpoints.',
      'Adopted MongoDB for flexible polymorphic schema storing varied problem structures, notes, and custom test cases.',
      'Implemented custom client-side caching to guarantee instant navigation between revision cards with zero UI lag.'
    ],
    keyFeatures: [
      'Interactive Retention Dashboard visualizing topic mastery heatmaps',
      'Automated daily revision queue based on spaced intervals (1, 3, 7, 21, 60 days)',
      'Pattern grouping for 20+ algorithmic archetypes (Sliding Window, Monotonic Stack, etc.)',
      'Exportable revision cheatsheets and personal code snippet vault'
    ],
    futureRoadmap: [
      'Integration with LeetCode GraphQL API for automated submission sync',
      'Fine-tuned local LLM for code review and automated invariant explanations'
    ],
    links: {
      github: 'https://github.com/vasanthabalan/memory-stack',
      demo: 'https://memory-stack.vercel.app',
      docs: '#'
    }
  },
  {
    id: 'neuralflow-ai',
    title: 'NeuralFlow Local Agent',
    category: 'AI Systems',
    tagline: 'Offline AI Development Assistant with Local LLM Orchestration',
    description: 'A developer workflow assistant built on top of local LLMs (Qwen2.5-Coder via Ollama) and Gemini API fallback, enabling offline repository code reasoning, terminal command synthesis, and AST-aware refactoring with zero telemetry leak.',
    status: 'Completed',
    badge: 'AI LAB HIGHLIGHT',
    image: './assets/images/project-neuralflow.jpg',
    technologies: ['Node.js', 'TypeScript', 'Ollama', 'Qwen2.5-Coder', 'Gemini API', 'ChromaDB'],
    problem: 'Cloud-only coding assistants require continuous internet connectivity, expose proprietary code bases to remote servers, and incur continuous subscription costs.',
    solution: 'Constructed an offline-first agent that runs quantized local models through Ollama on local hardware, using local vector embeddings (ChromaDB) to ground code generation in the user’s exact repository architecture.',
    architecture: {
      overview: 'Local CLI and Electron interface communicating via WebSockets with a lightweight Node daemon managing Ollama model contexts and vector similarity search.',
      steps: [
        {
          title: 'Code Ingestion',
          desc: 'Parses codebase into AST chunks with semantic vector embeddings stored in local ChromaDB.',
          icon: 'FolderSearch'
        },
        {
          title: 'Context Assembly',
          desc: 'Ranks relevant file snippets and injects system instructions tailored for coding precision.',
          icon: 'Cpu'
        },
        {
          title: 'Inference',
          desc: 'Executes stream inference on Qwen2.5-Coder (7B quantized) at ~24 tokens/sec locally.',
          icon: 'Sparkles'
        }
      ]
    },
    engineeringDecisions: [
      'Structured fallback pipelines: if local inference latency exceeds threshold, query Gemini Flash API via encrypted channel.',
      'Implemented sliding-window context compression to prevent local model context overflow on multi-file queries.'
    ],
    keyFeatures: [
      '100% private offline mode with zero telemetry transmission',
      'Local git commit message and PR description generator',
      'AST-aware syntax error diagnosis with actionable patch previews'
    ],
    futureRoadmap: [
      'Support for multi-agent peer review loop (Architect Agent + Linter Agent + Tester Agent)'
    ],
    links: {
      github: 'https://github.com/vasanthabalan/neuralflow-agent',
      demo: '#',
      docs: '#'
    }
  },
  {
    id: 'agrishield-ai',
    title: 'AgriShield AI',
    category: 'Full-Stack × AgriTech',
    tagline: 'Deep Learning Crop Pathology & Localized Advisory System',
    description: 'Computer vision web application for rural agricultural resilience. Farmers capture leaf photographs to detect plant diseases in real time, receiving actionable remediation guidance in regional languages alongside weather risk predictions.',
    status: 'Completed',
    badge: 'HACKATHON WINNER CONCEPT',
    image: './assets/images/project-agrishield.jpg',
    technologies: ['React', 'Flask', 'PyTorch', 'MobileNetV3', 'Tailwind CSS', 'OpenWeatherMap API'],
    problem: 'Smallholder farmers experience severe crop losses (up to 35%) because plant pathology services are geographically inaccessible or too slow to prevent blight spreading.',
    solution: 'Trained a lightweight MobileNetV3 model on 50,000+ plant leaf images achieving 94.8% classification accuracy, deployed via an optimized Flask inference engine suitable for low-bandwidth rural connections.',
    architecture: {
      overview: 'PWA frontend with client-side image compression feeding a PyTorch inference pipeline and regional advisory translator.',
      steps: [
        {
          title: 'Image Capture',
          desc: 'Client-side camera capture with auto-focus and low-light enhancement filter.',
          icon: 'Camera'
        },
        {
          title: 'Model Inference',
          desc: 'MobileNetV3 classifier outputs top-3 disease probabilities with confidence scores.',
          icon: 'ShieldCheck'
        },
        {
          title: 'Multilingual Treatment',
          desc: 'Translates biological remedies and chemical controls into Tamil and English.',
          icon: 'Languages'
        }
      ]
    },
    engineeringDecisions: [
      'Quantized PyTorch weights into ONNX format, reducing model binary from 90MB to 18MB for fast mobile loading.',
      'Designed offline caching PWA service worker so previously viewed disease remedies remain accessible in fields without signal.'
    ],
    keyFeatures: [
      'Real-time leaf disease classification across 14 crop varieties',
      'Step-by-step organic vs chemical mitigation protocols',
      'Hyper-local precipitation and humidity forecasting'
    ],
    futureRoadmap: [
      'Integration with satellite vegetation index (NDVI) mapping'
    ],
    links: {
      github: 'https://github.com/vasanthabalan/agrishield-ai',
      demo: 'https://agrishield.vercel.app',
      docs: '#'
    }
  },
  {
    id: 'finpulse-advisory',
    title: 'FinPulse Advisory',
    category: 'FinTech',
    tagline: 'Quantitative Risk Modeling & Investment Simulation Platform',
    description: 'Modern financial analytics portal offering portfolio stress testing, Monte Carlo risk projections, and algorithmic rebalancing simulations tailored for early-career professionals.',
    status: 'Prototype',
    badge: 'QUANT EXPERIMENT',
    image: './assets/images/project-finpulse.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Chart.js', 'PostgreSQL'],
    problem: 'Retail investors lack accessible tools to understand drawdown probability and asset correlation during volatile macroeconomic conditions.',
    solution: 'Constructed an interactive quant dashboard that computes Sharpe ratio, Value at Risk (VaR), and simulates 1,000 Monte Carlo trajectories over 5-year investment horizons.',
    architecture: {
      overview: 'High-throughput Node.js backend executing statistical vector computations and serving interactive Chart.js canvas visualizations.',
      steps: [
        {
          title: 'Portfolio Input',
          desc: 'User inputs asset allocation weights across equities, fixed income, and commodities.',
          icon: 'PieChart'
        },
        {
          title: 'Historical Covariance',
          desc: 'Fetches historical return matrices to calculate risk-adjusted Sharpe ratios.',
          icon: 'TrendingUp'
        },
        {
          title: 'Simulation',
          desc: 'Runs 1,000 Monte Carlo iterations to map worst 5% percentile downside risk.',
          icon: 'BarChart'
        }
      ]
    },
    engineeringDecisions: [
      'Leveraged Web Workers for client-side Monte Carlo calculations to keep UI buttery smooth at 60fps.',
      'Normalized financial decimal values using arbitrary-precision math libraries to eliminate floating-point rounding errors.'
    ],
    keyFeatures: [
      'Interactive asset allocation slider with live covariance recalculation',
      'Monte Carlo drawdown confidence bands (90%, 95%, 99%)',
      'Tax-loss harvesting and rebalancing threshold alerts'
    ],
    futureRoadmap: [
      'Real-time WebSocket market ticker feed integration'
    ],
    links: {
      github: 'https://github.com/vasanthabalan/finpulse-advisory',
      demo: '#',
      docs: '#'
    }
  },
  {
    id: 'ecoroute-logistics',
    title: 'EcoRoute Logistics',
    category: 'Systems × IoT',
    tagline: 'Smart Waste Collection & Dynamic Vehicle Routing Optimization',
    description: 'Urban municipal route optimization engine that solves capacitated vehicle routing problems (CVRP) to minimize fuel consumption and carbon footprint in municipal waste management.',
    status: 'Completed',
    badge: 'OPTIMIZATION ENGINE',
    image: './assets/images/project-ecoroute.jpg',
    technologies: ['React', 'C++', 'Python', 'Leaflet.js', 'OpenStreetMap API'],
    problem: 'Municipal sanitation fleets operate on static fixed schedules, resulting in fuel wastage visiting half-empty bins while overflowing containers trigger environmental hazards.',
    solution: 'Designed a hybrid heuristic solver (Simulated Annealing + Nearest Neighbor) implemented in C++ and wrapped with a Python API, cutting simulated fleet fuel consumption by 28%.',
    architecture: {
      overview: 'C++ core optimization binary compiled with WebAssembly / Python bindings serving dynamic geocoded routes to a React/Leaflet mapping UI.',
      steps: [
        {
          title: 'Bin Telemetry',
          desc: 'Simulated sensor inputs report fill percentages across 120 city collection nodes.',
          icon: 'Radio'
        },
        {
          title: 'Graph Formulation',
          desc: 'Constructs weighted directed graph with live road traffic costs.',
          icon: 'Network'
        },
        {
          title: 'Route Optimization',
          desc: 'Solves CVRP with capacity constraints using C++ simulated annealing.',
          icon: 'Compass'
        }
      ]
    },
    engineeringDecisions: [
      'Core graph algorithm written in C++ with bitmask optimization for 40x speedup over pure Python routing loops.',
      'Implemented vector tile caching for Leaflet mapping to ensure smooth rendering on low-end municipal tablets.'
    ],
    keyFeatures: [
      'Dynamic turn-by-turn fleet dispatch map with waypoint reordering',
      'Carbon footprint reduction tracker with exportable CSV reports',
      'Emergency overflow alert queue with priority vehicle rerouting'
    ],
    futureRoadmap: [
      'Hardware IoT LoRaWAN fill-level sensor transceiver prototype'
    ],
    links: {
      github: 'https://github.com/vasanthabalan/ecoroute-logistics',
      demo: '#',
      docs: '#'
    }
  },
  {
    id: 'cybersentinel',
    title: 'CyberSentinel Radar',
    category: 'Cybersecurity',
    tagline: 'Automated Port Scanner & Vulnerability Footprint Analyzer',
    description: 'A network reconnaissance utility and web security auditor that performs asynchronous port probing, TLS certificate validation, and CVE vulnerability fingerprinting.',
    status: 'Completed',
    badge: 'SECURITY TOOL',
    image: './assets/images/project-cybersentinel.jpg',
    technologies: ['Go', 'Python', 'React', 'Docker', 'Nmap Engine'],
    problem: 'Small teams and student builders deploy web applications with exposed debug ports, default credentials, and deprecated SSL/TLS cipher suites.',
    solution: 'Built an automated scanning orchestrator that checks target IP/domains against the OWASP Top 10 footprint and produces formatted remediation roadmaps.',
    architecture: {
      overview: 'Containerized scanner engine dispatching concurrent async TCP socket probes with structured JSON report generation.',
      steps: [
        {
          title: 'DNS Resolution',
          desc: 'Performs DNS enumeration, subdomain mapping, and WHOIS lookup.',
          icon: 'Globe'
        },
        {
          title: 'Port Fingerprinting',
          desc: 'Runs non-intrusive SYN/ACK port sweeps across top 1,000 common services.',
          icon: 'Server'
        },
        {
          title: 'Security Scoring',
          desc: 'Assigns CVSS-style risk ratings with specific configuration remediation snippets.',
          icon: 'ShieldAlert'
        }
      ]
    },
    engineeringDecisions: [
      'Implemented rate-limiting token bucket algorithms to prevent accidental network flooding or firewall blacklisting.',
      'Isolated scanner execution in sandboxed Docker containers for reproducibility and host security.'
    ],
    keyFeatures: [
      'Visual port status map with service banner extraction',
      'TLS certificate expiration and cipher strength audit',
      'One-click PDF/JSON audit report export for security compliance'
    ],
    futureRoadmap: [
      'Automated CI/CD GitHub Action plugin for pre-deployment security regression checks'
    ],
    links: {
      github: 'https://github.com/vasanthabalan/cybersentinel',
      demo: '#',
      docs: '#'
    }
  }
];

export const HACKATHON_SPRINT: HackathonExperience[] = [
  {
    id: 'hack-1',
    title: 'National AI & Cloud Hackathon',
    track: 'AI × Social Impact',
    timeframe: '36 Hours Non-Stop',
    tagline: 'Zero to Production MVP under High Stakes',
    projectBuilt: 'AgriShield AI — Multilingual Crop Pathology Engine',
    keyChallenge: 'Running heavy neural network inference within 800ms on low-cost serverless compute.',
    takeaway: 'Model quantization (ONNX) and aggressive client-side caching are critical for lightning-fast live judging demos.',
    tech: ['React', 'Flask', 'PyTorch', 'ONNX', 'Tailwind']
  },
  {
    id: 'hack-2',
    title: 'Smart City & Urban Systems Hackathon',
    track: 'Smart Infrastructure & IoT',
    timeframe: '24 Hours Sprint',
    tagline: 'Solving Real Municipal Complexities with Algorithmic Rigor',
    projectBuilt: 'EcoRoute Logistics — Graph-Based CVRP Solver',
    keyChallenge: 'Calculating optimal routes across 100+ simulated GPS nodes without freezing browser map rendering.',
    takeaway: 'Offloading core NP-hard graph heuristics to compiled C++ subroutines yielded instant 40x speedups.',
    tech: ['C++', 'Python', 'Leaflet', 'WebAssembly', 'OpenStreetMap']
  },
  {
    id: 'hack-3',
    title: 'FinTech Innovation Challenge',
    track: 'Next-Gen Wealth Intelligence',
    timeframe: '48 Hours Build',
    tagline: 'Bridging Quant Math with Consumer-Grade UX',
    projectBuilt: 'FinPulse — Risk Covariance & Monte Carlo Simulator',
    keyChallenge: 'Ensuring 1,000 statistical iterations execute seamlessly without locking the React main thread.',
    takeaway: 'Web Workers and responsive SVG charting make complex financial modeling instantly digestible to non-technical judges.',
    tech: ['TypeScript', 'React', 'Web Workers', 'Node.js', 'Chart.js']
  }
];

export const BUILD_LOG: BuildLogItem[] = [
  {
    id: 'log-1',
    index: '01',
    title: 'DSA Consistency & Dynamic Programming Mastery',
    status: 'Continuous Practice',
    category: 'Algorithms',
    date: 'Active',
    description: 'Targeting 500+ solved problems with deep focus on multi-dimensional DP, segment trees, and monotonic stack variations.'
  },
  {
    id: 'log-2',
    index: '02',
    title: 'Local LLM Orchestration & Offline Agent Workflows',
    status: 'Active Testing',
    category: 'Artificial Intelligence',
    date: 'Active',
    description: 'Benchmarking Qwen2.5-Coder and DeepSeek-R1 running via Ollama locally to automate unit test generation and AST refactoring.'
  },
  {
    id: 'log-3',
    index: '03',
    title: 'Memory Stack Core Algorithm & Spaced Repetition Engine',
    status: 'In Progress',
    category: 'Product Engineering',
    date: 'Building',
    description: 'Implementing the Ebbinghaus memory decay calculator and personalized revision queue generation in Flask + MongoDB.'
  },
  {
    id: 'log-4',
    index: '04',
    title: 'System Design & High-Throughput API Architecture',
    status: 'Exploration',
    category: 'Backend Systems',
    date: 'Active',
    description: 'Deep diving into database indexing internals, distributed caching with Redis, and message broker patterns.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Problem Solving & DSA',
    description: 'Algorithmic depth tested across 750+ combined competitive platforms.',
    skills: [
      { name: 'C++', level: 'Primary Language', tag: 'Core' },
      { name: 'Data Structures', level: 'Advanced', tag: 'Core' },
      { name: 'Algorithms', level: 'Advanced', tag: 'Core' },
      { name: 'Dynamic Programming', level: 'Proficient', tag: 'DSA' },
      { name: 'Graph Theory & MST', level: 'Proficient', tag: 'DSA' },
      { name: 'Binary Search & 2-Pointers', level: 'Mastered', tag: 'DSA' },
      { name: 'Sliding Window', level: 'Mastered', tag: 'DSA' },
      { name: 'Trees & Heaps', level: 'Proficient', tag: 'DSA' },
    ]
  },
  {
    title: 'Full-Stack Development',
    description: 'Building responsive, type-safe, end-to-end web applications and services.',
    skills: [
      { name: 'React', level: 'Frontend Core', tag: 'Web' },
      { name: 'TypeScript', level: 'Type Safety', tag: 'Web' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', tag: 'Web' },
      { name: 'Node.js & Express', level: 'Backend APIs', tag: 'Backend' },
      { name: 'Python & Flask', level: 'Backend / AI', tag: 'Backend' },
      { name: 'Tailwind CSS', level: 'Design Systems', tag: 'UI' },
      { name: 'HTML5 & CSS3', level: 'Semantic / Modern', tag: 'UI' },
      { name: 'Vite', level: 'Build Tooling', tag: 'DevOps' },
    ]
  },
  {
    title: 'Data & Databases',
    description: 'Designing normalized schemas, relational structures, and fast queries.',
    skills: [
      { name: 'MongoDB', level: 'Document Store', tag: 'NoSQL' },
      { name: 'PostgreSQL / SQL', level: 'Relational DB', tag: 'SQL' },
      { name: 'Supabase', level: 'BaaS & Realtime', tag: 'Cloud' },
      { name: 'Data Modeling', level: 'Architecture', tag: 'Database' },
    ]
  },
  {
    title: 'Artificial Intelligence',
    description: 'Integrating local LLMs, AI APIs, and computer vision models into real products.',
    skills: [
      { name: 'Gemini API', level: 'Production AI', tag: 'LLM' },
      { name: 'Ollama & Local LLMs', level: 'Local Agent', tag: 'Edge AI' },
      { name: 'Qwen2.5-Coder', level: 'Code Modeling', tag: 'LLM' },
      { name: 'PyTorch Basics', level: 'Computer Vision', tag: 'ML' },
      { name: 'AI-Assisted Dev', level: 'High Velocity', tag: 'Productivity' },
    ]
  },
  {
    title: 'Tools & Workflow',
    description: 'Industry-standard developer toolchain and media production software.',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', tag: 'DevOps' },
      { name: 'VS Code & Antigravity', level: 'Environment', tag: 'Tool' },
      { name: 'Postman & Thunder Client', level: 'API Testing', tag: 'Testing' },
      { name: 'DaVinci Resolve', level: 'Video Production', tag: 'Creative' },
      { name: 'Docker (Basics)', level: 'Containerization', tag: 'DevOps' },
    ]
  }
];

export const CREATIVE_SHOWCASE: CreativeItem[] = [
  {
    id: 'davinci-workflow',
    title: 'Cinematic Storytelling & DaVinci Resolve',
    role: 'Editor & Colorist',
    software: ['DaVinci Resolve Studio', 'Color Grading', 'Sound Design'],
    description: 'Crafting high-retention visual stories, tech project overviews, and short-form media with deliberate pacing, color grading, and crisp sound staging.',
    aspectRatio: '16:9',
    image: './assets/images/profile-vintage-column.jpg',
    tag: 'VIDEO EDITING',
    quote: 'Code builds the engine; storytelling gives it a voice.'
  },
  {
    id: 'poster-branding',
    title: 'Visual Identity & Tech Posters',
    role: 'Creative Technologist',
    software: ['Photoshop', 'Typography Design', 'Poster Layout'],
    description: 'Combining monospace typography, raw editorial contrast, and cyber aesthetics to communicate software engineering discipline and focus.',
    aspectRatio: '9:16',
    image: './assets/images/profile-editorial-stairs.jpg',
    tag: 'EDITORIAL DESIGN',
    quote: 'Progress is better than perfection.'
  },
  {
    id: 'studio-portrait-art',
    title: 'Cyberpunk Lighting & Studio Photography',
    role: 'Visual Concept & Direction',
    software: ['Lighting Design', 'Contrast Calibration'],
    description: 'Studio sessions playing with dual-tone crimson lights, deep obsidian shadows, and technical HUD overlays.',
    aspectRatio: '9:16',
    image: './assets/images/profile-crimson-glow.jpg',
    tag: 'CREATIVE DIRECTION',
    quote: 'Focus. Build. Create.'
  }
];

export const CAREER_TRAJECTORY = [
  {
    step: '01',
    role: 'Computer Science Student',
    location: 'Chennai Institute of Technology',
    description: 'Building deep foundations in Operating Systems, Database Management, Computer Networks, and Theory of Computation.',
    badge: 'FOUNDATION'
  },
  {
    step: '02',
    role: 'Competitive Problem Solver',
    location: 'LeetCode & Skillrack',
    description: '400+ LeetCode problems, 350+ Skillrack solutions. Daily algorithmic rigor honing time-space complexity trade-offs.',
    badge: 'ALGORITHMS'
  },
  {
    step: '03',
    role: 'Full-Stack & Hackathon Builder',
    location: 'Rapid Prototyping War Rooms',
    description: 'Shipping real products under 24–48h pressure. Transforming complex user problems into robust, working prototypes.',
    badge: 'SYSTEMS'
  },
  {
    step: '04',
    role: 'AI-Assisted Systems Engineer',
    location: 'Local LLMs & Modern Toolchains',
    description: 'Leveraging AI agents, local models, and automation to write cleaner code, test edge cases faster, and build higher-impact architectures.',
    badge: 'AI & TOOLING'
  },
  {
    step: '05',
    role: 'Aspiring Software Development Engineer',
    location: 'Global Engineering Teams',
    description: 'Ready to contribute to mission-critical distributed systems, scalable services, and high-impact consumer products.',
    badge: 'THE GOAL'
  }
];
