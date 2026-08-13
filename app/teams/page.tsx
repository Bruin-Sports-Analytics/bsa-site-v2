import type { Metadata } from "next";
import { SportCard } from "@/components/SportCard";
import { getTeamSportOverviews } from "@/lib/team-pages";

export const metadata: Metadata = {
  title: "Teams"
};

export default function WorkPage() {
  const overviews = getTeamSportOverviews();

  return (
    <main>
      <section className="page-hero page-hero--plain page-hero--work">
        <div className="container">
          <h1>Choose a team</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sport-card-grid">
            {overviews.map((overview) => <SportCard overview={overview} key={overview.sport.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
