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
  },
  {
    label: "Fresh Student & Graduate",
    role: "B.S. Computer Science / Entry-Level",
    icon: "🎓",
    data: {
      title: "Maya Lin - Fresh Graduate Software Engineer Resume",
      templateId: "fresh-graduate-student",
      style: {
        accentColor: "#0284c7",
        isMonochrome: false,
        fontFamily: "Outfit",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Maya Lin",
        jobTitle: "Recent Computer Science Graduate & Junior Software Developer",
        email: "maya.lin@alumni.stanford.edu",
        phone: "+1 (555) 789-0123",
        location: "Austin, TX (Open to Relocation)",
        website: "https://mayalin.dev",
        linkedin: "linkedin.com/in/mayalin-dev",
        github: "github.com/mayalin-code",
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
        summary: "Motivated and high-achieving Computer Science graduate (GPA: 3.88/4.0, Dean's List) with robust foundation in full-stack web development, data structures, and cloud-native architecture. Experienced through hands-on university capstones and a software engineering internship developing responsive web apps in React, TypeScript, and Python.",
      },
      experience: [
        {
          id: "exp-fresh-1",
          jobTitle: "Software Engineering Intern",
          company: "InnovateTech Labs",
          location: "Austin, TX",
          startDate: "2024-05",
          endDate: "2024-08",
          isCurrent: false,
          description: [
            "Built responsive React components and integrated RESTful endpoints with Node.js/Express, reducing dashboard latency by 30%.",
            "Wrote comprehensive Jest unit tests achieving 92% code coverage across authentication and customer billing modules.",
            "Collaborated with senior engineers in bi-weekly Agile sprints, participating in daily standups and code reviews.",
          ],
        },
        {
          id: "exp-fresh-2",
          jobTitle: "Computer Science Teaching Assistant",
          company: "University School of Engineering",
          location: "Austin, TX",
          startDate: "2023-09",
          endDate: "2024-05",
          isCurrent: false,
          description: [
            "Conducted weekly lab sessions for 60+ undergraduate students covering Object-Oriented Programming, algorithms, and Git version control.",
            "Graded programming assignments, provided actionable feedback, and hosted 4 weekly office hours.",
          ],
        },
      ],
      education: [
        {
          id: "edu-fresh-1",
          degree: "Bachelor of Science in Computer Science (Summa Cum Laude)",
          institution: "University of Texas at Austin",
          location: "Austin, TX",
          startDate: "2021-08",
          endDate: "2025-05",
          gpa: "3.88 / 4.0",
          details: "Dean's Honor List (All Semesters), President of Women in Tech Club. Relevant Coursework: Data Structures & Algorithms, Database Systems, Cloud Computing, Web Development, Machine Learning.",
        },
      ],
      skills: [
        {
          category: "Languages & Core",
          items: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "SQL", "HTML5/CSS3"],
        },
        {
          category: "Frameworks & Libraries",
          items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Redux Toolkit"],
        },
        {
          category: "Databases & Cloud",
          items: ["PostgreSQL", "MongoDB", "Firebase", "Docker", "AWS (S3, EC2)", "Git/GitHub"],
        },
        {
          category: "Soft & Leadership Skills",
          items: ["Agile/Scrum", "Fast Learner", "Problem Solving", "Team Collaboration", "Technical Writing"],
        },
      ],
      projects: [
        {
          id: "proj-fresh-1",
          title: "Campus Peer Tutoring & Study Hub",
          role: "Lead Full-Stack Developer",
          technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
          link: "https://github.com/mayalin-code/campus-hub",
          description: [
            "Architected full-stack collaborative tutoring platform with real-time chat, appointment booking, and file exchange used by 450+ students.",
            "Implemented JWT authentication and role-based access control for students, tutors, and faculty administrators.",
          ],
        },
        {
          id: "proj-fresh-2",
          title: "AI Smart Flashcards & Quiz Generator",
          role: "Solo Creator",
          technologies: ["Next.js", "Python", "OpenAI API", "Tailwind CSS"],
          link: "https://github.com/mayalin-code/smart-cards",
          description: [
            "Engineered AI-powered study aid that generates interactive quizzes and spaced repetition flashcards from PDF course notes.",
          ],
        },
      ],
      certifications: [
        {
          id: "cert-fresh-1",
          name: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services",
          date: "2024",
        },
        {
          id: "cert-fresh-2",
          name: "Meta Front-End Developer Professional Certificate",
          issuer: "Coursera / Meta",
          date: "2023",
        },
      ],
      languages: [
        { language: "English", proficiency: "Native / Bilingual" },
        { language: "Spanish", proficiency: "Professional Working" },
      ],
      customSections: [],
    },
  },
  {
    label: "Supply Chain & Logistics Lead",
    role: "Procurement / Operations / ERP",
    icon: "📦",
    data: {
      title: "Marcus Vance - Supply Chain & Logistics Manager Resume",
      templateId: "supply-chain-logistics",
      style: {
        accentColor: "#0f766e",
        isMonochrome: false,
        fontFamily: "Inter",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Marcus Vance, CSCP",
        jobTitle: "Senior Supply Chain & Logistics Operations Manager",
        email: "marcus.vance@supplychainpro.com",
        phone: "+1 (555) 432-8765",
        location: "Chicago, IL",
        website: "https://marcusvance-scm.com",
        linkedin: "linkedin.com/in/marcus-vance-scm",
        photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        summary: "Strategic Supply Chain & Logistics Director with 9+ years directing end-to-end global supply chain operations, multi-site distribution networks, and strategic procurement. Successfully reduced freight expenditures by $3.8M, boosted On-Time In-Full (OTIF) delivery from 88% to 98.4%, and implemented SAP S/4HANA across 14 distribution centers.",
      },
      experience: [
        {
          id: "exp-scm-1",
          jobTitle: "Global Supply Chain Operations Manager",
          company: "Apex Global Logistics & Retail",
          location: "Chicago, IL",
          startDate: "2021-04",
          endDate: "",
          isCurrent: true,
          description: [
            "Direct end-to-end supply chain logistics across 14 North American distribution hubs managing $180M annual inventory throughput.",
            "Spearheaded enterprise migration to SAP S/4HANA SCM & Manhattan WMS, automating demand forecasting and cutting stockouts by 42%.",
            "Negotiated ocean, air, and 3PL freight agreements, capturing $3.8M in annualized transportation cost savings while maintaining 98.4% OTIF.",
            "Led lean continuous improvement initiatives across warehouse operations, improving pick-and-pack productivity by 28%.",
          ],
        },
        {
          id: "exp-scm-2",
          jobTitle: "Senior Logistics & Procurement Specialist",
          company: "Trident Industrial Supplies",
          location: "Indianapolis, IN",
          startDate: "2017-06",
          endDate: "2021-03",
          isCurrent: false,
          description: [
            "Managed supplier relationship management (SRM) program across 120+ international tier-1 raw material vendors.",
            "Implemented real-time IoT shipment tracking across multimodal freight, reducing shipping exceptions and detention fees by 65%.",
            "Established Safety Stock optimization models reducing excess holding costs by $1.2M annually.",
          ],
        },
      ],
      education: [
        {
          id: "edu-scm-1",
          degree: "Master of Science in Supply Chain Management",
          institution: "Purdue University - Krannert School of Management",
          location: "West Lafayette, IN",
          startDate: "2015",
          endDate: "2017",
          gpa: "3.92 / 4.0",
        },
        {
          id: "edu-scm-2",
          degree: "Bachelor of Business Administration (Logistics & Operations)",
          institution: "Michigan State University",
          location: "East Lansing, MI",
          startDate: "2011",
          endDate: "2015",
        },
      ],
      skills: [
        {
          category: "SCM & ERP Systems",
          items: ["SAP S/4HANA", "Oracle SCM Cloud", "Manhattan WMS", "Blue Yonder (JDA)", "Salesforce CRM"],
        },
        {
          category: "Operations & Procurement",
          items: ["Demand Forecasting", "Vendor Negotiation", "Lean Six Sigma", "Inventory Optimization", "3PL Management"],
        },
        {
          category: "Analytics & Compliance",
          items: ["Power BI", "Tableau SCM Dashboards", "Advanced Excel (Macros)", "Customs & Tariff Compliance", "Incoterms 2020"],
        },
      ],
      projects: [
        {
          id: "proj-scm-1",
          title: "Enterprise WMS & Route Optimization Rollout",
          role: "Program Lead",
          technologies: ["SAP S/4HANA", "Manhattan WMS", "Power BI"],
          description: [
            "Orchestrated cross-functional deployment of automated barcode scanning and dynamic fleet routing across 14 regional fulfillment centers.",
          ],
        },
      ],
      certifications: [
        {
          id: "cert-scm-1",
          name: "Certified Supply Chain Professional (CSCP)",
          issuer: "ASCM / APICS",
          date: "2020",
        },
        {
          id: "cert-scm-2",
          name: "Lean Six Sigma Green Belt (LSSGB)",
          issuer: "IISE",
          date: "2019",
        },
      ],
      languages: [
        { language: "English", proficiency: "Native" },
        { language: "German", proficiency: "Conversational" },
      ],
      customSections: [],
    },
  },
  {
    label: "Senior Auditor & CPA",
    role: "Internal Controls / SOX / Risk",
    icon: "⚖️",
    data: {
      title: "Rachel Sterling - Senior Internal Auditor & CPA Resume",
      templateId: "auditor-compliance",
      style: {
        accentColor: "#1e3a8a",
        isMonochrome: false,
        fontFamily: "Merriweather",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Rachel Sterling, CPA, CIA",
        jobTitle: "Senior Internal Auditor & Risk Advisory Lead",
        email: "rachel.sterling@sterlingaudit.com",
        phone: "+1 (555) 901-2345",
        location: "New York, NY",
        website: "https://rachelsterling-cpa.com",
        linkedin: "linkedin.com/in/rachelsterling-cpa",
        photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        summary: "Certified Public Accountant (CPA) and Certified Internal Auditor (CIA) with 8+ years of Big 4 and Fortune 500 experience leading comprehensive financial, operational, and SOX 404 audit engagements. Expert in assessing internal controls, identifying high-risk deficiencies, executing audit analytics via ACL and IDEA, and presenting findings to Executive Audit Committees.",
      },
      experience: [
        {
          id: "exp-aud-1",
          jobTitle: "Senior Internal Audit Manager",
          company: "Horizon Financial Group",
          location: "New York, NY",
          startDate: "2021-01",
          endDate: "",
          isCurrent: true,
          description: [
            "Lead annual SOX 404 scoping, risk assessment, and control testing across 22 business units with $14B in assets under management.",
            "Authored 35+ comprehensive audit reports for the Board of Directors Audit Committee, outlining key control deficiencies and remediation roadmaps.",
            "Integrated automated audit analytics using ACL and Python, testing 100% of journal entries and flagging $4.2M in anomalous transactions.",
            "Supervise and mentor a team of 6 internal auditors across IT general controls (ITGC), financial reporting, and fraud risk reviews.",
          ],
        },
        {
          id: "exp-aud-2",
          jobTitle: "Senior Audit Associate (External Audit)",
          company: "PwC (PricewaterhouseCoopers)",
          location: "New York, NY",
          startDate: "2017-09",
          endDate: "2020-12",
          isCurrent: false,
          description: [
            "Executed financial statement audits for publicly traded financial institutions adhering strictly to PCAOB, US GAAP, and SEC reporting guidelines.",
            "Performed testing on revenue recognition (ASC 606), leases (ASC 842), and credit loss provisions (CECL).",
            "Identified material weaknesses and significant deficiencies, collaborating with client CFOs to engineer robust internal controls.",
          ],
        },
      ],
      education: [
        {
          id: "edu-aud-1",
          degree: "Master of Science in Accountancy & Taxation",
          institution: "New York University - Stern School of Business",
          location: "New York, NY",
          startDate: "2016",
          endDate: "2017",
          gpa: "3.95 / 4.0",
        },
        {
          id: "edu-aud-2",
          degree: "Bachelor of Science in Accounting & Finance",
          institution: "Boston College - Carroll School of Management",
          location: "Chestnut Hill, MA",
          startDate: "2012",
          endDate: "2016",
        },
      ],
      skills: [
        {
          category: "Regulatory & Standards",
          items: ["SOX 404", "US GAAP", "IFRS", "PCAOB Standards", "COSO Framework", "SEC Reporting"],
        },
        {
          category: "Audit & Analysis Tools",
          items: ["ACL Analytics", "CaseWare IDEA", "SAP ERP", "Workiva (Wdesk)", "TeamMate", "Excel Modeling"],
        },
        {
          category: "Core Competencies",
          items: ["Financial Statement Audits", "Fraud Investigation", "ITGC Review", "Risk Mitigation", "Policy Governance"],
        },
      ],
      projects: [
        {
          id: "proj-aud-1",
          title: "Enterprise SOX 404 Automation & Modernization",
          role: "Lead Project Auditor",
          technologies: ["Workiva", "ACL Analytics", "SAP"],
          description: [
            "Streamlined testing protocols for 320+ internal controls, reducing external audit testing hours by 25% and saving $380K in consulting fees.",
          ],
        },
      ],
      certifications: [
        {
          id: "cert-aud-1",
          name: "Certified Public Accountant (CPA)",
          issuer: "New York State Board of Accountancy",
          date: "2018",
        },
        {
          id: "cert-aud-2",
          name: "Certified Internal Auditor (CIA)",
          issuer: "Institute of Internal Auditors (IIA)",
          date: "2020",
        },
      ],
      languages: [
        { language: "English", proficiency: "Native" },
        { language: "French", proficiency: "Professional Working" },
      ],
      customSections: [],
    },
  },
  {
    label: "Computer Operator & IT",
    role: "System Ops / Batch Jobs / Helpdesk",
    icon: "🖥️",
    data: {
      title: "Tariq Mansoor - Computer Operator & IT Systems Specialist Resume",
      templateId: "computer-operator",
      style: {
        accentColor: "#0369a1",
        isMonochrome: false,
        fontFamily: "JetBrains Mono",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Tariq Al-Mansoor",
        jobTitle: "Computer Operator & Senior IT Data Operations Specialist",
        email: "tariq.mansoor@itops-pro.com",
        phone: "+1 (555) 654-3210",
        location: "Dallas, TX",
        website: "https://tariqmansoor.tech",
        linkedin: "linkedin.com/in/tariq-mansoor-it",
        photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
        summary: "Reliable, detail-oriented Computer Operator with 6+ years of experience managing enterprise data centers, batch job processing, server hardware maintenance, and 24/7 mission-critical system monitoring. Proficient in Windows Server, Linux CLI, mainframe operations, automated backup workflows, and fast technical troubleshooting.",
      },
      experience: [
        {
          id: "exp-co-1",
          jobTitle: "Lead Computer Operator & Data Center Specialist",
          company: "DataTrust Enterprise Systems",
          location: "Dallas, TX",
          startDate: "2021-08",
          endDate: "",
          isCurrent: true,
          description: [
            "Monitor and manage 24/7 server operations across 250+ Windows/Linux physical and virtual servers maintaining 99.98% operational uptime.",
            "Execute and verify nightly batch jobs, database synchronizations, and ETL data pipelines with zero data loss or unhandled exceptions.",
            "Perform daily tape backups, cloud backup replication (Veeam / AWS Glacier), and disaster recovery validation drills.",
            "Troubleshoot hardware malfunctions, replace degraded server drives (RAID), and configure network switches and console peripherals.",
          ],
        },
        {
          id: "exp-co-2",
          jobTitle: "Computer Operator & Technical Support Specialist",
          company: "Metro Financial Systems",
          location: "Fort Worth, TX",
          startDate: "2018-06",
          endDate: "2021-07",
          isCurrent: false,
          description: [
            "Administered high-speed line printers, document scanners, and tape storage libraries processing 1.5M+ financial statements monthly.",
            "Logged and resolved 40+ daily technical incident tickets in ServiceNow adhering to strict SLA response times.",
            "Monitored network traffic and system health using SolarWinds and Nagios, escalating severity-1 incidents to tier-3 engineering.",
          ],
        },
      ],
      education: [
        {
          id: "edu-co-1",
          degree: "Associate of Applied Science in Computer Information Systems",
          institution: "Dallas College - North Lake Campus",
          location: "Irving, TX",
          startDate: "2016",
          endDate: "2018",
          gpa: "3.80 / 4.0",
        },
      ],
      skills: [
        {
          category: "Operating Systems",
          items: ["Windows Server (2016-2022)", "Red Hat Enterprise Linux", "Ubuntu", "macOS", "IBM z/OS Mainframe"],
        },
        {
          category: "Operations & Monitoring",
          items: ["Veeam Backup & Replication", "SolarWinds", "Nagios", "ServiceNow Ticketing", "Active Directory", "RAID Config"],
        },
        {
          category: "Data & Hardware",
          items: ["Batch Job Scheduling (Cron, Autosys)", "Fast Typing (75+ WPM)", "SQL Queries", "Cat6/Fiber Cabling", "Hardware Diagnostics"],
        },
      ],
      projects: [
        {
          id: "proj-co-1",
          title: "Automated Data Backup & Error Alerting System",
          role: "Lead Implementer",
          technologies: ["PowerShell", "Bash", "Veeam", "Slack Webhooks"],
          description: [
            "Created PowerShell and Bash automation scripts that monitor overnight batch job completions and send instant webhook alerts for failed executions.",
          ],
        },
      ],
      certifications: [
        {
          id: "cert-co-1",
          name: "CompTIA A+ & Network+ Certified",
          issuer: "CompTIA",
          date: "2020",
        },
        {
          id: "cert-co-2",
          name: "ITIL 4 Foundation (IT Service Management)",
          issuer: "AXELOS",
          date: "2022",
        },
      ],
      languages: [
        { language: "English", proficiency: "Fluent" },
        { language: "Arabic", proficiency: "Bilingual" },
      ],
      customSections: [],
    },
  },
  {
    label: "MS Office & Admin Executive",
    role: "Advanced Excel / Word / PPT / Admin",
    icon: "📊",
    data: {
      title: "Emily Watson - MS Office Specialist & Executive Assistant Resume",
      templateId: "ms-office-executive",
      style: {
        accentColor: "#1d4ed8",
        isMonochrome: false,
        fontFamily: "Plus Jakarta Sans",
        fontSize: "normal",
        spacing: "normal",
        showPhoto: true,
      },
      personalInfo: {
        fullName: "Emily Watson, MOS Master",
        jobTitle: "Executive Assistant & Senior MS Office Administration Specialist",
        email: "emily.watson@executiveoffice.com",
        phone: "+1 (555) 321-7654",
        location: "Seattle, WA",
        website: "https://emilywatson-admin.com",
        linkedin: "linkedin.com/in/emily-watson-admin",
        photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        summary: "Microsoft Office Certified Master with 7+ years of experience providing high-level administrative support to C-Suite executives, managing complex multi-departmental operations, and generating advanced Excel data models, executive PowerPoint decks, and automated Word documentation. Certified typing speed of 85 WPM with 99.9% accuracy.",
      },
      experience: [
        {
          id: "exp-mso-1",
          jobTitle: "Executive Assistant to the CEO & Operations Coordinator",
          company: "Cascadia Global Partners",
          location: "Seattle, WA",
          startDate: "2021-03",
          endDate: "",
          isCurrent: true,
          description: [
            "Manage complex calendar scheduling, international travel logistics, board meeting agendas, and executive correspondence for Chief Executive.",
            "Build dynamic MS Excel models utilizing Power Query, Pivot Tables, XLOOKUP, and nested formulas to analyze $25M quarterly operating budgets.",
            "Design polished, high-impact PowerPoint pitch decks for investor conferences, board meetings, and company-wide quarterly all-hands.",
            "Created automated MS Word templates and mail merge pipelines that reduced client contract drafting time by 60%.",
          ],
        },
        {
          id: "exp-mso-2",
          jobTitle: "Senior Administrative Specialist & Office Manager",
          company: "Pacific Northwest Consulting",
          location: "Bellevue, WA",
          startDate: "2018-05",
          endDate: "2021-02",
          isCurrent: false,
          description: [
            "Coordinated office operations and facilities management for an 85-person consulting practice, overseeing vendor contracts and billing.",
            "Maintained accurate record keeping and database updates in MS Access and SharePoint with strict confidentiality standards.",
            "Organized large-scale annual corporate retreats, executive dinners, and hybrid Zoom/Teams webinars for 300+ attendees.",
          ],
        },
      ],
      education: [
        {
          id: "edu-mso-1",
          degree: "Bachelor of Arts in Business Administration & Communication",
          institution: "University of Washington",
          location: "Seattle, WA",
          startDate: "2014",
          endDate: "2018",
          gpa: "3.85 / 4.0",
        },
      ],
      skills: [
        {
          category: "Microsoft Office Mastery",
          items: ["MS Excel (Pivot, Power Query, Macros)", "MS Word (Mail Merge, Styling)", "MS PowerPoint (Decks & Animations)", "MS Access", "MS Outlook & Teams"],
        },
        {
          category: "Executive Administration",
          items: ["Calendar & Travel Management", "Fast Typing (85+ WPM / 99.9% Acc)", "Board Meeting Minutes", "Expense Reporting (Concur)", "Confidential Records"],
        },
        {
          category: "Digital Collaboration",
          items: ["SharePoint", "Google Workspace", "QuickBooks", "DocuSign", "Zoom / Slack", "Canva Pro"],
        },
      ],
      projects: [
        {
          id: "proj-mso-1",
          title: "Automated Executive Reporting & Billing Dashboard",
          role: "Project Designer",
          technologies: ["Excel VBA / Macros", "Power Query", "SharePoint"],
          description: [
            "Designed a centralized Excel macro dashboard that consolidates weekly consultant timesheets, generating instant client billing reports.",
          ],
        },
      ],
      certifications: [
        {
          id: "cert-mso-1",
          name: "Microsoft Office Specialist: Master Certification (MOS)",
          issuer: "Microsoft",
          date: "2021",
        },
        {
          id: "cert-mso-2",
          name: "Certified Administrative Professional (CAP)",
          issuer: "IAAP",
          date: "2020",
        },
      ],
      languages: [
        { language: "English", proficiency: "Native" },
        { language: "Spanish", proficiency: "Conversational" },
      ],
      customSections: [],
    },
  },
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
