/**
 * SecureDApp Careers Data Configuration
 * 
 * Edit this file to update contact details, add or modify open roles,
 * adjust perks, or update hiring process and FAQs.
 */

export const careersConfig = {
  applicationEmail: "hello@securedapp.in",
  contactPhone: "+91 96060 15868",
  whatsappNumber: "+919606015868",
  whatsappMessage: "Hi SecureDApp Careers Team, I would like to inquire about the open internship positions.",
  companyName: "SecureDApp",
  headquarters: "Bengaluru, India (100% Remote-First Team)",
  heroBadge: "We're Hiring: 6 Remote Openings across Marketing, Sales & Engineering",
  heroTitle: "Build the Future of Web3 & Blockchain Security",
  heroSubtitle:
    "Join an elite team of smart contract auditors, post-quantum cryptographers, and blockchain engineers defending billions in digital assets across the decentralized universe.",
  stats: [
    { label: "Open Roles", value: "3 Roles" },
    { label: "Available Openings", value: "6 Positions" },
    { label: "Workplace Policy", value: "100% Remote" },
    { label: "Compensation", value: "Performance Stipend" },
  ],
};

export const cultureValues = [
  {
    id: "security-first",
    icon: "ShieldAlert",
    title: "Security-Obsessed Mindset",
    desc: "We guard critical digital infrastructure where a single bug can cost millions. We hold ourselves to uncompromising standards of rigor, verification, and precision.",
  },
  {
    id: "research-driven",
    icon: "Binary",
    title: "Deep Tech & Applied Research",
    desc: "From post-quantum cryptography (PQC) and real-time threat detection (SecureWatch) to AI forensics (SecureTrace), we pioneer the frontiers of blockchain defense.",
  },
  {
    id: "autonomy",
    icon: "Zap",
    title: "High Ownership & Decentralization",
    desc: "We empower builders with autonomy and end-to-end accountability. No red tape—your ideas, security discoveries, and code directly shape our products.",
  },
  {
    id: "continuous-growth",
    icon: "GraduationCap",
    title: "Relentless Upskilling",
    desc: "Web3 moves at lightspeed. We support continuous learning through hands-on project mentorship, real-world bug discovery, and security research sprints.",
  },
];

export const perksAndBenefits = [
  {
    icon: "Globe",
    title: "100% Remote Flexibility",
    desc: "Work from anywhere. We value outcomes, speed, and impact over seat time, with async workflows that respect your schedule.",
  },
  {
    icon: "Coins",
    title: "Performance-Based Stipend",
    desc: "Earn monthly stipends directly aligned with your milestones, campaign results, and delivered engineering tasks.",
  },
  {
    icon: "Award",
    title: "Milestone & Incentive Bonuses",
    desc: "Extra rewards on high-impact deliverables, qualified partnership deals, and successful production deployments.",
  },
  {
    icon: "Sparkles",
    title: "Direct Mentorship from Web3 Leads",
    desc: "Learn directly from experienced smart contract auditors, full-stack architects, and Web3 growth practitioners.",
  },
  {
    icon: "HeartPulse",
    title: "Real-World Production Experience",
    desc: "Gain hands-on experience shipping features and campaigns for platforms trusted by leading protocols worldwide.",
  },
  {
    icon: "Laptop",
    title: "Verified Certificate & Recommendations",
    desc: "Receive official internship certification, verifiable credentials, and executive recommendations upon completion.",
  },
];

export const interviewRoadmap = [
  {
    step: "01",
    title: "Application Review",
    duration: "1 - 2 Business Days",
    desc: "We review your CV, GitHub repositories, portfolio, or past work samples. We prioritize demonstrated proof-of-work.",
  },
  {
    step: "02",
    title: "Short Practical Task",
    duration: "2 - 3 Days",
    desc: "A small, practical assignment related to your chosen track (e.g. sample post/thread, mock outreach, or quick coding component).",
  },
  {
    step: "03",
    title: "Discussion & Onboarding",
    duration: "30 - 45 Mins",
    desc: "A conversational video call to align on expectations, performance milestones, stipend structure, and deliverables.",
  },
  {
    step: "04",
    title: "Remote Day-1 Kickoff",
    duration: "Immediate",
    desc: "Welcome to SecureDApp! Access our tools, team communication channels, and start contributing on day one.",
  },
];

