import type { Metadata } from "next";
import Link from "next/link";
import { members } from "@/data/site";
import { PeopleSections } from "@/components/PeopleSections";

export const metadata: Metadata = {
  title: "Our Board, '26-27"
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

          <Link className="btn btn-secondary" href="/people/members">View current members</Link>
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
