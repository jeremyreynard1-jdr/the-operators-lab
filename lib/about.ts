import {
  Megaphone,
  Users,
  Globe,
  type LucideIcon,
} from "lucide-react";

export type AboutCard = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  content: string;
  linkTo?: string;
};

export const aboutCards: AboutCard[] = [
  {
    id: "linkedin-challenge",
    title: "30-Day LinkedIn Challenge",
    description: "30 days of posting inspired by reframes",
    icon: Megaphone,
    content:
      "Posted on LinkedIn for 30 days straight on reframes throughout my career — one of the most powerful tools as a leader and professional.",
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
