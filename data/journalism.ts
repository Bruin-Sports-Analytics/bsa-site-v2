export type ArticleBlock =
  | { type: "heading"; level?: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string; width?: number; height?: number }
  | { type: "table"; columns: string[]; rows: string[][] };

export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  afterParagraph: number;
};

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
  contentFile?: string;
  images?: ArticleImage[];
  content?: ArticleBlock[];
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/nfl_bruins.pdf",
    contentFile: "nfl-draft-2018-bruin-prospects.txt",
    images: [
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/broad-jump-chart.png",
        alt: "Chart of top broad jumps for offensive linemen at the 2018 NFL Combine",
        caption: "Kolton Miller led all offensive linemen at the 2018 NFL Combine with a record-setting 121-inch broad jump.",
        width: 585,
        height: 233,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/vertical-jump-chart.png",
        alt: "Chart of top vertical jumps for offensive linemen at the 2018 NFL Combine",
        caption: "Scott Quessenberry tied for second among all offensive line prospects with a 33.5-inch vertical jump.",
        width: 646,
        height: 280,
        afterParagraph: 10
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/career-tackles-chart.png",
        alt: "Chart of UCLA football career tackle leaders from 2005 onward",
        caption: "Kenny Young finished second in UCLA history (2005–present) with 304 total career tackles.",
        width: 385,
        height: 234,
        afterParagraph: 13
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/alex_zverev.pdf",
    contentFile: "why-has-alexander-zverev-failed-to-deliver-at-grand-slams.txt",
    images: [
      {
        src: "/assets/journalism/why-has-alexander-zverev-failed-to-deliver-at-grand-slams/figure-03.png",
        alt: "Alexander Zverev Best-of-3 win percentage vs top ATP competition",
        caption: "Zverev compiled an elite 73.2% win percentage in Best-of-3 matches from early 2017 onward.",
        width: 1168,
        height: 602,
        afterParagraph: 4
      },
      {
        src: "/assets/journalism/why-has-alexander-zverev-failed-to-deliver-at-grand-slams/figure-04.png",
        alt: "Zverev win rate breakdown by match length in sets",
        caption: "Zverev's win percentage drops significantly as match duration extends from straight sets into 4 or 5 sets.",
        width: 1048,
        height: 684,
        afterParagraph: 6
      },
      {
        src: "/assets/journalism/why-has-alexander-zverev-failed-to-deliver-at-grand-slams/figure-06.png",
        alt: "Radar chart comparing key serving and return metrics between Masters 1000 and Grand Slams",
        caption: "Comparison of 1st serve win rate, 2nd serve win rate, and break points saved between Best-of-3 and Grand Slams.",
        width: 864,
        height: 467,
        afterParagraph: 9
      },
      {
        src: "/assets/journalism/why-has-alexander-zverev-failed-to-deliver-at-grand-slams/figure-07.png",
        alt: "Points dominance and break point conversion ratios per tournament round",
        caption: "Points dominance and break point conversion ratios decline sharply in the later rounds of Grand Slam tournaments.",
        width: 1494,
        height: 478,
        afterParagraph: 12
      },
      {
        src: "/assets/journalism/why-has-alexander-zverev-failed-to-deliver-at-grand-slams/figure-09.png",
        alt: "Table of Alexander Zverev Grand Slam results and match durations",
        caption: "Grand Slam match outcomes and durations highlighting multiple marathon 5-set defeats.",
        width: 798,
        height: 191,
        afterParagraph: 16
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/2018_As.pdf",
    contentFile: "early-overachievers-the-2018-oakland-athletics.txt",
    images: [
      {
        src: "/assets/journalism/early-overachievers-the-2018-oakland-athletics/figure-02.png",
        alt: "2018 American League assist leaders chart",
        caption: "Matt Chapman and the Oakland infield led the American League with 580 defensive assists.",
        width: 345,
        height: 483,
        afterParagraph: 7
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/journey_thru_research.pdf",
    contentFile: "bsa-exclusive-our-journey-through-research.txt",
    images: [
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-01.png",
        alt: "2017-18 NBA player performance cluster distribution",
        caption: "K-means clustering on per-game production metrics across active NBA players.",
        width: 579,
        height: 337,
        afterParagraph: 14
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-02.png",
        alt: "Cluster 1 Superstar statistical profile averages",
        caption: "Cluster 1 profile: High-usage superstars averaging 25.0 PPG, 7.5 RPG, and 6.2 APG.",
        width: 1090,
        height: 636,
        afterParagraph: 18
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-04.png",
        alt: "Cluster 2 Star Starters statistical profile averages",
        caption: "Cluster 2 profile: Secondary stars and solid starters averaging 18.5 PPG and 31+ minutes.",
        width: 1090,
        height: 636,
        afterParagraph: 20
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-05.png",
        alt: "ANOVA test table comparing performance clusters to salary brackets",
        caption: "ANOVA test results confirming statistically significant salary variations across clusters (p < 0.001).",
        width: 1240,
        height: 926,
        afterParagraph: 24
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-06.png",
        alt: "Multiple linear regression summary and coefficients for NBA salaries",
        caption: "Multiple regression model coefficients identifying significant scoring, rebound, and minute weights.",
        width: 1212,
        height: 916,
        afterParagraph: 29
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-07.png",
        alt: "Regression model summary statistics and R-squared values",
        caption: "Model evaluation: Multiple R-squared of 0.684 with residual standard error of $3.41M.",
        width: 707,
        height: 182,
        afterParagraph: 31
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-08.png",
        alt: "Predicted vs Actual Salary Matrix for active NBA players",
        caption: "Residual matrix comparing predicted contract value against actual compensation.",
        width: 1000,
        height: 1000,
        afterParagraph: 34
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-09.png",
        alt: "Top 10 most underpaid NBA players identified by model residuals",
        caption: "Model identification of top value contracts with highest positive production-to-salary differential.",
        width: 500,
        height: 750,
        afterParagraph: 36
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-10.png",
        alt: "Top 10 most overpaid NBA players identified by model residuals",
        caption: "Players with highest negative surplus value between actual salary and modeled production.",
        width: 457,
        height: 429,
        afterParagraph: 38
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-12.png",
        alt: "Model prediction accuracy by player position",
        caption: "Positional model evaluation showing highest predictive accuracy for point guards and centers.",
        width: 750,
        height: 500,
        afterParagraph: 40
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-13.png",
        alt: "Random Forest feature importance for NBA salaries",
        caption: "Variable importance: Minutes played and raw scoring volume dominate contract valuation.",
        width: 451,
        height: 276,
        afterParagraph: 43
      },
      {
        src: "/assets/journalism/bsa-exclusive-our-journey-through-research/figure-14.png",
        alt: "Correlation matrix of key basketball metrics and salaries",
        caption: "Correlation heatmap between box-score stats, advanced metrics, and annual compensation.",
        width: 451,
        height: 285,
        afterParagraph: 45
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/nba_perfect_game.pdf",
    contentFile: "the-nba-s-perfect-game-by-one-of-basketball-s-rising-superstars.txt",
    images: [
      {
        src: "/assets/journalism/the-nba-s-perfect-game-by-one-of-basketball-s-rising-superstars/figure-01.png",
        alt: "Assists per game trajectory for top passing NBA centers",
        caption: "Assists per game trajectory for Nikola Jokic vs. top passing big men from 2016 to 2019.",
        width: 1500,
        height: 959,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/the-nba-s-perfect-game-by-one-of-basketball-s-rising-superstars/figure-02.png",
        alt: "Historical comparison of best passing centers in NBA history",
        caption: "Jokic's assist rate compared to all-time passing centers including Wilt Chamberlain, Bill Russell, and Vlade Divac.",
        width: 1756,
        height: 1248,
        afterParagraph: 6
      },
      {
        src: "/assets/journalism/the-nba-s-perfect-game-by-one-of-basketball-s-rising-superstars/figure-04.png",
        alt: "Opponent field goal percentage allowed within 6 feet for NBA centers",
        caption: "Rim defense metrics: Opponent field goal percentage allowed within 6 feet (2017–18).",
        width: 1859,
        height: 1525,
        afterParagraph: 11
      },
      {
        src: "/assets/journalism/the-nba-s-perfect-game-by-one-of-basketball-s-rising-superstars/figure-05.png",
        alt: "Usage percentage vs true shooting efficiency for NBA stars",
        caption: "Comparing offensive usage vs. true shooting efficiency among the NBA's elite stars.",
        width: 2623,
        height: 1449,
        afterParagraph: 15
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/summary_stats.pdf",
    contentFile: "do-summary-statistics-really-mean-anything-in-tennis.txt",
    images: [
      {
        src: "/assets/journalism/do-summary-statistics-really-mean-anything-in-tennis/figure-02.png",
        alt: "Percentage occurrence of summary statistics for winners in 2018 US Open",
        caption: "Frequency with which match winners led individual summary statistics at the 2018 US Open.",
        width: 1600,
        height: 966,
        afterParagraph: 4
      },
      {
        src: "/assets/journalism/do-summary-statistics-really-mean-anything-in-tennis/figure-03.png",
        alt: "Summary statistic occurrence for Novak Djokovic in 2018 US Open",
        caption: "Novak Djokovic's statistical dominance across his 2018 US Open championship run.",
        width: 1600,
        height: 894,
        afterParagraph: 6
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/maple_leafs.pdf",
    contentFile: "can-the-toronto-maple-leafs-pay-up.txt",
    images: [
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-01.png",
        alt: "NHL forward cap hit vs 5v5 points per 60 minutes",
        caption: "5v5 scoring efficiency (Points/60) vs. Cap Hit across comparable young NHL forwards.",
        width: 971,
        height: 576,
        afterParagraph: 2
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-02.png",
        alt: "Comparable RFA forward contract benchmarks",
        caption: "RFA forward contract comparables: Cap hit, term, and offensive production at signing.",
        width: 971,
        height: 576,
        afterParagraph: 3
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-03.png",
        alt: "Toronto Maple Leafs projected salary cap structure",
        caption: "Projected Maple Leafs salary structure with commitments to Tavares, Matthews, and Marner.",
        width: 971,
        height: 576,
        afterParagraph: 4
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-04.png",
        alt: "5v5 Individual Points Percentage vs On-Ice Shooting Percentage",
        caption: "Individual points percentage (IPP) and on-ice shooting rates for Toronto forwards.",
        width: 971,
        height: 575,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-05.png",
        alt: "Corsi For percentage vs Expected Goals percentage",
        caption: "Shot attempt share (CF%) vs. expected goal share (xGF%) across line combinations.",
        width: 971,
        height: 576,
        afterParagraph: 6
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-06.png",
        alt: "Zone starts and relative possession impact",
        caption: "Offensive zone start percentage vs. relative possession metrics (CF% Rel).",
        width: 971,
        height: 576,
        afterParagraph: 7
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-07.png",
        alt: "Age 20-22 forward scoring rate trajectory (5v5 P/60)",
        caption: "Scoring trajectory by age comparing Nylander to elite forward peers.",
        width: 971,
        height: 576,
        afterParagraph: 8
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-08.png",
        alt: "Contract market value matrix by forward production tier",
        caption: "Tiered market value matrix mapping scoring production to expected AAV.",
        width: 971,
        height: 575,
        afterParagraph: 9
      },
      {
        src: "/assets/journalism/can-the-toronto-maple-leafs-pay-up/figure-09.png",
        alt: "Projected Maple Leafs cap scenarios under proposed Nylander contract",
        caption: "Multi-year cap projections under a $6.9M AAV Nylander contract.",
        width: 971,
        height: 576,
        afterParagraph: 11
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/ballon_dor.pdf",
    contentFile: "2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers.txt",
    images: [
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-02.png",
        alt: "2018 Ballon d'Or Nominee General Production Comparison",
        caption: "Nominee comparison across goals, assists, shots, and key passes per 90 minutes.",
        width: 1500,
        height: 843,
        afterParagraph: 2
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-03.png",
        alt: "Modric vs France national team performance",
        caption: "Luka Modric's per-90 midfield metrics during the 2018 FIFA World Cup.",
        width: 1235,
        height: 694,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-04.png",
        alt: "Modric vs France World Cup comparative breakdown",
        caption: "Modric vs. French midfield metrics: Key passes, dribbles, and interceptions.",
        width: 1600,
        height: 900,
        afterParagraph: 6
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-05.png",
        alt: "2018 World Cup General Production comparison across contenders",
        caption: "World Cup production metrics across the primary Ballon d'Or contenders.",
        width: 1200,
        height: 675,
        afterParagraph: 7
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-06.png",
        alt: "Antoine Griezmann vs Luka Modric domestic league per-90 metrics",
        caption: "Griezmann vs. Modric: Domestic league goals, assists, shots, and key passes per 90.",
        width: 1500,
        height: 816,
        afterParagraph: 9
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-07.png",
        alt: "Griezmann vs Modric La Liga statistical table",
        caption: "La Liga per-90 breakdown between Antoine Griezmann and Luka Modric.",
        width: 1500,
        height: 1034,
        afterParagraph: 10
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-08.png",
        alt: "Griezmann vs Modric 2018 World Cup stats",
        caption: "2018 World Cup head-to-head metrics: Goals, key passes, dribbles, and tackles per 90.",
        width: 1576,
        height: 1105,
        afterParagraph: 11
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-09.png",
        alt: "Kylian Mbappe vs Luka Modric domestic league production",
        caption: "Mbappé vs. Modric: Domestic league attacking output and progression numbers.",
        width: 1500,
        height: 816,
        afterParagraph: 13
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-10.png",
        alt: "Raphael Varane vs Luka Modric La Liga stats",
        caption: "Varane vs. Modric: Defensive actions and passing accuracy in La Liga.",
        width: 1500,
        height: 806,
        afterParagraph: 15
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-11.png",
        alt: "Varane vs Modric comparative defensive table",
        caption: "Defensive actions per 90: Tackles, clearances, interceptions, and aerial duels.",
        width: 1500,
        height: 1032,
        afterParagraph: 16
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-12.png",
        alt: "Luka Modric vs Cristiano Ronaldo and Lionel Messi domestic league stats",
        caption: "Modric vs. Messi & Ronaldo: Statistical comparison of volume scoring vs. midfield control.",
        width: 1500,
        height: 816,
        afterParagraph: 19
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-13.png",
        alt: "Modric vs Ronaldo and Messi domestic league numbers table",
        caption: "Per-90 comparison across goals, assists, shots, key passes, and dribble success.",
        width: 1500,
        height: 1023,
        afterParagraph: 20
      },
      {
        src: "/assets/journalism/2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers/figure-14.png",
        alt: "Mohamed Salah vs Luka Modric attacking metrics",
        caption: "Salah vs. Modric: Historic Premier League goalscoring volume vs. creative control.",
        width: 1500,
        height: 815,
        afterParagraph: 23
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/jared_goff.pdf",
    contentFile: "bust-to-beast-the-jared-goff-story.txt",
    images: [
      {
        src: "/assets/journalism/bust-to-beast-the-jared-goff-story/figure-02.png",
        alt: "Jared Goff year-over-year passing efficiency: 2016 vs 2017 vs 2018",
        caption: "Jared Goff's statistical surge in completion percentage, yards per attempt, and passer rating.",
        width: 607,
        height: 439,
        afterParagraph: 2
      },
      {
        src: "/assets/journalism/bust-to-beast-the-jared-goff-story/figure-03.png",
        alt: "Passing stats comparison table for Jared Goff",
        caption: "Year-over-year comparison showing dramatic jump in touchdown rate and reduction in interceptions.",
        width: 607,
        height: 439,
        afterParagraph: 3
      },
      {
        src: "/assets/journalism/bust-to-beast-the-jared-goff-story/figure-04.png",
        alt: "Rams Offensive Efficiency Rank (2016 vs 2017-18)",
        caption: "Rams offensive rankings jump from 32nd in 2016 to top-3 in 2017 and 2018.",
        width: 1336,
        height: 1058,
        afterParagraph: 6
      },
      {
        src: "/assets/journalism/bust-to-beast-the-jared-goff-story/figure-05.png",
        alt: "Play action passing efficiency among top NFL quarterbacks",
        caption: "Play-action passing efficiency: Goff led the NFL in play-action yards per attempt in 2018.",
        width: 1028,
        height: 722,
        afterParagraph: 12
      },
      {
        src: "/assets/journalism/bust-to-beast-the-jared-goff-story/figure-07.png",
        alt: "Deep ball passing accuracy (>20 yards downfield) among NFL quarterbacks",
        caption: "Deep passing accuracy (>20 yards downfield) comparing Goff to league leaders.",
        width: 607,
        height: 439,
        afterParagraph: 17
      },
      {
        src: "/assets/journalism/bust-to-beast-the-jared-goff-story/figure-08.png",
        alt: "Deep ball completion and touchdown efficiency metrics",
        caption: "Breakdown of deep-ball attempts, completion rate, and touchdown-to-interception ratio.",
        width: 607,
        height: 439,
        afterParagraph: 18
      },
      {
        src: "/assets/journalism/bust-to-beast-the-jared-goff-story/figure-10.png",
        alt: "Next Gen Stats: Time to Throw vs Passer Rating",
        caption: "Next Gen Stats correlation showing Goff's elite passer rating when throwing in rhythm.",
        width: 1408,
        height: 1048,
        afterParagraph: 22
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/defense_modern_nfl.pdf",
    contentFile: "defense-in-the-modern-nfl-or-lack-thereof.txt",
    images: [
      {
        src: "/assets/journalism/defense-in-the-modern-nfl-or-lack-thereof/figure-02.png",
        alt: "NFL total offensive points over the last 60 years",
        caption: "Total offensive points scored across NFL history showing a steady long-term increase.",
        width: 1500,
        height: 709,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/defense-in-the-modern-nfl-or-lack-thereof/figure-03.png",
        alt: "Defensive Pass Interference calls per pass attempt table",
        caption: "Defensive Pass Interference ratio narrowing steadily from 2008 to 2011.",
        width: 663,
        height: 238,
        afterParagraph: 11
      },
      {
        src: "/assets/journalism/defense-in-the-modern-nfl-or-lack-thereof/figure-04.png",
        alt: "Next Gen Stats passing chart for Brock Osweiler against the Bears",
        caption: "Next Gen Stats pass chart illustrating completions and touchdowns relative to the line of scrimmage.",
        width: 1340,
        height: 934,
        afterParagraph: 13
      },
      {
        src: "/assets/journalism/defense-in-the-modern-nfl-or-lack-thereof/figure-06.png",
        alt: "Historical first downs per team per game (Pass vs Run, 1925-2018)",
        caption: "Historical first downs per team per game: Passing first downs overtook rushing in modern NFL eras.",
        width: 1200,
        height: 738,
        afterParagraph: 17
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/summer_ball.pdf",
    contentFile: "can-summer-ball-indicate-professional-success.txt",
    images: [
      {
        src: "/assets/journalism/can-summer-ball-indicate-professional-success/figure-01.png",
        alt: "Cape Cod Baseball League OPS vs Minor League OPS regression",
        caption: "Linear regression model relating Cape Cod League OPS to subsequent professional Minor League OPS.",
        width: 600,
        height: 417,
        afterParagraph: 4
      },
      {
        src: "/assets/journalism/can-summer-ball-indicate-professional-success/figure-02.png",
        alt: "Cape Cod Baseball League RBI vs Minor League RBI regression",
        caption: "Cape Cod League RBI vs. Minor League RBI comparison showing higher variance.",
        width: 600,
        height: 417,
        afterParagraph: 7
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/lakers_young_core.pdf",
    contentFile: "keys-to-success-for-the-young-lakers-core.txt",
    images: [
      {
        src: "/assets/journalism/keys-to-success-for-the-young-lakers-core/figure-02.png",
        alt: "Game Score distributions for Josh Hart, Brandon Ingram, and Kyle Kuzma",
        caption: "Game Score distributions across the 2017–2018 season for Hart, Ingram, and Kuzma.",
        width: 864,
        height: 593,
        afterParagraph: 8
      },
      {
        src: "/assets/journalism/keys-to-success-for-the-young-lakers-core/figure-03.png",
        alt: "Mean Game Scores for young Lakers players",
        caption: "Mean Game Score comparison across Lonzo Ball, Josh Hart, Brandon Ingram, and Kyle Kuzma.",
        width: 851,
        height: 551,
        afterParagraph: 9
      },
      {
        src: "/assets/journalism/keys-to-success-for-the-young-lakers-core/figure-05.png",
        alt: "Multiple linear regression coefficients for predicting Game Score",
        caption: "Regression model coefficients identifying statistically significant positive and negative variables.",
        width: 793,
        height: 413,
        afterParagraph: 14
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/relievers.pdf",
    contentFile: "relievers-in-today-s-mlb.txt",
    images: [
      {
        src: "/assets/journalism/relievers-in-today-s-mlb/figure-02.png",
        alt: "2011 MLB relief pitcher contract rankings",
        caption: "Top relief pitcher contract values in 2011.",
        width: 1288,
        height: 794,
        afterParagraph: 3
      },
      {
        src: "/assets/journalism/relievers-in-today-s-mlb/figure-03.png",
        alt: "2018 MLB relief pitcher contract rankings",
        caption: "Top relief pitcher contract values in 2018, led by Aroldis Chapman and Kenley Jansen.",
        width: 1300,
        height: 788,
        afterParagraph: 4
      },
      {
        src: "/assets/journalism/relievers-in-today-s-mlb/figure-04.png",
        alt: "MLB league-wide reliever usage from 2008 to 2018",
        caption: "Cumulative reliever innings pitched and percentage of team innings (2008–2018).",
        width: 1079,
        height: 362,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/relievers-in-today-s-mlb/figure-05.png",
        alt: "Workload vs ERA scatterplots for MLB relievers in 2008 and 2018",
        caption: "Workload (IP) vs. ERA scatterplots showing high year-over-year performance volatility.",
        width: 920,
        height: 318,
        afterParagraph: 7
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/uefa.pdf",
    contentFile: "how-effective-is-a-possession-based-play-style-in-the-uefa-champions-league.txt",
    images: [
      {
        src: "/assets/journalism/how-effective-is-a-possession-based-play-style-in-the-uefa-champions-league/figure-02.png",
        alt: "Possession percentage per game vs tournament stage reached in 2017-18 UCL",
        caption: "Possession percentage vs. tournament stage reached in the 2017–18 Champions League.",
        width: 741,
        height: 355,
        afterParagraph: 6
      },
      {
        src: "/assets/journalism/how-effective-is-a-possession-based-play-style-in-the-uefa-champions-league/figure-03.png",
        alt: "Knockout stage qualification and stage reached coding",
        caption: "Stage reached coding and team qualification breakdown.",
        width: 651,
        height: 257,
        afterParagraph: 7
      },
      {
        src: "/assets/journalism/how-effective-is-a-possession-based-play-style-in-the-uefa-champions-league/figure-04.png",
        alt: "Shots per game vs stage reached",
        caption: "Shots created per game vs. tournament progression depth.",
        width: 425,
        height: 413,
        afterParagraph: 8
      },
      {
        src: "/assets/journalism/how-effective-is-a-possession-based-play-style-in-the-uefa-champions-league/figure-05.png",
        alt: "Goals per game vs stage reached",
        caption: "Goals scored per game vs. tournament stage reached.",
        width: 704,
        height: 350,
        afterParagraph: 9
      },
      {
        src: "/assets/journalism/how-effective-is-a-possession-based-play-style-in-the-uefa-champions-league/figure-07.png",
        alt: "Key passes, long balls, and short passing rates by possession tier",
        caption: "Passing style breakdown: Short passes, long balls, and key passes by possession percentage.",
        width: 703,
        height: 585,
        afterParagraph: 13
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/anthony_davis.pdf",
    contentFile: "why-anthony-davis-and-the-pelicans-failed.txt",
    images: [
      {
        src: "/assets/journalism/why-anthony-davis-and-the-pelicans-failed/figure-02.png",
        alt: "Adrian Wojnarowski ESPN trade notification graphic",
        caption: "Adrian Wojnarowski report on Anthony Davis informing the Pelicans of his trade request in January 2019.",
        width: 968,
        height: 494,
        afterParagraph: 1
      },
      {
        src: "/assets/journalism/why-anthony-davis-and-the-pelicans-failed/figure-03.png",
        alt: "Net ratings of NBA team duos compared to Anthony Davis and Jrue Holiday",
        caption: "Net ratings: Davis & Holiday (+7.4) performed on par with the league's top duos.",
        width: 1600,
        height: 1255,
        afterParagraph: 9
      },
      {
        src: "/assets/journalism/why-anthony-davis-and-the-pelicans-failed/figure-04.png",
        alt: "Pelicans win percentage in close games vs NBA average",
        caption: "Win percentage in games decided by 5 points or less (Pelicans ranked 29th).",
        width: 1600,
        height: 1371,
        afterParagraph: 15
      },
      {
        src: "/assets/journalism/why-anthony-davis-and-the-pelicans-failed/figure-05.png",
        alt: "Pelicans cumulative plus-minus in close games",
        caption: "Cumulative plus-minus in clutch situations across all 30 NBA franchises.",
        width: 1600,
        height: 1216,
        afterParagraph: 16
      },
      {
        src: "/assets/journalism/why-anthony-davis-and-the-pelicans-failed/figure-06.png",
        alt: "Field goal percentage in close games across the NBA",
        caption: "Field goal percentage in clutch situations comparing New Orleans to league leaders.",
        width: 1600,
        height: 1281,
        afterParagraph: 17
      },
      {
        src: "/assets/journalism/why-anthony-davis-and-the-pelicans-failed/figure-07.png",
        alt: "Pelicans 3-point shooting and spacing ranking compared to league average",
        caption: "3-point shooting volume and efficiency: New Orleans lacked floor spacing around Davis.",
        width: 1600,
        height: 1316,
        afterParagraph: 18
      }
    ]
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
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/goalkeeper_passing.pdf",
    contentFile: "goalkeeper-passing-what-s-been-done-so-far.txt",
    images: [
      {
        src: "/assets/journalism/goalkeeper-passing-what-s-been-done-so-far/figure-02.png",
        alt: "Goalkeeper match pass distribution visualization",
        caption: "Spatial pass breakdown illustrating distribution patterns and passing volume.",
        width: 948,
        height: 960,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/goalkeeper-passing-what-s-been-done-so-far/figure-03.png",
        alt: "Goalkeeper pass distribution map by pitch zone",
        caption: "Passing network and goalkeeper distribution map (Manchester City vs. Liverpool, Opta data).",
        width: 1539,
        height: 528,
        afterParagraph: 12
      },
      {
        src: "/assets/journalism/goalkeeper-passing-what-s-been-done-so-far/figure-04.png",
        alt: "Expected pass completion rate by distance and pressure level",
        caption: "Expected pass completion rates across different pitch zones and receiver pressure states.",
        width: 567,
        height: 322,
        afterParagraph: 15
      },
      {
        src: "/assets/journalism/goalkeeper-passing-what-s-been-done-so-far/figure-05.png",
        alt: "Mobile and web goalkeeper distribution event tagger",
        caption: "Event tagging interface capturing pass origin, target recipient, and defensive pressure.",
        width: 750,
        height: 1334,
        afterParagraph: 18
      },
      {
        src: "/assets/journalism/goalkeeper-passing-what-s-been-done-so-far/figure-06.png",
        alt: "Interactive R Shiny interface for goalkeeper passing analysis",
        caption: "R Shiny interface for tagging, filtering, and evaluating goalkeeper distribution decisions.",
        width: 665,
        height: 649,
        afterParagraph: 21
      }
    ]
  },
  {
    title: "Beyond the Standings: Using Data to Predict the NBA Playoff Race",
    authors: ["Aarnav Dharia", "Aditya Malhotra", "Samir Joshi"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Basketball",
    readTime: 5,
  },
  {
    title: "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics",
    authors: ["Ella Hinkle", "Taylor Fenton"],
    date: "Jan 1, 2026",
    year: 2026,
    sport: "Gymnastics",
    readTime: 5,
  },
  {
    title: "Why are the NBA ratings down?",
    authors: ["Charlie Wang"],
    date: "Dec 31, 2025",
    year: 2025,
    sport: "Basketball",
    readTime: 13,
  },
  {
    title: 'Are the "Uncs" Holding Back the NBA?',
    authors: ["Yuri Jung", "Evana Sharma", "Chloe Lee"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Basketball",
    readTime: 7,
    summary: "An analysis of how roster age relates to NBA team performance, using recent seasons to compare average team age with winning and shooting indicators.",
    techStack: ["NBA roster data", "Team age", "Win percentage"],
    content: [
      { type: "heading", text: "Introduction" },
      {
        type: "paragraph",
        text: "Over the recent decades, the National Basketball Association (NBA) has evolved in its pace, playing style, and athlete development. NBA team rosters are built with players of different ages, ranging from rookies to veterans, and each group brings different skills to the team. Veteran players bring leadership, decision-making, and playoff experience, while younger players contribute speed and versatility. Some franchises prioritize youth development and athleticism, while others target veterans for a more reliable, skilled core. In a league that continues to focus on the younger generation, can older players still keep up with the changing pace of the game?"
      },
      {
        type: "paragraph",
        text: "The Houston Rockets were the second-youngest team in the 2022-2023 season, with an average team age of 24, and finished with a 0.268 win percentage. During the following offseason, the Rockets altered the team's composition by signing Fred VanVleet, who was entering his 8th season, and Dillon Brooks, who was entering his 7th season. The addition of these two players brought more experience, leadership, and guidance, gained through years in the league, into the lineup and contributed to an increase in the Rockets' average team age to 26.2 years. The impact was noticeable - in the 2023-2024 season, the Rockets achieved a 0.500 win percentage, nearly doubling their success from the previous season. Age may not be the only factor contributing to improvement, but it raises the question: how does average age affect team performance in the NBA?"
      },
      {
        type: "paragraph",
        text: "To explore this question, we analyze data from the 2021-2022, 2022-2023, and 2023-2024 NBA seasons."
      },
      { type: "heading", text: "Terms to Know" },
      {
        type: "table",
        columns: ["Term", "Definition"],
        rows: [
          ["Average Team Age", "Mean age of all players on the roster"],
          ["Win Percentage", "Total wins divided by total games played"],
          ["Field Goal Percentage (FG%)", "Total two and three pointers made divided by total attempted field goals"]
        ]
      }
    ],
  },
  {
    title: "Which Quarterbacks have been Historically Great against the Blitz?",
    authors: ["Devon Yu", "Nathan Yee", "Ethan Chan", "Evan Mock"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Football",
    readTime: 12,
  },
  {
    title: "The Credit Goes to the Wrong People",
    authors: ["Van Avanesian", "Ricky Cai", "Jayden Kim", "Justin Herr"],
    date: "Mar 27, 2026",
    year: 2026,
    sport: "Baseball",
    readTime: 10,
  }
];
