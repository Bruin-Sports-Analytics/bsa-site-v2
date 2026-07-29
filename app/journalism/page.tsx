import type { Metadata } from "next";
import { MemberCard } from "@/components/MemberCard";
import { JournalismExplorer } from "@/components/JournalismExplorer";
import { ViewResourcesButton } from "@/components/ViewResourcesButton";
import { members } from "@/data/site";
import { djResources } from "@/data/journalism";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journalism"
};

export default function JournalismPage() {
  const djChairs = members
    .filter((m) => m.group === "board" && m.team.toLowerCase() === "data journalism" && m.isPublished)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Data Journalism</h1>
          <p>Our Data Journalism team aims to write short articles each quarter that are driven by data science and statistics. Through meaningful visualizations and analysis, these pieces take a quick dive into contemporary sports topics. We look into all sports, from gymnastics and horse racing to the NFL and NBA.</p>
        </div>
      </section>
      <section className={styles.articles}>
        <div className="container">
          <JournalismExplorer />
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <span className="eyebrow">Team</span>
          <div className="board-grid" style={{ marginTop: "18px" }}>
            {djChairs.map((m) => <MemberCard member={m} key={m.slug} />)}
          </div>
          <div style={{ marginTop: "28px" }}>
            <ViewResourcesButton resources={djResources} />
          </div>
        </div>
      </section>
    </main>
  );
}
