export interface Project {
  id: string;
  name: string;
  title: string;
  category: 'Full Stack' | 'Frontend & Tools' | 'E-Commerce' | 'Cyber Security';
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: 'Completed' | 'Live' | 'In Progress';
  icon: string;
  metrics?: string;
  hasInteractiveDemo?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g., 'Advanced', 'Proficient', 'Exploring'
    percentage: number;
    icon: string; // skillicons or lucide
    details?: string;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface TerminalCommand {
  command: string;
  output: string | string[];
}
