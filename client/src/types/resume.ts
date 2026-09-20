export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  photoUrl?: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  jobTitle: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role?: string;
  technologies: string[];
  link?: string;
  description: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export interface CustomSectionItem {
  id: string;
  heading: string;
  items: Array<{
    title: string;
    subtitle?: string;
    date?: string;
    description?: string;
  }>;
}

export type FontFamilyOption = 'Inter' | 'Plus Jakarta Sans' | 'Roboto' | 'Outfit' | 'Playfair Display' | 'Merriweather' | 'JetBrains Mono';
export type FontSizeOption = 'compact' | 'normal' | 'large';
export type SpacingOption = 'tight' | 'normal' | 'relaxed';

export interface ResumeStyle {
  accentColor: string;
  isMonochrome: boolean;
  fontFamily: FontFamilyOption;
  fontSize: FontSizeOption;
  spacing: SpacingOption;
  showPhoto: boolean;
}

export interface ResumeData {
  _id?: string;
  id?: string;
  title: string;
  templateId: string;
  style: ResumeStyle;
  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  customSections: CustomSectionItem[];
  updatedAt?: string | Date;
}

export interface TemplateDefinition {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category:
    | 'Modern'
    | 'Executive'
    | 'Tech'
    | 'Academic'
    | 'Creative'
    | 'ATS Minimal'
    | 'Students & Entry'
    | 'Operations'
    | 'Finance & Audit'
    | 'Admin & Office'
    | 'Colorful & Vibrant';
  badgeText: string;
  previewGradient: string;
  supportsPhoto: boolean;
}

export interface ColorPreset {
  name: string;
  hex: string;
  secondary: string;
  label: string;
}

export const COLOR_PRESETS: ColorPreset[] = [
  { name: 'Ocean Navy', hex: '#0284c7', secondary: '#e0f2fe', label: 'Classic Professional' },
  { name: 'Emerald Forest', hex: '#059669', secondary: '#d1fae5', label: 'Modern & Growth' },
  { name: 'Midnight Indigo', hex: '#4f46e5', secondary: '#e0e7ff', label: 'Tech & Vision' },
  { name: 'Crimson Burgundy', hex: '#be123c', secondary: '#ffe4e6', label: 'Executive Authority' },
  { name: 'Royal Slate', hex: '#334155', secondary: '#f1f5f9', label: 'Corporate Neutral' },
  { name: 'Amethyst Purple', hex: '#7c3aed', secondary: '#ede9fe', label: 'Creative & Lead' },
  { name: 'Forest Teal', hex: '#0d9488', secondary: '#ccfbf1', label: 'Balanced & Fresh' },
  { name: 'Sunset Amber', hex: '#d97706', secondary: '#fef3c7', label: 'Warm & Dynamic' },
  { name: 'Rose Gold', hex: '#e11d48', secondary: '#fff1f2', label: 'Chic & Bold' },
  { name: 'Electric Cyan', hex: '#0891b2', secondary: '#cffafe', label: 'Futuristic' },
];

