import { Project, SkillCategory, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ronash Dahal',
  headline: 'Class 11 Computer Engineering Student & Full-Stack Developer',
  location: 'Letang-3, Morang, Nepal',
  email: 'hackerronash@gmail.com',
  github: 'https://github.com/RonashDahal',
  githubUsername: 'RonashDahal',
  facebook: 'https://www.facebook.com/usha.dahal.3150',
  instagram: 'https://www.instagram.com/ronashdahal/',
  portfolioBlog: 'https://ronashdahal.github.io/portfolio/',
  avatarUrl: '/avatar.jpg',
  bio: 'A passionate Class 11 Computer Engineering student and developer dedicated to building lightweight, high-utility tools and scalable web systems. Balancing modern web engineering with defensive cybersecurity research.',
  techGoal: 'To bridge the gap between robust software engineering and cybersecurity defense (DevSecOps).',
  funFact: 'I can cook a five-star meal while my code is compiling! 🍳',
  status: 'Open for collaborations, tech internships & freelance projects',
  stats: {
    publicRepos: 8,
    primaryFocus: 'DevSecOps & Web Apps',
    educationLevel: 'Grade 11 Computer Engineering',
    yearsCoding: '3+ Years Coding'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'expendo',
    name: 'Expendo',
    title: 'Enterprise Expense & Budget Tracker',
    category: 'Full Stack',
    description: 'A full-featured expense management engine built with PHP & MySQL for structured financial tracking and cashflow analysis.',
    longDescription: 'Expendo enables individuals and small businesses to monitor income streams, categorize daily expenses, set budget thresholds, and generate monthly analytical summaries. Designed with lightweight relational database queries and secure session auth.',
    technologies: ['PHP', 'MySQL', 'CSS3', 'JavaScript', 'Apache'],
    githubUrl: 'https://github.com/RonashDahal/Expendo',
    featured: true,
    status: 'Completed',
    icon: 'Wallet',
    metrics: 'Multi-category balance & analytics'
  },
  {
    id: 'digital-pasal',
    name: 'Digital Pasal',
    title: 'E-Commerce Infrastructure Platform',
    category: 'E-Commerce',
    description: 'A high-conversion digital store platform built for rapid digital scaling with intuitive inventory management.',
    longDescription: 'Digital Pasal ("Digital Shop") provides an online marketplace architecture featuring structured product catalogs, dynamic cart recalculations, customer order capture, and intuitive merchant administration designed for local Nepali businesses.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Responsive UI'],
    githubUrl: 'https://github.com/RonashDahal/DigitalPasal',
    featured: true,
    status: 'Completed',
    icon: 'ShoppingBag',
    metrics: 'Dynamic cart & product management'
  },
  {
    id: 'emi-calculator',
    name: 'EMI Calculator (Nepal Rs.)',
    title: 'Nepalese Rupee Loan & Installment Engine',
    category: 'Frontend & Tools',
    description: 'A sleek, mobile-responsive EMI financial calculator tailored for Nepalese Rupees (Rs.) with instant monthly breakdown.',
    longDescription: 'Calculates monthly installments, principal payments, down-payment reductions, and total accrued interest. Features real-time sliders and Nepali regional currency comma formatting (Lakhs & Crores notation).',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Financial Math'],
    githubUrl: 'https://github.com/RonashDahal/EMI-calculator-',
    featured: true,
    status: 'Live',
    icon: 'Calculator',
    metrics: 'Regional NPR formatting with live simulation',
    hasInteractiveDemo: true
  },
  {
    id: 'momathela',
    name: 'Moma-Thela',
    title: 'Food-Tech Ordering & Quick-Checkout UI',
    category: 'E-Commerce',
    description: 'Specialized food-ordering web application prioritizing an appetizing visual hierarchy and frictionless checkout flows.',
    longDescription: 'An interactive food vendor platform crafted with responsive mobile-first architecture, animated menu items, spice-level modifiers, and smooth customer order state management.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design'],
    githubUrl: 'https://github.com/RonashDahal/Moma-Thela',
    featured: true,
    status: 'Live',
    icon: 'Utensils',
    metrics: 'Fast mobile checkout & menu animations'
  },
  {
    id: 'dada-cinemas',
    name: 'Dada Cinemas',
    title: 'Movie Discovery & Cinema Catalog',
    category: 'Full Stack',
    description: 'A responsive movie portal where users can discover, search, and inspect cinema releases, posters, genres, and ratings.',
    longDescription: 'Built to provide a clean movie browsing experience across all screen sizes. Features poster galleries, release year filtering, synopsis cards, and quick genre sorting.',
    technologies: ['PHP', 'HTML5', 'CSS3', 'Movie Database API'],
    githubUrl: 'https://github.com/RonashDahal/Dada-Cinemas',
    featured: false,
    status: 'Completed',
    icon: 'Film',
    metrics: 'Searchable movie catalog & responsive posters'
  },
  {
    id: 'class-routine-9',
    name: 'ClassRoutine-9-',
    title: 'Academic Routine & Timetable Manager',
    category: 'Frontend & Tools',
    description: 'A structured timetable and period scheduling tool engineered by Ronash during Grade 9 to organize school routines.',
    longDescription: 'An early engineering milestone demonstrating proactive software solutions for real-life student workflows. Allows quick daily period lookup, subject timings, and teacher schedule overview.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/RonashDahal/ClassRoutine-9-',
    featured: false,
    status: 'Completed',
    icon: 'Calendar',
    metrics: 'Early academic automation utility'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    description: 'Core languages used across backend systems, web logic, and academic computer science coursework.',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', percentage: 90, icon: 'js' },
      { name: 'PHP', level: 'Proficient', percentage: 85, icon: 'php' },
      { name: 'HTML5 & CSS3', level: 'Expert', percentage: 95, icon: 'html' },
      { name: 'C & C++', level: 'Academic Proficient', percentage: 80, icon: 'cpp' },
      { name: 'Java', level: 'Intermediate', percentage: 75, icon: 'java' },
      { name: 'SQL', level: 'Proficient', percentage: 85, icon: 'mysql' }
    ]
  },
  {
    category: 'Backend & Data Architecture',
    description: 'Building secure server logic, relational database schemas, and clean client-server communication.',
    skills: [
      { name: 'MySQL Database', level: 'Proficient', percentage: 85, icon: 'mysql' },
      { name: 'Apache & LAMP Stack', level: 'Proficient', percentage: 82, icon: 'server' },
      { name: 'RESTful Logic & CRUD', level: 'Advanced', percentage: 88, icon: 'code' },
      { name: 'Session & Auth Control', level: 'Proficient', percentage: 80, icon: 'shield' }
    ]
  },
  {
    category: 'Defensive Security & DevSecOps',
    description: 'Exploring web vulnerability assessments, offensive penetration concepts, and defensive mitigations.',
    skills: [
      { name: 'Web Penetration Testing', level: 'Practitioner', percentage: 80, icon: 'shield-alert' },
      { name: 'OWASP Security Fundamentals', level: 'Practitioner', percentage: 82, icon: 'lock' },
      { name: 'Git & Version Control', level: 'Advanced', percentage: 88, icon: 'git' },
      { name: 'Linux Terminal & Shell', level: 'Proficient', percentage: 84, icon: 'terminal' }
    ]
  },
  {
    category: 'Creative Production & Tools',
    description: 'Multimedia editing, interface prototyping, and developer tooling for end-to-end presentation.',
    skills: [
      { name: 'Adobe Premiere Pro', level: 'Advanced Editor', percentage: 85, icon: 'pr' },
      { name: 'Adobe Photoshop', level: 'Intermediate', percentage: 80, icon: 'ps' },
      { name: 'VS Code & Dev Tools', level: 'Power User', percentage: 92, icon: 'vscode' },
      { name: 'WordPress Development', level: 'Proficient', percentage: 78, icon: 'wordpress' }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2026',
    title: 'Class 11 Computer Engineering & DevSecOps Focus',
    subtitle: 'Higher Secondary Technical Education',
    description: 'Deepening foundations in system architecture, data structures, algorithm design, defensive cybersecurity research, and modern web application scaling.',
    badge: 'Current Pursuit'
  },
  {
    year: '2025 – 2026',
    title: 'Full-Stack Web Deployments (Expendo & Digital Pasal)',
    subtitle: 'Production Applications & GitHub Open Source',
    description: 'Engineered relational database-driven web platforms including the Expendo expense system, Digital Pasal e-commerce infrastructure, and Dada Cinemas movie showcase.',
    badge: 'Key Deployments'
  },
  {
    year: '2024',
    title: 'Class 9 Routine System & Early Programming',
    subtitle: 'Letang-3, Morang, Nepal',
    description: 'Started engineering student utility software with ClassRoutine-9-, exploring web technologies, C programming fundamentals, and interactive script building.',
    badge: 'Foundation'
  }
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: 'help', desc: 'Display all available terminal commands' },
  { cmd: 'whoami', desc: 'Print details about Ronash Dahal' },
  { cmd: 'projects', desc: 'List active repositories and software builds' },
  { cmd: 'skills', desc: 'Inspect verified technical skill matrix' },
  { cmd: 'security', desc: 'Run cyber security & pen-testing assessment' },
  { cmd: 'contact', desc: 'Get direct communication endpoints' },
  { cmd: 'cook', desc: 'Execute chef module easter egg' },
  { cmd: 'cat flag.txt', desc: 'Try CTF challenge flag extraction' },
  { cmd: 'clear', desc: 'Clear the terminal output screen' }
];
