import {
  BarChart3,
  ChartNoAxesCombined,
  CircleDot,
  Dumbbell,
  Goal,
  LineChart,
  Network,
  Radar,
  Search,
  ShieldCheck,
  Trophy,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SportSlug = "baseball" | "volleyball" | "basketball" | "football" | "tennis";
export type WorkType = "Consulting" | "Research" | "Journalism" | "Dashboard" | "Tool";
export type ProjectStatus = "Active" | "Completed" | "Ongoing" | "Archived";
export type Visibility = "public" | "redacted" | "private" | "hidden";
export type RecruitmentStatus = "UPCOMING" | "OPEN" | "CLOSED";

export type Sport = {
  name: string;
  slug: SportSlug;
  icon: LucideIcon;
  description: string;
  focusAreas: string[];
  activeProjects: number;
  archivedProjects: number;
  featuredMetric: string;
  lead: string;
  accent: string;
  subdivisions?: string[];
};

export type Project = {
  title: string;
  slug: string;
  sport: SportSlug;
  subdivision?: string;
  projectType: WorkType;
  status: ProjectStatus;
  academicYear: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  members: string[];
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    paper?: string;
    article?: string;
    presentation?: string;
  };
  visibility: Visibility;
  featured: boolean;
  featuredUntil?: string;
  lastUpdated: string;
};

export type Member = {
  name: string;
  slug: string;
  role: string;
  group: "board" | "member" | "alum";
  team: string;
  major: string;
  gradYear: string;
  bio: string;
  linkedinUrl?: string;
  currentOrganization?: string;
  sortOrder: number;
  isPublished: boolean;
};

export type Event = {
  title: string;
  slug: string;
  type: "workshop" | "speaker" | "recruitment" | "meeting" | "social" | "conference";
  startTime: string;
  endTime: string;
  location: string;
  isMembersOnly: boolean;
  rsvpUrl?: string;
  description: string;
  speaker?: string;
};

export const navItems = [
  { label: "Our Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "People", href: "/people/board" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Join", href: "/join" }
];

export const socialLinks = [
  { label: "Email", href: "mailto:bruinsportsanalytics@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/bruinsportsanalytics/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bruin-sports-analytics/" },
  { label: "Slack", href: "https://slack.com/" }
];

export const impactStats = [
  { label: "Active projects", value: 18 },
  { label: "Sports groups", value: 5 },
  { label: "Current members", value: 64 },
  { label: "Years at UCLA", value: 8 },
  { label: "Partner problems scoped", value: 27 }
];

export const sports: Sport[] = [
  {
    name: "Baseball",
    slug: "baseball",
    icon: CircleDot,
    description: "Pitch design, batted-ball modeling, scouting tools, and game-planning support.",
    focusAreas: ["Pitch shape clustering", "Defensive positioning", "Opponent scouting"],
    activeProjects: 4,
    archivedProjects: 9,
    featuredMetric: "+12% called-strike probability model lift",
    lead: "Baseball Analytics Lead",
    accent: "#40D39C"
  },
  {
    name: "Volleyball",
    slug: "volleyball",
    icon: ChartNoAxesCombined,
    description: "Serve receive, lineup efficiency, rally outcomes, and opponent tendency reports.",
    focusAreas: ["Rotation efficiency", "Serve target maps", "Rally transition value"],
    activeProjects: 3,
    archivedProjects: 6,
    featuredMetric: "2.4k rallies tagged this year",
    lead: "Volleyball Analytics Lead",
    accent: "#FFD100"
  },
  {
    name: "Basketball",
    slug: "basketball",
    icon: Goal,
    description: "Shot quality, lineup combinations, spatial tracking, and possession-level storytelling.",
    focusAreas: ["Shot charts", "Lineup interaction effects", "Player role similarity"],
    activeProjects: 5,
    archivedProjects: 11,
    featuredMetric: "84k possessions modeled",
    lead: "Basketball Analytics Lead",
    accent: "#4AA8FF"
  },
  {
    name: "Football",
    slug: "football",
    icon: ShieldCheck,
    description: "Drive outcomes, coverage tendencies, win probability, and roster evaluation research.",
    focusAreas: ["Fourth-down decisions", "Explosive play prevention", "Recruiting evaluation"],
    activeProjects: 2,
    archivedProjects: 7,
    featuredMetric: "312 formations classified",
    lead: "Football Analytics Lead",
    accent: "#FFB81C"
  },
  {
    name: "Tennis",
    slug: "tennis",
    icon: Radar,
    description: "Match strategy, player development, and scouting work across three configurable programs.",
    focusAreas: ["Point patterns", "Serve plus-one value", "Opponent scouting"],
    activeProjects: 4,
    archivedProjects: 5,
    featuredMetric: "3 programs",
    lead: "Tennis Analytics Lead",
    accent: "#8BCBFF",
    subdivisions: ["Match Strategy", "Player Development", "Scouting & Recruitment"]
  }
];

