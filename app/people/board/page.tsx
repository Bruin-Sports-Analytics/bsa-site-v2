import type { Metadata } from "next";
import { members } from "@/data/site";
import { PeopleSections } from "@/components/PeopleSections";

export const metadata: Metadata = {
  title: "Board",
  description: "Meet the executive board, operations team, and division chairs leading Bruin Sports Analytics at UCLA across research, consulting, and student recruitment.",
  keywords: [
    "Bruin Sports Analytics board",
    "BSA student leadership",
    "UCLA sports analytics chairs",
    "sports analytics executive board",
    "sports analytics directors UCLA",
    "BSA leadership team"
  ],
  openGraph: {
    title: "Executive Board & Leadership | Bruin Sports Analytics",
    description: "Meet the student leaders and division chairs directing research, consulting, and recruitment for BSA.",
    url: "https://www.bruinsportsanalytics.org/people/board"
  }
};

const normalize = (value: string) => value.trim().toLowerCase();

const boardGroups: { title: string; teams: string[] }[] = [
  { title: "Executive Board", teams: ["president", "executive board"] },
  { title: "Operations", teams: ["tech-director", "marketing", "recruitment", "finance"] },
  { title: "Division Chairs", teams: ["baseball", "football", "basketball", "tennis", "volleyball", "data journalism"] },
  { title: "Advisors", teams: ["advisors"] }
];

export default function BoardPage() {
  const board = members.filter((member) => member.group === "board" && member.isPublished);
  const sections = boardGroups
    .map((group) => ({
      title: group.title,
      people: board
        .filter((member) => group.teams.includes(normalize(member.team)))
        .sort((a, b) => a.sortOrder - b.sortOrder)
    }))
    .filter((section) => section.people.length > 0);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">People</span>
          <h1>Our Board, &apos;26-27</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PeopleSections sections={sections} />
        </div>
      </section>
    </main>
  );
}
