export type JournalismArticle = {
  title: string;
  authors: string[];
  date: string;
  year: number;
  sport: string;
  readTime: number;
  views: number;
  likes: number;
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