export const projects: Project[] = [
  {
    title: "Pitch Shape Similarity Engine",
    slug: "pitch-shape-similarity-engine",
    sport: "baseball",
    projectType: "Tool",
    status: "Active",
    academicYear: "2025-26",
    summary: "A searchable model that groups pitch profiles by movement, release, and outcome context.",
    problem: "Coaches need faster ways to compare pitch profiles across opponents and internal development groups.",
    approach: "The team combines public pitch-level data, dimensionality reduction, and nearest-neighbor search.",
    result: "The prototype surfaces comparable arsenals and shortlists matchup notes for weekly scouting reports.",
    members: ["Maya Chen", "Daniel Park", "Ethan Shah"],
    techStack: ["Python", "scikit-learn", "SQL", "React"],
    links: { demo: "/projects/pitch-shape-similarity-engine" },
    visibility: "public",
    featured: true,
    featuredUntil: "2026-12-31",
    lastUpdated: "2026-06-12"
  },
  {
    title: "Rally Value Dashboard",
    slug: "rally-value-dashboard",
    sport: "volleyball",
    projectType: "Dashboard",
    status: "Ongoing",
    academicYear: "2025-26",
    summary: "An interactive rally explorer for serve target, rotation, and transition efficiency.",
    problem: "Volleyball staff need compact trend views that connect rotation context to point outcomes.",
    approach: "Members build tagged rally tables, role-aware filters, and dashboard views for recurring review.",
    result: "The dashboard makes serve-receive and transition patterns visible in pre-match prep.",
    members: ["Ari Lee", "Nina Patel"],
    techStack: ["R", "Shiny", "Tableau", "SQL"],
    links: { demo: "/projects/rally-value-dashboard" },
    visibility: "redacted",
    featured: true,
    featuredUntil: "2026-10-15",
    lastUpdated: "2026-05-28"
  },
  {
    title: "Shot Quality Atlas",
    slug: "shot-quality-atlas",
    sport: "basketball",
    projectType: "Research",
    status: "Completed",
    academicYear: "2024-25",
    summary: "A spatial model for evaluating shot decisions beyond raw field goal percentage.",
    problem: "Traditional box-score measures blur shot context, location, defender pressure, and clock state.",
    approach: "The research team estimates possession-adjusted expected value from event and tracking features.",
    result: "The final report reframes shot selection by role and possession context.",
    members: ["Sophia Williams", "Marcus Allen", "Priya Nair"],
    techStack: ["Python", "PyTorch", "Altair", "GitHub"],
    links: { paper: "/projects/shot-quality-atlas", github: "https://github.com/" },
    visibility: "public",
    featured: true,
    featuredUntil: "2026-09-30",
    lastUpdated: "2026-04-18"
  },
  {
    title: "Fourth Down Decision Review",
    slug: "fourth-down-decision-review",
    sport: "football",
    projectType: "Journalism",
    status: "Completed",
    academicYear: "2024-25",
    summary: "A public explainer showing how win probability shifts with field position and game state.",
    problem: "Fans and student analysts need a clear framework for judging aggressive fourth-down calls.",
    approach: "The article pairs historical play-by-play models with interactive field-position visuals.",
    result: "Readers can compare expected points and win probability for common late-game situations.",
    members: ["Jordan Kim", "Leo Martinez"],
    techStack: ["Python", "D3", "Observable"],
    links: { article: "/projects/fourth-down-decision-review" },
    visibility: "public",
    featured: false,
    lastUpdated: "2026-02-09"
  },
  {
    title: "Serve Plus-One Pattern Finder",
    slug: "serve-plus-one-pattern-finder",
    sport: "tennis",
    subdivision: "Match Strategy",
    projectType: "Consulting",
    status: "Active",
    academicYear: "2025-26",
    summary: "A match-prep workflow for identifying serve direction and next-ball tendencies.",
    problem: "Match prep benefits from repeatable point-pattern summaries instead of manual chart review alone.",
    approach: "The team tags point sequences, visualizes serve zones, and benchmarks opponent tendencies.",
    result: "Strategy notes are summarized into player-specific scouting sheets.",
    members: ["Isabella Nguyen", "Chris Romero"],
    techStack: ["Python", "R", "Quarto"],
    links: { presentation: "/projects/serve-plus-one-pattern-finder" },
    visibility: "redacted",
    featured: true,
    featuredUntil: "2026-11-01",
    lastUpdated: "2026-06-25"
  },
  {
    title: "Recruiting Similarity Board",
    slug: "recruiting-similarity-board",
    sport: "football",
    projectType: "Tool",
    status: "Archived",
    academicYear: "2023-24",
    summary: "A prototype board comparing recruit profiles against historical role archetypes.",
    problem: "Scouting notes needed a lightweight way to compare profiles across measurable and film-tagged attributes.",
    approach: "Members created similarity scores and visual comparison sheets for internal review.",
    result: "The project is archived with only an approved public description.",
    members: ["Alumni Research Group"],
    techStack: ["Python", "pandas"],
    links: {},
    visibility: "private",
    featured: false,
    lastUpdated: "2024-05-15"
  }
];

