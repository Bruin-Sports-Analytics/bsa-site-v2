import type { Metadata } from "next";
import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/data/site";

export const metadata: Metadata = {
  title: "Board"
};

const normalize = (value: string) => value.trim().toLowerCase();

const boardGroups: { title: string; teams: string[] }[] = [
  { title: "Executive Board", teams: ["president", "executive board"] },
  { title: "Division Chairs", teams: ["baseball", "football", "basketball", "tennis", "volleyball", "data journalism"] },
  { title: "Operations", teams: ["webmaster", "marketing", "recruitment", "finance"] },
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
          <h1>Board</h1>

          <Link className="btn btn-secondary" href="/people/members">View current members</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {sections.map((section, index) => (
            <div key={section.title} style={index > 0 ? { marginTop: "48px" } : undefined}>
              <span className="eyebrow" data-scroll-reveal style={{ display: "block", marginBottom: "16px", fontSize: "16px", textAlign: "center" }}>{section.title}</span>
              <div className="board-grid">
                {section.people.map((member) => <MemberCard member={member} key={member.slug} />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
