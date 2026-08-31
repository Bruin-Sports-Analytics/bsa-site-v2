import type { Metadata } from "next";
import { MemberCard } from "@/components/MemberCard";
import { JournalismExplorer } from "@/components/JournalismExplorer";
import { ViewResourcesButton } from "@/components/ViewResourcesButton";
import { members } from "@/data/site";
import { djResources } from "@/data/journalism";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journalism",
  description: "Read data-driven sports journalism by Bruin Sports Analytics students. In-depth statistics, interactive visualizations, and data storytelling across the NBA, NFL, MLB, and NCAA.",
  keywords: [
    "sports data journalism",
    "sports data visualizations",
    "sports analytics articles",
    "data storytelling in sports",
    "UCLA sports journalism",
    "NBA data analysis",
    "NFL analytics articles",
    "student sports writing",
    "Bruin Sports Analytics journalism"
  ],
  openGraph: {
    title: "Data Journalism | Bruin Sports Analytics",
    description: "Data-driven sports journalism, statistics, and interactive visualizations produced by UCLA students.",
    url: "https://www.bruinsportsanalytics.org/journalism"
  }
};

export default function JournalismPage() {
  const djChairs = members
    .filter((m) => m.group === "board" && m.team.toLowerCase() === "data journalism" && m.isPublished)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <main>
      <section className={`page-hero ${styles.heroSection}`}>
        <div className={`container ${styles.heroRow}`}>
          <div className={styles.heroText}>
            <h1>Data Journalism</h1>
            <p>Our Data Journalism team aims to write short articles each quarter that are driven by data science and statistics. Through meaningful visualizations and analysis, these pieces take a quick dive into contemporary sports topics. We look into all sports, from gymnastics and horse racing to the NFL and NBA.</p>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.chairGrid}>
              {djChairs.map((m) => <MemberCard member={m} key={m.slug} priority />)}
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <ViewResourcesButton resources={djResources} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.articles}>
        <div className="container">
          <JournalismExplorer />
        </div>
      </section>
    </main>
  );
}
