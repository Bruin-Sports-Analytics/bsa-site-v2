import type { Metadata } from "next";
import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/data/site";

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
