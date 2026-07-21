"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ChartCandlestick,
  Code2,
  Crown,
  Database,
  ExternalLink,
  Flame,
  Mail,
  Menu,
  MonitorCog,
  Server,
  Shield,
  ShieldCheck,
  TerminalSquare,
  Wrench,
  X,
} from "lucide-react";
import {
  expertise,
  featuredProjects,
  otherProjects,
  profile,
  skills,
  type FeaturedProject,
  type OtherProject,
} from "@/lib/data";

const navItems = [
  { label: "Council", href: "#about" },
  { label: "Arsenal", href: "#skills" },
  { label: "Campaigns", href: "#projects" },
  { label: "Raven", href: "#contact" },
];

const skillGroups = [
  { title: "Frontend", house: "Glass Keep", icon: Code2, items: skills.frontend },
  { title: "Backend", house: "Engine Room", icon: Server, items: skills.backend },
  { title: "Linux and Windows", house: "Twin Keeps", icon: MonitorCog, items: skills.systems },
  { title: "Cybersecurity", house: "Night Watch", icon: ShieldCheck, items: skills.security },
  { title: "Stocks and Markets", house: "Ledger Table", icon: ChartCandlestick, items: skills.markets },
  { title: "Academic Problems", house: "Citadel Desk", icon: BookOpen, items: skills.academic },
  { title: "Databases", house: "Vaults", icon: Database, items: skills.databases },
  { title: "DevOps / Tools", house: "Harbor", icon: Wrench, items: skills.devops },
].filter((group) => group.items.some(Boolean));

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
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
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold sm:text-4xl ${inverse ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {hasValue(copy) ? (
        <p className={`mt-4 max-w-2xl text-base leading-7 ${inverse ? "text-stone-300" : "text-stone-700"}`}>
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
    primary:
      "bg-accent text-white shadow-[0_14px_36px_rgba(167,31,31,0.25)] hover:bg-red-900",
    secondary:
      "border border-stone-950/15 bg-white/55 text-stone-950 hover:border-accent/60 hover:bg-red-50",
    dark: "bg-stone-950 text-white shadow-[0_14px_36px_rgba(17,16,15,0.24)] hover:bg-stone-800",
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-950/10 bg-[#f7efe4]/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Githaiga home">
          <span className="dragon-crest grid h-10 w-10 place-items-center bg-stone-950 text-sm font-black text-[#d9a441] shadow-[0_0_0_1px_rgba(167,31,31,0.35)]">
            G
          </span>
          <span>
            <span className="block text-sm font-semibold text-stone-950">{profile.name}</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
              Black Team
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-stone-950/15 bg-white/50 text-stone-950 md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-stone-950/10 bg-[#f7efe4]/96 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-sm font-medium text-stone-800 hover:bg-white/60 hover:text-accent"
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

function WarCouncilVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      aria-hidden="true"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(167,31,31,0.18),transparent_48%),radial-gradient(circle_at_70%_70%,rgba(200,138,45,0.18),transparent_42%)] blur-xl" />
      <div className="relative overflow-hidden rounded-lg border border-stone-950/15 bg-stone-950 p-5 text-white shadow-2xl shadow-stone-950/25">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-[#d9a441] to-accent" />
        <div className="grid min-h-[32rem] place-items-center rounded-md border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(167,31,31,0.26),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_38%)] p-6">
          <div className="relative grid h-72 w-72 place-items-center sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full border border-[#d9a441]/35" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <div className="wing-left absolute left-0 top-16 h-36 w-32 bg-gradient-to-br from-[#d9a441] via-accent to-stone-950 opacity-85" />
            <div className="wing-right absolute right-0 top-16 h-36 w-32 bg-gradient-to-bl from-[#d9a441] via-accent to-stone-950 opacity-85" />
            <div className="dragon-crest relative z-10 grid h-44 w-44 place-items-center bg-[#f3e5cf] text-stone-950 shadow-[0_0_54px_rgba(200,138,45,0.22)]">
              <div className="grid h-32 w-32 place-items-center rounded-full border border-stone-950/20">
                <Crown size={38} className="mb-1 text-accent" />
                <Flame size={54} className="absolute mt-16 text-stone-950" />
              </div>
            </div>
            <div className="absolute bottom-6 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#f2d9aa]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              code / ops / security / markets
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28"
    >
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#f4ecdf] to-transparent" />

      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white/58 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-accent shadow-sm">
            <Flame size={14} />
            Black Team engineering council
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] text-stone-950 sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="ember-text block">forges digital strongholds.</span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-accent sm:text-2xl">
            {profile.role}
          </p>
          {hasValue(profile.tagline) ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-800 sm:text-xl">
              {profile.tagline}
            </p>
          ) : null}
          {hasValue(profile.shortBio) ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">
              {profile.shortBio}
            </p>
          ) : null}

          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="dark">
              View Campaigns <ArrowUpRight size={17} />
            </LinkButton>
            <LinkButton href="#contact">
              Send a Raven <Mail size={17} />
            </LinkButton>
            {profile.resumeAvailable ? (
              <LinkButton href={profile.resumeUrl} variant="secondary">
                Download Scroll <ArrowUpRight size={17} />
              </LinkButton>
            ) : null}
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {["Linux / Windows", "Cybersecurity", "Stocks / Markets"].map((item) => (
              <div
                key={item}
                className="rounded-md border border-stone-950/10 bg-white/52 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-stone-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <WarCouncilVisual />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Council"
          title="A builder with a wider battlefield than code alone."
          copy={profile.longBio}
        />
        <motion.div
          {...fadeIn}
          className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-stretch"
        >
          <div className="overflow-hidden rounded-lg border border-stone-950/15 bg-stone-950 p-6 text-white shadow-xl shadow-stone-950/15">
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#d9a441]">
                  House Black
                </p>
                <h3 className="mt-2 text-2xl font-semibold">War room profile</h3>
              </div>
              <Shield className="text-accent" size={34} />
            </div>
            <div className="space-y-5 text-sm leading-6 text-stone-300">
              <p>
                Software decisions are treated like campaign decisions: understand
                constraints, secure the gates, ship the useful thing, and document
                what matters.
              </p>
              <p>
                The result is a portfolio that speaks to engineering, operations,
                security, research, and analytical judgment.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-stone-950/12 bg-panel p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:bg-panel-strong"
              >
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  {item.houseTitle}
                </p>
                <h3 className="text-lg font-semibold text-stone-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-700">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-stone-950/10 bg-white/55 px-2.5 py-1 font-mono text-[11px] text-stone-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  if (!skillGroups.length) {
    return null;
  }

  return (
    <section id="skills" className="border-y border-stone-950/10 bg-stone-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Arsenal"
          title="Tools, systems, and disciplines ready at the table."
          copy="The stack is broad by design: product engineering, operating systems, security awareness, academic reasoning, and market literacy all reinforce the work."
          inverse
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(({ title, house, icon: Icon, items }) => (
            <motion.div
              key={title}
              {...fadeIn}
              className="rounded-lg border border-white/10 bg-white/[0.055] p-5 transition hover:border-accent/55 hover:bg-white/[0.085]"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-[#d9a441]/12 text-[#d9a441]">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {house}
                  </p>
                  <h3 className="font-semibold text-white">{title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.filter(Boolean).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 font-mono text-xs text-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  const projectLinks = [
    { label: "Live Banner", href: project.url, icon: ArrowUpRight },
    { label: "Repository", href: project.github, icon: ExternalLink },
  ].filter((link) => hasValue(link.href));

  return (
    <motion.article
      {...fadeIn}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-lg border border-stone-950/12 bg-panel shadow-sm transition hover:-translate-y-1 hover:border-accent/45 hover:bg-panel-strong hover:shadow-xl hover:shadow-stone-950/10"
    >
      <div className="grid lg:grid-cols-[0.74fr_1.26fr]">
        <div className="bg-stone-950 p-6 text-white">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#d9a441]">
            Campaign {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          {hasValue(project.tagline) ? (
            <p className="mt-4 text-sm leading-6 text-stone-300">{project.tagline}</p>
          ) : null}
          {project.stack.filter(Boolean).length ? (
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.filter(Boolean).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-xs text-stone-200"
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
                  <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    Brief
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{project.problem}</p>
                </div>
              ) : null}
              {hasValue(project.role) ? (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    Station
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{project.role}</p>
                </div>
              ) : null}
            </div>
            {projectLinks.length ? (
              <div className="flex shrink-0 flex-wrap gap-2">
                {projectLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    {...externalProps(href)}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-stone-950/12 bg-white/60 px-3 text-sm font-medium text-stone-800 transition hover:border-accent/70 hover:text-accent"
                  >
                    {label} <Icon size={16} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {project.features.filter(Boolean).length ? (
            <div className="mt-7">
              <h4 className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                Orders Executed
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.filter(Boolean).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-stone-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {hasValue(project.challenges) ? (
            <p className="mt-7 border-l-2 border-accent/50 pl-4 text-sm leading-6 text-stone-700">
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
      className="flex min-h-64 flex-col rounded-lg border border-stone-950/12 bg-panel p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent/45 hover:bg-panel-strong"
    >
      <TerminalSquare className="mb-6 text-accent" size={24} />
      <h3 className="text-lg font-semibold text-stone-950">{project.name}</h3>
      {hasValue(project.description) ? (
        <p className="mt-3 flex-1 text-sm leading-6 text-stone-700">{project.description}</p>
      ) : (
        <div className="flex-1" />
      )}
      {project.tech.filter(Boolean).length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.filter(Boolean).map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/60 px-2.5 py-1 font-mono text-[11px] text-stone-700"
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
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-stone-950/12 bg-white/55 px-3 text-xs font-medium text-stone-800 transition hover:border-accent/70 hover:text-accent"
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
          eyebrow="Campaigns"
          title="Selected work, framed as campaigns won through clarity."
          copy="Project links and repository URLs appear automatically when they are present in the data file."
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
              <h3 className="text-xl font-semibold text-stone-950">Side Quests</h3>
              <div className="h-px flex-1 bg-stone-950/12" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    <section id="contact" className="border-t border-stone-950/10 px-5 py-24">
      <motion.div
        {...fadeIn}
        className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-stone-950/12 bg-stone-950 text-white shadow-2xl shadow-stone-950/20"
      >
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-[#d9a441]">
              Raven
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Send word to the council table.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              For software builds, security-minded reviews, operating-system support,
              research work, or market-analysis tooling, reach out directly.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 border-t border-white/10 bg-white/[0.045] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            {contactLinks.length ? (
              contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex min-h-12 items-center justify-between gap-3 rounded-md border border-white/10 bg-black/20 px-4 text-sm font-medium text-stone-100 transition hover:border-accent/70 hover:bg-accent/20"
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
              <p className="text-sm text-stone-300">Contact links are being prepared.</p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-950/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </a>
          ))}
        </div>
        <p>Built with Next.js / Hosted on Vercel</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
