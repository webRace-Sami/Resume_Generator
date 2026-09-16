import { ResumeData } from '../types/resume';

export const SAMPLE_PROFILES: { label: string; role: string; icon: string; data: ResumeData }[] = [
  {
    label: "Senior Software Engineer",
    role: "Full-Stack / Cloud Architecture",
    icon: "💻",
    data: {
      title: "Alex Rivera - Senior Full Stack Engineer Resume",
      templateId: "modern-clean",
      style: {
        accentColor: "#0284c7",
        isMonochrome: false,
        fontFamily: "Inter",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Alex Rivera",
        jobTitle: "Senior Full-Stack Software Engineer",
        email: "alex.rivera@example.com",
        phone: "+1 (555) 234-5678",
        location: "San Francisco, CA (Open to Remote)",
        website: "https://alexrivera.dev",
        linkedin: "linkedin.com/in/alexrivera-dev",
        github: "github.com/alexrivera-eng",
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        summary: "Results-driven Full-Stack Engineer with 7+ years of experience architecting resilient distributed systems, high-performance web applications, and scalable microservices. Proven track record improving system throughput by 45% and leading cross-functional engineering pods to deliver enterprise SaaS products on time."
      },
      experience: [
        {
          id: "exp-1",
          jobTitle: "Lead Full Stack Engineer",
          company: "Nexus Cloud Systems",
          location: "San Francisco, CA",
          startDate: "2022-03",
          endDate: "",
          isCurrent: true,
          description: [
            "Architected real-time streaming analytics engine using Node.js, TypeScript, Kafka, and React, processing 12M+ daily events with 99.99% uptime.",
            "Spearheaded migration from monolithic codebase to modular micro-frontends with Vite and Next.js, reducing average page load time by 52%.",
            "Mentored a team of 8 frontend and backend engineers, instituting automated CI/CD testing pipelines that cut deployment rollbacks by 80%."
          ]
        },
        {
          id: "exp-2",
          jobTitle: "Senior Software Engineer",
          company: "Vanguard Fintech Solutions",
          location: "San Jose, CA",
          startDate: "2019-06",
          endDate: "2022-02",
          isCurrent: false,
          description: [
            "Engineered secure payment orchestration gateway integrating Stripe, PayPal, and Plaid, facilitating $45M+ in monthly transactions.",
            "Refactored PostgreSQL database schemas and implemented Redis caching, optimizing complex query execution time from 850ms to 45ms.",
            "Designed and shipped automated compliance reporting service adhering to SOC2 and PCI-DSS standards."
          ]
        },
        {
          id: "exp-3",
          jobTitle: "Software Developer",
          company: "PixelCraft Digital Studio",
          location: "Austin, TX",
          startDate: "2017-08",
          endDate: "2019-05",
          isCurrent: false,
          description: [
            "Developed 15+ responsive web applications using React, Redux, and TailwindCSS with WCAG 2.1 AA accessibility compliance.",
            "Collaborated closely with UX designers to create an internal design system component library adopted by 30+ developers."
          ]
        }
      ],
      education: [
        {
          id: "edu-1",
          degree: "Bachelor of Science in Computer Science",
          institution: "University of California, Berkeley",
          location: "Berkeley, CA",
          startDate: "2013-09",
          endDate: "2017-05",
          gpa: "3.85 / 4.0",
          details: "Graduated Magna Cum Laude. President of ACM Student Chapter. Dean's Honors List (All Semesters)."
        }
      ],
      skills: [
        {
          category: "Languages",
          items: ["TypeScript", "JavaScript (ES6+)", "Python", "Go", "SQL", "HTML5/CSS3"]
        },
        {
          category: "Frameworks & Frontend",
          items: ["React", "Next.js", "Vite", "Tailwind CSS", "Redux Toolkit", "GraphQL", "Vue.js"]
        },
        {
          category: "Backend & Cloud",
          items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS (S3, Lambda, ECS)"]
        },
        {
          category: "Tools & Testing",
          items: ["Git", "Jest", "Vitest", "Cypress", "CI/CD (GitHub Actions)", "Microservices", "System Design"]
        }
      ],
      projects: [
        {
          id: "proj-1",
          title: "OmniFlow - AI Workflow Automation Platform",
          role: "Creator & Maintainer",
          technologies: ["TypeScript", "React", "Node.js", "OpenAI API", "PostgreSQL"],
          link: "https://github.com/alexrivera-eng/omniflow",
          description: [
            "Open-source workflow automation platform with visual node-based editor; garnered 2.4k+ GitHub stars and 15k monthly active users.",
            "Built zero-latency WebSocket synchronization for collaborative workspace editing across multiple users."
          ]
        },
        {
          id: "proj-2",
          title: "FastCache - Distributed In-Memory Key-Value Store",
          role: "Core Author",
          technologies: ["Go", "gRPC", "Docker"],
          link: "https://github.com/alexrivera-eng/fastcache",
          description: [
            "High-throughput caching daemon supporting LRU eviction and asynchronous multi-node master-replica replication."
          ]
        }
      ],
      certifications: [
        {
          id: "cert-1",
          name: "AWS Certified Solutions Architect – Associate",
          issuer: "Amazon Web Services",
          date: "2023",
          credentialUrl: "https://aws.amazon.com/verification"
        },
        {
          id: "cert-2",
          name: "Certified Kubernetes Application Developer (CKAD)",
          issuer: "Cloud Native Computing Foundation",
          date: "2022",
          credentialUrl: "https://cncf.io"
        }
      ],
      languages: [
        { language: "English", proficiency: "Native / Bilingual" },
        { language: "Spanish", proficiency: "Professional Working" },
        { language: "German", proficiency: "Elementary" }
      ],
      customSections: [
        {
          id: "custom-1",
          heading: "Honors & Achievements",
          items: [
            {
              title: "Tech Innovation Excellence Award",
              subtitle: "Nexus Cloud Systems",
              date: "2023",
              description: "Awarded top annual engineering honor for designing company-wide automated data pipeline saving $120k/yr."
            }
          ]
        }
      ]
    }
  },
  {
    label: "Corporate Executive & VP",
    role: "Operations & Business Strategy",
    icon: "💼",
    data: {
      title: "Elena Vance - VP of Operations Resume",
      templateId: "corporate-executive",
      style: {
        accentColor: "#334155",
        isMonochrome: false,
        fontFamily: "Outfit",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Elena Vance, MBA",
        jobTitle: "Vice President of Global Operations",
        email: "elena.vance@executive-reach.com",
        phone: "+1 (555) 987-6543",
        location: "New York, NY",
        website: "https://elenavance.com",
        linkedin: "linkedin.com/in/elena-vance-exec",
        photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        summary: "Transformational Executive with 12+ years directing global operations, corporate restructuring, and enterprise digital transformations. Scaled multinational operations across EMEA & APAC, driving $85M in revenue expansion and delivering 28% operational cost efficiencies through lean governance."
      },
      experience: [
        {
          id: "exp-1",
          jobTitle: "Vice President of Global Operations",
          company: "Sterling & Horizon Enterprises",
          location: "New York, NY",
          startDate: "2021-01",
          endDate: "",
          isCurrent: true,
          description: [
            "Oversee $140M operational budget and 240+ multi-disciplinary team members across North America, Europe, and Singapore.",
            "Spearheaded enterprise ERP modernization initiative that consolidated 6 legacy software stacks, cutting annual IT overhead by $4.2M.",
            "Established corporate ESG sustainability framework that improved corporate governance ratings and investor ESG scores by 35%."
          ]
        },
        {
          id: "exp-2",
          jobTitle: "Director of Strategic Operations",
          company: "Apex Capital Management",
          location: "Boston, MA",
          startDate: "2016-04",
          endDate: "2020-12",
          isCurrent: false,
          description: [
            "Orchestrated cross-border M&A post-merger integration of 3 acquired technology companies totaling $65M transaction value.",
            "Revamped global supply chain logistics, decreasing average order fulfillment lead times from 18 days to 5.4 days."
          ]
        }
      ],
      education: [
        {
          id: "edu-1",
          degree: "Master of Business Administration (MBA) - Executive Strategy",
          institution: "Columbia Business School",
          location: "New York, NY",
          startDate: "2014-09",
          endDate: "2016-05",
          gpa: "3.92 / 4.0",
          details: "Dean’s Leadership Fellow. President of Management Consulting Club."
        },
        {
          id: "edu-2",
          degree: "Bachelor of Arts in Economics & Political Science",
          institution: "Georgetown University",
          location: "Washington, D.C.",
          startDate: "2010-09",
          endDate: "2014-05",
          gpa: "3.88 / 4.0"
        }
      ],
      skills: [
        {
          category: "Executive Leadership",
          items: ["Global P&L Management", "Strategic Planning", "Board Advisory", "Cross-Border M&A", "Change Management"]
        },
        {
          category: "Operational Excellence",
          items: ["Lean Six Sigma", "Supply Chain Optimization", "Enterprise ERP (SAP, NetSuite)", "Risk Mitigation", "ESG Compliance"]
        }
      ],
      projects: [
        {
          id: "proj-1",
          title: "Project Phoenix - Enterprise Restructuring",
          role: "Executive Sponsor",
          technologies: ["Lean Governance", "SAP S/4HANA", "Tableau Analytics"],
          description: [
            "Comprehensive 18-month organizational restructuring reducing operational redundancies across 4 international business units."
          ]
        }
      ],
      certifications: [
        {
          id: "cert-1",
          name: "Lean Six Sigma Black Belt (LSSBB)",
          issuer: "ASQ - American Society for Quality",
          date: "2018"
        },
        {
          id: "cert-2",
          name: "Project Management Professional (PMP)",
          issuer: "Project Management Institute (PMI)",
          date: "2016"
        }
      ],
      languages: [
        { language: "English", proficiency: "Native" },
        { language: "French", proficiency: "Fluent" },
        { language: "Mandarin Chinese", proficiency: "Conversational" }
      ],
      customSections: []
    }
  },
  {
    label: "Creative Product Designer",
    role: "UI/UX & Product Design",
    icon: "🎨",
    data: {
      title: "Maya Lin - Lead Product Designer Resume",
      templateId: "creative-sidebar",
      style: {
        accentColor: "#7c3aed",
        isMonochrome: false,
        fontFamily: "Outfit",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Maya Lin",
        jobTitle: "Lead UI/UX & Digital Product Designer",
        email: "maya.lin.design@gmail.com",
        phone: "+1 (555) 432-1098",
        location: "Seattle, WA (Remote)",
        website: "https://mayalindesign.co",
        linkedin: "linkedin.com/in/mayalindesign",
        photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        summary: "Passionate Digital Product Designer with 6+ years specializing in user-centered design systems, mobile app experiences, and SaaS interfaces. Proven ability to bridge business objectives with delightful human experiences, resulting in 40% uplift in onboarding conversion."
      },
      experience: [
        {
          id: "exp-1",
          jobTitle: "Lead Product Designer",
          company: "Aura Creative Tech",
          location: "Seattle, WA",
          startDate: "2021-08",
          endDate: "",
          isCurrent: true,
          description: [
            "Lead end-to-end design for flagship iOS & Android mobile application with 1.8M active subscribers.",
            "Designed and unified the multi-brand Design System 'Pulse UI' across web, iOS, and Android platforms.",
            "Conducted 50+ qualitative user research sessions and usability studies, synthesizing insights into high-impact feature iterations."
          ]
        },
        {
          id: "exp-2",
          jobTitle: "Senior UX/UI Designer",
          company: "Kite Design Interactive",
          location: "Portland, OR",
          startDate: "2018-09",
          endDate: "2021-07",
          isCurrent: false,
          description: [
            "Redesigned e-commerce checkout funnel for Fortune 500 retailer, generating $14M in incremental revenue.",
            "Created interactive prototypes using Figma and Framer to validate complex interaction patterns with stakeholder teams."
          ]
        }
      ],
      education: [
        {
          id: "edu-1",
          degree: "Bachelor of Fine Arts in Interaction Design",
          institution: "Rhode Island School of Design (RISD)",
          location: "Providence, RI",
          startDate: "2014-09",
          endDate: "2018-05",
          gpa: "3.90 / 4.0",
          details: "Honors Graduate. Winner of National Student Design Showcase 2018."
        }
      ],
      skills: [
        {
          category: "Design Disciplines",
          items: ["UI/UX Design", "Design Systems", "User Research", "Wireframing", "Interactive Prototyping", "Information Architecture"]
        },
        {
          category: "Tools & Technologies",
          items: ["Figma", "Framer", "Adobe Creative Suite", "Storybook", "HTML/CSS", "Principle", "Miro"]
        }
      ],
      projects: [
        {
          id: "proj-1",
          title: "Pulse UI - Cross-Platform Design System",
          role: "Design Lead",
          technologies: ["Figma", "Tokens Studio", "Storybook", "React"],
          link: "https://mayalindesign.co/pulse",
          description: [
            "Created 250+ accessible atomic components with comprehensive documentation, dark mode support, and WCAG AA compliance."
          ]
        }
      ],
      certifications: [
        {
          id: "cert-1",
          name: "Nielsen Norman Group (NN/g) UX Master Certified",
          issuer: "Nielsen Norman Group",
          date: "2022"
        }
      ],
      languages: [
        { language: "English", proficiency: "Native" },
        { language: "Japanese", proficiency: "Conversational" }
      ],
      customSections: []
    }
  },
  {
    label: "Doctor & Medical Academic CV",
    role: "Clinical Medicine & Research",
    icon: "🩺",
    data: {
      title: "Dr. Marcus Chen, MD, PhD - Medical Curriculum Vitae",
      templateId: "academic-cv",
      style: {
        accentColor: "#0d9488",
        isMonochrome: false,
        fontFamily: "Merriweather",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Dr. Marcus Chen, MD, PhD",
        jobTitle: "Associate Professor of Cardiology & Clinical Investigator",
        email: "m.chen@hospital.stanford.edu",
        phone: "+1 (555) 345-6789",
        location: "Palo Alto, CA",
        website: "https://profiles.stanford.edu/marcus-chen",
        linkedin: "linkedin.com/in/dr-marcus-chen",
        photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
        summary: "Cardiologist and Clinical Researcher with 10+ years combining direct patient care, translational cardiology research, and clinical trials leadership. Principal Investigator on NIH-funded research grants examining cardiovascular biomarkers, with 25+ peer-reviewed publications."
      },
      experience: [
        {
          id: "exp-1",
          jobTitle: "Associate Professor & Attending Cardiologist",
          company: "Stanford University School of Medicine",
          location: "Stanford, CA",
          startDate: "2019-07",
          endDate: "",
          isCurrent: true,
          description: [
            "Direct outpatient and inpatient cardiology clinics, overseeing clinical care for 400+ complex cardiac patients annually.",
            "Lead cardiovascular imaging lab and oversee clinical fellowship training programs for cardiology residents.",
            "Principal Investigator on $2.4M NIH R01 grant exploring non-invasive ultrasound biomarkers for early heart failure."
          ]
        },
        {
          id: "exp-2",
          jobTitle: "Clinical Fellow in Cardiovascular Disease",
          company: "Johns Hopkins Medicine",
          location: "Baltimore, MD",
          startDate: "2016-07",
          endDate: "2019-06",
          isCurrent: false,
          description: [
            "Completed rigorous clinical fellowship in general and interventional cardiology with intensive ICU rotation management.",
            "Published 8 first-author papers in the Journal of the American College of Cardiology (JACC) and Circulation."
          ]
        }
      ],
      education: [
        {
          id: "edu-1",
          degree: "Doctor of Medicine (M.D.) & Ph.D. in Biomedical Sciences",
          institution: "Harvard Medical School & Harvard University",
          location: "Boston, MA",
          startDate: "2008-09",
          endDate: "2016-05",
          details: "Graduated with Honors in Special Field. Alpha Omega Alpha (AOA) Honor Medical Society."
        },
        {
          id: "edu-2",
          degree: "Bachelor of Science in Molecular Biology",
          institution: "Yale University",
          location: "New Haven, CT",
          startDate: "2004-09",
          endDate: "2008-05",
          gpa: "3.96 / 4.0",
          details: "Summa Cum Laude, Phi Beta Kappa."
        }
      ],
      skills: [
        {
          category: "Clinical Expertise",
          items: ["Clinical Cardiology", "Echocardiography (TTE/TEE)", "Cardiac MRI/CT", "Heart Failure Management", "Clinical Trial Design"]
        },
        {
          category: "Research & Technical",
          items: ["Translational Research", "R & Biostatistics", "Epidemiology", "NIH Grant Writing", "Medical Education"]
        }
      ],
      projects: [
        {
          id: "proj-1",
          title: "CARDIO-MARK Trial (NIH R01 HL142389)",
          role: "Principal Investigator",
          technologies: ["Multi-Center Clinical Trial", "Statistical Genomics"],
          description: [
            "Prospective multi-center longitudinal clinical study enrolling 1,200 patients across 6 academic medical centers."
          ]
        }
      ],
      certifications: [
        {
          id: "cert-1",
          name: "Diplomate in Cardiovascular Disease",
          issuer: "American Board of Internal Medicine (ABIM)",
          date: "2019"
        },
        {
          id: "cert-2",
          name: "National Board of Echocardiography (NBE) Certified",
          issuer: "NBE",
          date: "2018"
        }
      ],
      languages: [
        { language: "English", proficiency: "Native" },
        { language: "Mandarin Chinese", proficiency: "Fluent" }
      ],
      customSections: [
        {
          id: "custom-1",
          heading: "Selected Peer-Reviewed Publications",
          items: [
            {
              title: "Chen M., et al. 'Novel Ultrasound Biomarkers in Early Systolic Dysfunction'",
              subtitle: "Journal of the American College of Cardiology (JACC), 82(4): 320-332",
              date: "2023",
              description: "Lead author study demonstrating 40% earlier detection of heart failure using advanced speckle tracking."
            },
            {
              title: "Chen M., Harrison J., et al. 'Machine Learning Risk Models in Acute Coronary Syndromes'",
              subtitle: "Circulation, 145(8): 612-624",
              date: "2021"
            }
          ]
        }
      ]
    }
  }
];

export const EMPTY_RESUME: ResumeData = {
  title: "Untitled Resume",
  templateId: "modern-clean",
  style: {
    accentColor: "#0284c7",
    isMonochrome: false,
    fontFamily: "Inter",
    fontSize: "normal",
    spacing: "normal",
    showPhoto: true,
  },
  personalInfo: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    photoUrl: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  customSections: [],
};
