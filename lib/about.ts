import {
  Megaphone,
  Users,
  Globe,
  BookOpen,
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
    description: "Building in public and sharing lessons learned",
    icon: Megaphone,
    content:
      "A month-long experiment in consistent content creation, documenting the journey of building AI-powered tools and sharing insights with the professional community.", // TODO: Jeremy to provide real content
  },
  {
    id: "glue-club",
    title: "Glue Club",
    description: "Connecting people who connect people",
    icon: Users,
    content:
      "An initiative focused on the people who hold teams and organizations together - the glue people who make everything work behind the scenes.", // TODO: Jeremy to provide real content
  },
  {
    id: "spanish-night",
    title: "Noche de Espa\u00f1ol",
    description: "Advanced/fluent Spanish-speaking group in NYC",
    icon: Globe,
    content:
      "An advanced and fluent Spanish-speaking community in New York City with over 50 members and dozens of meetups over the last 5 years.",
  },
  {
    id: "change-management",
    title: "Change Management",
    description:
      "Frameworks and principles for leading organizational change",
    icon: BookOpen,
    content:
      "A collection of frameworks, principles, and case studies on leading organizational change - from Kotter's 8-Step Model to Nudge Theory.",
    linkTo: "/change-management",
  },
];

export type AiTool = {
  name: string;
  role: string;
};

export const aiToolStack: AiTool[] = [
  { name: "Granola", role: "Meeting notes" },
  { name: "Wispr Flow", role: "Voice dictation" },
  { name: "Claude", role: "Code & writing" },
  { name: "Gemini", role: "Research & analysis" },
  { name: "ChatGPT", role: "General assistant" },
];
