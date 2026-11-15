// ---------------------------------------------------------------------------
// All portfolio content lives here. Swap the placeholder persona below with
// your own details and the whole site updates.
// ---------------------------------------------------------------------------

export type NavLink = { label: string; href: string };
export type NumberedItem = { title: string; href?: string; meta?: string };

export const profile = {
  name: "Kanchan Saini",
  role: "Full-Stack Developer",
  tagline: "I design and build fast, accessible web products — from first sketch to production.",
  location: "Mumbai, India",
  email: "kanchan.saini1006@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/sainikanchan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saini-kanchan/" },
    { label: "X", href: "https://x.com/pspsspssss" },
  ],
  availability: "Available for select freelance and full-time roles in 2026.",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

// --- Home board cards --------------------------------------------------------

export type BoardCard = {
  label: string;
  href: string;
  external?: boolean;
  portrait?: boolean;
};

export const boardCards: BoardCard[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/experience#skills" },
  { label: "GitHub", href: "https://github.com/sainikanchan", external: true },
  { label: "Contact", href: "/contact" },
];

// --- Projects ----------------------------------------------------------------

export type ProjectSection = {
  h: string;
  p?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  group: "Featured work" | "Web apps" | "Open source & experiments";
  summary: string;
  year: string;
  updated: string;
  readTime: string;
  role: string;
  stack: string[];
  sections: ProjectSection[];
  live?: string;
  source?: string;
};

export const projectGroups = [
  "Featured work",
  "Web apps",
  "Open source & experiments",
] as const;

