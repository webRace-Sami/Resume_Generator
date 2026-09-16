export const sampleResumes = [
  {
    title: "Senior Full Stack Engineer Resume",
    templateId: "modern-clean",
    style: {
      accentColor: "#0284c7",
      isMonochrome: false,
      fontFamily: "Inter",
      fontSize: "normal",
      spacing: "normal",
      showPhoto: false
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
      photoUrl: "",
      summary: "Results-driven Full-Stack Engineer with 7+ years of experience architecting resilient distributed systems, high-performance web applications, and scalable microservices. Proven track record improving system latency by 45% and leading cross-functional engineering pods to deliver enterprise SaaS products on time."
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
          "Architected real-time analytics streaming engine using Node.js, TypeScript, Kafka, and React, processing 12M+ daily events with 99.99% uptime.",
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
        jobTitle: "Frontend Developer",
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
        details: "Graduated with Magna Cum Laude. President of ACM Student Chapter."
      }
    ],
    skills: [
      {
        category: "Programming & Languages",
        items: ["TypeScript", "JavaScript (ES6+)", "Python", "Go", "SQL", "HTML5/CSS3"]
      },
      {
        category: "Frameworks & Libraries",
        items: ["React", "Next.js", "Node.js", "Express", "Vite", "Tailwind CSS", "Redux Toolkit", "GraphQL"]
      },
      {
        category: "Cloud, DevOps & Databases",
        items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS (ECS, S3, Lambda)", "CI/CD (GitHub Actions)"]
      },
      {
        category: "Tools & Methodologies",
        items: ["Git", "Jest / Vitest", "RESTful APIs", "Microservices", "Agile / Scrum", "System Architecture"]
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "OmniFlow - AI Task Automation Engine",
        role: "Creator & Maintainer",
        technologies: ["TypeScript", "React", "Node.js", "OpenAI API", "PostgreSQL"],
        link: "https://github.com/alexrivera-eng/omniflow",
        description: [
          "Open-source workflow automation platform with visual node-based editor; garnered 2.4k+ GitHub stars and 15k monthly active users.",
          "Built zero-latency WebSocket synchronization for collaborative workspace editing."
        ]
      },
      {
        id: "proj-2",
        title: "FastCache - Ultra-Lightweight Distributed In-Memory Cache",
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
        heading: "Honors & Publications",
        items: [
          {
            title: "Tech Innovation Excellence Award",
            subtitle: "Nexus Cloud Systems",
            date: "2023",
            description: "Awarded top engineering honor for designing company-wide automated data pipeline."
          }
        ]
      }
    ]
  }
];
