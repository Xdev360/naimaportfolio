export type ProcessStep = {
  title: string;
  description: string;
  rationale: string;
  variant: "wireframe" | "iteration" | "sketch";
  accent: string;
};

export type ShowcaseScreen = {
  title: string;
  image: string;
  alt: string;
  annotation: string;
  tagColor: string;
  layout: "mobile" | "desktop";
};

export type ImpactMetric = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  tag: string;
  button: string;
  buttonColor: string;
  cover: string;
  alt: string;
  role: string;
  timeline: string;
  tools: string[];
  overview: string;
  problem: string;
  process: ProcessStep[];
  solution: string;
  impact: ImpactMetric[];
  impactNote: string;
  screens: ShowcaseScreen[];
};

export const projects: Project[] = [
  {
    slug: "ideasha-community",
    title: "Ideasha: Community Ideation Platform",
    shortTitle: "Ideasha",
    tag: "Mobile App",
    button: "View App",
    buttonColor: "#FFE68C",
    cover: "/images/cover-ideasha.webp",
    alt: "Ideasha mobile app onboarding and feed screens",
    role: "Lead Product Designer",
    timeline: "Jun – Sep 2025",
    tools: ["Figma", "Protopie", "Maze", "Zeplin"],
    overview:
      "A mobile-first community platform where people drop raw ideas and others build on them — designed to turn sign-up from a chore into a personalized, gamified first experience.",
    problem:
      "The platform experienced high drop-off rates during sign-up. The initial flow was a standard, boring data-collection form that failed to capture user interest or personalize the experience early on.",
    process: [
      {
        title: "Progressive disclosure",
        description:
          "Broke the complex onboarding form into small, digestible steps instead of one overwhelming screen.",
        rationale:
          "Each step asks for one thing — reducing cognitive load and giving users a sense of progress with every tap.",
        variant: "sketch",
        accent: "#FFE68C",
      },
      {
        title: "The Vibe Picker",
        description:
          "Introduced a gamified preference selection before credential collection.",
        rationale:
          "Users immerse in the platform's culture first. The data gathered instantly personalizes their feed and powers the recommendation AI.",
        variant: "iteration",
        accent: "#FFC9F0",
      },
      {
        title: "Feed hierarchy",
        description:
          "Designed the main feed to prioritize visuals and interaction over text density.",
        rationale:
          "Card layout with prominent upvote/comment actions drives engagement — users scan images first, read second.",
        variant: "wireframe",
        accent: "#9DDCFF",
      },
    ],
    solution:
      "A frictionless, gamified onboarding flow that connects users to relevant content immediately, increasing Day-1 retention.",
    impact: [
      { value: "+64%", label: "First-post completion" },
      { value: "78%", label: "Day-1 retention (beta)" },
      { value: "12→4", label: "Onboarding steps cut" },
      { value: "3.1 min", label: "Avg. session length" },
    ],
    impactNote:
      "Beta testers went from abandoning at the sign-up screen to posting ideas within their first session.",
    screens: [
      {
        title: "Get Started",
        image: "/images/screens/ideasha-get-started.webp",
        alt: "Ideasha branded welcome screen replacing generic sign-up",
        annotation:
          "We replaced a generic 'Sign Up' form with a branded welcome that emphasizes the community value proposition before the ask.",
        tagColor: "#FFE68C",
        layout: "mobile",
      },
      {
        title: "Pick Your Vibe",
        image: "/images/screens/ideasha-pick-vibe.webp",
        alt: "Ideasha gamified vibe preference selection screen",
        annotation:
          "This gamified preference selection serves a dual purpose: it personalizes the user's feed instantly and gathers crucial data for our recommendation AI.",
        tagColor: "#FFC9F0",
        layout: "mobile",
      },
      {
        title: "Main Feed",
        image: "/images/screens/ideasha-main-feed.webp",
        alt: "Ideasha main feed with card layout and interaction buttons",
        annotation:
          "A clean card layout designed for high engagement. The hierarchy prioritizes visuals and interaction buttons (upvotes/comments) over text density.",
        tagColor: "#9DDCFF",
        layout: "mobile",
      },
    ],
  },
  {
    slug: "smartsmb-identity",
    title: "SmartSMB: Visual Identity System",
    shortTitle: "SmartSMB",
    tag: "Brand Identity",
    button: "See Identity",
    buttonColor: "#9DDCFF",
    cover: "/images/cover-smartsmb.webp",
    alt: "SmartSMB Advisory Limited brand identity system",
    role: "Brand & UI Designer",
    timeline: "Feb – May 2025",
    tools: ["Illustrator", "Figma", "InDesign", "Pantone refs"],
    overview:
      "Full visual identity system for SmartSMB Advisory Limited — a scalable design language that brings consistency across every B2B touchpoint.",
    problem:
      "The client suffered from brand dilution. Inconsistent use of logos, colors, and typography across B2B touchpoints was eroding trust and professional authority.",
    process: [
      {
        title: "Design Language System",
        description:
          "Built a modular system — not just a logo, but rigid rules for clear space, type scale, and color application.",
        rationale:
          "A DLS ensures every designer and stakeholder applies the brand the same way, eliminating one-off interpretations.",
        variant: "sketch",
        accent: "#FFE68C",
      },
      {
        title: "Modular typography",
        description:
          "Defined a type scale that works from large dashboards down to mobile notifications.",
        rationale:
          "Hierarchy and readability stay consistent at every size — critical for a B2B platform spanning web, print, and email.",
        variant: "wireframe",
        accent: "#9DDCFF",
      },
      {
        title: "Trust + action palette",
        description:
          "Established primary blue for trust, vibrant yellow for action, and secondary tints for UI complexity.",
        rationale:
          "Three roles for color — authority, energy, and depth — so the palette tells a story instead of decorating.",
        variant: "iteration",
        accent: "#FFC9F0",
      },
    ],
    solution:
      "A centralized, easy-to-use brand guideline that ensures 100% visual consistency, elevating the company's market valuation and speeding up internal asset creation.",
    impact: [
      { value: "100%", label: "Brand consistency" },
      { value: "3×", label: "Logo recall in testing" },
      { value: "12", label: "Asset templates delivered" },
      { value: "2 wks", label: "Client rollout time" },
    ],
    impactNote:
      "Client feedback: 'For the first time our sales deck and storefront look like the same company.'",
    screens: [
      {
        title: "Typography Scale",
        image: "/images/screens/smartsmb-typography.webp",
        alt: "SmartSMB modular typography scale specification",
        annotation:
          "Defined a modular type scale to ensure typographic hierarchy and readability remains consistent from a large dashboard down to a mobile notification.",
        tagColor: "#9DDCFF",
        layout: "desktop",
      },
      {
        title: "Color Palette",
        image: "/images/screens/smartsmb-colors.webp",
        alt: "SmartSMB color palette with primary and secondary tints",
        annotation:
          "We established a primary blue for trust, a vibrant yellow for action, and a set of secondary tints to allow for UI complexity without visual chaos.",
        tagColor: "#FFE68C",
        layout: "desktop",
      },
      {
        title: "Real-World Mockups",
        image: "/images/screens/smartsmb-mockups.webp",
        alt: "SmartSMB brand applied to business cards and physical assets",
        annotation:
          "Applying the system to physical assets like business cards proves the identity's versatility and premium feel in a tactile environment.",
        tagColor: "#FFC9F0",
        layout: "desktop",
      },
    ],
  },
  {
    slug: "ai-streaming-platform",
    title: "Google Movie: AI-Powered Streaming Platform",
    shortTitle: "Google Movie",
    tag: "Product Design",
    button: "View Project",
    buttonColor: "#FFC9F0",
    cover: "/images/cover-streaming.webp",
    alt: "Google Movie AI-powered streaming platform interface",
    role: "Assistant Designer (Collaboration with XBigBrain)",
    timeline: "Jan – Apr 2025",
    tools: ["Figma", "FigJam", "Principle", "Notion"],
    overview:
      "Collaborative product design for an AI-powered streaming platform — simplifying complex curation into an immersive, lean-back viewing experience.",
    problem:
      "Users faced significant choice paralysis. The vast library and complex AI recommendations cluttered the interface, making it hard for users to simply find something to watch.",
    process: [
      {
        title: "Content-first minimalism",
        description:
          "In collaboration with XBigBrain, we made UI elements recede until needed — artwork dominates.",
        rationale:
          "Movie posters are the product. Every chrome element was evaluated: does it help the user watch, or distract from it?",
        variant: "sketch",
        accent: "#FFE68C",
      },
      {
        title: "Cinematic grid system",
        description:
          "Developed a dynamic grid that lets artwork breathe with subtle overlays for interaction.",
        rationale:
          "Light theme makes posters pop against a neutral background — reversing the industry default of dark-mode streaming.",
        variant: "wireframe",
        accent: "#9DDCFF",
      },
      {
        title: "Social without distraction",
        description:
          "Watch Party features use semi-transparent overlays that preserve cinematic aspect ratio.",
        rationale:
          "Social panels float over content instead of replacing it — users stay immersed while connecting.",
        variant: "iteration",
        accent: "#FFC9F0",
      },
    ],
    solution:
      "Our combined efforts resulted in a sleek, intuitive interface that simplifies complex AI curation into an immersive, lean-back viewing experience.",
    impact: [
      { value: "+38%", label: "Session start rate" },
      { value: "2.4×", label: "Avg. watch duration" },
      { value: "-52%", label: "Time-to-first-play" },
      { value: "4.6/5", label: "Usability score" },
    ],
    impactNote:
      "Beta testers called out the light aesthetic and overlay-based social features as reasons they'd return.",
    screens: [
      {
        title: "Main Discovery Hub",
        image: "/images/screens/movie-discovery.webp",
        alt: "Google Movie main discovery hub with light theme and movie posters",
        annotation:
          "We moved away from a standard dark theme to a clean, light aesthetic to make the movie posters (the product) 'pop' against a neutral background.",
        tagColor: "#FFE68C",
        layout: "desktop",
      },
      {
        title: "Video Player & Social",
        image: "/images/screens/movie-player.webp",
        alt: "Google Movie video player with semi-transparent social overlay",
        annotation:
          "To support 'Watch Parties' without distraction, the social panel is a semi-transparent overlay that preserves the cinematic aspect ratio of the main content.",
        tagColor: "#FFC9F0",
        layout: "desktop",
      },
      {
        title: "AI Party Hub",
        image: "/images/screens/movie-ai-hub.webp",
        alt: "Google Movie AI Party Hub configuration modal overlay",
        annotation:
          "Complex settings are managed via a clean modal overlay. This prevents the user from losing context of the movie behind them while adjusting their social environment.",
        tagColor: "#9DDCFF",
        layout: "desktop",
      },
    ],
  },
  {
    slug: "stax-dashboard",
    title: "StoreBook: Company Management Distribution System",
    shortTitle: "StoreBook",
    tag: "UI Design",
    button: "View",
    buttonColor: "#9BE8B4",
    cover: "/images/cover-stax.webp",
    alt: "StoreBook distribution dashboard with inventory and analytics",
    role: "UX/UI Designer (Enterprise SaaS)",
    timeline: "Aug 2025 – Present",
    tools: ["Figma", "Storybook", "Jira", "Excel data viz"],
    overview:
      "Enterprise distribution dashboard redesign — transforming a chaotic legacy system into a modern, high-efficiency tool for inventory and logistics teams.",
    problem:
      "The legacy distribution dashboard was dense, confusing, and prone to user error. Workers responsible for inventory couldn't quickly identify critical alerts, leading to costly logistical mistakes.",
    process: [
      {
        title: "Alert hierarchy",
        description:
          "Redesigned information architecture: Emergency (Red) → Urgent (Amber) → Routine (Neutral).",
        rationale:
          "Warehouse managers assess system health in under 5 seconds — actionable items are immediately obvious.",
        variant: "sketch",
        accent: "#FFE68C",
      },
      {
        title: "Data clarity",
        description:
          "Stripped unnecessary gridlines, used zebra striping and whitespace to guide the eye.",
        rationale:
          "Complex data rows become scannable — reducing the scanning errors that caused costly inventory mistakes.",
        variant: "wireframe",
        accent: "#9DDCFF",
      },
      {
        title: "Layered insights",
        description:
          "KPI charts appear as modals over the dashboard, not separate pages.",
        rationale:
          "Deep insights without navigating away from the main workflow — context is never lost.",
        variant: "iteration",
        accent: "#FFC9F0",
      },
    ],
    solution:
      "Transformed a chaotic legacy system into a modern, high-efficiency tool that reduced daily reconciliation time by 30% and significantly decreased reporting errors.",
    impact: [
      { value: "-30%", label: "Reconciliation time" },
      { value: "23", label: "Alerts caught early" },
      { value: "92%", label: "Task completion rate" },
      { value: "6", label: "KPIs on one screen" },
    ],
    impactNote:
      "System admin: 'I used to open four tabs every morning. Now I open one.'",
    screens: [
      {
        title: "Dashboard Overview",
        image: "/images/screens/storebook-dashboard.webp",
        alt: "StoreBook main dashboard with traffic light alert system",
        annotation:
          "Implemented a 'traffic light' alert system at the top level, allowing warehouse managers to assess system health and critical bottlenecks in under 5 seconds.",
        tagColor: "#FFE68C",
        layout: "desktop",
      },
      {
        title: "Inventory Table",
        image: "/images/screens/storebook-inventory.webp",
        alt: "StoreBook inventory data table with clean zebra striping",
        annotation:
          "We stripped away unnecessary gridlines and used subtle zebra striping and whitespace to guide the eye across complex data rows, reducing scanning errors.",
        tagColor: "#9DDCFF",
        layout: "desktop",
      },
      {
        title: "Data Visualization",
        image: "/images/screens/storebook-data-viz.webp",
        alt: "StoreBook KPI charts layered as modal over dashboard",
        annotation:
          "Key performance indicators are visualized with clean, simple charts, layered over the main dashboard to provide deep insights without navigating away from the main workflow.",
        tagColor: "#FFC9F0",
        layout: "desktop",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
