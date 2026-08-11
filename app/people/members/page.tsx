import type { Metadata } from "next";
import Link from "next/link";
import { alumni, members } from "@/data/site";
import { PeopleSections } from "@/components/PeopleSections";

export const metadata: Metadata = {
  title: "Members"
};

const sportGroups = [
  "Basketball",
  "Football",
  "Baseball",
  "Tennis",
  "Volleyball",
];

export default function MembersPage() {
  const allMembers = members.filter((m) => m.group === "member" && m.isPublished);
  const sections = sportGroups
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
          <span className="eyebrow">People</span>
          <h1>Current members</h1>
          <Link className="btn btn-secondary" href="/people/board">View board</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PeopleSections sections={sections} />
        </div>
      </section>
      <section className="section tight" id="alumni">
        <div className="container">
          <span className="eyebrow" style={{ display: "block", marginBottom: "16px", fontSize: "16px", textAlign: "center" }}>Alumni</span>
          <ul className="grid three" style={{ justifyContent: "center", listStyle: "none", margin: "0 auto", maxWidth: 920, padding: 0, textAlign: "center" }}>
            {alumni.map((person) => (
              <li key={person.name} style={{ color: "var(--text-primary)", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, justifySelf: "center", textAlign: "center", width: "100%" }}>
                {person.linkedinUrl ? (
                  <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    {person.name}
                  </a>
                ) : person.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
