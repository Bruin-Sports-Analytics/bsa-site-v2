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

function nativeArchiveArticle(slug: string, figures: Array<[number, number]>): Pick<JournalismArticle, "contentFile" | "images"> {
  return {
    contentFile: `${slug}.txt`,
    images: figures.map(([width, height], index) => ({
      src: `/assets/journalism/${slug}/figure-${String(index + 1).padStart(2, "0")}.png`,
      alt: `Figure ${index + 1} from the original article.`,
      width,
      height,
      afterParagraph: 1 + index * 3
    }))
  };
}

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
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/josh-rosen.png",
        alt: "Josh Rosen drops back to pass for UCLA.",
        caption: "Josh Rosen was one of the top quarterback prospects in the 2018 NFL Draft.",
        width: 1400,
        height: 788,
        afterParagraph: 1
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/kolton-miller.png",
        alt: "Kolton Miller blocks during a UCLA football game.",
        caption: "Kolton Miller's size and athleticism helped push him into first-round consideration.",
        width: 1140,
        height: 761,
        afterParagraph: 4
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/broad-jump-chart.png",
        alt: "Chart comparing offensive linemen broad jump measurements at the NFL Combine.",
        caption: "Miller led the offensive linemen group in broad jump distance.",
        width: 585,
        height: 233,
        afterParagraph: 5
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/jordan-lasley.png",
        alt: "Jordan Lasley runs with the football for UCLA.",
        caption: "Jordan Lasley brought explosiveness to UCLA's receiving corps.",
        width: 850,
        height: 559,
        afterParagraph: 7
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/scott-quessenberry.png",
        alt: "Scott Quessenberry lines up for UCLA.",
        caption: "Scott Quessenberry anchored the Bruins' offensive line.",
        width: 1200,
        height: 677,
        afterParagraph: 10
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/vertical-jump-chart.png",
        alt: "Chart comparing offensive linemen vertical jump measurements at the NFL Combine.",
        caption: "Quessenberry ranked near the top of the offensive line vertical jump group.",
        width: 646,
        height: 280,
        afterParagraph: 11
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/kenny-young.png",
        alt: "Kenny Young gestures during a UCLA football game.",
        caption: "Kenny Young combined production, versatility, and special teams value.",
        width: 600,
        height: 440,
        afterParagraph: 13
      },
      {
        src: "/assets/journalism/nfl-draft-2018-bruin-prospects/career-tackles-chart.png",
        alt: "Chart of UCLA football career tackle leaders from 2005 onward.",
        caption: "Young ranked near the top of UCLA's career tackles list.",
        width: 385,
        height: 234,
        afterParagraph: 14
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
    ...nativeArchiveArticle("why-has-alexander-zverev-failed-to-deliver-at-grand-slams", [[1252, 764], [818, 760], [1168, 602], [1048, 684], [1178, 632], [864, 467], [1494, 478], [1028, 734], [798, 191], [942, 565]])
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
    ...nativeArchiveArticle("early-overachievers-the-2018-oakland-athletics", [[525, 350], [345, 483]])
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
    ...nativeArchiveArticle("bsa-exclusive-our-journey-through-research", [[579, 337], [1090, 636], [1090, 636], [1090, 636], [1240, 926], [1212, 916], [707, 182], [1000, 1000], [500, 750], [457, 429], [457, 429], [750, 500], [451, 276], [451, 285]])
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
    ...nativeArchiveArticle("the-nba-s-perfect-game-by-one-of-basketball-s-rising-superstars", [[1500, 959], [1756, 1248], [1280, 720], [1859, 1525], [2623, 1449]])
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
    ...nativeArchiveArticle("do-summary-statistics-really-mean-anything-in-tennis", [[600, 720], [1600, 966], [1600, 894], [750, 499]])
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
    ...nativeArchiveArticle("can-the-toronto-maple-leafs-pay-up", [[971, 576], [971, 576], [971, 576], [971, 575], [971, 576], [971, 576], [971, 576], [971, 575], [971, 576]])
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
    ...nativeArchiveArticle("2018-ballon-d-or-a-look-at-the-contenders-and-their-numbers", [[912, 513], [1500, 843], [1235, 694], [1600, 900], [1200, 675], [1500, 816], [1500, 1034], [1576, 1105], [1500, 816], [1500, 806], [1500, 1032], [1500, 816], [1500, 1023], [1500, 815]])
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
    ...nativeArchiveArticle("bust-to-beast-the-jared-goff-story", [[1500, 1013], [607, 439], [607, 439], [1336, 1058], [1028, 722], [1280, 720], [607, 439], [607, 439], [1280, 720], [1408, 1048]])
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
    ...nativeArchiveArticle("defense-in-the-modern-nfl-or-lack-thereof", [[929, 619], [1500, 709], [663, 238], [1340, 934], [1280, 720], [1200, 738]])
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
    ...nativeArchiveArticle("can-summer-ball-indicate-professional-success", [[600, 417], [600, 417]])
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
    ...nativeArchiveArticle("keys-to-success-for-the-young-lakers-core", [[931, 549], [864, 593], [851, 551], [932, 545], [793, 413]])
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
    ...nativeArchiveArticle("relievers-in-today-s-mlb", [[630, 470], [1288, 794], [1300, 788], [1079, 362], [920, 318]])
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
    ...nativeArchiveArticle("how-effective-is-a-possession-based-play-style-in-the-uefa-champions-league", [[1280, 720], [741, 355], [651, 257], [425, 413], [704, 350], [1000, 625], [703, 585]])
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
    ...nativeArchiveArticle("why-anthony-davis-and-the-pelicans-failed", [[960, 540], [968, 494], [1600, 1255], [1600, 1371], [1600, 1216], [1600, 1281], [1600, 1316]])
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
    ...nativeArchiveArticle("goalkeeper-passing-what-s-been-done-so-far", [[1280, 720], [948, 960], [1539, 528], [567, 322], [750, 1334], [665, 649]])
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
  },
];
