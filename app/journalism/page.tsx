import type { Metadata } from "next";
import { JournalismExplorer } from "@/components/JournalismExplorer";
import { ViewResourcesButton } from "@/components/ViewResourcesButton";
import { djResources } from "@/data/journalism";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journalism"
};

export default function JournalismPage() {
  return (
    <main>
      <section className="page-hero">
        <div className={`container ${styles.heroRow}`}>
          <div className={styles.heroText}>
            <h1>Data Journalism</h1>
            <p>Our Data Journalism team aims to write short articles each quarter that are driven by data science and statistics. Through meaningful visualizations and analysis, these pieces take a quick dive into contemporary sports topics. We look into all sports, from gymnastics and horse racing to the NFL and NBA.</p>
          </div>
          <ViewResourcesButton resources={djResources} />
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