export const TEMPLATES: TemplateDefinition[] = [
  {
    id: 'vibrant-gradient-header',
    name: 'Prism Vibrant Gradient',
    tagline: 'Multi-color sunset & electric prism top banner',
    description: 'Dynamic gradient header with glowing contact chips, soft tinted skill boxes, and high-impact timeline cards.',
    category: 'Colorful & Vibrant',
    badgeText: 'Vibrant Prism',
    previewGradient: 'from-fuchsia-500 via-rose-500 to-amber-400',
    supportsPhoto: true,
  },
  {
    id: 'vivid-duotone-accent',
    name: 'Vivid Duotone Infographic',
    tagline: 'Dual-tone vertical sidebar with neon accent pills',
    description: 'Rich dual-tone gradient sidebar, rounded photo frame with active badge, and modern milestone project cards.',
    category: 'Colorful & Vibrant',
    badgeText: 'Vivid Duotone',
    previewGradient: 'from-violet-600 via-blue-500 to-cyan-400',
    supportsPhoto: true,
  },
  {
    id: 'emerald-mint-fresh',
    name: 'Emerald Mint Botanical',
    tagline: 'Refreshing mint & botanical forest growth palette',
    description: 'Fresh emerald ribbon headers, soft mint background cards, and crisp diamond bullet nodes for modern leaders.',
    category: 'Colorful & Vibrant',
    badgeText: 'Mint Growth',
    previewGradient: 'from-emerald-500 via-teal-500 to-cyan-400',
    supportsPhoto: true,
  },
  {
    id: 'sunset-coral-bold',
    name: 'Sunset Coral & Warm Amber',
    tagline: 'Warm energetic coral, rose & golden amber gradient',
    description: 'Radiant sunset gradient header, warm tinted metadata badges, and contrasting dark-slate content hierarchy.',
    category: 'Colorful & Vibrant',
    badgeText: 'Sunset Coral',
    previewGradient: 'from-rose-500 via-pink-500 to-amber-400',
    supportsPhoto: true,
  },
  {
    id: 'neon-tech-cyber',
    name: 'Cyber Neon & Electric Violet',
    tagline: 'High-contrast cyber header with glowing tech tags',
    description: 'Futuristic dark-ink header with electric cyan & neon violet badges, monospace terminal accents, and tech matrix.',
    category: 'Colorful & Vibrant',
    badgeText: 'Cyber Neon',
    previewGradient: 'from-cyan-400 via-indigo-600 to-purple-700',
    supportsPhoto: true,
  },
  {
    id: 'modern-clean',
    name: 'Modern Clean',
    tagline: 'Sleek, contemporary single-column layout',
    description: 'Perfect for all industries with balanced whitespace, subtle section lines, and crisp typography.',
    category: 'Modern',
    badgeText: 'Most Popular',
    previewGradient: 'from-sky-500 to-indigo-600',
    supportsPhoto: true,
  },
  {
    id: 'fresh-graduate-student',
    name: 'Fresh Graduate & Student',
    tagline: 'Education & Academic projects first format',
    description: 'Tailored for university students, recent graduates, and interns showcasing degrees, GPA, capstone projects, and campus leadership.',
    category: 'Students & Entry',
    badgeText: 'Fresh Talent',
    previewGradient: 'from-cyan-500 to-blue-600',
    supportsPhoto: true,
  },
  {
    id: 'supply-chain-logistics',
    name: 'Supply Chain & Logistics',
    tagline: 'Operations, ERP, procurement & freight metrics',
    description: 'Structured layout for supply chain managers, logistics coordinators, and warehouse supervisors with KPI callouts and APICS/CSCP badges.',
    category: 'Operations',
    badgeText: 'SCM Standard',
    previewGradient: 'from-teal-600 to-slate-900',
    supportsPhoto: true,
  },
  {
    id: 'auditor-compliance',
    name: 'Auditor & Risk Compliance',
    tagline: 'SOX, GAAP, IFRS & Internal Audit precision grid',
    description: 'Engineered for financial auditors, risk advisors, and compliance officers highlighting internal controls, audit engagements, and CPA credentials.',
    category: 'Finance & Audit',
    badgeText: 'Audit Precision',
    previewGradient: 'from-blue-900 to-slate-800',
    supportsPhoto: true,
  },
  {
    id: 'computer-operator',
    name: 'Computer Operator & IT',
    tagline: 'Hardware, server maintenance & batch operations',
    description: 'Designed for computer operators, data processing clerks, and IT support technicians with system diagnostics and uptime focus.',
    category: 'Tech',
    badgeText: 'IT Operations',
    previewGradient: 'from-sky-600 to-slate-900',
    supportsPhoto: true,
  },
  {
    id: 'ms-office-executive',
    name: 'MS Office & Admin Specialist',
    tagline: 'Advanced Excel, Word, PPT & Office leadership',
    description: 'Showcases Microsoft Office suite mastery (Excel Pivot/VLOOKUP, PowerPoint, Access), typing speed (WPM), and executive administration.',
    category: 'Admin & Office',
    badgeText: 'Office Pro',
    previewGradient: 'from-blue-600 to-indigo-700',
    supportsPhoto: true,
  },
  {
    id: 'classic-ivy',
    name: 'Harvard Classic Ivy',
    tagline: 'Traditional academic & legal executive standard',
    description: 'Timeless serif typography, centered header, and traditional horizontal dividers with supreme ATS compliance.',
    category: 'Executive',
    badgeText: 'Top ATS Score',
    previewGradient: 'from-amber-600 to-stone-800',
    supportsPhoto: false,
  },
  {
    id: 'tech-minimalist',
    name: 'Tech & Developer Pro',
    tagline: 'Engineered for software engineers & tech leaders',
    description: 'Includes code badges, GitHub/project links, and monospace accents for a high-density tech showcase.',
    category: 'Tech',
    badgeText: 'Tech Favorite',
    previewGradient: 'from-emerald-500 to-cyan-600',
    supportsPhoto: true,
  },
  {
    id: 'creative-sidebar',
    name: 'Creative Split Sidebar',
    tagline: 'Two-column design with elegant accent sidebar',
    description: 'Highlights profile photo, skills, and contact in a stylish colored sidebar with prominent experience section.',
    category: 'Creative',
    badgeText: 'Visual Impact',
    previewGradient: 'from-purple-600 to-pink-500',
    supportsPhoto: true,
  },
  {
    id: 'corporate-executive',
    name: 'Corporate Executive',
    tagline: 'Polished 2-column layout for senior leadership',
    description: 'Sophisticated header banner, executive summary callout, and clean structured career history.',
    category: 'Executive',
    badgeText: 'C-Suite Ready',
    previewGradient: 'from-slate-700 to-blue-900',
    supportsPhoto: true,
  },
  {
    id: 'nordic-crisp',
    name: 'Nordic Crisp Grid',
    tagline: 'Minimalist Scandinavian architectural layout',
    description: 'Generous typography, modern grotesque styling, and subtle grid alignment for design-conscious professionals.',
    category: 'Modern',
    badgeText: 'Designer Choice',
    previewGradient: 'from-teal-500 to-slate-800',
    supportsPhoto: true,
  },
  {
    id: 'monochrome-ats',
    name: 'Monochrome ATS Master',
    tagline: 'Pure black & white, zero graphics, 100% parseable',
    description: 'Engineered specifically to pass every Applicant Tracking System scanner with 100% accuracy.',
    category: 'ATS Minimal',
    badgeText: '100% ATS Safe',
    previewGradient: 'from-gray-700 to-black',
    supportsPhoto: false,
  },
  {
    id: 'luxury-elegance',
    name: 'Luxury Elegance',
    tagline: 'Refined serif aesthetics with monogram header',
    description: 'Tailored for finance, consulting, architecture, and luxury brands with subtle luxury border lines.',
    category: 'Executive',
    badgeText: 'Premium Luxe',
    previewGradient: 'from-amber-700 to-yellow-600',
    supportsPhoto: true,
  },
  {
    id: 'academic-cv',
    name: 'Academic & Research CV',
    tagline: 'Extended curriculum vitae for scholars & medical pros',
    description: 'Expanded sections for research publications, grants, patents, teaching, and conferences.',
    category: 'Academic',
    badgeText: 'Full Academic CV',
    previewGradient: 'from-blue-700 to-indigo-900',
    supportsPhoto: true,
  },
  {
    id: 'startup-dynamic',
    name: 'Startup Dynamic',
    tagline: 'Vibrant timeline with interactive pill tags',
    description: 'Energetic design featuring timeline milestones, project tags, and punchy impact metrics.',
    category: 'Creative',
    badgeText: 'Modern Startup',
    previewGradient: 'from-rose-500 to-amber-500',
    supportsPhoto: true,
  },
];

