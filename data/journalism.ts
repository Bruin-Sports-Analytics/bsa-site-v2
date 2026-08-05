export type JournalismArticle = {
  title: string;
  authors: string[];
  date: string;
  year: number;
  sport: string;
  readTime: number;
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
    title: "Can the Toronto Maple Leafs Pay Up?",
    authors: ["Joe Dunham"],
    date: "Nov 28, 2018",
    year: 2018,
    sport: "Hockey",
    readTime: 9,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/maple_leafs.pdf"
  },
  {
    title: "2018 Ballon d'Or: A Look at the Contenders and their Numbers",
    authors: ["Vedant Sahu"],
    date: "Nov 29, 2018",
    year: 2018,
    sport: "Soccer",
    readTime: 15,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/ballon_dor.pdf"
  },
  {
    title: "Bust to Beast: The Jared Goff Story",
    authors: ["Anirudh Mani"],
    date: "Nov 29, 2018",
    year: 2018,
    sport: "Football",
    readTime: 10,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/jared_goff.pdf"
  },
  {
    title: "Defense in the Modern NFL (or Lack Thereof)",
    authors: ["Arman Abrishamchian"],
    date: "Dec 4, 2018",
    year: 2018,
    sport: "Football",
    readTime: 5,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/defense_modern_nfl.pdf"
  },
  {
    title: "Can Summer Ball Indicate Professional Success?",
    authors: ["Haley Rao"],
    date: "Dec 4, 2018",
    year: 2018,
    sport: "Baseball",
    readTime: 4,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/summer_ball.pdf"
  },
  {
    title: "Keys to Success for the Young Lakers Core",
    authors: ["Justin Yee"],
    date: "Dec 3, 2018",
    year: 2018,
    sport: "Basketball",
    readTime: 6,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/lakers_young_core.pdf"
  },
  {
    title: "Relievers in Today's MLB",
    authors: ["Alex Veroulis"],
    date: "Dec 5, 2018",
    year: 2018,
    sport: "Baseball",
    readTime: 6,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/relievers.pdf"
  },
  {
    title: "How Effective is a Possession-Based Play Style in the UEFA Champions League?",
    authors: ["Faraz Murshed"],
    date: "Dec 5, 2018",
    year: 2018,
    sport: "Soccer",
    readTime: 6,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/uefa.pdf"
  },
  {
    title: "Why Anthony Davis and the Pelicans Failed",
    authors: ["Chad Shimozaki"],
    date: "Feb 9, 2019",
    year: 2019,
    sport: "Basketball",
    readTime: 8,
    paperUrl: "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/dj_archive/anthony_davis.pdf"
  },
  {
    title: "Goalkeeper Passing: What's been done so far",
    authors: ["Salil Akundi"],
    date: "Jan 27, 2019",
    year: 2019,
    sport: "Football",
    readTime: 8,
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