export const projects: Project[] = [
  {
    slug: "revive",
    title: "REVIVE — AI revenue recovery control plane",
    group: "Featured work",
    summary:
      "An AI-powered recovery system that compares recovery strategies by expected ₹, enforces deterministic guardrails, and executes payments through Razorpay.",
    year: "2026",
    updated: "September 2026",
    readTime: "5 min read",
    role: "Full-stack development",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Razorpay API",
      "Signed webhooks",
      "HMAC-SHA256",
    ],
    sections: [
      {
        h: "Overview",
        p: [
          "REVIVE was built for the Razorpay Buildathon 2026 (AI Revenue Recovery track). Instead of blindly retrying failed payments, it evaluates each recovery case, compares strategies, and picks the action that maximises expected recovered revenue — AI proposes, policy authorises, Razorpay executes.",
        ],
      },
      {
        h: "The problem",
        p: [
          "Payment failures leak revenue, and a flat retry loop treats every failure the same. A temporary UPI failure wants a retry; an abandoned checkout wants a fresh payment link; a customer who has already been chased needs to stop being chased at all.",
        ],
      },
      {
        h: "What I built",
        p: [
          "A closed-loop recovery system: every case is scored, four strategies (Retry UPI, Payment Link, Promise to Pay, Escalate) are estimated for recovery probability, and expected recovery is calculated as amount × probability. A deterministic policy guard sits between the AI recommendation and Razorpay execution.",
        ],
        bullets: [
          "Decision Lab showing probability, expected ₹, rationale, and customer fatigue per strategy",
          "Razorpay Payment Link creation carrying the recovery-case ID in metadata",
          "HMAC-SHA256 webhook verification with exact-amount checks and idempotent processing",
          "Persistent recovery state with a full audit log",
        ],
      },
      {
        h: "Results",
        bullets: [
          "End-to-end recovery demonstrated in Razorpay Test Mode (₹7,499 reconciled via webhook)",
          "Duplicate webhook deliveries can no longer inflate recovered revenue",
          "Deployed to Vercel as the buildathon demo",
        ],
      },
    ],
    live: "https://revive-ai-revenue-recovery-1s3xbyhj0-kanchan7.vercel.app/",
    source: "https://github.com/sainikanchan/revive-ai-revenue-recovery",
  },
  {
    slug: "retroframe",
    title: "RetroFrame — Polaroid photo editor",
    group: "Featured work",
    summary:
      "Turn your photos into Polaroid memories — upload, frame, filter, decorate, and share, with an AI co-editor along the way.",
    year: "2026",
    updated: "November 2026",
    readTime: "5 min read",
    role: "Design & full-stack development",
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fabric.js",
      "Zustand",
      "Supabase",
      "Claude API",
    ],
    sections: [
      {
        h: "Overview",
        p: [
          "RetroFrame is a Polaroid-style photo editor built around one core creator experience: drop in a photo, pick a frame, tune it, decorate it, and export it — with an AI co-editor that can write captions and suggest the right look.",
        ],
      },
      {
        h: "The problem",
        p: [
          "Editing apps either bury the simple act of framing a photo under pro-grade toolbars, or they demand an account and a cloud upload before you can try anything. I wanted a warm, instant, local-first editor with just enough AI to be helpful.",
        ],
      },
      {
        h: "What I built",
        p: [
          "A single Zustand store is the source of truth for the active project — frames, filters, decorations, and export all read from it, so what you see in the preview is exactly what exports.",
        ],
        bullets: [
          "6 Polaroid frame templates, 12 filters with live thumbnails, and 8 manual adjustment sliders",
          "Captions, stickers, washi tape, and a freehand doodle tool on a real Fabric.js canvas",
          "Undo/redo, keyboard shortcuts, autosave drafts, and a guest mode that needs zero setup",
          "High-resolution PNG/JPG/PDF export, plus Memory Capsules sealed until a countdown ends",
          "AI captions, quotes, and filter recommendations through a Claude API route",
        ],
      },
      {
        h: "Results",
        bullets: [
          "Full editing pipeline works with no environment variables set (local-first guest mode)",
          "Supabase schema with row-level security ready for accounts, cloud sync, and sharing",
          "Standard Next.js App Router project, deployable to Vercel with no build config",
        ],
      },
    ],
    source: "https://github.com/sainikanchan/RetroFrame",
  },
  {
    slug: "preppilot",
    title: "PrepPilot — Interview preparation platform",
    group: "Web apps",
    summary:
      "A full-stack mock-interview platform with speech-to-text answers, spaCy-powered evaluation, and adaptive question difficulty.",
    year: "2026",
    updated: "October 2026",
    readTime: "4 min read",
    role: "Full-stack development",
    stack: [
      "Python",
      "FastAPI",
      "spaCy",
      "React 18",
      "Vite",
      "SQLite",
      "MediaPipe",
    ],
    sections: [
      {
        h: "Overview",
        p: [
          "PrepPilot is a full-stack interview-preparation platform. A candidate configures an interview (domain, difficulty, question count), answers out loud with speech-to-text while a live camera preview runs, and gets a real evaluation report with per-answer feedback and delivery metrics.",
        ],
      },
      {
        h: "The problem",
        p: [
          "Interview practice is usually passive — reading questions and skimming model answers. Nothing tells you whether your actual answer was relevant or structured, and the questions never adapt to how you're doing.",
        ],
      },
      {
        h: "What I built",
        p: [
          "A FastAPI + SQLAlchemy backend with JWT auth and per-user sessions, and a React SPA that handles recording, transcription, and reporting entirely in the browser.",
        ],
        bullets: [
          "spaCy NLP evaluation: concept coverage, semantic similarity to a reference answer, and a STAR structure check for behavioural questions",
          "Rule-based adaptive difficulty — strong answers step up, weak ones step down, with a recorded adaptation history",
          "In-browser speech-to-text and MediaPipe delivery metrics (speech rate, pauses, framing), kept in memory only",
          "Hybrid question generation: bank selection always works, with OpenAI/Gemini providers falling back automatically",
        ],
      },
      {
        h: "Results",
        bullets: [
          "pytest suite covering auth, scoring, adaptive difficulty, report ownership, and idempotent seeding",
          "Delivery metrics reported separately from correctness and labelled as estimates",
          "Frontend production build verified with Vite 6",
        ],
      },
    ],
    source: "https://github.com/sainikanchan/PrepPilot",
  },
  {
    slug: "postman-challenge",
    title: "Postman-Challenge — Postman certification docs",
    group: "Open source & experiments",
    summary:
      "An all-in-one documentation site for completing the Postman API certification during GirlScript Summer of Code 2024 (fork).",
    year: "2024",
    updated: "November 2024",
    readTime: "2 min read",
    role: "Open-source contribution (fork)",
    stack: ["JavaScript", "Markdown", "GitHub Pages"],
    sections: [
      {
        h: "Overview",
        p: [
          "A fork of the GSSoC'24 Postman-Challenge repository — the one-stop documentation hub that walks contributors through registering on Postman, completing the guided exercises, taking the certification test, and claiming badges and leaderboard points.",
        ],
      },
      {
        h: "What's inside",
        p: [
          "The site covers the full certification path plus contributor extras, and is published as a GitHub Pages site.",
        ],
        bullets: [
          "Step-by-step certification guide with registration and test instructions",
          "Badge customisation snippets ready to paste into a GitHub profile README",
          "Leaderboard links and support channels through GitHub Discussions",
        ],
      },
    ],
    live: "https://gssoc24.github.io/Postman-Challenge/",
    source: "https://github.com/sainikanchan/Postman-Challenge",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(slug: string, count = 3) {
  const current = getProject(slug);
  if (!current) return projects.slice(0, count);
  const sameGroup = projects.filter((p) => p.group === current.group && p.slug !== slug);
  const others = projects.filter((p) => p.group !== current.group && p.slug !== slug);
  return [...sameGroup, ...others].slice(0, count);
}

// --- About -------------------------------------------------------------------

export const aboutIntro = {
  eyebrow: "A LITTLE SOMETHING BEFORE WE BEGIN",
  quote: "\"404: A boring introduction not found.\"",
  greeting: "Hey, I'm Kanchan.",
  tagline: "A curious mind navigating an ever-evolving world...",
  lead: "Someone who loves asking questions, exploring ideas, learning new things and occasionally overthinking the smallest details.",
};

export type AboutBullet = { term?: string; text: string };

export type AboutSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: AboutBullet[];
};