export const initialJobs = [
  {
    id: "mkt-intern-01",
    slug: "marketing-intern",
    title: "Marketing Intern",
    department: "Marketing",
    location: "Remote",
    type: "Internship (Remote)",
    openings: "2 Roles Available",
    experience: "Freshers / College Students / 0-1 Year",
    salaryRange: "Performance-Based Stipend",
    compensationNote: "Monthly stipend scaled by milestone achievements, campaign reach & content deliverables",
    postedDate: "2026-03-01",
    shortSummary:
      "Drive marketing campaigns, craft engaging content, manage social media platforms, and conduct competitor and market research.",
    overview:
      "Join SecureDApp as a Marketing Intern to help craft and execute high-impact marketing campaigns across digital and social channels. You will collaborate directly with our team to create compelling content, manage social media growth, conduct market and competitor research, and track campaign analytics.",
    responsibilities: [
      "Create, schedule, and manage engaging content across social media channels (LinkedIn, Instagram, YouTube, X).",
      "Plan and execute creative digital marketing campaigns to drive brand awareness and audience growth.",
      "Design social graphics, banners, and visual assets using Canva or basic design tools.",
      "Conduct in-depth market research, industry trend tracking, and competitor benchmarking.",
      "Monitor, analyze, and report on key campaign performance metrics and audience engagement.",
      "Collaborate proactively with the team to brainstorm innovative growth strategies and outreach ideas.",
    ],
    requirements: [
      "Strong written and verbal communication",
      "Social media management",
      "Content writing & content strategy",
      "Canva / basic design skills",
      "Market and competitor research",
      "Understanding of Instagram, LinkedIn, YouTube, etc.",
      "Ability to create and execute marketing campaigns",
      "Basic analytics and reporting",
      "Proactive and creative mindset",
    ],
    niceToHaveTitle: "Preferred / Nice to Have",
    niceToHave: [
      "Familiarity with short-form video content creation or editing (Reels, Shorts).",
      "Basic understanding of SEO and email newsletter marketing.",
    ],
  },
  {
    id: "sales-bd-intern-02",
    slug: "sales-and-business-development-intern",
    title: "Sales & Business Development Intern",
    department: "Sales & BD",
    location: "Remote",
    type: "Internship (Remote)",
    openings: "2 Roles Available",
    experience: "Freshers / College Students / 0-1 Year",
    salaryRange: "Performance-Based Stipend",
    compensationNote: "Base performance stipend + attractive milestone incentives on qualified leads and closed deals",
    postedDate: "2026-03-01",
    shortSummary:
      "Drive lead generation, prospect research, cold outreach, and client relationship management across sales funnels.",
    overview:
      "We are seeking motivated Sales & Business Development Interns to accelerate SecureDApp's outreach and pipeline. You will spearhead prospect research, execute multi-channel cold outreach via email and LinkedIn, manage follow-ups, and qualify prospective clients across our sales funnel.",
    responsibilities: [
      "Perform targeted lead generation and prospect research across relevant industries and verticals.",
      "Execute multi-channel cold outreach campaigns via LinkedIn messaging, cold calling, and cold emailing.",
      "Manage timely follow-ups and build strong initial relationships with prospective clients.",
      "Track leads, interactions, and deal stages accurately using CRM systems.",
      "Communicate value propositions clearly and conduct introductory discovery conversations.",
      "Work towards achieving weekly and monthly lead qualification and outreach targets.",
    ],
    requirements: [
      "Excellent communication and interpersonal skills",
      "Lead generation and prospect research",
      "Cold calling / cold emailing",
      "LinkedIn outreach",
      "Follow-up and relationship management",
      "Basic negotiation skills",
      "Understanding of sales funnels",
      "CRM familiarity",
      "Ability to meet targets",
      "Comfortable speaking with clients",
    ],
    niceToHaveTitle: "Preferred / Nice to Have",
    niceToHave: [
      "Prior internship experience in B2B sales, outbound prospecting, or business development.",
      "Familiarity with sales engagement and enrichment tools (e.g. Apollo, Hunter, Notion/HubSpot).",
    ],
  },
  {
    id: "sde-intern-03",
    slug: "sde-1",
    title: "SDE-1",
    department: "Engineering",
    location: "Remote",
    type: "Internship (Remote)",
    openings: "2 Roles Available",
    experience: "Freshers / College Students / 0-1 Year",
    salaryRange: "Performance-Based Stipend",
    compensationNote: "Monthly performance stipend tied to code shipping milestones, PR reviews & feature deliverables",
    postedDate: "2026-03-01",
    shortSummary:
      "Develop robust software solutions, write clean code, integrate REST APIs, and contribute to scalable products in a fast-paced environment.",
    overview:
      "Join SecureDApp as an SDE-1 to build, debug, and scale real-world software products. You will work with modern programming languages, design and consume REST APIs, manage relational databases, read and navigate existing codebases, and participate in the full software development lifecycle from design to deployment.",
    responsibilities: [
      "Write clean, maintainable, and well-documented code using Python, JavaScript/TypeScript, Java, or C++.",
      "Design, build, test, and consume robust RESTful APIs and backend services.",
      "Work with SQL databases, schema design, and query optimization.",
      "Collaborate using Git/GitHub for branching, code reviews, and version control.",
      "Debug, profile, test, and resolve issues across the application lifecycle.",
      "Read, navigate, and contribute feature additions to our existing codebase.",
    ],
    requirements: [
      "Strong knowledge of Python / JavaScript / TypeScript / Java / C++ — at least one",
      "Good understanding of DSA and problem solving",
      "Git & GitHub",
      "REST APIs",
      "SQL / database fundamentals",
      "Object-oriented programming",
      "Debugging and testing",
      "Understanding of software development lifecycle",
      "Ability to read and work with an existing codebase",
      "Strong communication and teamwork",
    ],
    niceToHaveTitle: "Preferred",
    niceToHave: [
      "React / Next.js",
      "Node.js / Python backend",
      "Docker",
      "Cloud platforms",
      "CI/CD",
      "Authentication & security",
      "Experience building and deploying real-world projects",
    ],
  },
];

