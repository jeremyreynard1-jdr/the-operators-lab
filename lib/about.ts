import {
  Megaphone,
  Users,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type Highlight = {
  day: number;
  title: string;
  reframe: string;
};

export type AboutCard = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  content: string;
  linkTo?: string;
  highlights?: Highlight[];
};

export const aboutCards: AboutCard[] = [
  {
    id: "linkedin-challenge",
    title: "30-Day LinkedIn Challenge",
    description: "30 days of reframes. 130K+ impressions.",
    icon: Megaphone,
    content:
      "Posted on LinkedIn for 30 days straight on reframes throughout my career — one of the most powerful tools as a leader and professional.",
    highlights: [
      { day: 1, title: "Posting on LinkedIn is cringe", reframe: "Share with a wider network, authentically" },
      { day: 2, title: "I'm just not a names person", reframe: "With a little effort, you probably can be" },
      { day: 9, title: "Feeling scatterbrained", reframe: "Schedule time to worry and think" },
      { day: 14, title: "I've lost my ambition", reframe: "Found clarity in priorities" },
      { day: 20, title: "This feels like a huge deal", reframe: "Zoom out — it's relative to the frame" },
    ],
  },
  {
    id: "glue-club",
    title: "Glue Club",
    description: "Molly Graham's leadership community for startup operators",
    icon: Users,
    content:
      "Active member of Glue Club, Molly Graham's leadership development community for experienced startup operators. A space for people leading teams and organizations and dealing with the beauty of startup chaos.",
  },
  {
    id: "spanish-night",
    title: "Noche de Espa\u00f1ol",
    description: "Advanced/fluent Spanish-speaking group in NYC",
    icon: Globe,
    content:
      "Founded and lead an advanced and fluent Spanish-speaking community in New York City with over 50 members and dozens of meetups over the last 5 years.",
  },
];

export type AiTool = {
  name: string;
  role: string;
};

export const aiToolStack: AiTool[] = [
  { name: "Granola", role: "Meeting notes" },
  { name: "Wispr Flow", role: "Voice dictation" },
  { name: "Claude Code", role: "Code & writing" },
  { name: "Gemini", role: "Research & analysis" },
  { name: "ChatGPT", role: "General assistant" },
];