export const members: Member[] = [
  {
    name: "Maya Chen",
    slug: "maya-chen",
    role: "President",
    group: "board",
    team: "Executive Board",
    major: "Statistics & Data Science",
    gradYear: "2027",
    bio: "Coordinates partner projects and keeps Bruin Sports Analytics' research standards consistent across teams.",
    linkedinUrl: "https://www.linkedin.com/",
    sortOrder: 1,
    isPublished: true
  },
  {
    name: "Daniel Park",
    slug: "daniel-park",
    role: "VP of Projects",
    group: "board",
    team: "Executive Board",
    major: "Computer Science",
    gradYear: "2027",
    bio: "Scopes technical work and supports project leads from question design through handoff.",
    linkedinUrl: "https://www.linkedin.com/",
    sortOrder: 2,
    isPublished: true
  },
  {
    name: "Ari Lee",
    slug: "ari-lee",
    role: "Volleyball Lead",
    group: "member",
    team: "Volleyball",
    major: "Applied Mathematics",
    gradYear: "2028",
    bio: "Builds rally-level models and dashboards for volleyball analysis.",
    sortOrder: 3,
    isPublished: true
  },
  {
    name: "Sophia Williams",
    slug: "sophia-williams",
    role: "Basketball Research Lead",
    group: "member",
    team: "Basketball",
    major: "Economics",
    gradYear: "2026",
    bio: "Turns possession data into public research and internal scouting visuals.",
    linkedinUrl: "https://www.linkedin.com/",
    sortOrder: 4,
    isPublished: true
  },
  {
    name: "Jordan Kim",
    slug: "jordan-kim",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Statistics & Data Science",
    gradYear: "2027",
    bio: "Works on win-probability models and football editorial analysis.",
    sortOrder: 5,
    isPublished: true
  },
  {
    name: "Isabella Nguyen",
    slug: "isabella-nguyen",
    role: "Tennis Strategy Lead",
    group: "member",
    team: "Tennis",
    major: "Cognitive Science",
    gradYear: "2028",
    bio: "Leads tennis point-pattern analysis and scouting workflows.",
    linkedinUrl: "https://www.linkedin.com/",
    sortOrder: 6,
    isPublished: true
  }
];

export const events: Event[] = [
  {
    title: "Fall Recruitment Info Session",
    slug: "fall-recruitment-info-session",
    type: "recruitment",
    startTime: "2026-09-29T18:00:00-07:00",
    endTime: "2026-09-29T19:15:00-07:00",
    location: "UCLA campus, room TBA",
    isMembersOnly: false,
    rsvpUrl: "/join",
    description: "Meet current members, see project examples, and learn how applications work."
  },
  {
    title: "Sports Data Cleaning Workshop",
    slug: "sports-data-cleaning-workshop",
    type: "workshop",
    startTime: "2026-10-06T17:30:00-07:00",
    endTime: "2026-10-06T19:00:00-07:00",
    location: "Data Theory Lab",
    isMembersOnly: false,
    rsvpUrl: "/events",
    description: "A hands-on workshop for turning messy play-by-play data into analysis-ready tables."
  },
  {
    title: "Member Project Standup",
    slug: "member-project-standup",
    type: "meeting",
    startTime: "2026-10-13T19:00:00-07:00",
    endTime: "2026-10-13T20:00:00-07:00",
    location: "Members only",
    isMembersOnly: true,
    description: "Internal project updates. Members should check Slack for details."
  }
];

