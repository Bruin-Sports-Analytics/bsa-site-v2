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
  photoUrl?: string;
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
  { label: "Projects", href: "/projects" },
  { label: "People", href: "/people/board" },
  { label: "Teams", href: "/work" },
  { label: "Journalism", href: "/journalism" },
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
  },
  {
    title: "Platoon Advantage Model",
    slug: "platoon-advantage-model",
    sport: "baseball",
    projectType: "Research",
    status: "Active",
    academicYear: "2025-26",
    summary: "Quantifying the run-value impact of handedness matchups across pitch type and count.",
    problem: "Teams need a repeatable framework for measuring how much platoon advantage shifts expected outcomes by pitch mix.",
    approach: "The team builds count- and pitch-type-stratified wOBA splits from public Statcast data and estimates platoon value by role.",
    result: "Early results surface consistent platoon edges in specific count-pitch combinations not visible in raw splits.",
    members: ["Carlos Mendez", "Anika Gupta"],
    techStack: ["Python", "pandas", "Altair"],
    links: { paper: "/projects/platoon-advantage-model" },
    visibility: "public",
    featured: false,
    lastUpdated: "2026-06-10"
  },
  {
    title: "Outfield Alignment Consulting",
    slug: "outfield-alignment-consulting",
    sport: "baseball",
    projectType: "Consulting",
    status: "Ongoing",
    academicYear: "2025-26",
    summary: "Weekly outfield positioning recommendations based on batted-ball tendency profiles.",
    problem: "Staff needed a repeatable process for converting exit velocity and spray angle data into pre-series alignment sheets.",
    approach: "The team builds opponent tendency reports from recent batted-ball data and delivers weekly scouting briefs.",
    result: "Positioning sheets are delivered to staff each series with coverage probabilities by pull, center, and oppo zones.",
    members: ["Carlos Mendez", "Zoe Tanaka"],
    techStack: ["Python", "R", "Quarto"],
    links: {},
    visibility: "redacted",
    featured: false,
    lastUpdated: "2026-06-28"
  },
  {
    title: "Setter Decision Index",
    slug: "setter-decision-index",
    sport: "volleyball",
    projectType: "Research",
    status: "Completed",
    academicYear: "2024-25",
    summary: "A framework for evaluating setter choices by rotation context and terminal outcome.",
    problem: "Existing metrics treat all sets equally; coaches need a way to distinguish expected-value differences across set options.",
    approach: "The team tags set decisions by rotation, blocker count, and hitter matchup and estimates terminal outcome rates.",
    result: "The research identifies set zones where expected kill rate diverges significantly from selection frequency.",
    members: ["Priya Desai", "Miles Okafor"],
    techStack: ["R", "ggplot2", "Quarto"],
    links: { paper: "/projects/setter-decision-index" },
    visibility: "public",
    featured: false,
    lastUpdated: "2025-04-22"
  },
  {
    title: "Rotation Efficiency Report",
    slug: "rotation-efficiency-report",
    sport: "volleyball",
    projectType: "Consulting",
    status: "Ongoing",
    academicYear: "2025-26",
    summary: "Recurring match-level reports on point differential and side-out rate by rotation.",
    problem: "Coaching staff needed a compact weekly view connecting rotation context to point outcomes across recent matches.",
    approach: "Members build automated rotation tables from tagged match data and deliver reports before each week's practice.",
    result: "Reports are delivered weekly and inform rotation-specific drill prioritization.",
    members: ["Ari Lee", "Priya Desai"],
    techStack: ["R", "Shiny", "SQL"],
    links: {},
    visibility: "redacted",
    featured: false,
    lastUpdated: "2026-06-20"
  },
  {
    title: "Lineup Interaction Effects Study",
    slug: "lineup-interaction-effects-study",
    sport: "basketball",
    projectType: "Consulting",
    status: "Active",
    academicYear: "2025-26",
    summary: "Net rating estimates for two- and three-man lineup combinations in conference play.",
    problem: "Coaches need quantified answers to which player pairings drive net rating in specific game contexts.",
    approach: "The team builds possession-level net rating tables for recurring lineup pairs and segments by game state and opponent.",
    result: "Weekly lineup reports highlight the highest- and lowest-rated pairings from recent games.",
    members: ["Sophia Williams", "Tariq Osei"],
    techStack: ["Python", "SQL", "Tableau"],
    links: {},
    visibility: "redacted",
    featured: false,
    lastUpdated: "2026-06-30"
  },
  {
    title: "Third Down Conversion Research",
    slug: "third-down-conversion-research",
    sport: "football",
    projectType: "Research",
    status: "Completed",
    academicYear: "2024-25",
    summary: "Decomposing third down success rate into distance, formation, and coverage contributions.",
    problem: "Third down conversion rate conflates distance difficulty with scheme and execution quality, making it hard to isolate program-level trends.",
    approach: "The team fits a distance-adjusted conversion model and attributes residual variance to formation and coverage matchup factors.",
    result: "The final report separates structural conversion rate from situational variance and identifies high-leverage schema for short-yardage.",
    members: ["Jordan Kim", "Fatima Hassan"],
    techStack: ["Python", "statsmodels", "Altair"],
    links: { paper: "/projects/third-down-conversion-research" },
    visibility: "public",
    featured: false,
    lastUpdated: "2025-05-01"
  },
  {
    title: "Opponent Tendency Scouting Reports",
    slug: "opponent-tendency-scouting-reports",
    sport: "football",
    projectType: "Consulting",
    status: "Ongoing",
    academicYear: "2025-26",
    summary: "Pre-game scouting briefs covering formation frequency, down-and-distance tendencies, and red zone behavior.",
    problem: "Staff needed a repeatable scouting pipeline that converts play-by-play data into analyst-ready briefs each week.",
    approach: "The team automates formation tagging and tendency tables and delivers a standard brief format before each opponent week.",
    result: "Briefs are delivered three days before each game and reviewed alongside film sessions.",
    members: ["Jordan Kim", "Leo Martinez", "Fatima Hassan"],
    techStack: ["Python", "R", "Quarto"],
    links: {},
    visibility: "redacted",
    featured: false,
    lastUpdated: "2026-06-25"
  },
  {
    title: "Second Serve Pressure Index",
    slug: "second-serve-pressure-index",
    sport: "tennis",
    projectType: "Research",
    status: "Active",
    academicYear: "2025-26",
    summary: "Measuring how second serve quality affects rally outcome distributions across opponent types.",
    problem: "Second serve performance is typically evaluated by fault rate alone, missing how placement and pace shift rally dynamics.",
    approach: "The team builds point-level outcome models conditioned on second serve zone, pace, and receiver ranking tier.",
    result: "Early results show placement explains more rally outcome variance than pace across the sample.",
    members: ["Isabella Nguyen", "Ryan Choi"],
    techStack: ["Python", "scikit-learn", "Quarto"],
    links: { paper: "/projects/second-serve-pressure-index" },
    visibility: "public",
    featured: false,
    lastUpdated: "2026-06-18"
  },
  {
    title: "Machine Learning Based Playstyle Classification for NCAA Tennis Players",
    slug: "ml-playstyle-classification-tennis",
    sport: "tennis",
    projectType: "Research",
    status: "Completed",
    academicYear: "2025-26",
    summary: "A machine learning framework for classifying NCAA tennis player playstyles using match data.",
    problem: "Coaches and scouts lack a systematic way to categorize player playstyles from match statistics, relying instead on subjective observation.",
    approach: "The team trains classification models on match-level features to assign players to playstyle archetypes such as baseliner, serve-and-volleyer, and counter-puncher.",
    result: "The framework produces interpretable playstyle labels validated against expert ratings and surfaces dominant archetypes across the NCAA landscape.",
    members: [],
    techStack: ["Python", "scikit-learn", "pandas"],
    links: { paper: "/projects/ml-playstyle-classification-tennis" },
    visibility: "public",
    featured: false,
    lastUpdated: "2026-01-03"
  },
  {
    title: "A Quantitative Framework for Assessing Wide Receiver Blocking Effectiveness Using Player Tracking Data",
    slug: "wr-blocking-effectiveness-framework",
    sport: "football",
    projectType: "Research",
    status: "Completed",
    academicYear: "2025-26",
    summary: "Introducing the Skill Player Downfield Blocking Effectiveness Score, a novel metric derived from player tracking data rather than human evaluation.",
    problem: "Wide receiver blocking is one of the least-measured skills in football — traditional charting is subjective and inconsistent across evaluators.",
    approach: "The team derives a blocking effectiveness metric from player tracking data, capturing separation held, displacement created, and time-to-contact for skill players on downfield blocks.",
    result: "The resulting score correlates with run game success rates and provides a repeatable alternative to subjective film grades.",
    members: [],
    techStack: ["Python", "pandas", "Altair"],
    links: { paper: "/projects/wr-blocking-effectiveness-framework" },
    visibility: "public",
    featured: false,
    lastUpdated: "2026-01-03"
  },
  {
    title: "Spicing up Spikeball",
    slug: "spicing-up-spikeball",
    sport: "volleyball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2021-22",
    summary: "A quantification of the entertainment level of Spikeball and Roundnet, with proposed rule changes to maximize the entertainment factor of the sport.",
    problem: "Spikeball and Roundnet lack a formal framework for evaluating whether rule changes increase or decrease spectator entertainment.",
    approach: "The team defines an entertainment index from rally length, point volatility, and score proximity, then simulates rule modifications against historical match data.",
    result: "Specific rule adjustments — including serve constraint changes — are shown to increase entertainment index scores without altering competitive balance significantly.",
    members: [],
    techStack: ["Python", "pandas"],
    links: { paper: "/projects/spicing-up-spikeball" },
    visibility: "public",
    featured: false,
    lastUpdated: "2021-07-12"
  },
  {
    title: "MLB Defensive Shift Analysis",
    slug: "mlb-defensive-shift-analysis",
    sport: "baseball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2020-21",
    summary: "An examination of defensive shift effectiveness in MLB by analyzing team defensive statistics over four seasons to identify variables most correlated with shift usage.",
    problem: "The defensive shift has become ubiquitous in MLB, but its actual impact on run prevention versus its adoption rate is poorly understood at the team level.",
    approach: "The team correlates shift deployment frequency with defensive efficiency metrics across four seasons of team-level data, controlling for handedness distributions and batted-ball profiles.",
    result: "Certain defensive metrics show stronger correlation with shift usage than others, and high-shift teams do not consistently outperform low-shift teams on overall run prevention.",
    members: [],
    techStack: ["Python", "pandas", "matplotlib"],
    links: { paper: "/projects/mlb-defensive-shift-analysis" },
    visibility: "public",
    featured: false,
    lastUpdated: "2021-01-23"
  },
  {
    title: "What Makes an All-NBA Player?",
    slug: "what-makes-all-nba-player",
    sport: "basketball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2020-21",
    summary: "Investigating whether specific statistical profiles can predict All-NBA team selection, and what distinguishes players chosen from comparably skilled peers.",
    problem: "All-NBA selection involves both performance and narrative factors — it is unclear how much statistical profile alone explains selection outcomes.",
    approach: "The team builds classification models using per-game and advanced stats to predict All-NBA selection, then compares model outputs against actual voting results.",
    result: "Statistical models recover most All-NBA selections with high accuracy and identify a small set of borderline cases where narrative and popularity may outweigh on-court production.",
    members: [],
    techStack: ["Python", "scikit-learn", "pandas"],
    links: { paper: "/projects/what-makes-all-nba-player" },
    visibility: "public",
    featured: false,
    lastUpdated: "2020-09-11"
  },
  {
    title: "NBA Player PER Report",
    slug: "nba-player-per-report",
    sport: "basketball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2017-18",
    summary: "An investigation into how Player Efficiency Rating is calculated, why it is widely adopted, and what its strengths and limitations are as a per-minute productivity metric.",
    problem: "PER is one of the most cited basketball statistics in fan and media contexts, yet its construction and interpretive limits are rarely explained clearly.",
    approach: "The team reverse-engineers the PER formula, compares its outputs against alternative efficiency metrics, and identifies player archetypes where PER systematically over- or under-values production.",
    result: "The report clarifies PER's construction and highlights systematic biases that affect certain player roles, providing a clear guide for analysts and fans using the metric.",
    members: [],
    techStack: ["Python", "pandas", "matplotlib"],
    links: { paper: "/projects/nba-player-per-report" },
    visibility: "public",
    featured: false,
    lastUpdated: "2017-12-15"
  },
  {
    title: "Abolishing NBA Conferences",
    slug: "abolishing-nba-conferences",
    sport: "basketball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2017-18",
    summary: "An analysis of competitive imbalance between NBA conferences and a proposal for structural reforms to create a fairer playoff format.",
    problem: "The Eastern and Western conferences have had persistent strength disparities, meaning equally skilled teams face vastly different paths to the playoffs and Finals.",
    approach: "The team quantifies inter-conference win-rate differentials across multiple seasons and models alternative seeding formats using historical standings data.",
    result: "The analysis demonstrates significant competitive imbalance and shows that conference-blind seeding would have changed playoff fields substantially in most recent seasons.",
    members: [],
    techStack: ["Python", "pandas"],
    links: { paper: "/projects/abolishing-nba-conferences" },
    visibility: "public",
    featured: false,
    lastUpdated: "2017-08-04"
  },
  {
    title: "Basketball on a Budget",
    slug: "basketball-on-a-budget",
    sport: "basketball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2016-17",
    summary: "A framework for constructing a high-performing NBA roster while minimizing total team salary cost.",
    problem: "Building a competitive NBA team on a limited budget requires identifying undervalued players — a challenge that standard salary-to-production comparisons do not fully address.",
    approach: "The team defines a value metric combining win shares per dollar and positional need, then uses it to construct hypothetical rosters under salary cap constraints.",
    result: "The model identifies consistently undervalued player profiles and produces example rosters that outperform expected win totals relative to their payroll.",
    members: [],
    techStack: ["Python", "pandas", "matplotlib"],
    links: { paper: "/projects/basketball-on-a-budget" },
    visibility: "public",
    featured: false,
    lastUpdated: "2017-06-14"
  },
  {
    title: "NBA Team Synergy Analysis",
    slug: "nba-team-synergy-analysis",
    sport: "basketball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2015-16",
    summary: "Discovering patterns characteristic of top-seeded NBA teams, with a focus on differences between Eastern and Western conference playoff contenders.",
    problem: "Top seeds in the NBA are defined by win totals, but the underlying statistical patterns that distinguish elite teams from near-elite ones are not well characterized.",
    approach: "The team applies clustering and correlation analysis to team-level stats for playoff-bound rosters, segmenting results by conference to surface structural differences.",
    result: "Distinct statistical signatures separate top seeds from lower seeds in both conferences, and persistent stylistic differences between Eastern and Western contenders are identified.",
    members: [],
    techStack: ["Python", "pandas", "matplotlib"],
    links: { paper: "/projects/nba-team-synergy-analysis" },
    visibility: "public",
    featured: false,
    lastUpdated: "2016-06-03"
  }
];

export const members: Member[] = [
  {
    name: "Moulik Chatterjee",
    slug: "moulik-chatterjee",
    role: "President",
    group: "board",
    team: "President",
    major: "Business Economics; Stats & Data Science",
    gradYear: "2027",
    bio: "Coordinates partner projects. Leads club strategy, recruitment, and operations.",
    linkedinUrl: "https://www.linkedin.com/in/moulik-chatterjee/",
    photoUrl: "/assets/linkedin_headshots/moulik-chatterjee.jpeg",
    sortOrder: 1,
    isPublished: true
  },
  {
    name: "Sampath Kalagarla",
    slug: "sampath-kalagarla",
    role: "Webmaster",
    group: "board",
    team: "Webmaster",
    major: "Computer Science",
    gradYear: "2029",
    bio: "I made this site.",
    linkedinUrl: "https://www.linkedin.com/in/sampath-kalagarla/",
    photoUrl: "/assets/linkedin_headshots/sampath-kalagarla.jpeg",
    sortOrder: 2,
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
