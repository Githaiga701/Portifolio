"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ChartCandlestick,
  Code2,
  Database,
  ExternalLink,
  Flame,
  Mail,
  Menu,
  MonitorCog,
  Server,
  ShieldCheck,
  TerminalSquare,
  X,
} from "lucide-react";
import {
  expertise,
  featuredProjects,
  otherProjects,
  profile,
  proofPoints,
  skills,
  trendSignals,
  type FeaturedProject,
  type OtherProject,
} from "@/lib/data";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Direction", href: "#direction" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  { title: "Frontend", context: "Modern interfaces", icon: Code2, items: skills.frontend },
  { title: "Backend", context: "APIs and services", icon: Server, items: skills.backend },
  { title: "AI Workflows", context: "Faster delivery", icon: TerminalSquare, items: skills.ai },
  { title: "Systems", context: "Linux and Windows", icon: MonitorCog, items: skills.systems },
  { title: "Security", context: "Trust by default", icon: ShieldCheck, items: skills.security },
  { title: "Markets", context: "Signal and risk", icon: ChartCandlestick, items: skills.markets },
  { title: "Research", context: "Structured thinking", icon: BookOpen, items: skills.academic },
  { title: "Data and DevOps", context: "Ship and maintain", icon: Database, items: [...skills.databases, ...skills.devops] },
].filter((group) => group.items.some(Boolean));

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-72px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
} as const;

function hasValue(value?: string) {
  return Boolean(value?.trim());
}