export const recruitment = {
  name: "Fall 2026 Recruitment",
  status: "UPCOMING" as RecruitmentStatus,
  openDate: "2026-09-28",
  closeDate: "2026-10-12",
  nextCycleLabel: "Fall 2026",
  applicationUrl: "https://forms.gle/",
  roles: ["Sport analysts", "Data engineers", "Writers", "Designers", "Dashboard builders"],
  teamsRecruiting: ["Baseball", "Volleyball", "Basketball", "Football", "Tennis"],
  timelineEvents: [
    { date: "Sep 28", title: "Applications open", detail: "Application form goes live.", status: "upcoming" },
    { date: "Sep 29", title: "Info session", detail: "Project walkthrough and Q&A.", status: "upcoming" },
    { date: "Oct 3-8", title: "Coffee chats", detail: "Meet members by team and role.", status: "upcoming" },
    { date: "Oct 12", title: "Application deadline", detail: "Submit by 11:59 PM PT.", status: "upcoming" },
    { date: "Oct 18-22", title: "Interviews", detail: "Short technical and team conversations.", status: "upcoming" },
    { date: "Oct 26", title: "Kickoff", detail: "New-member project matching.", status: "upcoming" }
  ]
};

export const faqs = [
  {
    category: "Membership",
    question: "Do I need sports analytics experience to join?",
    answer: "No. Strong applicants show curiosity, follow-through, and a willingness to learn technical tools through real sports questions."
  },
  {
    category: "Recruitment",
    question: "When does Bruin Sports Analytics recruit?",
    answer: "The site is configured for Fall and Winter recruitment cycles. The Join page changes based on the active recruitment state."
  },
  {
    category: "Technical background",
    question: "What tools do members use?",
    answer: "Common tools include Python, R, SQL, Tableau, React, GitHub, and statistical modeling libraries. Project needs determine the stack."
  },
  {
    category: "Partnerships",
    question: "Can Bruin Sports Analytics work with confidential data?",
    answer: "Yes, but public pages only show approved summaries. Private repositories, athlete-level sensitive information, and protected partner data are not exposed."
  },
  {
    category: "Events",
    question: "Are events open to non-members?",
    answer: "Public workshops, speaker events, and info sessions are listed on the Events page. Internal meetings are marked members-only."
  }
];

export const outcomes = [
  { name: "UCLA Athletics", category: "Sports", approvedForDisplay: true },
  { name: "Los Angeles Dodgers", category: "Sports", approvedForDisplay: true },
  { name: "ESPN", category: "Media", approvedForDisplay: true },
  { name: "Sportradar", category: "Sports Tech", approvedForDisplay: true },
  { name: "Deloitte", category: "Consulting", approvedForDisplay: true },
  { name: "Google", category: "Technology", approvedForDisplay: true },
  { name: "UCLA Anderson", category: "Graduate Program", approvedForDisplay: true },
  { name: "Stanford", category: "Graduate Program", approvedForDisplay: true }
];

export const capabilities = [
  { icon: Search, title: "Data collection", text: "Scraping, tagging, and structured ingestion for sports data sources." },
  { icon: Network, title: "Pipelines", text: "Cleaning and repeatable workflows that make analysis reusable." },
  { icon: LineChart, title: "Modeling", text: "Statistical models, forecasting, classification, and uncertainty-aware reporting." },
  { icon: BarChart3, title: "Dashboards", text: "Interactive views for scouting, operations, and technical storytelling." },
  { icon: Dumbbell, title: "Performance analysis", text: "Scouting, player development, and competition-support frameworks." },
  { icon: Trophy, title: "Communication", text: "Clear research, visuals, and handoff materials for decision makers." }
];

export const technology = ["Python", "R", "SQL", "Tableau", "React", "Next.js", "GitHub", "scikit-learn", "PyTorch", "Shiny"];

export const ENABLE_ALUMNI_PAGE = false;
