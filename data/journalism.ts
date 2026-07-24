export type JournalismArticle = {
  title: string;
  authors: string[];
  date: string;
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
    title: 'Are the "Uncs" Holding Back the NBA?',
    authors: ["Yuri Jung", "Evana Sharma", "Chloe Lee"],
    date: "Mar 27",
    readTime: 7,
    views: 74,
    likes: 1,
  },
  {
    title: "Which Quarterbacks have been Historically Great against the Blitz?",
    authors: ["Devon Yu", "Nathan Yee", "Ethan Chan", "Evan Mock"],
    date: "Mar 27",
    readTime: 12,
    views: 27,
    likes: 0,
  },
  {
    title: "The Credit Goes to the Wrong People",
    authors: ["Van Avanesian", "Ricky Cai", "Jayden Kim", "Justin Herr"],
    date: "Mar 27",
    readTime: 10,
    views: 85,
    likes: 3,
  },
];
