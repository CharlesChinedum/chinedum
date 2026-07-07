export const navLinks = [
  {
    title: "Projects",
    id: "projects",
    url: "/projects",
  },
  {
    title: "Blog",
    id: "blog",
    url: "/blog",
  },
  {
    title: "Tools",
    id: "tools",
    url: "/tools",
  },
  {
    title: "About",
    id: "about",
    url: "/#about",
  },
  {
    title: "Experience",
    id: "experience",
    url: "/#experience",
  },
  {
    title: "Contact",
    id: "contact",
    url: "/#contact",
  },
];

export const navIcons: string[] = ["github", "twitter", "linkedin", "gmail"];

export interface Tool {
  title: string;
  icon: string;
}

export interface ToolCategory {
  label: string;
  items: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    label: "Languages",
    items: [
      { title: "JavaScript", icon: "javascript" },
      { title: "TypeScript", icon: "typescript" },
      { title: "Golang", icon: "go" },
      { title: "Rust", icon: "rust" },
      { title: "Solidity", icon: "solidity" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { title: "React", icon: "react" },
      { title: "Next", icon: "nextdotjs" },
      { title: "Vue", icon: "vuedotjs" },
      { title: "Nuxt", icon: "nuxt" },
      { title: "Astro", icon: "astro" },
      { title: "TailwindCss", icon: "tailwindcss" },
      { title: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    label: "Backend",
    items: [
      { title: "Node", icon: "nodedotjs" },
      { title: "Express", icon: "express" },
      { title: "NestJs", icon: "nestjs" },
      { title: "Axum", icon: "rust" },
      { title: "Prisma", icon: "prisma" },
    ],
  },
  {
    label: "Databases & CMS",
    items: [
      { title: "PostgreSQL", icon: "postgresql" },
      { title: "MongoDB", icon: "mongodb" },
      { title: "Sanity", icon: "sanity" },
      { title: "Strapi", icon: "strapi" },
    ],
  },
  {
    label: "DevOps & Tooling",
    items: [
      { title: "Git", icon: "git" },
      { title: "GitHub", icon: "github" },
      { title: "Docker", icon: "docker" },
      { title: "Linux", icon: "linux" },
      { title: "Cypress", icon: "cypress" },
    ],
  },
];

export const futureTools: Tool[] = [
  {
    title: "Kubernetes",
    icon: "kubernetes",
  },
  {
    title: "Redis",
    icon: "redis",
  },
  {
    title: "Grafana",
    icon: "grafana",
  },
  {
    title: "Swift",
    icon: "swift",
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string; // e.g. "2022 — 2024" or "2024 — Present"
  location?: string;
  current?: boolean;
  description: string;
  url?: string;
  techStack?: string[];
}

// Companies / clients worked with, shown as an experience timeline
// (separate from the personal Projects grid). Newest first.
export const experience: Experience[] = [
  {
    company: "Keble",
    role: "Senior Frontend Engineer",
    period: "Dec 2024 — Present",
    location: "Remote",
    current: true,
    description:
      "Building property search, wallet, and dashboard features — plus admin interfaces for transactions and listings — for a real estate investment platform, with a focus on reusable components and performance.",
    url: "https://www.keble.co/",
    techStack: ["NextJs", "Zustand", "TailwindCss"],
  },
  {
    company: "Ignite.dev",
    role: "Frontend Engineer",
    period: "Sep 2023 — Dec 2024",
    location: "Remote",
    description:
      "Engineered the product landing page and admin dashboard, integrated Strapi for content management, and set up end-to-end testing with Cypress.",
    url: "https://www.ignite.dev",
    techStack: ["NextJs", "Strapi", "Cypress", "TypeScript", "TailwindCss"],
  },
  {
    company: "Tech Project on Budget (TPOB)",
    role: "Frontend Engineer",
    period: "Aug 2023 — Oct 2023",
    location: "Lagos, NG",
    description:
      "Built the product landing page and admin dashboard, shipping reusable components and adopting high-performance libraries to speed up delivery.",
    techStack: ["React", "TailwindCss"],
  },
  {
    company: "Darsh",
    role: "Lead Frontend Engineer",
    period: "Mar 2022 — Jan 2023",
    location: "Lagos, NG",
    description:
      "Led frontend development of the web app — delivering responsive, Figma-faithful UI and reusable templates, and driving code review, testing, and deployment.",
    techStack: ["React", "TailwindCss"],
  },
];

export const projects = [
  {
    name: "Vorge",
    // TODO: add a real Vorge screenshot to public/projects/ (was incorrectly using whipcare.png)
    img: undefined,
    url: "https://www.vorge.io/",
    github: undefined,
    desc: "Vorge replaces the Word documents, copy-pasted spreadsheets and one-off PDFs your team uses today with a structured, multi-user platform — built for refineries, mines, ports, and other critical infrastructure operators.",
    techStack: ["NextJs", "TailwindCss", "Framer Motion", "Gsap"],
  },
  {
    name: "Escalade Apartment",
    img: "escaladeapartment.png",
    url: "https://escaladehomes.ng",
    github: undefined,
    desc: "Escalade Homes offers beautifully designed apartments that blend elegance, simplicity, and peace of mind.",
    techStack: ["NextJs", "TailwindCss", "Firebase", "Paystack"],
  },
  {
    name: "Whipcare",
    img: "whipcare.png",
    url: "https://whipcare.app/",
    github: undefined,
    desc: "From mechanics to detailers, Get connected to top-rated professionals seamlessly.",
    techStack: ["NextJs", "TailwindCss"],
  },
  {
    name: "Goto",
    img: "goto.png",
    url: "https://goto.trulynedum.dev/",
    github: "https://github.com/CharlesChinedum/Goto",
    desc: "Goto is a tiny CLI tool that lets you bookmark directories with short names, then jump to them instantly from anywhere.",
    techStack: ["Go", "Shell Wrapper", "NextJs", "TailwindCss"],
  },
  {
    name: "Genius",
    img: "genius.png",
    url: "https://genius-umber-seven.vercel.app/",
    github: undefined,
    desc: "Create content using AI 10x faster. Features include image, video, audio, code generation and AI chatbot.",
    techStack: ["NextJs", "TailwindCss"],
  },
  {
    name: "Eje Farms",
    img: "eje.png",
    url: "https://ejefarms.io/",
    github: undefined,
    desc: "At Ejefarms, we take immense pride in being a versatile and innovative company with a diverse portfolio of principal business activities.",
    techStack: ["NextJs", "TailwindCss"],
  },
  {
    name: "Sol Wallet Tracker",
    img: "solana-wallet-tracker.png",
    url: "https://solana-wallet-tracker-lime.vercel.app",
    github: "https://github.com/CharlesChinedum/solana-wallet-tracker",
    desc: "Input a Solana wallet address to track its transactions. Built this project while learning Axum.",
    techStack: ["Rust", "Axum", "Solana", "NextJs"],
  },
];

// Playground
export const playground = [
  {
    name: "Shoppy Dashboard",
    img: "shoppy.png",
    url: "http://shoppy-dashboard-project.netlify.app/",
    github: "https://github.com/CharlesChinedum/shoppy-dashboard",
    desc: "Shoppy dashboard is a multi-fucntional dashboard built with React, syncfusion and Tailwindcss.",
    techStack: ["React", "TailwindCss", "Syncfusion"],
  },
  {
    name: "Jadoo",
    img: "jadoo.png",
    url: "https://jadoo-travel-agency-project.netlify.app/",
    github: "https://github.com/CharlesChinedum/jadoo-travel-agency",
    desc: "Jadoo is a travel agency dedicated to providing smooth travel experiences.",
    techStack: ["React", "TailwindCss"],
  },
  {
    name: "Enaira",
    img: "enaira.png",
    url: "https://enaira-project.netlify.app/",
    github: "https://github.com/CharlesChinedum/e-naira",
    desc: "Enaira is a platform that provides smooth purchase of data and airtime.",
    techStack: ["React", "TailwindCss"],
  },
  {
    name: "3D Portfolio",
    img: "3d_portfolio.png",
    url: "https://threed-portfolio-spcy.onrender.com/",
    github: "https://github.com/CharlesChinedum/3d-portfolio",
    desc: "Used this project to explore working with 3d objects on the web and threejs.",
    techStack: ["React", "TailwindCss", "ThreeJs", "EmailJs"],
  },
  {
    name: "Astro Website",
    img: "astro.png",
    url: "https://astro-website-project.netlify.app/",
    github: "https://github.com/CharlesChinedum/astro-website",
    desc: "This is a project I built up to solidify my knowledge of Astro. (It has a mini blog integrated into it).",
    techStack: ["Astro"],
  },
  {
    name: "Fiber",
    img: "fiber.png",
    url: "https://my-fiber-project.netlify.app/",
    github: "https://github.com/CharlesChinedum/Fiber",
    desc: "Fiber is a portfolio builder. This project is a landing page for Fiber.",
    techStack: ["HTML", "CSS"],
  },
  {
    name: "Hoobank",
    img: "hoobank.png",
    url: "https://modern-bank-webapp.netlify.app/",
    github: "https://github.com/CharlesChinedum/Modern-Bank-WebApp",
    desc: "Hoobank is a next generation payment method. This project is a landing page for Hoobank. It was crafted using React and TailwindCss.",
    techStack: ["React", "TailwindCss"],
  },
];

export const CLIENT_ROUTES = {
  home: "/",
  projects: "/projects",
  tools: "/tools",
  blog: "/blog",
  socials: {
    github: "https://github.com/CharlesChinedum",
    twitter: "https://twitter.com/trulynedum",
    linkedin: "https://www.linkedin.com/in/charles-ugbor-40b1121a7",
    email: "charleschinedum2@gmail.com",
  },
};

export const socials = [
  {
    title: "Github",
    icon: "github",
    url: CLIENT_ROUTES.socials.github,
  },
  {
    title: "Twitter | X",
    icon: "x",
    url: CLIENT_ROUTES.socials.twitter,
  },
  {
    title: "LinkedIn",
    icon: "/svgs/linkedin-svgrepo-com.svg",
    url: CLIENT_ROUTES.socials.linkedin,
  },
  {
    title: "Email",
    icon: "gmail",
    url: `mailto:${CLIENT_ROUTES.socials.email}`,
  },
];
