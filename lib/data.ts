export type FeaturedProject = {
  name: string;
  url?: string;
  github?: string;
  tagline?: string;
  problem?: string;
  role?: string;
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
  role: "Full Stack Developer",
  tagline:
    "I build web systems, secure workflows, operating-system tooling, and market-aware digital products with a strategist's eye.",
  shortBio:
    "Seasoned across full-stack engineering, Linux and Windows operations, cybersecurity fundamentals, academic problem-solving, and stocks and markets analysis.",
  longBio:
    "I work like a technical council: mapping the terrain, choosing the right stack, defending weak points, and shipping systems that can hold up in production. My range spans modern web applications, backend services, OS-level troubleshooting, security-minded implementation, research-heavy academic problems, and analytical thinking around markets.",
  email: "gitongsgideon701@gmail.com",
  github: "https://github.com/Githaiga701",
  linkedin: "",
  siteUrl: "https://githaiga.vercel.app",
  resumeAvailable: true,
  resumeUrl: "/resume.pdf",
};

export const skills = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "REST APIs", "Authentication", "Serverless Functions"],
  systems: ["Linux", "Windows OS", "Shell workflows", "Troubleshooting", "Automation"],
  security: ["Secure defaults", "Threat awareness", "Access control", "Web security"],
  markets: ["Stocks", "Market structure", "Risk thinking", "Research workflows"],
  academic: ["Technical writing", "Research", "Problem decomposition", "Data reasoning"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  devops: ["Vercel", "Git", "GitHub", "CI/CD", "Docker"],
};

export const expertise: Expertise[] = [
  {
    title: "Full-Stack Systems",
    houseTitle: "The Forge",
    description:
      "Frontends, APIs, data models, authentication, and deployment paths shaped into usable products.",
    tools: ["Next.js", "TypeScript", "Node.js", "Databases"],
  },
  {
    title: "Linux and Windows",
    houseTitle: "The Twin Keeps",
    description:
      "Practical command-line fluency, desktop/server troubleshooting, automation, and cross-platform support.",
    tools: ["Linux", "Windows", "Shell", "Ops"],
  },
  {
    title: "Cybersecurity",
    houseTitle: "The Watch",
    description:
      "Security-minded implementation, access boundaries, attack-surface awareness, and safer defaults.",
    tools: ["Web security", "Auth", "Hardening", "Risk"],
  },
  {
    title: "Academic Problems",
    houseTitle: "The Citadel",
    description:
      "Research-heavy tasks, technical writing, structured reasoning, and breaking hard problems into solvable steps.",
    tools: ["Research", "Writing", "Analysis", "Data"],
  },
  {
    title: "Stocks and Markets",
    houseTitle: "The Ledger",
    description:
      "Market literacy, risk framing, structured analysis, and tools for tracking financial signals.",
    tools: ["Stocks", "Markets", "Risk", "Research"],
  },
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
    name: "Linux Command Workbench",
    description:
      "A practical toolkit concept for shell workflows, system checks, and repeatable admin routines.",
    tech: ["Linux", "Shell", "Automation"],
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
    name: "Market Signals Tracker",
    description:
      "A research-oriented concept for watching stocks, market themes, and risk notes in one place.",
    tech: ["Markets", "Research", "Dashboards"],
    github: "https://github.com/Githaiga701",
  },
];
