export type JournalismArticle = {
  title: string;
  authors: string[];
  date: string;
  year: number;
  sport: string;
  readTime: number;
  summary?: string;
  techStack?: string[];
  paperUrl?: string;
  views?: number;
  likes?: number;
};

export type DjResource = { label: string; href: string };

const DJ_RESOURCES_BASE =
  "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_resources";

export const djResources: DjResource[] = [
  { label: "Creating Graphics", href: `${DJ_RESOURCES_BASE}/creating-graphics.pdf` },
  { label: "Guidelines", href: `${DJ_RESOURCES_BASE}/guidelines.pdf` },
  { label: "Example Timeline", href: `${DJ_RESOURCES_BASE}/example-timeline.pdf` }
];

export const articles: JournalismArticle[] = [
  {
    title: "NFL Draft 2018: Bruin Prospects",
    authors: ["Alex Veroulis"],
    date: "Apr 20, 2018",
    year: 2018,
    sport: "Football",
    readTime: 22,
    summary: "A draft preview of UCLA's top 2018 NFL prospects, comparing Josh Rosen, Kolton Miller, Jordan Lasley, Scott Quessenberry, and Kenny Young against positional peers through college production, combine measures, and draft projection context.",
    techStack: ["Sports Reference", "NFL.com", "njsavant"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/nfl_bruins.pdf"
  },
  {
    title: "Why Has Alexander Zverev Failed to Deliver at Grand Slams?",
    authors: ["Kevin Hahn", "Kathir Ilango"],
    date: "May 9, 2018",
    year: 2018,
    sport: "Tennis",
    readTime: 8,
    summary: "A look at Alexander Zverev's gap between best-of-three dominance and Grand Slam underperformance, using opponent Elo, win percentage, pace, and style-profile comparisons to explain why his major results lagged his ranking.",
    techStack: ["ATP data", "Elo ratings", "Match stats"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/alex_zverev.pdf"
  },
  {
    title: "Early Overachievers: The 2018 Oakland Athletics",
    authors: ["Alex Veroulis"],
    date: "May 30, 2018",
    year: 2018,
    sport: "Baseball",
    readTime: 10,
    summary: "A snapshot of Oakland's surprising 2018 start, weighing the Athletics' low-payroll offense, improved defense, and pitching performance against preseason expectations and the realities of a long AL West race.",
    techStack: ["Baseball Reference", "Baseball Prospectus", "MLB stats"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/2018_As.pdf"
  },
  {
    title: "BSA Exclusive: Our Journey Through Research",
    authors: ["Konner Macias", "Ben Messinger", "Nikhil Sharma", "Ronaq Virdi"],
    date: "Jun 3, 2018",
    year: 2018,
    sport: "Basketball",
    readTime: 13,
    summary: "A behind-the-scenes research checkpoint on predicting NBA free-agent salaries, covering data cleaning, rookie-contract exclusions, salary brackets, K-means performance clusters, ANOVA tests, and multiple linear regression modeling.",
    techStack: ["Basketball Reference", "Spotrac", "Regression"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/journey_thru_research.pdf"
  },
  {
    title: "The NBA's 'Perfect Game' by One of Basketball's Rising Superstars",
    authors: ["Chad Shimozaki"],
    date: "Nov 24, 2018",
    year: 2018,
    sport: "Basketball",
    readTime: 5,
    summary: "An analysis of Nikola Jokic's perfect 31-point triple-double against Phoenix and the broader case for his value as Denver's passing hub, improving defender, and underused scoring option.",
    techStack: ["Basketball Reference", "NBA.com", "ESPN"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/nba_perfect_game.pdf"
  },
  {
    title: "Do Summary Statistics Really Mean Anything in Tennis?",
    authors: ["Gautham Pasupathy"],
    date: "Dec 1, 2018",
    year: 2018,
    sport: "Tennis",
    readTime: 5,
    summary: "A U.S. Open 2018 study of whether match-summary statistics point toward winners, finding that winners usually lead across summary categories and that receiving points won is especially informative.",
    techStack: ["IBM SlamTracker", "Match stats", "Bar charts"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/summary_stats.pdf"
  },
  {
    title: "Can the Toronto Maple Leafs Pay Up?",
    authors: ["Joe Dunham"],
    date: "Nov 28, 2018",
    year: 2018,
    sport: "Hockey",
    readTime: 9,
    summary: "A contract-value analysis of William Nylander's holdout, comparing young NHL forwards by age, production, possession impact, average annual value, and Toronto's cap constraints.",
    techStack: ["CapFriendly", "NHL stats", "Regression"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/maple_leafs.pdf"
  },
  {
    title: "2018 Ballon d'Or: A Look at the Contenders and their Numbers",
    authors: ["Vedant Sahu"],
    date: "Nov 29, 2018",
    year: 2018,
    sport: "Soccer",
    readTime: 15,
    summary: "A statistical preview of the 2018 Ballon d'Or race, comparing Modric, France's World Cup stars, Ronaldo, Messi, and Salah across goals, assists, passing, defensive context, and competition timing.",
    techStack: ["Soccer stats", "World Cup data", "Comparative charts"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/ballon_dor.pdf"
  },
  {
    title: "Bust to Beast: The Jared Goff Story",
    authors: ["Anirudh Mani"],
    date: "Nov 29, 2018",
    year: 2018,
    sport: "Football",
    readTime: 10,
    summary: "A breakdown of Jared Goff's jump from struggling rookie to MVP candidate, separating supporting talent, Sean McVay's system, offensive-line protection, and Goff's own improvements in aggressiveness and efficiency.",
    techStack: ["PFF", "Next Gen Stats", "DVOA/QBR"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/jared_goff.pdf"
  },
  {
    title: "Defense in the Modern NFL (or Lack Thereof)",
    authors: ["Arman Abrishamchian"],
    date: "Dec 4, 2018",
    year: 2018,
    sport: "Football",
    readTime: 5,
    summary: "A data-backed essay on the NFL's 2018 scoring surge, connecting record offensive output to rule emphasis, defensive pass-interference trends, tackling issues, and the league's long-term shift toward passing.",
    techStack: ["NFL scoring data", "Penalty rates", "Next Gen Stats"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/defense_modern_nfl.pdf"
  },
  {
    title: "Can Summer Ball Indicate Professional Success?",
    authors: ["Haley Rao"],
    date: "Dec 4, 2018",
    year: 2018,
    sport: "Baseball",
    readTime: 4,
    summary: "A Cape Cod Baseball League study using OPS and RBI production to ask whether summer-ball batting performance can signal future professional success.",
    techStack: ["Cape Cod League", "OPS/RBI regression", "FanGraphs"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/summer_ball.pdf"
  },
  {
    title: "Keys to Success for the Young Lakers Core",
    authors: ["Justin Yee"],
    date: "Dec 3, 2018",
    year: 2018,
    sport: "Basketball",
    readTime: 6,
    summary: "A player-by-player model of the young Lakers core, using Basketball-Reference game logs and Game Score regression to identify the statistical keys for Hart, Kuzma, Ingram, and Ball.",
    techStack: ["Basketball Reference", "Game Score", "Regression"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/lakers_young_core.pdf"
  },
  {
    title: "Relievers in Today's MLB",
    authors: ["Alex Veroulis"],
    date: "Dec 5, 2018",
    year: 2018,
    sport: "Baseball",
    readTime: 6,
    summary: "An evaluation of modern MLB reliever spending and usage, comparing 2008 and 2018 innings, wins, ERA spread, salary growth, and the weak relationship between workload and effectiveness.",
    techStack: ["FanGraphs", "Spotrac", "Correlation"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/relievers.pdf"
  },
  {
    title: "How Effective is a Possession-Based Play Style in the UEFA Champions League?",
    authors: ["Faraz Murshed"],
    date: "Dec 5, 2018",
    year: 2018,
    sport: "Soccer",
    readTime: 6,
    summary: "A 2017-18 Champions League analysis testing whether possession-based play predicts success, finding that possession helps in the group stage but does not explain knockout-round outcomes on its own.",
    techStack: ["UCL statistics", "Possession analysis", "Comparative charts"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/uefa.pdf"
  },
  {
    title: "Why Anthony Davis and the Pelicans Failed",
    authors: ["Chad Shimozaki"],
    date: "Feb 9, 2019",
    year: 2019,
    sport: "Basketball",
    readTime: 8,
    summary: "A diagnosis of the Anthony Davis-era Pelicans, tying New Orleans' struggles to injuries, roster construction, lost shooting, cap decisions, clutch failures, and the looming need to maximize a trade return.",
    techStack: ["NBA.com", "Net rating", "ESPN BPI"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/anthony_davis.pdf"
  },
  {
    title: "Goalkeeper Passing: What's been done so far",
    authors: ["Salil Akundi"],
    date: "Jan 27, 2019",
    year: 2019,
    sport: "Football",
    readTime: 8,
    summary: "A proposal for evaluating goalkeeper distribution beyond completion rate, accounting for team shape, pressure, pass direction, pitch zones, punts, and manually tagged video context through an R Shiny tool.",
    techStack: ["R Shiny", "StatsBomb", "Opta"],
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/goalkeeper_passing.pdf"
  },
  {
    title: "Beyond the Standings: Using Data to Predict the NBA Playoff Race",
    authors: ["Aarnav Dharia", "Aditya Malhotra", "Samir Joshi"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Basketball",
    readTime: 5,
    views: 122,
    likes: 1,
  },
  {
    title: "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics",
    authors: ["Ella Hinkle", "Taylor Fenton"],
    date: "Jan 1, 2026",
    year: 2026,
    sport: "Gymnastics",
    readTime: 5,
    views: 56,
    likes: 0,
  },
  {
    title: "Why are the NBA ratings down?",
    authors: ["Charlie Wang"],
    date: "Dec 31, 2025",
    year: 2025,
    sport: "Basketball",
    readTime: 13,
    views: 109,
    likes: 1,
  },
  {
    title: 'Are the "Uncs" Holding Back the NBA?',
    authors: ["Yuri Jung", "Evana Sharma", "Chloe Lee"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Basketball",
    readTime: 7,
    views: 74,
    likes: 1,
  },
  {
    title: "Which Quarterbacks have been Historically Great against the Blitz?",
    authors: ["Devon Yu", "Nathan Yee", "Ethan Chan", "Evan Mock"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Football",
    readTime: 12,
    views: 27,
    likes: 0,
  },
  {
    title: "The Credit Goes to the Wrong People",
    authors: ["Van Avanesian", "Ricky Cai", "Jayden Kim", "Justin Herr"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Baseball",
    readTime: 10,
    views: 85,
    likes: 3,
  },
];
