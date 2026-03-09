import {
  BookOpen,
  Lightbulb,
  Play,
  type LucideIcon,
} from "lucide-react";

export type InspirationItem = {
  id: string;
  title: string;
  author: string;
  url: string;
  type: "blog" | "newsletter" | "guide" | "video";
  description: string;
  icon: LucideIcon;
};

const typeIcons: Record<InspirationItem["type"], LucideIcon> = {
  blog: BookOpen,
  newsletter: BookOpen,
  guide: Lightbulb,
  video: Play,
};

export const inspirationItems: InspirationItem[] = [
  {
    id: "wes-kao",
    title: "Wes Kao's Resources",
    author: "Wes Kao",
    url: "https://www.weskao.com/resources",
    type: "blog",
    description:
      "Co-founder of Maven. Sharp writing on executive communication, managing up, and high-agency operating.",
    icon: typeIcons.blog,
  },
  {
    id: "molly-graham",
    title: "Molly Graham's Newsletter",
    author: "Molly Graham",
    url: "https://mollyg.substack.com/",
    type: "newsletter",
    description:
      "Veteran operator (Facebook, Quip, CZI). Writes about scaling teams and the messy middle of company-building.",
    icon: typeIcons.newsletter,
  },
  {
    id: "blueprints",
    title: "Blueprints Guide",
    author: "Blueprints",
    url: "https://blueprints.guide/",
    type: "guide",
    description:
      "Actionable frameworks for decision-making, communication, and leadership.",
    icon: typeIcons.guide,
  },
  {
    id: "rejection-challenge",
    title: "100 Days of Rejection",
    author: "Jia Jiang",
    url: "https://www.youtube.com/watch?v=-vZXgApsPCQ",
    type: "video",
    description:
      "Inspiring TED talk on building resilience through 100 days of deliberate rejection.",
    icon: typeIcons.video,
  },
];
