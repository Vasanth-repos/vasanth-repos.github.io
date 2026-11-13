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
    github: 'https://github.com/Vasanth-repos',
    linkedin: 'https://www.linkedin.com/in/vasanthabalanb/',
    leetcode: 'https://leetcode.com/u/Vasanththesovereign/',
    skillrack: 'https://www.skillrack.com',
    email: 'vasanthabalanb4@gmail.com',
  },
  images: {
    heroHud: './assets/images/vasanthabalan-portrait-bw.jpg',
    heroColor: './assets/images/vasanthabalan-portrait-color.jpg',
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
    id: 'core-areas',
    value: 4,
    suffix: '+',
    label: 'Core Focus Areas',
    sublabel: 'DSA, Full-Stack, Local AI & Systems',
    iconName: 'Cpu',
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
      github: 'https://github.com/Vasanth-repos/memory-stack',
      demo: 'https://memory-stack.vercel.app',
      docs: '#'
    }
  },
];

export const HACKATHON_SPRINT: HackathonExperience[] = [];

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
