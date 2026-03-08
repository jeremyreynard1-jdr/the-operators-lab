import {
  Layers,
  Users,
  Rss,
  Database,
  Radio,
  Music,
  type LucideIcon,
} from "lucide-react";

export type ProjectStatus = "live" | "in-dev" | "ideation";

export type ProjectDisplayMode =
  | "iframe"
  | "external-link"
  | "demo-video"
  | "concept";

export type ProjectCategory = "productivity" | "learning" | "network";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  status: ProjectStatus;
  category: ProjectCategory;
  displayMode: ProjectDisplayMode;
  techStack: string[];
  liveUrl?: string;
  demoAsset?: string;
};

export const projects: Project[] = [
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
    displayMode: "demo-video",
    techStack: ["Chrome Extension", "Manifest V3", "Claude API", "JavaScript"],
    demoAsset: "/demos/tab-triage-walkthrough.mp4", // TODO: Jeremy to provide video asset
  },
  {
    slug: "sql-101",
    title: "SQL 101",
    description: "Interactive SQL learning playground for beginners",
    longDescription:
      "An interactive browser-based environment for learning SQL from scratch. SQL 101 lets users write and execute queries against sample datasets, with guided lessons that build from basic SELECT statements to complex joins and aggregations. Designed for communications professionals who want to query their own data without relying on engineering teams.",
    icon: Database,
    status: "live",
    category: "learning",
    displayMode: "iframe",
    techStack: ["Next.js", "TypeScript", "SQL.js", "Tailwind CSS"],
    liveUrl: "https://sql-101-playground.vercel.app/",
  },
  {
    slug: "rekindl",
    title: "Rekindl",
    description:
      "Inspiration to reconnect with your network",
    longDescription:
      "A tool that nudges you to stay in touch with the people who matter. Rekindl surfaces connections you haven't reached out to in a while and uses AI to help you draft thoughtful, personal messages - turning good intentions into action.",
    icon: Users,
    status: "live",
    category: "network",
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
  {
    slug: "presence",
    title: "Presence",
    description:
      "Aggregate someone's data to understand who they are and how you relate",
    longDescription:
      "A people-intelligence tool that pulls together everything you know about a contact - their news, social presence, shared history, and context - so you walk into every conversation prepared. Integrates with Google services and RSS feeds to build rich, AI-enhanced profiles.",
    icon: Rss,
    status: "live",
    category: "network",
    displayMode: "external-link",
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
      "A control center for comms professionals. Antenna bundles a briefing generator, message pull-through tracker, press clips digest, rapid-response monitor, and internal comms workflow - all powered by Claude. Currently in open beta with five tools live.",
    icon: Radio,
    status: "in-dev",
    category: "productivity",
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
  {
    slug: "music-discovery",
    title: "Music Discovery",
    description:
      "AI-powered music recommendation engine", // TODO: Jeremy to provide real description
    longDescription:
      "Exploring the intersection of AI and music taste - a tool that goes beyond algorithmic playlists to help you discover music that actually resonates.", // TODO: Jeremy to provide real description
    icon: Music,
    status: "ideation",
    category: "learning",
    displayMode: "concept",
    techStack: [], // TODO: Jeremy to provide
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
