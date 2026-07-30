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

export type SportSlug = "baseball" | "volleyball" | "basketball" | "football" | "tennis" | "other";
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
  subpages?: ("consulting" | "research")[];
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
  /** Optional CSS transform to reframe the headshot crop (e.g. zoom/shift the face). */
  photoTransform?: string;
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
  { label: "About", href: "/about" },
  { label: "Teams", href: "/work" },
  { label: "Journalism", href: "/journalism" },
  { label: "Projects", href: "/projects" },
  { label: "People", href: "/people/board" },
  { label: "Events", href: "/events" },
  { label: "Join", href: "/join" }
];

export const socialLinks = [
  { label: "Email", href: "mailto:bruinsportsanalytics@gmail.com" },
  { label: "Instagram", href: "https://www.instagram.com/bruinsportsanalytics/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/bruin-sports-analytics/" },
  { label: "Slack", href: "https://slack.com/" }
];

export const impactStats = [
  { label: "Active projects", value: 11 },
  { label: "Sports groups", value: 5 },
  { label: "Current members", value: 64 },
  { label: "Years at UCLA", value: 9 },
  { label: "UCLA Athletics Partners", value: 3 }
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
    accent: "#FFB81C",
    subpages: []
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/Machine%20Learning%20Based%20Playstyle%20Classification%20for%20NCAA%20Tennis%20Players.pdf" },
    visibility: "public",
    featured: false,
    lastUpdated: "2026-01-03"
  },
  {
    title: "NFL OT 4th Down Decision Engine",
    slug: "nfl-ot-4th-down-decision-engine",
    sport: "football",
    projectType: "Tool",
    status: "Active",
    academicYear: "2025-26",
    summary: "A decision-support tool that recommends whether NFL coaches should go for it, punt, or kick a field goal on 4th down in overtime — trained on 350,000+ plays from 2016–2024.",
    problem: "NFL coaches lack a real-time, data-driven framework for 4th-down decisions in overtime, where post-2022 rules guarantee both teams a possession before sudden death.",
    approach: "Four XGBoost submodels — punt outcome, field goal probability, conversion probability, and win probability — are chained together with isotonic calibration and expected-value maximization to recommend the optimal decision given field position, score, team quality, weather, and venue.",
    result: "The live tool at playbyplay.football lets users input any game situation and instantly surfaces win-probability estimates for all three options under current overtime rules.",
    members: [],
    techStack: ["Python", "XGBoost", "React"],
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/bsa-group-1-winter-presentation.pdf", demo: "https://playbyplay.football" },
    visibility: "public",
    featured: true,
    lastUpdated: "2026-07-30"
  },
  {
    title: "QB Pocket Clutch Ratings",
    slug: "qb-pocket-clutch-ratings",
    sport: "football",
    projectType: "Research",
    status: "Active",
    academicYear: "2025-26",
    summary: "A clutch rating system for NFL quarterbacks that measures how much better — or worse — each QB performs in high-leverage passing situations versus their own baseline, derived from player tracking data and an XGBoost EPA model.",
    problem: "No existing metric isolates a quarterback's clutch performance relative to their own baseline — most stats conflate absolute output with situation-adjusted execution, making it impossible to distinguish QBs who genuinely elevate under pressure from those who merely happen to be good.",
    approach: "Paired nflfastR play-by-play data (~7,000 pass plays, 2021 season) with NFL Big Data Bowl 2023 tracking data (10Hz, weeks 1–8) to engineer spatial features — pocket area and collapse rate via convex hull geometry, QB displacement and body orientation at release, and nearest pass-rusher distances and speeds. A leave-one-week-out XGBoost regressor predicts EPA per play from these features, then clutch rating = mean EPA residual on clutch plays (win probability 40–60%, Q4/OT) minus mean EPA residual on all plays.",
    result: "Patrick Mahomes ranked highest on clutch rating among qualified QBs (≥50 clutch and ≥50 non-clutch plays); Carson Wentz ranked lowest. The metric surfaces quarterbacks who consistently elevate execution under pressure beyond what pocket geometry alone would predict.",
    members: [],
    techStack: ["Python", "XGBoost", "nflfastR", "scipy"],
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/bsa-group-1-spring-presentation.pdf",},
    visibility: "public",
    featured: false,
    lastUpdated: "2026-05-15"
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/A%20Quantitative%20Framework%20for%20Assessing%20Wide%20Receiver%20Blocking%20Effectiveness%20Using%20Player%20Tracking%20Data.pdf" },
    visibility: "public",
    featured: false,
    lastUpdated: "2026-01-03"
  },
  {
    title: "Spicing up Spikeball",
    slug: "spicing-up-spikeball",
    sport: "other",
    subdivision: "Spikeball",
    projectType: "Research",
    status: "Archived",
    academicYear: "2021-22",
    summary: "A quantification of the entertainment level of Spikeball and Roundnet, with proposed rule changes to maximize the entertainment factor of the sport.",
    problem: "Spikeball and Roundnet lack a formal framework for evaluating whether rule changes increase or decrease spectator entertainment.",
    approach: "The team defines an entertainment index from rally length, point volatility, and score proximity, then simulates rule modifications against historical match data.",
    result: "Specific rule adjustments — including serve constraint changes — are shown to increase entertainment index scores without altering competitive balance significantly.",
    members: [],
    techStack: ["Python", "pandas"],
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/spicing-up-spikeball-quantifying-entertainment-of-the-sport-of-roundnet-and-beyond.pdf" },
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/An%20Analysis%20of%20Defensive%20Shifts%20in%20the%20MLB,%202016-2019.pdf" },
    visibility: "public",
    featured: false,
    lastUpdated: "2021-01-23"
  },
  {
    title: "UCLA Women's Basketball Transfer Intelligence Report",
    slug: "wbb-transfer-intelligence-report",
    sport: "basketball",
    subdivision: "Women's Basketball",
    projectType: "Consulting",
    status: "Active",
    academicYear: "2025-26",
    summary: "An interactive five-tab dashboard built for UCLA Women's Basketball that maps transfer portal movement, compares first-year transfer vs. freshman on-court impact, and tracks career development across 8,300 freshman seasons and 1,354 transfer arrivals in Power 5 programs.",
    problem: "UCLA Women's Basketball coaches lacked a unified, data-driven tool to evaluate transfer portal decisions — specifically how first-year transfers compare to freshmen in immediate impact, and how outcomes vary by position, conference, and school.",
    approach: "The team built a web scraper pulling game logs and advanced metrics from Sports Reference across all Power 5 programs, then constructed a dashboard covering transfer flow, freshman vs. transfer comparisons, pre/post-transfer performance, career development arcs, and UCLA-specific patterns.",
    result: "The live dashboard gives coaching staff real-time access to transfer market intelligence, including Top-10 transfer origins and destinations, usage rate comparisons by position, and UCLA's standing in Big Ten transfer recruitment.",
    members: [],
    techStack: ["Python", "Pandas", "Netlify"],
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/bsa-w26-project-1.pdf", demo: "https://ucla-wbb-transfer-analysis-db.netlify.app/" },
    visibility: "public",
    featured: true,
    lastUpdated: "2026-03-15"
  },
  {
    title: "Freshman Recruit Impact in Women's Basketball",
    slug: "wbb-freshman-recruit-impact",
    sport: "basketball",
    subdivision: "Women's Basketball",
    projectType: "Research",
    status: "Active",
    academicYear: "2025-26",
    summary: "A 10-year analysis of the true on-court value of ESPN SC Next 100 recruits in women's basketball, examining usage rates, playing time, conference distribution, and transfer behavior across all D1 programs.",
    problem: "Recruiting rankings promise talent, but whether top-100 women's basketball recruits deliver immediate impact — and how that varies by position, conference, and recruiting tier — has not been systematically measured.",
    approach: "The team built a web scraper covering game logs and advanced metrics for every D1 player at Power 4 schools from 2017–2026, then analyzed freshman usage rates by position, 25+ MPG rates by recruiting tier, Big Ten recruiting comparisons, and transfer timing patterns for top-100 players.",
    result: "Top-25 recruits show the highest rates of immediate impact (30% playing 25+ MPG as freshmen). UCLA ranks among Big Ten leaders in top-100 recruit volume while maintaining one of the lowest transfer rates, indicating strong player retention and development.",
    members: [],
    techStack: ["Python", "Pandas", "Sports Reference"],
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/bsa-w26-project-2.pdf",},
    visibility: "public",
    featured: false,
    lastUpdated: "2026-03-15"
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/what-makes-an-all-nba-player.pdf" },
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/nba-players-rank-research-report.pdf" },
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/abolish-conferences.pdf" },
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/basketball-on-budget.pdf" },
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
    links: { paper: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/project_papers/synergy.pdf" },
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
    bio: "Leads website development, maintenance, and analytics. Oversees technical infrastructure.",
    linkedinUrl: "https://www.linkedin.com/in/sampath-kalagarla/",
    photoUrl: "/assets/linkedin_headshots/sampath-kalagarla.jpeg",
    sortOrder: 12,
    isPublished: true
  },
  {
    name: "Ben Troutman",
    slug: "ben-troutman",
    role: "Internal Vice President",
    group: "board",
    team: "Executive Board",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads internal operations, project management, and member development.",
    linkedinUrl: "https://www.linkedin.com/in/troutman-ben/",
    photoUrl: "/assets/linkedin_headshots/ben-troutman.jpeg",
    sortOrder: 2,
    isPublished: true
  },
  {
    name: "Vardaan Sinha",
    slug: "vardaan-sinha",
    role: "External Vice President",
    group: "board",
    team: "Executive Board",
    major: "Applied Math",
    gradYear: "2027",
    bio: "Leads external partnerships, communications, and marketing.",
    linkedinUrl: "https://www.linkedin.com/in/vardaan-sinha-234663272/",
    photoUrl: "/assets/linkedin_headshots/vardaan-sinha.png",
    sortOrder: 2,
    isPublished: true
  },
  {
    name: "Anthony Mui",
    slug: "anthony-mui",
    role: "Baseball Co-Chair",
    group: "board",
    team: "Baseball",
    major: "Math of Computation",
    gradYear: "2029",
    bio: "Leads baseball analytics projects and oversees baseball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/anthony-mui-820a7a272/",
    photoUrl: "/assets/linkedin_headshots/anthony-mui.jpeg",
    sortOrder: 3,
    isPublished: true
  },
  {
    name: "Colin Granger",
    slug: "colin-granger",
    role: "Baseball Co-Chair",
    group: "board",
    team: "Baseball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads baseball analytics projects and oversees baseball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/colingranger/",
    photoUrl: "/assets/linkedin_headshots/colin-granger.jpeg",
    sortOrder: 3,
    isPublished: true
  },
  {
    name: "Eshaan Dhavala",
    slug: "eshaan-dhavala",
    role: "Football Co-Chair",
    group: "board",
    team: "football",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads football analytics projects and oversees football team operations.",
    linkedinUrl: "https://www.linkedin.com/in/eshaan-dhavala-12ba98241/",
    photoUrl: "/assets/linkedin_headshots/eshaan-dhavala.png",
    sortOrder: 4,
    isPublished: true
  },
  {
    name: "Abhi Kumar",
    slug: "abhi-kumar",
    role: "Football Co-Chair",
    group: "board",
    team: "football",
    major: "Math & Economics",
    gradYear: "2028",
    bio: "Leads football analytics projects and oversees football team operations.",
    linkedinUrl: "https://www.linkedin.com/in/abhi-kumar-/",
    photoUrl: "/assets/linkedin_headshots/abhi-kumar.jpeg",
    sortOrder: 4,
    isPublished: true
  },
  {
    name: "Lucas Pichardo",
    slug: "lucas-pichardo",
    role: "Basketball Co-Chair",
    group: "board",
    team: "basketball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads basketball analytics projects and oversees basketball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/lucaspichardo/",
    photoUrl: "/assets/linkedin_headshots/lucas-pichardo.png",
    sortOrder: 5,
    isPublished: true
  },
  {
    name: "Raja Kavasseri",
    slug: "raja-kavasseri",
    role: "Basketball Co-Chair",
    group: "board",
    team: "basketball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads basketball analytics projects and oversees basketball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/rajakavasseri/",
    photoUrl: "/assets/linkedin_headshots/raja-kavasseri.jpeg",
    // photoTransform: "scale(1) translateY(-10%)",
    sortOrder: 5,
    isPublished: true
  },
  {
    name: "Pavan Gudavalli",
    slug: "pavan-gudavalli",
    role: "Tennis Chair",
    group: "board",
    team: "tennis",
    major: "Computer Science & Engineering; Math & Economics",
    gradYear: "2027",
    bio: "Leads tennis analytics projects and oversees tennis team operations.",
    linkedinUrl: "https://www.linkedin.com/in/pavan-gudavalli/",
    photoUrl: "/assets/linkedin_headshots/pavan-gudavalli.jpeg",
    sortOrder: 6,
    isPublished: true
  },
  {
    name: "Beck Zimmerman",
    slug: "beck-zimmerman",
    role: "Volleyball Chair",
    group: "board",
    team: "volleyball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads volleyball analytics projects and oversees volleyball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/beck-zimmerman-45317a312/",
    photoUrl: "/assets/linkedin_headshots/beck-zimmerman.jpeg",
    sortOrder: 7,
    isPublished: true
  },
  {
    name: "Anika Soitkar",
    slug: "anika-soitkar",
    role: "Data Journalism Co-Chair",
    group: "board",
    team: "data journalism",
    major: "Data Theory",
    gradYear: "2028",
    bio: "Leads data journalism projects and oversees data storytelling initiatives.",
    linkedinUrl: "https://www.linkedin.com/in/anika-soitkar/",
    photoUrl: "/assets/linkedin_headshots/anika-soitkar.png",
    sortOrder: 8,
    isPublished: true
  },
  {
    name: "Alan Ruiz",
    slug: "alan-ruiz",
    role: "Data Journalism Co-Chair",
    group: "board",
    team: "data journalism",
    major: "Stats & Data Science",
    gradYear: "2028",
    bio: "Leads data journalism projects and oversees data storytelling initiatives.",
    linkedinUrl: "https://www.linkedin.com/in/alan-ruiz24/",
    photoUrl: "/assets/linkedin_headshots/alan-ruiz.png",
    sortOrder: 8,
    isPublished: true
  },
  {
    name: "Mateo Shelton",
    slug: "mateo-shelton",
    role: "Recruitment Chair",
    group: "board",
    team: "recruitment",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads recruitment efforts and oversees member engagement.",
    linkedinUrl: "https://www.linkedin.com/in/mateo-shelton/",
    photoUrl: "/assets/linkedin_headshots/mateo-shelton.png",
    sortOrder: 9,
    isPublished: true
  },
  {
    name: "Madeleine Curran",
    slug: "madeleine-curran",
    role: "Finance Chair",
    group: "board",
    team: "finance",
    major: "Data Theory",
    gradYear: "2027",
    bio: "Leads budget planning and finance operations for the organization.",
    linkedinUrl: "https://www.linkedin.com/in/madeleine-curran-819845258/",
    photoUrl: "/assets/linkedin_headshots/madeleine-curran.jpeg",
    sortOrder: 10,
    isPublished: true
  },
  {
    name: "Evana Sharma",
    slug: "evana-sharma",
    role: "Marketing Co-Chair",
    group: "board",
    team: "marketing",
    major: "Stats & Data Science",
    gradYear: "2029",
    bio: "Supports marketing, communications, and data storytelling for Bruin Sports Analytics.",
    linkedinUrl: "https://www.linkedin.com/in/evana-sharma-a031803a5/",
    photoUrl: "/assets/linkedin_headshots/evana-sharma.png",
    sortOrder: 11,
    isPublished: true
  },
  {
    name: "Annika Gupta",
    slug: "annika-gupta",
    role: "Marketing Co-Chair",
    group: "board",
    team: "marketing",
    major: "Stats & Data Science",
    gradYear: "2028",
    bio: "Supports marketing, outreach, and member-facing communications for Bruin Sports Analytics.",
    linkedinUrl: "https://www.linkedin.com/in/annikaagupta/",
    photoUrl: "/assets/linkedin_headshots/annika-gupta.jpeg",
    sortOrder: 11,
    isPublished: true
  },
  {
    name: "Kevin Baer",
    slug: "kevin-baer",
    role: "Advisor",
    group: "board",
    team: "advisors",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Advises board members on sports analytics projects, technical direction, and member development.",
    linkedinUrl: "https://www.linkedin.com/in/kevinmbaer/",
    photoUrl: "/assets/linkedin_headshots/kevin-baer.jpeg",
    sortOrder: 13,
    isPublished: true
  },
  {
    name: "Harsh Govindji",
    slug: "harsh-govindji",
    role: "Advisor",
    group: "board",
    team: "advisors",
    major: "Data Theory",
    gradYear: "2027",
    bio: "Advises board members on organizational strategy, analytics projects, and technical mentorship.",
    linkedinUrl: "https://www.linkedin.com/in/harsh-govindji/",
    photoUrl: "/assets/linkedin_headshots/harsh-govindji.jpeg",
    sortOrder: 13,
    isPublished: true
  },

  // ── Basketball members ──────────────────────────────────────────────────────
  {
    name: "Lucas Pichardo",
    slug: "lucas-pichardo-member",
    role: "Basketball Co-Chair",
    group: "member",
    team: "Basketball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads basketball analytics projects and oversees basketball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/lucaspichardo/",
    photoUrl: "/assets/linkedin_headshots/lucas-pichardo.png",
    sortOrder: 101,
    isPublished: true
  },
  {
    name: "Raja Kavasseri",
    slug: "raja-kavasseri-member",
    role: "Basketball Co-Chair",
    group: "member",
    team: "Basketball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads basketball analytics projects and oversees basketball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/rajakavasseri/",
    photoUrl: "/assets/linkedin_headshots/raja-kavasseri.jpeg",
    sortOrder: 102,
    isPublished: true
  },
  {
    name: "Harsh Govindji",
    slug: "harsh-govindji-basketball",
    role: "Basketball Analyst",
    group: "member",
    team: "Basketball",
    major: "Data Theory",
    gradYear: "2027",
    bio: "Basketball analytics researcher and advisor.",
    linkedinUrl: "https://www.linkedin.com/in/harsh-govindji/",
    photoUrl: "/assets/linkedin_headshots/harsh-govindji.jpeg",
    sortOrder: 103,
    isPublished: true
  },
  {
    name: "Moulik Chatterjee",
    slug: "moulik-chatterjee-basketball",
    role: "Basketball Analyst",
    group: "member",
    team: "Basketball",
    major: "Business Economics; Stats & Data Science",
    gradYear: "2027",
    bio: "Basketball analytics contributor and BSA president.",
    linkedinUrl: "https://www.linkedin.com/in/moulik-chatterjee/",
    photoUrl: "/assets/linkedin_headshots/moulik-chatterjee.jpeg",
    sortOrder: 104,
    isPublished: true
  },
  {
    name: "Sampath Kalagarla",
    slug: "sampath-kalagarla-basketball",
    role: "Basketball Analyst",
    group: "member",
    team: "Basketball",
    major: "Computer Science",
    gradYear: "2029",
    bio: "Basketball analytics contributor and BSA webmaster.",
    linkedinUrl: "https://www.linkedin.com/in/sampath-kalagarla/",
    photoUrl: "/assets/linkedin_headshots/sampath-kalagarla.jpeg",
    sortOrder: 105,
    isPublished: true
  },
  {
    name: "Vikram Subramanian",
    slug: "vikram-subramanian",
    role: "Basketball Analyst",
    group: "member",
    team: "Basketball",
    major: "Computer Science & Linguistics",
    gradYear: "2029",
    bio: "Basketball analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/vikramsbr/",
    photoUrl: "/assets/linkedin_headshots/vikram-subramanian.jpeg",
    sortOrder: 106,
    isPublished: true
  },
  {
    name: "Danny Lenney",
    slug: "danny-lenney",
    role: "Basketball Analyst",
    group: "member",
    team: "Basketball",
    major: "Stats & Data Science",
    gradYear: "2028",
    bio: "Basketball analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/daniellenney/",
    photoUrl: "/assets/linkedin_headshots/danny-lenney.jpeg",
    sortOrder: 107,
    isPublished: true
  },
  {
    name: "Josh Rusit",
    slug: "josh-rusit",
    role: "Basketball Analyst",
    group: "member",
    team: "Basketball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Basketball analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/jgrusit",
    photoUrl: "/assets/linkedin_headshots/josh-rusit.jpeg",
    sortOrder: 108,
    isPublished: true
  },

  // ── Football members ────────────────────────────────────────────────────────
  {
    name: "Eshaan Dhavala",
    slug: "eshaan-dhavala-member",
    role: "Football Co-Chair",
    group: "member",
    team: "Football",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads football analytics projects and oversees football team operations.",
    linkedinUrl: "https://www.linkedin.com/in/eshaan-dhavala-12ba98241/",
    photoUrl: "/assets/linkedin_headshots/eshaan-dhavala.png",
    sortOrder: 201,
    isPublished: true
  },
  {
    name: "Abhi Kumar",
    slug: "abhi-kumar-member",
    role: "Football Co-Chair",
    group: "member",
    team: "Football",
    major: "Math & Economics",
    gradYear: "2028",
    bio: "Leads football analytics projects and oversees football team operations.",
    linkedinUrl: "https://www.linkedin.com/in/abhi-kumar-/",
    photoUrl: "/assets/linkedin_headshots/abhi-kumar.jpeg",
    sortOrder: 202,
    isPublished: true
  },
  {
    name: "Vardaan Sinha",
    slug: "vardaan-sinha-football",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Applied Math",
    gradYear: "2027",
    bio: "Football analytics contributor and BSA External Vice President.",
    linkedinUrl: "https://www.linkedin.com/in/vardaan-sinha-234663272/",
    photoUrl: "/assets/linkedin_headshots/vardaan-sinha.png",
    sortOrder: 203,
    isPublished: true
  },
  {
    name: "Moulik Chatterjee",
    slug: "moulik-chatterjee-football",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Business Economics; Stats & Data Science",
    gradYear: "2027",
    bio: "Football analytics contributor and BSA president.",
    linkedinUrl: "https://www.linkedin.com/in/moulik-chatterjee/",
    photoUrl: "/assets/linkedin_headshots/moulik-chatterjee.jpeg",
    sortOrder: 204,
    isPublished: true
  },
  {
    name: "Mateo Shelton",
    slug: "mateo-shelton-football",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Football analytics contributor and BSA Recruitment Chair.",
    linkedinUrl: "https://www.linkedin.com/in/mateo-shelton/",
    photoUrl: "/assets/linkedin_headshots/mateo-shelton.png",
    sortOrder: 205,
    isPublished: true
  },
  {
    name: "Anika Soitkar",
    slug: "anika-soitkar-football",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Data Theory",
    gradYear: "2028",
    bio: "Football analytics contributor and BSA Data Journalism Co-Chair.",
    linkedinUrl: "https://www.linkedin.com/in/anika-soitkar/",
    photoUrl: "/assets/linkedin_headshots/anika-soitkar.png",
    sortOrder: 206,
    isPublished: true
  },
  {
    name: "Michael Zheng",
    slug: "michael-zheng",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Data Theory",
    gradYear: "2028",
    bio: "Football analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/michael-zheng-5508b22a2/",
    photoUrl: "/assets/linkedin_headshots/michael-zheng.jpeg",
    sortOrder: 207,
    isPublished: true
  },
  {
    name: "Ayush Verma",
    slug: "ayush-verma",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "",
    gradYear: "",
    bio: "Football analytics researcher and contributor.",
    photoUrl: "/assets/linkedin_headshots/ayush-verma.jpeg",
    sortOrder: 208,
    isPublished: true
  },
  {
    name: "Keith Bui",
    slug: "keith-bui",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Data Theory",
    gradYear: "2027",
    bio: "Football analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/keith-bui/",
    photoUrl: "/assets/linkedin_headshots/keith-bui.jpeg",
    sortOrder: 209,
    isPublished: true
  },
  {
    name: "Maia Salti",
    slug: "maia-salti",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Applied Math",
    gradYear: "2026",
    bio: "Football analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/maia-salti",
    photoUrl: "/assets/linkedin_headshots/maia-salti.png",
    sortOrder: 210,
    isPublished: true
  },
  {
    name: "Andrew Yang",
    slug: "andrew-yang",
    role: "Football Analyst",
    group: "member",
    team: "Football",
    major: "Applied Math",
    gradYear: "2027",
    bio: "Football analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/andrew-yang-381a952bb/",
    photoUrl: "/assets/linkedin_headshots/andrew-yang.png",
    sortOrder: 211,
    isPublished: true
  },

  // ── Baseball members ────────────────────────────────────────────────────────
  {
    name: "Colin Granger",
    slug: "colin-granger-member",
    role: "Baseball Co-Chair",
    group: "member",
    team: "Baseball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads baseball analytics projects and oversees baseball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/colingranger/",
    photoUrl: "/assets/linkedin_headshots/colin-granger.jpeg",
    sortOrder: 301,
    isPublished: true
  },
  {
    name: "Anthony Mui",
    slug: "anthony-mui-member",
    role: "Baseball Co-Chair",
    group: "member",
    team: "Baseball",
    major: "Math of Computation",
    gradYear: "2029",
    bio: "Leads baseball analytics projects and oversees baseball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/anthony-mui-820a7a272/",
    photoUrl: "/assets/linkedin_headshots/anthony-mui.jpeg",
    sortOrder: 302,
    isPublished: true
  },
  {
    name: "Madeleine Curran",
    slug: "madeleine-curran-baseball",
    role: "Baseball Analyst",
    group: "member",
    team: "Baseball",
    major: "Data Theory",
    gradYear: "2027",
    bio: "Baseball analytics contributor and BSA Finance Chair.",
    linkedinUrl: "https://www.linkedin.com/in/madeleine-curran-819845258/",
    photoUrl: "/assets/linkedin_headshots/madeleine-curran.jpeg",
    sortOrder: 303,
    isPublished: true
  },
  {
    name: "Ethan Rome",
    slug: "ethan-rome",
    role: "Baseball Analyst",
    group: "member",
    team: "Baseball",
    major: "Stats & Data Science",
    gradYear: "2028",
    bio: "Baseball analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/ethan-rome-3b3501322/",
    photoUrl: "/assets/linkedin_headshots/ethan-rome.png",
    sortOrder: 304,
    isPublished: true
  },
  {
    name: "Alan Ruiz",
    slug: "alan-ruiz-baseball",
    role: "Baseball Analyst",
    group: "member",
    team: "Baseball",
    major: "Stats & Data Science",
    gradYear: "2028",
    bio: "Baseball analytics contributor and BSA Data Journalism Co-Chair.",
    linkedinUrl: "https://www.linkedin.com/in/alan-ruiz24/",
    photoUrl: "/assets/linkedin_headshots/alan-ruiz.png",
    sortOrder: 305,
    isPublished: true
  },

  // ── Tennis members ──────────────────────────────────────────────────────────
  {
    name: "Pavan Gudavalli",
    slug: "pavan-gudavalli-member",
    role: "Tennis Chair",
    group: "member",
    team: "Tennis",
    major: "Computer Science & Engineering; Math & Economics",
    gradYear: "2027",
    bio: "Leads tennis analytics projects and oversees tennis team operations.",
    linkedinUrl: "https://www.linkedin.com/in/pavan-gudavalli/",
    photoUrl: "/assets/linkedin_headshots/pavan-gudavalli.jpeg",
    sortOrder: 401,
    isPublished: true
  },
  {
    name: "Niranjan Bhagwat",
    slug: "niranjan-bhagwat",
    role: "Tennis Analyst",
    group: "member",
    team: "Tennis",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Tennis analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/niranjan-bhagwat8/",
    photoUrl: "/assets/linkedin_headshots/niranjan-bhagwat.png",
    sortOrder: 402,
    isPublished: true
  },
  {
    name: "Emma Li",
    slug: "emma-li",
    role: "Tennis Analyst",
    group: "member",
    team: "Tennis",
    major: "Stats & Data Science",
    gradYear: "2028",
    bio: "Tennis analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/emma-li-80952b267",
    photoUrl: "/assets/linkedin_headshots/emma-li.jpeg",
    sortOrder: 403,
    isPublished: true
  },

  // ── Volleyball members ──────────────────────────────────────────────────────
  {
    name: "Beck Zimmerman",
    slug: "beck-zimmerman-member",
    role: "Volleyball Chair",
    group: "member",
    team: "Volleyball",
    major: "Stats & Data Science",
    gradYear: "2027",
    bio: "Leads volleyball analytics projects and oversees volleyball team operations.",
    linkedinUrl: "https://www.linkedin.com/in/beck-zimmerman-45317a312/",
    photoUrl: "/assets/linkedin_headshots/beck-zimmerman.jpeg",
    sortOrder: 501,
    isPublished: true
  },
  {
    name: "Anika Soitkar",
    slug: "anika-soitkar-volleyball",
    role: "Volleyball Analyst",
    group: "member",
    team: "Volleyball",
    major: "Data Theory",
    gradYear: "2028",
    bio: "Volleyball analytics contributor and BSA Data Journalism Co-Chair.",
    linkedinUrl: "https://www.linkedin.com/in/anika-soitkar/",
    photoUrl: "/assets/linkedin_headshots/anika-soitkar.png",
    sortOrder: 502,
    isPublished: true
  },
  {
    name: "Ethan Rome",
    slug: "ethan-rome-volleyball",
    role: "Volleyball Analyst",
    group: "member",
    team: "Volleyball",
    major: "Stats & Data Science",
    gradYear: "2028",
    bio: "Volleyball analytics researcher and contributor.",
    linkedinUrl: "https://www.linkedin.com/in/ethan-rome-3b3501322/",
    photoUrl: "/assets/linkedin_headshots/ethan-rome.png",
    sortOrder: 503,
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
    { date: "Sep 22", title: "EAF", detail: "Enormous Activities Fair — Meet the club and learn about our projects.", status: "Awareness" },
    { date: "TBD", title: "Data Science Showcase", detail: "Learn more about UCLA's data science organizations.", status: "Awareness" },
    { date: "TBD", title: "Applications Released", detail: "Application form goes live. Check our Slack, Instagram, and email for updates.", status: "Application" },
    { date: "TBD", title: "BSA Info Session", detail: "What research, consulting, and competitions actually look like day to day, plus open Q&A.", status: "Application" },
    { date: "TBD", title: "Coffee Chats", detail: "Get to know other prospective members and let them learn more about member experiences.", status: "Application" },
    { date: "TBD", title: "Application Deadline", detail: "Applications close; interviews invites are sent out after reviewing submissions.", status: "Application" },
    { date: "TBD", title: "Final Interviews", detail: "In-person interviews where possible with chairs & returning members", status: "Selection" }
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
    category: "Partnerships",
    question: "What kinds of organizations do you work with?",
    answer: "We partner with collegiate and professional teams, leagues, agencies, sports-technology companies, and departments across UCLA Athletics. Engagements range from focused one-off analyses to season-long projects."
  },
  {
    category: "Partnerships",
    question: "What does a partnership cost?",
    answer: "As a student organization, most engagements are low-cost or pro bono depending on scope and data access. We align on expectations and any costs together during the discovery call before work begins."
  },
  {
    category: "Partnerships",
    question: "How long does a typical project take?",
    answer: "Most projects run from a few weeks to a full academic quarter, depending on complexity and how ready your data is. We scope the timeline with you up front."
  },
  {
    category: "Partnerships",
    question: "Who owns the deliverables?",
    answer: "You do. Partners retain ownership of final deliverables and any proprietary outputs. We only display approved, non-sensitive summaries publicly, and only with your permission."
  },
  {
    category: "Partnerships",
    question: "How do we get started?",
    answer: "Submit the inquiry form with your problem and available data. Our External Vice President will follow up to schedule a discovery call and scope the engagement."
  },
  {
    category: "Events",
    question: "Are events open to non-members?",
    answer: "Public workshops, speaker events, and info sessions are listed on the Events page. Internal meetings are marked members-only."
  }
];

