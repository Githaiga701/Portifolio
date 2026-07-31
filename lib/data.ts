export type FeaturedProject = {
  name: string;
  url?: string;
  github?: string;
  tagline?: string;
  problem?: string;
  role?: string;
  outcome?: string;
  stack: string[];
  features: string[];
  challenges?: string;
};

export type OtherProject = {
  name: string;
  description?: string;
  tech: string[];
  link?: string;
  github?: string;
};

export type Expertise = {
  title: string;
  houseTitle: string;
  description: string;
  tools: string[];
};

export const profile = {
  name: "Githaiga",
  role: "Full Stack Developer and Systems Builder",
  tagline:
    "I build fast web products, secure workflows, operating-system tooling, and market-aware digital systems with practical engineering judgment.",
  shortBio:
    "Focused on Next.js, TypeScript, backend APIs, Linux and Windows operations, cybersecurity fundamentals, research workflows, and AI-assisted product delivery.",
  longBio:
    "I map the product goal, choose a maintainable stack, protect weak points, and ship interfaces that can be read by people, search engines, and modern AI agents. My range spans modern web applications, backend services, OS-level troubleshooting, security-minded implementation, research-heavy academic problems, and analytical thinking around markets.",
  email: "gitongsgideon701@gmail.com",
  github: "https://github.com/Githaiga701",
  linkedin: "",
  siteUrl: "https://githaiga.vercel.app",
  resumeAvailable: true,
  resumeUrl: "/resume.pdf",
};

export const skills = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Accessibility", "Framer Motion"],
  backend: ["Node.js", "REST APIs", "Authentication", "Serverless Functions", "API design"],
  systems: ["Linux", "Windows OS", "Shell workflows", "Troubleshooting", "Automation"],
  security: ["Secure defaults", "Threat modeling", "Access control", "Web security"],
  markets: ["Stocks", "Market structure", "Risk thinking", "Research workflows"],
  academic: ["Technical writing", "Research", "Problem decomposition", "Data reasoning"],
  ai: ["AI-assisted development", "LLM workflows", "Prompt systems", "Agent-ready UX"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  devops: ["Vercel", "Git", "GitHub", "CI/CD", "Docker"],
};

export const expertise: Expertise[] = [
  {
    title: "Full-Stack Product Engineering",
    houseTitle: "Product",
    description:
      "Frontends, APIs, data models, authentication, and deployment paths shaped into usable, maintainable products.",
    tools: ["Next.js", "TypeScript", "Node.js", "Databases"],
  },
  {
    title: "AI-Assisted Delivery",
    houseTitle: "Workflow",
    description:
      "Practical use of AI tools for research, planning, code review, content iteration, and faster delivery without replacing engineering judgment.",
    tools: ["LLM workflows", "Prompting", "Review", "Documentation"],
  },
  {
    title: "Linux and Windows Operations",
    houseTitle: "Systems",
    description:
      "Practical command-line fluency, desktop/server troubleshooting, automation, and cross-platform support.",
    tools: ["Linux", "Windows", "Shell", "Ops"],
  },
  {
    title: "Security-Minded Implementation",
    houseTitle: "Risk",
    description:
      "Security-minded implementation, access boundaries, attack-surface awareness, and safer defaults.",
    tools: ["Web security", "Auth", "Hardening", "Risk"],
  },
  {
    title: "Research and Technical Reasoning",
    houseTitle: "Analysis",
    description:
      "Research-heavy tasks, technical writing, structured reasoning, and breaking hard problems into solvable steps.",
    tools: ["Research", "Writing", "Analysis", "Data"],
  },
  {
    title: "Stocks and Market Analysis",
    houseTitle: "Markets",
    description:
      "Market literacy, risk framing, structured analysis, and tools for tracking financial signals.",
    tools: ["Stocks", "Markets", "Risk", "Research"],
  },
];

export const trendSignals = [
  {
    label: "AI-ready products",
    description:
      "Interfaces and content structured for human users, search engines, and AI agents that need clear actions and context.",
  },
  {
    label: "Accessible by default",
    description:
      "Semantic sections, readable contrast, keyboard-friendly controls, and reduced-motion support treated as baseline quality.",
  },
  {
    label: "Performance-conscious builds",
    description:
      "Lean component structure, local data, optimized navigation, and restraint around decorative effects for faster loading.",
  },
  {
    label: "Security and trust",
    description:
      "Security-aware implementation, safer defaults, careful link handling, and practical risk framing in product decisions.",
  },
];

export const proofPoints = [
  "Full-stack delivery",
  "Cross-platform support",
  "Security-aware builds",
  "Research-heavy problem solving",
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Buffalo Plains Adventures",
    url: "https://buffaloplainsadventures.com",
    github: "",
    tagline:
      "A travel platform presented like a campaign map: destinations, packages, and inquiry paths made clear.",
    problem:
      "The business needed a credible digital storefront that helps visitors understand the offer quickly and move toward an inquiry without friction.",
    role: "Full-stack implementation, responsive UI, deployment, and content structure.",
    outcome:
      "Improved the first-visit path from destination discovery to direct inquiry with mobile-first sections and clearer calls to action.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Responsive destination and package presentation",
      "Clear inquiry paths for prospective travelers",
      "Performance-conscious page structure for search and sharing",
    ],
    challenges:
      "Balancing immersive travel visuals with fast-loading, conversion-focused pages.",
  },
  {
    name: "Urban Digital Tech",
    url: "https://urbandigitaltech.com",
    github: "",
    tagline:
      "A digital agency presence built to make services, credibility, and conversion routes obvious.",
    problem:
      "The site needed to communicate technical capability quickly while staying simple enough for visitors to act.",
    role: "Frontend architecture, section design, responsive build, and deployment setup.",
    outcome:
      "Created a sharper agency presence with reusable service sections, focused navigation, and faster publishing paths.",
    stack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    features: [
      "Service-focused landing sections",
      "Mobile-first navigation and calls to action",
      "Reusable content sections for future updates",
    ],
    challenges:
      "Keeping the experience professional and focused without overloading the landing page.",
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: "Systems Automation Workbench",
    description:
      "A practical toolkit concept for shell workflows, system checks, Windows support notes, and repeatable admin routines.",
    tech: ["Linux", "Windows", "Shell", "Automation"],
    github: "https://github.com/Githaiga701",
  },
  {
    name: "Security Review Notes",
    description:
      "A structured knowledge base for web security concepts, access control, and hardening checklists.",
    tech: ["Cybersecurity", "Auth", "Documentation"],
    github: "https://github.com/Githaiga701",
  },
  {
    name: "Market Signals Dashboard",
    description:
      "A research-oriented dashboard concept for watching stocks, market themes, risk notes, and decision context in one place.",
    tech: ["Markets", "Research", "Dashboards", "Data"],
    github: "https://github.com/Githaiga701",
  },
  {
    name: "AI Research Assistant",
    description:
      "A concept for turning messy academic or technical questions into structured briefs, citations, and implementation steps.",
    tech: ["AI workflows", "Research", "TypeScript"],
    github: "https://github.com/Githaiga701",
  },
];
