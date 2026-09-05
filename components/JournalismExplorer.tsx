"use client";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { JournalismArticle } from "@/data/journalism";
import { ArticleCard } from "@/components/ArticleCard";
import styles from "./JournalismExplorer.module.css";

const ALL = "All";
const ARTICLES_PER_PAGE = 24;

type SearchableArticle = JournalismArticle & { _searchHaystack: string };

function prepareArticles(articles: JournalismArticle[]): SearchableArticle[] {
  return [...articles]
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map((article) => ({
    ...article,
    _searchHaystack: [
      article.title,
      article.authors.join(" "),
      article.summary || "",
      article.techStack?.join(" ") || ""
    ].join(" ").toLowerCase()
  }));
}

function getPageNumbers(current: number, total: number): (number | string)[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, "...", total];
  }
  if (current >= total - 3) {
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, "...", current - 1, current, current + 1, "...", total];
}

type Props = {
  articles: JournalismArticle[];
};

export function JournalismExplorer({ articles }: Props) {
  const [query, setQuery] = useState("");
  const [sport, setSport] = useState(ALL);
  const [year, setYear] = useState(ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const explorerRef = useRef<HTMLDivElement>(null);

  const sortedSearchableArticles = useMemo(() => prepareArticles(articles), [articles]);
  const sportOptions = useMemo(
    () => Array.from(new Set(sortedSearchableArticles.map((a) => a.sport))).sort((a, b) => a.localeCompare(b)),
    [sortedSearchableArticles]
  );
  const yearOptions = useMemo(
    () => Array.from(
      new Set(sortedSearchableArticles.map((a) => a.year).filter((y): y is number => typeof y === "number"))
    ).sort((a, b) => b - a),
    [sortedSearchableArticles]
  );

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return sortedSearchableArticles.filter((article) => {
      if (sport !== ALL && article.sport !== sport) return false;
      if (year !== ALL && String(article.year) !== year) return false;
      if (needle && !article._searchHaystack.includes(needle)) return false;
      return true;
    });
  }, [query, sport, year, sortedSearchableArticles]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [query, sport, year]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE));
  const page = Math.min(currentPage, totalPages);

  const paginatedArticles = useMemo(() => {
    const start = (page - 1) * ARTICLES_PER_PAGE;
    return filtered.slice(start, start + ARTICLES_PER_PAGE);
  }, [filtered, page]);

  const startCount = filtered.length === 0 ? 0 : (page - 1) * ARTICLES_PER_PAGE + 1;
  const endCount = Math.min(page * ARTICLES_PER_PAGE, filtered.length);

  const handlePageChange = (newPage: number, shouldScroll: boolean = true) => {
    if (newPage < 1 || newPage > totalPages || newPage === page) return;
    setCurrentPage(newPage);
    if (shouldScroll && explorerRef.current) {
      const topOffset = explorerRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: "smooth" });
    }
  };

  const pageNumbers = getPageNumbers(page, totalPages);

  const renderPaginationNav = (isTop: boolean = false) => {
    if (totalPages <= 1) return null;
    return (
      <nav
        className={`${styles.pagination} ${isTop ? styles.topPagination : ""}`}
        aria-label={`${isTop ? "Top" : "Bottom"} Pagination Navigation`}
      >
        <button
          type="button"
          className={`${styles.pageBtn} ${isTop ? styles.topPageBtn : ""}`}
          onClick={() => handlePageChange(page - 1, !isTop)}
          disabled={page === 1}
          aria-label="Go to previous page"
        >
          <ChevronLeft size={isTop ? 16 : 18} aria-hidden />
          <span className={styles.btnLabel}>Previous</span>
        </button>

        <div className={styles.pageNumbers}>
          {pageNumbers.map((num, i) => {
            if (typeof num === "string") {
              return (
                <span
                  key={`ellipsis-${isTop ? "top" : "bot"}-${i}`}
                  className={`${styles.ellipsis} ${isTop ? styles.topEllipsis : ""}`}
                  aria-hidden
                >
                  {num}
                </span>
              );
            }

            const isCurrent = num === page;
            return (
              <button
                key={`${isTop ? "top" : "bot"}-${num}`}
                type="button"
                className={`${styles.pageNumberBtn} ${isTop ? styles.topPageNumberBtn : ""} ${
                  isCurrent ? styles.activePage : ""
                }`}
                onClick={() => handlePageChange(num, !isTop)}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Page ${num}`}
              >
                {num}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className={`${styles.pageBtn} ${isTop ? styles.topPageBtn : ""}`}
          onClick={() => handlePageChange(page + 1, !isTop)}
          disabled={page === totalPages}
          aria-label="Go to next page"
        >
          <span className={styles.btnLabel}>Next</span>
          <ChevronRight size={isTop ? 16 : 18} aria-hidden />
        </button>
      </nav>
    );
  };

  return (
    <div className={styles.explorer} ref={explorerRef}>
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
          <option value={ALL}>All Sports</option>
          {sportOptions.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <select value={year} onChange={(event) => setYear(event.target.value)} aria-label="Filter by year">
          <option value={ALL}>All Years</option>
          {yearOptions.map((item) => (
            <option key={item} value={String(item)}>{item}</option>
          ))}
        </select>
      </div>

      <div className={styles.statusBar}>
        <span className={styles.resultsCount}>
          {filtered.length === 0 ? (
            "No articles found"
          ) : (
            <>
              Showing <strong>{startCount}–{endCount}</strong> of <strong>{filtered.length}</strong> articles
            </>
          )}
        </span>
        {totalPages > 1 && renderPaginationNav(true)}
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No articles match those filters.</p>
      ) : (
        <>
          <div className={styles.grid}>
            {paginatedArticles.map((article, index) => (
              <ArticleCard key={article.title} article={article} priority={page === 1 && index < 2} />
            ))}
          </div>

          {totalPages > 1 && renderPaginationNav(false)}
        </>
      )}
    </div>
  );
}