function externalProps(url?: string) {
  return hasValue(url)
    ? {
        href: url,
        target: "_blank",
        rel: "noreferrer",
      }
    : undefined;
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  inverse?: boolean;
}) {
  return (
    <motion.div {...fadeIn} className="mb-9 max-w-3xl">
      <p className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${inverse ? "text-cyan-200" : "text-accent"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-balance text-3xl font-semibold sm:text-4xl ${inverse ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {hasValue(copy) ? (
        <p className={`mt-4 max-w-2xl text-base leading-7 ${inverse ? "text-slate-300" : "text-slate-700"}`}>
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}

function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/70 focus:ring-offset-2 focus:ring-offset-background";
  const styles = {
    primary: "bg-accent text-white shadow-[0_14px_34px_rgba(197,71,38,0.22)] hover:bg-[#9f321c]",
    secondary: "border border-slate-950/15 bg-white/80 text-slate-950 hover:border-accent/60 hover:bg-[#fff6f0]",
    dark: "bg-slate-950 text-white shadow-[0_14px_34px_rgba(10,20,28,0.18)] hover:bg-slate-800",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-950/10 bg-[#fbfaf7]/88 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Primary navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="Githaiga home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-slate-950 text-sm font-black text-white shadow-sm">
            G
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-950">{profile.name}</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Full-stack systems
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-950/15 bg-white/70 text-slate-950 md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="border-t border-slate-950/10 bg-[#fbfaf7]/96 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-slate-800 hover:bg-white hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SystemsPanel() {
  const panelRows = [
    ["Product", "Next.js, TypeScript, APIs"],
    ["Trust", "Auth, access control, secure defaults"],
    ["Ops", "Linux, Windows, automation"],
    ["Insight", "Research, market signals, documentation"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      aria-label="Portfolio capability summary"
    >
      <div className="overflow-hidden rounded-lg border border-slate-950/12 bg-slate-950 text-white shadow-2xl shadow-slate-950/20">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Operating view</p>
            <h2 className="mt-1 text-xl font-semibold">Build, secure, maintain</h2>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
            Available
          </span>
        </div>
        <div className="grid min-h-[31rem] content-between gap-6 p-5 sm:p-6">
          <div className="grid gap-3">
            {panelRows.map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 bg-white/[0.055] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-md border border-cyan-200/20 bg-cyan-200/10 p-4">
            <p className="text-sm font-semibold text-white">Current direction</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Lean, accessible interfaces with AI-aware content structure and security-minded implementation.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-5 pb-16 pt-28">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-6xl gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white/78 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent shadow-sm">
            <Flame size={14} />
            AI-aware full-stack portfolio
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="accent-text block">builds secure web systems.</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-accent sm:text-2xl">
            {profile.role}
          </p>
          {hasValue(profile.tagline) ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-800 sm:text-xl">
              {profile.tagline}
            </p>
          ) : null}
          {hasValue(profile.shortBio) ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
              {profile.shortBio}
            </p>
          ) : null}

          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="dark">
              View work <ArrowUpRight size={17} />
            </LinkButton>
            <LinkButton href="#contact">
              Contact <Mail size={17} />
            </LinkButton>
            {profile.resumeAvailable ? (
              <LinkButton href={profile.resumeUrl} variant="secondary">
                Resume <ArrowUpRight size={17} />
              </LinkButton>
            ) : null}
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <div
                key={item}
                className="rounded-md border border-slate-950/10 bg-white/72 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <SystemsPanel />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A practical builder across product, systems, security, and analysis."
          copy={profile.longBio}
        />
        <motion.div {...fadeIn} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-950/12 bg-panel p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:bg-panel-strong"
            >
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                {item.houseTitle}
              </p>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-950/10 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillsSection() {
  if (!skillGroups.length) {
    return null;
  }

  return (
    <section id="skills" className="border-y border-slate-950/10 bg-slate-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A stack aimed at the work clients and teams need now."
          copy="Modern delivery is not just a framework choice. It needs usable interfaces, secure defaults, automation, clear documentation, and sensible use of AI tools."
          inverse
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, context, icon: Icon, items }) => (
            <motion.article
              key={title}
              {...fadeIn}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-cyan-200/50 hover:bg-white/[0.085]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-200/12 text-cyan-200">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-200">
                    {context}
                  </p>
                  <h3 className="font-semibold text-white">{title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.filter(Boolean).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  const projectLinks = [
    { label: "Live site", href: project.url, icon: ArrowUpRight },
    { label: "Repository", href: project.github, icon: ExternalLink },
  ].filter((link) => hasValue(link.href));

  return (
    <motion.article
      {...fadeIn}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-lg border border-slate-950/12 bg-panel shadow-sm transition hover:-translate-y-1 hover:border-accent/45 hover:bg-panel-strong hover:shadow-xl hover:shadow-slate-950/10"
    >
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div className="bg-slate-950 p-6 text-white">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          {hasValue(project.tagline) ? (
            <p className="mt-4 text-sm leading-6 text-slate-300">{project.tagline}</p>
          ) : null}
          {project.stack.filter(Boolean).length ? (
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.filter(Boolean).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="grid gap-5 lg:grid-cols-2">
              {hasValue(project.problem) ? (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    Brief
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{project.problem}</p>
                </div>
              ) : null}
              {hasValue(project.role) ? (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    Role
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{project.role}</p>
                </div>
              ) : null}
            </div>
            {projectLinks.length ? (
              <div className="flex shrink-0 flex-wrap gap-2">
                {projectLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    {...externalProps(href)}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-slate-950/12 bg-white/70 px-3 text-sm font-medium text-slate-800 transition hover:border-accent/70 hover:text-accent"
                  >
                    {label} <Icon size={16} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {hasValue(project.outcome) ? (
            <div className="mt-7 rounded-md border border-emerald-800/15 bg-emerald-50 p-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
                Outcome
              </h4>
              <p className="mt-2 text-sm leading-6 text-emerald-950">{project.outcome}</p>
            </div>
          ) : null}

          {project.features.filter(Boolean).length ? (
            <div className="mt-7">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Built
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.filter(Boolean).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {hasValue(project.challenges) ? (
            <p className="mt-7 border-l-2 border-accent/50 pl-4 text-sm leading-6 text-slate-700">
              {project.challenges}
            </p>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function OtherProjectCard({ project }: { project: OtherProject }) {
  const links = [
    { label: "Open", href: project.link, icon: ArrowUpRight },
    { label: "Repository", href: project.github, icon: ExternalLink },
  ].filter((link) => hasValue(link.href));

  return (
    <motion.article
      {...fadeIn}
      className="flex min-h-64 flex-col rounded-lg border border-slate-950/12 bg-panel p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/45 hover:bg-panel-strong"
    >
      <TerminalSquare className="mb-6 text-accent" size={24} />
      <h3 className="text-lg font-semibold text-slate-950">{project.name}</h3>
      {hasValue(project.description) ? (
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-700">{project.description}</p>
      ) : (
        <div className="flex-1" />
      )}
      {project.tech.filter(Boolean).length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.filter(Boolean).map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}
      {links.length ? (
        <div className="mt-6 flex gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              {...externalProps(href)}
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-slate-950/12 bg-white/70 px-3 text-xs font-medium text-slate-800 transition hover:border-accent/70 hover:text-accent"
            >
              {label} <Icon size={14} />
            </a>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

function Projects() {
  const visibleFeatured = featuredProjects.filter((project) => hasValue(project.name));
  const visibleOther = otherProjects.filter((project) => hasValue(project.name));

  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Selected builds framed by the problem, role, and outcome."
          copy="Current portfolios need proof, not just screenshots. These summaries make scope, responsibility, and value easier to scan."
        />

        {visibleFeatured.length ? (
          <div className="grid gap-5">
            {visibleFeatured.map((project, index) => (
              <FeaturedProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        ) : null}

        {visibleOther.length ? (
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-950">Explorations</h3>
              <div className="h-px flex-1 bg-slate-950/12" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {visibleOther.map((project) => (
                <OtherProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function Direction() {
  return (
    <section id="direction" className="bg-[#f3f7f2] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Direction"
          title="Built for where the web is moving next."
          copy="The portfolio now emphasizes the durable parts of current web trends: accessibility, sustainable performance, AI-readable information architecture, and security-minded product decisions."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trendSignals.map((item) => (
            <motion.article
              key={item.label}
              {...fadeIn}
              className="rounded-lg border border-slate-950/12 bg-white/72 p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-950">{item.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactLinks = [
    {
      label: "Email",
      href: hasValue(profile.email) ? `mailto:${profile.email}` : "",
      icon: Mail,
    },
    { label: "GitHub", href: profile.github, icon: ExternalLink },
    { label: "LinkedIn", href: profile.linkedin, icon: ExternalLink },
  ].filter((link) => hasValue(link.href));

  return (
    <section id="contact" className="border-t border-slate-950/10 px-5 py-24">
      <motion.div
        {...fadeIn}
        className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-slate-950/12 bg-slate-950 text-white shadow-2xl shadow-slate-950/20"
      >
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
              Contact
            </p>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Need a web system, security-aware review, automation workflow, or research-heavy build?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Reach out with the goal, current constraints, and timeline. I can help turn it into a clear build plan and a shippable product.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 border-t border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            {contactLinks.length ? (
              contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex min-h-12 items-center justify-between gap-3 rounded-md border border-white/10 bg-black/20 px-4 text-sm font-medium text-slate-100 transition hover:border-cyan-200/70 hover:bg-cyan-200/10"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon size={17} />
                    {label}
                  </span>
                  <ArrowUpRight size={15} />
                </a>
              ))
            ) : (
              <p className="text-sm text-slate-300">Contact links are being prepared.</p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-950/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </a>
          ))}
        </div>
        <p>Built with Next.js and deployed on Vercel.</p>
      </div>
    </footer>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
    knowsAbout: [
      "Full-stack development",
      "Next.js",
      "TypeScript",
      "Cybersecurity",
      "Linux",
      "Windows",
      "AI-assisted development",
      "Market analysis",
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <main id="main">
        <Nav />
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <Direction />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
