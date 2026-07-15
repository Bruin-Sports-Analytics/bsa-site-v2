export type JournalismArticle = {
  title: string;
  authors: string[];
  date: string;
  readTime: number;
  views: number;
  likes: number;
};

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
