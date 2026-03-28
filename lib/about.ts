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
  image: string;
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
      { day: 1, title: "Posting on LinkedIn is cringe", reframe: "Share with a wider network, authentically", image: "/screenshots/linkedin-challenge/day-01-cringe.png" },
      { day: 2, title: "I'm just not a names person", reframe: "With a little effort, you probably can be", image: "/screenshots/linkedin-challenge/day-02-names.png" },
      { day: 5, title: "It's too late", reframe: "The second best time to start is now", image: "/screenshots/linkedin-challenge/day-05-too-late.png" },
      { day: 7, title: "Sorry I'm late, traffic sucks", reframe: "I could have left earlier", image: "/screenshots/linkedin-challenge/day-07-traffic.png" },
      { day: 9, title: "Feeling scatterbrained", reframe: "Schedule time to worry and think", image: "/screenshots/linkedin-challenge/day-09-scatterbrained.png" },
      { day: 14, title: "I've lost my ambition", reframe: "Found clarity in priorities", image: "/screenshots/linkedin-challenge/day-14-ambition.png" },
      { day: 20, title: "This feels like a huge deal", reframe: "Zoom out — it's relative to the frame", image: "/screenshots/linkedin-challenge/day-20-zoom-out.png" },
    ],
  },
  {
    id: "glue-club",
    title: "Glue Club",
    description: "Molly Graham's leadership community for startup operators",
    icon: Users,
    content:
      'Active member of <a href="https://www.glueclub.com" target="_blank" rel="noopener noreferrer">Glue Club</a>, Molly Graham\'s leadership development community for experienced startup operators. A space for people leading teams and organizations and dealing with the beauty of startup chaos.',
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
  { name: "Claude Cowork", role: "Workflow automation" },
  { name: "Claude", role: "General assistant" },
  { name: "Gemini", role: "Research & analysis" },
];
