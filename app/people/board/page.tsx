import type { Metadata } from "next";
import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
import { members } from "@/data/site";

export const metadata: Metadata = {
  title: "Board"
};

export default function BoardPage() {
  const board = members.filter((member) => member.group === "board" && member.isPublished).sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">People</span>
          <h1>Board and directors.</h1>
          <p>Bruin Sports Analytics leadership scopes projects, supports sport teams, and keeps the organization accountable to technical quality and partner trust.</p>
          <Link className="btn btn-secondary" href="/people/members">View current members</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="card" style={{ minHeight: 300, display: "grid", placeItems: "center", marginBottom: 28 }}>
            <div style={{ textAlign: "center" }}>
              <span className="eyebrow">Group photo</span>
              <h2 style={{ fontFamily: "var(--font-sora)", fontSize: 34 }}>Leadership photoshoot placeholder</h2>
              <p className="section-lede">Configured for a consistent 4:5 portrait system once final photography is available.</p>
            </div>
          </article>
          <div className="grid five">
            {board.map((member) => <MemberCard member={member} key={member.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
