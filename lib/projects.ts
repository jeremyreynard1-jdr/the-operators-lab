import {
  Layers,
  Users,
  Rss,
  Database,
  Radio,
  Search,
  type LucideIcon,
} from "lucide-react";

export type ProjectStatus = "live" | "in-dev" | "ideation";

export type ProjectDisplayMode =
  | "iframe"
  | "external-link"
  | "demo-video"
  | "screenshots"
  | "concept";

export type ProjectCategory = "productivity" | "learning" | "network";
export type ProjectGroup = "professional" | "personal";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  status: ProjectStatus;
  category: ProjectCategory;
  group: ProjectGroup;
  displayMode: ProjectDisplayMode;
  techStack: string[];
  liveUrl?: string;
  demoAsset?: string;
  screenshots?: string[];
};

/* ── Professional Projects ── */

export const projects: Project[] = [
  {
    slug: "competitive-intel",
    title: "Competitive Intel",
    description:
      "AI-powered company research for strategic research",
    longDescription:
      "A research platform that enables strategic company research. Enter a company and get AI-powered competitive intelligence - market positioning, key players, recent news, and strategic insights. Built to help operators walk into any meeting fully prepared.",
    icon: Search,
    status: "live",
    category: "productivity",
    group: "professional",
    displayMode: "iframe",
    techStack: [
      "Next.js",
      "TypeScript",
      "Claude API",
      "Tailwind CSS",
    ],
    liveUrl: "https://competitive-intel-one.vercel.app/",
  },
  {
    slug: "presence",
    title: "Presence",
    description:
      "People-intelligence based on LinkedIn profile and activity",
    longDescription:
      "A people-intelligence tool based on LinkedIn profile + activity (comments, posts, reactions). With a few clicks, generates custom intelligence on the person and shows any overlap you have.",
    icon: Rss,
    status: "live",
    category: "network",
    group: "professional",
    displayMode: "iframe",
    techStack: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "Claude API",
      "Google APIs",
      "RSS Parser",
      "Tailwind CSS",
    ],
    liveUrl: "https://profpresence.vercel.app/",
  },
  {
    slug: "antenna",
    title: "Antenna",
    description:
      "AI-powered control center for modern communications teams",
    longDescription:
      "A control center for comms professionals. Antenna bundles a briefing generator, message pull-through tracker, press clips digest, rapid-response monitor, and internal comms workflow - all powered by Claude. Currently in open beta with 2 tools live.",
    icon: Radio,
    status: "in-dev",
    category: "productivity",
    group: "professional",
    displayMode: "external-link",
    techStack: [
      "Next.js",
      "TypeScript",
      "Claude API",
      "Upstash Redis",
      "Tailwind CSS",
    ],
    liveUrl: "https://antenna-hub.vercel.app",
  },

  /* ── Personal Projects ── */

  {
    slug: "tab-triage",
    title: "Tab Triage",
    description:
      "Intelligently manage and close Chrome tabs with AI assistance",
    longDescription:
      "A Chrome extension that helps you regain control of your browser. Tab Triage uses Claude AI to summarize, categorize, and prioritize your open tabs - then lets you batch-close, snooze, or group them with confidence. Features include AI-powered tab summaries, smart grouping by topic, tab snoozing, and customizable category rules.",
    icon: Layers,
    status: "live",
    category: "productivity",
    group: "personal",
    displayMode: "screenshots",
    techStack: ["Chrome Extension", "Manifest V3", "Claude API", "JavaScript"],
    screenshots: [
      "/demos/tab-triage-1.png",
      "/demos/tab-triage-2.png",
      "/demos/tab-triage-3.png",
    ],
  },
  {
    slug: "sql-101",
    title: "SQL 101",
    description: "Interactive SQL learning playground for beginners",
    longDescription:
      "An interactive browser-based environment for learning SQL from scratch. SQL 101 lets users write and execute queries against sample datasets, with guided lessons that build from basic SELECT statements to complex joins and aggregations. Designed for non-technical professionals who want to query their own data without relying on engineering teams.",
    icon: Database,
    status: "live",
    category: "learning",
    group: "personal",
    displayMode: "iframe",
    techStack: ["Next.js", "TypeScript", "SQL.js", "Tailwind CSS"],
    liveUrl: "https://sql-101-playground.vercel.app/",
  },
  {
    slug: "rekindl",
    title: "Rekindl",
    description:
      "Stay in touch with the people who matter",
    longDescription:
      "A tool that nudges you to stay in touch with the people who matter. If you're stuck, it uses AI to help you draft thoughtful, personal messages - all in service of reconnecting with your network!",
    icon: Users,
    status: "live",
    category: "network",
    group: "personal",
    displayMode: "iframe",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Turso SQLite",
      "Claude API",
      "Tailwind CSS",
    ],
    liveUrl: "https://getrekindl.vercel.app/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