export const outcomes = [
  // Sports
  { name: "UCLA Athletics", category: "Sports", logo: "/assets/logos/ucla-athletics.png", logoLight: "/assets/logos/modes/ucla-athletics-light.svg", logoDark: "/assets/logos/modes/ucla-athletics-dark.svg", approvedForDisplay: true },
  { name: "Seattle Mariners", category: "Sports", logo: "/assets/logos/seattle-mariners.png", logoLight: "/assets/logos/modes/seattle-mariners-light.svg", logoDark: "/assets/logos/modes/seattle-mariners-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Miami Dolphins", category: "Sports", logo: "/assets/logos/miami-dolphins.svg", logoLight: "/assets/logos/modes/miami-dolphins-light.svg", logoDark: "/assets/logos/modes/miami-dolphins-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "OKC Thunder", category: "Sports", logo: "/assets/logos/okc-thunder.png", logoLight: "/assets/logos/modes/okc-thunder-light.svg", logoDark: "/assets/logos/modes/okc-thunder-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "PFF", category: "Sports Analytics", logo: "/assets/logos/pff.png", logoLight: "/assets/logos/modes/pff-light.svg", logoDark: "/assets/logos/modes/pff-dark.svg", logoScale: 1.8, approvedForDisplay: true },
  // Technology
  { name: "Google", category: "Technology", logo: "/assets/logos/google.svg", logoLight: "/assets/logos/modes/google-light.svg", logoDark: "/assets/logos/modes/google-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Amazon", category: "Technology", logo: "/assets/logos/amazon.svg", logoLight: "/assets/logos/modes/amazon-light.svg", logoDark: "/assets/logos/modes/amazon-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Oracle", category: "Technology", logo: "/assets/logos/oracle.svg", logoLight: "/assets/logos/modes/oracle-light.svg", logoDark: "/assets/logos/modes/oracle-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "IBM", category: "Technology", logo: "/assets/logos/ibm.svg", logoLight: "/assets/logos/modes/ibm-light.svg", logoDark: "/assets/logos/modes/ibm-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Coinbase", category: "Technology", logo: "/assets/logos/coinbase.svg", logoLight: "/assets/logos/modes/coinbase-light.svg", logoDark: "/assets/logos/modes/coinbase-dark.svg", approvedForDisplay: true },
  { name: "Palo Alto Networks", category: "Technology", logo: "/assets/logos/palo-alto-networks.svg", logoLight: "/assets/logos/modes/palo-alto-networks-light.svg", logoDark: "/assets/logos/modes/palo-alto-networks-dark.svg", approvedForDisplay: true },
  { name: "Nokia", category: "Technology", logo: "/assets/logos/nokia.svg", logoLight: "/assets/logos/modes/nokia-light.svg", logoDark: "/assets/logos/modes/nokia-dark.svg", approvedForDisplay: true },
  { name: "Rocket Lab", category: "Aerospace", logo: "/assets/logos/rocket-lab.svg", logoLight: "/assets/logos/modes/rocket-lab-light.svg", logoDark: "/assets/logos/modes/rocket-lab-dark.svg", approvedForDisplay: true },
  { name: "Lucid", category: "Technology", logo: "/assets/logos/lucid.png", logoLight: "/assets/logos/modes/lucid-light.svg", logoDark: "/assets/logos/modes/lucid-dark.svg", approvedForDisplay: true },
  { name: "Valorant", category: "AI", logo: "/assets/logos/valorant.png", logoLight: "/assets/logos/modes/valorant-light.svg", logoDark: "/assets/logos/modes/valorant-dark.svg", approvedForDisplay: true },
  { name: "John Deere", category: "Technology", logo: "/assets/logos/john-deere.png", logoLight: "/assets/logos/modes/john-deere-light.svg", logoDark: "/assets/logos/modes/john-deere-dark.svg", approvedForDisplay: true },
  { name: "Paramount", category: "Media", logo: "/assets/logos/paramount.png", logoLight: "/assets/logos/modes/paramount-light.svg", logoDark: "/assets/logos/modes/paramount-dark.svg", approvedForDisplay: true },
  { name: "Conagra Brands", category: "Consumer Goods", logo: "/assets/logos/conagra-brands.svg", logoLight: "/assets/logos/modes/conagra-brands-light.svg", logoDark: "/assets/logos/modes/conagra-brands-dark.svg", approvedForDisplay: true },
  // Finance / Banking / Investments / Consulting
  { name: "Goldman Sachs", category: "Finance", logo: "/assets/logos/goldman-sachs.svg", logoLight: "/assets/logos/modes/goldman-sachs-light.svg", logoDark: "/assets/logos/modes/goldman-sachs-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Bloomberg", category: "Finance", logo: "/assets/logos/bloomberg.png", approvedForDisplay: true, prestige: true },
  { name: "Balyasny Asset Management", category: "Investments", logo: "/assets/logos/balyasny.png", logoLight: "/assets/logos/modes/balyasny-light.svg", logoDark: "/assets/logos/modes/balyasny-dark.svg", approvedForDisplay: true },
  { name: "Graham Partners", category: "Investments", logo: "/assets/logos/graham-partners.png", logoLight: "/assets/logos/modes/graham-partners-light.svg", logoDark: "/assets/logos/modes/graham-partners-dark.svg", logoScale: 1.7, approvedForDisplay: true },
  { name: "Pacific Life", category: "Finance", logo: "/assets/logos/pacific-life.svg", logoLight: "/assets/logos/modes/pacific-life-light.svg", logoDark: "/assets/logos/modes/pacific-life-dark.svg", approvedForDisplay: true },
  { name: "McKinsey & Company", category: "Consulting", logo: "/assets/logos/mckinsey.png", logoScale: 1.2, approvedForDisplay: true, prestige: true },
  { name: "PwC", category: "Consulting", logo: "/assets/logos/pwc.svg", logoLight: "/assets/logos/modes/pwc-light.svg", logoDark: "/assets/logos/modes/pwc-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Deloitte", category: "Consulting", logo: "/assets/logos/deloitte.svg", logoLight: "/assets/logos/modes/deloitte-light.svg", logoDark: "/assets/logos/modes/deloitte-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Altman Solon", category: "Consulting", logo: "/assets/logos/altman-solon.png", logoLight: "/assets/logos/modes/altman-solon-light.svg", logoDark: "/assets/logos/modes/altman-solon-dark.svg", logoScale: 2.0, approvedForDisplay: true },
  { name: "EY-Parthenon", category: "Consulting", logo: "/assets/logos/ey-parthenon.svg", logoLight: "/assets/logos/modes/ey-parthenon-light.svg", logoDark: "/assets/logos/modes/ey-parthenon-dark.svg", approvedForDisplay: true },
  // Schools (last)
  { name: "UCLA Anderson", category: "Graduate Program", logo: "/assets/logos/ucla-anderson.png", logoLight: "/assets/logos/modes/ucla-anderson-light.svg", logoDark: "/assets/logos/modes/ucla-anderson-dark.svg", approvedForDisplay: true },
  { name: "MIT", category: "University", logo: "/assets/logos/mit.svg", logoLight: "/assets/logos/modes/mit-light.svg", logoDark: "/assets/logos/modes/mit-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Harvard", category: "University", logo: "/assets/logos/harvard.svg", logoLight: "/assets/logos/modes/harvard-light.svg", logoDark: "/assets/logos/modes/harvard-dark.svg", approvedForDisplay: true, prestige: true },
  { name: "Columbia", category: "University", logo: "/assets/logos/columbia.png", logoLight: "/assets/logos/modes/columbia-light.svg", logoDark: "/assets/logos/modes/columbia-dark.svg", approvedForDisplay: true },
  { name: "NYU Courant", category: "Graduate Program", logo: "/assets/logos/nyu.png", logoLight: "/assets/logos/modes/nyu-light.svg", logoDark: "/assets/logos/modes/nyu-dark.svg", approvedForDisplay: true }
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
