"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { articles } from "@/data/journalism";
import { ArticleCard } from "@/components/ArticleCard";
import styles from "./JournalismExplorer.module.css";

const ALL = "All";

// Unique sports (alphabetical) and years (newest first), derived from the data
// so adding articles never requires touching the filter.
const sportOptions = Array.from(new Set(articles.map((a) => a.sport))).sort((a, b) => a.localeCompare(b));
const yearOptions = Array.from(new Set(articles.map((a) => a.year))).sort((a, b) => b - a);

export function JournalismExplorer() {
  const [query, setQuery] = useState("");
  const [sport, setSport] = useState(ALL);
  const [year, setYear] = useState(ALL);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return [...articles]
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .filter((article) => sport === ALL || article.sport === sport)
      .filter((article) => year === ALL || String(article.year) === year)
      .filter((article) => {
        if (!needle) return true;
        const haystack = [article.title, article.authors.join(" ")].join(" ").toLowerCase();
        return haystack.includes(needle);
      });
  }, [query, sport, year]);

  return (
    <div className={styles.explorer}>
      <div className={`${styles.controls} glass glass--strong glass--radius-lg`}>
        <label className={styles.search}>
          <Search size={18} aria-hidden />
          <span className={styles.srOnly}>Search articles</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title or author"
          />
        </label>
        <select value={sport} onChange={(event) => setSport(event.target.value)} aria-label="Filter by sport">
          <option>{ALL}</option>
          {sportOptions.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select value={year} onChange={(event) => setYear(event.target.value)} aria-label="Filter by year">
          <option>{ALL}</option>
          {yearOptions.map((item) => (
            <option key={item} value={String(item)}>{item}</option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No articles match those filters.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
