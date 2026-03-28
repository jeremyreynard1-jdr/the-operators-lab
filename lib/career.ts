export type CareerStop = {
  id: string;
  company: string;
  logo: string; // fallback letter avatar
  logoUrl?: string; // company logo URL
  title: string;
  period: string;
  city: string;
  startYear: string;
  description: string;
  isCurrent?: boolean;
};

export const careerStops: CareerStop[] = [
  {
    id: "linkedin",
    company: "LinkedIn",
    logo: "in",
    logoUrl: "/logos/linkedin.png",
    title: "Business Leadership Program > Team Lead, Market Research",
    period: "2014 - 2018",
    startYear: "2014",
    city: "San Francisco > New York",
    description:
      "After UCLA, started in LinkedIn's leadership rotation program, moved into sales, then spent most of my time in Market Research. Led global research programs across multi-billion-dollar B2B/B2C products as membership doubled to over 600M (and has since doubled again to 1.2B). Amazing 4 years - moved across the country, promoted 3 times, countless mentors and friendships.",
  },
  {
    id: "wework",
    company: "WeWork",
    logo: "We",
    logoUrl: "/logos/wework.png",
    title: "Senior Lead, Growth Analytics - Latin America",
    period: "2018 - 2020",
    startYear: "2018",
    city: "Buenos Aires, Argentina",
    description:
      "Moved abroad to Buenos Aires in WeWork LATAM HQ. First regional growth analytics lead for WeWork LATAM, acting as the bridge across the regions and HQ in NYC. Built the data, reporting, and dashboard infrastructure covering 6 countries and 11 markets. Partnered with Growth Marketing and Growth Ops to lead $20M quarterly revenue measurement.",
  },
  {
    id: "luminary",
    company: "Luminary Media",
    logo: "L",
    logoUrl: "/logos/luminary.png",
    title: "Senior Manager, Business Intelligence & Analytics",
    period: "2020",
    startYear: "2020",
    city: "New York",
    description:
      "First data analytics hire at a podcast startup. Built exec reporting systems, led companywide Amplitude rollout (product analytics tool), and partnered with the exec team to drive 10-15% MoM growth and 4x CAC reduction.",
  },
  {
    id: "disney",
    company: "Disney+",
    logo: "D+",
    logoUrl: "/logos/disneyplus.png",
    title: "Analytics Lead > Manager, International Strategy & Analytics",
    period: "2021 - 2023",
    startYear: "2021",
    city: "New York",
    description:
      "Built out Business Strategy & Analytics team supporting Disney+ during hypergrowth past 130M+ subscribers. Reduced time-to-insight 80% and saved ~30 hours/week of firedrills by automating executive reporting. Promoted to build out and lead a new team enabling +10% international subscriber growth (representing 70% of global subscribers) across EMEA, LATAM, and APAC.",
  },
  {
    id: "matter-labs",
    company: "Matter Labs",
    logo: "ML",
    logoUrl: "/logos/matterlabs.png",
    title: "Chief of Staff & Head of BizOps",
    period: "2024 - 2025",
    startYear: "2024",
    city: "New York (Remote - Madrid, Cape Town)",
    description:
      "Partnered with the COO and leadership at a 150+ person web3 startup (Series C, $250m raised, a16z, USV-backed). Led BizOps team, served as Interim Head of People (10-person org), and directed the public token launch - distributing ~$1B in value across 300+ stakeholders.",
  },
  {
    id: "fractional",
    company: "Fractional",
    logo: ">",
    title: "Fractional Head of Operations",
    period: "2025 - Present",
    startYear: "2025",
    city: "New York",
    description:
      "Strategic partner to COOs leading post-merger alignment of People, Finance, and Operations. Building AI-powered tools on the side - the projects you see on this site.",
    isCurrent: true,
  },
];