export const aboutSections: AboutSection[] = [
  {
    id: "person",
    title: "A little about the person behind the screen.",
    paragraphs: [
      "I'm currently pursuing Artificial Intelligence & Data Science, but my interests go way beyond what's written in my degree.",
      "I love exploring the internet, discovering interesting ideas, learning things I didn't know existed, and connecting with people who see the world differently.",
      "I'm drawn to technology, creativity, entrepreneurship, open source, and the endless possibilities that come with being curious. I enjoy being part of communities, participating in events, exchanging ideas, and putting myself in situations where I get to learn something new.",
    ],
  },
  {
    id: "me",
    title: "Things that make me, well, me.",
    bullets: [
      {
        term: "Curiosity",
        text: "I can go from researching AI to reading about something completely unrelated in the same afternoon.",
      },
      {
        term: "Creativity",
        text: "I love ideas, storytelling, writing, and looking at ordinary things from unusual perspectives.",
      },
      {
        term: "Community",
        text: "I enjoy meeting people, exchanging knowledge, collaborating, and being part of something bigger.",
      },
      {
        term: "Ambition",
        text: "I have big dreams, a long list of things I want to learn, and a genuine desire to make something of myself.",
      },
    ],
  },
  {
    id: "believe",
    title: "A few things I believe in.",
    bullets: [
      { text: "Stay curious, even when you think you know enough." },
      { text: "Don't wait until you're ready to start something." },
      {
        text: "The best opportunities often come from saying yes to unfamiliar experiences.",
      },
      { text: "Be willing to be a beginner, again and again." },
      {
        text: "Take your work seriously, but never yourself too seriously.",
      },
    ],
  },
  {
    id: "here",
    title: "What I'm doing here",
    paragraphs: [
      "This website is more than a portfolio. It's my little corner of the internet — a place to collect my experiences, share what I'm learning, document my thoughts, and keep track of the person I'm becoming.",
      "I'm still figuring things out, exploring different paths, and discovering what I'm capable of.",
      "And that's the fun part.",
    ],
  },
];

export const aboutClosing = "Anyway, enough about me. Go explore! :)";

// --- Experience --------------------------------------------------------------

export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  place?: string;
  period?: string;
  paragraphs?: string[];
  responsibilities?: string[];
  achievement?: string;
};

