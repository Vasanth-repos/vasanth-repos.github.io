export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  status: 'Completed' | 'Building' | 'Live' | 'Prototype';
  metrics?: { label: string; value: string }[];
  problem: string;
  solution: string;
  architecture: {
    steps: { title: string; desc: string; icon: string }[];
    overview: string;
  };
  engineeringDecisions: string[];
  keyFeatures: string[];
  futureRoadmap: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  badge?: string;
  image?: string;
}

export interface MetricItem {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  iconName: string;
  highlight?: boolean;
}

export interface DsaTopic {
  id: string;
  title: string;
  category: string;
  count: number;
  solvedPatterns: string[];
  difficulty: { easy: number; medium: number; hard: number };
  keyConcepts: string[];
  representativeProblem: string;
  timeComplexityFocus: string;
  notes: string;
}

export interface HackathonExperience {
  id: string;
  title: string;
  track: string;
  timeframe: string;
  tagline: string;
  projectBuilt: string;
  keyChallenge: string;
  takeaway: string;
  tech: string[];
}

export interface BuildLogItem {
  id: string;
  index: string;
  title: string;
  status: 'In Progress' | 'Active Testing' | 'Continuous Practice' | 'Exploration';
  category: string;
  date: string;
  description: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  role: string;
  software: string[];
  description: string;
  aspectRatio: string;
  image: string;
  tag: string;
  quote?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon?: string; tag?: string }[];
}