export const careersFaqs = [
  {
    question: "Are these internship positions 100% remote?",
    answer:
      "Yes, all 3 internship positions (Marketing Intern, Sales & BD Intern, and SDE 1 Intern) are 100% remote. You can work from anywhere with a stable internet connection and a laptop. We coordinate via async-friendly communication, Slack/Telegram, and quick video syncs.",
  },
  {
    question: "How does the performance-based stipend work?",
    answer:
      "Each intern role features a structured performance-based stipend. Your compensation is tied directly to clearly defined monthly milestones, project deliverables, and results (such as published content & campaign reach for Marketing, qualified leads & closed partnerships for Sales/BD, and shipped features & code milestones for SDE 1). High performers also earn additional milestone incentive bonuses.",
  },
  {
    question: "How many openings are available for each role?",
    answer:
      "We are hiring 2 interns for each position, resulting in a total of 6 openings across Marketing, Sales & BD, and Software Development Engineering (SDE 1).",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "Our process is fast and respectful of your time. From your initial application to selection, it typically takes 3 to 7 business days. You will hear back within 48 business hours after submitting your application.",
  },
  {
    question: "How should I apply?",
    answer:
      "Click 'Apply Now' on any role card to open a pre-filled email to hello@securedapp.in, or chat directly with our hiring team on WhatsApp. Please attach your resume/CV and include links to your GitHub, portfolio, writing samples, or LinkedIn profile.",
  },
  {
    question: "What is the expected internship duration?",
    answer:
      "The internship duration is typically 3 to 6 months with flexible full-time or part-time arrangements suitable for college students and recent graduates.",
  },
];
