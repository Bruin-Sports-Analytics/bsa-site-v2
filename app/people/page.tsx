import type { Metadata } from "next";
import { members } from "@/data/site";
import { PeopleSections } from "@/components/PeopleSections";

export const metadata: Metadata = {
  title: "Our Members"
};

const normalize = (value: string) => value.trim().toLowerCase();

const boardGroups: { title: string; teams: string[] }[] = [
  { title: "Executive Board", teams: ["president", "executive board"] },
  { title: "Division Chairs", teams: ["baseball", "football", "basketball", "tennis", "volleyball", "data journalism"] },
  { title: "Operations", teams: ["webmaster", "marketing", "recruitment", "finance"] },
  { title: "Advisors", teams: ["advisors"] }
];

const sportGroups = [
  "Basketball",
  "Football",
  "Baseball",
  "Tennis",
  "Volleyball",
];

const alumni = [
  "Nadeev Alam",
  "Rhea Jain",
  "Trent Bellinger",
  "Siddharth Singh",
  "Tom Seifert",
  "Daniel Wang",
  "Leo Cardozo",
  "Abhinav Madabhushi",
  "Steven Lu Chen",
  "Derek Nakagawa",
  "Bryan Mui",
  "Shail Mirpuri",
  "Oscar O’Brien",
  "Shashvat Patel",
  "Jerry Shi",
  "Clajerson Gimena",
  "Lucas Q",
  "Michelle Li",
  "Alexander West",
  "Frederick Zhang",
  "Dillon Maheshwari"
];

export default function PeoplePage() {
  const board = members.filter((member) => member.group === "board" && member.isPublished);
  const boardSections = boardGroups
    .map((group) => ({
      title: group.title,
      people: board
        .filter((member) => group.teams.includes(normalize(member.team)))
        .sort((a, b) => a.sortOrder - b.sortOrder)
    }))
    .filter((section) => section.people.length > 0);

  const allMembers = members.filter((m) => m.group === "member" && m.isPublished);
  const memberSections = sportGroups
    .map((sport) => ({
      title: sport,
      people: allMembers
        .filter((m) => m.team === sport)
        .sort((a, b) => a.sortOrder - b.sortOrder),
    }))
    .filter((s) => s.people.length > 0);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Members</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>Board</h2>
          <PeopleSections sections={boardSections} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>Current Members</h2>
          <PeopleSections sections={memberSections} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>Alumni</h2>
          <ul className="grid three" style={{ justifyContent: "center", listStyle: "none", margin: "0 auto", maxWidth: 920, padding: 0, textAlign: "center" }}>
            {alumni.map((name) => (
              <li key={name} style={{ color: "var(--text-primary)", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, justifySelf: "center", textAlign: "center", width: "100%" }}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