export const experiences: ExperienceItem[] = [
  {
    id: "drixx",
    title: "Software Developer Intern",
    org: "DRIXX Solutions",
    period: "October 2025 – January 2026",
    paragraphs: [
      "Worked as a Software Developer Intern, gaining exposure to professional software development and the experience of working in an industry environment.",
    ],
  },
  {
    id: "axios",
    title: "Marketing Head",
    org: "Axios E-Cell",
    place: "Thakur College of Engineering and Technology",
    responsibilities: [
      "Led marketing and promotional initiatives for the college's entrepreneurship cell.",
      "Coordinated outreach and engagement activities to increase student participation in entrepreneurial events.",
      "Collaborated with team members to plan and execute initiatives, campaigns, and events.",
    ],
    achievement:
      "Qualified among the Top 50 in the National Entrepreneurship Challenge (NEC) 2025, IIT Bombay.",
  },
  {
    id: "shastra",
    title: "Marketing Head",
    org: "TCET Shastra Coding Club",
    responsibilities: [
      "Led the club's marketing and outreach initiatives, managing promotional strategies and student engagement.",
      "Coordinated with technical and organizing teams to plan and execute workshops, hackathons, and SCPC (Shastra Competitive Programming Contest).",
      "Managed event promotions and outreach to drive student participation in technical activities.",
      "Contributed to building an active coding community and encouraging students to explore competitive programming and technology.",
    ],
  },
  {
    id: "tsdw",
    title: "Technical Coordinator",
    org: "TSDW",
    place: "Thakur College of Engineering and Technology",
    responsibilities: [
      "Coordinated technical initiatives and worked with organizing teams to execute college-level events.",
      "Contributed to organizing HerSpark Ideathon and TechFest Zephyr.",
      "Collaborated across teams to manage event execution, coordination, and technical activities.",
      "Supported student participation and engagement in technology-driven initiatives.",
    ],
  },
  {
    id: "gssoc",
    title: "Open Source Contributor",
    org: "GirlScript Summer of Code (GSSoC'24)",
    paragraphs: [
      "Explored collaborative software development by contributing to open-source initiatives, understanding existing codebases, and working with the GitHub contribution workflow.",
    ],
    achievement: "Ranked 1490 among 40,000+ participants.",
  },
  {
    id: "cwb",
    title: "Mentee",
    org: "Code Without Barriers",
    period: "2025",
    paragraphs: [
      "Participated in a mentorship-driven learning experience focused on developing technical skills and gaining practical exposure.",
    ],
  },
];

export type SkillGroup = { id: string; title: string; items: NumberedItem[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { title: "React & Next.js" },
      { title: "TypeScript" },
      { title: "Tailwind CSS & design systems" },
      { title: "Accessibility (WCAG) & core Web Vitals" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { title: "Node.js & REST/GraphQL APIs" },
      { title: "PostgreSQL & Prisma" },
      { title: "Redis & background jobs" },
      { title: "Auth, billing, and rate limiting" },
    ],
  },
  {
    id: "infra",
    title: "Data & infrastructure",
    items: [
      { title: "AWS & Cloudflare" },
      { title: "Docker & CI/CD" },
      { title: "Observability: logs, traces, alerts" },
      { title: "WebSockets & realtime pipelines" },
    ],
  },
  {
    id: "design",
    title: "Design & tooling",
    items: [
      { title: "Figma & prototyping" },
      { title: "Design tokens & Style Dictionary" },
      { title: "Git, code review, documentation" },
      { title: "Vitest & Playwright testing" },
    ],
  },
];

// --- Contact -----------------------------------------------------------------

export type SocialLink = {
  platform: string;
  username: string;
  href: string;
  icon: "linkedin" | "github" | "leetcode" | "x";
};

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "saini-kanchan",
    href: "https://www.linkedin.com/in/saini-kanchan/",
    icon: "linkedin",
  },
  {
    platform: "GitHub",
    username: "@sainikanchan",
    href: "https://github.com/sainikanchan",
    icon: "github",
  },
  {
    platform: "LeetCode",
    username: "@kanchan00",
    href: "https://leetcode.com/u/kanchan00/",
    icon: "leetcode",
  },
  {
    platform: "Twitter / X",
    username: "@pspsspssss",
    href: "https://x.com/pspsspssss",
    icon: "x",
  },
];
