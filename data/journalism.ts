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
    "title": "Are the \"Uncs\" Holding Back the NBA?",
    "authors": [
      "Yuri Jung",
      "Evana Sharma",
      "Chloe Lee"
    ],
    "date": "Mar 27, 2026",
    "year": 2026,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "Over the recent decades, the National Basketball Association (NBA) has evolved in its pace, playing style, and athlete development. NBA team rosters are built with players of different ages, ranging from rookies to veterans, and each group brings different skills to the team....",
    "contentFile": "are-the-uncs-holding-back-the-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/are-the-uncs-holding-back-the-nba/figure-01.png",
        "alt": "Figure 1: Average Team Age vs. Win Percentage by Season (2021 - 2024)",
        "caption": "Figure 1: Average Team Age vs. Win Percentage by Season (2021 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/are-the-uncs-holding-back-the-nba/figure-02.png",
        "alt": "Figure 2: Average Team Age vs. Field Goal Percentage (FG%) by Season (2021 - 2024)",
        "caption": "Figure 2: Average Team Age vs. Field Goal Percentage (FG%) by Season (2021 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/are-the-uncs-holding-back-the-nba/figure-03.png",
        "alt": "Figure 3: Average Team Age vs. Three-Point Percentage (3P%) by Season (2021 - 2024)",
        "caption": "Figure 3: Average Team Age vs. Three-Point Percentage (3P%) by Season (2021 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/are-the-uncs-holding-back-the-nba/figure-04.png",
        "alt": "Figure 4: Average Team Age vs. Pace by Season (2021 - 2024)",
        "caption": "Figure 4: Average Team Age vs. Pace by Season (2021 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/are-the-uncs-holding-back-the-nba/figure-05.png",
        "alt": "Figure 5: Average Team Age vs. Offensive Efficiency by Season (2021 - 2024)",
        "caption": "Figure 5: Average Team Age vs. Offensive Efficiency by Season (2021 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/are-the-uncs-holding-back-the-nba/figure-06.png",
        "alt": "Figure 6: Average Team Age vs. Defensive Efficiency by Season (2021 - 2024)",
        "caption": "Figure 6: Average Team Age vs. Defensive Efficiency by Season (2021 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/are-the-uncs-holding-back-the-nba/figure-07.png",
        "alt": "Figure 7: Average Team Age vs. Expected Win Percentage",
        "caption": "Figure 7: Average Team Age vs. Expected Win Percentage",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "Which Quarterbacks have been Historically Great against the Blitz?",
    "authors": [
      "Devon Yu",
      "Nathan Yee",
      "Ethan Chan",
      "Evan Mock"
    ],
    "date": "Mar 27, 2026",
    "year": 2026,
    "sport": "Football",
    "readTime": 16,
    "summary": "In the modern NFL, play-calling success on both sides of the ball is often decided within seconds of the ball being snapped. For a defensive coordinator, the blitz is the ultimate gamble. Bringing an extra pass rusher offers a chance to blow up the play early, but risks...",
    "contentFile": "which-quarterbacks-have-been-historically-great-against-the-blitz.txt",
    "images": [
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-01.png",
        "alt": "Figure 1: QB Processing Efficiency vs. The Blitz (2016 - 2024)",
        "caption": "Figure 1: QB Processing Efficiency vs. The Blitz (2016 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-02.png",
        "alt": "Figure 2: Processing Archetypes vs. the Blitz (2016 - 2024)",
        "caption": "Figure 2: Processing Archetypes vs. the Blitz (2016 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-03.png",
        "alt": "Figure 3: Blitz Pressure vs. Sack Rate (2016 - 2024)",
        "caption": "Figure 3: Blitz Pressure vs. Sack Rate (2016 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-04.png",
        "alt": "Figure 4: Success Rate vs. Simulated Pressure (2016 - 2024)",
        "caption": "Figure 4: Success Rate vs. Simulated Pressure (2016 - 2024)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-05.png",
        "alt": "Figure 5: Top 10% of QBs vs. Simulated Pressure",
        "caption": "Figure 5: Top 10% of QBs vs. Simulated Pressure",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-06.png",
        "alt": "Figure 6: Bottom 10% of QBs vs. Simulated Pressure",
        "caption": "Figure 6: Bottom 10% of QBs vs. Simulated Pressure",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-07.png",
        "alt": "Which Quarterbacks have been Historically Great against the Blitz? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 60
      },
      {
        "src": "/assets/journalism/which-quarterbacks-have-been-historically-great-against-the-blitz/figure-08.png",
        "alt": "Figure 7: Top 10 best blitz processors between 2016 - 2024",
        "caption": "Figure 7: Top 10 best blitz processors between 2016 - 2024",
        "width": 1200,
        "height": 700,
        "afterParagraph": 67
      }
    ]
  },
  {
    "title": "The Credit Goes to the Wrong People",
    "authors": [
      "Van Avanesian",
      "Ricky Cai",
      "Jayden Kim",
      "Justin Herr"
    ],
    "date": "Mar 27, 2026",
    "year": 2026,
    "sport": "General",
    "readTime": 12,
    "summary": "WESTERN CONFERENCE TOP 8 · TWO-SEASON EFFICIENCY ANALYSIS Kawhi Leonard played 68 games last season. He averaged 23.5 points. He was the best player on a team that won 50 games. And the dominant frame around him, in every national conversation, was durability: injury history,...",
    "contentFile": "the-credit-goes-to-the-wrong-people.txt",
    "images": [
      {
        "src": "/assets/journalism/the-credit-goes-to-the-wrong-people/figure-01.jpg",
        "alt": "Figure 1: Efficiency Rankings (2024 - 25)",
        "caption": "Figure 1: Efficiency Rankings (2024 - 25)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/the-credit-goes-to-the-wrong-people/figure-02.png",
        "alt": "Figure 2: The Narrative Gap (2024 - 25)",
        "caption": "Figure 2: The Narrative Gap (2024 - 25)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/the-credit-goes-to-the-wrong-people/figure-03.png",
        "alt": "Figure 3: Year-Over-Year Movement (2024-25 --> 2025-26)",
        "caption": "Figure 3: Year-Over-Year Movement (2024-25 --> 2025-26)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/the-credit-goes-to-the-wrong-people/figure-04.jpg",
        "alt": "Figure 4: Two-Year Consistency",
        "caption": "Figure 4: Two-Year Consistency",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "Beyond the Standings: Using Data to Predict the NBA Playoff Race",
    "authors": [
      "Aarnav Dharia",
      "Aditya Malhotra",
      "Samir Joshi"
    ],
    "date": "Mar 27, 2026",
    "year": 2026,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "With about 20 games left in the 2025–26 NBA regular season, the standings and data reveal contrary tales. More specifically, two teams have distinguished themselves from the rest of the competition, and several others are winning games their numbers say they shouldn't. Among...",
    "contentFile": "beyond-the-standings-using-data-to-predict-the-nba-playoff-race.txt",
    "images": [
      {
        "src": "/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-01.png",
        "alt": "Figure 1: Eastern Conference Seeding Trajectory for the top 8 seeds (as of March 2026)",
        "caption": "Figure 1: Eastern Conference Seeding Trajectory for the top 8 seeds (as of March 2026)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-02.png",
        "alt": "Figure 2: Western Conference Seeding Trajectory for the top 8 seeds (as of March 2026)",
        "caption": "Figure 2: Western Conference Seeding Trajectory for the top 8 seeds (as of March 2026)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-03.png",
        "alt": "Figure 3: Predicted vs. Actual Wins Model for both conferences",
        "caption": "Figure 3: Predicted vs. Actual Wins Model for both conferences",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-04.png",
        "alt": "Figure 4: Remaining Schedule Difficulty vs. Current Win %",
        "caption": "Figure 4: Remaining Schedule Difficulty vs. Current Win %",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/beyond-the-standings-using-data-to-predict-the-nba-playoff-race/figure-05.png",
        "alt": "Figure 5: 2025-26 NBA Projected Final Standings",
        "caption": "Figure 5: 2025-26 NBA Projected Final Standings",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      }
    ]
  },
  {
    "title": "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics",
    "authors": [
      "Ella Hinkle",
      "Taylor Fenton"
    ],
    "date": "Jan 2, 2026",
    "year": 2026,
    "sport": "Gymnastics",
    "readTime": 6,
    "summary": "Here at UCLA, all it takes is a trip to Pauley Pavilion to see an Olympic athlete compete. Watching Jordan Chiles’ thrilling routines and dominant performance is exhilarating, and the many perfect “10s” (or scores very close) she has put up indicate judges are impressed, too....",
    "contentFile": "as-the-bar-rises-scores-fall-inside-the-new-normal-of-olympic-gymnastics.txt",
    "images": [
      {
        "src": "/assets/journalism/as-the-bar-rises-scores-fall-inside-the-new-normal-of-olympic-gymnastics/figure-01.png",
        "alt": "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/as-the-bar-rises-scores-fall-inside-the-new-normal-of-olympic-gymnastics/figure-02.png",
        "alt": "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/as-the-bar-rises-scores-fall-inside-the-new-normal-of-olympic-gymnastics/figure-03.png",
        "alt": "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/as-the-bar-rises-scores-fall-inside-the-new-normal-of-olympic-gymnastics/figure-04.png",
        "alt": "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/as-the-bar-rises-scores-fall-inside-the-new-normal-of-olympic-gymnastics/figure-05.png",
        "alt": "As the Bar Rises, Scores Fall: Inside the New Normal of Olympic Gymnastics figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "The Master Foul Baiters of the NBA",
    "authors": [
      "Nicholas Shinghal",
      "Colin Granger",
      "Moulik Chatterjee"
    ],
    "date": "Jan 1, 2026",
    "year": 2026,
    "sport": "Basketball",
    "readTime": 16,
    "summary": "Controversy surrounding “foul-baiting” in the NBA perennially permeates discourse around the Association, especially in the late spring, when MVP awards are allocated and playoff competition stiffens. With the increased defensive intensity of playoff basketball and the lower...",
    "contentFile": "the-master-foul-baiters-of-the-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-01.png",
        "alt": "The Master Foul Baiters of the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-02.png",
        "alt": "The Master Foul Baiters of the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-03.png",
        "alt": "The Master Foul Baiters of the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-04.png",
        "alt": "The Master Foul Baiters of the NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-05.png",
        "alt": "The Master Foul Baiters of the NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-06.png",
        "alt": "The Master Foul Baiters of the NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-07.png",
        "alt": "The Master Foul Baiters of the NBA figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-08.png",
        "alt": "The Master Foul Baiters of the NBA figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-09.png",
        "alt": "The Master Foul Baiters of the NBA figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-10.png",
        "alt": "The Master Foul Baiters of the NBA figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-11.png",
        "alt": "The Master Foul Baiters of the NBA figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-12.png",
        "alt": "The Master Foul Baiters of the NBA figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-13.png",
        "alt": "The Master Foul Baiters of the NBA figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-14.png",
        "alt": "The Master Foul Baiters of the NBA figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-15.png",
        "alt": "The Master Foul Baiters of the NBA figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-16.png",
        "alt": "The Master Foul Baiters of the NBA figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-17.png",
        "alt": "The Master Foul Baiters of the NBA figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/the-master-foul-baiters-of-the-nba/figure-18.png",
        "alt": "The Master Foul Baiters of the NBA figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      }
    ]
  },
  {
    "title": "Why are the NBA ratings down?",
    "authors": [
      "Charlie Wang"
    ],
    "date": "Jan 1, 2026",
    "year": 2026,
    "sport": "Basketball",
    "readTime": 16,
    "summary": "The NBA, home to over 500 elite players across 30 teams, offers an 82-game regular season followed by a high-stakes playoff run. In recent decades, fans were captivated by iconic showdowns—LeBron vs. Curry, Kobe vs. the Celtics. But recently, that excitement has faded. Fans...",
    "contentFile": "why-are-the-nba-ratings-down.txt",
    "images": [
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-01.png",
        "alt": "Why are the NBA ratings down? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-02.png",
        "alt": "Why are the NBA ratings down? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-03.png",
        "alt": "Why are the NBA ratings down? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-04.png",
        "alt": "Why are the NBA ratings down? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-05.png",
        "alt": "Why are the NBA ratings down? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-06.png",
        "alt": "Why are the NBA ratings down? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-07.png",
        "alt": "Why are the NBA ratings down? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      },
      {
        "src": "/assets/journalism/why-are-the-nba-ratings-down/figure-08.png",
        "alt": "Why are the NBA ratings down? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      }
    ]
  },
  {
    "title": "Predicting the 2025 NFL Draft Class",
    "authors": [
      "Jared Fong",
      "Harrison Jones"
    ],
    "date": "Dec 31, 2025",
    "year": 2025,
    "sport": "Football",
    "readTime": 6,
    "summary": "Predicting the success of college prospects in the NFL has been a difficult task for professional scouts and league analysts, and a perfect formula for evaluating talent has yet to be created. However, as there has become an even higher emphasis set on data analytics within...",
    "contentFile": "predicting-the-2025-nfl-draft-class.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting-the-2025-nfl-draft-class/figure-01.png",
        "alt": "Predicting the 2025 NFL Draft Class figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/predicting-the-2025-nfl-draft-class/figure-02.png",
        "alt": "Predicting the 2025 NFL Draft Class figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/predicting-the-2025-nfl-draft-class/figure-03.png",
        "alt": "Predicting the 2025 NFL Draft Class figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/predicting-the-2025-nfl-draft-class/figure-04.png",
        "alt": "Predicting the 2025 NFL Draft Class figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/predicting-the-2025-nfl-draft-class/figure-05.png",
        "alt": "Predicting the 2025 NFL Draft Class figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      }
    ]
  },
  {
    "title": "Where Do Professional Athletes Come From?",
    "authors": [
      "Anika Soitkar",
      "Elly Goan"
    ],
    "date": "Dec 30, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "As sports are a very prevalent aspect in a child's upbringing it has come to wonder whether a child's hometown has an impact on their probability of becoming a professional athlete. This sports article looks into the frequency of professional athletes based on their hometown...",
    "contentFile": "where-do-professional-athletes-come-from.txt",
    "images": [
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-01.png",
        "alt": "Where Do Professional Athletes Come From? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-02.png",
        "alt": "Where Do Professional Athletes Come From? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-03.png",
        "alt": "Where Do Professional Athletes Come From? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-04.png",
        "alt": "Where Do Professional Athletes Come From? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-05.png",
        "alt": "Where Do Professional Athletes Come From? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-06.png",
        "alt": "Where Do Professional Athletes Come From? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-07.png",
        "alt": "Where Do Professional Athletes Come From? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-08.png",
        "alt": "Where Do Professional Athletes Come From? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-09.png",
        "alt": "Where Do Professional Athletes Come From? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/where-do-professional-athletes-come-from/figure-10.png",
        "alt": "Where Do Professional Athletes Come From? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches?",
    "authors": [
      "Kailani Hoang",
      "Lila Midyett"
    ],
    "date": "Dec 29, 2025",
    "year": 2025,
    "sport": "Volleyball",
    "readTime": 5,
    "summary": "NCAA D1 Men’s Volleyball is a growing sport, attracting greater audiences every season. Collegiate volleyball matches consist of a best-of-five sets. Teams must win 3 sets to win the match, with sets going to 25 points, except for fifth sets, which are played to 15. In these...",
    "contentFile": "fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches.txt",
    "images": [
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-01.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-02.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-03.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-04.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-05.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-06.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-07.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/fifth-set-factors-what-determines-a-team-s-success-in-close-ncaa-d1-men-s-volleyball-matches/figure-08.png",
        "alt": "Fifth Set Factors: What determines a team’s success in close NCAA D1 Men’s Volleyball matches? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      }
    ]
  },
  {
    "title": "A Portal to Power: Has the Transfer Portal in the NIL Era Made NCAA Men’s Basketball More Top-Heavy?",
    "authors": [
      "Kevin Li",
      "Jason Cheung"
    ],
    "date": "Dec 28, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "By Kevin Li and Jason Cheung Over the past few years, the landscape of college basketball has shifted dramatically. Since the NCAA implemented the one-time transfer rule and the Name, Image, and Likeness (NIL) era began in July 2021, student-athletes have gained unprecedented...",
    "contentFile": "a-portal-to-power-has-the-transfer-portal-in-the-nil-era-made-ncaa-men-s-basketball-more-top-heavy.txt",
    "images": [
      {
        "src": "/assets/journalism/a-portal-to-power-has-the-transfer-portal-in-the-nil-era-made-ncaa-men-s-basketball-more-top-heavy/figure-01.png",
        "alt": "A Portal to Power: Has the Transfer Portal in the NIL Era Made NCAA Men’s Basketball More Top-Heavy? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/a-portal-to-power-has-the-transfer-portal-in-the-nil-era-made-ncaa-men-s-basketball-more-top-heavy/figure-02.png",
        "alt": "A Portal to Power: Has the Transfer Portal in the NIL Era Made NCAA Men’s Basketball More Top-Heavy? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/a-portal-to-power-has-the-transfer-portal-in-the-nil-era-made-ncaa-men-s-basketball-more-top-heavy/figure-03.png",
        "alt": "A Portal to Power: Has the Transfer Portal in the NIL Era Made NCAA Men’s Basketball More Top-Heavy? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/a-portal-to-power-has-the-transfer-portal-in-the-nil-era-made-ncaa-men-s-basketball-more-top-heavy/figure-04.png",
        "alt": "A Portal to Power: Has the Transfer Portal in the NIL Era Made NCAA Men’s Basketball More Top-Heavy? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/a-portal-to-power-has-the-transfer-portal-in-the-nil-era-made-ncaa-men-s-basketball-more-top-heavy/figure-05.png",
        "alt": "A Portal to Power: Has the Transfer Portal in the NIL Era Made NCAA Men’s Basketball More Top-Heavy? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      }
    ]
  },
  {
    "title": "Who Shows More Consistency Across Rounds in Women's Gymnastics?",
    "authors": [
      "Maya Thompson",
      "Christina Uong",
      "Nicole Chan",
      "Rachel Choi"
    ],
    "date": "Dec 27, 2025",
    "year": 2025,
    "sport": "Gymnastics",
    "readTime": 7,
    "summary": "In elite women's gymnastics, athletes typically compete either as all-around gymnasts, participating in all four apparatus events, or as specialists, focusing on excelling in one or two apparatuses. In this article, we explore how these two competitive pathways influence...",
    "contentFile": "who-shows-more-consistency-across-rounds-in-women-s-gymnastics.txt",
    "images": [
      {
        "src": "/assets/journalism/who-shows-more-consistency-across-rounds-in-women-s-gymnastics/figure-01.png",
        "alt": "Who Shows More Consistency Across Rounds in Women's Gymnastics? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/who-shows-more-consistency-across-rounds-in-women-s-gymnastics/figure-02.png",
        "alt": "Who Shows More Consistency Across Rounds in Women's Gymnastics? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/who-shows-more-consistency-across-rounds-in-women-s-gymnastics/figure-03.png",
        "alt": "Who Shows More Consistency Across Rounds in Women's Gymnastics? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/who-shows-more-consistency-across-rounds-in-women-s-gymnastics/figure-04.png",
        "alt": "Who Shows More Consistency Across Rounds in Women's Gymnastics? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/who-shows-more-consistency-across-rounds-in-women-s-gymnastics/figure-05.png",
        "alt": "Who Shows More Consistency Across Rounds in Women's Gymnastics? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/who-shows-more-consistency-across-rounds-in-women-s-gymnastics/figure-06.png",
        "alt": "Who Shows More Consistency Across Rounds in Women's Gymnastics? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      }
    ]
  },
  {
    "title": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance",
    "authors": [
      "Lucas Pichardo"
    ],
    "date": "Dec 26, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "The NBA infamously played a Taco Bell commercial during the Denver Nuggets’ selection of Nikola Jokic with the 41st overall pick in the 2013. The Washington Wizards called Tyrese Haliburton on draft night in 2020 to tell him they would select him with the 9th overall pick,...",
    "contentFile": "behind-the-board-a-statistical-deep-dive-into-nba-draft-performance.txt",
    "images": [
      {
        "src": "/assets/journalism/behind-the-board-a-statistical-deep-dive-into-nba-draft-performance/figure-01.png",
        "alt": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/behind-the-board-a-statistical-deep-dive-into-nba-draft-performance/figure-02.png",
        "alt": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/behind-the-board-a-statistical-deep-dive-into-nba-draft-performance/figure-03.png",
        "alt": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/behind-the-board-a-statistical-deep-dive-into-nba-draft-performance/figure-04.png",
        "alt": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/behind-the-board-a-statistical-deep-dive-into-nba-draft-performance/figure-05.png",
        "alt": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/behind-the-board-a-statistical-deep-dive-into-nba-draft-performance/figure-06.png",
        "alt": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/behind-the-board-a-statistical-deep-dive-into-nba-draft-performance/figure-07.png",
        "alt": "Behind the Board: A Statistical Deep Dive into NBA Draft Performance figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      }
    ]
  },
  {
    "title": "Can You Predict Sean McVay's Play Calling? Inside the Mind of a Genius",
    "authors": [
      "Raja Kavasseri",
      "Ryan Ralph",
      "Tony Lomeli"
    ],
    "date": "Dec 25, 2025",
    "year": 2025,
    "sport": "Football",
    "readTime": 8,
    "summary": "Few roles in football are as scrutinized—or as celebrated—as that of the play caller, and the NFL has seen its share of legendary minds orchestrating games like grandmasters. From the great Bill Belichick to the unpredictable Andy Reid, great play callers have shaped eras,...",
    "contentFile": "can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius.txt",
    "images": [
      {
        "src": "/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-01.png",
        "alt": "Can You Predict Sean McVay's Play Calling? Inside the Mind of a Genius figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-02.png",
        "alt": "Can You Predict Sean McVay's Play Calling? Inside the Mind of a Genius figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-03.png",
        "alt": "Can You Predict Sean McVay's Play Calling? Inside the Mind of a Genius figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-04.png",
        "alt": "Can You Predict Sean McVay's Play Calling? Inside the Mind of a Genius figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/can-you-predict-sean-mcvay-s-play-calling-inside-the-mind-of-a-genius/figure-05.png",
        "alt": "Can You Predict Sean McVay's Play Calling? Inside the Mind of a Genius figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "Do Bigger Pockets Lead to Greater Success?",
    "authors": [
      "Shayne Gangle",
      "Danny Lenney",
      "Eddie Mendel"
    ],
    "date": "Dec 24, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "College basketball is in the midst of a transformation. The NCAA’s introduction of the transfer portal in 2018 gave players more control over their careers, making it easier to move from team to team with little consequence. Then, in 2021, the introduction of Name, Image, and...",
    "contentFile": "do-bigger-pockets-lead-to-greater-success.txt",
    "images": [
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-01.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-02.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-03.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-04.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-05.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-06.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-07.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-08.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-09.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-10.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-11.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/do-bigger-pockets-lead-to-greater-success/figure-12.png",
        "alt": "Do Bigger Pockets Lead to Greater Success? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      }
    ]
  },
  {
    "title": "Evaluating NFL Kicker Performance",
    "authors": [
      "Sam Lieberman",
      "Bethany Kim"
    ],
    "date": "Apr 8, 2025",
    "year": 2025,
    "sport": "Football",
    "readTime": 13,
    "summary": "Kickers are among the most overlooked, scrutinized, and peculiar players in the NFL. Yet, the outcome of a game often comes down to execution on special teams. This raises a key question of how we should judge a kicker’s performance in terms of contribution towards team...",
    "contentFile": "evaluating-nfl-kicker-performance.txt",
    "images": [
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-01.png",
        "alt": "Evaluating NFL Kicker Performance figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-02.png",
        "alt": "Evaluating NFL Kicker Performance figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-03.png",
        "alt": "Evaluating NFL Kicker Performance figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-04.png",
        "alt": "Evaluating NFL Kicker Performance figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-05.png",
        "alt": "Evaluating NFL Kicker Performance figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-06.png",
        "alt": "Evaluating NFL Kicker Performance figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-07.png",
        "alt": "Evaluating NFL Kicker Performance figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-08.png",
        "alt": "Evaluating NFL Kicker Performance figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/evaluating-nfl-kicker-performance/figure-09.png",
        "alt": "Evaluating NFL Kicker Performance figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "Is the traditional pocket passer dead? : An in-depth analysis",
    "authors": [
      "Brandon Lim",
      "Ethan Chan",
      "Nathan Yee",
      "Devon Yu"
    ],
    "date": "Apr 6, 2025",
    "year": 2025,
    "sport": "Football",
    "readTime": 6,
    "summary": "The “pocket passer” refers to a quarterback who excels from throwing behind the offensive line, relying on their accuracy and strong decision-making abilities rather than mobility. Historically, the traditional quarterback has been modeled around the pocket passer archetype,...",
    "contentFile": "pocket-passer.txt",
    "images": [
      {
        "src": "/assets/journalism/pocket-passer/figure-01.png",
        "alt": "Is the traditional pocket passer dead? : An in-depth analysis figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/pocket-passer/figure-02.png",
        "alt": "Is the traditional pocket passer dead? : An in-depth analysis figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/pocket-passer/figure-03.png",
        "alt": "Is the traditional pocket passer dead? : An in-depth analysis figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "What We’re Not Measuring: Reimagining Analytics in Water Polo",
    "authors": [
      "Ian Turner"
    ],
    "date": "Apr 6, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 14,
    "summary": "Sports analytics is limited by what data can be recorded during a game. But as technology has advanced, so has the ability to find data in hard to reach places. For example, in basketball, defense had been a hard thing to measure - as the only defensive data recorded was...",
    "contentFile": "analytics-in-water-polo.txt",
    "images": [
      {
        "src": "/assets/journalism/analytics-in-water-polo/figure-01.jpg",
        "alt": "What We’re Not Measuring: Reimagining Analytics in Water Polo figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/analytics-in-water-polo/figure-02.png",
        "alt": "What We’re Not Measuring: Reimagining Analytics in Water Polo figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/analytics-in-water-polo/figure-03.png",
        "alt": "What We’re Not Measuring: Reimagining Analytics in Water Polo figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/analytics-in-water-polo/figure-04.png",
        "alt": "What We’re Not Measuring: Reimagining Analytics in Water Polo figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      }
    ]
  },
  {
    "title": "NBA Hustle: A Deep Dive",
    "authors": [
      "Grant Boydell",
      "Lucas Pichardo"
    ],
    "date": "Apr 6, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 15,
    "summary": "While basketball coaches preach a variety of different concepts, one is consistently harped on at all levels: hustle. Coaches love players that “do the little things”, such as playing hard defense, boxing out, and grabbing loose balls. Unfortunately, players that hustle in...",
    "contentFile": "nba-hustle.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-hustle/figure-01.png",
        "alt": "NBA Hustle: A Deep Dive figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-02.png",
        "alt": "NBA Hustle: A Deep Dive figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-03.png",
        "alt": "NBA Hustle: A Deep Dive figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-04.png",
        "alt": "NBA Hustle: A Deep Dive figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-05.png",
        "alt": "NBA Hustle: A Deep Dive figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-06.png",
        "alt": "NBA Hustle: A Deep Dive figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-07.png",
        "alt": "NBA Hustle: A Deep Dive figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-08.png",
        "alt": "NBA Hustle: A Deep Dive figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-09.png",
        "alt": "NBA Hustle: A Deep Dive figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-10.png",
        "alt": "NBA Hustle: A Deep Dive figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-11.png",
        "alt": "NBA Hustle: A Deep Dive figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-12.png",
        "alt": "NBA Hustle: A Deep Dive figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-13.png",
        "alt": "NBA Hustle: A Deep Dive figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-14.png",
        "alt": "NBA Hustle: A Deep Dive figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-15.png",
        "alt": "NBA Hustle: A Deep Dive figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-16.png",
        "alt": "NBA Hustle: A Deep Dive figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-17.png",
        "alt": "NBA Hustle: A Deep Dive figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-18.png",
        "alt": "NBA Hustle: A Deep Dive figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-19.png",
        "alt": "NBA Hustle: A Deep Dive figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-20.png",
        "alt": "NBA Hustle: A Deep Dive figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-21.png",
        "alt": "NBA Hustle: A Deep Dive figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-22.png",
        "alt": "NBA Hustle: A Deep Dive figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-23.png",
        "alt": "NBA Hustle: A Deep Dive figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-24.png",
        "alt": "NBA Hustle: A Deep Dive figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-25.png",
        "alt": "NBA Hustle: A Deep Dive figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-26.png",
        "alt": "NBA Hustle: A Deep Dive figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-27.png",
        "alt": "NBA Hustle: A Deep Dive figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-hustle/figure-28.png",
        "alt": "NBA Hustle: A Deep Dive figure 28",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "Hidden Gems or Long Shots?",
    "authors": [
      "Philbert Fan",
      "Naman Satija",
      "Stanley Xu"
    ],
    "date": "Apr 6, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "The National Basketball Association (NBA) draft is an annual event where teams select eligible players to join their rosters. Among the pool of talents, certain NBA teams have drafted prodigies that have defined dynasties—take, for example, the drafting of Tim Duncan by the...",
    "contentFile": "hidden-gems-long-shots.txt",
    "images": [
      {
        "src": "/assets/journalism/hidden-gems-long-shots/figure-01.png",
        "alt": "Figure 2: Number of Successful Players in Each Round",
        "caption": "Figure 2: Number of Successful Players in Each Round",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/hidden-gems-long-shots/figure-02.png",
        "alt": "Figure 3: Number of Successful Players in the Second Round",
        "caption": "Figure 3: Number of Successful Players in the Second Round",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/hidden-gems-long-shots/figure-03.png",
        "alt": "Figure 4: MI Scores for Target Variables",
        "caption": "Figure 4: MI Scores for Target Variables",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/hidden-gems-long-shots/figure-04.png",
        "alt": "   Figure 5: Key Metrics for Second Round Picks",
        "caption": "   Figure 5: Key Metrics for Second Round Picks",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/hidden-gems-long-shots/figure-05.png",
        "alt": "Figure 6: Player Origin of Second Round Picks on Success",
        "caption": "Figure 6: Player Origin of Second Round Picks on Success",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      }
    ]
  },
  {
    "title": "Analyzing the New-Look NFL Kickoff",
    "authors": [
      "Michael Zheng",
      "Michael Ji"
    ],
    "date": "Apr 6, 2025",
    "year": 2025,
    "sport": "Football",
    "readTime": 9,
    "summary": "In an effort to increase player safety and enhance game excitement, the NFL introduced a new set of kickoff rules for the 2024 season. Per the NFL rulebook, the major changes include: All players on the kicking team, except the kicker, must line up with one foot on the...",
    "contentFile": "new-look-nfl-kickoff.txt",
    "images": [
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-01.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-02.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-03.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-04.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-05.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-06.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-07.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-08.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-09.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-10.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-11.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-12.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-13.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/new-look-nfl-kickoff/figure-14.png",
        "alt": "Analyzing the New-Look NFL Kickoff figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      }
    ]
  },
  {
    "title": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL",
    "authors": [
      "Nicholas Shinghal",
      "Colin Granger",
      "Moulik Chatterjee"
    ],
    "date": "Apr 3, 2025",
    "year": 2025,
    "sport": "Football",
    "readTime": 18,
    "summary": "Saquon Barkley’s dominant 2024-25 NFL season has turned heads and significantly changed the discourse surrounding the running back position at the professional level. His season, alongside the campaigns of other ball-carriers including Derrick Henry and Josh Jacobs, has in...",
    "contentFile": "prevalence-and-effectiveness-running-back.txt",
    "images": [
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-01.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-02.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-03.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-04.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-05.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-06.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-07.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-08.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-09.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-10.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-11.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-12.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/prevalence-and-effectiveness-running-back/figure-13.png",
        "alt": "Saquon Crushed the Records. Are Running Backs “Back?”: An Analysis of the Prevalence and Effectiveness of Running-Back-By-Committee in the NFL figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "How does Back to Backs impact the NBA?",
    "authors": [
      "Jared Fong",
      "Shawn Reznikov",
      "Harrison Jones"
    ],
    "date": "Apr 3, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "Across all professional sports leagues, the National Basketball Association is notorious for demanding one of the more backbreaking schedules, requiring its teams to play in an 82-game regular season over just 6 months. Because of the large number of games played in a...",
    "contentFile": "how-does-back-to-backs-impact-the-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/how-does-back-to-backs-impact-the-nba/figure-01.png",
        "alt": "How does Back to Backs impact the NBA? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/how-does-back-to-backs-impact-the-nba/figure-02.png",
        "alt": "How does Back to Backs impact the NBA? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/how-does-back-to-backs-impact-the-nba/figure-03.png",
        "alt": "How does Back to Backs impact the NBA? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/how-does-back-to-backs-impact-the-nba/figure-04.png",
        "alt": "How does Back to Backs impact the NBA? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/how-does-back-to-backs-impact-the-nba/figure-05.png",
        "alt": "How does Back to Backs impact the NBA? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/how-does-back-to-backs-impact-the-nba/figure-06.png",
        "alt": "How does Back to Backs impact the NBA? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "Beyond the Arc: How Three-Point Shooting Shapes—But Doesn’t Dictate—NBA Playoff Success",
    "authors": [
      "Allison Seteono",
      "Chloe Sun"
    ],
    "date": "Apr 2, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "The modern NBA is a game of spacing, shooting, and efficiency, where the three-point shot has revolutionized how teams approach success. From the dominance of the Golden State Warriors to the rise of analytically driven offenses, three-point shooting has become a defining...",
    "contentFile": "arc-three-point-shooting-shapes.txt",
    "images": [
      {
        "src": "/assets/journalism/arc-three-point-shooting-shapes/figure-01.png",
        "alt": "Beyond the Arc: How Three-Point Shooting Shapes—But Doesn’t Dictate—NBA Playoff Success figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/arc-three-point-shooting-shapes/figure-02.png",
        "alt": "Beyond the Arc: How Three-Point Shooting Shapes—But Doesn’t Dictate—NBA Playoff Success figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/arc-three-point-shooting-shapes/figure-03.png",
        "alt": "Beyond the Arc: How Three-Point Shooting Shapes—But Doesn’t Dictate—NBA Playoff Success figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/arc-three-point-shooting-shapes/figure-04.png",
        "alt": "Beyond the Arc: How Three-Point Shooting Shapes—But Doesn’t Dictate—NBA Playoff Success figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      },
      {
        "src": "/assets/journalism/arc-three-point-shooting-shapes/figure-05.png",
        "alt": "Beyond the Arc: How Three-Point Shooting Shapes—But Doesn’t Dictate—NBA Playoff Success figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      }
    ]
  },
  {
    "title": "World Chess Championship 2024: How one mistake decided a world champion",
    "authors": [
      "Billy Peir"
    ],
    "date": "Apr 2, 2025",
    "year": 2025,
    "sport": "General",
    "readTime": 15,
    "summary": "The 2024 World Chess Championship, held from November 25 to December 12 in Singapore, Was one of the most exciting world chess championships in recent history. The challenger, Gukesh Dommaraju, is a young indian prodigy who won the fabled Candidates, beating out other top...",
    "contentFile": "world-chess-championship-2024.txt",
    "images": [
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-01.png",
        "alt": "The French Defense",
        "caption": "The French Defense",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-02.png",
        "alt": "The London System",
        "caption": "The London System",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-03.png",
        "alt": "The English Opening",
        "caption": "The English Opening",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-04.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-05.jpg",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-06.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-07.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-08.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-09.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-10.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-11.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-12.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-13.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-14.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-15.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-16.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-17.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-18.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-19.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-20.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-21.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/world-chess-championship-2024/figure-22.png",
        "alt": "World Chess Championship 2024: How one mistake decided a world champion figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      }
    ]
  },
  {
    "title": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships?",
    "authors": [
      "Charlie Wang"
    ],
    "date": "Apr 2, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "Throughout NBA history, teams have done everything they can to win the elusive NBA championship. Whether it’s tanking for a possible championship in the future, reworking the front office by hiring a new general manager, or reconstructing the roster to a more win-now...",
    "contentFile": "superstar-duos-vs-big-threes.txt",
    "images": [
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-01.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-02.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-03.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-04.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-05.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-06.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-07.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-08.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-09.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-10.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-11.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-12.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-13.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-14.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-15.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-16.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/superstar-duos-vs-big-threes/figure-17.png",
        "alt": "Superstar Duos vs. Big Threes: Which Formation is More Effective in Winning NBA Championships? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      }
    ]
  },
  {
    "title": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success",
    "authors": [
      "Selina Cheng",
      "Emery Lee",
      "Anika Malapati",
      "Joshua Park"
    ],
    "date": "Apr 1, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "It’s no secret that height is an athletic advantage across numerous sports—towering professional and college basketball, football, water polo, and volleyball athletes bear witness. But at the professional or college level when everyone is relatively tall, how much does height...",
    "contentFile": "height-importance-volleyball.txt",
    "images": [
      {
        "src": "/assets/journalism/height-importance-volleyball/figure-01.png",
        "alt": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/height-importance-volleyball/figure-02.png",
        "alt": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/height-importance-volleyball/figure-03.png",
        "alt": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/height-importance-volleyball/figure-04.png",
        "alt": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/height-importance-volleyball/figure-05.png",
        "alt": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/height-importance-volleyball/figure-06.png",
        "alt": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/height-importance-volleyball/figure-07.png",
        "alt": "Does Height Equal Victory in Volleyball? Analyzing the VNL to Uncover the Role of Height in Team Success figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      }
    ]
  },
  {
    "title": "Which fighter in the UFC FeatherWeight has the hardest “chin”?",
    "authors": [
      "Jaewook Cho"
    ],
    "date": "Jan 21, 2025",
    "year": 2025,
    "sport": "General",
    "readTime": 5,
    "summary": "Max Holloway, known to be the most resilient fighter in the Featherweight division, recently got knocked out by the undefeated champion Illia Topuria in the UFC 310 Featherweight Title Match. It was his first time being knocked out in his entire fighting career. Even though...",
    "contentFile": "featherweight-hardest-chin.txt",
    "images": [
      {
        "src": "/assets/journalism/featherweight-hardest-chin/figure-01.png",
        "alt": "Which fighter in the UFC FeatherWeight has the hardest “chin”? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/featherweight-hardest-chin/figure-02.png",
        "alt": "Which fighter in the UFC FeatherWeight has the hardest “chin”? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/featherweight-hardest-chin/figure-03.png",
        "alt": "Which fighter in the UFC FeatherWeight has the hardest “chin”? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings",
    "authors": [
      "Bethany Kim",
      "Rose Bonhomme",
      "Faith Satrya",
      "Edin Le"
    ],
    "date": "Jan 21, 2025",
    "year": 2025,
    "sport": "Tennis",
    "readTime": 9,
    "summary": "Hyeon Chung, a rising tennis star from South Korea, captured the world’s attention during his run at the 2018 Australian Open. His stunning performance all the way until the semifinals competing against Roger Federer, where he even defeated tennis legends like Novak Djokovic,...",
    "contentFile": "hyeon-chung-comeback.txt",
    "images": [
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-01.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-02.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-03.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-04.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-05.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-06.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-07.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-08.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-09.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-10.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-11.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 51
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-12.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-13.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-14.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-15.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-16.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/hyeon-chung-comeback/figure-17.png",
        "alt": "Resilience on Return: Hyeon Chung’s Journey Back to the Top of the ATP Rankings figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      }
    ]
  },
  {
    "title": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury",
    "authors": [
      "Brian Mualim",
      "Victoria Vivian Chan"
    ],
    "date": "Jan 14, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "Whether players and fans like it or not, injuries are an unavoidable part of the game of basketball. As most players will get injured at some point within their career, the question isn’t if it will happen, but how long will they be sidelined for? To combat this, teams have...",
    "contentFile": "nba-load-management-injury.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-01.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-02.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-03.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-04.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-05.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-06.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-07.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/nba-load-management-injury/figure-08.png",
        "alt": "Is Load Management a Good Thing? Finding the Correlation between a Player’s Usage and their Length of Injury figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "Against All Odds: A Statistical Look at NBA Upsets",
    "authors": [
      "Richard Li",
      "Daniel Hu",
      "Grant Boydell",
      "Adya Ganti"
    ],
    "date": "Jan 6, 2025",
    "year": 2025,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "Sports betting has surged into popularity in recent years after its legalization in 2018 in the United States. Although it’s not legalized in all 50 states, there are still 25.02 million users in 2024 in the booming industry, posting a 11 billion revenue in the year 2023 for...",
    "contentFile": "nba-odds-upsets.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-01.png",
        "alt": "Figure Notes: Displayed in the figure above is the example of the spread for a game between the New York Knicks and the Boston Celtics",
        "caption": "Figure Notes: Displayed in the figure above is the example of the spread for a game between the New York Knicks and the Boston Celtics",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-02.png",
        "alt": "Figure Notes: After importing the dataset into Jupyter Notebook, the data frame was further filtered to include the following fields: Date, Location, Team, Opponent Team, Average Line Spread, Points, and Result of the Game. ",
        "caption": "Figure Notes: After importing the dataset into Jupyter Notebook, the data frame was further filtered to include the following fields: Date, Location, Team, Opponent Team, Average Line Spread, Points, and Result of the Game. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-03.png",
        "alt": "Figure Notes: The figure displays the win percentage of teams from 2012-2019 depending on varying spread ranges including +0-5, +5-10, +10-15, +15-20. Furthermore, a linear regression line was included for spread range as well as their respective 95% confidence intervals",
        "caption": "Figure Notes: The figure displays the win percentage of teams from 2012-2019 depending on varying spread ranges including +0-5, +5-10, +10-15, +15-20. Furthermore, a linear regression line was included for spread range as well as their respective 95% confidence intervals",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-04.png",
        "alt": "Figure Notes: In this figure, we aimed to illustrate the varying upset rates between the Western and Eastern Conferences. Additionally, a linear regression line is displayed for each conference as well as their respective 95% confidence intervals. ",
        "caption": "Figure Notes: In this figure, we aimed to illustrate the varying upset rates between the Western and Eastern Conferences. Additionally, a linear regression line is displayed for each conference as well as their respective 95% confidence intervals. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-05.png",
        "alt": "Figure Notes: In the figure above, we explored differences in NBA game statistics between the underdog and favored teams. We looked at the mean for the following statistics: points per game, team rebounds, team assists, field goal percentage, three point percentage, and turnovers. ",
        "caption": "Figure Notes: In the figure above, we explored differences in NBA game statistics between the underdog and favored teams. We looked at the mean for the following statistics: points per game, team rebounds, team assists, field goal percentage, three point percentage, and turnovers. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-06.png",
        "alt": "Against All Odds: A Statistical Look at NBA Upsets figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-07.png",
        "alt": "Against All Odds: A Statistical Look at NBA Upsets figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-08.jpg",
        "alt": "Against All Odds: A Statistical Look at NBA Upsets figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-09.png",
        "alt": "Against All Odds: A Statistical Look at NBA Upsets figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-10.png",
        "alt": "Figure notes: This graph explores the wins by seed in each playoffs. The darker bar represents the number of wins by the lower seed, while the lighter bar represents wins by the higher seed. ",
        "caption": "Figure notes: This graph explores the wins by seed in each playoffs. The darker bar represents the number of wins by the lower seed, while the lighter bar represents wins by the higher seed. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-11.png",
        "alt": "Figure Notes: This graph shows the relationship during the NBA playoffs from 2013-2019, comparing the underdog win percentage and the number of times the lower seed wins. This looks to explore if there is a correlation between playoffs where there is a frequent amount of upsets and lower seeds winning more games. ",
        "caption": "Figure Notes: This graph shows the relationship during the NBA playoffs from 2013-2019, comparing the underdog win percentage and the number of times the lower seed wins. This looks to explore if there is a correlation between playoffs where there is a frequent amount of upsets and lower seeds winning more games. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-12.png",
        "alt": "Figure Notes: The figure above displays the underdog win percentage between home and away games from 2012-2019. ",
        "caption": "Figure Notes: The figure above displays the underdog win percentage between home and away games from 2012-2019. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-13.png",
        "alt": "Figure Notes: The figure above illustrates the resulting normal curve of our one proportion z test, as well as, the corresponding z score and p value. ",
        "caption": "Figure Notes: The figure above illustrates the resulting normal curve of our one proportion z test, as well as, the corresponding z score and p value. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      },
      {
        "src": "/assets/journalism/nba-odds-upsets/figure-14.png",
        "alt": "Figure Notes: The figure above displays the win percentage for underdog teams depending on varying rest days between games. Rest day of one means back-to-back games and so forth. ",
        "caption": "Figure Notes: The figure above displays the win percentage for underdog teams depending on varying rest days between games. Rest day of one means back-to-back games and so forth. ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      }
    ]
  },
  {
    "title": "Predicting Glory: Who Will Claim the 2024 NFL Crown?",
    "authors": [
      "Sankeerth Gandhari"
    ],
    "date": "Dec 24, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 8,
    "summary": "The National Football League (NFL) season is an annual spectacle that captures the attention of millions of fans and analysts alike. Predicting the season’s outcome, particularly identifying the team most likely to win, is a complex and challenging task. This paper uses...",
    "contentFile": "predicting-nfl-winner.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting-nfl-winner/figure-01.png",
        "alt": "Source: Towards Ai",
        "caption": "Source: Towards Ai",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/predicting-nfl-winner/figure-02.png",
        "alt": "Predicting Glory: Who Will Claim the 2024 NFL Crown? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/predicting-nfl-winner/figure-03.png",
        "alt": "Predicting Glory: Who Will Claim the 2024 NFL Crown? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 75
      },
      {
        "src": "/assets/journalism/predicting-nfl-winner/figure-04.png",
        "alt": "Predicting Glory: Who Will Claim the 2024 NFL Crown? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 75
      },
      {
        "src": "/assets/journalism/predicting-nfl-winner/figure-05.png",
        "alt": "Predicting Glory: Who Will Claim the 2024 NFL Crown? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 75
      }
    ]
  },
  {
    "title": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever",
    "authors": [
      "Sai Karthik Magham",
      "Michael Zheng"
    ],
    "date": "Dec 24, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "Stephen Curry is one of the most prolific players in NBA history. His offensive brilliance has not only redefined the role of a point guard but has also transformed the Golden State Warriors into a dynasty His unparalleled shooting range, combined with his exceptional...",
    "contentFile": "steph-offensive-player.txt",
    "images": [
      {
        "src": "/assets/journalism/steph-offensive-player/figure-01.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-02.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-03.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-04.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-05.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-06.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-07.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-08.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-09.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-10.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-11.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/steph-offensive-player/figure-12.png",
        "alt": "Why Steph Curry Is Arguably the Most Valuable Offensive Player Ever figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "Tee it High, Let it Fly: Exploring the Impact of Distance in Modern Golf",
    "authors": [
      "Kristofer Tsai"
    ],
    "date": "Dec 24, 2024",
    "year": 2024,
    "sport": "Golf",
    "readTime": 11,
    "summary": "In the world of professional golf, there is a common belief that distance off the tee can be a significant advantage, giving players a closer approach to the hole and thus a better chance of scoring. As Tiger Woods famously remarked, \"The most important club in the bag is the...",
    "contentFile": "distance-golf.txt",
    "images": [
      {
        "src": "/assets/journalism/distance-golf/figure-01.png",
        "alt": "Tee it High, Let it Fly: Exploring the Impact of Distance in Modern Golf figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/distance-golf/figure-02.png",
        "alt": "Tee it High, Let it Fly: Exploring the Impact of Distance in Modern Golf figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/distance-golf/figure-03.png",
        "alt": "Tee it High, Let it Fly: Exploring the Impact of Distance in Modern Golf figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/distance-golf/figure-04.png",
        "alt": "Tee it High, Let it Fly: Exploring the Impact of Distance in Modern Golf figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/distance-golf/figure-05.png",
        "alt": "Tee it High, Let it Fly: Exploring the Impact of Distance in Modern Golf figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 68
      }
    ]
  },
  {
    "title": "Scoring Big: Analyzing the Growth of the NWSL",
    "authors": [
      "Ella Hinkle",
      "Taylor Fenton"
    ],
    "date": "Dec 24, 2024",
    "year": 2024,
    "sport": "Soccer",
    "readTime": 11,
    "summary": "Since the establishment of the National Women’s Soccer League (NWSL) in 2012, the league has taken off. Initially made up of just 8 teams, the NWSL now boasts 14 highly competitive teams– as of the recent addition of two more teams this season– with concrete plans to continue...",
    "contentFile": "growth-of-nwsl.txt",
    "images": [
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-01.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-02.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-03.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-04.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-05.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-06.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-07.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-08.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-09.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-10.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-11.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/growth-of-nwsl/figure-12.png",
        "alt": "Scoring Big: Analyzing the Growth of the NWSL figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "Predicting the 2024-25 NHL Season",
    "authors": [
      "Jared Fong"
    ],
    "date": "Dec 18, 2024",
    "year": 2024,
    "sport": "Hockey",
    "readTime": 7,
    "summary": "Just past the quarter mark of the 2024-25 NHL season, we have seen some crazy things already happen. The Winnipeg Jets, Washington Capitals, and Minnesota Wild have exceeded everyone’s preseason expectations and ascended to the top of the NHL standings. On the flip side, the...",
    "contentFile": "2024-25-nhl-season.txt",
    "images": [
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-01.png",
        "alt": "Predicting the 2024-25 NHL Season figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-02.png",
        "alt": "Predicting the 2024-25 NHL Season figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-03.png",
        "alt": "Predicting the 2024-25 NHL Season figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-04.png",
        "alt": "Predicting the 2024-25 NHL Season figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-05.png",
        "alt": "Predicting the 2024-25 NHL Season figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-06.png",
        "alt": "Predicting the 2024-25 NHL Season figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-07.png",
        "alt": "Predicting the 2024-25 NHL Season figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/2024-25-nhl-season/figure-08.png",
        "alt": "Predicting the 2024-25 NHL Season figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      }
    ]
  },
  {
    "title": "The Impact of Bye Weeks on a NFL Team Performance",
    "authors": [
      "Elly Goan",
      "Anika Soitkar"
    ],
    "date": "Dec 15, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 7,
    "summary": "In the 2019 NFL season, the Kansas City Chiefs demonstrated the potential power of a bye week. Sitting at 7 wins and 4 losses before their break, the team seemed solid but still had room for improvement. After their week off they returned with renewed intensity, closing out...",
    "contentFile": "nfl-bye-weeks.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl-bye-weeks/figure-01.png",
        "alt": "The Impact of Bye Weeks on a NFL Team Performance figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nfl-bye-weeks/figure-02.png",
        "alt": "The Impact of Bye Weeks on a NFL Team Performance figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nfl-bye-weeks/figure-03.png",
        "alt": "The Impact of Bye Weeks on a NFL Team Performance figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nfl-bye-weeks/figure-04.png",
        "alt": "The Impact of Bye Weeks on a NFL Team Performance figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/nfl-bye-weeks/figure-05.png",
        "alt": "The Impact of Bye Weeks on a NFL Team Performance figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nfl-bye-weeks/figure-06.png",
        "alt": "The Impact of Bye Weeks on a NFL Team Performance figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      }
    ]
  },
  {
    "title": "New Face of the WNBA? Predicting Caitlin Clark’s Rookie Season Statistics",
    "authors": [
      "Angelina Muliadi",
      "Brian Mualim",
      "Victoria Vivian Chan"
    ],
    "date": "Sep 11, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "From March Madness until the WNBA draft, one name emerges time and time again:  Caitlin Clark. In her senior season, Clark averaged 31.6 points, 8.9 assists and 7.4 rebounds per game, leading Division I in scoring and assists. She finished with the highest career scoring...",
    "contentFile": "caitlin-clark-prediction.txt",
    "images": [
      {
        "src": "/assets/journalism/caitlin-clark-prediction/figure-01.png",
        "alt": "New Face of the WNBA? Predicting Caitlin Clark’s Rookie Season Statistics figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/caitlin-clark-prediction/figure-02.png",
        "alt": "New Face of the WNBA? Predicting Caitlin Clark’s Rookie Season Statistics figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/caitlin-clark-prediction/figure-03.png",
        "alt": "New Face of the WNBA? Predicting Caitlin Clark’s Rookie Season Statistics figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      }
    ]
  },
  {
    "title": "How Much Do Top Receivers Contribute to QB Stats?",
    "authors": [
      "Eric Chu"
    ],
    "date": "Sep 1, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 9,
    "summary": "In football, being a \"merchant\" means being so reliant on a particular asset that despite not being genuinely good at his position, a player appears to be good due to external factors rather than his own merits. Rather than contributing to his team, a \"merchant\" is the...",
    "contentFile": "how-top-receivers-contribute-qb-stats.txt",
    "images": [
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-01.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-02.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-03.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-04.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-05.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-06.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-07.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/how-top-receivers-contribute-qb-stats/figure-08.png",
        "alt": "How Much Do Top Receivers Contribute to QB Stats? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      }
    ]
  },
  {
    "title": "Is the “Sophomore Slump” Real in the NBA?",
    "authors": [
      "Dhruv Patel",
      "Daniel Yeo"
    ],
    "date": "Jul 4, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "The “sophomore slump” is a commonly believed NBA phenomenon that suggests that rookies often face a decline in performance during their second season. This article will examine the validity of this argument by looking broadly at 2018-2023 rookies and their development from...",
    "contentFile": "sophomore-slump-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/sophomore-slump-nba/figure-01.png",
        "alt": "Is the “Sophomore Slump” Real in the NBA? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/sophomore-slump-nba/figure-02.png",
        "alt": "Is the “Sophomore Slump” Real in the NBA? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/sophomore-slump-nba/figure-03.png",
        "alt": "Is the “Sophomore Slump” Real in the NBA? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/sophomore-slump-nba/figure-04.png",
        "alt": "Is the “Sophomore Slump” Real in the NBA? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/sophomore-slump-nba/figure-05.png",
        "alt": "Is the “Sophomore Slump” Real in the NBA? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      }
    ]
  },
  {
    "title": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets?",
    "authors": [
      "Joshua Sujo"
    ],
    "date": "Jun 26, 2024",
    "year": 2024,
    "sport": "Tennis",
    "readTime": 10,
    "summary": "Masters, PGA Championship, US Open, and The Open. These are the four most important events in the golfing year. Winning one of these tournaments cements a golfer’s place in history. On the other hand, without winning one, a successful career will always have a gaping hole....",
    "contentFile": "predicting-major-champions.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting-major-champions/figure-01.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-02.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-03.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-04.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-05.png",
        "alt": "Masters SG:AVG_pred is the prediction variable. POS is their tournament result.",
        "caption": "Masters SG:AVG_pred is the prediction variable. POS is their tournament result.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-06.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-07.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-08.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/predicting-major-champions/figure-09.png",
        "alt": "Predicting Major Champions: Do Certain Majors Suit Different Golf Skill Sets? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      }
    ]
  },
  {
    "title": "Performing Sports: An Analysis on Recent Trends of Figure Skating",
    "authors": [
      "Tianyi Su",
      "Christine Ahn"
    ],
    "date": "Jun 22, 2024",
    "year": 2024,
    "sport": "General",
    "readTime": 10,
    "summary": "Figure skating is one of the sport programs that requires not only athletic abilities but also artistic components. The sport was created in the 18th century and popularized in the Western world. The sport originally only focused on the artistic aspect, thus having the name...",
    "contentFile": "recent-trends-figure-skating.txt",
    "images": [
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-01.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-02.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-03.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-04.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-05.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-06.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-07.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-08.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-09.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-10.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/recent-trends-figure-skating/figure-11.png",
        "alt": "Performing Sports: An Analysis on Recent Trends of Figure Skating figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "Effect of Racquet Specifications on Tennis Performance",
    "authors": [
      "Rosie Chen",
      "Stella Koh"
    ],
    "date": "Jun 22, 2024",
    "year": 2024,
    "sport": "Tennis",
    "readTime": 12,
    "summary": "The first thing you need when playing tennis is the racquet. And while the racquet may seem to be merely a tool to ricochet a ball back and forth the court, it can be–and is–a customizable tool.  Differences in length, size, weight, and stiffness amongst others of tennis...",
    "contentFile": "raquet-specifications.txt",
    "images": [
      {
        "src": "/assets/journalism/raquet-specifications/figure-01.png",
        "alt": "Effect of Racquet Specifications on Tennis Performance figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/raquet-specifications/figure-02.png",
        "alt": "Effect of Racquet Specifications on Tennis Performance figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/raquet-specifications/figure-03.png",
        "alt": "Effect of Racquet Specifications on Tennis Performance figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/raquet-specifications/figure-04.png",
        "alt": "Effect of Racquet Specifications on Tennis Performance figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/raquet-specifications/figure-05.png",
        "alt": "Effect of Racquet Specifications on Tennis Performance figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/raquet-specifications/figure-06.png",
        "alt": "Effect of Racquet Specifications on Tennis Performance figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      }
    ]
  },
  {
    "title": "Who is the best team in Baseball?",
    "authors": [
      "Stanley Hsu"
    ],
    "date": "Jun 21, 2024",
    "year": 2024,
    "sport": "Baseball",
    "readTime": 11,
    "summary": "The categories that come up when one thinks of a good baseball team are pitching categories such as ERA (earned run average), strikeouts, and WHIP (walks, hits per inning). Some important batting categories are batting average, on-base percentage, slugging percentage, on-base...",
    "contentFile": "best-team-in-baseball.txt",
    "images": [
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-01.png",
        "alt": "Who is the best team in Baseball? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-02.png",
        "alt": "Who is the best team in Baseball? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-03.png",
        "alt": "Who is the best team in Baseball? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-04.png",
        "alt": "Who is the best team in Baseball? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-05.png",
        "alt": "Who is the best team in Baseball? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-06.png",
        "alt": "Who is the best team in Baseball? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-07.png",
        "alt": "Who is the best team in Baseball? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-08.png",
        "alt": "Who is the best team in Baseball? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-09.png",
        "alt": "Who is the best team in Baseball? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-10.png",
        "alt": "Who is the best team in Baseball? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-11.png",
        "alt": "Who is the best team in Baseball? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-12.png",
        "alt": "Who is the best team in Baseball? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-13.png",
        "alt": "Who is the best team in Baseball? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-14.png",
        "alt": "Who is the best team in Baseball? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-15.png",
        "alt": "Who is the best team in Baseball? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/best-team-in-baseball/figure-16.png",
        "alt": "Who is the best team in Baseball? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "Injuries and the NFL Bye Week: Safely Adding an 18th Game",
    "authors": [
      "Raja Kavasseri"
    ],
    "date": "Jun 20, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 8,
    "summary": "The NFL recently increased the number of games per team from 16 to 17. A 17th game makes sense - more football is great for fans and for profits. But an extra game also means more physical stress, and therefore more injuries for players. There is no NFL without the players,...",
    "contentFile": "bye-week.txt",
    "images": [
      {
        "src": "/assets/journalism/bye-week/figure-01.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/bye-week/figure-02.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/bye-week/figure-03.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/bye-week/figure-04.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/bye-week/figure-05.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/bye-week/figure-06.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/bye-week/figure-07.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/bye-week/figure-08.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/bye-week/figure-09.png",
        "alt": "Injuries and the NFL Bye Week: Safely Adding an 18th Game figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      }
    ]
  },
  {
    "title": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win",
    "authors": [
      "Billy Peir"
    ],
    "date": "Jun 19, 2024",
    "year": 2024,
    "sport": "General",
    "readTime": 12,
    "summary": "During the entire month of April 2024, 8 of the top chess players in the world competed for one of the most prestigious opportunities in the chess world: to challenge the current world champion, Ding Liren, for the title of world champion. The tournament featured a grueling,...",
    "contentFile": "candidates-chess-2024.txt",
    "images": [
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-01.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-02.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-03.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-04.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-05.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-06.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-07.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-08.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-09.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/candidates-chess-2024/figure-10.png",
        "alt": "Candidates Chess 2024: Why the Most Accurate Chess Player Doesn’t Always Win figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      }
    ]
  },
  {
    "title": "Depth is Overrated: Using NBA Bench Statistics To Predict Wins",
    "authors": [
      "Nadeev Alam"
    ],
    "date": "Jun 19, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "Depth is overrated. That is what I always believed when it came to the NBA. I think that if depth, the strength of a basketball team outside of its star players, is the highlight of your NBA team, they will never be a true championship contender. By this, I mean that you...",
    "contentFile": "depth-is-overrated.txt",
    "images": [
      {
        "src": "/assets/journalism/depth-is-overrated/figure-01.png",
        "alt": "Depth is Overrated: Using NBA Bench Statistics To Predict Wins figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/depth-is-overrated/figure-02.png",
        "alt": "Depth is Overrated: Using NBA Bench Statistics To Predict Wins figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/depth-is-overrated/figure-03.png",
        "alt": "Depth is Overrated: Using NBA Bench Statistics To Predict Wins figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/depth-is-overrated/figure-04.png",
        "alt": "Depth is Overrated: Using NBA Bench Statistics To Predict Wins figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/depth-is-overrated/figure-05.png",
        "alt": "Depth is Overrated: Using NBA Bench Statistics To Predict Wins figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024",
    "authors": [
      "Sofia Jain"
    ],
    "date": "Jun 19, 2024",
    "year": 2024,
    "sport": "Tennis",
    "readTime": 9,
    "summary": "Italian professional tennis player and current ATP world number 1, Jannik Sinner, has completely dominated the start 2024 season. He has won 28 out of 30 matches from January to May of 2024. Even a two-set deficit couldn’t prevent Sinner from winning his first Grand Slam at...",
    "contentFile": "superior-sinner.txt",
    "images": [
      {
        "src": "/assets/journalism/superior-sinner/figure-01.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-02.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-03.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-04.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-05.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-06.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-07.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-08.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-09.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-10.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-11.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-12.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-13.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-14.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-15.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/superior-sinner/figure-16.png",
        "alt": "Superior Sinner: Jannik Sinner’s Dominant Start to 2024 figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      }
    ]
  },
  {
    "title": "Predicting NBA Draft Pick Success Based on 2K Build",
    "authors": [
      "Anthony Zhao"
    ],
    "date": "Jun 18, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 14,
    "summary": "We don’t see many Derrick Whites out there: 6 foot 4 tall, 190 lb, bald players with incredible defensive instincts and a silky smooth three-point jumper. Neither do we see many Victor Wembanyamas: 7 foot 4 giants that can create off the dribble, drill shots from beyond the...",
    "contentFile": "nba-draft-2k-build.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-01.png",
        "alt": "MyCAREER image from NBA 2K24 (Source: Joshua Moy)",
        "caption": "MyCAREER image from NBA 2K24 (Source: Joshua Moy)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-02.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-03.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-04.png",
        "alt": "Derrick White shot distribution (Source: https://barttorvik.com/playerstat.php?p=Derrick+White) ",
        "caption": "Derrick White shot distribution (Source: https://barttorvik.com/playerstat.php?p=Derrick+White) ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-05.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-06.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-07.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-08.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-09.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-10.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 91
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-11.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 92
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-12.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 93
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-13.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 99
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-14.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 100
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-15.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 105
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-16.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 107
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-17.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 109
      },
      {
        "src": "/assets/journalism/nba-draft-2k-build/figure-18.png",
        "alt": "Predicting NBA Draft Pick Success Based on 2K Build figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 110
      }
    ]
  },
  {
    "title": "What Made Bayer Leverkusen So Successful This Season?",
    "authors": [
      "Divik Chotani",
      "Shawn Reznikov",
      "Siddharth Singh"
    ],
    "date": "Jun 18, 2024",
    "year": 2024,
    "sport": "Soccer",
    "readTime": 5,
    "summary": "Bayer Leverkusen thrived this season, as their goals for and against in their league season rivaled the champions of the Premier League (Manchester City), Serie A (Inter Milan), and La Liga (Real Madrid). It is noticeable that there are drastic changes between the previous...",
    "contentFile": "leverkusen-success.txt",
    "images": [
      {
        "src": "/assets/journalism/leverkusen-success/figure-01.png",
        "alt": "What Made Bayer Leverkusen So Successful This Season? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/leverkusen-success/figure-02.png",
        "alt": "What Made Bayer Leverkusen So Successful This Season? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/leverkusen-success/figure-03.png",
        "alt": "What Made Bayer Leverkusen So Successful This Season? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/leverkusen-success/figure-04.png",
        "alt": "What Made Bayer Leverkusen So Successful This Season? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/leverkusen-success/figure-05.png",
        "alt": "What Made Bayer Leverkusen So Successful This Season? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/leverkusen-success/figure-06.jpg",
        "alt": "What Made Bayer Leverkusen So Successful This Season? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      }
    ]
  },
  {
    "title": "Speed vs. Control: How to Win the Oldest International Trophy",
    "authors": [
      "Brayden Yee"
    ],
    "date": "Jun 18, 2024",
    "year": 2024,
    "sport": "Olympics",
    "readTime": 7,
    "summary": "The America’s Cup is the oldest contested trophy in international sporting history. Dating back to 1851 and containing 36 editions, the sport of competitive sailing has certainly seen its evolutions, both strategically, and technologically. The 35th America’s Cup in 2017...",
    "contentFile": "speed-vs-control-sailing.txt",
    "images": [
      {
        "src": "/assets/journalism/speed-vs-control-sailing/figure-01.png",
        "alt": "Average Speed Over Ground. The dotted line represents the winner of each race",
        "caption": "Average Speed Over Ground. The dotted line represents the winner of each race",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/speed-vs-control-sailing/figure-02.png",
        "alt": "The average minimum speed per leg for each team in each race",
        "caption": "The average minimum speed per leg for each team in each race",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/speed-vs-control-sailing/figure-03.png",
        "alt": "Full graph with all nine races",
        "caption": "Full graph with all nine races",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/speed-vs-control-sailing/figure-04.png",
        "alt": "Races in red denote the races where the slower team won",
        "caption": "Races in red denote the races where the slower team won",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "How Effective is La Masia?",
    "authors": [
      "Derek Diaz",
      "Elly Goan"
    ],
    "date": "Jun 18, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 7,
    "summary": "Football Club Barcelona is one of the most well-known teams across the world. Barcelona is well known for their superstar Lionel Messi who played and dominated the La Liga league from 2004 and finally leaving the club in 2021. Even with the absence of their superstar, the...",
    "contentFile": "la-masia.txt",
    "images": [
      {
        "src": "/assets/journalism/la-masia/figure-01.jpg",
        "alt": "How Effective is La Masia? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/la-masia/figure-02.jpg",
        "alt": "How Effective is La Masia? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/la-masia/figure-03.jpg",
        "alt": "How Effective is La Masia? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/la-masia/figure-04.jpg",
        "alt": "How Effective is La Masia? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/la-masia/figure-05.png",
        "alt": "(Lionel Messi Stats, Goals, Records, Assists, Cups and More | FBref.com, n.d.)",
        "caption": "(Lionel Messi Stats, Goals, Records, Assists, Cups and More | FBref.com, n.d.)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/la-masia/figure-06.png",
        "alt": "How Effective is La Masia? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/la-masia/figure-07.png",
        "alt": "How Effective is La Masia? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/la-masia/figure-08.jpg",
        "alt": "How Effective is La Masia? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "Who Had the Greatest Scoring Season In The NBA?",
    "authors": [
      "Ryan Liu",
      "Shaash Sivakumar"
    ],
    "date": "Jun 18, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "In the world of professional basketball, individual performance and team success are often inextricably linked. Understanding a player's true impact requires delving beyond traditional statistics to uncover deeper insights into their influence on the court. This article will...",
    "contentFile": "nba-greatest-scoring-season.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-greatest-scoring-season/figure-01.png",
        "alt": "Who Had the Greatest Scoring Season In The NBA? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nba-greatest-scoring-season/figure-02.png",
        "alt": "Who Had the Greatest Scoring Season In The NBA? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba-greatest-scoring-season/figure-03.png",
        "alt": "Who Had the Greatest Scoring Season In The NBA? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba-greatest-scoring-season/figure-04.png",
        "alt": "Who Had the Greatest Scoring Season In The NBA? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba-greatest-scoring-season/figure-05.png",
        "alt": "Who Had the Greatest Scoring Season In The NBA? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      }
    ]
  },
  {
    "title": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season",
    "authors": [
      "Nathan Kim",
      "Aiden Lee"
    ],
    "date": "Jun 1, 2024",
    "year": 2024,
    "sport": "Baseball",
    "readTime": 12,
    "summary": "Seoul, Gocheok Sky Dome, is the place where the MLB opening game was held this year. Recently, in the 21st century, the MLB has been putting effort into globalizing baseball, and more players from Asian leagues, such as KBO (Korea) and NPB (Japan), are arriving in the United...",
    "contentFile": "erick-fedde-woo-suk-go.txt",
    "images": [
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-01.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-02.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-03.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-04.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-05.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-06.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-07.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-08.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-09.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-10.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-11.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 136
      },
      {
        "src": "/assets/journalism/erick-fedde-woo-suk-go/figure-12.png",
        "alt": "From Korea to Major League; Predicting Performances of Erick Fedde and Woo Suk Go in 2024 Season figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 137
      }
    ]
  },
  {
    "title": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles",
    "authors": [
      "Blair Warren"
    ],
    "date": "Jun 1, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 5,
    "summary": "College football debates once focused on the major conferences were nearly as intense as those surrounding individual team dominance. Prior to Texas and Oklahoma agreeing to join the Southeastern Conference (SEC) in July of 2021, conference realignment was no more than...",
    "contentFile": "big-10-pac-12-football.txt",
    "images": [
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-01.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-02.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-03.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-04.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-05.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-06.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-07.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-08.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-09.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-10.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-11.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-12.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-13.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-14.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-15.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-16.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-17.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-18.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-19.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/big-10-pac-12-football/figure-20.png",
        "alt": "As Big Ten Goes Bi-Coastal, PAC-12 Alums Face Travel Troubles figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "Who Diddy do it with? NBA Edition",
    "authors": [
      "Anthony Zhao"
    ],
    "date": "Jun 1, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 20,
    "summary": "The following claims are based on observations we have made with data and other sources, and are not indicative of real relationships between NBA Players and Sean “Diddy” Combs. Sean John Combs is an American rapper and producer, commonly known by his stage name, Diddy....",
    "contentFile": "diddy-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/diddy-nba/figure-01.png",
        "alt": "Who Diddy do it with? NBA Edition figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-02.png",
        "alt": "Who Diddy do it with? NBA Edition figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-03.png",
        "alt": "Who Diddy do it with? NBA Edition figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-04.png",
        "alt": "Who Diddy do it with? NBA Edition figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-05.png",
        "alt": "Who Diddy do it with? NBA Edition figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-06.png",
        "alt": "Who Diddy do it with? NBA Edition figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-07.png",
        "alt": "Who Diddy do it with? NBA Edition figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-08.png",
        "alt": "Who Diddy do it with? NBA Edition figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-09.png",
        "alt": "Who Diddy do it with? NBA Edition figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 66
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-10.png",
        "alt": "Who Diddy do it with? NBA Edition figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 66
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-11.png",
        "alt": "Pierce mentions Diddy on Twitter, Source: https://x.com/paulpierce34/status/53157206224408576 ",
        "caption": "Pierce mentions Diddy on Twitter, Source: https://x.com/paulpierce34/status/53157206224408576 ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 67
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-12.png",
        "alt": "Pierce supports Suge as more people speak out about Diddy.  Source: https://x.com/paulpierce34/status/1773676949228970093 ",
        "caption": "Pierce supports Suge as more people speak out about Diddy.  Source: https://x.com/paulpierce34/status/1773676949228970093 ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 67
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-13.png",
        "alt": "Who Diddy do it with? NBA Edition figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 166
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-14.png",
        "alt": "Who Diddy do it with? NBA Edition figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 167
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-15.png",
        "alt": "Who Diddy do it with? NBA Edition figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 169
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-16.png",
        "alt": "Who Diddy do it with? NBA Edition figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 169
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-17.png",
        "alt": "Who Diddy do it with? NBA Edition figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 170
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-18.png",
        "alt": "Who Diddy do it with? NBA Edition figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 171
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-19.png",
        "alt": "Who Diddy do it with? NBA Edition figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 171
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-20.png",
        "alt": "Who Diddy do it with? NBA Edition figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 172
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-21.png",
        "alt": "Who Diddy do it with? NBA Edition figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 172
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-22.png",
        "alt": "Who Diddy do it with? NBA Edition figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 172
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-23.png",
        "alt": "Who Diddy do it with? NBA Edition figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 172
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-24.png",
        "alt": "Who Diddy do it with? NBA Edition figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 175
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-25.png",
        "alt": "Who Diddy do it with? NBA Edition figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 176
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-26.png",
        "alt": "Who Diddy do it with? NBA Edition figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 179
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-27.png",
        "alt": "Who Diddy do it with? NBA Edition figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 180
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-28.png",
        "alt": "Who Diddy do it with? NBA Edition figure 28",
        "width": 1200,
        "height": 700,
        "afterParagraph": 207
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-29.png",
        "alt": "Who Diddy do it with? NBA Edition figure 29",
        "width": 1200,
        "height": 700,
        "afterParagraph": 207
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-30.png",
        "alt": "Who Diddy do it with? NBA Edition figure 30",
        "width": 1200,
        "height": 700,
        "afterParagraph": 207
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-31.png",
        "alt": "Who Diddy do it with? NBA Edition figure 31",
        "width": 1200,
        "height": 700,
        "afterParagraph": 207
      },
      {
        "src": "/assets/journalism/diddy-nba/figure-32.png",
        "alt": "Who Diddy do it with? NBA Edition figure 32",
        "width": 1200,
        "height": 700,
        "afterParagraph": 207
      }
    ]
  },
  {
    "title": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data",
    "authors": [
      "Yuxing Ji"
    ],
    "date": "Jun 1, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 13,
    "summary": "The NFL Draft is a nerve-wracking banquet of hope and strategy. Teams gamble on young talent, particularly quarterbacks, who can become the franchise's cornerstone for years to come. But what separates a Super Bowl-winning MVP QB drafted outside the first round from a...",
    "contentFile": "qb-draft.txt",
    "images": [
      {
        "src": "/assets/journalism/qb-draft/figure-01.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-02.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-03.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-04.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-05.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-06.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-07.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-08.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/qb-draft/figure-09.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/qb-draft/figure-10.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/qb-draft/figure-11.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/qb-draft/figure-12.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/qb-draft/figure-13.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/qb-draft/figure-14.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/qb-draft/figure-15.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/qb-draft/figure-16.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/qb-draft/figure-17.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/qb-draft/figure-18.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/qb-draft/figure-19.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/qb-draft/figure-20.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/qb-draft/figure-21.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/qb-draft/figure-22.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/qb-draft/figure-23.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/qb-draft/figure-24.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/qb-draft/figure-25.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/qb-draft/figure-26.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/qb-draft/figure-27.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/qb-draft/figure-28.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 28",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/qb-draft/figure-29.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 29",
        "width": 1200,
        "height": 700,
        "afterParagraph": 77
      },
      {
        "src": "/assets/journalism/qb-draft/figure-30.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 30",
        "width": 1200,
        "height": 700,
        "afterParagraph": 77
      },
      {
        "src": "/assets/journalism/qb-draft/figure-31.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 31",
        "width": 1200,
        "height": 700,
        "afterParagraph": 77
      },
      {
        "src": "/assets/journalism/qb-draft/figure-32.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 32",
        "width": 1200,
        "height": 700,
        "afterParagraph": 77
      },
      {
        "src": "/assets/journalism/qb-draft/figure-33.png",
        "alt": "Boom or Bust: Insights Into the 2024 NFL QB Draft Driven by Data figure 33",
        "width": 1200,
        "height": 700,
        "afterParagraph": 93
      }
    ]
  },
  {
    "title": "How I Finished in Last Place in 2023 BSA Fantasy",
    "authors": [
      "Arvind Kalyan"
    ],
    "date": "May 3, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 6,
    "summary": "There are only a handful of things more ignominious than finishing last in a fantasy football league. One of those few, unfortunately, is finishing in last place in a fantasy football league as the president of your sports analytics club. I’ll come to my own defense just...",
    "contentFile": "last-place-fantasy-football.txt",
    "images": [
      {
        "src": "/assets/journalism/last-place-fantasy-football/figure-01.png",
        "alt": "How I Finished in Last Place in 2023 BSA Fantasy figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/last-place-fantasy-football/figure-02.png",
        "alt": "How I Finished in Last Place in 2023 BSA Fantasy figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/last-place-fantasy-football/figure-03.png",
        "alt": "How I Finished in Last Place in 2023 BSA Fantasy figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/last-place-fantasy-football/figure-04.png",
        "alt": "How I Finished in Last Place in 2023 BSA Fantasy figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/last-place-fantasy-football/figure-05.png",
        "alt": "How I Finished in Last Place in 2023 BSA Fantasy figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/last-place-fantasy-football/figure-06.png",
        "alt": "How I Finished in Last Place in 2023 BSA Fantasy figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/last-place-fantasy-football/figure-07.png",
        "alt": "How I Finished in Last Place in 2023 BSA Fantasy figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      }
    ]
  },
  {
    "title": "Analyzing the 2024 NBA DPOY Race",
    "authors": [
      "Tyler Chia",
      "Aidan Horng"
    ],
    "date": "Apr 16, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "As the 2023–2024 NBA regular season comes to an end, we will take a look at one of the most talked about awards for this year — The NBA Defensive Player of the Year Award. According to most NBA analysts and sports betting books, Rudy Gobert is the clear frontrunner for the...",
    "contentFile": "2024-nba-dpoy.txt",
    "images": [
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-01.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-02.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-03.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-04.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-05.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-06.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-07.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-08.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-09.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-10.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-11.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/2024-nba-dpoy/figure-12.png",
        "alt": "Analyzing the 2024 NBA DPOY Race figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 60
      }
    ]
  },
  {
    "title": "Passing the Torch: Quest for the Heir to Sergio Busquets",
    "authors": [
      "Mingyang Li",
      "Junying Li",
      "Haoji Wang",
      "Yuhan Xie"
    ],
    "date": "Apr 6, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 19,
    "summary": "Spanish National Team head coach Vicente Del Bosque once claimed, “You watch the game, you don’t see Busquets. You watch Busquets, you see the whole game.” This quote perfectly encapsulates Sergio Busquets as a football player – the master of simplicity. Unlike typical...",
    "contentFile": "sergio-busquets-heir.txt",
    "images": [
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-01.jpg",
        "alt": "Playing Thirds in Football [Source: SportSessionPlanner]",
        "caption": "Playing Thirds in Football [Source: SportSessionPlanner]",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-02.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-03.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-04.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-05.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-06.png",
        "alt": "Cosine Similarity [Source: AI-ContentLab]",
        "caption": "Cosine Similarity [Source: AI-ContentLab]",
        "width": 1200,
        "height": 700,
        "afterParagraph": 58
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-07.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-08.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 60
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-09.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-10.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 66
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-11.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 69
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-12.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 72
      },
      {
        "src": "/assets/journalism/sergio-busquets-heir/figure-13.png",
        "alt": "Passing the Torch: Quest for the Heir to Sergio Busquets figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 75
      }
    ]
  },
  {
    "title": "What Wins Ball Games?",
    "authors": [
      "Tom Seifert"
    ],
    "date": "Apr 2, 2024",
    "year": 2024,
    "sport": "Baseball",
    "readTime": 8,
    "summary": "In Major League Baseball, a wide array of traditional and advanced statistics can be used to evaluate players, teams, or the league as a whole. With such a diverse set of metrics to evaluate performance, there is no consensus among players, executives, or fans about which of...",
    "contentFile": "what-wins-ball-games.txt",
    "images": [
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-01.png",
        "alt": "What Wins Ball Games? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-02.jpg",
        "alt": "What Wins Ball Games? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-03.jpg",
        "alt": "What Wins Ball Games? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-04.png",
        "alt": "What Wins Ball Games? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-05.jpg",
        "alt": "What Wins Ball Games? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-06.png",
        "alt": "What Wins Ball Games? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-07.jpg",
        "alt": "What Wins Ball Games? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/what-wins-ball-games/figure-08.jpg",
        "alt": "What Wins Ball Games? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      }
    ]
  },
  {
    "title": "Unlocking the Defensive Code: Exploring the Impact of Physical Attributes on NBA Rookie Defense",
    "authors": [
      "Soomedha Vasudevan",
      "Nick Chu"
    ],
    "date": "Apr 2, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "With the NBA playoffs just around the corner and only a handful of games remaining in the regular season, basketball fans eagerly anticipate which players will rise to the top. In this analysis, we aim to explore the key traits that distinguish top-performing players and...",
    "contentFile": "unlocking-the-defensive-code.txt",
    "images": [
      {
        "src": "/assets/journalism/unlocking-the-defensive-code/figure-01.png",
        "alt": "Figure 1: Scatter Plot of Weight Height Ratio vs Steals Across Positions",
        "caption": "Figure 1: Scatter Plot of Weight Height Ratio vs Steals Across Positions",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/unlocking-the-defensive-code/figure-02.png",
        "alt": "Figure 2: Scatter Plot of Height (Inches) vs Blocks Across Positions",
        "caption": "Figure 2: Scatter Plot of Height (Inches) vs Blocks Across Positions",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/unlocking-the-defensive-code/figure-03.png",
        "alt": "Figure 3: Scatter Plots of Height (Inches) vs Defensive Rebounds Across Positions",
        "caption": "Figure 3: Scatter Plots of Height (Inches) vs Defensive Rebounds Across Positions",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/unlocking-the-defensive-code/figure-04.png",
        "alt": "Unlocking the Defensive Code: Exploring the Impact of Physical Attributes on NBA Rookie Defense figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/unlocking-the-defensive-code/figure-05.png",
        "alt": "Unlocking the Defensive Code: Exploring the Impact of Physical Attributes on NBA Rookie Defense figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/unlocking-the-defensive-code/figure-06.png",
        "alt": "Unlocking the Defensive Code: Exploring the Impact of Physical Attributes on NBA Rookie Defense figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage?",
    "authors": [
      "Max Wimmer"
    ],
    "date": "Apr 2, 2024",
    "year": 2024,
    "sport": "Golf",
    "readTime": 13,
    "summary": "In recent years, a noticeable shift has swept through the ranks of professional golfers on the PGA Tour: a dramatic increase in swing speed. This evolution is a testament to the fusion of dynamic speed training, athleticism, skill, and technology. As players refine their...",
    "contentFile": "bomb-and-gouge.txt",
    "images": [
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-01.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-02.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-03.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-04.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-05.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-06.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-07.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-08.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-09.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-10.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-11.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-12.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/bomb-and-gouge/figure-13.png",
        "alt": "Swinging For The Fences: Does The “Bomb and Gouge” Style of Golf Provide a Statistical Advantage? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      }
    ]
  },
  {
    "title": "How Important is Possession in the English Premier League?",
    "authors": [
      "Divik Chotani",
      "Siddharth Singh",
      "Shawn Reznikov"
    ],
    "date": "Apr 1, 2024",
    "year": 2024,
    "sport": "Soccer",
    "readTime": 9,
    "summary": "How to win a soccer game? Simple, score goals. It goes without saying that to score a goal, a team must be in possession of the soccer ball. But how much does the possession of the ball throughout the game impact a team’s standing at the end of the season? Is there a positive...",
    "contentFile": "possession-english-premier.txt",
    "images": [
      {
        "src": "/assets/journalism/possession-english-premier/figure-01.png",
        "alt": "How Important is Possession in the English Premier League? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/possession-english-premier/figure-02.png",
        "alt": "How Important is Possession in the English Premier League? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/possession-english-premier/figure-03.png",
        "alt": "How Important is Possession in the English Premier League? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/possession-english-premier/figure-04.png",
        "alt": "How Important is Possession in the English Premier League? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/possession-english-premier/figure-05.png",
        "alt": "How Important is Possession in the English Premier League? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/possession-english-premier/figure-06.png",
        "alt": "How Important is Possession in the English Premier League? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/possession-english-premier/figure-07.png",
        "alt": "How Important is Possession in the English Premier League? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "Gridiron Dementia: Analyzing the toll of football’s head-to-head action on the neurophysiology of NFL players. Are there potential solutions that prioritize the long-term health of athletes?",
    "authors": [
      "Kushal Chatterjee"
    ],
    "date": "Mar 29, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 13,
    "summary": "February 11, 2024 - Super Bowl Sunday. An audience of nearly 125 million watched Patrick Mahomes and the Kansas City Chiefs topple Brock Purdy’s San Francisco 49ers in overtime on a late February evening. Super Bowl LVIII shattered all previous TV viewership records,...",
    "contentFile": "gridiron-dementia.txt",
    "images": [
      {
        "src": "/assets/journalism/gridiron-dementia/figure-01.png",
        "alt": "Source: CNN - Results of Dr. Gary Small’s brain study in Semel Institute for Neuroscience and Human Behavior at UCLA",
        "caption": "Source: CNN - Results of Dr. Gary Small’s brain study in Semel Institute for Neuroscience and Human Behavior at UCLA",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/gridiron-dementia/figure-02.png",
        "alt": "Gridiron Dementia: Analyzing the toll of football’s head-to-head action on the neurophysiology of NFL players. Are there potential solutions that prioritize the long-term health of athletes? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/gridiron-dementia/figure-03.png",
        "alt": "Gridiron Dementia: Analyzing the toll of football’s head-to-head action on the neurophysiology of NFL players. Are there potential solutions that prioritize the long-term health of athletes? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/gridiron-dementia/figure-04.png",
        "alt": "Gridiron Dementia: Analyzing the toll of football’s head-to-head action on the neurophysiology of NFL players. Are there potential solutions that prioritize the long-term health of athletes? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/gridiron-dementia/figure-05.png",
        "alt": "Gridiron Dementia: Analyzing the toll of football’s head-to-head action on the neurophysiology of NFL players. Are there potential solutions that prioritize the long-term health of athletes? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/gridiron-dementia/figure-06.png",
        "alt": "Source: New York Post",
        "caption": "Source: New York Post",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/gridiron-dementia/figure-07.png",
        "alt": "Source: Frontiers in Neurology",
        "caption": "Source: Frontiers in Neurology",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      }
    ]
  },
  {
    "title": "The Impact of International Players in the NBA",
    "authors": [
      "Eduard Bueno"
    ],
    "date": "Mar 29, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "In recent years, the landscape of the NBA has undergone a remarkable transformation, marked by a significant influx of international talent onto its courts. From seasoned veterans to rising stars, players from across the globe have been making their mark in the world's...",
    "contentFile": "international-players-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/international-players-nba/figure-01.png",
        "alt": "The Impact of International Players in the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/international-players-nba/figure-02.png",
        "alt": "The Impact of International Players in the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/international-players-nba/figure-03.png",
        "alt": "The Impact of International Players in the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/international-players-nba/figure-04.png",
        "alt": "The Impact of International Players in the NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/international-players-nba/figure-05.png",
        "alt": "The Impact of International Players in the NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/international-players-nba/figure-06.png",
        "alt": "The Impact of International Players in the NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/international-players-nba/figure-07.png",
        "alt": "The Impact of International Players in the NBA figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 66
      },
      {
        "src": "/assets/journalism/international-players-nba/figure-08.png",
        "alt": "The Impact of International Players in the NBA figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 89
      }
    ]
  },
  {
    "title": "Ball to Ball Contact: Which Sports Out Everything on the Line?",
    "authors": [
      "May Chan",
      "Deshna Govil"
    ],
    "date": "Mar 29, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "Which sports put everything on the line? Some may say the NBA and others believe the NFL. However, these two sports or leagues involve different factors such as the uniform or gear they wear, the game rules, or the conditions of the stadium. Therefore, the prevalence of...",
    "contentFile": "injuries.txt",
    "images": [
      {
        "src": "/assets/journalism/injuries/figure-01.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/injuries/figure-02.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/injuries/figure-03.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/injuries/figure-04.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/injuries/figure-05.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/injuries/figure-06.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/injuries/figure-07.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/injuries/figure-08.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/injuries/figure-09.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/injuries/figure-10.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/injuries/figure-11.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/injuries/figure-12.png",
        "alt": "Ball to Ball Contact: Which Sports Out Everything on the Line? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "The Dark Horse: Aston Villa",
    "authors": [
      "Derek Diaz",
      "Elly Goan"
    ],
    "date": "Mar 29, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 5,
    "summary": "Aston Villa is a European football club, specifically based in Birmingham, England that is currently on the rise in the English Premier League. In the 2021/22 season the club finished in 14th place with 20 total clubs in the league. The following season, 2022/23, Aston Villa...",
    "contentFile": "aston-villa.txt",
    "images": [
      {
        "src": "/assets/journalism/aston-villa/figure-01.jpg",
        "alt": "The Dark Horse: Aston Villa figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/aston-villa/figure-02.jpg",
        "alt": "The Dark Horse: Aston Villa figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/aston-villa/figure-03.jpg",
        "alt": "The Dark Horse: Aston Villa figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/aston-villa/figure-04.jpg",
        "alt": "The Dark Horse: Aston Villa figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/aston-villa/figure-05.jpg",
        "alt": "The Dark Horse: Aston Villa figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/aston-villa/figure-06.jpg",
        "alt": "The Dark Horse: Aston Villa figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/aston-villa/figure-07.jpg",
        "alt": "The Dark Horse: Aston Villa figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success",
    "authors": [
      "Sofia Jain"
    ],
    "date": "Mar 28, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 7,
    "summary": "The San Francisco 49ers have a stacked roster, featuring players like Christian McCaffrey, George Kittle, Trent Williams, Deebo Samuel and many more. With such a roster, it’s easy for a player to go underrated when it comes to receiving credit for the team’s successes. One...",
    "contentFile": "brandon-aiyuk.txt",
    "images": [
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-01.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-02.jpg",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-03.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-04.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-05.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-06.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-07.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-08.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/brandon-aiyuk/figure-09.png",
        "alt": "Recognizing Brandon Aiyuk’s Growth as a Wide Receiver and His 2023 Success figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "How does Nikola Jokic power the Nuggets’ Elite Offense?",
    "authors": [
      "Stanley Hsu",
      "Joshua Sujo"
    ],
    "date": "Mar 28, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "Nikola Jokic is the star player of the Denver Nuggets, the most recent NBA Champions. He is arguably the best player in the league, having won the Most Valuable Player award in two of the past three years. In this article, we use Jokic’s stats from the 2022-2023 season, as...",
    "contentFile": "jokic-offense.txt",
    "images": [
      {
        "src": "/assets/journalism/jokic-offense/figure-01.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-02.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-03.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-04.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-05.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-06.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-07.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-08.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-09.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-10.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-11.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-12.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-13.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-14.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-15.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-16.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-17.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-18.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-19.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-20.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 58
      },
      {
        "src": "/assets/journalism/jokic-offense/figure-21.png",
        "alt": "How does Nikola Jokic power the Nuggets’ Elite Offense? figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 58
      }
    ]
  },
  {
    "title": "Big Money or Not? How much Should Quarterbacks get Paid?",
    "authors": [
      "Jared Fong",
      "Tyler Taylor",
      "Bryan Kwan",
      "Marilyn Infante"
    ],
    "date": "Mar 28, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 17,
    "summary": "The National Football League (NFL) teams are notorious for paying their quarterbacks big money, becoming the top 10 paid in the NFL. Being the brain of a team, the quarterback position is the most important in a team. Having to be the primary decision-makers and first to be...",
    "contentFile": "big-money.txt",
    "images": [
      {
        "src": "/assets/journalism/big-money/figure-01.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/big-money/figure-02.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/big-money/figure-03.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/big-money/figure-04.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/big-money/figure-05.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/big-money/figure-06.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/big-money/figure-07.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/big-money/figure-08.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/big-money/figure-09.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/big-money/figure-10.png",
        "alt": "Big Money or Not? How much Should Quarterbacks get Paid? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      }
    ]
  },
  {
    "title": "How Is the Shot Selection of NBA Centers Changing?",
    "authors": [
      "Jeffrey Liu"
    ],
    "date": "Mar 28, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "On March 6, 2000, the Los Angeles Lakers and the Los Angeles Clippers matched up in the Staples Center for what seemed to be any other regular season game.  However, it was Shaquille O’Neal’s 28th birthday that day.  To celebrate, Shaq proceeded to drop a career-high 61...",
    "contentFile": "shot-selection-nba-centers.txt"
  },
  {
    "title": "Should Jonathan Kuminga Start for the Warriors?",
    "authors": [
      "Benjamin Sloutsky"
    ],
    "date": "Mar 27, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "At the start of the 2023-2024 season, Jonathan Kuminga was constantly frustrated at the Warriors coaching system for benching him. However, Kuminga is very efficient and averages significant points sometimes. However, he can mess up occasionally when it comes to defense or...",
    "contentFile": "jonathan-kuminga-start-or-bench.txt",
    "images": [
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-01.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-02.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-03.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-04.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-05.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-06.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-07.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-08.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-09.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-10.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-11.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-12.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-13.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-14.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-15.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-16.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-17.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/jonathan-kuminga-start-or-bench/figure-18.png",
        "alt": "Should Jonathan Kuminga Start for the Warriors? figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "Back to the Future: What Former NBA Players Would Be Best Suited to the Modern League?",
    "authors": [
      "Jared Gode"
    ],
    "date": "Mar 27, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "The modern NBA is a game built off the league’s past, but the style and skills demanded of today’s play differ greatly from the NBA of the 80s, 90s, and even as recent as the 2000s. Aspects like scoring, pace of play, and even the average heights of NBA players differ between...",
    "contentFile": "back-to-the-future-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/back-to-the-future-nba/figure-01.jpg",
        "alt": "Back to the Future: What Former NBA Players Would Be Best Suited to the Modern League? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/back-to-the-future-nba/figure-02.jpg",
        "alt": "Back to the Future: What Former NBA Players Would Be Best Suited to the Modern League? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/back-to-the-future-nba/figure-03.jpg",
        "alt": "Back to the Future: What Former NBA Players Would Be Best Suited to the Modern League? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/back-to-the-future-nba/figure-04.jpg",
        "alt": "Back to the Future: What Former NBA Players Would Be Best Suited to the Modern League? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/back-to-the-future-nba/figure-05.jpg",
        "alt": "Back to the Future: What Former NBA Players Would Be Best Suited to the Modern League? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/back-to-the-future-nba/figure-06.jpg",
        "alt": "Back to the Future: What Former NBA Players Would Be Best Suited to the Modern League? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      }
    ]
  },
  {
    "title": "How Fear Can Be Measured in Baseball",
    "authors": [
      "Ian Turner"
    ],
    "date": "Mar 27, 2024",
    "year": 2024,
    "sport": "Baseball",
    "readTime": 11,
    "summary": "On a late night in 1998, the Arizona Diamondbacks led the San Francisco Giants 8 to 6 in the bottom of the ninth inning with two outs and the bases loaded. A Giants batter stepped up to the plate and was walked by the Diamondbacks pitcher, cutting the Diamondback's lead to 8...",
    "contentFile": "_fear.txt",
    "images": [
      {
        "src": "/assets/journalism/_fear/figure-01.png",
        "alt": "How Fear Can Be Measured in Baseball figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/_fear/figure-02.png",
        "alt": "How Fear Can Be Measured in Baseball figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/_fear/figure-03.png",
        "alt": "How Fear Can Be Measured in Baseball figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/_fear/figure-04.png",
        "alt": "How Fear Can Be Measured in Baseball figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/_fear/figure-05.png",
        "alt": "How Fear Can Be Measured in Baseball figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/_fear/figure-06.png",
        "alt": "How Fear Can Be Measured in Baseball figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/_fear/figure-07.png",
        "alt": "How Fear Can Be Measured in Baseball figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Predicting the Group Stage of the 2024 EUROs",
    "authors": [
      "Shaashwath Sivakumar",
      "Ryan Liu"
    ],
    "date": "Mar 27, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 10,
    "summary": "In the realm of football, where competition ignites passion and stirs fervor like no other sport, few events command the reverence and awe inspired by the UEFA European Championship. For over six decades, this illustrious tournament has embodied the pinnacle of footballing...",
    "contentFile": "2024-euros-prediction.txt",
    "images": [
      {
        "src": "/assets/journalism/2024-euros-prediction/figure-01.jpg",
        "alt": "Predicting the Group Stage of the 2024 EUROs figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/2024-euros-prediction/figure-02.png",
        "alt": "Predicting the Group Stage of the 2024 EUROs figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/2024-euros-prediction/figure-03.png",
        "alt": "Predicting the Group Stage of the 2024 EUROs figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/2024-euros-prediction/figure-04.png",
        "alt": "Predicting the Group Stage of the 2024 EUROs figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "NBA What-Ifs: Finding the Offensive Player of the Year",
    "authors": [
      "Angelina Muliadi",
      "Brian Mualim"
    ],
    "date": "Mar 26, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "Ever since the 1983 season, the NBA has awarded the Defensive Player of the Year award to the best defensive player of the regular season. That begs the question, who would be the Offensive Player of the Year? The player that dominates the court with unparalleled scoring...",
    "contentFile": "offensive-player-of-the-year.txt",
    "images": [
      {
        "src": "/assets/journalism/offensive-player-of-the-year/figure-01.png",
        "alt": "NBA What-Ifs: Finding the Offensive Player of the Year figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/offensive-player-of-the-year/figure-02.png",
        "alt": "NBA What-Ifs: Finding the Offensive Player of the Year figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/offensive-player-of-the-year/figure-03.png",
        "alt": "NBA What-Ifs: Finding the Offensive Player of the Year figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      },
      {
        "src": "/assets/journalism/offensive-player-of-the-year/figure-04.png",
        "alt": "NBA What-Ifs: Finding the Offensive Player of the Year figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      }
    ]
  },
  {
    "title": "Who Will Be the 200 Freestyle King?",
    "authors": [
      "Edi Zhang"
    ],
    "date": "Mar 26, 2024",
    "year": 2024,
    "sport": "General",
    "readTime": 4,
    "summary": "While even Michael Phelps’s legendary 400-meter IM record has been broken, one record continues to stand strong and has gained a reputation as one of the hardest world records to break. In fact, until 2022, no one has even come close to the controversial men’s 200-meter...",
    "contentFile": "200-freestyle-king.txt",
    "images": [
      {
        "src": "/assets/journalism/200-freestyle-king/figure-01.png",
        "alt": "Who Will Be the 200 Freestyle King? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/200-freestyle-king/figure-02.png",
        "alt": "Note: the black dots represent Popovici's best swims",
        "caption": "Note: the black dots represent Popovici's best swims",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/200-freestyle-king/figure-03.png",
        "alt": "Who Will Be the 200 Freestyle King? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/200-freestyle-king/figure-04.png",
        "alt": "Who Will Be the 200 Freestyle King? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/200-freestyle-king/figure-05.png",
        "alt": "Who Will Be the 200 Freestyle King? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/200-freestyle-king/figure-06.png",
        "alt": "Who Will Be the 200 Freestyle King? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/200-freestyle-king/figure-07.png",
        "alt": "Who Will Be the 200 Freestyle King? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "The Battle of North London",
    "authors": [
      "Matthew Chuang"
    ],
    "date": "Mar 26, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 10,
    "summary": "The historic rivalry between football clubs Arsenal and Tottenham Hotspur, spanning back to 1913, continues to be a nail-biting spectacle every year. The stadiums being just four miles apart, these two Premier League powerhouse teams battle it out multiple times yearly for...",
    "contentFile": "the-battle-of-north-london.txt",
    "images": [
      {
        "src": "/assets/journalism/the-battle-of-north-london/figure-01.jpg",
        "alt": "The Battle of North London figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/the-battle-of-north-london/figure-02.jpg",
        "alt": "Source: Sofascore",
        "caption": "Source: Sofascore",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/the-battle-of-north-london/figure-03.png",
        "alt": "The Battle of North London figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      },
      {
        "src": "/assets/journalism/the-battle-of-north-london/figure-04.png",
        "alt": "The Battle of North London figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      },
      {
        "src": "/assets/journalism/the-battle-of-north-london/figure-05.png",
        "alt": "The Battle of North London figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 61
      },
      {
        "src": "/assets/journalism/the-battle-of-north-london/figure-06.png",
        "alt": "The Battle of North London figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/the-battle-of-north-london/figure-07.png",
        "alt": "The Battle of North London figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 70
      }
    ]
  },
  {
    "title": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player?",
    "authors": [
      "Billy Peir"
    ],
    "date": "Mar 25, 2024",
    "year": 2024,
    "sport": "Baseball",
    "readTime": 17,
    "summary": "In March of 2023, Shohei Ohtani faced down Mike Trout. The count was 3-2, in a 3-2 ballgame. While Ohtani and Trout were teammates for the Angels at the time, this game was in a different setting: the World Baseball Classic. Ohtani, of Team Japan, went on to strike out Trout,...",
    "contentFile": "npb-to-mlb.txt",
    "images": [
      {
        "src": "/assets/journalism/npb-to-mlb/figure-01.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-02.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-03.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-04.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-05.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-06.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-07.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-08.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-09.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-10.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-11.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-12.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-13.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-14.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-15.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-16.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-17.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-18.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-19.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-20.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-21.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-22.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/npb-to-mlb/figure-23.png",
        "alt": "From the NPB to the MLB: What Makes a Great Japanese Baseball Player? figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      }
    ]
  },
  {
    "title": "Refs Vs. Teams: How Have Penalties Changed the NFL Over the Years?",
    "authors": [
      "Atij Mahesh"
    ],
    "date": "Mar 25, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 5,
    "summary": "Over the years in the NFL, penalties have shaped the game tremendously. Whether determining playoff seeding, game outcomes, or fines, players and franchise fans suffer from the curse of player penalization. Although always part of the game, many argue that penalties have...",
    "contentFile": "nfl-penalties.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl-penalties/figure-01.png",
        "alt": "Refs Vs. Teams: How Have Penalties Changed the NFL Over the Years? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/nfl-penalties/figure-02.png",
        "alt": "Refs Vs. Teams: How Have Penalties Changed the NFL Over the Years? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nfl-penalties/figure-03.png",
        "alt": "Refs Vs. Teams: How Have Penalties Changed the NFL Over the Years? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nfl-penalties/figure-04.png",
        "alt": "Refs Vs. Teams: How Have Penalties Changed the NFL Over the Years? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nfl-penalties/figure-05.png",
        "alt": "Refs Vs. Teams: How Have Penalties Changed the NFL Over the Years? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nfl-penalties/figure-06.png",
        "alt": "Refs Vs. Teams: How Have Penalties Changed the NFL Over the Years? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "The Statistic That Wins NBA Games",
    "authors": [
      "Anika Soitkar",
      "Elly Goan"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "The National Basketball Association, more commonly known as the NBA, consists of 20 teams across the continent of North America, featuring arguably the most competitive basketball league in the world. Each team plays through a regular season, in which they play 82 games...",
    "contentFile": "the-statistic-that-wins-nba-games.txt",
    "images": [
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-01.png",
        "alt": "The Statistic That Wins NBA Games figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-02.png",
        "alt": "The Statistic That Wins NBA Games figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-03.png",
        "alt": "The Statistic That Wins NBA Games figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-04.png",
        "alt": "The Statistic That Wins NBA Games figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-05.png",
        "alt": "The Statistic That Wins NBA Games figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-06.png",
        "alt": "The Statistic That Wins NBA Games figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-07.png",
        "alt": "The Statistic That Wins NBA Games figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/the-statistic-that-wins-nba-games/figure-08.png",
        "alt": "The Statistic That Wins NBA Games figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      }
    ]
  },
  {
    "title": "A Swift Path to Success: Do the Kansas City Chiefs Receive Preferential Treatment from NFL Referees?",
    "authors": [
      "Kevin Li",
      "Jason Cheung"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 6,
    "summary": "For the past few years, controversy has surrounded the Kansas City Chiefs and the way they are officiated. The Chiefs have been dominating the NFL, winning three of the last six Super Bowls and appearing in all but one in that span, and the relationship between tight end...",
    "contentFile": "kansas-city-chiefs-preferential-treatment.txt",
    "images": [
      {
        "src": "/assets/journalism/kansas-city-chiefs-preferential-treatment/figure-01.png",
        "alt": "A Swift Path to Success: Do the Kansas City Chiefs Receive Preferential Treatment from NFL Referees? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/kansas-city-chiefs-preferential-treatment/figure-02.png",
        "alt": "A Swift Path to Success: Do the Kansas City Chiefs Receive Preferential Treatment from NFL Referees? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/kansas-city-chiefs-preferential-treatment/figure-03.png",
        "alt": "A Swift Path to Success: Do the Kansas City Chiefs Receive Preferential Treatment from NFL Referees? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/kansas-city-chiefs-preferential-treatment/figure-04.png",
        "alt": "A Swift Path to Success: Do the Kansas City Chiefs Receive Preferential Treatment from NFL Referees? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/kansas-city-chiefs-preferential-treatment/figure-05.png",
        "alt": "A Swift Path to Success: Do the Kansas City Chiefs Receive Preferential Treatment from NFL Referees? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      }
    ]
  },
  {
    "title": "Is it already over? Examining F1 Pit Stop times for their impact on a team’s chances of winning",
    "authors": [
      "Kiersten Roth",
      "Emery Lee"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Motorsports",
    "readTime": 5,
    "summary": "In the cutthroat world of F1 racing, every millisecond matters. A team of twenty-three aim to change tires, clean the driver's visor, fix mechanical issues, and make other adjustments in under two seconds. While the quickness of a pit stop is essential, what adjustments are...",
    "contentFile": "f1-pitstops-time.txt",
    "images": [
      {
        "src": "/assets/journalism/f1-pitstops-time/figure-01.png",
        "alt": "Is it already over? Examining F1 Pit Stop times for their impact on a team’s chances of winning figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/f1-pitstops-time/figure-02.png",
        "alt": "Is it already over? Examining F1 Pit Stop times for their impact on a team’s chances of winning figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/f1-pitstops-time/figure-03.png",
        "alt": "Is it already over? Examining F1 Pit Stop times for their impact on a team’s chances of winning figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/f1-pitstops-time/figure-04.png",
        "alt": "Is it already over? Examining F1 Pit Stop times for their impact on a team’s chances of winning figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/f1-pitstops-time/figure-05.png",
        "alt": "Is it already over? Examining F1 Pit Stop times for their impact on a team’s chances of winning figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Isolation Vs. Teamwork: Exploring NBA Clutch Performance",
    "authors": [
      "Ian Turner",
      "Alexander Maguire"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "Basketball is a team game at its core, relying on the coordinated efforts of all five players on the court. While every team has a star player, it stands to reason that offenses are most effective when they involve movement, passing, and collective decision-making. Yet, in...",
    "contentFile": "isolation-vs-teamwork-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/isolation-vs-teamwork-nba/figure-01.png",
        "alt": "Isolation Vs. Teamwork: Exploring NBA Clutch Performance figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/isolation-vs-teamwork-nba/figure-02.png",
        "alt": "Isolation Vs. Teamwork: Exploring NBA Clutch Performance figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/isolation-vs-teamwork-nba/figure-03.png",
        "alt": "Isolation Vs. Teamwork: Exploring NBA Clutch Performance figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/isolation-vs-teamwork-nba/figure-04.png",
        "alt": "Isolation Vs. Teamwork: Exploring NBA Clutch Performance figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/isolation-vs-teamwork-nba/figure-05.png",
        "alt": "Isolation Vs. Teamwork: Exploring NBA Clutch Performance figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      }
    ]
  },
  {
    "title": "NBA Clutch-Factor: Analyzing Game-Winning Plays and Players",
    "authors": [
      "Andrew Weiner",
      "Eric Zhou"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "The air within Cleveland’s Richfield Coliseum was thick with anticipation, and the deafening roar of the crowd echoed like thunder as the shot clock ticked away with mere seconds left in the game. The Chicago Bulls were trailing by one point to the heavily favored Cleveland...",
    "contentFile": "nba-clutch.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-clutch/figure-01.png",
        "alt": "NBA Clutch-Factor: Analyzing Game-Winning Plays and Players figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba-clutch/figure-02.png",
        "alt": "NBA Clutch-Factor: Analyzing Game-Winning Plays and Players figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season?",
    "authors": [
      "Selina Cheng"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Baseball",
    "readTime": 9,
    "summary": "In baseball analytics, few statistics have revolutionized player evaluation more than Wins Above Replacement (WAR). This comprehensive metric attempts to capture a player's total contribution to their team by estimating how many more wins they provide compared to a...",
    "contentFile": "pitcher-s-war-2024.txt",
    "images": [
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-01.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-02.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-03.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-04.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-05.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-06.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-07.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-08.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-09.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/pitcher-s-war-2024/figure-10.png",
        "alt": "What Factors Best Explain a Pitcher’s WAR in the 2024 Season? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      }
    ]
  },
  {
    "title": "An NFL Star’s Call of Duty Addiction: Does Gaming Truly Have An Effect on this QB’s Performance?",
    "authors": [
      "Felipe Dueñas",
      "Kevin Li"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 10,
    "summary": "Two years ago, a Reddit post titled “A statistical analysis of Kyler Murray’s performance on COD double XP weekends” went viral, making waves in online NFL circles. It claimed that the Arizona Cardinals’ young quarterback performed worse on the field during weekends when...",
    "contentFile": "nfl-kyler-cod-performance.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl-kyler-cod-performance/figure-01.png",
        "alt": "An NFL Star’s Call of Duty Addiction: Does Gaming Truly Have An Effect on this QB’s Performance? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nfl-kyler-cod-performance/figure-02.png",
        "alt": "An NFL Star’s Call of Duty Addiction: Does Gaming Truly Have An Effect on this QB’s Performance? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nfl-kyler-cod-performance/figure-03.png",
        "alt": "An NFL Star’s Call of Duty Addiction: Does Gaming Truly Have An Effect on this QB’s Performance? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nfl-kyler-cod-performance/figure-04.png",
        "alt": "An NFL Star’s Call of Duty Addiction: Does Gaming Truly Have An Effect on this QB’s Performance? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nfl-kyler-cod-performance/figure-05.png",
        "alt": "An NFL Star’s Call of Duty Addiction: Does Gaming Truly Have An Effect on this QB’s Performance? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/nfl-kyler-cod-performance/figure-06.png",
        "alt": "An NFL Star’s Call of Duty Addiction: Does Gaming Truly Have An Effect on this QB’s Performance? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "How Manuel Neuer Revolutionized the Role of No. 1",
    "authors": [
      "William Pan"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Soccer",
    "readTime": 5,
    "summary": "For most of the time in soccer history, goalkeepers are the most overlooked players on the field. They spend most of the game inside the penalty area, and you can only see them making actions when the opponents are shooting or during goal kicks. However, in the game of...",
    "contentFile": "neuer_role_no1.txt",
    "images": [
      {
        "src": "/assets/journalism/neuer_role_no1/figure-01.jpg",
        "alt": "How Manuel Neuer Revolutionized the Role of No. 1 figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/neuer_role_no1/figure-02.jpg",
        "alt": "How Manuel Neuer Revolutionized the Role of No. 1 figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/neuer_role_no1/figure-03.jpg",
        "alt": "How Manuel Neuer Revolutionized the Role of No. 1 figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/neuer_role_no1/figure-04.jpg",
        "alt": "How Manuel Neuer Revolutionized the Role of No. 1 figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/neuer_role_no1/figure-05.jpg",
        "alt": "How Manuel Neuer Revolutionized the Role of No. 1 figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/neuer_role_no1/figure-06.jpg",
        "alt": "How Manuel Neuer Revolutionized the Role of No. 1 figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/neuer_role_no1/figure-07.png",
        "alt": "How Manuel Neuer Revolutionized the Role of No. 1 figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      }
    ]
  },
  {
    "title": "The League Factor: How Different Fútbol Competitions Shape Player Success",
    "authors": [
      "Alexander Maguire"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 22,
    "summary": "Fútbol is the world's most popular sport and for good reason- the skill, tactics, and unwavering passion of both players and fans make it a thrilling spectacle for all to enjoy. Its history is deep rooted and its evolution is nothing short of a total transformation. Figures...",
    "contentFile": "different-football-competitions-shape-players.txt",
    "images": [
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-01.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-02.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-03.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-04.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-05.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-06.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-07.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-08.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-09.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/different-football-competitions-shape-players/figure-10.png",
        "alt": "The League Factor: How Different Fútbol Competitions Shape Player Success figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "Do Transfer Fees Predict Player Performance in the English Premier League?",
    "authors": [
      "Sean Gee",
      "Praharsh Mehrotra"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Football",
    "readTime": 20,
    "summary": "The English Premier League (EPL) stands as one of the most competitive and financially lucrative football leagues globally, attracting top talent with record-breaking transfer fees. Clubs invest heavily in players, banking on their ability to perform and transform team...",
    "contentFile": "fees-performance-premier-league.txt",
    "images": [
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-01.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-02.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-03.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-04.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-05.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-06.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-07.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-08.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-09.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-10.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-11.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 61
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-12.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-13.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 68
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-14.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 70
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-15.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 75
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-16.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 76
      },
      {
        "src": "/assets/journalism/fees-performance-premier-league/figure-17.png",
        "alt": "Do Transfer Fees Predict Player Performance in the English Premier League? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 77
      }
    ]
  },
  {
    "title": "What Happened To Tiger?: A Statistical Review",
    "authors": [
      "Max Wimmer"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Tennis",
    "readTime": 8,
    "summary": "Editorial note: This article was written before the 2024 U.S. Open. As it turns out, its findings were confirmed by Tiger’s performance that week. He performed well off the tee, yet he struggled approaching and around the greens. With the US Open right around the corner, all...",
    "contentFile": "what-happened-to-tiger.txt",
    "images": [
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-01.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-02.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-03.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-04.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-05.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-06.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-07.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-08.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/what-happened-to-tiger/figure-09.png",
        "alt": "What Happened To Tiger?: A Statistical Review figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      }
    ]
  },
  {
    "title": "Rafael Nadal: the Undisputed King of Clay",
    "authors": [
      "Uzair Shaikh"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Tennis",
    "readTime": 5,
    "summary": "Having just exited in what may have been his final French Open with a first round loss, the future of Rafael Nadal is uncertain, even from the perspective of Nadal himself. With retirement likely looming by the end of this season, Nadal will go down as one of the greatest...",
    "contentFile": "king-of-clay.txt",
    "images": [
      {
        "src": "/assets/journalism/king-of-clay/figure-01.png",
        "alt": "Rafael Nadal: the Undisputed King of Clay figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/king-of-clay/figure-02.png",
        "alt": "Rafael Nadal: the Undisputed King of Clay figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/king-of-clay/figure-03.png",
        "alt": "Rafael Nadal: the Undisputed King of Clay figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/king-of-clay/figure-04.png",
        "alt": "Rafael Nadal: the Undisputed King of Clay figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/king-of-clay/figure-05.png",
        "alt": "Rafael Nadal: the Undisputed King of Clay figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      }
    ]
  },
  {
    "title": "Speed vs Physicality in the Modern NHL",
    "authors": [
      "Jared Fong"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Hockey",
    "readTime": 13,
    "summary": "The game of hockey is ever-evolving. Teams in the sport’s best league the National Hockey League (NHL) are scoring at a much higher rate than in years prior. In the past 3 seasons, teams have averaged 3.15 goals per game, up 13% from 10 years ago. This past season saw Nikita...",
    "contentFile": "speed-vs-physicality-nhl.txt",
    "images": [
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-01.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-02.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-03.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-04.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-05.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-06.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-07.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-08.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-09.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-10.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-11.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-12.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/speed-vs-physicality-nhl/figure-13.png",
        "alt": "Speed vs Physicality in the Modern NHL figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      }
    ]
  },
  {
    "title": "What Makes Coaching Changes in the NHL Effective?",
    "authors": [
      "Albert Carreno"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "Being the head coach of a professional sports team is no easy task. It requires the ability to manage different personalities, make decisions under pressure that will be heavily scrutinized no matter what, instill discipline and better habits in players, and be the scapegoat...",
    "contentFile": "coaching-changes-nhl.txt",
    "images": [
      {
        "src": "/assets/journalism/coaching-changes-nhl/figure-01.png",
        "alt": "What Makes Coaching Changes in the NHL Effective? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/coaching-changes-nhl/figure-02.png",
        "alt": "What Makes Coaching Changes in the NHL Effective? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/coaching-changes-nhl/figure-03.png",
        "alt": "What Makes Coaching Changes in the NHL Effective? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/coaching-changes-nhl/figure-04.png",
        "alt": "What Makes Coaching Changes in the NHL Effective? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/coaching-changes-nhl/figure-05.png",
        "alt": "What Makes Coaching Changes in the NHL Effective? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "Is Stealing Bases an Effective Strategy for Teams to Win?",
    "authors": [
      "Nathan Kim",
      "Aiden Lee"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Baseball",
    "readTime": 11,
    "summary": "A sensational young player Elly De La Cruz from Cincinnati Reds is dominating the MLB with his baserunning and not showing signs of a sophomore slump. He has 31 stolen base bases in his 55 game appearances (5/28/2024). His stolen base stat is currently ranked in 1st place in...",
    "contentFile": "stealing-bases.txt",
    "images": [
      {
        "src": "/assets/journalism/stealing-bases/figure-01.png",
        "alt": "Is Stealing Bases an Effective Strategy for Teams to Win? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/stealing-bases/figure-02.png",
        "alt": "Is Stealing Bases an Effective Strategy for Teams to Win? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/stealing-bases/figure-03.png",
        "alt": "Is Stealing Bases an Effective Strategy for Teams to Win? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/stealing-bases/figure-04.png",
        "alt": "Is Stealing Bases an Effective Strategy for Teams to Win? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/stealing-bases/figure-05.png",
        "alt": "Is Stealing Bases an Effective Strategy for Teams to Win? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "Singles vs Doubles: What Does It Take To Succeed In Each?",
    "authors": [
      "Stella Koh"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Tennis",
    "readTime": 7,
    "summary": "Singles or doubles, tennis is tennis. But are they really the same? The addition of another player and the extension of the courts can change much more of the racket game than it initially appears. In singles, a player can only rely on themselves to cover the court. Precise...",
    "contentFile": "singles-vs-doubles.txt",
    "images": [
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-01.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-02.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-03.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-04.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-05.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-06.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-07.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-08.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/singles-vs-doubles/figure-09.png",
        "alt": "Singles vs Doubles: What Does It Take To Succeed In Each? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "What Factors Affect Tiebreaker Win Percentage in Professional Tennis?",
    "authors": [
      "Albert Carreno"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Tennis",
    "readTime": 10,
    "summary": "In the world of sports, it feels like it really is better to be lucky than good sometimes. But is there an underlying reason a player in a certain sport seems to be “luckier” than another? Or is it just a matter of skill? Professional tennis, like most sports, tends to have...",
    "contentFile": "tiebreaker.txt",
    "images": [
      {
        "src": "/assets/journalism/tiebreaker/figure-01.png",
        "alt": "What Factors Affect Tiebreaker Win Percentage in Professional Tennis? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/tiebreaker/figure-02.png",
        "alt": "What Factors Affect Tiebreaker Win Percentage in Professional Tennis? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/tiebreaker/figure-03.png",
        "alt": "What Factors Affect Tiebreaker Win Percentage in Professional Tennis? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/tiebreaker/figure-04.png",
        "alt": "What Factors Affect Tiebreaker Win Percentage in Professional Tennis? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/tiebreaker/figure-05.png",
        "alt": "What Factors Affect Tiebreaker Win Percentage in Professional Tennis? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "March Madness Metrics: What Makes a Champion?",
    "authors": [
      "Ella Hinkle",
      "Taylor Fenton"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "General",
    "readTime": 8,
    "summary": "Every year, tens of millions of March Madness brackets are constructed to predict the outcome of the NCAA tournament. Out of the 68 teams, only one dominates the court. What makes these title-winning teams come out on top? Are all of their stats outperforming the average D1...",
    "contentFile": "march-madness-metrics.txt",
    "images": [
      {
        "src": "/assets/journalism/march-madness-metrics/figure-01.jpg",
        "alt": "March Madness Metrics: What Makes a Champion? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-02.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-03.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-04.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-05.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-06.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 58
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-07.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-08.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-09.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-10.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 67
      },
      {
        "src": "/assets/journalism/march-madness-metrics/figure-11.png",
        "alt": "March Madness Metrics: What Makes a Champion? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 69
      }
    ]
  },
  {
    "title": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History",
    "authors": [
      "Billy Peir"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "In recent history, there have been some historically bad sports teams. Just last year, the Detroit Pistons broke the record for the longest NBA single season losing streak by losing 28 games in a row. In 2017, the Cleveland Browns became the 2nd NFL team to go 0-16 in a...",
    "contentFile": "2024-chicago-white-sox.txt",
    "images": [
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-01.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-02.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-03.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-04.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-05.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-06.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-07.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-08.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-09.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-10.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/2024-chicago-white-sox/figure-11.png",
        "alt": "The 2024 Chicago White Sox: A Dive into the Worst Team in Recent Sports History figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "Test Cricket's New Generation of Batters",
    "authors": [
      "Brayden Yee"
    ],
    "date": "Jan 1, 2024",
    "year": 2024,
    "sport": "General",
    "readTime": 11,
    "summary": "In cricket, specifically test match cricket, the better part of the last decade has been dominated by what is known as the “Fab Four” batters of Steve Smith (Aus), Joe Root (Eng), Virat Kohli (Ind), and Kane Williamson (NZL). Predicted by Martin Crowe back in 2014, the call...",
    "contentFile": "test-cricket-new-generation-batters.txt",
    "images": [
      {
        "src": "/assets/journalism/test-cricket-new-generation-batters/figure-01.png",
        "alt": "Off spin ball (Source: wikipedia.com)",
        "caption": "Off spin ball (Source: wikipedia.com)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/test-cricket-new-generation-batters/figure-02.png",
        "alt": "Left Arm Orthodox Spin Ball (Source: wikipedia.com)",
        "caption": "Left Arm Orthodox Spin Ball (Source: wikipedia.com)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/test-cricket-new-generation-batters/figure-03.png",
        "alt": "Test Cricket's New Generation of Batters figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/test-cricket-new-generation-batters/figure-04.png",
        "alt": "Test Cricket's New Generation of Batters figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/test-cricket-new-generation-batters/figure-05.png",
        "alt": "Test Cricket's New Generation of Batters figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/test-cricket-new-generation-batters/figure-06.png",
        "alt": "Test Cricket's New Generation of Batters figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/test-cricket-new-generation-batters/figure-07.png",
        "alt": "Test Cricket's New Generation of Batters figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      }
    ]
  },
  {
    "title": "How to See Normal Kershaw in October",
    "authors": [
      "Nathan Kim"
    ],
    "date": "Dec 29, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 6,
    "summary": "39 Games, 13 Wins & 13 Losses, ERA 4.49 The numbers are Kershaw’s career postseason stats. His nightmare in October repeated against the D-Backs this year, and some extreme fans are asking him to retire. We got used to seeing Kershaw frustrated at the bench after he messed up...",
    "contentFile": "kershaw.txt",
    "images": [
      {
        "src": "/assets/journalism/kershaw/figure-01.png",
        "alt": "How to See Normal Kershaw in October figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/kershaw/figure-02.png",
        "alt": "How to See Normal Kershaw in October figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom",
    "authors": [
      "Krithik Jatavallabhula"
    ],
    "date": "Dec 27, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 10,
    "summary": "When looking at NFL quarterbacks, we assess their performance through many different metrics: passer rating, passing yards, touchdowns, interceptions, etc. However, while the quarterback skill is relevant for the following metrics, we should also look at external factors,...",
    "contentFile": "herbert-stardom.txt",
    "images": [
      {
        "src": "/assets/journalism/herbert-stardom/figure-01.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-02.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-03.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-04.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-05.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-06.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-07.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-08.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/herbert-stardom/figure-09.png",
        "alt": "Team Letdown or Personal Setback? The Mystery Behind Justin Herbert's Fading Stardom figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "LeBron James: Which Era is His True Prime?",
    "authors": [
      "Brian Mualim"
    ],
    "date": "Dec 25, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "In any sport, a player’s prime is defined as the peak their career. Due to basketball’s unforgiving nature as a sport, where the slightest misstep could injure and derail your whole career, a basketball player’s prime usually lasts around 5 years. We see this phenomenon...",
    "contentFile": "lebron-james-prime.txt",
    "images": [
      {
        "src": "/assets/journalism/lebron-james-prime/figure-01.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-02.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-03.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-04.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-05.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-06.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-07.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-08.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-09.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-10.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-11.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-12.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-13.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-14.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-15.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-16.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-17.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-18.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-19.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-20.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-21.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-22.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-23.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-24.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-25.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-26.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/lebron-james-prime/figure-27.png",
        "alt": "LeBron James: Which Era is His True Prime? figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      }
    ]
  },
  {
    "title": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics",
    "authors": [
      "Pranov Suresh"
    ],
    "date": "Dec 23, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 15,
    "summary": "Who is the modern full-back? Is it he who marauds forward at every opportunity, bursting his lung to overlap and support his winger? Is it he who patrols the touchline, enforcing defensive discipline upon the best of opposition wingers? Is it he who stands in unison with his...",
    "contentFile": "zinchenko.txt",
    "images": [
      {
        "src": "/assets/journalism/zinchenko/figure-01.png",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/zinchenko/figure-02.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/zinchenko/figure-03.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/zinchenko/figure-04.png",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/zinchenko/figure-05.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/zinchenko/figure-06.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/zinchenko/figure-07.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/zinchenko/figure-08.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/zinchenko/figure-09.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/zinchenko/figure-10.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/zinchenko/figure-11.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/zinchenko/figure-12.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/zinchenko/figure-13.jpg",
        "alt": "The Rise of the Inverted Full-Back: How Oleksandr Zinchenko Reveals the Future of Football Tactics figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      }
    ]
  },
  {
    "title": "Is Scottie Scheffler a Waste of Ball-Striking Talent?",
    "authors": [
      "Joshua Sujo",
      "Max Wimmer"
    ],
    "date": "Dec 23, 2023",
    "year": 2023,
    "sport": "Golf",
    "readTime": 14,
    "summary": "Scottie Scheffler is the best golfer on Earth right now. He currently ranks first in the Official World Golf Rankings and is a serious contender in every tournament he plays. Scheffler excelled tee-to-green this year, leading the PGA Tour’s 2022-2023 ball-striking (how good a...",
    "contentFile": "scottie-scheffler.txt",
    "images": [
      {
        "src": "/assets/journalism/scottie-scheffler/figure-01.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-02.png",
        "alt": "Source: golfwrx.com",
        "caption": "Source: golfwrx.com",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-03.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-04.png",
        "alt": "This graph shows Total Strokes Gained: tee-to-green vs. the amount of victories that player had that year.",
        "caption": "This graph shows Total Strokes Gained: tee-to-green vs. the amount of victories that player had that year.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-05.png",
        "alt": "This graph shows Total Strokes Gained: tee-to-green compared to money z-scores (money values adjusted using average PGA Tour earnings that year)",
        "caption": "This graph shows Total Strokes Gained: tee-to-green compared to money z-scores (money values adjusted using average PGA Tour earnings that year)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-06.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-07.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-08.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-09.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-10.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 65
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-11.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 68
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-12.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 71
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-13.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 78
      },
      {
        "src": "/assets/journalism/scottie-scheffler/figure-14.png",
        "alt": "Is Scottie Scheffler a Waste of Ball-Striking Talent? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      }
    ]
  },
  {
    "title": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs",
    "authors": [
      "Soomedha Vasudevan",
      "Nick Chu"
    ],
    "date": "Dec 22, 2023",
    "year": 2023,
    "sport": "Tennis",
    "readTime": 10,
    "summary": "In the competitive world of professional tennis a player’s success goes beyond their raw talent; they must also navigate several different external and internal challenges. A prominent external factor that significantly influences player performance is the variety of playing...",
    "contentFile": "surface-dominance.txt",
    "images": [
      {
        "src": "/assets/journalism/surface-dominance/figure-01.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-02.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-03.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-04.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-05.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-06.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-07.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-08.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-09.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-10.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-11.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/surface-dominance/figure-12.png",
        "alt": "Decoding Surface Dominance: The Skills Behind Tennis Triumphs figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "Examining the Dying Breed of Small Guards in the NBA",
    "authors": [
      "Anthony Rio"
    ],
    "date": "Dec 22, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "The NBA has undergone a shift in which positions are valued. It’s similar to the NFL devaluing running backs, but the reasoning is completely different. In the 2010s decade of NBA basketball, teams like the Warriors popularized “small-ball”. What “small-ball” hinges on is...",
    "contentFile": "nba-small-guards.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-small-guards/figure-01.png",
        "alt": "Examining the Dying Breed of Small Guards in the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nba-small-guards/figure-02.png",
        "alt": "Examining the Dying Breed of Small Guards in the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba-small-guards/figure-03.png",
        "alt": "Examining the Dying Breed of Small Guards in the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba-small-guards/figure-04.png",
        "alt": "Examining the Dying Breed of Small Guards in the NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nba-small-guards/figure-05.png",
        "alt": "Examining the Dying Breed of Small Guards in the NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      }
    ]
  },
  {
    "title": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League?",
    "authors": [
      "Andrew Weiner"
    ],
    "date": "Dec 22, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 13,
    "summary": "Lebron James dropped $36.8 million on his latest house in Beverly Hills in 2020, which included two guesthouses, a tennis court, and a movie theater. Fast forward to the NBA 2023-24 season, and the league’s highest earner is none other than Steph Curry, with a salary of over...",
    "contentFile": "nba-ballers.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-ballers/figure-01.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-02.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-03.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-04.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-05.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-06.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-07.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-08.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-09.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-10.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/nba-ballers/figure-11.png",
        "alt": "NBA Ballers: What Determines NBA Salary and Who’s Really the Most Valuable in the League? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      }
    ]
  },
  {
    "title": "Navigating the NBA Load Management Maze: Impact on Player Performance",
    "authors": [
      "Aaron Ho"
    ],
    "date": "Dec 22, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 4,
    "summary": "Heading into the 2023-2024 NBA season, the NBA has made numerous attempts to deter load management, pushing for players to hit the court more frequently. But what exactly is load management, and does it deliver on its promise to keep players fresh and elevate their...",
    "contentFile": "load-management-1.txt",
    "images": [
      {
        "src": "/assets/journalism/load-management-1/figure-01.png",
        "alt": "Navigating the NBA Load Management Maze: Impact on Player Performance figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/load-management-1/figure-02.png",
        "alt": "Navigating the NBA Load Management Maze: Impact on Player Performance figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "How Much Does WAR Really Matter?",
    "authors": [
      "Bryan Kwan",
      "Amay Jain"
    ],
    "date": "Dec 22, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 8,
    "summary": "Every year when it comes down to MVP voting in the NL and AL leagues, we always hear fans and media clamor over every last bit of WAR when trying to decide between the finalists. As a reference, WAR stands for Wins Above Replacement and is a single number that tries to...",
    "contentFile": "war-importance.txt",
    "images": [
      {
        "src": "/assets/journalism/war-importance/figure-01.png",
        "alt": "How Much Does WAR Really Matter? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/war-importance/figure-02.png",
        "alt": "r = 0.83 (correlation coefficient)",
        "caption": "r = 0.83 (correlation coefficient)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/war-importance/figure-03.png",
        "alt": "How Much Does WAR Really Matter? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/war-importance/figure-04.png",
        "alt": "How Much Does WAR Really Matter? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/war-importance/figure-05.png",
        "alt": "How Much Does WAR Really Matter? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success",
    "authors": [
      "Alvin Huang",
      "Chloe Kim",
      "Kristen Ng",
      "Selena Lam"
    ],
    "date": "Dec 21, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "Every year, the National Basketball Association (NBA) holds an annual player draft. Through this annual draft, teams can increase their chances of winning a championship by drafting players who can help the team. As franchises meticulously select emerging talents, the...",
    "contentFile": "nba-draft-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-01.jpg",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-02.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-03.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-04.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-05.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-06.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-07.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-08.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/nba-draft-analysis/figure-09.png",
        "alt": "Finding NBA’s Hidden Gems: An Analysis of Draft History and Player Success figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      }
    ]
  },
  {
    "title": "The Phasing Out of the Drop Goal",
    "authors": [
      "Brayden Yee"
    ],
    "date": "Dec 21, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 5,
    "summary": "The sport of Rugby has evolved over the years, with one of the methods to scoring largely falling out of favor in recent times. Similar to American Football, there are 3 main ways of scoring. Tries are similar to touchdowns, though they only score 5 points, where the player...",
    "contentFile": "drop-goal.txt",
    "images": [
      {
        "src": "/assets/journalism/drop-goal/figure-01.png",
        "alt": "The Phasing Out of the Drop Goal figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/drop-goal/figure-02.png",
        "alt": "The Phasing Out of the Drop Goal figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/drop-goal/figure-03.png",
        "alt": "The Phasing Out of the Drop Goal figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/drop-goal/figure-04.png",
        "alt": "The Phasing Out of the Drop Goal figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/drop-goal/figure-05.png",
        "alt": "The Phasing Out of the Drop Goal figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA",
    "authors": [
      "Cole Hannum"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "The NBA stands as a testament to the global appeal and impact of basketball, adorned with international stars who've etched their names into its history. From the prolific scoring of Dirk Nowitzki to the awareness and ball handling of Steve Nash, the craftiness of Tony...",
    "contentFile": "rookie-impact-nba.txt",
    "images": [
      {
        "src": "/assets/journalism/rookie-impact-nba/figure-01.png",
        "alt": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/rookie-impact-nba/figure-02.png",
        "alt": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/rookie-impact-nba/figure-03.png",
        "alt": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/rookie-impact-nba/figure-04.png",
        "alt": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/rookie-impact-nba/figure-05.png",
        "alt": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/rookie-impact-nba/figure-06.png",
        "alt": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/rookie-impact-nba/figure-07.png",
        "alt": "Rookie Impact: Unraveling the Immediate Influence of International Talent in the NBA figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      }
    ]
  },
  {
    "title": "Financial Breakdown of Championship-Caliber Teams: Which Positions Do the Best NFL Teams Invest in the Most?",
    "authors": [
      "Atij Mahesh"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 7,
    "summary": "In the ever-evolving landscape of the NFL, success on the field is attributed to a combination of skillful player performance, strategic coaching, and astute financial management. As teams strive for championship glory, allocating financial resources becomes critical in their...",
    "contentFile": "nfl-positional-spending.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl-positional-spending/figure-01.png",
        "alt": "Financial Breakdown of Championship-Caliber Teams: Which Positions Do the Best NFL Teams Invest in the Most? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nfl-positional-spending/figure-02.png",
        "alt": "Financial Breakdown of Championship-Caliber Teams: Which Positions Do the Best NFL Teams Invest in the Most? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nfl-positional-spending/figure-03.png",
        "alt": "Financial Breakdown of Championship-Caliber Teams: Which Positions Do the Best NFL Teams Invest in the Most? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/nfl-positional-spending/figure-04.png",
        "alt": "Financial Breakdown of Championship-Caliber Teams: Which Positions Do the Best NFL Teams Invest in the Most? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "How to Score Touchdowns: An Analytical Approach to Perfecting Red Zone Percentage",
    "authors": [
      "Nathan Wetmore"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 6,
    "summary": "We’ve all seen it happen to our team: the offense marches down the field expertly moving the chains until they arrive at the ten yard line and proceed to run the ball three times into a brick wall or throw three terrible incompletions in the end zone and are forced to settle...",
    "contentFile": "analytical-red-zone-percentage.txt",
    "images": [
      {
        "src": "/assets/journalism/analytical-red-zone-percentage/figure-01.png",
        "alt": "How to Score Touchdowns: An Analytical Approach to Perfecting Red Zone Percentage figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/analytical-red-zone-percentage/figure-02.png",
        "alt": "How to Score Touchdowns: An Analytical Approach to Perfecting Red Zone Percentage figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/analytical-red-zone-percentage/figure-03.png",
        "alt": "How to Score Touchdowns: An Analytical Approach to Perfecting Red Zone Percentage figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/analytical-red-zone-percentage/figure-04.png",
        "alt": "How to Score Touchdowns: An Analytical Approach to Perfecting Red Zone Percentage figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/analytical-red-zone-percentage/figure-05.png",
        "alt": "How to Score Touchdowns: An Analytical Approach to Perfecting Red Zone Percentage figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/analytical-red-zone-percentage/figure-06.png",
        "alt": "How to Score Touchdowns: An Analytical Approach to Perfecting Red Zone Percentage figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "The Evolution of the NBA: A Statistical Analysis of the Growth of NBA Positions",
    "authors": [
      "Krish Jain",
      "Shubhan Yenuganti"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "Over the years, the NBA has grown from a measly peach basket into a worldwide sensation, with millions of people around the globe tuning in daily to watch NBA players streak back and forth across the court, raining threes on each other in high-scoring affairs. However, the...",
    "contentFile": "nba-positional-evolution.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-positional-evolution/figure-01.png",
        "alt": "The Evolution of the NBA: A Statistical Analysis of the Growth of NBA Positions figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nba-positional-evolution/figure-02.png",
        "alt": "The Evolution of the NBA: A Statistical Analysis of the Growth of NBA Positions figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba-positional-evolution/figure-03.png",
        "alt": "The Evolution of the NBA: A Statistical Analysis of the Growth of NBA Positions figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba-positional-evolution/figure-04.png",
        "alt": "The Evolution of the NBA: A Statistical Analysis of the Growth of NBA Positions figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba-positional-evolution/figure-05.png",
        "alt": "The Evolution of the NBA: A Statistical Analysis of the Growth of NBA Positions figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba-positional-evolution/figure-06.png",
        "alt": "The Evolution of the NBA: A Statistical Analysis of the Growth of NBA Positions figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      }
    ]
  },
  {
    "title": "Predicting Career Lifespans of the NBA’s Best Players",
    "authors": [
      "Ryan Liu",
      "Shaash Sivakumar"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "In an era marked by the relentless progress of modern technology and advancements in healthcare, professional athletes, particularly in the realm of the National Basketball Association (NBA), are defying the conventional limits of career longevity. The intersection of...",
    "contentFile": "predicting-nba-career-lifespans.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting-nba-career-lifespans/figure-01.png",
        "alt": "Predicting Career Lifespans of the NBA’s Best Players figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/predicting-nba-career-lifespans/figure-02.png",
        "alt": "Predicting Career Lifespans of the NBA’s Best Players figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/predicting-nba-career-lifespans/figure-03.png",
        "alt": "Predicting Career Lifespans of the NBA’s Best Players figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-nba-career-lifespans/figure-04.png",
        "alt": "Predicting Career Lifespans of the NBA’s Best Players figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/predicting-nba-career-lifespans/figure-05.png",
        "alt": "Predicting Career Lifespans of the NBA’s Best Players figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "How the Arizona Diamondbacks Reached the World Series Against All Odds",
    "authors": [
      "Albert Carreno"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 10,
    "summary": "Since official playoff odds came into existence for major league baseball in 2014, there have been 160 teams that were given less than a 30% chance of making the playoffs before the start of the season. Out of these 160 teams, only 7 have defied the odds to make the playoffs,...",
    "contentFile": "diamondbacks-world-series.txt",
    "images": [
      {
        "src": "/assets/journalism/diamondbacks-world-series/figure-01.png",
        "alt": "How the Arizona Diamondbacks Reached the World Series Against All Odds figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/diamondbacks-world-series/figure-02.png",
        "alt": "How the Arizona Diamondbacks Reached the World Series Against All Odds figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/diamondbacks-world-series/figure-03.png",
        "alt": "How the Arizona Diamondbacks Reached the World Series Against All Odds figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/diamondbacks-world-series/figure-04.png",
        "alt": "How the Arizona Diamondbacks Reached the World Series Against All Odds figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/diamondbacks-world-series/figure-05.png",
        "alt": "How the Arizona Diamondbacks Reached the World Series Against All Odds figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/diamondbacks-world-series/figure-06.png",
        "alt": "This linear regression model strongly validates the above statement, showing a strong positive correlation between a team’s total wins and their pitchers’ LOB%. It has an R-squared value of 0.54.",
        "caption": "This linear regression model strongly validates the above statement, showing a strong positive correlation between a team’s total wins and their pitchers’ LOB%. It has an R-squared value of 0.54.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "Coco Gauff's 2023 Breakthrough",
    "authors": [
      "Sofia Jain",
      "Angelina Muliadi"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Tennis",
    "readTime": 10,
    "summary": "In the dynamic world of women’s tennis, a standout personality has captured the spotlight in recent years–Cori ‘Coco’ Gauff. Born in Delray Beach, Florida, in 2004, Gauff entered the tennis scene as a child prodigy. Yet, it was not until her breakthrough season in 2019 that...",
    "contentFile": "coco-breakthrough.txt",
    "images": [
      {
        "src": "/assets/journalism/coco-breakthrough/figure-01.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-02.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-03.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-04.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-05.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-06.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-07.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-08.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-09.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-10.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-11.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-12.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-13.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/coco-breakthrough/figure-14.png",
        "alt": "Coco Gauff's 2023 Breakthrough figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "How Do Serves Shape the Trajectory of a Tennis Match?",
    "authors": [
      "Millie Huang",
      "Heidi Yu"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Tennis",
    "readTime": 4,
    "summary": "The serve is the shot used to initiate play in tennis, referring to the act of hitting the ball to start a point. The serve is a crucial part of tennis, as it can influence the dynamics of the entire match when setting up the next shot, putting pressure on the opponent,...",
    "contentFile": "tennis-serves-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/tennis-serves-analysis/figure-01.png",
        "alt": "How Do Serves Shape the Trajectory of a Tennis Match? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/tennis-serves-analysis/figure-02.png",
        "alt": "How Do Serves Shape the Trajectory of a Tennis Match? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/tennis-serves-analysis/figure-03.png",
        "alt": "How Do Serves Shape the Trajectory of a Tennis Match? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/tennis-serves-analysis/figure-04.png",
        "alt": "How Do Serves Shape the Trajectory of a Tennis Match? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/tennis-serves-analysis/figure-05.png",
        "alt": "How Do Serves Shape the Trajectory of a Tennis Match? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "The Impact of First Down Play Calling",
    "authors": [
      "Ian Turner"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 9,
    "summary": "Every NFL drive starts with a first down and ten. While third down conversions are much more crucial to overall offensive success, play calls on first downs impact how many yards a team has to gain on second or third down. Of course, there is no one \"right\" play call on first...",
    "contentFile": "first-down-play-calling.txt",
    "images": [
      {
        "src": "/assets/journalism/first-down-play-calling/figure-01.png",
        "alt": "The Impact of First Down Play Calling figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/first-down-play-calling/figure-02.png",
        "alt": "The Impact of First Down Play Calling figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/first-down-play-calling/figure-03.png",
        "alt": "The Impact of First Down Play Calling figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/first-down-play-calling/figure-04.png",
        "alt": "The Impact of First Down Play Calling figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/first-down-play-calling/figure-05.png",
        "alt": "The Impact of First Down Play Calling figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/first-down-play-calling/figure-06.png",
        "alt": "The Impact of First Down Play Calling figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/first-down-play-calling/figure-07.png",
        "alt": "The Impact of First Down Play Calling figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "When Should NFL Teams Go For It On 4th Down?",
    "authors": [
      "Tom Seifert"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 17,
    "summary": "Throughout a football game, each coach is faced with many decisions about what to do on 4th down plays. While converting a 1st down on a 4th down undoubtedly improves a team’s likelihood of scoring on a given offensive drive, the possibility of failing to convert a 4th down...",
    "contentFile": "4th-down-model.txt",
    "images": [
      {
        "src": "/assets/journalism/4th-down-model/figure-01.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-02.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-03.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-04.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-05.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-06.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-07.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-08.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-09.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-10.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-11.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-12.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 58
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-13.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 68
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-14.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 80
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-15.jpg",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-16.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 85
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-17.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 86
      },
      {
        "src": "/assets/journalism/4th-down-model/figure-18.png",
        "alt": "When Should NFL Teams Go For It On 4th Down? figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 88
      }
    ]
  },
  {
    "title": "How can Premier League Transfer Spending Predict Domestic Success?",
    "authors": [
      "Donovan Rimer"
    ],
    "date": "Dec 20, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 12,
    "summary": "Last summer, premier league clubs spent a combined 2.9 billion euros, shattering the record for transfer spending during just one window. This figure, significantly bolstered by contributions from the burgeoning Saudi Pro league, highlights the EPL's status as the biggest...",
    "contentFile": "spending-predict-domestic-success.txt",
    "images": [
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-01.png",
        "alt": "Figure 1",
        "caption": "Figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-02.png",
        "alt": "Figure 2",
        "caption": "Figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-03.png",
        "alt": "How can Premier League Transfer Spending Predict Domestic Success? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-04.png",
        "alt": "Figure 3",
        "caption": "Figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-05.png",
        "alt": "How can Premier League Transfer Spending Predict Domestic Success? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-06.png",
        "alt": "How can Premier League Transfer Spending Predict Domestic Success? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-07.png",
        "alt": "Figure 6",
        "caption": "Figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-08.png",
        "alt": "How can Premier League Transfer Spending Predict Domestic Success? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/spending-predict-domestic-success/figure-09.png",
        "alt": "How can Premier League Transfer Spending Predict Domestic Success? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      }
    ]
  },
  {
    "title": "Home Advantage in the English Premier League – Myth or Reality?",
    "authors": [
      "Mingyang Li",
      "Junying Li"
    ],
    "date": "Dec 19, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 14,
    "summary": "The English Premier League boasts some of the most intimidating stadiums in the world of football. No opposing team would fancy playing in Liverpool’s Anfield Stadium enveloped by an army of Red Kops, or on a cold, wet Tuesday night in Stoke City’s Britannia Stadium. Hence, a...",
    "contentFile": "home-advantage-in-premier-league.txt",
    "images": [
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-01.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-02.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-03.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-04.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-05.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-06.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-07.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-08.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-09.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/home-advantage-in-premier-league/figure-10.png",
        "alt": "Home Advantage in the English Premier League – Myth or Reality? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      }
    ]
  },
  {
    "title": "Messi Mania: Analyzing the Effects of Lionel Messi’s Arrival in Miami on American Soccer",
    "authors": [
      "Kushal Chatterjee"
    ],
    "date": "Dec 18, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "Arguably the greatest soccer player of all time, Lionel Messi, fresh off a World Cup win with Argentina, decided to take his talents to Major League Soccer (MLS) and join David Beckham’s Inter Miami CF in the summer of 2023. The now eight-time Ballon d’Or winner and one of...",
    "contentFile": "messi-mania.txt",
    "images": [
      {
        "src": "/assets/journalism/messi-mania/figure-01.jpg",
        "alt": "Messi Mania: Analyzing the Effects of Lionel Messi’s Arrival in Miami on American Soccer figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/messi-mania/figure-02.jpg",
        "alt": "Messi Mania: Analyzing the Effects of Lionel Messi’s Arrival in Miami on American Soccer figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/messi-mania/figure-03.jpg",
        "alt": "Messi Mania: Analyzing the Effects of Lionel Messi’s Arrival in Miami on American Soccer figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "Do NFL Referees Affect Games?",
    "authors": [
      "Memphis Lau"
    ],
    "date": "Sep 16, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 7,
    "summary": "Seemingly every game, fans of a losing team will blame the referees. But, how true can that statement really be? The role referees play in any sport, and especially the sport of American football, is crucial. A single call, whether correct or incorrect, can change an entire...",
    "contentFile": "nfl-refs.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl-refs/figure-01.png",
        "alt": "Do NFL Referees Affect Games? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nfl-refs/figure-02.png",
        "alt": "Do NFL Referees Affect Games? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nfl-refs/figure-03.png",
        "alt": "Do NFL Referees Affect Games? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nfl-refs/figure-04.jpg",
        "alt": "Do NFL Referees Affect Games? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nfl-refs/figure-05.jpg",
        "alt": "Do NFL Referees Affect Games? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nfl-refs/figure-06.png",
        "alt": "Do NFL Referees Affect Games? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      }
    ]
  },
  {
    "title": "Decoding the Game: Forecasting NBA Champions with Neural Network Algorithms",
    "authors": [
      "BSA Team"
    ],
    "date": "Sep 16, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 3,
    "summary": "Decoding the Game: Forecasting NBA Champions with Neural Network Algorithms by Bruin Sports Analytics.",
    "contentFile": "nba-champs-neural-network.txt"
  },
  {
    "title": "Evolution of the game of cricket: IPL",
    "authors": [
      "Abhinav Madabhushi",
      "Anish Deshpande"
    ],
    "date": "Sep 7, 2023",
    "year": 2023,
    "sport": "General",
    "readTime": 14,
    "summary": "The game of cricket has been changing over the years, just like every other sport. There are changes in the way the game is played, in the way the players approach the game, and sometimes changes in even the rules. Cricket was originally only played in the test format, where...",
    "contentFile": "cricket-ipl-evolution.txt",
    "images": [
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-01.png",
        "alt": "Source: YouGov Sports",
        "caption": "Source: YouGov Sports",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-02.png",
        "alt": "Evolution of the game of cricket: IPL figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-03.png",
        "alt": "Evolution of the game of cricket: IPL figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-04.png",
        "alt": "Evolution of the game of cricket: IPL figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-05.png",
        "alt": "Evolution of the game of cricket: IPL figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-06.png",
        "alt": "Evolution of the game of cricket: IPL figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-07.png",
        "alt": "Evolution of the game of cricket: IPL figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-08.png",
        "alt": "Evolution of the game of cricket: IPL figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-09.png",
        "alt": "Evolution of the game of cricket: IPL figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-10.png",
        "alt": "Evolution of the game of cricket: IPL figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-11.png",
        "alt": "Evolution of the game of cricket: IPL figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-12.png",
        "alt": "Evolution of the game of cricket: IPL figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/cricket-ipl-evolution/figure-13.png",
        "alt": "Evolution of the game of cricket: IPL figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "The Hidden Dynamics Beneath Olympic Swimming",
    "authors": [
      "Jodie Chen"
    ],
    "date": "Sep 6, 2023",
    "year": 2023,
    "sport": "Gymnastics",
    "readTime": 6,
    "summary": "With its blend of power, endurance, and precision, the sport of swimming pushes athletes to their physical and mental limits, leaving spectators awestruck as records are shattered and new champions emerge. However, beneath the surface of this impressive spectacle lies an...",
    "contentFile": "olympic-swimming.txt",
    "images": [
      {
        "src": "/assets/journalism/olympic-swimming/figure-01.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-02.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-03.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-04.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-05.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-06.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-07.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-08.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-09.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-10.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-11.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-12.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-13.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/olympic-swimming/figure-14.png",
        "alt": "The Hidden Dynamics Beneath Olympic Swimming figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      }
    ]
  },
  {
    "title": "Shohei Ohtani and the Emergence of Japanese Talent in the MLB",
    "authors": [
      "Jason Vo"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "On March 21, 2023, in the 9th inning of the World Baseball Classic Championship with 2 outs and no runners on base, Team USA’s Mike Trout came up to bat against Team Japan’s Shohei Ohtani representing the tying run. Both were teammates on the Los Angeles Angels, and the...",
    "contentFile": "shohei-ohtani-and-the-emergence-of-japanese-talent-in-the-mlb.txt",
    "images": [
      {
        "src": "/assets/journalism/shohei-ohtani-and-the-emergence-of-japanese-talent-in-the-mlb/figure-01.png",
        "alt": "Shohei Ohtani and the Emergence of Japanese Talent in the MLB figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/shohei-ohtani-and-the-emergence-of-japanese-talent-in-the-mlb/figure-02.png",
        "alt": "Shohei Ohtani and the Emergence of Japanese Talent in the MLB figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "Which Sport Do Women Make The Most Money In?",
    "authors": [
      "Sreya Muppalla",
      "Zoe Powers"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "Me: “List 5 players who are or who have been on the Los Angeles Lakers without using the internet:” Some Sports Analyst: “LeBron James, Kobe Bryant, Shaq, Anthony Davis, and Kareem-Abdul Jabbar.”",
    "contentFile": "women-salary-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/women-salary-analysis/figure-01.png",
        "alt": "Which Sport Do Women Make The Most Money In? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/women-salary-analysis/figure-02.png",
        "alt": "Which Sport Do Women Make The Most Money In? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/women-salary-analysis/figure-03.png",
        "alt": "Which Sport Do Women Make The Most Money In? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      }
    ]
  },
  {
    "title": "Kim Min-Jae: The Great Wall of Napoli",
    "authors": [
      "Kevin Kim"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "General",
    "readTime": 17,
    "summary": "First of all, congratulations to Napoli for their magical campaign this season. They have been delightful to watch, and have been crowned the champions of the 2022/23 Serie A. Many fans and pundits accredit star players such as Victor Osimhen and Khvicha Kvaratskhelia as the...",
    "contentFile": "kim-min-jae.txt",
    "images": [
      {
        "src": "/assets/journalism/kim-min-jae/figure-01.jpg",
        "alt": "Kim Min-Jae: The Great Wall of Napoli figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/kim-min-jae/figure-02.jpg",
        "alt": "Kim Min-Jae: The Great Wall of Napoli figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/kim-min-jae/figure-03.jpg",
        "alt": "Kim Min-Jae: The Great Wall of Napoli figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/kim-min-jae/figure-04.jpg",
        "alt": "Kim Min-Jae: The Great Wall of Napoli figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/kim-min-jae/figure-05.jpg",
        "alt": "Kim Min-Jae: The Great Wall of Napoli figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 47
      }
    ]
  },
  {
    "title": "The Next MLB Asian Sensations",
    "authors": [
      "Nathan Kim"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 11,
    "summary": "As Asian stars in the MLB continue to proliferate, stars like Shohei Ohtani, Kim Ha Seong, Bae Ji Hwan, and Kodai Senga are able to garner increased attention from international fanbases. However before these players were able to display their talents on the field, many other...",
    "contentFile": "mlb-asian-sensations.txt",
    "images": [
      {
        "src": "/assets/journalism/mlb-asian-sensations/figure-01.png",
        "alt": "The Next MLB Asian Sensations figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 196
      },
      {
        "src": "/assets/journalism/mlb-asian-sensations/figure-02.png",
        "alt": "The Next MLB Asian Sensations figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 198
      },
      {
        "src": "/assets/journalism/mlb-asian-sensations/figure-03.png",
        "alt": "The Next MLB Asian Sensations figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 201
      },
      {
        "src": "/assets/journalism/mlb-asian-sensations/figure-04.png",
        "alt": "The Next MLB Asian Sensations figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 201
      },
      {
        "src": "/assets/journalism/mlb-asian-sensations/figure-05.png",
        "alt": "The Next MLB Asian Sensations figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 204
      },
      {
        "src": "/assets/journalism/mlb-asian-sensations/figure-06.png",
        "alt": "The Next MLB Asian Sensations figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 206
      },
      {
        "src": "/assets/journalism/mlb-asian-sensations/figure-07.png",
        "alt": "The Next MLB Asian Sensations figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 206
      }
    ]
  },
  {
    "title": "Predicting the Rookie Year Stats of the Top Prospects in the 2023 NBA Draft Class",
    "authors": [
      "Ryan Liu",
      "Ashton Chung"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "The talent level in the National Basketball Association (NBA) only grows yearly, and this also seems to be the case for the upcoming draft class. With the unreal hype around this year’s top prospect, Victor Wembanyama, many expect him to make a significant impact in his first...",
    "contentFile": "2023-nba-draft-class.txt",
    "images": [
      {
        "src": "/assets/journalism/2023-nba-draft-class/figure-01.png",
        "alt": "Predicting the Rookie Year Stats of the Top Prospects in the 2023 NBA Draft Class figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "How Can We Predict a Breakout NBA Season?",
    "authors": [
      "Joshua Susanto"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "A breakout season is a phenomenon where a player, seemingly out of nowhere, performs to a much greater standard than previously believed to be within their capabilities. This is not exclusive to a specific sport as most, if not all, recorded competitive sports have seen an...",
    "contentFile": "nba-breakouts.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-breakouts/figure-01.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-02.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-03.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-04.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-05.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-06.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-07.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-08.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/nba-breakouts/figure-09.png",
        "alt": "How Can We Predict a Breakout NBA Season? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      }
    ]
  },
  {
    "title": "How Much of an Impact Has the College Football Transfer Portal Really Made?",
    "authors": [
      "Trent Bellinger"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 5,
    "summary": "The college football transfer portal made its introduction in 2018, and has since revolutionized the way that college football teams recruit players. All of the best college football teams are using the transfer portal as a way to strengthen their rosters, often bringing in...",
    "contentFile": "cfb-transfer-impact.txt",
    "images": [
      {
        "src": "/assets/journalism/cfb-transfer-impact/figure-01.png",
        "alt": "How Much of an Impact Has the College Football Transfer Portal Really Made? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/cfb-transfer-impact/figure-02.png",
        "alt": "How Much of an Impact Has the College Football Transfer Portal Really Made? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/cfb-transfer-impact/figure-03.png",
        "alt": "How Much of an Impact Has the College Football Transfer Portal Really Made? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/cfb-transfer-impact/figure-04.png",
        "alt": "How Much of an Impact Has the College Football Transfer Portal Really Made? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "A Lost Art? Exploring the NBA's Double-Big Lineups",
    "authors": [
      "Nadeev Alam"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 13,
    "summary": "As a Minnesota native, I was devastated on July 1, 2022, when I saw the Utah Jazz were trading Rudy Gobert to the Minnesota Timberwolves. After making the playoffs for the first time since 2018, Timberwolves nonsensically sent away players that were critical to that run and a...",
    "contentFile": "nba-double-bigs.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-double-bigs/figure-01.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-02.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-03.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-04.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-05.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-06.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-07.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-08.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/nba-double-bigs/figure-09.png",
        "alt": "A Lost Art? Exploring the NBA's Double-Big Lineups figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      }
    ]
  },
  {
    "title": "Predicting how Kike Hernandez and Justin Turner’s Chemistry will Help the Red Sox this Season",
    "authors": [
      "Sofia Villalpando"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 3,
    "summary": "Baseball is one of the sports that draws fans in because of friendship, love, and inclusivity. In Major League Baseball, there are thirty teams with 40-man rosters who interact for 189 days of the year, where many teammates and competitors create friendships and bonds that...",
    "contentFile": "hernandez-turner-chemistry.txt",
    "images": [
      {
        "src": "/assets/journalism/hernandez-turner-chemistry/figure-01.png",
        "alt": "Predicting how Kike Hernandez and Justin Turner’s Chemistry will Help the Red Sox this Season figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/hernandez-turner-chemistry/figure-02.png",
        "alt": "Predicting how Kike Hernandez and Justin Turner’s Chemistry will Help the Red Sox this Season figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/hernandez-turner-chemistry/figure-03.png",
        "alt": "Predicting how Kike Hernandez and Justin Turner’s Chemistry will Help the Red Sox this Season figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      }
    ]
  },
  {
    "title": "Debunking the Ranked System: Is Ranked Based on Luck or Skill?",
    "authors": [
      "Krithik Jatavallabhula"
    ],
    "date": "Aug 7, 2023",
    "year": 2023,
    "sport": "General",
    "readTime": 12,
    "summary": "There have been a lot of talks about changing the ranked system in the popular game, League of Legends. Popular LoL players such as Tyler1 have made complaints about this, especially in a game where his teammate purposefully cost their team the game and Tyler1’s rank went...",
    "contentFile": "ranked-lol.txt",
    "images": [
      {
        "src": "/assets/journalism/ranked-lol/figure-01.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-02.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-03.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-04.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-05.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-06.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-07.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-08.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-09.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-10.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-11.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-12.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/ranked-lol/figure-13.png",
        "alt": "Debunking the Ranked System: Is Ranked Based on Luck or Skill? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers?",
    "authors": [
      "Daniel Wang"
    ],
    "date": "Aug 6, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 6,
    "summary": "New this season, the MLB implemented a pitch clock with a 15-second timer between pitches with the bases empty and a 20-second timer between pitches with runners on base. The pitcher must begin his delivery before the clock expires, or else he will be assessed with an...",
    "contentFile": "pitch-clock-effects.txt",
    "images": [
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-01.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-02.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-03.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-04.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-05.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-06.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-07.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/pitch-clock-effects/figure-08.png",
        "alt": "How Has MLB’s New Pitch Clock Affected the Slowest Pitchers? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "The Anomaly of Marcus Jones",
    "authors": [
      "Tom Seifert",
      "Ronan Nayak"
    ],
    "date": "Aug 6, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 8,
    "summary": "The game of football consists of three phases: offense, defense, and special teams. In the NFL, the highest level of football in the world, a player usually only significantly contributes to one phase of the game. Some skill position players, like running backs, wide...",
    "contentFile": "marcus-jones.txt",
    "images": [
      {
        "src": "/assets/journalism/marcus-jones/figure-01.png",
        "alt": "Source: https://www.statmuse.com/nfl",
        "caption": "Source: https://www.statmuse.com/nfl",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/marcus-jones/figure-02.png",
        "alt": "The Anomaly of Marcus Jones figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/marcus-jones/figure-03.png",
        "alt": "The Anomaly of Marcus Jones figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      }
    ]
  },
  {
    "title": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success?",
    "authors": [
      "Amaeya Deshpande"
    ],
    "date": "Jul 22, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 9,
    "summary": "Over the last few years, football fans have commonly formed the notion that teams with a quarterback on a rookie deal are at an advantage due to their low cap hit. While some quarterbacks consume nearly a quarter of the salary cap, quarterbacks on rookie deals take a much...",
    "contentFile": "rookie-qb-success.txt",
    "images": [
      {
        "src": "/assets/journalism/rookie-qb-success/figure-01.png",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/rookie-qb-success/figure-02.png",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/rookie-qb-success/figure-03.png",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/rookie-qb-success/figure-04.png",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/rookie-qb-success/figure-05.png",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/rookie-qb-success/figure-06.png",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/rookie-qb-success/figure-07.jpg",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/rookie-qb-success/figure-08.png",
        "alt": "Do Quarterbacks on Rookie Contracts Allow for Greater Team Success? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "Fixing the NET: Building a New Men’s College Basketball Ranking System",
    "authors": [
      "Leonardo Cardozo"
    ],
    "date": "Jul 17, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "The selection and seeding of college basketball teams for the NCAA tournament has been a complaint among college basketball teams and fans ever since the tournament expanded to 64 teams in 1985. With the combined seeds of the men’s 2023 final four adding up to 23 (5.75 seed...",
    "contentFile": "fixing-net.txt",
    "images": [
      {
        "src": "/assets/journalism/fixing-net/figure-01.png",
        "alt": "Fixing the NET: Building a New Men’s College Basketball Ranking System figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/fixing-net/figure-02.png",
        "alt": "Fixing the NET: Building a New Men’s College Basketball Ranking System figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB",
    "authors": [
      "Robert Reyes"
    ],
    "date": "Jul 17, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 7,
    "summary": "The MLB has had a problem in recent years, with games dragging on longer and longer and fan attendance decreasing. This offseason, the MLB made several changes to its rules with the goal of making games shorter and more interesting by providing more concentrated action. They...",
    "contentFile": "mlb-rule-changes.txt",
    "images": [
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-01.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-02.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-03.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-04.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-05.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-06.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-07.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-08.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/mlb-rule-changes/figure-09.png",
        "alt": "How MLB Got Its Groove Back: Examining How The Rule Changes Have Affected MLB figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Do Season Series Always Determine the Outcome of First Round Playoff Series?",
    "authors": [
      "Rik Mukherjee"
    ],
    "date": "Jul 6, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "Every year when the first round of the NBA Playoffs come around, basketball fans rejoice, as the regular season ends and the “important” part of the season begins. During the playoffs, stars are made or broken, narratives are built, drama is felt. It is meant to be the...",
    "contentFile": "season-series-playoffs.txt",
    "images": [
      {
        "src": "/assets/journalism/season-series-playoffs/figure-01.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-02.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-03.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-04.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-05.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-06.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-07.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-08.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-09.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-10.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-11.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/season-series-playoffs/figure-12.png",
        "alt": "Do Season Series Always Determine the Outcome of First Round Playoff Series? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "How Much Does Defense Affect Goaltending in the NHL?",
    "authors": [
      "Albert Carreno"
    ],
    "date": "Jul 1, 2023",
    "year": 2023,
    "sport": "Hockey",
    "readTime": 9,
    "summary": "A hotly debated question in hockey is how can the defense around a goaltender impact his performance? The answer to this question may seem to be fairly intuitive. If a goaltender is surrounded by a stronger defense, they will perform better according to goaltending metrics...",
    "contentFile": "nhl-defense-goalies.txt",
    "images": [
      {
        "src": "/assets/journalism/nhl-defense-goalies/figure-01.png",
        "alt": "How Much Does Defense Affect Goaltending in the NHL? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/nhl-defense-goalies/figure-02.png",
        "alt": "How Much Does Defense Affect Goaltending in the NHL? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/nhl-defense-goalies/figure-03.png",
        "alt": "How Much Does Defense Affect Goaltending in the NHL? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nhl-defense-goalies/figure-04.png",
        "alt": "How Much Does Defense Affect Goaltending in the NHL? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nhl-defense-goalies/figure-05.png",
        "alt": "How Much Does Defense Affect Goaltending in the NHL? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nhl-defense-goalies/figure-06.png",
        "alt": "How Much Does Defense Affect Goaltending in the NHL? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "A New Era in Westwood",
    "authors": [
      "Nathan Wetmore"
    ],
    "date": "Jul 1, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 9,
    "summary": "For the past five seasons, Chip Kelly has been trying to revive football here in Westwood. The three years immediately before Kelly’s arrival was the Josh Rosen era, a period with a less-than-encouraging number of wins even with a projected first-round NFL quarterback...",
    "contentFile": "bruins-big-ten.txt",
    "images": [
      {
        "src": "/assets/journalism/bruins-big-ten/figure-01.png",
        "alt": "A New Era in Westwood figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/bruins-big-ten/figure-02.png",
        "alt": "A New Era in Westwood figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/bruins-big-ten/figure-03.png",
        "alt": "A New Era in Westwood figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/bruins-big-ten/figure-04.png",
        "alt": "A New Era in Westwood figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/bruins-big-ten/figure-05.png",
        "alt": "A New Era in Westwood figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/bruins-big-ten/figure-06.png",
        "alt": "A New Era in Westwood figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Is Load Management doing more harm than good to NBA players?",
    "authors": [
      "Abel Lula"
    ],
    "date": "Jun 23, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "Just like all other professional sports, the National Basketball Association (NBA) have had their fair share of injury dilemmas. In the last decade, NBA teams have done a plethora of things to attempt to decrease and prevent the amount of injuries that NBA players sustain....",
    "contentFile": "load-management.txt",
    "images": [
      {
        "src": "/assets/journalism/load-management/figure-01.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/load-management/figure-02.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/load-management/figure-03.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/load-management/figure-04.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/load-management/figure-05.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/load-management/figure-06.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/load-management/figure-07.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/load-management/figure-08.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/load-management/figure-09.png",
        "alt": "Is Load Management doing more harm than good to NBA players? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "NFL Player Position Evolution: Impact of Non-WRs Receiving and Non-RBs Rushing",
    "authors": [
      "Atij Mahesh"
    ],
    "date": "Jun 23, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 7,
    "summary": "College football is typically a “testing ground” for specific NFL playbooks and playstyles. Since the 2000s, college football teams have molded their game in a variety of ways: more quarterback options, jet sweeps, and trick plays. These experimental game styles typically are...",
    "contentFile": "nfl-position-evolution.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl-position-evolution/figure-01.jpg",
        "alt": "NFL Player Position Evolution: Impact of Non-WRs Receiving and Non-RBs Rushing figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nfl-position-evolution/figure-02.jpg",
        "alt": "NFL Player Position Evolution: Impact of Non-WRs Receiving and Non-RBs Rushing figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nfl-position-evolution/figure-03.jpg",
        "alt": "NFL Player Position Evolution: Impact of Non-WRs Receiving and Non-RBs Rushing figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nfl-position-evolution/figure-04.png",
        "alt": "NFL Player Position Evolution: Impact of Non-WRs Receiving and Non-RBs Rushing figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nfl-position-evolution/figure-05.jpg",
        "alt": "NFL Player Position Evolution: Impact of Non-WRs Receiving and Non-RBs Rushing figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nfl-position-evolution/figure-06.jpg",
        "alt": "NFL Player Position Evolution: Impact of Non-WRs Receiving and Non-RBs Rushing figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance?",
    "authors": [
      "Paige Lee",
      "Bryan Palmero"
    ],
    "date": "Apr 24, 2023",
    "year": 2023,
    "sport": "Volleyball",
    "readTime": 5,
    "summary": "Volleyball is a sport defined by its mistakes. Hitting a ball into a net, sailing a serve out of bounds or failing to receive - simply put, errors are woven into the fabric of the 128-year old game. They’re terminal actions, and mark the end of rallies.",
    "contentFile": "volleyball_serve.txt",
    "images": [
      {
        "src": "/assets/journalism/volleyball_serve/figure-01.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/volleyball_serve/figure-02.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/volleyball_serve/figure-03.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/volleyball_serve/figure-04.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/volleyball_serve/figure-05.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/volleyball_serve/figure-06.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/volleyball_serve/figure-07.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/volleyball_serve/figure-08.png",
        "alt": "How Do Serve Errors Impact UCLA Men's vs. Women's Volleyball Performance? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "The Battle for Jude Bellingham",
    "authors": [
      "Phillip Jong Min Lee"
    ],
    "date": "Apr 5, 2023",
    "year": 2023,
    "sport": "Soccer",
    "readTime": 10,
    "summary": "As the biggest and most widely played sport this world has ever seen, the soccer industry involves frequent transfers with big money throughout the summer and winter transfer windows. During this passing 2022-23 season, English Premier League clubs alone have spent over 3...",
    "contentFile": "bellingham.txt",
    "images": [
      {
        "src": "/assets/journalism/bellingham/figure-01.png",
        "alt": "The Battle for Jude Bellingham figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/bellingham/figure-02.png",
        "alt": "The Battle for Jude Bellingham figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/bellingham/figure-03.png",
        "alt": "The Battle for Jude Bellingham figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/bellingham/figure-04.png",
        "alt": "The Battle for Jude Bellingham figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/bellingham/figure-05.png",
        "alt": "The Battle for Jude Bellingham figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "College Basketball Conferences",
    "authors": [
      "Memphis Lau"
    ],
    "date": "Apr 5, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "Every year, once March comes around, we all fill out our brackets, most of us doing so blindly and without knowledge of how exactly the tournament works. This article aims to explain how conferences play into the tournament, determine which conferences are worth watching, and...",
    "contentFile": "mid-majors.txt",
    "images": [
      {
        "src": "/assets/journalism/mid-majors/figure-01.png",
        "alt": "College Basketball Conferences figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/mid-majors/figure-02.png",
        "alt": "College Basketball Conferences figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/mid-majors/figure-03.png",
        "alt": "College Basketball Conferences figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/mid-majors/figure-04.png",
        "alt": "College Basketball Conferences figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/mid-majors/figure-05.png",
        "alt": "College Basketball Conferences figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/mid-majors/figure-06.png",
        "alt": "College Basketball Conferences figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/mid-majors/figure-07.png",
        "alt": "College Basketball Conferences figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/mid-majors/figure-08.png",
        "alt": "College Basketball Conferences figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/mid-majors/figure-09.png",
        "alt": "College Basketball Conferences figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/mid-majors/figure-10.png",
        "alt": "College Basketball Conferences figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/mid-majors/figure-11.png",
        "alt": "College Basketball Conferences figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/mid-majors/figure-12.png",
        "alt": "College Basketball Conferences figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/mid-majors/figure-13.png",
        "alt": "College Basketball Conferences figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/mid-majors/figure-14.png",
        "alt": "College Basketball Conferences figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/mid-majors/figure-15.png",
        "alt": "College Basketball Conferences figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/mid-majors/figure-16.png",
        "alt": "College Basketball Conferences figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/mid-majors/figure-17.png",
        "alt": "College Basketball Conferences figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/mid-majors/figure-18.png",
        "alt": "College Basketball Conferences figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/mid-majors/figure-19.png",
        "alt": "College Basketball Conferences figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/mid-majors/figure-20.png",
        "alt": "College Basketball Conferences figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      }
    ]
  },
  {
    "title": "League of Legends: Championing the Rift with Deep Learning Recommendations",
    "authors": [
      "Jun Yu Chen",
      "Eric Xia"
    ],
    "date": "Apr 3, 2023",
    "year": 2023,
    "sport": "Motorsports",
    "readTime": 21,
    "summary": "Picture yourself on the battlefield of Summoner's Rift, your heart racing with anticipation and your fingers poised to unleash a torrent of devastating abilities on your adversaries. As you gaze upon the vast array of champions before you, a daunting question arises: which...",
    "contentFile": "lol-recommender.txt",
    "images": [
      {
        "src": "/assets/journalism/lol-recommender/figure-01.jpg",
        "alt": "Figure 2:  first 10 columns of player_df",
        "caption": "Figure 2:  first 10 columns of player_df",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-02.jpg",
        "alt": "Figure 3:  last 10 columns of player_df",
        "caption": "Figure 3:  last 10 columns of player_df",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-03.jpg",
        "alt": "Figure 5: First 14 columns of the champion_df",
        "caption": "Figure 5: First 14 columns of the champion_df",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-04.jpg",
        "alt": "Figure 6: last 10 columns of the champion_df",
        "caption": "Figure 6: last 10 columns of the champion_df",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-05.png",
        "alt": "Figure 7: Extracted Match Detail Dataframe  ",
        "caption": "Figure 7: Extracted Match Detail Dataframe  ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-06.png",
        "alt": "Figure 8: RiotWatcher’s documentation ",
        "caption": "Figure 8: RiotWatcher’s documentation ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-07.png",
        "alt": "Figure 9: Neural Network Diagram ",
        "caption": "Figure 9: Neural Network Diagram ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-08.jpg",
        "alt": "Figure 10: Neural Network Diagram(Source: Andrew Ng)",
        "caption": "Figure 10: Neural Network Diagram(Source: Andrew Ng)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-09.png",
        "alt": "Figure 11: Loss curve",
        "caption": "Figure 11: Loss curve",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-10.png",
        "alt": "Figure 12: Accuracy curve",
        "caption": "Figure 12: Accuracy curve",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-11.png",
        "alt": "Figure 16: Loss curve",
        "caption": "Figure 16: Loss curve",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-12.png",
        "alt": "Figure 17: Accuracy curve",
        "caption": "Figure 17: Accuracy curve",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-13.png",
        "alt": "Figure 19: Confusion matrix",
        "caption": "Figure 19: Confusion matrix",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-14.jpg",
        "alt": "Figure 22: randomly selected sample from the test_data",
        "caption": "Figure 22: randomly selected sample from the test_data",
        "width": 1200,
        "height": 700,
        "afterParagraph": 49
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-15.jpg",
        "alt": "Figure 23: recommended champions for the sample test_data",
        "caption": "Figure 23: recommended champions for the sample test_data",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-16.jpg",
        "alt": "Figure 27:  sample from test_data",
        "caption": "Figure 27:  sample from test_data",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-17.jpg",
        "alt": "Figure 28:  Recommendation data frame for the sample ",
        "caption": "Figure 28:  Recommendation data frame for the sample ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-18.png",
        "alt": "Figure 30: Player champion mastery points data frame",
        "caption": "Figure 30: Player champion mastery points data frame",
        "width": 1200,
        "height": 700,
        "afterParagraph": 67
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-19.png",
        "alt": "League of Legends: Championing the Rift with Deep Learning Recommendations figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 70
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-20.png",
        "alt": "League of Legends: Championing the Rift with Deep Learning Recommendations figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 70
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-21.png",
        "alt": "Figure 32: top five champion and their champion mastery points for test player",
        "caption": "Figure 32: top five champion and their champion mastery points for test player",
        "width": 1200,
        "height": 700,
        "afterParagraph": 78
      },
      {
        "src": "/assets/journalism/lol-recommender/figure-22.png",
        "alt": "Figure 33: Top five recommendations by collaborative filtering model",
        "caption": "Figure 33: Top five recommendations by collaborative filtering model",
        "width": 1200,
        "height": 700,
        "afterParagraph": 79
      }
    ]
  },
  {
    "title": "The Game and Impact of Adem Bona",
    "authors": [
      "Anthony Rio"
    ],
    "date": "Apr 3, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "Adem Bona is a 19 year old freshman who has started every game in his one season at UCLA. He will likely be a pro soon, but while he’s at UCLA, he is and will continue to be a difference maker for his team. Bona was a highly touted recruit coming out of high school, ranking...",
    "contentFile": "adem-bona.txt",
    "images": [
      {
        "src": "/assets/journalism/adem-bona/figure-01.png",
        "alt": "The Game and Impact of Adem Bona figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/adem-bona/figure-02.png",
        "alt": "The Game and Impact of Adem Bona figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/adem-bona/figure-03.png",
        "alt": "The Game and Impact of Adem Bona figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/adem-bona/figure-04.png",
        "alt": "The Game and Impact of Adem Bona figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s",
    "authors": [
      "Ryan Quach"
    ],
    "date": "Apr 3, 2023",
    "year": 2023,
    "sport": "General",
    "readTime": 10,
    "summary": "Given that the standard of living has generally improved worldwide over the past few decades, it would stand to reason that performances in the more physical sports would also improve as well. And in these sports, athletes also use knowledge and experience from previous...",
    "contentFile": "__1rm.txt",
    "images": [
      {
        "src": "/assets/journalism/__1rm/figure-01.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/__1rm/figure-02.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/__1rm/figure-03.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/__1rm/figure-04.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/__1rm/figure-05.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/__1rm/figure-06.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/__1rm/figure-07.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/__1rm/figure-08.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/__1rm/figure-09.png",
        "alt": "Have powerlifters become stronger in terms of their one-rep max squat over the course of the sport’s figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      }
    ]
  },
  {
    "title": "Can We Predict the Success of Newly Promoted Teams in the English Premier League?",
    "authors": [
      "Hashim Bhat"
    ],
    "date": "Apr 3, 2023",
    "year": 2023,
    "sport": "Soccer",
    "readTime": 7,
    "summary": "The English Premier League is the most watched soccer league in the world, boasting a global audience of 3.2 billion people worldwide. The overwhelming majority of fans who support a team in the EPL root for one of the “Big 6” and, every year, they bite their nails as they...",
    "contentFile": "epl-promoted.txt",
    "images": [
      {
        "src": "/assets/journalism/epl-promoted/figure-01.jpg",
        "alt": "Can We Predict the Success of Newly Promoted Teams in the English Premier League? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/epl-promoted/figure-02.jpg",
        "alt": "Can We Predict the Success of Newly Promoted Teams in the English Premier League? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/epl-promoted/figure-03.jpg",
        "alt": "Can We Predict the Success of Newly Promoted Teams in the English Premier League? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/epl-promoted/figure-04.jpg",
        "alt": "Can We Predict the Success of Newly Promoted Teams in the English Premier League? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/epl-promoted/figure-05.jpg",
        "alt": "Can We Predict the Success of Newly Promoted Teams in the English Premier League? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/epl-promoted/figure-06.jpg",
        "alt": "Can We Predict the Success of Newly Promoted Teams in the English Premier League? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/epl-promoted/figure-07.jpg",
        "alt": "Can We Predict the Success of Newly Promoted Teams in the English Premier League? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      }
    ]
  },
  {
    "title": "How Important is the Quarterback Position for Winning a Super Bowl?",
    "authors": [
      "Daniel Wang"
    ],
    "date": "Apr 1, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 6,
    "summary": "To state the obvious, the NFL is a quarterback-centric league. Quarterbacks are the heart of a football team and lead the offense, more often than not dictating their team’s performance. With that being said, how important is the QB position really for winning a Super Bowl?...",
    "contentFile": "nfl-qb-importance.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl-qb-importance/figure-01.png",
        "alt": "How Important is the Quarterback Position for Winning a Super Bowl? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/nfl-qb-importance/figure-02.png",
        "alt": "How Important is the Quarterback Position for Winning a Super Bowl? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nfl-qb-importance/figure-03.png",
        "alt": "How Important is the Quarterback Position for Winning a Super Bowl? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nfl-qb-importance/figure-04.png",
        "alt": "How Important is the Quarterback Position for Winning a Super Bowl? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nfl-qb-importance/figure-05.png",
        "alt": "How Important is the Quarterback Position for Winning a Super Bowl? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nfl-qb-importance/figure-06.png",
        "alt": "How Important is the Quarterback Position for Winning a Super Bowl? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl-qb-importance/figure-07.jpg",
        "alt": "How Important is the Quarterback Position for Winning a Super Bowl? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      }
    ]
  },
  {
    "title": "What’s Happened to Son Heung Min and Ivan Perisic this season?",
    "authors": [
      "Nathan Kim"
    ],
    "date": "Apr 1, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 6,
    "summary": "Son Heung Min last season was one of the most prolific players in the English Premier League, EPL. With 23 goals and 7 assists and a joint-Golden Boot Winner, expectations were high for Son this 2022-2023 EPL season. However, as the season is coming to an end, his statistics...",
    "contentFile": "sonny.txt",
    "images": [
      {
        "src": "/assets/journalism/sonny/figure-01.png",
        "alt": "What’s Happened to Son Heung Min and Ivan Perisic this season? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/sonny/figure-02.png",
        "alt": "What’s Happened to Son Heung Min and Ivan Perisic this season? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/sonny/figure-03.png",
        "alt": "What’s Happened to Son Heung Min and Ivan Perisic this season? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/sonny/figure-04.png",
        "alt": "What’s Happened to Son Heung Min and Ivan Perisic this season? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Quarterback Mobility and Longevity",
    "authors": [
      "Chinmay Varshneya"
    ],
    "date": "Apr 1, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 8,
    "summary": "In American Football, the quarterback is the leader of the offense, and they traditionally facilitate production through passing. But, with time, a greater emphasis has been placed on a quarterback’s ability to make plays in more ways than one. We can thus introduce some...",
    "contentFile": "qb-mobility.txt",
    "images": [
      {
        "src": "/assets/journalism/qb-mobility/figure-01.png",
        "alt": "Quarterback Mobility and Longevity figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-02.png",
        "alt": "Quarterback Mobility and Longevity figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-03.png",
        "alt": "Quarterback Mobility and Longevity figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-04.png",
        "alt": "Quarterback Mobility and Longevity figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-05.png",
        "alt": "Quarterback Mobility and Longevity figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-06.png",
        "alt": "Quarterback Mobility and Longevity figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-07.png",
        "alt": "Quarterback Mobility and Longevity figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-08.png",
        "alt": "Quarterback Mobility and Longevity figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-09.png",
        "alt": "Quarterback Mobility and Longevity figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-10.png",
        "alt": "Quarterback Mobility and Longevity figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-11.png",
        "alt": "Quarterback Mobility and Longevity figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/qb-mobility/figure-12.png",
        "alt": "Quarterback Mobility and Longevity figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      }
    ]
  },
  {
    "title": "Victor Wembanyama: Destined for Greatness or Premature Retirement?",
    "authors": [
      "Tony Jeon"
    ],
    "date": "Apr 1, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "Considered the greatest basketball prospect since Lebron James, Victor Wembanyama has NBA teams desperate to tank in hopes of landing the first overall pick at the upcoming 2023 NBA draft. Despite other elite prospects such as Scoot Henderson being part of a stacked draft,...",
    "contentFile": "wembanyama.txt",
    "images": [
      {
        "src": "/assets/journalism/wembanyama/figure-01.png",
        "alt": "Victor Wembanyama: Destined for Greatness or Premature Retirement? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/wembanyama/figure-02.png",
        "alt": "Victor Wembanyama: Destined for Greatness or Premature Retirement? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "What Gets You a Shoe Deal In the NBA?",
    "authors": [
      "Tom Seifert",
      "Eric Huang"
    ],
    "date": "Apr 1, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 15,
    "summary": "The NBA has a long history of players securing lucrative shoe deals with top brands, but what factors determine which players are chosen to represent these brands with their own signature shoes? While some may assume that the biggest stars with the most impressive stats...",
    "contentFile": "nba-shoe-deals.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-01.png",
        "alt": "Source: https://www.popularbasketballers.com/ (as of January 2023)",
        "caption": "Source: https://www.popularbasketballers.com/ (as of January 2023)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-02.png",
        "alt": "Source: https://www.sportsmediawatch.com/nba-market-size-nfl-mlb-nhl-nielsen-ratings/ (Data for Toronto unavailable) ",
        "caption": "Source: https://www.sportsmediawatch.com/nba-market-size-nfl-mlb-nhl-nielsen-ratings/ (Data for Toronto unavailable) ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-03.png",
        "alt": "What Gets You a Shoe Deal In the NBA? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-04.png",
        "alt": "What Gets You a Shoe Deal In the NBA? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-05.png",
        "alt": "What Gets You a Shoe Deal In the NBA? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-06.png",
        "alt": "What Gets You a Shoe Deal In the NBA? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-07.png",
        "alt": "What Gets You a Shoe Deal In the NBA? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-08.png",
        "alt": "What Gets You a Shoe Deal In the NBA? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba-shoe-deals/figure-09.png",
        "alt": "What Gets You a Shoe Deal In the NBA? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      }
    ]
  },
  {
    "title": "Analysis of the NBA Hall of Fame",
    "authors": [
      "Trent Bellinger",
      "Derek Nakagawa"
    ],
    "date": "Apr 1, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "Since 1959, the Naismith Memorial Basketball Hall of Fame has honored and celebrated some of the game’s greatest moments and brightest stars.  To be nominated and selected to be in the Hall of Fame is not only a huge honor for the player, but also a sign to know that they...",
    "contentFile": "nba-hof-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-01.png",
        "alt": "Analysis of the NBA Hall of Fame figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-02.png",
        "alt": "Analysis of the NBA Hall of Fame figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-03.png",
        "alt": "Analysis of the NBA Hall of Fame figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-04.png",
        "alt": "Analysis of the NBA Hall of Fame figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-05.png",
        "alt": "Analysis of the NBA Hall of Fame figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-06.png",
        "alt": "Analysis of the NBA Hall of Fame figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-07.png",
        "alt": "Analysis of the NBA Hall of Fame figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba-hof-analysis/figure-08.png",
        "alt": "Analysis of the NBA Hall of Fame figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "Another Playoff Season Gone: What the Chargers Need To Do To Make It to the Super Bowl",
    "authors": [
      "Sofia Villalpando"
    ],
    "date": "Apr 1, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 3,
    "summary": "Over the past five seasons, the Chargers have made the playoffs twice, but have not had a Super Bowl appearance since 1994. With two stellar quarterbacks and an incredible offense, it has been a shock to Chargers fans along the coast why the team hasn’t progressed as far as...",
    "contentFile": "chargers-superbowl.txt",
    "images": [
      {
        "src": "/assets/journalism/chargers-superbowl/figure-01.jpg",
        "alt": "Another Playoff Season Gone: What the Chargers Need To Do To Make It to the Super Bowl figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/chargers-superbowl/figure-02.png",
        "alt": "Another Playoff Season Gone: What the Chargers Need To Do To Make It to the Super Bowl figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/chargers-superbowl/figure-03.png",
        "alt": "Another Playoff Season Gone: What the Chargers Need To Do To Make It to the Super Bowl figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      }
    ]
  },
  {
    "title": "An overview of NBA offenses: playstyles that work",
    "authors": [
      "Abhinav Madabhushi"
    ],
    "date": "Mar 31, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 17,
    "summary": "The NBA has 30 different teams spread across 2 conferences, each with its own coaching staff and players. Each team is composed of players with different abilities and physiques, and each team has a head coach with different methods and strategies in mind. The NBA is as much...",
    "contentFile": "nba-playstyles.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-playstyles/figure-01.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-02.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-03.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-04.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-05.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-06.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-07.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-08.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-09.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-10.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-11.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-12.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/nba-playstyles/figure-13.png",
        "alt": "An overview of NBA offenses: playstyles that work figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      }
    ]
  },
  {
    "title": "Is the Onside Kick an Effective Strategy?",
    "authors": [
      "Leonardo Cardozo"
    ],
    "date": "Mar 31, 2023",
    "year": 2023,
    "sport": "Football",
    "readTime": 5,
    "summary": "In the 2023 Super Bowl, the Eagles led by 10 points at halftime. After scoring on two of their three second half drives, averaging over a field goal a drive, they ended up losing by 3 points. Simply put, the Eagles could not stop the Kansas City Chiefs and Patrick Mahomes, as...",
    "contentFile": "onside-kicks.txt",
    "images": [
      {
        "src": "/assets/journalism/onside-kicks/figure-01.png",
        "alt": "Is the Onside Kick an Effective Strategy? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/onside-kicks/figure-02.png",
        "alt": "Is the Onside Kick an Effective Strategy? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/onside-kicks/figure-03.png",
        "alt": "Is the Onside Kick an Effective Strategy? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/onside-kicks/figure-04.png",
        "alt": "Is the Onside Kick an Effective Strategy? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/onside-kicks/figure-05.png",
        "alt": "Is the Onside Kick an Effective Strategy? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/onside-kicks/figure-06.png",
        "alt": "Is the Onside Kick an Effective Strategy? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      }
    ]
  },
  {
    "title": "Why MLS is the Best League in the World",
    "authors": [
      "Bennett Kedrosky"
    ],
    "date": "Mar 31, 2023",
    "year": 2023,
    "sport": "Soccer",
    "readTime": 6,
    "summary": "MLS is the best league in the world. But best doesn’t mean it has the greatest players, coaches, or even the highest quality of play. As a sporting spectacle, however,  MLS has the most compelling combination of competitive parity, coaching, and quality of play. Consider...",
    "contentFile": "why-the-mls-is-the-best-league-in-the-world.txt",
    "images": [
      {
        "src": "/assets/journalism/why-the-mls-is-the-best-league-in-the-world/figure-01.png",
        "alt": "Why MLS is the Best League in the World figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/why-the-mls-is-the-best-league-in-the-world/figure-02.png",
        "alt": "Why MLS is the Best League in the World figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/why-the-mls-is-the-best-league-in-the-world/figure-03.png",
        "alt": "Why MLS is the Best League in the World figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/why-the-mls-is-the-best-league-in-the-world/figure-04.png",
        "alt": "Why MLS is the Best League in the World figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Shooting For the Stars: Increasing Usage Rates in the NBA",
    "authors": [
      "Nadeev Alam",
      "Nathan Wetmore"
    ],
    "date": "Mar 31, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "There is no doubt that today’s NBA is a stars’ league. Star players have unprecedented control over all levels of their basketball team. Today, the league’s superstars often give significant input on their team’s roster and coaching staff decisions. NBA fans commonly refer to...",
    "contentFile": "star-usage-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/star-usage-analysis/figure-01.png",
        "alt": "Shooting For the Stars: Increasing Usage Rates in the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/star-usage-analysis/figure-02.png",
        "alt": "Shooting For the Stars: Increasing Usage Rates in the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/star-usage-analysis/figure-03.png",
        "alt": "Shooting For the Stars: Increasing Usage Rates in the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/star-usage-analysis/figure-04.png",
        "alt": "Shooting For the Stars: Increasing Usage Rates in the NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/star-usage-analysis/figure-05.png",
        "alt": "Shooting For the Stars: Increasing Usage Rates in the NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/star-usage-analysis/figure-06.png",
        "alt": "Shooting For the Stars: Increasing Usage Rates in the NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "The Effect of College Conference on an NBA Prospect’s Draft Perception",
    "authors": [
      "Matthew Sasaki"
    ],
    "date": "Mar 31, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 5,
    "summary": "Part of what makes the NBA Draft so special is the controversy and disagreements that arise over player evaluations. In ranking players, draftniks rely primarily on easily quantifiable metrics like college statistics and measurables. In general, players that put up bigger...",
    "contentFile": "draft-conferences.txt",
    "images": [
      {
        "src": "/assets/journalism/draft-conferences/figure-01.jpg",
        "alt": "The Effect of College Conference on an NBA Prospect’s Draft Perception figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/draft-conferences/figure-02.jpg",
        "alt": "The Effect of College Conference on an NBA Prospect’s Draft Perception figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/draft-conferences/figure-03.jpg",
        "alt": "The Effect of College Conference on an NBA Prospect’s Draft Perception figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/draft-conferences/figure-04.png",
        "alt": "The Effect of College Conference on an NBA Prospect’s Draft Perception figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/draft-conferences/figure-05.jpg",
        "alt": "The Effect of College Conference on an NBA Prospect’s Draft Perception figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/draft-conferences/figure-06.png",
        "alt": "The Effect of College Conference on an NBA Prospect’s Draft Perception figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "Predicting the 2023 NHL Stanley Cup Winner",
    "authors": [
      "Albert Carreno"
    ],
    "date": "Mar 31, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 18,
    "summary": "As we reach the end of winter and enter the start of spring, hockey fans only have one thing on their minds: the NHL Stanley Cup playoffs. In 1917, the NHL was established as a professional sports league, but only included six Canadian teams. 106 years later, the league has...",
    "contentFile": "predicting-nhl.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting-nhl/figure-01.png",
        "alt": "Predicting the 2023 NHL Stanley Cup Winner figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/predicting-nhl/figure-02.png",
        "alt": "Predicting the 2023 NHL Stanley Cup Winner figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/predicting-nhl/figure-03.png",
        "alt": "Predicting the 2023 NHL Stanley Cup Winner figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/predicting-nhl/figure-04.png",
        "alt": "Predicting the 2023 NHL Stanley Cup Winner figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/predicting-nhl/figure-05.png",
        "alt": "Predicting the 2023 NHL Stanley Cup Winner figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/predicting-nhl/figure-06.png",
        "alt": "Predicting the 2023 NHL Stanley Cup Winner figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/predicting-nhl/figure-07.png",
        "alt": "Predicting the 2023 NHL Stanley Cup Winner figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Examining the Biggest 2023 MLB Position Player Contracts",
    "authors": [
      "Robert Reyes"
    ],
    "date": "Mar 31, 2023",
    "year": 2023,
    "sport": "Baseball",
    "readTime": 12,
    "summary": "Every year, contracts handed out to MLB players rise in value. Millions and millions of dollars are thrown at free agents by teams in hopes to sign the biggest names on the market. This year was no different, as Aaron Judge (9 years, $360 million, $40 Annual Average Value),...",
    "contentFile": "mlb-contract-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/mlb-contract-analysis/figure-01.png",
        "alt": "Examining the Biggest 2023 MLB Position Player Contracts figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/mlb-contract-analysis/figure-02.png",
        "alt": "Examining the Biggest 2023 MLB Position Player Contracts figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/mlb-contract-analysis/figure-03.png",
        "alt": "Examining the Biggest 2023 MLB Position Player Contracts figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Who is the Most ‘Like Mike’: A Statistical Breakdown",
    "authors": [
      "Joshua Susanto"
    ],
    "date": "Mar 30, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "Basketball is an electrifying sport, with millions of players around the planet constantly honing their skills for the game they love. Throughout the many years of the sport’s existence, only a select few have been able to compete among the greatest and rise to basketball...",
    "contentFile": "like-mike.txt",
    "images": [
      {
        "src": "/assets/journalism/like-mike/figure-01.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/like-mike/figure-02.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/like-mike/figure-03.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 62
      },
      {
        "src": "/assets/journalism/like-mike/figure-04.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/like-mike/figure-05.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 67
      },
      {
        "src": "/assets/journalism/like-mike/figure-06.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 68
      },
      {
        "src": "/assets/journalism/like-mike/figure-07.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 73
      },
      {
        "src": "/assets/journalism/like-mike/figure-08.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 74
      },
      {
        "src": "/assets/journalism/like-mike/figure-09.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 78
      },
      {
        "src": "/assets/journalism/like-mike/figure-10.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 79
      },
      {
        "src": "/assets/journalism/like-mike/figure-11.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      },
      {
        "src": "/assets/journalism/like-mike/figure-12.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      },
      {
        "src": "/assets/journalism/like-mike/figure-13.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      },
      {
        "src": "/assets/journalism/like-mike/figure-14.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      },
      {
        "src": "/assets/journalism/like-mike/figure-15.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      },
      {
        "src": "/assets/journalism/like-mike/figure-16.png",
        "alt": "Who is the Most ‘Like Mike’: A Statistical Breakdown figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 83
      }
    ]
  },
  {
    "title": "Predicting the 2023 Formula One Season",
    "authors": [
      "Ella Hinkle",
      "Taylor Fenton"
    ],
    "date": "Mar 25, 2023",
    "year": 2023,
    "sport": "Motorsports",
    "readTime": 9,
    "summary": "Predicting the 2023 Formula One Season With the help of the Netflix docuseries Drive to Survive, Formula One is quickly rising in popularity and gaining a new audience outside of its typically European viewership. Formula One is the highest-class international open-wheel...",
    "contentFile": "f1-preds.txt",
    "images": [
      {
        "src": "/assets/journalism/f1-preds/figure-01.png",
        "alt": "Predicting the 2023 Formula One Season figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/f1-preds/figure-02.png",
        "alt": "Predicting the 2023 Formula One Season figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/f1-preds/figure-03.png",
        "alt": "Predicting the 2023 Formula One Season figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/f1-preds/figure-04.png",
        "alt": "Predicting the 2023 Formula One Season figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/f1-preds/figure-05.png",
        "alt": "Predicting the 2023 Formula One Season figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/f1-preds/figure-06.png",
        "alt": "Predicting the 2023 Formula One Season figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/f1-preds/figure-07.png",
        "alt": "Predicting the 2023 Formula One Season figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/f1-preds/figure-08.png",
        "alt": "Predicting the 2023 Formula One Season figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/f1-preds/figure-09.png",
        "alt": "Predicting the 2023 Formula One Season figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/f1-preds/figure-10.png",
        "alt": "Predicting the 2023 Formula One Season figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/f1-preds/figure-11.png",
        "alt": "Predicting the 2023 Formula One Season figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/f1-preds/figure-12.png",
        "alt": "Predicting the 2023 Formula One Season figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/f1-preds/figure-13.png",
        "alt": "Predicting the 2023 Formula One Season figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/f1-preds/figure-14.png",
        "alt": "Predicting the 2023 Formula One Season figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/f1-preds/figure-15.png",
        "alt": "Predicting the 2023 Formula One Season figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "The Statistics that Help Win NBA Championships",
    "authors": [
      "Ryan Kawamura"
    ],
    "date": "Feb 13, 2023",
    "year": 2023,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "With a new stream of talent coming from college and across the world to the NBA, basketball is and forever will be a constantly changing game. However, is there a statistic that proves to be the most important and indicative of a championship caliber team? In this project, I...",
    "contentFile": "stats-nba-champs.txt",
    "images": [
      {
        "src": "/assets/journalism/stats-nba-champs/figure-01.png",
        "alt": "The Statistics that Help Win NBA Championships figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-02.png",
        "alt": "The Statistics that Help Win NBA Championships figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-03.png",
        "alt": "The Statistics that Help Win NBA Championships figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-04.png",
        "alt": "The Statistics that Help Win NBA Championships figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-05.png",
        "alt": "The Statistics that Help Win NBA Championships figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-06.png",
        "alt": "The Statistics that Help Win NBA Championships figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-07.png",
        "alt": "The Statistics that Help Win NBA Championships figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-08.png",
        "alt": "The Statistics that Help Win NBA Championships figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-09.png",
        "alt": "The Statistics that Help Win NBA Championships figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/stats-nba-champs/figure-10.png",
        "alt": "The Statistics that Help Win NBA Championships figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "Predicting the Premier League 2022-2023 Table Using Goal Difference",
    "authors": [
      "Hashim Bhat",
      "Daniel (Seungmo) Lee"
    ],
    "date": "Jan 5, 2023",
    "year": 2023,
    "sport": "Soccer",
    "readTime": 6,
    "summary": "It’s a well-known fact that soccer is the most popular sport worldwide, bringing together billions of fans from all over the world to enjoy the beautiful game. The English Premier League, founded in 1992, boasts the most viewership out of any professional soccer league, with...",
    "contentFile": "predicting-the-premier-league-2022-2023-table-using-goal-difference.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-01.png",
        "alt": "Predicting the Premier League 2022-2023 Table Using Goal Difference figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-02.png",
        "alt": "Predicting the Premier League 2022-2023 Table Using Goal Difference figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-03.png",
        "alt": "Predicting the Premier League 2022-2023 Table Using Goal Difference figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-04.png",
        "alt": "Predicting the Premier League 2022-2023 Table Using Goal Difference figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/predicting-the-premier-league-2022-2023-table-using-goal-difference/figure-05.png",
        "alt": "Predicting the Premier League 2022-2023 Table Using Goal Difference figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      }
    ]
  },
  {
    "title": "The Return of the No.9",
    "authors": [
      "Phillip Jong Min Lee"
    ],
    "date": "Dec 31, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "In any popular sport in the modern era, the main stars are often those who are responsible for the offensive part of the game. Basketball fans point to players like Michael Jordan and Lebron James when asked to choose the greatest basketball player of all time. Football fans...",
    "contentFile": "the-return-of-the-no-9.txt",
    "images": [
      {
        "src": "/assets/journalism/the-return-of-the-no-9/figure-01.png",
        "alt": "xG vs goals broken down by each player",
        "caption": "xG vs goals broken down by each player",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/the-return-of-the-no-9/figure-02.png",
        "alt": "The Return of the No.9 figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/the-return-of-the-no-9/figure-03.png",
        "alt": "The Return of the No.9 figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/the-return-of-the-no-9/figure-04.png",
        "alt": "SCA - PassLive = completed live ball passes that lead to a shot attempt",
        "caption": "SCA - PassLive = completed live ball passes that lead to a shot attempt",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "Is Trading Down in the First Round of the NFL Draft Beneficial?",
    "authors": [
      "Amaeya Deshpande"
    ],
    "date": "Dec 17, 2022",
    "year": 2022,
    "sport": "Football",
    "readTime": 13,
    "summary": "There is no doubt that team-building is one of the primary factors in launching a team to the Super Bowl. That final destination in February cannot be reached without successful windows from March to April in the years prior. The free agency period and the NFL Draft are...",
    "contentFile": "nfl_trading_down.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl_trading_down/figure-01.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-02.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-03.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-04.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-05.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-06.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-07.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-08.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-09.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-10.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nfl_trading_down/figure-11.png",
        "alt": "Is Trading Down in the First Round of the NFL Draft Beneficial? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "Predicting Pitches",
    "authors": [
      "Alisha Dhar"
    ],
    "date": "Dec 16, 2022",
    "year": 2022,
    "sport": "Baseball",
    "readTime": 8,
    "summary": "The MLB has been the leading sport to utilize analytics in recent years. From deciding where to place fielders in a shift to predicting which prospects are going to be successful in the major leagues, data analytics is incorporated into all aspects of the game. A few years...",
    "contentFile": "predicting-pitches.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting-pitches/figure-01.jpg",
        "alt": "Predicting Pitches figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-02.jpg",
        "alt": "Predicting Pitches figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-03.jpg",
        "alt": "Predicting Pitches figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-04.jpg",
        "alt": "Predicting Pitches figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-05.jpg",
        "alt": "Predicting Pitches figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-06.jpg",
        "alt": "Predicting Pitches figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-07.jpg",
        "alt": "Predicting Pitches figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-08.jpg",
        "alt": "Predicting Pitches figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-09.jpg",
        "alt": "Predicting Pitches figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-10.jpg",
        "alt": "Predicting Pitches figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-11.jpg",
        "alt": "Predicting Pitches figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-12.jpg",
        "alt": "Predicting Pitches figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-13.jpg",
        "alt": "Predicting Pitches figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-14.jpg",
        "alt": "Predicting Pitches figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-15.jpg",
        "alt": "Predicting Pitches figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-16.jpg",
        "alt": "Predicting Pitches figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-17.jpg",
        "alt": "Predicting Pitches figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/predicting-pitches/figure-18.jpg",
        "alt": "Predicting Pitches figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline?",
    "authors": [
      "Ryan Quach"
    ],
    "date": "Dec 15, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "In his prime, Shaquille O’Neal had no equal. Weighing 325 pounds at 7’1, O’Neal would utilize his sheer physical advantage in conjunction with his post skills to become arguably the most dominant center in NBA history. The disparity between O’Neal and other players in the...",
    "contentFile": "shaq-zone-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-01.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-02.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-03.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-04.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-05.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-06.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-07.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/shaq-zone-analysis/figure-08.png",
        "alt": "Did the legalization of zone defense in 2002 cause Shaquille O’Neal’s scoring to decline? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "How Does Age Impact Swimming Performance?",
    "authors": [
      "Aashna Sibal"
    ],
    "date": "Dec 15, 2022",
    "year": 2022,
    "sport": "Gymnastics",
    "readTime": 7,
    "summary": "Performance in swimming is determined by a variety of factors – agility, muscular strength, experience, height, and many more. Of course, having an advantage in one area does not guarantee one’s success in swimming, but having a perfect blend of various different ones can be...",
    "contentFile": "swim-age-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/swim-age-analysis/figure-01.png",
        "alt": "How Does Age Impact Swimming Performance? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/swim-age-analysis/figure-02.png",
        "alt": "How Does Age Impact Swimming Performance? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/swim-age-analysis/figure-03.png",
        "alt": "How Does Age Impact Swimming Performance? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/swim-age-analysis/figure-04.png",
        "alt": "How Does Age Impact Swimming Performance? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 61
      }
    ]
  },
  {
    "title": "Success and Aggression on the Serve",
    "authors": [
      "Chinmay Varshneya",
      "Leo Cardozo"
    ],
    "date": "Dec 15, 2022",
    "year": 2022,
    "sport": "Tennis",
    "readTime": 6,
    "summary": "There’s only one stroke in tennis which a player can entirely control, the serve. With the serve, players have the ability to finish a point without hitting another shot. As a result, being on serve poses a tremendous advantage, as the average professional servers hold serve...",
    "contentFile": "serve_success.txt",
    "images": [
      {
        "src": "/assets/journalism/serve_success/figure-01.png",
        "alt": "Success and Aggression on the Serve figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/serve_success/figure-02.png",
        "alt": "Success and Aggression on the Serve figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/serve_success/figure-03.png",
        "alt": "Success and Aggression on the Serve figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/serve_success/figure-04.png",
        "alt": "Success and Aggression on the Serve figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance?",
    "authors": [
      "Paige Lee",
      "Shuqin (Sue) Tang"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Gymnastics",
    "readTime": 6,
    "summary": "Historically, there has been a disproportionate number of male coaches in the Olympic Games. In the Tokyo 2020 Summer Olympics, only 13% of the coaches were females. Given that a record number of female athletes competed in the Beijing 2022 Winter Olympics (constituting 45%...",
    "contentFile": "olympic_curling.txt",
    "images": [
      {
        "src": "/assets/journalism/olympic_curling/figure-01.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-02.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-03.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-04.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-05.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-06.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-07.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-08.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/olympic_curling/figure-09.png",
        "alt": "How Does a Coach’s Gender Impact Their Team’s Olympic Curling Performance? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "Carlos Alcaraz, Tennis’ Youngest World No. 1",
    "authors": [
      "Jerry Shi"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Tennis",
    "readTime": 5,
    "summary": "With the ascension of Roger Federer to the throne as ATP World No.1 in 2004, only the Big Three—Roger Federer, Novak Djokovic, and Rafael Nadal—and Andy Murrary have been able to reach the No.1 Ranking in the past 18 years. However in 2022, with Federer’s retirement, Nadal’s...",
    "contentFile": "carlos_alcaraz_no1.txt",
    "images": [
      {
        "src": "/assets/journalism/carlos_alcaraz_no1/figure-01.png",
        "alt": "Includes the age upon reaching World No.1 for all 28 players",
        "caption": "Includes the age upon reaching World No.1 for all 28 players",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/carlos_alcaraz_no1/figure-02.png",
        "alt": "Carlos Alcaraz, Tennis’ Youngest World No. 1 figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/carlos_alcaraz_no1/figure-03.png",
        "alt": "Carlos Alcaraz, Tennis’ Youngest World No. 1 figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/carlos_alcaraz_no1/figure-04.png",
        "alt": "Carlos Alcaraz, Tennis’ Youngest World No. 1 figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/carlos_alcaraz_no1/figure-05.png",
        "alt": "Carlos Alcaraz, Tennis’ Youngest World No. 1 figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "What Does it Take to Win the FIFA World Cup",
    "authors": [
      "Ella Hinkle",
      "Taylor Fenton"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Football",
    "readTime": 7,
    "summary": "The FIFA World Cup is where dreams are made. The golden trophy from this most prestigious tournament in the world is what every soccer player looks up to and dedicates their lives for. Numerous players across the globe gather to compete in this tournament to represent their...",
    "contentFile": "win_world_cup.txt",
    "images": [
      {
        "src": "/assets/journalism/win_world_cup/figure-01.png",
        "alt": "What Does it Take to Win the FIFA World Cup figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/win_world_cup/figure-02.png",
        "alt": "What Does it Take to Win the FIFA World Cup figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/win_world_cup/figure-03.png",
        "alt": "What Does it Take to Win the FIFA World Cup figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/win_world_cup/figure-04.png",
        "alt": "What Does it Take to Win the FIFA World Cup figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/win_world_cup/figure-05.png",
        "alt": "What Does it Take to Win the FIFA World Cup figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/win_world_cup/figure-06.png",
        "alt": "What Does it Take to Win the FIFA World Cup figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/win_world_cup/figure-07.png",
        "alt": "What Does it Take to Win the FIFA World Cup figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      }
    ]
  },
  {
    "title": "The Premier League’s Best Right Back: Reece James vs. Trent Alexander-Arnold",
    "authors": [
      "Tony Jeon"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 8,
    "summary": "For the past few seasons, the conversation of the best right back in the Premier League has been dominated by Chelsea’s Reece James and Liverpool’s Trent Alexander-Arnold. As a product of the Liverpool youth system, Alexander-Arnold made his senior debut in 2016 and...",
    "contentFile": "pl_best_right_back.txt",
    "images": [
      {
        "src": "/assets/journalism/pl_best_right_back/figure-01.png",
        "alt": "The Premier League’s Best Right Back: Reece James vs. Trent Alexander-Arnold figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/pl_best_right_back/figure-02.png",
        "alt": "The Premier League’s Best Right Back: Reece James vs. Trent Alexander-Arnold figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/pl_best_right_back/figure-03.png",
        "alt": "The Premier League’s Best Right Back: Reece James vs. Trent Alexander-Arnold figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/pl_best_right_back/figure-04.png",
        "alt": "The Premier League’s Best Right Back: Reece James vs. Trent Alexander-Arnold figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/pl_best_right_back/figure-05.png",
        "alt": "The Premier League’s Best Right Back: Reece James vs. Trent Alexander-Arnold figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/pl_best_right_back/figure-06.png",
        "alt": "The Premier League’s Best Right Back: Reece James vs. Trent Alexander-Arnold figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "How to Build the Perfect Skateboarder",
    "authors": [
      "Daniel Wang",
      "Robin Lee"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Gymnastics",
    "readTime": 6,
    "summary": "Throughout the 2010s, skateboarding as a sport swelled exponentially, not only in its popularity and viewership, but also cultural impact—subtly influencing various aspects of day-to-day life around the world. Through iconic brands like Supreme and Stussy, skateboarding’s...",
    "contentFile": "perfect_skateboarder.txt",
    "images": [
      {
        "src": "/assets/journalism/perfect_skateboarder/figure-01.png",
        "alt": "The park course for Tokyo 2020 ©California Skateparks",
        "caption": "The park course for Tokyo 2020 ©California Skateparks",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/perfect_skateboarder/figure-02.png",
        "alt": "The park course for Tokyo 2020 ©California Skateparks",
        "caption": "The park course for Tokyo 2020 ©California Skateparks",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/perfect_skateboarder/figure-03.png",
        "alt": "A snippet of our dataset",
        "caption": "A snippet of our dataset",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/perfect_skateboarder/figure-04.png",
        "alt": "How to Build the Perfect Skateboarder figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/perfect_skateboarder/figure-05.png",
        "alt": "How to Build the Perfect Skateboarder figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/perfect_skateboarder/figure-06.png",
        "alt": "How to Build the Perfect Skateboarder figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/perfect_skateboarder/figure-07.png",
        "alt": "How to Build the Perfect Skateboarder figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "Which Position is the Best Fantasy Football FLEX Option?",
    "authors": [
      "Caitlin Ree"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Football",
    "readTime": 7,
    "summary": "Every year, millions of football fans around the world attempt to assemble their perfect fantasy football team, pulling players from the 32 NFL teams to fill every spot on their roster. Every fantasy football manager has a standard set of positions to fill (one quarterback,...",
    "contentFile": "fantasy_flex.txt",
    "images": [
      {
        "src": "/assets/journalism/fantasy_flex/figure-01.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/fantasy_flex/figure-02.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/fantasy_flex/figure-03.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/fantasy_flex/figure-04.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/fantasy_flex/figure-05.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/fantasy_flex/figure-06.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/fantasy_flex/figure-07.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/fantasy_flex/figure-08.png",
        "alt": "Which Position is the Best Fantasy Football FLEX Option? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      }
    ]
  },
  {
    "title": "Should NFL Teams Have Hope After Disappointing Seasons?",
    "authors": [
      "Jasmine Jungreis"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Football",
    "readTime": 6,
    "summary": "In any given NFL matchup, random factors such as poor officiating, unforeseen injuries, or dropped passes have a substantial impact on the outcome of the game. In the last NFL season, underdogs won nearly 36% of games. This gives teams and fans hope, even when facing...",
    "contentFile": "nfl_season_by_season.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-01.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-02.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-03.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-04.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-05.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-06.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-07.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-08.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nfl_season_by_season/figure-09.png",
        "alt": "Should NFL Teams Have Hope After Disappointing Seasons? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Butt Plugs And Blunders: Did Hans Niemann Cheat Or Is Magnus Carlsen A Sore Loser?",
    "authors": [
      "Bennett Kedrosky"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "General",
    "readTime": 6,
    "summary": "On September 4, 2022, Hans Niemann shocked the chess world by defeating the world chess champion Magnus Carlsen in the 3rd round of the Sinquefield Cup. Coming off of a 53-game unbeaten streak of in-person (called “over-the-board” by chess players) matches, nobody expected...",
    "contentFile": "niemann-cheating.txt",
    "images": [
      {
        "src": "/assets/journalism/niemann-cheating/figure-01.png",
        "alt": "Source: Magnus Carlsen on Twitter",
        "caption": "Source: Magnus Carlsen on Twitter",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/niemann-cheating/figure-02.png",
        "alt": "Butt Plugs And Blunders: Did Hans Niemann Cheat Or Is Magnus Carlsen A Sore Loser? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/niemann-cheating/figure-03.png",
        "alt": "Butt Plugs And Blunders: Did Hans Niemann Cheat Or Is Magnus Carlsen A Sore Loser? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/niemann-cheating/figure-04.png",
        "alt": "Butt Plugs And Blunders: Did Hans Niemann Cheat Or Is Magnus Carlsen A Sore Loser? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "How Effective is Small Ball?",
    "authors": [
      "Abhinav Madabhushi",
      "Andy Zhang"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "As the NBA evolves, teams have started to play smaller and smaller. In the past, teams have built around their star centers, with players like Wilt Chamberlain, Kareem Abdul-Jabbar, and Shaquille O’Neal dominating the ball on both sides of the court. Now, teams are starting...",
    "contentFile": "small-ball-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/small-ball-analysis/figure-01.png",
        "alt": "How Effective is Small Ball? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-02.png",
        "alt": "How Effective is Small Ball? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-03.png",
        "alt": "How Effective is Small Ball? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-04.png",
        "alt": "How Effective is Small Ball? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-05.png",
        "alt": "How Effective is Small Ball? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-06.png",
        "alt": "How Effective is Small Ball? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-07.png",
        "alt": "How Effective is Small Ball? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-08.png",
        "alt": "How Effective is Small Ball? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-09.png",
        "alt": "How Effective is Small Ball? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-10.png",
        "alt": "How Effective is Small Ball? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-11.png",
        "alt": "How Effective is Small Ball? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-12.png",
        "alt": "How Effective is Small Ball? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-13.png",
        "alt": "How Effective is Small Ball? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-14.png",
        "alt": "How Effective is Small Ball? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-15.png",
        "alt": "How Effective is Small Ball? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-16.png",
        "alt": "How Effective is Small Ball? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-17.png",
        "alt": "How Effective is Small Ball? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/small-ball-analysis/figure-18.png",
        "alt": "How Effective is Small Ball? figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Predictions For Zion Williamson In The 2022 NBA Season",
    "authors": [
      "Jun Yu Chen",
      "Eric Xia"
    ],
    "date": "Dec 14, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 16,
    "summary": "We all know that injury is an inevitable, yet unforeseeable part of basketball. In particular, in a professional league that is as competitive and physical as the NBA, we have witnessed career-ending injuries that ruin the bright future of many rising elites. On the other...",
    "contentFile": "zion-prediction.txt",
    "images": [
      {
        "src": "/assets/journalism/zion-prediction/figure-01.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-02.jpg",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-03.jpg",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-04.jpg",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-05.jpg",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-06.jpg",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-07.jpg",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-08.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-09.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-10.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-11.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 49
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-12.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-13.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 61
      },
      {
        "src": "/assets/journalism/zion-prediction/figure-14.png",
        "alt": "Predictions For Zion Williamson In The 2022 NBA Season figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 66
      }
    ]
  },
  {
    "title": "How Can We Accurately Compare NBA Players Across Different Eras?",
    "authors": [
      "Daniel Wang"
    ],
    "date": "Dec 13, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "Jordan or LeBron: Who is the “GOAT”? Cross-era comparisons are often at the center of NBA discussions, but the style of play in the NBA has changed drastically over time, making it nearly impossible to directly compare players from different eras. In this article, I will...",
    "contentFile": "nba-era-comparisons.txt",
    "images": [
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-01.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-02.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-03.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-04.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-05.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-06.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-07.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-08.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-09.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-10.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-11.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-12.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba-era-comparisons/figure-13.png",
        "alt": "How Can We Accurately Compare NBA Players Across Different Eras? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      }
    ]
  },
  {
    "title": "Analyzing the MLB \"Sticky Stuff” Ban",
    "authors": [
      "Zayne Kratz"
    ],
    "date": "Dec 13, 2022",
    "year": 2022,
    "sport": "Baseball",
    "readTime": 5,
    "summary": "In baseball, pitchers and hitters alike are always looking for ways to improve.  For a while, pitchers have been putting different substances on their hands, including rosin, pine tar and sunscreen in order to help them get a better grip in the baseball to get more spin on...",
    "contentFile": "mlb-sticky-stuff.txt",
    "images": [
      {
        "src": "/assets/journalism/mlb-sticky-stuff/figure-01.png",
        "alt": "Analyzing the MLB \"Sticky Stuff” Ban figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/mlb-sticky-stuff/figure-02.png",
        "alt": "Analyzing the MLB \"Sticky Stuff” Ban figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/mlb-sticky-stuff/figure-03.png",
        "alt": "Analyzing the MLB \"Sticky Stuff” Ban figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/mlb-sticky-stuff/figure-04.png",
        "alt": "Analyzing the MLB \"Sticky Stuff” Ban figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/mlb-sticky-stuff/figure-05.png",
        "alt": "Analyzing the MLB \"Sticky Stuff” Ban figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Which Yankee Had The Best 60 Home Run Season?",
    "authors": [
      "Albert Carreno",
      "Anish Deshpande"
    ],
    "date": "Dec 13, 2022",
    "year": 2022,
    "sport": "Baseball",
    "readTime": 22,
    "summary": "Let’s be honest: when people go to baseball games, they are anticipating action mostly in the form of home runs. These exciting incidents of baseballs being seemingly sent to outer space sometimes by these muscular, powerful hitters are what make baseball exciting and worth...",
    "contentFile": "yankees-sixty-homers.txt",
    "images": [
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-01.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-02.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-03.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-04.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-05.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-06.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-07.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-08.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-09.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/yankees-sixty-homers/figure-10.png",
        "alt": "Which Yankee Had The Best 60 Home Run Season? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      }
    ]
  },
  {
    "title": "The Most Unhittable Pitches in Baseball (2022)",
    "authors": [
      "Brandon Louie",
      "Robert Reyes"
    ],
    "date": "Dec 12, 2022",
    "year": 2022,
    "sport": "Baseball",
    "readTime": 15,
    "summary": "The hardest thing to do in sports: hitting a baseball. However, this does not make pitching the easiest thing in sports. To put it as simply as possible, the job of a pitcher is to get opposing batters out, and the best way to do this is to get batters to swing and miss...",
    "contentFile": "unhittable-pitches.txt",
    "images": [
      {
        "src": "/assets/journalism/unhittable-pitches/figure-01.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-02.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-03.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-04.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-05.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-06.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-07.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-08.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-09.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-10.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-11.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-12.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-13.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-14.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-15.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-16.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/unhittable-pitches/figure-17.png",
        "alt": "The Most Unhittable Pitches in Baseball (2022) figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "Edwin Diaz: How \"Narco\" Helped Him Become One Of The Most Effective Closers In Baseball",
    "authors": [
      "Sofia Villalpando"
    ],
    "date": "Dec 12, 2022",
    "year": 2022,
    "sport": "Baseball",
    "readTime": 4,
    "summary": "Over the past few years, closers have been more frequently rotated within bullpens across all teams in the MLB. Edwin Diaz, a 28-year-old right-hand Mets reliever, struck baseball fans across the country during the 2022 MLB season with his consistent saves and high pitch...",
    "contentFile": "edwin-diaz-analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/edwin-diaz-analysis/figure-01.png",
        "alt": "Edwin Diaz: How \"Narco\" Helped Him Become One Of The Most Effective Closers In Baseball figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/edwin-diaz-analysis/figure-02.png",
        "alt": "Edwin Diaz: How \"Narco\" Helped Him Become One Of The Most Effective Closers In Baseball figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/edwin-diaz-analysis/figure-03.png",
        "alt": "Edwin Diaz: How \"Narco\" Helped Him Become One Of The Most Effective Closers In Baseball figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/edwin-diaz-analysis/figure-04.png",
        "alt": "Edwin Diaz: How \"Narco\" Helped Him Become One Of The Most Effective Closers In Baseball figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      }
    ]
  },
  {
    "title": "Predicting the Group Stages of the 2022 FIFA World Cup",
    "authors": [
      "Steven Lu Chen",
      "Anvesha Dutta"
    ],
    "date": "Jun 22, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 11,
    "summary": "Amongst the world’s seemingly endless number of competitions in the beautiful game, there is absolutely no greater prize than the FIFA World Cup. In the competition’s nearly one hundred years of history, just eight nations and 445 players have earned the title of world...",
    "contentFile": "predicting_fifa_wc_2022.txt",
    "images": [
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-01.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-02.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-03.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-04.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-05.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-06.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-07.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-08.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-09.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/predicting_fifa_wc_2022/figure-10.png",
        "alt": "Predicting the Group Stages of the 2022 FIFA World Cup figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      }
    ]
  },
  {
    "title": "Centers and NBA Championship Contending Centers. What do you need from your Center to Contend?",
    "authors": [
      "Aditya Mehta"
    ],
    "date": "Jun 22, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "The past two years have seen a type of renaissance in the center position in the NBA with the spectacular play of Nikola Jokic and Joel Embiid. Jokic’s playmaking ability and pace control make him a trailblazer in a new “Point Center” position where a 7-footer controls the...",
    "contentFile": "nba_contending_centers.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_contending_centers/figure-01.png",
        "alt": "Centers and NBA Championship Contending Centers. What do you need from your Center to Contend? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/nba_contending_centers/figure-02.png",
        "alt": "Centers and NBA Championship Contending Centers. What do you need from your Center to Contend? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_contending_centers/figure-03.png",
        "alt": "Centers and NBA Championship Contending Centers. What do you need from your Center to Contend? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_contending_centers/figure-04.png",
        "alt": "Centers and NBA Championship Contending Centers. What do you need from your Center to Contend? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_contending_centers/figure-05.png",
        "alt": "Centers and NBA Championship Contending Centers. What do you need from your Center to Contend? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "How much does qualifying affect the actual race in Formula 1?",
    "authors": [
      "Ishika Sanghi",
      "Jed Miguel"
    ],
    "date": "Jun 17, 2022",
    "year": 2022,
    "sport": "Motorsports",
    "readTime": 7,
    "summary": "While Formula 1 is relatively unknown in the United States, F1 possesses a small but dedicated following. Newcomers to the sport, especially those with previous racing knowledge, often compare NASCAR to F1. At their core, both are very similar sports, but they do have their...",
    "contentFile": "formula1_qualifying.txt",
    "images": [
      {
        "src": "/assets/journalism/formula1_qualifying/figure-01.png",
        "alt": "How much does qualifying affect the actual race in Formula 1? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/formula1_qualifying/figure-02.png",
        "alt": "How much does qualifying affect the actual race in Formula 1? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/formula1_qualifying/figure-03.png",
        "alt": "How much does qualifying affect the actual race in Formula 1? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/formula1_qualifying/figure-04.png",
        "alt": "How much does qualifying affect the actual race in Formula 1? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Is It Possible to Predict March Madness Cinderella Stories?",
    "authors": [
      "Alisha Dhar"
    ],
    "date": "Jun 15, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "Sports at different levels all across the world draw in increased excitement during the playoffs: players and fans are always on edge to see if their team has what it takes to take home a championship. The mens’ college basketball playoffs, however, draw in a different level...",
    "contentFile": "predict_march_madness_cinderella.txt",
    "images": [
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-01.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-02.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-03.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-04.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-05.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-06.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-07.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-08.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-09.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-10.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-11.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/predict_march_madness_cinderella/figure-12.jpg",
        "alt": "Is It Possible to Predict March Madness Cinderella Stories? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      }
    ]
  },
  {
    "title": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis",
    "authors": [
      "Arvind Kalyan"
    ],
    "date": "Jun 13, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "It’s no secret that the NBA has gone through its fair share of radical upheavals over the last few years. From the start of the small-ball Warriors dynasty to the revolution of the big man over these past two seasons, the game—and how front offices decide on building...",
    "contentFile": "nba_paid_skills.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_paid_skills/figure-01.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-02.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-03.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-04.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-05.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-06.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-07.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-08.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 51
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-09.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      },
      {
        "src": "/assets/journalism/nba_paid_skills/figure-10.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA: Year-to-Year Analysis figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 54
      }
    ]
  },
  {
    "title": "Analyzing the True Value of the Triple Double in the Modern NBA",
    "authors": [
      "Alex Guo",
      "Darren Sohn"
    ],
    "date": "Jun 12, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "Using the stat sheet in the NBA is often an accurate measurement of how well an NBA performs on a game-to-game basis. Perhaps the most coveted statistic a player can record is the “triple-double”, an instance in which a player tallies double digits in three categories, with...",
    "contentFile": "triple_double_value.txt",
    "images": [
      {
        "src": "/assets/journalism/triple_double_value/figure-01.png",
        "alt": "Analyzing the True Value of the Triple Double in the Modern NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/triple_double_value/figure-02.png",
        "alt": "Analyzing the True Value of the Triple Double in the Modern NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/triple_double_value/figure-03.png",
        "alt": "Analyzing the True Value of the Triple Double in the Modern NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/triple_double_value/figure-04.png",
        "alt": "Analyzing the True Value of the Triple Double in the Modern NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      }
    ]
  },
  {
    "title": "Height and Weight: The Backhand Shot",
    "authors": [
      "Pedram Bazargani",
      "Manav Chadha"
    ],
    "date": "Jun 11, 2022",
    "year": 2022,
    "sport": "Tennis",
    "readTime": 7,
    "summary": "No shot in tennis shows off a player’s basic skill better than their backhand. The difficult shot is subdivided into two main types: one-handed and two-handed. Plenty of the world’s top players, from Rafael Nadal to Novak Djokovic, make use of the two-handed shot, but the...",
    "contentFile": "the_backhand.txt",
    "images": [
      {
        "src": "/assets/journalism/the_backhand/figure-01.png",
        "alt": "Height and Weight: The Backhand Shot figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/the_backhand/figure-02.png",
        "alt": "Height and Weight: The Backhand Shot figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/the_backhand/figure-03.png",
        "alt": "Height and Weight: The Backhand Shot figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/the_backhand/figure-04.png",
        "alt": "Height and Weight: The Backhand Shot figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/the_backhand/figure-05.png",
        "alt": "Height and Weight: The Backhand Shot figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/the_backhand/figure-06.png",
        "alt": "Height and Weight: The Backhand Shot figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/the_backhand/figure-07.png",
        "alt": "Height and Weight: The Backhand Shot figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "The Most Disappointing Superteams in the NBA",
    "authors": [
      "Aaron Phung",
      "Matthew Sasaki"
    ],
    "date": "Jun 9, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 8,
    "summary": "There are seasons when we feel like a sports team is guaranteed to win the championship no matter what due to the overwhelming amount of strength in their players. We often call these teams “superteams”. However, some of these superteams still find a way to lose a lot of...",
    "contentFile": "disappointing_superteams.txt",
    "images": [
      {
        "src": "/assets/journalism/disappointing_superteams/figure-01.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-02.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-03.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-04.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-05.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-06.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-07.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-08.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-09.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-10.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-11.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-12.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-13.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-14.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-15.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-16.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/disappointing_superteams/figure-17.png",
        "alt": "The Most Disappointing Superteams in the NBA figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All",
    "authors": [
      "Johan Chua"
    ],
    "date": "Jun 7, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "On an April 5 matchup between the Los Angeles Lakers and Phoenix Suns, Lakers’ announcer Stu Lantz was caught on a hot microphone pre-game telling the Lakers, “Let’s get this over with. Put us out of our misery”—a plea that seemingly reflected the overall sentiment of the...",
    "contentFile": "lakers_misery.txt",
    "images": [
      {
        "src": "/assets/journalism/lakers_misery/figure-01.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-02.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-03.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-04.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-05.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-06.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-07.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-08.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-09.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      },
      {
        "src": "/assets/journalism/lakers_misery/figure-10.png",
        "alt": "Put us out of our misery: How the LA Lakers Missed the Playoffs Just Two Years After Winning It All figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      }
    ]
  },
  {
    "title": "Does Defense Win Championships in the NFL?",
    "authors": [
      "Jasmine Jungreis"
    ],
    "date": "Jun 7, 2022",
    "year": 2022,
    "sport": "Football",
    "readTime": 8,
    "summary": "Since being coined by Alabama coaching legend Bear Bryant in the 70s, the phrase “defense wins championships” has been taken as doctrine through the NFL (and the entire realm of sports). It was easier to accept this idea in the era of the “Steel Curtain” and their four Super...",
    "contentFile": "defense_wins.txt",
    "images": [
      {
        "src": "/assets/journalism/defense_wins/figure-01.jpg",
        "alt": "Does Defense Win Championships in the NFL? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/defense_wins/figure-02.jpg",
        "alt": "Does Defense Win Championships in the NFL? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/defense_wins/figure-03.jpg",
        "alt": "Does Defense Win Championships in the NFL? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "The Evolution of the Big Man over the Past Decade",
    "authors": [
      "Ryan Quach"
    ],
    "date": "Jun 7, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "Basketball is traditionally a game of five positions: the point guard, shooting guard, small forward, power forward, and center. But in recent years, specifically with respect to the NBA, the sport has become more and more positionless. To explain, it has become more common...",
    "contentFile": "bigmen_nba.txt",
    "images": [
      {
        "src": "/assets/journalism/bigmen_nba/figure-01.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-02.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-03.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-04.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-05.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-06.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-07.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-08.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/bigmen_nba/figure-09.png",
        "alt": "The Evolution of the Big Man over the Past Decade figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "How NBA Basketball Changes in the Postseason",
    "authors": [
      "Anthony Rio"
    ],
    "date": "Jun 6, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "In the NBA postseason, the game changes drastically as compared to the regular season. As Draymond Green puts it, “Everyone [is] not made for the playoffs.” What he means by this is that all players will not maintain their regular season level of play during the playoffs due...",
    "contentFile": "nba_postseason_change.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_postseason_change/figure-01.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/nba_postseason_change/figure-02.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_postseason_change/figure-03.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba_postseason_change/figure-04.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nba_postseason_change/figure-05.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/nba_postseason_change/figure-06.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/nba_postseason_change/figure-07.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba_postseason_change/figure-08.png",
        "alt": "How NBA Basketball Changes in the Postseason figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      }
    ]
  },
  {
    "title": "Just how good is Magnus Carlsen, Really?",
    "authors": [
      "Nilay Patel"
    ],
    "date": "May 25, 2022",
    "year": 2022,
    "sport": "General",
    "readTime": 15,
    "summary": "Magnus Carlsen is arguably the greatest chess player to have ever lived. He holds the record for the highest Elo rating ever achieved (the rating system used in chess). However, the Elo system is necessarily inflationary; as technology improves and computer engines like...",
    "contentFile": "magnus_carlsen.txt",
    "images": [
      {
        "src": "/assets/journalism/magnus_carlsen/figure-01.png",
        "alt": "Just how good is Magnus Carlsen, Really? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/magnus_carlsen/figure-02.png",
        "alt": "Just how good is Magnus Carlsen, Really? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/magnus_carlsen/figure-03.png",
        "alt": "Just how good is Magnus Carlsen, Really? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/magnus_carlsen/figure-04.png",
        "alt": "Just how good is Magnus Carlsen, Really? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/magnus_carlsen/figure-05.png",
        "alt": "Just how good is Magnus Carlsen, Really? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Do Small Market Stars Get Snubbed?",
    "authors": [
      "Kaizen Schanz",
      "Yusei Fujikura"
    ],
    "date": "Apr 17, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 5,
    "summary": "The All-Star Game is a way of representing the league’s best players in the flashiest way possible. In the MLB, the players put everything on the line, giving the fans a glimpse of what could be. In the NBA, a more casual, yet just as entertaining show unfolds as an array of...",
    "contentFile": "small_market_stars.txt",
    "images": [
      {
        "src": "/assets/journalism/small_market_stars/figure-01.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-02.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-03.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-04.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-05.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-06.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-07.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-08.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-09.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-10.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/small_market_stars/figure-11.jpg",
        "alt": "Do Small Market Stars Get Snubbed? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      }
    ]
  },
  {
    "title": "Hot or Cold: A Look at NBA Pacing",
    "authors": [
      "Wyatt Stone"
    ],
    "date": "Apr 4, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "When looking generally at the NBA, it is commonplace to see the differences between certain offenses, particularly between those of slower offenses versus their faster counterparts. Gregg Popovich, head coach of the San Antonio Spurs for over two decades, has piloted his...",
    "contentFile": "nba_pacing.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_pacing/figure-01.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_pacing/figure-02.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_pacing/figure-03.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nba_pacing/figure-04.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_pacing/figure-05.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba_pacing/figure-06.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba_pacing/figure-07.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba_pacing/figure-08.png",
        "alt": "Hot or Cold: A Look at NBA Pacing figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      }
    ]
  },
  {
    "title": "Win Share Distributions on Championship-Winning NBA Teams",
    "authors": [
      "Matthew Sasaki",
      "Aaron Phung"
    ],
    "date": "Apr 2, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "It is difficult to predict the NBA champion each year. Take it from Stephen A. Smith, who incorrectly guessed the NBA champion 6 years in a row from 2011 to 2016. His guesses were also right before the NBA Finals began. We can’t blame him, though. There are simply too many...",
    "contentFile": "championship_win_shares.txt",
    "images": [
      {
        "src": "/assets/journalism/championship_win_shares/figure-01.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-02.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-03.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-04.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-05.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-06.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-07.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-08.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-09.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-10.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-11.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-12.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-13.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-14.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-15.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-16.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-17.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-18.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-19.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-20.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-21.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-22.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-23.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-24.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-25.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-26.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-27.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-28.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 28",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-29.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 29",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-30.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 30",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-31.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 31",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-32.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 32",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-33.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 33",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-34.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 34",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-35.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 35",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-36.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 36",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-37.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 37",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-38.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 38",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-39.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 39",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-40.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 40",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-41.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 41",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-42.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 42",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-43.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 43",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-44.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 44",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-45.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 45",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-46.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 46",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-47.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 47",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/championship_win_shares/figure-48.png",
        "alt": "Win Share Distributions on Championship-Winning NBA Teams figure 48",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Which of the top five European leagues is truly a “farmer’s league”?",
    "authors": [
      "Surya Dham",
      "Nilay Patel"
    ],
    "date": "Apr 2, 2022",
    "year": 2022,
    "sport": "General",
    "readTime": 12,
    "summary": "Debates rage endlessly over Twitter across fans of every European league, proclaiming that their own league is the best. This is usually defined by having teams that tend to do well in Europe while simultaneously having a competitive domestic league that often has...",
    "contentFile": "farmers_league.txt",
    "images": [
      {
        "src": "/assets/journalism/farmers_league/figure-01.png",
        "alt": "Which of the top five European leagues is truly a “farmer’s league”? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/farmers_league/figure-02.png",
        "alt": "Which of the top five European leagues is truly a “farmer’s league”? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      }
    ]
  },
  {
    "title": "Call to the Bullpen: The Increase in MLB Reliever Usage",
    "authors": [
      "Marcus Orwin",
      "Caden Tien"
    ],
    "date": "Mar 31, 2022",
    "year": 2022,
    "sport": "Baseball",
    "readTime": 7,
    "summary": "On October 29, 2021, Ian Anderson was dealing. The 23-year-old Braves pitcher had carried a no-hitter through 5 innings in Game 3 of the World Series, stunning Astros hitters along the way. Throughout most of baseball history, this would have been a chance at glory – if...",
    "contentFile": "mlb_relievers.txt",
    "images": [
      {
        "src": "/assets/journalism/mlb_relievers/figure-01.png",
        "alt": "Call to the Bullpen: The Increase in MLB Reliever Usage figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/mlb_relievers/figure-02.png",
        "alt": "Call to the Bullpen: The Increase in MLB Reliever Usage figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/mlb_relievers/figure-03.png",
        "alt": "Call to the Bullpen: The Increase in MLB Reliever Usage figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/mlb_relievers/figure-04.png",
        "alt": "Call to the Bullpen: The Increase in MLB Reliever Usage figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/mlb_relievers/figure-05.png",
        "alt": "Call to the Bullpen: The Increase in MLB Reliever Usage figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "Did Lionel Messi Deserve to Win the 2021 Ballon d’Or?",
    "authors": [
      "Anvesha Dutta",
      "Nikhil Isukapalli"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 7,
    "summary": "In 2021, Lionel Messi beat Robert Lewandowski to win his seventh Ballon d’Or, the most of any footballer in history. Messi’s victory has sparked much debate as to whether he truly deserved the award, though. Many fans argue that he has benefited from his reputation as one of...",
    "contentFile": "messi_ballon.txt",
    "images": [
      {
        "src": "/assets/journalism/messi_ballon/figure-01.png",
        "alt": "Did Lionel Messi Deserve to Win the 2021 Ballon d’Or? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/messi_ballon/figure-02.png",
        "alt": "Did Lionel Messi Deserve to Win the 2021 Ballon d’Or? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/messi_ballon/figure-03.png",
        "alt": "Did Lionel Messi Deserve to Win the 2021 Ballon d’Or? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "Cristiano Ronaldo: Worth or Flop?",
    "authors": [
      "Manav Chadha",
      "Jong Hyun Cha"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 7,
    "summary": "Cristiano Ronaldo was a relatively unknown teenager when he first signed for Manchester United in 2003. Since then, he has developed to become one of the most coveted players in soccer history. During his first stint at Manchester United, Ronaldo won 3 Premier League titles,...",
    "contentFile": "cristiano_ronaldo.txt",
    "images": [
      {
        "src": "/assets/journalism/cristiano_ronaldo/figure-01.png",
        "alt": "Cristiano Ronaldo: Worth or Flop? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/cristiano_ronaldo/figure-02.png",
        "alt": "Cristiano Ronaldo: Worth or Flop? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/cristiano_ronaldo/figure-03.png",
        "alt": "Cristiano Ronaldo: Worth or Flop? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/cristiano_ronaldo/figure-04.png",
        "alt": "Cristiano Ronaldo: Worth or Flop? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/cristiano_ronaldo/figure-05.png",
        "alt": "Cristiano Ronaldo: Worth or Flop? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/cristiano_ronaldo/figure-06.png",
        "alt": "Cristiano Ronaldo: Worth or Flop? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      }
    ]
  },
  {
    "title": "How Significant is Age in Soccer?",
    "authors": [
      "Rohan Saklani"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 11,
    "summary": "There are many attributes a soccer player holds that make them great and successful in the sport. Speed, endurance, strength, acceleration, agility, ball control, and pure power are a few but they all can change with the most important underlying factor in any sport that can...",
    "contentFile": "ageinsoccer.txt",
    "images": [
      {
        "src": "/assets/journalism/ageinsoccer/figure-01.png",
        "alt": "How Significant is Age in Soccer? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/ageinsoccer/figure-02.png",
        "alt": "How Significant is Age in Soccer? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/ageinsoccer/figure-03.png",
        "alt": "Source: Footiecentral",
        "caption": "Source: Footiecentral",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Which is the Most Competitive League in Europe?",
    "authors": [
      "Ishika Sanghi",
      "William Pan"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 10,
    "summary": "Soccer is a sport played by over 250 million people from more than 200 different countries. The level of competition ranges from children playing in a field to the World Cup and each one is supported and played with more fervor and passion than the next. It is the predominant...",
    "contentFile": "most_competitive_league.txt",
    "images": [
      {
        "src": "/assets/journalism/most_competitive_league/figure-01.jpg",
        "alt": "Which is the Most Competitive League in Europe? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-02.jpg",
        "alt": "Which is the Most Competitive League in Europe? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-03.png",
        "alt": "Which is the Most Competitive League in Europe? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-04.png",
        "alt": "Which is the Most Competitive League in Europe? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-05.png",
        "alt": "Which is the Most Competitive League in Europe? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-06.png",
        "alt": "Which is the Most Competitive League in Europe? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-07.jpg",
        "alt": "Which is the Most Competitive League in Europe? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-08.jpg",
        "alt": "Which is the Most Competitive League in Europe? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-09.jpg",
        "alt": "Which is the Most Competitive League in Europe? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/most_competitive_league/figure-10.jpg",
        "alt": "Which is the Most Competitive League in Europe? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      }
    ]
  },
  {
    "title": "The Skills That Will (and Won't) Get You Paid In The NBA",
    "authors": [
      "Arvind Kalyan"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "Following the age of Big 3’s in Miami, Los Angeles, and Golden State, a sort of staple has emerged amongst title-contending NBA teams: two superstars, occupying max contract slots in a team’s salary table, complemented by a remaining twelve players composed of exceptions,...",
    "contentFile": "paying_skills.txt",
    "images": [
      {
        "src": "/assets/journalism/paying_skills/figure-01.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/paying_skills/figure-02.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/paying_skills/figure-03.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/paying_skills/figure-04.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/paying_skills/figure-05.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/paying_skills/figure-06.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/paying_skills/figure-07.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/paying_skills/figure-08.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/paying_skills/figure-09.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/paying_skills/figure-10.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/paying_skills/figure-11.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/paying_skills/figure-12.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/paying_skills/figure-13.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/paying_skills/figure-14.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/paying_skills/figure-15.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/paying_skills/figure-16.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/paying_skills/figure-17.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 58
      },
      {
        "src": "/assets/journalism/paying_skills/figure-18.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 61
      },
      {
        "src": "/assets/journalism/paying_skills/figure-19.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 62
      },
      {
        "src": "/assets/journalism/paying_skills/figure-20.png",
        "alt": "The Skills That Will (and Won't) Get You Paid In The NBA figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 64
      }
    ]
  },
  {
    "title": "The NFL Combine: Does It Predict Quarterback Success in the NFL?",
    "authors": [
      "Shayan Ghafoori",
      "Andrew Schweitzer"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Football",
    "readTime": 4,
    "summary": "The controversy surrounding the validity of the National Football League (NFL) combine and its role in predicting a prospective player’s success is a debate so old that it has become a cliche. Yet, each spring, the NFL continues to conduct a series of standardized tests...",
    "contentFile": "qb_combine.txt",
    "images": [
      {
        "src": "/assets/journalism/qb_combine/figure-01.png",
        "alt": "The NFL Combine: Does It Predict Quarterback Success in the NFL? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/qb_combine/figure-02.png",
        "alt": "The NFL Combine: Does It Predict Quarterback Success in the NFL? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/qb_combine/figure-03.png",
        "alt": "The NFL Combine: Does It Predict Quarterback Success in the NFL? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Tall, Long, and Lanky: The Effect of Reach Advantages in MMA",
    "authors": [
      "Akilan Arunachalam"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "General",
    "readTime": 6,
    "summary": "Throughout the history of combat sports, there have always been a few key statistics shared about each fighter to help set the scene of a fight. Of course, the fighter’s age and the weight class they compete with is shared, but there is one statistic that has variability:...",
    "contentFile": "mma_reach.txt",
    "images": [
      {
        "src": "/assets/journalism/mma_reach/figure-01.png",
        "alt": "Tall, Long, and Lanky: The Effect of Reach Advantages in MMA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/mma_reach/figure-02.png",
        "alt": "Tall, Long, and Lanky: The Effect of Reach Advantages in MMA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/mma_reach/figure-03.png",
        "alt": "Tall, Long, and Lanky: The Effect of Reach Advantages in MMA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/mma_reach/figure-04.png",
        "alt": "Tall, Long, and Lanky: The Effect of Reach Advantages in MMA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/mma_reach/figure-05.png",
        "alt": "Tall, Long, and Lanky: The Effect of Reach Advantages in MMA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "How Impactful Are Quality Relievers in MLB Playoff Runs?",
    "authors": [
      "Alisha Dhar",
      "Zayne Kratz"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Baseball",
    "readTime": 6,
    "summary": "In most sports, postseason gameplay does not drastically differ in comparison to regular season gameplay. Sure, there is an increased intensity given the stakes – a single postseason loss in any sport could decide whether a team still has a chance at a national championship....",
    "contentFile": "reliever_impact.txt",
    "images": [
      {
        "src": "/assets/journalism/reliever_impact/figure-01.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-02.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-03.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-04.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-05.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-06.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-07.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-08.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/reliever_impact/figure-09.png",
        "alt": "How Impactful Are Quality Relievers in MLB Playoff Runs? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      }
    ]
  },
  {
    "title": "The Statistical Validity of \"Veteran Presence\" in the NBA",
    "authors": [
      "Anthony Rio",
      "Kyle Ritscher"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 19,
    "summary": "Veteran presence is a frequently used term referring to the impact that veteran players have on a team, whether that be on or off the court. Generally, it is assumed that veterans are both more effective on the court themselves, and that their teammates feed off of their...",
    "contentFile": "vet_presence.txt",
    "images": [
      {
        "src": "/assets/journalism/vet_presence/figure-01.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/vet_presence/figure-02.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/vet_presence/figure-03.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/vet_presence/figure-04.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/vet_presence/figure-05.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/vet_presence/figure-06.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/vet_presence/figure-07.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/vet_presence/figure-08.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/vet_presence/figure-09.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/vet_presence/figure-10.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/vet_presence/figure-11.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/vet_presence/figure-12.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/vet_presence/figure-13.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/vet_presence/figure-14.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/vet_presence/figure-15.png",
        "alt": "The Statistical Validity of \"Veteran Presence\" in the NBA figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      }
    ]
  },
  {
    "title": "FIFA's Team of the Season Strikers",
    "authors": [
      "Derek Nakagawa",
      "Anish Ravilla"
    ],
    "date": "Mar 28, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 9,
    "summary": "FIFA’s Team of the Season (TOTS) consists of the best players from every team consolidated into one from the previous season. But it’s important to note that the previous season spans the months from August of the previous year to June of the year the TOTS players are...",
    "contentFile": "fifa_strikers.txt",
    "images": [
      {
        "src": "/assets/journalism/fifa_strikers/figure-01.png",
        "alt": "FIFA's Team of the Season Strikers figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/fifa_strikers/figure-02.png",
        "alt": "FIFA's Team of the Season Strikers figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/fifa_strikers/figure-03.png",
        "alt": "FIFA's Team of the Season Strikers figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/fifa_strikers/figure-04.png",
        "alt": "FIFA's Team of the Season Strikers figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/fifa_strikers/figure-05.png",
        "alt": "FIFA's Team of the Season Strikers figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "The Best of the Best: How well do first overall picks perform after entering the league?",
    "authors": [
      "Ryan Quach"
    ],
    "date": "Mar 21, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "The NBA Draft—it is one of the most exciting moments of professional basketball. Not only do worse-performing teams gain an opportunity to improve themselves by selecting a worthy prospect among lottery picks, but all teams involved also seek to strengthen their position in...",
    "contentFile": "best_of_the_best.txt",
    "images": [
      {
        "src": "/assets/journalism/best_of_the_best/figure-01.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-02.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-03.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-04.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-05.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-06.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-07.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-08.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-09.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-10.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-11.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/best_of_the_best/figure-12.png",
        "alt": "The Best of the Best: How well do first overall picks perform after entering the league? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "The Declining Presence of the Number 10",
    "authors": [
      "Shiyu Murashima"
    ],
    "date": "Mar 21, 2022",
    "year": 2022,
    "sport": "Football",
    "readTime": 6,
    "summary": "From Diego Maradona to Mesut Ozil, the center attacking midfielder (CAM) position - better known as the “Number 10” - has seen the most creative players of all time. Arguably the most desired position in football for years, now it is nearly a position of the past. The role of...",
    "contentFile": "declining_number_10.txt",
    "images": [
      {
        "src": "/assets/journalism/declining_number_10/figure-01.png",
        "alt": "The Declining Presence of the Number 10 figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-02.png",
        "alt": "The Declining Presence of the Number 10 figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-03.png",
        "alt": "The Declining Presence of the Number 10 figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-04.png",
        "alt": "The Declining Presence of the Number 10 figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-05.png",
        "alt": "The Declining Presence of the Number 10 figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-06.png",
        "alt": "The Declining Presence of the Number 10 figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-07.png",
        "alt": "The Declining Presence of the Number 10 figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-08.jpg",
        "alt": "The Declining Presence of the Number 10 figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-09.jpg",
        "alt": "The Declining Presence of the Number 10 figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/declining_number_10/figure-10.png",
        "alt": "@joel_archie, Twitter",
        "caption": "@joel_archie, Twitter",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Taking Center Stage: How Caitlin Clark Propelled Women’s College Basketball into the Spotlight",
    "authors": [
      "Taylor Fenton",
      "Aahil Ali",
      "Ethan Diana"
    ],
    "date": "Feb 1, 2022",
    "year": 2022,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "On April 7th, for the first time in NCAA history, more fans tuned in to watch the Women’s March Madness championship game than the Men’s March Madness game the following day. The record breaking game, in which the South Carolina Gamecocks defeated the Iowa Hawkeyes 87-75 to...",
    "contentFile": "caitlin-clark-spotlight.txt",
    "images": [
      {
        "src": "/assets/journalism/caitlin-clark-spotlight/figure-01.png",
        "alt": "Taking Center Stage: How Caitlin Clark Propelled Women’s College Basketball into the Spotlight figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/caitlin-clark-spotlight/figure-02.png",
        "alt": "Taking Center Stage: How Caitlin Clark Propelled Women’s College Basketball into the Spotlight figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/caitlin-clark-spotlight/figure-03.png",
        "alt": "Taking Center Stage: How Caitlin Clark Propelled Women’s College Basketball into the Spotlight figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/caitlin-clark-spotlight/figure-04.png",
        "alt": "Taking Center Stage: How Caitlin Clark Propelled Women’s College Basketball into the Spotlight figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/caitlin-clark-spotlight/figure-05.png",
        "alt": "Taking Center Stage: How Caitlin Clark Propelled Women’s College Basketball into the Spotlight figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/caitlin-clark-spotlight/figure-06.png",
        "alt": "Taking Center Stage: How Caitlin Clark Propelled Women’s College Basketball into the Spotlight figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Transfer Market Effect on Team Success",
    "authors": [
      "Trent Bellinger",
      "Derek Nakagawa"
    ],
    "date": "Jan 1, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 7,
    "summary": "Often referred to as the most competitive league in world soccer, the English Premier League is home to many of soccer’s best teams. Many of these teams have experienced great successes over the years and are now massively successful businesses, earning hundreds of millions...",
    "contentFile": "transfer_market_success.txt",
    "images": [
      {
        "src": "/assets/journalism/transfer_market_success/figure-01.jpg",
        "alt": "Transfer Market Effect on Team Success figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/transfer_market_success/figure-02.jpg",
        "alt": "Transfer Market Effect on Team Success figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/transfer_market_success/figure-03.jpg",
        "alt": "Transfer Market Effect on Team Success figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/transfer_market_success/figure-04.png",
        "alt": "Transfer Market Effect on Team Success figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/transfer_market_success/figure-05.png",
        "alt": "Transfer Market Effect on Team Success figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "Deciding Where to Finish: The Math Behind the Penalty Shootout",
    "authors": [
      "Anish Ravilla",
      "Ishika Sanghi"
    ],
    "date": "Jan 1, 2022",
    "year": 2022,
    "sport": "Soccer",
    "readTime": 9,
    "summary": "In soccer, the penalty shootout is one of those monumental events that can make or break the history of an entire team and everything it stands for, especially when this shootout occurs during a high-profile tournament. The mental contest between the penalty kick taker and...",
    "contentFile": "penalty_shootout.txt",
    "images": [
      {
        "src": "/assets/journalism/penalty_shootout/figure-01.png",
        "alt": "Source: Kaggle",
        "caption": "Source: Kaggle",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/penalty_shootout/figure-02.png",
        "alt": "Deciding Where to Finish: The Math Behind the Penalty Shootout figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/penalty_shootout/figure-03.png",
        "alt": "Deciding Where to Finish: The Math Behind the Penalty Shootout figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/penalty_shootout/figure-04.png",
        "alt": "Deciding Where to Finish: The Math Behind the Penalty Shootout figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/penalty_shootout/figure-05.png",
        "alt": "Deciding Where to Finish: The Math Behind the Penalty Shootout figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/penalty_shootout/figure-06.png",
        "alt": "Deciding Where to Finish: The Math Behind the Penalty Shootout figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "The Mystery That is the NFL Draft",
    "authors": [
      "Andrew Schweitzer",
      "Wyatt Stone"
    ],
    "date": "Dec 21, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 7,
    "summary": "The first round of the NFL Draft is a major conundrum to many franchises around the league. While many of the best college players are drafted in the first round, it can be very difficult to determine whether they will succeed at the professional level. Even players like 2012...",
    "contentFile": "positional_value.txt",
    "images": [
      {
        "src": "/assets/journalism/positional_value/figure-01.png",
        "alt": "The Mystery That is the NFL Draft figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/positional_value/figure-02.png",
        "alt": "The Mystery That is the NFL Draft figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/positional_value/figure-03.png",
        "alt": "The Mystery That is the NFL Draft figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/positional_value/figure-04.png",
        "alt": "The Mystery That is the NFL Draft figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "The Rise of Neo-Positions in Basketball",
    "authors": [
      "Ved Phadke",
      "Ollie Pai"
    ],
    "date": "Dec 19, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 19,
    "summary": "Basketball is a game of constant evolution. The sport itself has undergone so many changes since its inception that it’s unlikely that James Naismith would even recognize it from watching a March Madness game. This evolution is ever-present within the NBA, as each season...",
    "contentFile": "neo_positions.txt",
    "images": [
      {
        "src": "/assets/journalism/neo_positions/figure-01.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/neo_positions/figure-02.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/neo_positions/figure-03.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/neo_positions/figure-04.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/neo_positions/figure-05.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/neo_positions/figure-06.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/neo_positions/figure-07.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/neo_positions/figure-08.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/neo_positions/figure-09.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/neo_positions/figure-10.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/neo_positions/figure-11.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/neo_positions/figure-12.png",
        "alt": "The Rise of Neo-Positions in Basketball figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "What Makes a Winner in Volleyball",
    "authors": [
      "Matthew Li",
      "Jed Miguel"
    ],
    "date": "Dec 18, 2021",
    "year": 2021,
    "sport": "Volleyball",
    "readTime": 7,
    "summary": "Volleyball is a relatively young sport, being introduced to the Olympics in 1964. With its unique rotation system, there are many factors that affect how volleyball is played. But what factors, specifically what statistics, make a winner in volleyball? For our data, we chose...",
    "contentFile": "volleyball_winner.txt",
    "images": [
      {
        "src": "/assets/journalism/volleyball_winner/figure-01.png",
        "alt": "What Makes a Winner in Volleyball figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/volleyball_winner/figure-02.png",
        "alt": "What Makes a Winner in Volleyball figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/volleyball_winner/figure-03.png",
        "alt": "What Makes a Winner in Volleyball figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/volleyball_winner/figure-04.png",
        "alt": "What Makes a Winner in Volleyball figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/volleyball_winner/figure-05.png",
        "alt": "What Makes a Winner in Volleyball figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "Analyzing Fourth Down Decisions in the 2021 NFL Season",
    "authors": [
      "Victor Li"
    ],
    "date": "Dec 17, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 15,
    "summary": "Arguably the most unique down in American football is the fourth down. While teams get to attempt another play (as long as they maintain control of the football) after the first three downs, the fourth one is the last. If a team maintains control of the football after a...",
    "contentFile": "fourth_downs.txt",
    "images": [
      {
        "src": "/assets/journalism/fourth_downs/figure-01.png",
        "alt": "Analyzing Fourth Down Decisions in the 2021 NFL Season figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/fourth_downs/figure-02.png",
        "alt": "Analyzing Fourth Down Decisions in the 2021 NFL Season figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/fourth_downs/figure-03.png",
        "alt": "Analyzing Fourth Down Decisions in the 2021 NFL Season figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/fourth_downs/figure-04.png",
        "alt": "Analyzing Fourth Down Decisions in the 2021 NFL Season figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/fourth_downs/figure-05.png",
        "alt": "Analyzing Fourth Down Decisions in the 2021 NFL Season figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/fourth_downs/figure-06.png",
        "alt": "Analyzing Fourth Down Decisions in the 2021 NFL Season figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "Defensive Deterrence II: Player Analysis",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Dec 16, 2021",
    "year": 2021,
    "sport": "General",
    "readTime": 10,
    "summary": "So, how does our sample of players shake out according to this metric? Let’s take a look: Coming in at number one on our list, we have…Jonas Valančiūnas. Ummm, okay? Occupying the next five spots, however, are Rudy Gobert, Jakob Poeltl, Brook Lopez, Myles Turner, and Clint...",
    "contentFile": "defensive_deterrence_ii.txt",
    "images": [
      {
        "src": "/assets/journalism/defensive_deterrence_ii/figure-01.png",
        "alt": "Defensive Deterrence II: Player Analysis figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/defensive_deterrence_ii/figure-02.png",
        "alt": "Defensive Deterrence II: Player Analysis figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "CDM: An Analysis of Central Defensive Midfielders in the Premier League",
    "authors": [
      "Jong Hyun Cha"
    ],
    "date": "Dec 15, 2021",
    "year": 2021,
    "sport": "Soccer",
    "readTime": 4,
    "summary": "As the modern game of soccer evolves, the roles of central defensive midfielders have increased significantly. They are expected not only to provide defensive support and stability, but also to facilitate offensively. Teams in the Premier League have been on the search for...",
    "contentFile": "cdm_analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/cdm_analysis/figure-01.jpg",
        "alt": "CDM: An Analysis of Central Defensive Midfielders in the Premier League figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/cdm_analysis/figure-02.jpg",
        "alt": "CDM: An Analysis of Central Defensive Midfielders in the Premier League figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/cdm_analysis/figure-03.jpg",
        "alt": "CDM: An Analysis of Central Defensive Midfielders in the Premier League figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/cdm_analysis/figure-04.png",
        "alt": "CDM: An Analysis of Central Defensive Midfielders in the Premier League figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "The Effect of Wingspans on Shooting and Offensive Proficiency",
    "authors": [
      "Anthony Rio"
    ],
    "date": "Dec 15, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "In the past decade, wingspans have become all the rage in the NBA. Particularly, starting with the John Hammond-constructed Milwaukee Bucks in the early 2010s, the general manager who infamously drafted a skinny Greek teenager with a 7’3” wingspan who would change the...",
    "contentFile": "wingspan_effect.txt",
    "images": [
      {
        "src": "/assets/journalism/wingspan_effect/figure-01.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-02.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-03.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-04.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-05.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-06.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-07.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-08.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/wingspan_effect/figure-09.png",
        "alt": "The Effect of Wingspans on Shooting and Offensive Proficiency figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "The Rapid Rise of Emma Raducanu",
    "authors": [
      "Steven Lu Chen",
      "Aarushi Verma"
    ],
    "date": "Dec 15, 2021",
    "year": 2021,
    "sport": "Tennis",
    "readTime": 8,
    "summary": "In September 2021, eighteen-year-old Emma Raducanu took the tennis world by storm by dominating that year’s U.S. Open, winning the entire tournament without dropping a single set and becoming the first British woman in half a century to lift the trophy. Previously ranked as...",
    "contentFile": "raducanu_rise.txt",
    "images": [
      {
        "src": "/assets/journalism/raducanu_rise/figure-01.jpg",
        "alt": "The Rapid Rise of Emma Raducanu figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-02.jpg",
        "alt": "The Rapid Rise of Emma Raducanu figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-03.jpg",
        "alt": "The Rapid Rise of Emma Raducanu figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-04.jpg",
        "alt": "The Rapid Rise of Emma Raducanu figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-05.jpg",
        "alt": "The Rapid Rise of Emma Raducanu figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-06.png",
        "alt": "The Rapid Rise of Emma Raducanu figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-07.png",
        "alt": "The Rapid Rise of Emma Raducanu figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-08.png",
        "alt": "The Rapid Rise of Emma Raducanu figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/raducanu_rise/figure-09.png",
        "alt": "The Rapid Rise of Emma Raducanu figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "The Effects of Target Distribution in the NFL",
    "authors": [
      "Kiel Messinger",
      "Zayne Kratz"
    ],
    "date": "Dec 15, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 5,
    "summary": "As the NFL continues becoming a more pass-happy league, we have seen even more value being placed on its top quarterbacks, and as a result, their primary pass-catchers. Elite wide receivers can make upwards of $20 million a year, and even replacement-level receivers like...",
    "contentFile": "wr_target_dist.txt",
    "images": [
      {
        "src": "/assets/journalism/wr_target_dist/figure-01.png",
        "alt": "The Effects of Target Distribution in the NFL figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/wr_target_dist/figure-02.png",
        "alt": "The Effects of Target Distribution in the NFL figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/wr_target_dist/figure-03.png",
        "alt": "The Effects of Target Distribution in the NFL figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/wr_target_dist/figure-04.png",
        "alt": "The Effects of Target Distribution in the NFL figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/wr_target_dist/figure-05.png",
        "alt": "The Effects of Target Distribution in the NFL figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "Players vs Picks: Which Side Wins More in NFL Trades?",
    "authors": [
      "Akilan Arunachalam",
      "Zayne Kratz"
    ],
    "date": "Dec 14, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 6,
    "summary": "Jalen Ramsey, Stefon Diggs, Khalil Mack, Matthew Stafford. These are all elite players, but interestingly enough, they were all traded. Each year, the NFL experiences blockbuster trades, and often the price to acquire these top talents are draft picks. The LA Rams have taken...",
    "contentFile": "players_vs_picks.txt",
    "images": [
      {
        "src": "/assets/journalism/players_vs_picks/figure-01.png",
        "alt": "Players vs Picks: Which Side Wins More in NFL Trades? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/players_vs_picks/figure-02.png",
        "alt": "Players vs Picks: Which Side Wins More in NFL Trades? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/players_vs_picks/figure-03.png",
        "alt": "Players vs Picks: Which Side Wins More in NFL Trades? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/players_vs_picks/figure-04.png",
        "alt": "Players vs Picks: Which Side Wins More in NFL Trades? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/players_vs_picks/figure-05.png",
        "alt": "Players vs Picks: Which Side Wins More in NFL Trades? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "The Evolution of UFC",
    "authors": [
      "Jake Brophy",
      "Manav Chadha"
    ],
    "date": "Dec 13, 2021",
    "year": 2021,
    "sport": "General",
    "readTime": 7,
    "summary": "Mixed Martial Arts, better known by the abbreviation MMA, is an extreme combat sport which incorporates the fighting techniques utilised in boxing, wrestling, kickboxing, jiu jitsu, judo, and karate. While many companies host and broadcast fights, the most popular is the...",
    "contentFile": "mma_evolution.txt",
    "images": [
      {
        "src": "/assets/journalism/mma_evolution/figure-01.png",
        "alt": "The Evolution of UFC figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/mma_evolution/figure-02.png",
        "alt": "The Evolution of UFC figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/mma_evolution/figure-03.png",
        "alt": "The Evolution of UFC figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/mma_evolution/figure-04.png",
        "alt": "The Evolution of UFC figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/mma_evolution/figure-05.png",
        "alt": "The Evolution of UFC figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/mma_evolution/figure-06.png",
        "alt": "The Evolution of UFC figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "How to Win the Ballon d’Or",
    "authors": [
      "Rohan Saklani"
    ],
    "date": "Dec 13, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 8,
    "summary": "The Ballon d'Or (translated Golden Ball) is a yearly soccer award regarded as the pinnacle of individual greatness for soccer players. A Ballon d'Or is given to a player who had a remarkable calendar year (January to October), whether helping their team to glory with trophies...",
    "contentFile": "ballon_dor.txt",
    "images": [
      {
        "src": "/assets/journalism/ballon_dor/figure-01.png",
        "alt": "How to Win the Ballon d’Or figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/ballon_dor/figure-02.png",
        "alt": "How to Win the Ballon d’Or figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/ballon_dor/figure-03.png",
        "alt": "How to Win the Ballon d’Or figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Clustering NBA Offensive Styles",
    "authors": [
      "Arvind Kalyan",
      "Ben Goldblatt"
    ],
    "date": "Dec 13, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 13,
    "summary": "In the last few decades, the NBA has seen rapid evolution. The three point shot becomes more frequent every year and offenses like the Warriors have modernized the game with a “small ball” offense built around guards rather than centers. Recently, young guards and ball...",
    "contentFile": "nba_clustering.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_clustering/figure-01.png",
        "alt": "Clustering NBA Offensive Styles figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-02.png",
        "alt": "Clustering NBA Offensive Styles figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-03.png",
        "alt": "Clustering NBA Offensive Styles figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-04.png",
        "alt": "Clustering NBA Offensive Styles figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-05.png",
        "alt": "Clustering NBA Offensive Styles figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-06.png",
        "alt": "Clustering NBA Offensive Styles figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-07.png",
        "alt": "Clustering NBA Offensive Styles figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-08.png",
        "alt": "Clustering NBA Offensive Styles figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-09.png",
        "alt": "Clustering NBA Offensive Styles figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-10.png",
        "alt": "Clustering NBA Offensive Styles figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-11.png",
        "alt": "Clustering NBA Offensive Styles figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-12.png",
        "alt": "Clustering NBA Offensive Styles figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-13.png",
        "alt": "Clustering NBA Offensive Styles figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-14.png",
        "alt": "Clustering NBA Offensive Styles figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-15.png",
        "alt": "Clustering NBA Offensive Styles figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-16.png",
        "alt": "Clustering NBA Offensive Styles figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-17.png",
        "alt": "Clustering NBA Offensive Styles figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-18.png",
        "alt": "Clustering NBA Offensive Styles figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-19.png",
        "alt": "Clustering NBA Offensive Styles figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-20.png",
        "alt": "Clustering NBA Offensive Styles figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-21.png",
        "alt": "Clustering NBA Offensive Styles figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-22.png",
        "alt": "Clustering NBA Offensive Styles figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-23.png",
        "alt": "Clustering NBA Offensive Styles figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-24.png",
        "alt": "Clustering NBA Offensive Styles figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-25.png",
        "alt": "Clustering NBA Offensive Styles figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-26.png",
        "alt": "Clustering NBA Offensive Styles figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-27.png",
        "alt": "Clustering NBA Offensive Styles figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-28.png",
        "alt": "Clustering NBA Offensive Styles figure 28",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-29.png",
        "alt": "Clustering NBA Offensive Styles figure 29",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-30.png",
        "alt": "Clustering NBA Offensive Styles figure 30",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-31.png",
        "alt": "Clustering NBA Offensive Styles figure 31",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-32.png",
        "alt": "Clustering NBA Offensive Styles figure 32",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-33.png",
        "alt": "Clustering NBA Offensive Styles figure 33",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-34.png",
        "alt": "Clustering NBA Offensive Styles figure 34",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-35.png",
        "alt": "Clustering NBA Offensive Styles figure 35",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-36.png",
        "alt": "Clustering NBA Offensive Styles figure 36",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-37.png",
        "alt": "Clustering NBA Offensive Styles figure 37",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-38.png",
        "alt": "Clustering NBA Offensive Styles figure 38",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-39.png",
        "alt": "Clustering NBA Offensive Styles figure 39",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-40.png",
        "alt": "Clustering NBA Offensive Styles figure 40",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-41.png",
        "alt": "Clustering NBA Offensive Styles figure 41",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-42.png",
        "alt": "Clustering NBA Offensive Styles figure 42",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-43.png",
        "alt": "Clustering NBA Offensive Styles figure 43",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-44.png",
        "alt": "Clustering NBA Offensive Styles figure 44",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-45.png",
        "alt": "Clustering NBA Offensive Styles figure 45",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-46.png",
        "alt": "Clustering NBA Offensive Styles figure 46",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-47.png",
        "alt": "Clustering NBA Offensive Styles figure 47",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-48.png",
        "alt": "Clustering NBA Offensive Styles figure 48",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-49.png",
        "alt": "Clustering NBA Offensive Styles figure 49",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-50.png",
        "alt": "Clustering NBA Offensive Styles figure 50",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-51.png",
        "alt": "Clustering NBA Offensive Styles figure 51",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-52.png",
        "alt": "Clustering NBA Offensive Styles figure 52",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-53.png",
        "alt": "Clustering NBA Offensive Styles figure 53",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-54.png",
        "alt": "Clustering NBA Offensive Styles figure 54",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-55.png",
        "alt": "Clustering NBA Offensive Styles figure 55",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-56.png",
        "alt": "Clustering NBA Offensive Styles figure 56",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-57.png",
        "alt": "Clustering NBA Offensive Styles figure 57",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-58.png",
        "alt": "Clustering NBA Offensive Styles figure 58",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-59.png",
        "alt": "Clustering NBA Offensive Styles figure 59",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-60.png",
        "alt": "Clustering NBA Offensive Styles figure 60",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-61.png",
        "alt": "Clustering NBA Offensive Styles figure 61",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-62.png",
        "alt": "Clustering NBA Offensive Styles figure 62",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-63.png",
        "alt": "Clustering NBA Offensive Styles figure 63",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-64.png",
        "alt": "Clustering NBA Offensive Styles figure 64",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-65.png",
        "alt": "Clustering NBA Offensive Styles figure 65",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-66.png",
        "alt": "Clustering NBA Offensive Styles figure 66",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-67.png",
        "alt": "Clustering NBA Offensive Styles figure 67",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-68.png",
        "alt": "Clustering NBA Offensive Styles figure 68",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-69.png",
        "alt": "Clustering NBA Offensive Styles figure 69",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-70.png",
        "alt": "Clustering NBA Offensive Styles figure 70",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-71.png",
        "alt": "Clustering NBA Offensive Styles figure 71",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-72.png",
        "alt": "Clustering NBA Offensive Styles figure 72",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-73.png",
        "alt": "Clustering NBA Offensive Styles figure 73",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/nba_clustering/figure-74.png",
        "alt": "Clustering NBA Offensive Styles figure 74",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      }
    ]
  },
  {
    "title": "Analyzing the Premier League Big Six Teams’ Transfer Activity and Start to the 2021-22 Season",
    "authors": [
      "Nikhil Isukapalli"
    ],
    "date": "Dec 13, 2021",
    "year": 2021,
    "sport": "Soccer",
    "readTime": 19,
    "summary": "There is arguably no bigger or more popular soccer league in the world than the English Premier League. With the effects of the COVID-19 pandemic on stadium attendance and league procedures making the 2020-21 Premier League extremely unpredictable and taxing on players and...",
    "contentFile": "big6_transfers.txt",
    "images": [
      {
        "src": "/assets/journalism/big6_transfers/figure-01.png",
        "alt": "Source: Experimental 3-6-1",
        "caption": "Source: Experimental 3-6-1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/big6_transfers/figure-02.png",
        "alt": "Source: Experimental 3-6-1",
        "caption": "Source: Experimental 3-6-1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/big6_transfers/figure-03.png",
        "alt": "Source: Experimental 3-6-1",
        "caption": "Source: Experimental 3-6-1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/big6_transfers/figure-04.png",
        "alt": "Source: Experimental 3-6-1",
        "caption": "Source: Experimental 3-6-1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "Defensive Deterrence III: Analyzing the Metric",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Dec 13, 2021",
    "year": 2021,
    "sport": "General",
    "readTime": 9,
    "summary": "While we’ve been able to take a look at how the defensive deterrence metric analyzes players, it is equally important to analyze the metric itself to check for accuracy and validity. There are many ways we could go about doing this, ranging from more empirical to more...",
    "contentFile": "defensive_deterrence_iii.txt",
    "images": [
      {
        "src": "/assets/journalism/defensive_deterrence_iii/figure-01.png",
        "alt": "Defensive Deterrence III: Analyzing the Metric figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/defensive_deterrence_iii/figure-02.png",
        "alt": "Defensive Deterrence III: Analyzing the Metric figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/defensive_deterrence_iii/figure-03.png",
        "alt": "Defensive Deterrence III: Analyzing the Metric figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "Defensive Deterrence I: Quantifying Defenders’ Off-ball Impact at the Rim and Beyond",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Dec 13, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 18,
    "summary": "Within the last decade, the term ‘gravity’ has entered the basketball lexicon as a means of describing the noticeable and substantial impact that players can have on offense without even touching the ball. Inspired by the play of today’s perimeter superstars—chief among them...",
    "contentFile": "defensive_deterrence_i.txt"
  },
  {
    "title": "To what extent does three-point shooting predict the success of NBA teams?",
    "authors": [
      "Ryan Quach",
      "Surya Dham"
    ],
    "date": "Dec 13, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "To an NBA fan from 1946, today’s shooting would be completely unrecognizable. Whether one considers the volume, the form, or the type of shot, we have seen a dramatic shift from the origins. The focus of this article will be on the latter of these aspects, specifically the...",
    "contentFile": "3pt_shooting_success.txt",
    "images": [
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-01.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-02.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-03.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-04.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-05.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-06.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-07.jpg",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-08.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/3pt_shooting_success/figure-09.png",
        "alt": "To what extent does three-point shooting predict the success of NBA teams? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "16 Going on 17: The Soundness of Various NFL Records",
    "authors": [
      "Arnav Saxena"
    ],
    "date": "Dec 12, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 11,
    "summary": "In the 2020 NFL season, Tennessee Titans running back Derrick Henry finished with 2,027 rushing yards, just 79 yards short of breaking the thirty-six year old rushing record set by Los Angeles Rams legend Eric Dickerson. Two years prior, Pittsburgh Steelers quarterback Ben...",
    "contentFile": "nfl_records.txt",
    "images": [
      {
        "src": "/assets/journalism/nfl_records/figure-01.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nfl_records/figure-02.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nfl_records/figure-03.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nfl_records/figure-04.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nfl_records/figure-05.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nfl_records/figure-06.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nfl_records/figure-07.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nfl_records/figure-08.png",
        "alt": "16 Going on 17: The Soundness of Various NFL Records figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "Are the Best MLB Teams Winning More Games?",
    "authors": [
      "Marcus Orwin"
    ],
    "date": "Dec 12, 2021",
    "year": 2021,
    "sport": "Baseball",
    "readTime": 6,
    "summary": "When the Los Angeles Dodgers fell just short of the San Francisco Giants in the 2021 MLB regular season, they made history -- no team had ever won 106 games and lost their division. This occurred at a time in which each MLB division contains just 5 teams in comparison to the...",
    "contentFile": "best_mlb_teams_win.txt",
    "images": [
      {
        "src": "/assets/journalism/best_mlb_teams_win/figure-01.png",
        "alt": "Are the Best MLB Teams Winning More Games? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/best_mlb_teams_win/figure-02.png",
        "alt": "Are the Best MLB Teams Winning More Games? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/best_mlb_teams_win/figure-03.png",
        "alt": "Are the Best MLB Teams Winning More Games? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      }
    ]
  },
  {
    "title": "What will the U.S. Sports Betting Market be in 2025?",
    "authors": [
      "Garrett Malone"
    ],
    "date": "Dec 12, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 12,
    "summary": "When the NFL partnered with gambling conglomerates DraftKings, FanDuel, and Caesars Entertainment to make them the official sports betting partners of the NFL, it was made clear to sports fans and stakeholders across the world that sports betting is here to stay. What once...",
    "contentFile": "sports_betting.txt",
    "images": [
      {
        "src": "/assets/journalism/sports_betting/figure-01.png",
        "alt": "Source: Action Network",
        "caption": "Source: Action Network",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/sports_betting/figure-02.png",
        "alt": "What will the U.S. Sports Betting Market be in 2025? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/sports_betting/figure-03.png",
        "alt": "What will the U.S. Sports Betting Market be in 2025? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/sports_betting/figure-04.png",
        "alt": "Source: Gaming Today",
        "caption": "Source: Gaming Today",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/sports_betting/figure-05.png",
        "alt": "What will the U.S. Sports Betting Market be in 2025? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/sports_betting/figure-06.png",
        "alt": "What will the U.S. Sports Betting Market be in 2025? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/sports_betting/figure-07.png",
        "alt": "What will the U.S. Sports Betting Market be in 2025? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/sports_betting/figure-08.png",
        "alt": "What will the U.S. Sports Betting Market be in 2025? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/sports_betting/figure-09.png",
        "alt": "What will the U.S. Sports Betting Market be in 2025? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Which NBA Player Provides the Most Intangible Value?",
    "authors": [
      "Aaron Phung",
      "Matthew Sasaki"
    ],
    "date": "Dec 12, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "Analysts tend to emphasize box score statistics such as points and rebounds when assessing the greatness of an NBA player. Because they are the only objective pieces of information recorded, statistics overshadow other methods of determining a player’s value. However, there...",
    "contentFile": "nba_intangibles.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_intangibles/figure-01.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-02.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-03.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-04.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-05.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-06.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-07.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-08.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba_intangibles/figure-09.png",
        "alt": "Which NBA Player Provides the Most Intangible Value? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      }
    ]
  },
  {
    "title": "The Launch Angle Revolution",
    "authors": [
      "Steven Lu Chen"
    ],
    "date": "Oct 1, 2021",
    "year": 2021,
    "sport": "Baseball",
    "readTime": 16,
    "summary": "Hitting a baseball is often agreed upon to be among the most difficult feats to perform in sports. Consequently, over professional baseball’s decades of history, there has been no shortage of coaches and players advocating for an endless variety of approaches to hitting. In...",
    "contentFile": "launch-angle.txt",
    "images": [
      {
        "src": "/assets/journalism/launch-angle/figure-01.jpg",
        "alt": "The Launch Angle Revolution figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/launch-angle/figure-02.jpg",
        "alt": "The Launch Angle Revolution figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/launch-angle/figure-03.jpg",
        "alt": "The Launch Angle Revolution figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/launch-angle/figure-04.jpg",
        "alt": "The Launch Angle Revolution figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/launch-angle/figure-05.jpg",
        "alt": "The Launch Angle Revolution figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/launch-angle/figure-06.jpg",
        "alt": "The Launch Angle Revolution figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 44
      }
    ]
  },
  {
    "title": "Does Money Mean Success in the English Premier League?",
    "authors": [
      "Wyan Wan",
      "Joshua Gunawan"
    ],
    "date": "Jun 15, 2021",
    "year": 2021,
    "sport": "Soccer",
    "readTime": 8,
    "summary": "Since its inception, the English Premier League has grown massively in wealth. In terms of revenue, the Premier League has generated €6.2 billion in revenue (compared to €3.7 billion for Spain’s LaLiga, €3.2 billion for Germany’s Bundesliga, €2.7 for Italy’s Serie A, and €2.3...",
    "contentFile": "money_in_epl.txt",
    "images": [
      {
        "src": "/assets/journalism/money_in_epl/figure-01.png",
        "alt": "Does Money Mean Success in the English Premier League? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/money_in_epl/figure-02.png",
        "alt": "Does Money Mean Success in the English Premier League? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/money_in_epl/figure-03.jpg",
        "alt": "Does Money Mean Success in the English Premier League? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/money_in_epl/figure-04.png",
        "alt": "Does Money Mean Success in the English Premier League? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/money_in_epl/figure-05.png",
        "alt": "Does Money Mean Success in the English Premier League? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Running over the Ages",
    "authors": [
      "Ryan Dunker"
    ],
    "date": "Jun 15, 2021",
    "year": 2021,
    "sport": "Gymnastics",
    "readTime": 10,
    "summary": "Running is a sport like no other. It was the core of the first Olympics in 776 BCE which included four different kinds of running events. The physical act of running for humans dates back even further to our early human ancestors who would run from predators or after prey...",
    "contentFile": "running_over_the_ages.txt",
    "images": [
      {
        "src": "/assets/journalism/running_over_the_ages/figure-01.png",
        "alt": "Figure 1",
        "caption": "Figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-02.png",
        "alt": "Figure 2",
        "caption": "Figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-03.png",
        "alt": "Figure 3",
        "caption": "Figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-04.png",
        "alt": "Figure 4",
        "caption": "Figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-05.png",
        "alt": "Figure 5",
        "caption": "Figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-06.png",
        "alt": "Figure 6",
        "caption": "Figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-07.png",
        "alt": "Figure 7",
        "caption": "Figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-08.png",
        "alt": "Figure 8",
        "caption": "Figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-09.png",
        "alt": "Figure 9",
        "caption": "Figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/running_over_the_ages/figure-10.png",
        "alt": "Figure 10",
        "caption": "Figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      }
    ]
  },
  {
    "title": "Using Drafts to Adjust Pro League of Legends Win Rates",
    "authors": [
      "Victor Li"
    ],
    "date": "Jun 14, 2021",
    "year": 2021,
    "sport": "General",
    "readTime": 16,
    "summary": "Professional League of Legends is one of the largest esports in the world. One of the most important parts of any professional League of Legends game is the draft, where teams systematically select which champions (characters) they will play and which they will forbid the...",
    "contentFile": "league_win_rates.txt",
    "images": [
      {
        "src": "/assets/journalism/league_win_rates/figure-01.png",
        "alt": "Using Drafts to Adjust Pro League of Legends Win Rates figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/league_win_rates/figure-02.png",
        "alt": "Using Drafts to Adjust Pro League of Legends Win Rates figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/league_win_rates/figure-03.png",
        "alt": "Source: leagueoflegends.fandom.com",
        "caption": "Source: leagueoflegends.fandom.com",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/league_win_rates/figure-04.png",
        "alt": "Source: leagueoflegends.fandom.com",
        "caption": "Source: leagueoflegends.fandom.com",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "Player Efficiency Rating in the AUDL: Developing an Impact Metric for Ultimate Frisbee",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Jun 10, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 30,
    "summary": "One of the most interesting and challenging aspects of sports analytics is developing single-number metrics, or metrics that attempt to look at a player holistically by boiling their value down to just one number. One such example of this is John Hollinger’s Player Efficiency...",
    "contentFile": "ultimate_per.txt",
    "images": [
      {
        "src": "/assets/journalism/ultimate_per/figure-01.png",
        "alt": "Player Efficiency Rating in the AUDL: Developing an Impact Metric for Ultimate Frisbee figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      },
      {
        "src": "/assets/journalism/ultimate_per/figure-02.png",
        "alt": "Player Efficiency Rating in the AUDL: Developing an Impact Metric for Ultimate Frisbee figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      },
      {
        "src": "/assets/journalism/ultimate_per/figure-03.png",
        "alt": "Player Efficiency Rating in the AUDL: Developing an Impact Metric for Ultimate Frisbee figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      },
      {
        "src": "/assets/journalism/ultimate_per/figure-04.png",
        "alt": "Player Efficiency Rating in the AUDL: Developing an Impact Metric for Ultimate Frisbee figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      }
    ]
  },
  {
    "title": "Who is the Most Consistent NBA All-Star?",
    "authors": [
      "Terrence Liu",
      "Oscar O'Brien"
    ],
    "date": "Jun 9, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 20,
    "summary": "The National Basketball Association (NBA) selects all-star players every year to highlight the success of individual players. Players are named all-stars through voting from fans, current NBA players, and the media. Looking over the list of this year’s all-stars, every player...",
    "contentFile": "nba_allstar_consistency.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-01.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-02.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-03.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-04.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-05.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-06.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-07.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-08.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-09.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-10.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-11.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba_allstar_consistency/figure-12.png",
        "alt": "Who is the Most Consistent NBA All-Star? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      }
    ]
  },
  {
    "title": "What Makes a Master?",
    "authors": [
      "Erik Chen",
      "Brendan Zytowski"
    ],
    "date": "Jun 8, 2021",
    "year": 2021,
    "sport": "Golf",
    "readTime": 10,
    "summary": "The Masters Tournament, traditionally held in the first week of April, is one of the most important tournaments every golf season. It is extremely prestigious because of the tournament's long history and pedigree as well as the signature green jacket for the winners....",
    "contentFile": "what_makes_a_master.txt",
    "images": [
      {
        "src": "/assets/journalism/what_makes_a_master/figure-01.png",
        "alt": "What Makes a Master? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/what_makes_a_master/figure-02.png",
        "alt": "What Makes a Master? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/what_makes_a_master/figure-03.png",
        "alt": "What Makes a Master? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      }
    ]
  },
  {
    "title": "Could the NBA Introduce a 4 point Line?",
    "authors": [
      "Arnav Saxena"
    ],
    "date": "Jun 8, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "In November of 1967, the Dallas Chaparrals led the Indiana Pacers 118-116 in a midseason American Basketball Association matchup. With only one second left of regulation, Indiana inbounded the ball to Jerry Harkness, who launched a desperation hook shot at the buzzer. From 92...",
    "contentFile": "nba_4pt_line.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_4pt_line/figure-01.png",
        "alt": "Could the NBA Introduce a 4 point Line? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba_4pt_line/figure-02.png",
        "alt": "Could the NBA Introduce a 4 point Line? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      }
    ]
  },
  {
    "title": "Modeling the 2021 Indian Premier League",
    "authors": [
      "Shail Mirpuri"
    ],
    "date": "Jun 2, 2021",
    "year": 2021,
    "sport": "Soccer",
    "readTime": 22,
    "summary": "In the realm of franchise T20 cricket, there is no bigger league than the Indian Premier League (IPL). Touted as a competition where ‘talent meets opportunity’, the IPL is watched by over 100 million people around the globe. One thing that makes the IPL so entertaining is its...",
    "contentFile": "ipl_2021.txt",
    "images": [
      {
        "src": "/assets/journalism/ipl_2021/figure-01.png",
        "alt": "Modeling the 2021 Indian Premier League figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "Analyzing the Value of Each First Round Pick in the NBA Draft",
    "authors": [
      "Kiel Messinger",
      "Zayne Kratz"
    ],
    "date": "Jun 1, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "Draft picks are as important as ever in today’s NBA. From the Sam Hinkie 76ers introducing the idea of “tanking” to mainstream NBA media under the name of “The Process,”  to the Thunder collecting draft picks like they’re Anthony Davis injuries, teams are building more and...",
    "contentFile": "nba_first_round.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_first_round/figure-01.png",
        "alt": "Analyzing the Value of Each First Round Pick in the NBA Draft figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_first_round/figure-02.png",
        "alt": "Analyzing the Value of Each First Round Pick in the NBA Draft figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba_first_round/figure-03.png",
        "alt": "Analyzing the Value of Each First Round Pick in the NBA Draft figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/nba_first_round/figure-04.png",
        "alt": "Analyzing the Value of Each First Round Pick in the NBA Draft figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba_first_round/figure-05.png",
        "alt": "Analyzing the Value of Each First Round Pick in the NBA Draft figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba_first_round/figure-06.png",
        "alt": "Analyzing the Value of Each First Round Pick in the NBA Draft figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "Is UCLA MBB on the Rise?",
    "authors": [
      "Faraz Murshed",
      "Vishal Narayan"
    ],
    "date": "Apr 12, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 18,
    "summary": "The UCLA Men’s Basketball (MBB) team has experienced some turbulence over the last few years, following the departure of Lonzo Ball to the NBA at the culmination of the 2016-17 season. That year, the team exited the NCAA tournament in the Sweet Sixteen and had finished at the...",
    "contentFile": "ucla_mbb_rise.txt",
    "images": [
      {
        "src": "/assets/journalism/ucla_mbb_rise/figure-01.png",
        "alt": "Is UCLA MBB on the Rise? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/ucla_mbb_rise/figure-02.png",
        "alt": "Is UCLA MBB on the Rise? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/ucla_mbb_rise/figure-03.png",
        "alt": "Is UCLA MBB on the Rise? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/ucla_mbb_rise/figure-04.png",
        "alt": "Is UCLA MBB on the Rise? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/ucla_mbb_rise/figure-05.png",
        "alt": "Is UCLA MBB on the Rise? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/ucla_mbb_rise/figure-06.png",
        "alt": "Is UCLA MBB on the Rise? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/ucla_mbb_rise/figure-07.png",
        "alt": "Is UCLA MBB on the Rise? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      }
    ]
  },
  {
    "title": "Rookie QBs: The 2020 Class",
    "authors": [
      "Dean Jones"
    ],
    "date": "Apr 9, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 31,
    "summary": "The 2020 NFL season was unlike any other. The threat of coronavirus constantly loomed, causing absences of key players and coaching staff and even forcing multiple games to be rescheduled. The playoff field was expanded from 12 to 14 teams, and teams like the Cleveland...",
    "contentFile": "2020_rookie_qbs.txt",
    "images": [
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-01.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-02.png",
        "alt": "Rookie QBs: The 2020 Class figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-03.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-04.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-05.png",
        "alt": "Rookie QBs: The 2020 Class figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 53
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-06.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 55
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-07.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-08.png",
        "alt": "Rookie QBs: The 2020 Class figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-09.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 61
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-10.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 63
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-11.png",
        "alt": "Rookie QBs: The 2020 Class figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 68
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-12.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 70
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-13.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 72
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-14.png",
        "alt": "Rookie QBs: The 2020 Class figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 74
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-15.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 76
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-16.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 77
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-17.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 80
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-18.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 95
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-19.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 107
      },
      {
        "src": "/assets/journalism/2020_rookie_qbs/figure-20.jpg",
        "alt": "Rookie QBs: The 2020 Class figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 119
      }
    ]
  },
  {
    "title": "An In-Depth Comparison of Two NBA Eras",
    "authors": [
      "Terrence Liu"
    ],
    "date": "Mar 25, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "It has been 20 years since the turn of the century--a span in which basketball experienced many revolutions. The 2000-2001 NBA season was before Steph Curry’s three-point revolution, Lebron James and his undeniable dominance through three different teams: it is the time of...",
    "contentFile": "compare_nba_eras.txt",
    "images": [
      {
        "src": "/assets/journalism/compare_nba_eras/figure-01.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-02.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-03.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-04.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-05.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-06.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-07.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-08.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-09.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-10.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-11.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-12.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-13.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/compare_nba_eras/figure-14.png",
        "alt": "An In-Depth Comparison of Two NBA Eras figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Mar 21, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 20,
    "summary": "(With an offensive/defensive weight of 14, the 2003-2004 Detroit Pistons are the most heavily defensively weighted championship winner since the 1983-1984 season—the image above shows defensive cornerstone Ben Wallace matched up against the late Kobe Bryant during the 2004...",
    "contentFile": "off_def_part2.txt",
    "images": [
      {
        "src": "/assets/journalism/off_def_part2/figure-01.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-02.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-03.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-04.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-05.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-06.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-07.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-08.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-09.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/off_def_part2/figure-10.jpg",
        "alt": "Offensive/Defensive Weight Part 2: Wrapping Up a Complicated Relationship figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      }
    ]
  },
  {
    "title": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Mar 21, 2021",
    "year": 2021,
    "sport": "General",
    "readTime": 18,
    "summary": "We’ve all heard the sayings before: “offense wins games but defense wins championships,” or something in that vein. Today, we will see if there are any truths to these adages. Looking back at data from the last four decades, parts one and two of this piece will explore the...",
    "contentFile": "off_def_part1.txt",
    "images": [
      {
        "src": "/assets/journalism/off_def_part1/figure-01.jpg",
        "alt": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/off_def_part1/figure-02.jpg",
        "alt": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/off_def_part1/figure-03.jpg",
        "alt": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/off_def_part1/figure-04.jpg",
        "alt": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/off_def_part1/figure-05.jpg",
        "alt": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/off_def_part1/figure-06.jpg",
        "alt": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/off_def_part1/figure-07.jpg",
        "alt": "Offensive/Defensive Weight Part 1: Correlations Between Orientation and Success figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      }
    ]
  },
  {
    "title": "Finding a City for the Next NBA Expansion Team",
    "authors": [
      "Franklin Liang"
    ],
    "date": "Mar 21, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 14,
    "summary": "We hear it every year. “Seattle deserves an NBA team again.”",
    "contentFile": "nba_expansion.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_expansion/figure-01.png",
        "alt": "Finding a City for the Next NBA Expansion Team figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nba_expansion/figure-02.png",
        "alt": "Finding a City for the Next NBA Expansion Team figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_expansion/figure-03.png",
        "alt": "Finding a City for the Next NBA Expansion Team figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "NBA Draft Analysis",
    "authors": [
      "Claire Jiang",
      "Wilson Yu"
    ],
    "date": "Mar 21, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 26,
    "summary": "The NBA Draft is a highly anticipated annual event where teams get the chance to recruit top talent in hopes of building a dynasty and making championship runs. For organizations that have not performed so well, this is their chance to level out the playing field by...",
    "contentFile": "nba_draft_analysis.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-01.png",
        "alt": "NBA Draft Analysis figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-02.png",
        "alt": "NBA Draft Analysis figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-03.png",
        "alt": "NBA Draft Analysis figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-04.png",
        "alt": "NBA Draft Analysis figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-05.png",
        "alt": "NBA Draft Analysis figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-06.png",
        "alt": "NBA Draft Analysis figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-07.png",
        "alt": "NBA Draft Analysis figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-08.png",
        "alt": "NBA Draft Analysis figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-09.png",
        "alt": "NBA Draft Analysis figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-10.png",
        "alt": "NBA Draft Analysis figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-11.png",
        "alt": "NBA Draft Analysis figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-12.png",
        "alt": "NBA Draft Analysis figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-13.png",
        "alt": "NBA Draft Analysis figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-14.png",
        "alt": "NBA Draft Analysis figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-15.png",
        "alt": "NBA Draft Analysis figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/nba_draft_analysis/figure-16.png",
        "alt": "NBA Draft Analysis figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      }
    ]
  },
  {
    "title": "The GOAT vs The Cliff",
    "authors": [
      "Erik Chen"
    ],
    "date": "Mar 20, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 13,
    "summary": "Max Kellerman, a famous sports commentator and co-host of ESPN’s First Take show, in 2016 famously made his Tom Brady cliff prediction. Specifically this is what Kellerman said: “Tom Brady’s just about done. It could be his next game. It could be a year from now. But he is...",
    "contentFile": "goat_vs_cliff.txt",
    "images": [
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-01.png",
        "alt": "The GOAT vs The Cliff figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-02.png",
        "alt": "The GOAT vs The Cliff figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-03.png",
        "alt": "The GOAT vs The Cliff figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-04.png",
        "alt": "The GOAT vs The Cliff figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-05.png",
        "alt": "The GOAT vs The Cliff figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-06.png",
        "alt": "The GOAT vs The Cliff figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-07.png",
        "alt": "The GOAT vs The Cliff figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/goat_vs_cliff/figure-08.png",
        "alt": "The GOAT vs The Cliff figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "3-pt Volume vs. 2-pt Efficiency: Stylistic Differences in the Modern NBA",
    "authors": [
      "Brian Suk"
    ],
    "date": "Mar 16, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "One prevalent topic in the modern NBA is the notable shift in the offensive style of today. Back in the 2000’s and earlier, offensive strategy was much slower and all about isolation. Giving the ball to your star player or throwing it to the post and letting them go to work...",
    "contentFile": "nba_stylistic_differences.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_stylistic_differences/figure-01.jpg",
        "alt": "3-pt Volume vs. 2-pt Efficiency: Stylistic Differences in the Modern NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/nba_stylistic_differences/figure-02.jpg",
        "alt": "3-pt Volume vs. 2-pt Efficiency: Stylistic Differences in the Modern NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_stylistic_differences/figure-03.jpg",
        "alt": "3-pt Volume vs. 2-pt Efficiency: Stylistic Differences in the Modern NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      }
    ]
  },
  {
    "title": "How Important is the Serve in Men’s Singles Tennis?",
    "authors": [
      "Shail Mirpuri"
    ],
    "date": "Mar 16, 2021",
    "year": 2021,
    "sport": "Tennis",
    "readTime": 14,
    "summary": "In the sport of Tennis, there are very few things discussed more than a player's serve. The serve helps a player dictate the flow of a particular point, and can be crucial in determining a player’s overall success within a Grand Slam. With a rise in point-level data...",
    "contentFile": "serve_importance.txt",
    "images": [
      {
        "src": "/assets/journalism/serve_importance/figure-01.png",
        "alt": "How Important is the Serve in Men’s Singles Tennis? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/serve_importance/figure-02.png",
        "alt": "How Important is the Serve in Men’s Singles Tennis? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/serve_importance/figure-03.png",
        "alt": "How Important is the Serve in Men’s Singles Tennis? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/serve_importance/figure-04.png",
        "alt": "How Important is the Serve in Men’s Singles Tennis? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "Old Time Hockey",
    "authors": [
      "Brendan Zytowski"
    ],
    "date": "Mar 15, 2021",
    "year": 2021,
    "sport": "Hockey",
    "readTime": 6,
    "summary": "Hockey is often described as the most violent of the most followed global team sports. This is in part due to the constant rough-housing and physical nature of professional hockey. A common myth parroted by hockey analysts, scouts, coaches, and even General Managers, is that...",
    "contentFile": "old_time_hockey.txt",
    "images": [
      {
        "src": "/assets/journalism/old_time_hockey/figure-01.jpg",
        "alt": "Old Time Hockey figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/old_time_hockey/figure-02.jpg",
        "alt": "Old Time Hockey figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/old_time_hockey/figure-03.jpg",
        "alt": "Old Time Hockey figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/old_time_hockey/figure-04.jpg",
        "alt": "Old Time Hockey figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Comparing the Playstyles of North American and European Rocket League",
    "authors": [
      "Oscar O'Brien"
    ],
    "date": "Mar 14, 2021",
    "year": 2021,
    "sport": "Soccer",
    "readTime": 23,
    "summary": "Rocket League is an esports game that has been rapidly gaining popularity recently after becoming a free-to-play game on the Epic Games Store. It was even one of two games selected to be featured in a tournament (now likely canceled due to COVID-19) hosted before the Tokyo...",
    "contentFile": "rocketleague_playstyles.txt",
    "images": [
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-01.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-02.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-03.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-04.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-05.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-06.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-07.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-08.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-09.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-10.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-11.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-12.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-13.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 36
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-14.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-15.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/rocketleague_playstyles/figure-16.png",
        "alt": "Comparing the Playstyles of North American and European Rocket League figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 42
      }
    ]
  },
  {
    "title": "Should You Run or Pass When Going For Two?",
    "authors": [
      "Ryan Dunker",
      "Tommy Schilder"
    ],
    "date": "Mar 12, 2021",
    "year": 2021,
    "sport": "Football",
    "readTime": 8,
    "summary": "Among the most pivotal moments in a football game is the two point conversion. Whether it’s necessary to tie the game, or a bold move to take the lead, it’s hard to find a two yard play that is more consequential than the two point conversion. Despite the two point conversion...",
    "contentFile": "going_for_two.txt",
    "images": [
      {
        "src": "/assets/journalism/going_for_two/figure-01.png",
        "alt": "Should You Run or Pass When Going For Two? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/going_for_two/figure-02.png",
        "alt": "Should You Run or Pass When Going For Two? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/going_for_two/figure-03.png",
        "alt": "Should You Run or Pass When Going For Two? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/going_for_two/figure-04.png",
        "alt": "Should You Run or Pass When Going For Two? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/going_for_two/figure-05.png",
        "alt": "Should You Run or Pass When Going For Two? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "Analyzing the Recent New York Knicks \"Success\"",
    "authors": [
      "Allen Chun"
    ],
    "date": "Mar 4, 2021",
    "year": 2021,
    "sport": "Golf",
    "readTime": 8,
    "summary": "Last season, the New York Knicks won 21 of 66 games, putting them in 12th place in the Eastern Conference and missing the playoffs for the seventh straight year. With mediocre offseason signings and unlucky draft pick positions, it certainly seemed as if the Knicks were...",
    "contentFile": "knicks_success.txt",
    "images": [
      {
        "src": "/assets/journalism/knicks_success/figure-01.png",
        "alt": "Analyzing the Recent New York Knicks \"Success\" figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/knicks_success/figure-02.png",
        "alt": "Analyzing the Recent New York Knicks \"Success\" figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/knicks_success/figure-03.png",
        "alt": "Analyzing the Recent New York Knicks \"Success\" figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/knicks_success/figure-04.png",
        "alt": "Analyzing the Recent New York Knicks \"Success\" figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/knicks_success/figure-05.png",
        "alt": "Offensive/Defensive Rating On & Off Court",
        "caption": "Offensive/Defensive Rating On & Off Court",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/knicks_success/figure-06.png",
        "alt": "Analyzing the Recent New York Knicks \"Success\" figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "How do Giannis' Statistics Compare to Hakeem Olajuwon's?",
    "authors": [
      "Akshat Srivastav",
      "Utkarsh Kumar"
    ],
    "date": "Jan 2, 2021",
    "year": 2021,
    "sport": "Basketball",
    "readTime": 20,
    "summary": "This 2019-20 NBA season, Giannis Antetokounmpo accomplished something extraordinary. He joined Michael Jordan and Hakeem Olajuwon as the only 3 players to win MVP and DPOY in the same year. He also won back-to-back MVPs, putting up career high scoring and rebounding numbers....",
    "contentFile": "giannis_vs_hakeem.txt",
    "images": [
      {
        "src": "/assets/journalism/giannis_vs_hakeem/figure-01.png",
        "alt": "A head-to-head tornado chart",
        "caption": "A head-to-head tornado chart",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/giannis_vs_hakeem/figure-02.png",
        "alt": "How do Giannis' Statistics Compare to Hakeem Olajuwon's? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/giannis_vs_hakeem/figure-03.png",
        "alt": "How do Giannis' Statistics Compare to Hakeem Olajuwon's? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/giannis_vs_hakeem/figure-04.png",
        "alt": "PPG seasonal graph for Hakeem and Giannis’ Prime",
        "caption": "PPG seasonal graph for Hakeem and Giannis’ Prime",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      }
    ]
  },
  {
    "title": "How Important are Soccer Managers?",
    "authors": [
      "Derek Nakagawa",
      "Trent Bellinger"
    ],
    "date": "Jan 1, 2021",
    "year": 2021,
    "sport": "Soccer",
    "readTime": 6,
    "summary": "There have been many great soccer players throughout history including Ronaldo, Messi, Maradona, Pele, and the list goes on.  But what many fans don’t realize is how important managers are to these winning teams.  The manager’s role is to sign new players, coach the...",
    "contentFile": "soccer_managers.txt",
    "images": [
      {
        "src": "/assets/journalism/soccer_managers/figure-01.png",
        "alt": "How Important are Soccer Managers? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/soccer_managers/figure-02.png",
        "alt": "How Important are Soccer Managers? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/soccer_managers/figure-03.png",
        "alt": "How Important are Soccer Managers? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/soccer_managers/figure-04.png",
        "alt": "How Important are Soccer Managers? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      }
    ]
  },
  {
    "title": "Does Distance Determine Dollars?",
    "authors": [
      "Erik Chen",
      "Taiyo Keilin"
    ],
    "date": "Dec 21, 2020",
    "year": 2020,
    "sport": "Golf",
    "readTime": 7,
    "summary": "Driving distance has been at the forefront of golf fans’ minds since the 1997 season when a young Tiger Woods was outdriving the average PGA Tour pro by over 25 yards while also winning many tournaments by lopsided margins. At the time he was the game’s second-longest hitter,...",
    "contentFile": "driving_distance.txt",
    "images": [
      {
        "src": "/assets/journalism/driving_distance/figure-01.png",
        "alt": "Does Distance Determine Dollars? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/driving_distance/figure-02.png",
        "alt": "Does Distance Determine Dollars? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/driving_distance/figure-03.png",
        "alt": "Does Distance Determine Dollars? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/driving_distance/figure-04.png",
        "alt": "Does Distance Determine Dollars? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "A Tactical Breakdown of the English Premier League",
    "authors": [
      "Faraz Murshed"
    ],
    "date": "Dec 21, 2020",
    "year": 2020,
    "sport": "Soccer",
    "readTime": 8,
    "summary": "As the most-watched sports league on the planet, the English Premier League (EPL) prides itself on being a fiercely contested competition. Analysts and pundits generally believe that any of the clubs in the table are capable of taking points off another. Furthermore,...",
    "contentFile": "epl_tactical_breakdown.txt",
    "images": [
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-01.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-02.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-03.jpg",
        "alt": "A Tactical Breakdown of the English Premier League figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-04.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-05.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-06.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-07.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-08.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-09.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-10.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/epl_tactical_breakdown/figure-11.png",
        "alt": "A Tactical Breakdown of the English Premier League figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "Why the Houston Rockets Small Ball Experiment Failed",
    "authors": [
      "Allen Chun"
    ],
    "date": "Dec 20, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "Just before the NBA was preparing to resume the 2019-2020 season at the Orlando Disney bubble, there were four teams that were favorites to win the championship in the betting markets: the Los Angeles Lakers, the Los Angeles Clippers, the Milwaukee Bucks, and the Houston...",
    "contentFile": "why-the-houston-rockets-small-ball-experiment-failed.txt",
    "images": [
      {
        "src": "/assets/journalism/why-the-houston-rockets-small-ball-experiment-failed/figure-01.png",
        "alt": "Why the Houston Rockets Small Ball Experiment Failed figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/why-the-houston-rockets-small-ball-experiment-failed/figure-02.png",
        "alt": "Why the Houston Rockets Small Ball Experiment Failed figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/why-the-houston-rockets-small-ball-experiment-failed/figure-03.png",
        "alt": "Why the Houston Rockets Small Ball Experiment Failed figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/why-the-houston-rockets-small-ball-experiment-failed/figure-04.png",
        "alt": "Why the Houston Rockets Small Ball Experiment Failed figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/why-the-houston-rockets-small-ball-experiment-failed/figure-05.png",
        "alt": "*Stats from the 2019-2020 were not taken into account due to injuries from Stephen Curry and Klay Thompson.",
        "caption": "*Stats from the 2019-2020 were not taken into account due to injuries from Stephen Curry and Klay Thompson.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Execution and Difficulty Trends in Elite Gymnastics",
    "authors": [
      "Kaylee Diller",
      "Avery Robinson"
    ],
    "date": "Dec 17, 2020",
    "year": 2020,
    "sport": "Gymnastics",
    "readTime": 10,
    "summary": "In elite gymnastics, a gymnast’s score is broken up into two components: execution and difficulty. The execution score is out of ten, and can be thought of as a grade of how perfectly the routine was performed. Introduced after the 2004 Athens Olympic Games, the difficulty...",
    "contentFile": "elite_gymnastics.txt",
    "images": [
      {
        "src": "/assets/journalism/elite_gymnastics/figure-01.png",
        "alt": "Execution and Difficulty Trends in Elite Gymnastics figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/elite_gymnastics/figure-02.png",
        "alt": "Execution and Difficulty Trends in Elite Gymnastics figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/elite_gymnastics/figure-03.png",
        "alt": "Execution and Difficulty Trends in Elite Gymnastics figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/elite_gymnastics/figure-04.png",
        "alt": "Execution and Difficulty Trends in Elite Gymnastics figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/elite_gymnastics/figure-05.png",
        "alt": "Execution and Difficulty Trends in Elite Gymnastics figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/elite_gymnastics/figure-06.png",
        "alt": "Execution and Difficulty Trends in Elite Gymnastics figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "Are Role Players the Foundation of NBA Team Success?",
    "authors": [
      "Terrence Liu",
      "Oscar O’Brien"
    ],
    "date": "Dec 17, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 21,
    "summary": "The National Basketball Association (NBA) is filled with superstar players that deservedly receive a significant amount of attention and praise for helping their respective teams. Players such as Lebron James, Stephen Curry, and even younger talents like Luka Doncic are...",
    "contentFile": "nba_roleplayers.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_roleplayers/figure-01.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-02.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-03.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-04.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-05.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-06.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-07.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-08.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-09.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-10.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-11.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-12.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-13.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba_roleplayers/figure-14.png",
        "alt": "Are Role Players the Foundation of NBA Team Success? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "Finding the All-NBA Average Team of 2019-2020",
    "authors": [
      "Franklin Liang"
    ],
    "date": "Dec 17, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "If the NBA is one big show, then its superstars are the main actors. We gravitate towards their talent, highlights, and accolades because greatness is simply second nature to them. If I said, “LeBron James,” you’d probably tell me, “3-time champ, 4-time MVP, and arguable...",
    "contentFile": "nba_average_team.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_average_team/figure-01.jpg",
        "alt": "Figure 1: Average Stats by Position Table",
        "caption": "Figure 1: Average Stats by Position Table",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_average_team/figure-02.png",
        "alt": "Figure 2: Average Stats by Position",
        "caption": "Figure 2: Average Stats by Position",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nba_average_team/figure-03.png",
        "alt": "Finding the All-NBA Average Team of 2019-2020 figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_average_team/figure-04.png",
        "alt": "Finding the All-NBA Average Team of 2019-2020 figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nba_average_team/figure-05.png",
        "alt": "Figure 3: Average Stats of Position vs. Average Player",
        "caption": "Figure 3: Average Stats of Position vs. Average Player",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/nba_average_team/figure-06.png",
        "alt": "Figure 4: Most Average Players by Position ",
        "caption": "Figure 4: Most Average Players by Position ",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      }
    ]
  },
  {
    "title": "Is Defensive Rating a Good Measure of Actual Defensive Ability?",
    "authors": [
      "Brian Suk"
    ],
    "date": "Dec 17, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 12,
    "summary": "“Defense wins championships.” If you are an NBA fan, or even just a sports fan in general, you are probably familiar with this phrase. It signifies the importance of the less-highlighted side of the floor that contributes just as much to a team’s success as a flashy dunk, or...",
    "contentFile": "defensive_rating.txt",
    "images": [
      {
        "src": "/assets/journalism/defensive_rating/figure-01.png",
        "alt": "Is Defensive Rating a Good Measure of Actual Defensive Ability? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/defensive_rating/figure-02.png",
        "alt": "Is Defensive Rating a Good Measure of Actual Defensive Ability? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/defensive_rating/figure-03.png",
        "alt": "Is Defensive Rating a Good Measure of Actual Defensive Ability? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/defensive_rating/figure-04.png",
        "alt": "Is Defensive Rating a Good Measure of Actual Defensive Ability? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/defensive_rating/figure-05.png",
        "alt": "Is Defensive Rating a Good Measure of Actual Defensive Ability? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "How Deserving Are NBA MVP Selections?",
    "authors": [
      "Dean Jones",
      "Vishal Narayan"
    ],
    "date": "Dec 17, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 31,
    "summary": "Since the 1955-56 season, the National Basketball Association Most Valuable Player Award has sought to honor the best performing player of the regular season. Every winner eligible for the Hall of Fame has been inducted. Triumphantly punctuating a career year with the Maurice...",
    "contentFile": "nba_mvp.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_mvp/figure-01.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-02.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-03.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-04.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-05.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-06.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-07.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-08.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-09.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-10.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-11.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-12.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-13.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-14.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-15.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-16.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-17.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-18.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-19.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-20.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-21.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-22.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-23.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-24.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-25.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-26.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-27.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 64
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-28.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 28",
        "width": 1200,
        "height": 700,
        "afterParagraph": 64
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-29.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 29",
        "width": 1200,
        "height": 700,
        "afterParagraph": 64
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-30.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 30",
        "width": 1200,
        "height": 700,
        "afterParagraph": 64
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-31.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 31",
        "width": 1200,
        "height": 700,
        "afterParagraph": 71
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-32.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 32",
        "width": 1200,
        "height": 700,
        "afterParagraph": 71
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-33.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 33",
        "width": 1200,
        "height": 700,
        "afterParagraph": 71
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-34.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 34",
        "width": 1200,
        "height": 700,
        "afterParagraph": 71
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-35.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 35",
        "width": 1200,
        "height": 700,
        "afterParagraph": 82
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-36.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 36",
        "width": 1200,
        "height": 700,
        "afterParagraph": 82
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-37.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 37",
        "width": 1200,
        "height": 700,
        "afterParagraph": 82
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-38.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 38",
        "width": 1200,
        "height": 700,
        "afterParagraph": 82
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-39.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 39",
        "width": 1200,
        "height": 700,
        "afterParagraph": 89
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-40.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 40",
        "width": 1200,
        "height": 700,
        "afterParagraph": 89
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-41.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 41",
        "width": 1200,
        "height": 700,
        "afterParagraph": 89
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-42.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 42",
        "width": 1200,
        "height": 700,
        "afterParagraph": 89
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-43.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 43",
        "width": 1200,
        "height": 700,
        "afterParagraph": 96
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-44.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 44",
        "width": 1200,
        "height": 700,
        "afterParagraph": 96
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-45.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 45",
        "width": 1200,
        "height": 700,
        "afterParagraph": 96
      },
      {
        "src": "/assets/journalism/nba_mvp/figure-46.png",
        "alt": "How Deserving Are NBA MVP Selections? figure 46",
        "width": 1200,
        "height": 700,
        "afterParagraph": 96
      }
    ]
  },
  {
    "title": "Cracking the Fantasy Premier League Process",
    "authors": [
      "Shail Mirpuri"
    ],
    "date": "Dec 14, 2020",
    "year": 2020,
    "sport": "Soccer",
    "readTime": 13,
    "summary": "Every year over 6 million soccer fanatics take part in the biggest fantasy soccer league in the world: The Fantasy Premier League (FPL). Players face tough dilemmas when selecting their squads by considering where they should allocate their budgets, when they should make...",
    "contentFile": "cracking_fpl.txt",
    "images": [
      {
        "src": "/assets/journalism/cracking_fpl/figure-01.png",
        "alt": "Cracking the Fantasy Premier League Process figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/cracking_fpl/figure-02.png",
        "alt": "Cracking the Fantasy Premier League Process figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/cracking_fpl/figure-03.png",
        "alt": "Cracking the Fantasy Premier League Process figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Dec 14, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 29,
    "summary": "Anyone who plays any sport knows how difficult it is to take a game full of skill, luck, athleticism, and random chance and reduce a player’s impact down to a metric or statistic. They also know how exponentially harder it is to do so for defense compared to offense. In this...",
    "contentFile": "defensive_dimensions.txt",
    "images": [
      {
        "src": "/assets/journalism/defensive_dimensions/figure-01.png",
        "alt": "Graphic by Ben Taylor",
        "caption": "Graphic by Ben Taylor",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-02.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-03.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-04.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-05.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-06.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-07.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-08.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-09.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-10.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-11.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-12.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-13.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 13",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-14.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 14",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-15.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 15",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-16.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 16",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-17.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 17",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-18.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 18",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-19.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 19",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-20.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 20",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-21.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 21",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-22.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 22",
        "width": 1200,
        "height": 700,
        "afterParagraph": 38
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-23.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 23",
        "width": 1200,
        "height": 700,
        "afterParagraph": 40
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-24.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 24",
        "width": 1200,
        "height": 700,
        "afterParagraph": 41
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-25.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 25",
        "width": 1200,
        "height": 700,
        "afterParagraph": 45
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-26.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 26",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-27.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 27",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-28.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 28",
        "width": 1200,
        "height": 700,
        "afterParagraph": 48
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-29.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 29",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-30.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 30",
        "width": 1200,
        "height": 700,
        "afterParagraph": 50
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-31.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 31",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-32.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 32",
        "width": 1200,
        "height": 700,
        "afterParagraph": 52
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-33.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 33",
        "width": 1200,
        "height": 700,
        "afterParagraph": 56
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-34.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 34",
        "width": 1200,
        "height": 700,
        "afterParagraph": 57
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-35.png",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 35",
        "width": 1200,
        "height": 700,
        "afterParagraph": 58
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-36.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 36",
        "width": 1200,
        "height": 700,
        "afterParagraph": 59
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-37.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 37",
        "width": 1200,
        "height": 700,
        "afterParagraph": 61
      },
      {
        "src": "/assets/journalism/defensive_dimensions/figure-38.jpg",
        "alt": "Defensive Dimensions: Analyzing Defensive Impact Through a Visual Lens figure 38",
        "width": 1200,
        "height": 700,
        "afterParagraph": 62
      }
    ]
  },
  {
    "title": "What it Takes to Become a Two-time Olympic Champion",
    "authors": [
      "Nora Liu"
    ],
    "date": "Dec 12, 2020",
    "year": 2020,
    "sport": "Gymnastics",
    "readTime": 7,
    "summary": "Yuzuru Hanyu, two-time Olympic Champion in men’s figure skating, two-time world champion, and 4 time champion of GPF, is by all means a great skater. He is the first skater to land a clean quadruple loop, and the first skater to surpass a total score of 300 points. Other than...",
    "contentFile": "olympic_skating_champion.txt",
    "images": [
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-01.png",
        "alt": "What it Takes to Become a Two-time Olympic Champion figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-02.png",
        "alt": "Fig 1: World Junior Figure Skating Championships 2010 Male Free Program Score. (1) Technical element score consists of base value and GOE. BV shows the level of difficulty of the skaters’ planned combination of all technical elements, and GOE is based on the quality of these elements done during the competition. (2) total score consists of TES and PCS. TES is the technical score, and PCS is the performance score. More detailed explanations are at the end of the article.",
        "caption": "Fig 1: World Junior Figure Skating Championships 2010 Male Free Program Score. (1) Technical element score consists of base value and GOE. BV shows the level of difficulty of the skaters’ planned combination of all technical elements, and GOE is based on the quality of these elements done during the competition. (2) total score consists of TES and PCS. TES is the technical score, and PCS is the performance score. More detailed explanations are at the end of the article.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-03.png",
        "alt": "Fig 2: (1) Yuzuru Hanyu’s number of quad jumps in both short and free programs; (2) Yuzuru Hanyu’s free program technical score from season 2010-2014, with separate scores of base value and GOE",
        "caption": "Fig 2: (1) Yuzuru Hanyu’s number of quad jumps in both short and free programs; (2) Yuzuru Hanyu’s free program technical score from season 2010-2014, with separate scores of base value and GOE",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-04.png",
        "alt": "Fig 3: Plot of PCS against TES in 2014 Sochi Olympics Men’s Figure Skating Free Program. The red line is the best fit line. The linear model can be used to predict PCS. The P-value of the variable TES is 0.046 which is smaller than 0.05 suggesting that the variable TES is statistically significant. This model has R^2 value at 0.2387, which is understandably low since there are multiple other factors that might influence one’s PCS, including the performance itself, skaters’ starting order, nationality, etc. But this model tells us that there is a valid positive relationship between PCS and TES.",
        "caption": "Fig 3: Plot of PCS against TES in 2014 Sochi Olympics Men’s Figure Skating Free Program. The red line is the best fit line. The linear model can be used to predict PCS. The P-value of the variable TES is 0.046 which is smaller than 0.05 suggesting that the variable TES is statistically significant. This model has R^2 value at 0.2387, which is understandably low since there are multiple other factors that might influence one’s PCS, including the performance itself, skaters’ starting order, nationality, etc. But this model tells us that there is a valid positive relationship between PCS and TES.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-05.png",
        "alt": "Fig 4: Residual plot does not show much pattern. Points are scattered around 0. The NCV test gives a p-value at 0.44542, which is much larger than 0.05. This model does not violate the assumption of error variance.",
        "caption": "Fig 4: Residual plot does not show much pattern. Points are scattered around 0. The NCV test gives a p-value at 0.44542, which is much larger than 0.05. This model does not violate the assumption of error variance.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-06.png",
        "alt": "Table 1: outlier test of the linear model created to predict PCS from TES. The number 6 here refers to the index of skater Takahashi. This score is a bit extreme based on the model created above. Hanyu’s score fits the model.",
        "caption": "Table 1: outlier test of the linear model created to predict PCS from TES. The number 6 here refers to the index of skater Takahashi. This score is a bit extreme based on the model created above. Hanyu’s score fits the model.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-07.png",
        "alt": "Fig 5: boxplot of free program base values of top 10 skaters in WC and olympics. The purple line represents Hanyu’s base value.",
        "caption": "Fig 5: boxplot of free program base values of top 10 skaters in WC and olympics. The purple line represents Hanyu’s base value.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-08.png",
        "alt": "Table 2: Quadruple jumps in both programs in 2017 WC",
        "caption": "Table 2: Quadruple jumps in both programs in 2017 WC",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-09.jpg",
        "alt": "What it Takes to Become a Two-time Olympic Champion figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/olympic_skating_champion/figure-10.jpg",
        "alt": "Fig 6: (1) Base value and GOE (2) TES and PCS scores of free program in 2018 Pyeongchang Olympics.",
        "caption": "Fig 6: (1) Base value and GOE (2) TES and PCS scores of free program in 2018 Pyeongchang Olympics.",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "Man vs Machine: Human and Analytical Evaluations of NBA Greats",
    "authors": [
      "Ian Geertsen"
    ],
    "date": "Sep 20, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 41,
    "summary": "Who are the greatest players of all time, and how are they ranked? These are timeless questions asked by every fan of every sport, and quite frankly are questions that I can not hope to answer. What I do hope, though, is that this piece adds a new perspective for how we look...",
    "contentFile": "man_vs_machine.txt"
  },
  {
    "title": "Project Restart: Winners and Losers of the EPL’s Return",
    "authors": [
      "Ethan Allavarpu"
    ],
    "date": "Aug 17, 2020",
    "year": 2020,
    "sport": "Soccer",
    "readTime": 16,
    "summary": "After a hiatus of around three months, the English Premier League resumed its season in mid-June in an all-out sprint to the finish line. Most of the league’s fans knew which team would hoist the trophy around a month later on the last weekend of July: the Liverpool Reds....",
    "contentFile": "project_restart.txt",
    "images": [
      {
        "src": "/assets/journalism/project_restart/figure-01.jpg",
        "alt": "Project Restart: Winners and Losers of the EPL’s Return figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/project_restart/figure-02.jpg",
        "alt": "Project Restart: Winners and Losers of the EPL’s Return figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/project_restart/figure-03.jpg",
        "alt": "Project Restart: Winners and Losers of the EPL’s Return figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/project_restart/figure-04.jpg",
        "alt": "Project Restart: Winners and Losers of the EPL’s Return figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/project_restart/figure-05.jpg",
        "alt": "Project Restart: Winners and Losers of the EPL’s Return figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/project_restart/figure-06.jpg",
        "alt": "Project Restart: Winners and Losers of the EPL’s Return figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 74
      }
    ]
  },
  {
    "title": "2020 NBA Playoff Predictions Part 2: Our Projections for Each Series (The Fun Stuff)",
    "authors": [
      "Wilson Yu",
      "Dean Jones",
      "Lia Bergman-Turnbull"
    ],
    "date": "Jul 22, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 40,
    "summary": "In the first part of our article, we discussed the statistical background of the model that we have used to project the 2020 NBA Playoffs. In this second part, we will proceed to discuss all the match-ups with an emphasis on some of the more intense and interesting matchups,...",
    "contentFile": "nba_playoffs_2020_part2.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_playoffs_2020_part2/figure-01.png",
        "alt": "2020 NBA Playoff Predictions Part 2: Our Projections for Each Series (The Fun Stuff) figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      }
    ]
  },
  {
    "title": "2020 NBA Playoff Predictions Part 1: Our Model (The Nerdy Stuff)",
    "authors": [
      "Wilson Yu",
      "Dean Jones",
      "Lia Bergman-Turnbull"
    ],
    "date": "Jul 22, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 10,
    "summary": "With the coronavirus holding the nation and world in its grasp and most human activity coming to a standstill, there is a huge void in our lives. For all us non-essential workers, we are starting to feel a bit restless, despite knowing we are fortunate to be at home safely....",
    "contentFile": "nba_playoffs_2020.txt",
    "images": [
      {
        "src": "/assets/journalism/nba_playoffs_2020/figure-01.png",
        "alt": "2020 NBA Playoff Predictions Part 1: Our Model (The Nerdy Stuff) figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/nba_playoffs_2020/figure-02.png",
        "alt": "2020 NBA Playoff Predictions Part 1: Our Model (The Nerdy Stuff) figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nba_playoffs_2020/figure-03.png",
        "alt": "2020 NBA Playoff Predictions Part 1: Our Model (The Nerdy Stuff) figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/nba_playoffs_2020/figure-04.png",
        "alt": "2020 NBA Playoff Predictions Part 1: Our Model (The Nerdy Stuff) figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "Which Team Won the 2020 Draft?",
    "authors": [
      "Vishal Sundaram"
    ],
    "date": "Jun 15, 2020",
    "year": 2020,
    "sport": "Football",
    "readTime": 17,
    "summary": "With the NFL draft having recently concluded, many fans and outlets have been releasing draft grades, as per the annual tradition. While the grades vary from A's down to the occasional F, there's really very little analysis put into deriving these letters; these outlets often...",
    "contentFile": "draftwinners.txt",
    "images": [
      {
        "src": "/assets/journalism/draftwinners/figure-01.png",
        "alt": "Which Team Won the 2020 Draft? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/draftwinners/figure-02.png",
        "alt": "Which Team Won the 2020 Draft? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/draftwinners/figure-03.png",
        "alt": "Which Team Won the 2020 Draft? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/draftwinners/figure-04.png",
        "alt": "Which Team Won the 2020 Draft? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/draftwinners/figure-05.png",
        "alt": "Which Team Won the 2020 Draft? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/draftwinners/figure-06.png",
        "alt": "Which Team Won the 2020 Draft? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      }
    ]
  },
  {
    "title": "Fantasy Football and the NFL Combine",
    "authors": [
      "Ethan Allavarpu",
      "Kyle Boal"
    ],
    "date": "Jun 15, 2020",
    "year": 2020,
    "sport": "Football",
    "readTime": 12,
    "summary": "The NFL combine garners popularity among football fans across the country. Players boost themselves into the public spotlight after a spectacular combine (i.e. D.K. Metcalf blew up on social media after his phenomenal combine results). The combine can affect draft stock,...",
    "contentFile": "fantasycombine.txt",
    "images": [
      {
        "src": "/assets/journalism/fantasycombine/figure-01.png",
        "alt": "Fantasy Football and the NFL Combine figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-02.png",
        "alt": "Fantasy Football and the NFL Combine figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-03.png",
        "alt": "Fantasy Football and the NFL Combine figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-04.png",
        "alt": "Fantasy Football and the NFL Combine figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 24
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-05.png",
        "alt": "Fantasy Football and the NFL Combine figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-06.png",
        "alt": "Fantasy Football and the NFL Combine figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-07.png",
        "alt": "Fantasy Football and the NFL Combine figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 28
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-08.png",
        "alt": "Fantasy Football and the NFL Combine figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 33
      },
      {
        "src": "/assets/journalism/fantasycombine/figure-09.png",
        "alt": "Fantasy Football and the NFL Combine figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 34
      }
    ]
  },
  {
    "title": "Predicting Success: Why the White Sox are the Next Rays",
    "authors": [
      "Luke Ito",
      "Sean Lashkari"
    ],
    "date": "Apr 6, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 13,
    "summary": "In Major League Baseball, it is notoriously difficult for a single player to lead a team to the playoffs, unlike sports such as basketball or football. With only a soft salary cap — the luxury tax — teams with more financial power have more playoff success than teams with...",
    "contentFile": "whitesoxrays.txt",
    "images": [
      {
        "src": "/assets/journalism/whitesoxrays/figure-01.png",
        "alt": "Predicting Success: Why the White Sox are the Next Rays figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/whitesoxrays/figure-02.png",
        "alt": "Predicting Success: Why the White Sox are the Next Rays figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/whitesoxrays/figure-03.png",
        "alt": "Predicting Success: Why the White Sox are the Next Rays figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "The Faces of Tomorrow’s NBA?: A Comparison of the Atlanta Hawks’ and Dallas Mavericks’ Offenses",
    "authors": [
      "Oscar O'Brien",
      "Mason Weinstein"
    ],
    "date": "Apr 6, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 7,
    "summary": "When All-Stars Trae Young and Luka Doncic were swapped for each other on the day they were drafted in 2018, nobody could have predicted the offensive numbers they both would be putting up today. They weren't traded for each other straight up, with the Mavericks forking over a...",
    "contentFile": "hawksmavs.txt",
    "images": [
      {
        "src": "/assets/journalism/hawksmavs/figure-01.png",
        "alt": "The Faces of Tomorrow’s NBA?: A Comparison of the Atlanta Hawks’ and Dallas Mavericks’ Offenses figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/hawksmavs/figure-02.png",
        "alt": "The Faces of Tomorrow’s NBA?: A Comparison of the Atlanta Hawks’ and Dallas Mavericks’ Offenses figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      }
    ]
  },
  {
    "title": "The Team With the Best Clutch Gene",
    "authors": [
      "Wilson Yu",
      "Jaden Nguyen",
      "Pieter van Tol"
    ],
    "date": "Mar 31, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "In the 2013 NBA Finals, Ray Allen hit arguably one of the most significant shots of the decade. With the rival San Antonio Spurs just seconds away from another NBA championship, Allen converted an offensive rebound into a 3 point shot to tie the game, send it to overtime and...",
    "contentFile": "clutchgene.txt",
    "images": [
      {
        "src": "/assets/journalism/clutchgene/figure-01.png",
        "alt": "Figure 1: Absolute Clutch Win Percentage",
        "caption": "Figure 1: Absolute Clutch Win Percentage",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/clutchgene/figure-02.png",
        "alt": "Figure 2: Relative Clutch Win Percentage",
        "caption": "Figure 2: Relative Clutch Win Percentage",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/clutchgene/figure-03.png",
        "alt": "Figure 3: Adjusted Offensive Rating",
        "caption": "Figure 3: Adjusted Offensive Rating",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/clutchgene/figure-04.png",
        "alt": "Figure 4: Adjusted Defensive Rating",
        "caption": "Figure 4: Adjusted Defensive Rating",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/clutchgene/figure-05.png",
        "alt": "Figure 5: Adjusted Net Rating",
        "caption": "Figure 5: Adjusted Net Rating",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/clutchgene/figure-06.png",
        "alt": "The Team With the Best Clutch Gene figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "The Legacy of Michael Phelps",
    "authors": [
      "Fischer Sherrod"
    ],
    "date": "Mar 30, 2020",
    "year": 2020,
    "sport": "Gymnastics",
    "readTime": 8,
    "summary": "With 28 Olympic gold medals, 27 World Championship gold medals, and 16 Pan Pacific Championship gold medals, Michael Phelps is the most decorated swimmer of all time. But Phelps' medals are just the beginning of his legacy. He has attended 5 Olympic Games, been named World...",
    "contentFile": "michaelphelps.txt",
    "images": [
      {
        "src": "/assets/journalism/michaelphelps/figure-01.png",
        "alt": "The Legacy of Michael Phelps figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/michaelphelps/figure-02.png",
        "alt": "The Legacy of Michael Phelps figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/michaelphelps/figure-03.png",
        "alt": "The Legacy of Michael Phelps figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/michaelphelps/figure-04.png",
        "alt": "The Legacy of Michael Phelps figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/michaelphelps/figure-05.png",
        "alt": "The Legacy of Michael Phelps figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/michaelphelps/figure-06.png",
        "alt": "The Legacy of Michael Phelps figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "The Coin Toss",
    "authors": [
      "Ethan Allavarpu",
      "Kyle Boal"
    ],
    "date": "Mar 29, 2020",
    "year": 2020,
    "sport": "Football",
    "readTime": 9,
    "summary": "A coin toss is just a flip of the coin, but in recent years-especially during the NFL playoffs-it has seemingly gained heightened importance. A prime example of this is the coin toss of the Super Bowl: in the early years, only the select few captains and a single referee met...",
    "contentFile": "cointoss.txt",
    "images": [
      {
        "src": "/assets/journalism/cointoss/figure-01.png",
        "alt": "The Coin Toss figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/cointoss/figure-02.png",
        "alt": "The Coin Toss figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/cointoss/figure-03.png",
        "alt": "The Coin Toss figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/cointoss/figure-04.png",
        "alt": "The Coin Toss figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/cointoss/figure-05.png",
        "alt": "The Coin Toss figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/cointoss/figure-06.png",
        "alt": "The Coin Toss figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/cointoss/figure-07.png",
        "alt": "The Coin Toss figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV",
    "authors": [
      "Kathir Ilango"
    ],
    "date": "Feb 17, 2020",
    "year": 2020,
    "sport": "Football",
    "readTime": 16,
    "summary": "After finishing the 2016 season with 2 wins, the San Francisco 49ers decided it was time to try something new. They went into full-rebuild mode, giving six-year contracts to new head coach Kyle Shanahan and general manager John Lynch. Prior to their hiring, Shanahan was an...",
    "contentFile": "kyleshanahan.txt",
    "images": [
      {
        "src": "/assets/journalism/kyleshanahan/figure-01.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-02.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-03.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-04.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-05.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-06.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-07.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-08.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-09.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-10.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-11.jpg",
        "alt": "Source: NBC Sports",
        "caption": "Source: NBC Sports",
        "width": 1200,
        "height": 700,
        "afterParagraph": 25
      },
      {
        "src": "/assets/journalism/kyleshanahan/figure-12.jpg",
        "alt": "The Story of Kyle Shanahan’s Offense and Where He Went Wrong in Super Bowl LIV figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      }
    ]
  },
  {
    "title": "The Sustainability of Lamar Jackson's Production",
    "authors": [
      "Vishal Sundaram"
    ],
    "date": "Feb 1, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 13,
    "summary": "When tasked with winning football games, every head coach in the NFL talks about establishing an identity, as all the best teams have one. The 49ers are winning off of a multi-dimensional running game and a ferocious defense that gets to the opposing quarterback. The Saints...",
    "contentFile": "lamarjackson.txt",
    "images": [
      {
        "src": "/assets/journalism/lamarjackson/figure-01.png",
        "alt": "The Sustainability of Lamar Jackson's Production figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/lamarjackson/figure-02.png",
        "alt": "The Sustainability of Lamar Jackson's Production figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/lamarjackson/figure-03.png",
        "alt": "The Sustainability of Lamar Jackson's Production figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/lamarjackson/figure-04.png",
        "alt": "The Sustainability of Lamar Jackson's Production figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "A Brief History of MLB Postseason Format Changes",
    "authors": [
      "Fischer Sherrod"
    ],
    "date": "Jan 24, 2020",
    "year": 2020,
    "sport": "Baseball",
    "readTime": 7,
    "summary": "For many baseball fans, the MLB postseason—the World Series in particular—is the ultimate test of skill and teamwork. Over the course of a month, the best teams battle it out to become the World Series champion. Dating back to the first MLB postseason in 1884, the title of...",
    "contentFile": "mlbpostseason.txt",
    "images": [
      {
        "src": "/assets/journalism/mlbpostseason/figure-01.png",
        "alt": "A Brief History of MLB Postseason Format Changes figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/mlbpostseason/figure-02.png",
        "alt": "A Brief History of MLB Postseason Format Changes figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/mlbpostseason/figure-03.png",
        "alt": "A Brief History of MLB Postseason Format Changes figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/mlbpostseason/figure-04.png",
        "alt": "A Brief History of MLB Postseason Format Changes figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Christian Yelich and the Rise to Stardom",
    "authors": [
      "Max Blane",
      "Borna Nazari"
    ],
    "date": "Jan 15, 2020",
    "year": 2020,
    "sport": "Baseball",
    "readTime": 9,
    "summary": "Drafted as a Florida Marlin 23rd overall in 2010, Christian Yelich was a very highly touted prospect with loads of potential. As predictions usually go for players drafted in the first few rounds, he was expected to eventually reach the Major Leagues and be a top of the order...",
    "contentFile": "christianyelich.txt",
    "images": [
      {
        "src": "/assets/journalism/christianyelich/figure-01.png",
        "alt": "Christian Yelich and the Rise to Stardom figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/christianyelich/figure-02.png",
        "alt": "Christian Yelich and the Rise to Stardom figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/christianyelich/figure-03.png",
        "alt": "Christian Yelich and the Rise to Stardom figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/christianyelich/figure-04.png",
        "alt": "Christian Yelich and the Rise to Stardom figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/christianyelich/figure-05.png",
        "alt": "Christian Yelich and the Rise to Stardom figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/christianyelich/figure-06.png",
        "alt": "Christian Yelich and the Rise to Stardom figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/christianyelich/figure-07.png",
        "alt": "Christian Yelich and the Rise to Stardom figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "Analyzing Factors That Go Into a Fast Marathon",
    "authors": [
      "Donald Chung"
    ],
    "date": "Jan 15, 2020",
    "year": 2020,
    "sport": "General",
    "readTime": 5,
    "summary": "On October 12, 2019, it was still early morning as the world watched as Elliot Kipchoge put one foot in front of another, gracefully passing the finish line and becoming the first person ever to run a marathon in under two hours. He finished in a blistering fast time of...",
    "contentFile": "fastestmarathon.txt",
    "images": [
      {
        "src": "/assets/journalism/fastestmarathon/figure-01.png",
        "alt": "Analyzing Factors That Go Into a Fast Marathon figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/fastestmarathon/figure-02.png",
        "alt": "Analyzing Factors That Go Into a Fast Marathon figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/fastestmarathon/figure-03.png",
        "alt": "Analyzing Factors That Go Into a Fast Marathon figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/fastestmarathon/figure-04.png",
        "alt": "Analyzing Factors That Go Into a Fast Marathon figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/fastestmarathon/figure-05.png",
        "alt": "Analyzing Factors That Go Into a Fast Marathon figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      }
    ]
  },
  {
    "title": "The Modern Fullback",
    "authors": [
      "Ishaan Shah"
    ],
    "date": "Jan 14, 2020",
    "year": 2020,
    "sport": "Golf",
    "readTime": 9,
    "summary": "When one hears the word defender, what comes to one's mind? A defender's main job is to prevent the opposition from scoring and stays back while the rest of the team attacks. Straightforward, right? The modern fullback is way more than just a defender. Their duties and...",
    "contentFile": "modernfullback.txt",
    "images": [
      {
        "src": "/assets/journalism/modernfullback/figure-01.png",
        "alt": "The Modern Fullback figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/modernfullback/figure-02.png",
        "alt": "Source: Statsbomb",
        "caption": "Source: Statsbomb",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/modernfullback/figure-03.png",
        "alt": "Source: Statsbomb",
        "caption": "Source: Statsbomb",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/modernfullback/figure-04.png",
        "alt": "Source: Statsbomb",
        "caption": "Source: Statsbomb",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/modernfullback/figure-05.png",
        "alt": "Source: Statsbomb",
        "caption": "Source: Statsbomb",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/modernfullback/figure-06.jpg",
        "alt": "Source: Statsbomb",
        "caption": "Source: Statsbomb",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/modernfullback/figure-07.jpg",
        "alt": "Source: Sofascore",
        "caption": "Source: Sofascore",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      },
      {
        "src": "/assets/journalism/modernfullback/figure-08.jpg",
        "alt": "Source: Sofascore",
        "caption": "Source: Sofascore",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/modernfullback/figure-09.jpg",
        "alt": "Source: Statsbomb",
        "caption": "Source: Statsbomb",
        "width": 1200,
        "height": 700,
        "afterParagraph": 30
      },
      {
        "src": "/assets/journalism/modernfullback/figure-10.jpg",
        "alt": "The Modern Fullback figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/modernfullback/figure-11.png",
        "alt": "The Modern Fullback figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/modernfullback/figure-12.png",
        "alt": "Source: The Guardian",
        "caption": "Source: The Guardian",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      }
    ]
  },
  {
    "title": "The Evolution of the Free Throw",
    "authors": [
      "Ethan Allavarpu",
      "Kyle Boal"
    ],
    "date": "Jan 7, 2020",
    "year": 2020,
    "sport": "Basketball",
    "readTime": 9,
    "summary": "The Free Throw: the only shot in basketball that is theoretically free, but players continue to show that it's more difficult than it originally appears. In the early 2000's, the idea of \"hack-a-shaq\" was introduced. This strategy had players intentionally foul poor free...",
    "contentFile": "freethrow.txt",
    "images": [
      {
        "src": "/assets/journalism/freethrow/figure-01.png",
        "alt": "The Evolution of the Free Throw figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/freethrow/figure-02.png",
        "alt": "The Evolution of the Free Throw figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/freethrow/figure-03.png",
        "alt": "The Evolution of the Free Throw figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/freethrow/figure-04.png",
        "alt": "The Evolution of the Free Throw figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/freethrow/figure-05.png",
        "alt": "The Evolution of the Free Throw figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/freethrow/figure-06.png",
        "alt": "The Evolution of the Free Throw figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/freethrow/figure-07.png",
        "alt": "The Evolution of the Free Throw figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      }
    ]
  },
  {
    "title": "How to Maximize Your Investment in Top Sports Stocks",
    "authors": [
      "Breanna Ramos"
    ],
    "date": "Jul 18, 2019",
    "year": 2019,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "Earlier this year, Nike became the official uniform and footwear supplier of Major League Baseball (MLB). This means that Nike now dominates three of the four major professional sports leagues within the U.S.: MLB, NBA, and NFL. When I learned that Nike had secured its third...",
    "contentFile": "topsportsstocks.txt",
    "images": [
      {
        "src": "/assets/journalism/topsportsstocks/figure-01.jpg",
        "alt": "How to Maximize Your Investment in Top Sports Stocks figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/topsportsstocks/figure-02.jpg",
        "alt": "How to Maximize Your Investment in Top Sports Stocks figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/topsportsstocks/figure-03.jpg",
        "alt": "How to Maximize Your Investment in Top Sports Stocks figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "How the Sharks’ Versatility Led them to the Conference Finals",
    "authors": [
      "Haley Rao",
      "Kristen Ahmann",
      "Joe Dunham"
    ],
    "date": "May 29, 2019",
    "year": 2019,
    "sport": "Hockey",
    "readTime": 23,
    "summary": "One of the thrills of watching playoff hockey is the emotional aspect, following a team through several games against the same opponent with everything on the line, and an especially close series makes the thrill even higher. The San Jose Sharks playing the Vegas Golden...",
    "contentFile": "knightsvssharksbrainstorm.txt",
    "images": [
      {
        "src": "/assets/journalism/knightsvssharksbrainstorm/figure-01.png",
        "alt": "How the Sharks’ Versatility Led them to the Conference Finals figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/knightsvssharksbrainstorm/figure-02.png",
        "alt": "How the Sharks’ Versatility Led them to the Conference Finals figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/knightsvssharksbrainstorm/figure-03.png",
        "alt": "How the Sharks’ Versatility Led them to the Conference Finals figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/knightsvssharksbrainstorm/figure-04.png",
        "alt": "How the Sharks’ Versatility Led them to the Conference Finals figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/knightsvssharksbrainstorm/figure-05.png",
        "alt": "How the Sharks’ Versatility Led them to the Conference Finals figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 17
      },
      {
        "src": "/assets/journalism/knightsvssharksbrainstorm/figure-06.png",
        "alt": "How the Sharks’ Versatility Led them to the Conference Finals figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/knightsvssharksbrainstorm/figure-07.png",
        "alt": "How the Sharks’ Versatility Led them to the Conference Finals figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 22
      }
    ]
  },
  {
    "title": "The Issues With the Duckworth-Lewis-Stern Method",
    "authors": [
      "Vedant Sahu"
    ],
    "date": "May 28, 2019",
    "year": 2019,
    "sport": "Soccer",
    "readTime": 9,
    "summary": "With the Indian Premier League wrapped up and the ICC World Cup just on the horizon, the cricket fever is definitely reaching its peak. As more and more people turn towards cricket to keep themselves entertained over the summer, it is probably safe to say that people who have...",
    "contentFile": "duckworthlewissternmethod.txt",
    "images": [
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-01.jpg",
        "alt": "The Issues With the Duckworth-Lewis-Stern Method figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-02.png",
        "alt": "The Issues With the Duckworth-Lewis-Stern Method figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-03.png",
        "alt": "Scorecard for the game (Credits: ESPN Cricinfo)",
        "caption": "Scorecard for the game (Credits: ESPN Cricinfo)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-04.jpg",
        "alt": "The Issues With the Duckworth-Lewis-Stern Method figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-05.jpg",
        "alt": "The Issues With the Duckworth-Lewis-Stern Method figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-06.jpg",
        "alt": "The Issues With the Duckworth-Lewis-Stern Method figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-07.jpg",
        "alt": "The Issues With the Duckworth-Lewis-Stern Method figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/duckworthlewissternmethod/figure-08.jpg",
        "alt": "The Issues With the Duckworth-Lewis-Stern Method figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "What It Takes To Be World Number 1: An Analysis of the ATP Tour",
    "authors": [
      "Kevin Hahn",
      "Kathir Ilango"
    ],
    "date": "May 28, 2019",
    "year": 2019,
    "sport": "Tennis",
    "readTime": 12,
    "summary": "When it comes to individual sports, the title of “World Number One” is the ultimate feat an athlete can achieve. Tennis may be the most popular example of such a sport, as it is played worldwide and is heavily driven by rankings from its lowest tiers to the professional...",
    "contentFile": "atptour.txt",
    "images": [
      {
        "src": "/assets/journalism/atptour/figure-01.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/atptour/figure-02.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/atptour/figure-03.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/atptour/figure-04.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/atptour/figure-05.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/atptour/figure-06.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/atptour/figure-07.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/atptour/figure-08.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/atptour/figure-09.png",
        "alt": "What It Takes To Be World Number 1: An Analysis of the ATP Tour figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Home Runs in the Air",
    "authors": [
      "Alex Veroulis"
    ],
    "date": "May 25, 2019",
    "year": 2019,
    "sport": "Baseball",
    "readTime": 9,
    "summary": "Every year, it seems that home runs become more and more prevalent in the modern version of Major League Baseball. After all, in recent years, more players seem to be following the Three True Outcomes when they go up to hit: a strikeout, a walk, or a home run. These outcomes...",
    "contentFile": "homerunsintheair.txt",
    "images": [
      {
        "src": "/assets/journalism/homerunsintheair/figure-01.png",
        "alt": "Home Runs in the Air figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/homerunsintheair/figure-02.jpg",
        "alt": "Home Runs in the Air figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/homerunsintheair/figure-03.png",
        "alt": "Home Runs in the Air figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/homerunsintheair/figure-04.png",
        "alt": "Home Runs in the Air figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      }
    ]
  },
  {
    "title": "The Three Point Shot & the NBA",
    "authors": [
      "Max Blane",
      "Borna Nazari"
    ],
    "date": "Apr 22, 2019",
    "year": 2019,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "The 3-point shot, instituted into the NBA in 1979, significantly impacted the future and the direction of the league. In the shot's inaugural year, Hubie Brown's '79-80 Hawks attempted a season total of 75 three-pointers, making just 13, for a three-point shooting percentage...",
    "contentFile": "the3pointshot.txt",
    "images": [
      {
        "src": "/assets/journalism/the3pointshot/figure-01.png",
        "alt": "The Three Point Shot & the NBA figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/the3pointshot/figure-02.png",
        "alt": "The Three Point Shot & the NBA figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/the3pointshot/figure-03.png",
        "alt": "The Three Point Shot & the NBA figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/the3pointshot/figure-04.png",
        "alt": "WolframAlpha.com",
        "caption": "WolframAlpha.com",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/the3pointshot/figure-05.png",
        "alt": "WolframAlpha.com",
        "caption": "WolframAlpha.com",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/the3pointshot/figure-06.png",
        "alt": "The Three Point Shot & the NBA figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "An Analysis of Score Inflation in NCAA Women’s Gymnastics",
    "authors": [
      "Joey Maurer"
    ],
    "date": "Apr 13, 2019",
    "year": 2019,
    "sport": "Gymnastics",
    "readTime": 6,
    "summary": "As the 2019 Women's Gymnastics Championship approaches, a cloud of controversy looms over the sport. Many fans believe that the scores being handed out this year are misrepresentative of actual routines. The issue of score inflation seems to creep into every discussion about...",
    "contentFile": "analysis_score_inflation_in_ncaa_women.txt",
    "images": [
      {
        "src": "/assets/journalism/analysis_score_inflation_in_ncaa_women/figure-01.png",
        "alt": "An Analysis of Score Inflation in NCAA Women’s Gymnastics figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/analysis_score_inflation_in_ncaa_women/figure-02.png",
        "alt": "An Analysis of Score Inflation in NCAA Women’s Gymnastics figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/analysis_score_inflation_in_ncaa_women/figure-03.png",
        "alt": "An Analysis of Score Inflation in NCAA Women’s Gymnastics figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/analysis_score_inflation_in_ncaa_women/figure-04.png",
        "alt": "An Analysis of Score Inflation in NCAA Women’s Gymnastics figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      }
    ]
  },
  {
    "title": "Andy Murray: A “Big Four” Member, but the Weakest One",
    "authors": [
      "Stephen Chen"
    ],
    "date": "Apr 3, 2019",
    "year": 2019,
    "sport": "Tennis",
    "readTime": 6,
    "summary": "At the end of 2016, Andy Murray raised the Paris Masters 1000 trophy after defeating John Isner in 3 sets, cementing his status as the world's No. 1 tennis player for the first time in his career. Murray had racked up 9 singles titles to end the 2016 season, including his...",
    "contentFile": "andy_murray.txt",
    "images": [
      {
        "src": "/assets/journalism/andy_murray/figure-01.png",
        "alt": "Andy Murray: A “Big Four” Member, but the Weakest One figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/andy_murray/figure-02.png",
        "alt": "Andy Murray: A “Big Four” Member, but the Weakest One figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/andy_murray/figure-03.png",
        "alt": "Andy Murray: A “Big Four” Member, but the Weakest One figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/andy_murray/figure-04.png",
        "alt": "Andy Murray: A “Big Four” Member, but the Weakest One figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/andy_murray/figure-05.png",
        "alt": "Andy Murray: A “Big Four” Member, but the Weakest One figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/andy_murray/figure-06.png",
        "alt": "Andy Murray: A “Big Four” Member, but the Weakest One figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      }
    ]
  },
  {
    "title": "On the Road Again: The Myth of Neutrality in NHL Scheduling",
    "authors": [
      "Joe Dunham"
    ],
    "date": "Mar 10, 2019",
    "year": 2019,
    "sport": "Hockey",
    "readTime": 9,
    "summary": "With the NHL season inching closer to the playoffs, the format of the regular season is perhaps not the first thought on most fans' minds. However, this year's notable lack of inter-conference parity has drawn attention from casual and knowledgeable fans alike -- the point...",
    "contentFile": "nhl_scheduling.txt",
    "images": [
      {
        "src": "/assets/journalism/nhl_scheduling/figure-01.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 1
      },
      {
        "src": "/assets/journalism/nhl_scheduling/figure-02.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/nhl_scheduling/figure-03.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nhl_scheduling/figure-04.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nhl_scheduling/figure-05.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nhl_scheduling/figure-06.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nhl_scheduling/figure-07.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nhl_scheduling/figure-08.png",
        "alt": "On the Road Again: The Myth of Neutrality in NHL Scheduling figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  },
  {
    "title": "What Happens to Jim Harbaugh in Big Games?",
    "authors": [
      "Kathir Ilango"
    ],
    "date": "Feb 14, 2019",
    "year": 2019,
    "sport": "Football",
    "readTime": 9,
    "summary": "After finishing the 2010 NFL season with a losing record yet again, the San Francisco 49ers finally decided it was time for a new head coach. They needed to win games to become relevant again and, more importantly, they needed to bring life back to a fan base that had not had...",
    "contentFile": "harbaugh.txt",
    "images": [
      {
        "src": "/assets/journalism/harbaugh/figure-01.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/harbaugh/figure-02.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/harbaugh/figure-03.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/harbaugh/figure-04.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/harbaugh/figure-05.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/harbaugh/figure-06.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/harbaugh/figure-07.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/harbaugh/figure-08.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      },
      {
        "src": "/assets/journalism/harbaugh/figure-09.png",
        "alt": "What Happens to Jim Harbaugh in Big Games? figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      }
    ]
  },
  {
    "title": "The Impact of Pitches Seen on Offensive Production",
    "authors": [
      "Max Blane",
      "Borna Nazari"
    ],
    "date": "Jan 24, 2019",
    "year": 2019,
    "sport": "Baseball",
    "readTime": 7,
    "summary": "Due to the effects of a major knee surgery suffered during a September 2016 matchup vs. the Toronto Blue Jays, and a reinjury that was followed by a second surgery in April of 2017, the 2018 season came and went with Boston Red Sox second baseman Dustin Pedroia compiling...",
    "contentFile": "pitchesoffensiveproduction.txt",
    "images": [
      {
        "src": "/assets/journalism/pitchesoffensiveproduction/figure-01.png",
        "alt": "The Impact of Pitches Seen on Offensive Production figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/pitchesoffensiveproduction/figure-02.png",
        "alt": "The Impact of Pitches Seen on Offensive Production figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/pitchesoffensiveproduction/figure-03.png",
        "alt": "The Impact of Pitches Seen on Offensive Production figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      }
    ]
  },
  {
    "title": "Constructing My All-Time NBA Lineup Through K-Means Clustering, Part 2",
    "authors": [
      "Nikhil Sharma"
    ],
    "date": "Jan 14, 2019",
    "year": 2019,
    "sport": "Basketball",
    "readTime": 6,
    "summary": "If you haven't read my first article on the topic, check it out here! A few months ago, I wrote an article where I used k-means clustering to help choose five NBA players from 1980 to the present to constitute an all-time starting lineup.",
    "contentFile": "nbaclust2.txt",
    "images": [
      {
        "src": "/assets/journalism/nbaclust2/figure-01.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering, Part 2 figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/nbaclust2/figure-02.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering, Part 2 figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/nbaclust2/figure-03.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering, Part 2 figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 9
      },
      {
        "src": "/assets/journalism/nbaclust2/figure-04.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering, Part 2 figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/nbaclust2/figure-05.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering, Part 2 figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      },
      {
        "src": "/assets/journalism/nbaclust2/figure-06.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering, Part 2 figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 18
      }
    ]
  },
  {
    "title": "Russell Westbrook: Point Guard or Shooting Guard?",
    "authors": [
      "Jack Ma",
      "Nikhil Sharma"
    ],
    "date": "Dec 5, 2018",
    "year": 2018,
    "sport": "Basketball",
    "readTime": 11,
    "summary": "Russell Westbrook has become one of the NBA's top players in the past decade. He has been a marvel to watch, as his thrilling athleticism has allowed him to churn out highlight after highlight. On top of his exhilarating play-style, he has become a fan favorite due to his...",
    "contentFile": "russpgorsg.txt",
    "images": [
      {
        "src": "/assets/journalism/russpgorsg/figure-01.png",
        "alt": "Russell Westbrook: Point Guard or Shooting Guard? figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/russpgorsg/figure-02.png",
        "alt": "Russell Westbrook: Point Guard or Shooting Guard? figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/russpgorsg/figure-03.png",
        "alt": "Russell Westbrook: Point Guard or Shooting Guard? figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/russpgorsg/figure-04.png",
        "alt": "Russell Westbrook: Point Guard or Shooting Guard? figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/russpgorsg/figure-05.png",
        "alt": "Russell Westbrook: Point Guard or Shooting Guard? figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      }
    ]
  },
  {
    "title": "Constructing My All-Time NBA Lineup Through K-Means Clustering",
    "authors": [
      "Nikhil Sharma"
    ],
    "date": "Nov 29, 2018",
    "year": 2018,
    "sport": "Basketball",
    "readTime": 15,
    "summary": "It's a debate that pervades all cultures, ages and creeds. From every barbershop to lunch table in the world, the question rings: what is your best all-time starting five? Who can construct the best lineup to put on the hardwood using any player from any time? It's a question...",
    "contentFile": "kmeansallnba.txt",
    "images": [
      {
        "src": "/assets/journalism/kmeansallnba/figure-01.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/kmeansallnba/figure-02.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/kmeansallnba/figure-03.png",
        "alt": "Constructing My All-Time NBA Lineup Through K-Means Clustering figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      }
    ]
  },
  {
    "title": "Raw Powerlifting is Coming at Full Force",
    "authors": [
      "Qi Jing Yap"
    ],
    "date": "Nov 21, 2018",
    "year": 2018,
    "sport": "General",
    "readTime": 13,
    "summary": "On first glance, powerlifting appears to be a sport destined for greatness, featuring incredible feats of strength through the squat, bench, and deadlift, some of the most ubiquitous exercises in the gym. In addition to that, the basic rules of the sport are mind-numbingly...",
    "contentFile": "powerlifting.txt",
    "images": [
      {
        "src": "/assets/journalism/powerlifting/figure-01.png",
        "alt": "Raw Powerlifting is Coming at Full Force figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/powerlifting/figure-02.png",
        "alt": "Raw Powerlifting is Coming at Full Force figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/powerlifting/figure-03.png",
        "alt": "Raw Powerlifting is Coming at Full Force figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 20
      },
      {
        "src": "/assets/journalism/powerlifting/figure-04.png",
        "alt": "Raw Powerlifting is Coming at Full Force figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/powerlifting/figure-05.png",
        "alt": "Raw Powerlifting is Coming at Full Force figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 21
      },
      {
        "src": "/assets/journalism/powerlifting/figure-06.png",
        "alt": "Raw Powerlifting is Coming at Full Force figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 26
      }
    ]
  },
  {
    "title": "How 'Mexican Style' Came Back to Haunt GGG",
    "authors": [
      "Kathir Ilango"
    ],
    "date": "Oct 27, 2018",
    "year": 2018,
    "sport": "General",
    "readTime": 9,
    "summary": "The success of a boxer comes down to not only how he can fight, but also how he can spread his brand. The man from Kazakhstan known around the world today as 'GGG' did not have traction in the popularity department for a massive portion of his fighting career. After an...",
    "contentFile": "mexicanstyle.txt",
    "images": [
      {
        "src": "/assets/journalism/mexicanstyle/figure-01.png",
        "alt": "How 'Mexican Style' Came Back to Haunt GGG figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 5
      },
      {
        "src": "/assets/journalism/mexicanstyle/figure-02.png",
        "alt": "How 'Mexican Style' Came Back to Haunt GGG figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/mexicanstyle/figure-03.png",
        "alt": "How 'Mexican Style' Came Back to Haunt GGG figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/mexicanstyle/figure-04.png",
        "alt": "How 'Mexican Style' Came Back to Haunt GGG figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/mexicanstyle/figure-05.png",
        "alt": "How 'Mexican Style' Came Back to Haunt GGG figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 14
      },
      {
        "src": "/assets/journalism/mexicanstyle/figure-06.png",
        "alt": "How 'Mexican Style' Came Back to Haunt GGG figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs",
    "authors": [
      "Don Vu"
    ],
    "date": "May 22, 2018",
    "year": 2018,
    "sport": "Basketball",
    "readTime": 14,
    "summary": "With 2 minutes left on the clock, Richard Hamilton stepped up to the free throw line. He dribbled the ball a few times and calmly knocked down both shots to seal one of the most stunning upsets in playoff history. The Detroit Pistons had defeated the heavily favored Los...",
    "contentFile": "defchamp.txt",
    "images": [
      {
        "src": "/assets/journalism/defchamp/figure-01.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 2
      },
      {
        "src": "/assets/journalism/defchamp/figure-02.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 3
      },
      {
        "src": "/assets/journalism/defchamp/figure-03.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 8
      },
      {
        "src": "/assets/journalism/defchamp/figure-04.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 12
      },
      {
        "src": "/assets/journalism/defchamp/figure-05.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/defchamp/figure-06.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 19
      },
      {
        "src": "/assets/journalism/defchamp/figure-07.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 7",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      },
      {
        "src": "/assets/journalism/defchamp/figure-08.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 8",
        "width": 1200,
        "height": 700,
        "afterParagraph": 35
      },
      {
        "src": "/assets/journalism/defchamp/figure-09.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 9",
        "width": 1200,
        "height": 700,
        "afterParagraph": 37
      },
      {
        "src": "/assets/journalism/defchamp/figure-10.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 10",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/defchamp/figure-11.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 11",
        "width": 1200,
        "height": 700,
        "afterParagraph": 43
      },
      {
        "src": "/assets/journalism/defchamp/figure-12.png",
        "alt": "Does Defense Really Win Championships? An In-Depth Analysis of the NBA Playoffs figure 12",
        "width": 1200,
        "height": 700,
        "afterParagraph": 46
      }
    ]
  },
  {
    "title": "Kentucky Derby 2018: History, Trends, and Predictions",
    "authors": [
      "Joey Maurer"
    ],
    "date": "May 1, 2018",
    "year": 2018,
    "sport": "General",
    "readTime": 7,
    "summary": "Described as “The Most Exciting Two Minutes in Sports”, the Kentucky Derby never fails to capture the attention of sports and gambling enthusiasts alike each May. First held in 1875, the world famous race at Churchill Downs has become ingrained in American sports culture....",
    "contentFile": "kenderby.txt",
    "images": [
      {
        "src": "/assets/journalism/kenderby/figure-01.png",
        "alt": "Kentucky Derby 2018: History, Trends, and Predictions figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/kenderby/figure-02.png",
        "alt": "Kentucky Derby 2018: History, Trends, and Predictions figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/kenderby/figure-03.png",
        "alt": "Kentucky Derby 2018: History, Trends, and Predictions figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 10
      },
      {
        "src": "/assets/journalism/kenderby/figure-04.png",
        "alt": "Kentucky Derby 2018: History, Trends, and Predictions figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 13
      },
      {
        "src": "/assets/journalism/kenderby/figure-05.png",
        "alt": "Kentucky Derby 2018: History, Trends, and Predictions figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 16
      }
    ]
  },
  {
    "title": "UCLA Gymnastics: Analysis and Optimal Lineups Heading into Championship Meets",
    "authors": [
      "Joey Maurer"
    ],
    "date": "Mar 22, 2018",
    "year": 2018,
    "sport": "Gymnastics",
    "readTime": 11,
    "summary": "The most exciting time of the year for women’s collegiate gymnastics is just around the corner. UCLA, currently ranked #3 in the country, will compete for a conference, regional, and hopefully national championship in the coming weeks. Boasting a roster littered with former...",
    "contentFile": "uclagym.txt",
    "images": [
      {
        "src": "/assets/journalism/uclagym/figure-01.png",
        "alt": "UCLA Gymnastics: Analysis and Optimal Lineups Heading into Championship Meets figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 6
      },
      {
        "src": "/assets/journalism/uclagym/figure-02.png",
        "alt": "UCLA Gymnastics: Analysis and Optimal Lineups Heading into Championship Meets figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/uclagym/figure-03.jpg",
        "alt": "UCLA Gymnastics: Analysis and Optimal Lineups Heading into Championship Meets figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      },
      {
        "src": "/assets/journalism/uclagym/figure-04.jpg",
        "alt": "UCLA Gymnastics: Analysis and Optimal Lineups Heading into Championship Meets figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 15
      },
      {
        "src": "/assets/journalism/uclagym/figure-05.jpg",
        "alt": "UCLA Gymnastics: Analysis and Optimal Lineups Heading into Championship Meets figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 23
      },
      {
        "src": "/assets/journalism/uclagym/figure-06.jpg",
        "alt": "UCLA Gymnastics: Analysis and Optimal Lineups Heading into Championship Meets figure 6",
        "width": 1200,
        "height": 700,
        "afterParagraph": 27
      }
    ]
  },
  {
    "title": "An In-Depth Comparison of the 06-07 Phoenix Suns and 17-18 Houston Rockets",
    "authors": [
      "Ronaq Virdi",
      "Nikhil Sharma",
      "Ben Messinger"
    ],
    "date": "Mar 9, 2018",
    "year": 2018,
    "sport": "Basketball",
    "readTime": 16,
    "summary": "In Game 6 of the 1998 NBA Finals, Michael Jordan’s last game in a Chicago Bulls jersey, the Bulls attempted 67 field goals in the entire game, including only 10 three-point attempts. Fast forward to 2017-18, and the Houston Rockets are averaging 42.6 three-point field goal...",
    "contentFile": "sunsrockets.txt",
    "images": [
      {
        "src": "/assets/journalism/sunsrockets/figure-01.png",
        "alt": "An In-Depth Comparison of the 06-07 Phoenix Suns and 17-18 Houston Rockets figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 29
      },
      {
        "src": "/assets/journalism/sunsrockets/figure-02.png",
        "alt": "An In-Depth Comparison of the 06-07 Phoenix Suns and 17-18 Houston Rockets figure 2",
        "width": 1200,
        "height": 700,
        "afterParagraph": 31
      },
      {
        "src": "/assets/journalism/sunsrockets/figure-03.png",
        "alt": "An In-Depth Comparison of the 06-07 Phoenix Suns and 17-18 Houston Rockets figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 32
      },
      {
        "src": "/assets/journalism/sunsrockets/figure-04.png",
        "alt": "An In-Depth Comparison of the 06-07 Phoenix Suns and 17-18 Houston Rockets figure 4",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      },
      {
        "src": "/assets/journalism/sunsrockets/figure-05.png",
        "alt": "An In-Depth Comparison of the 06-07 Phoenix Suns and 17-18 Houston Rockets figure 5",
        "width": 1200,
        "height": 700,
        "afterParagraph": 39
      }
    ]
  },
  {
    "title": "Fixture Congestion and Playing Styles vs Injuries in European Football",
    "authors": [
      "Salil Akundi"
    ],
    "date": "Feb 7, 2018",
    "year": 2018,
    "sport": "Football",
    "readTime": 5,
    "summary": "Over the last few years, debate over fixture congestion in English football has increased, both on social media and by so-called sports pundits and former players on television. A key contributing factor to this debate is the increase in number of foreign mangers (mostly from...",
    "contentFile": "fixturecongestion.txt",
    "images": [
      {
        "src": "/assets/journalism/fixturecongestion/figure-01.jpg",
        "alt": "Fixture Congestion and Playing Styles vs Injuries in European Football figure 1",
        "width": 1200,
        "height": 700,
        "afterParagraph": 4
      },
      {
        "src": "/assets/journalism/fixturecongestion/figure-02.jpg",
        "alt": "Figure 1: Total number of injuries (2016-17 season)",
        "caption": "Figure 1: Total number of injuries (2016-17 season)",
        "width": 1200,
        "height": 700,
        "afterParagraph": 7
      },
      {
        "src": "/assets/journalism/fixturecongestion/figure-03.jpg",
        "alt": "Fixture Congestion and Playing Styles vs Injuries in European Football figure 3",
        "width": 1200,
        "height": 700,
        "afterParagraph": 11
      }
    ]
  }
];
