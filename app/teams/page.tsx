import type { Metadata } from "next";
import { SportCard } from "@/components/SportCard";
import { sports } from "@/data/site";

export const metadata: Metadata = {
  title: "Teams"
};

export default function WorkPage() {
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
            {sports.map((sport) => <SportCard sport={sport} key={sport.slug} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
