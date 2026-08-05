"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".page-hero",
  ".page-hero > .container > *",
  ".section",
  ".section > .container > *",
  ".sport-card-grid > *",
  ".grid > *",
  ".board-grid > *",
  ".card",
  "article",
  "main ol > li",
  "main ul > li",
  "[data-scroll-reveal]",
  "[class*='compactGrid'] > *",
  "[class*='column'] > *",
  "[class*='controls']",
  "[class*='explorer'] > *",
  "[class*='grid'] > *",
  "[class*='logoWall'] > *",
  "[class*='wall'] > *",
  "[class*='finalCta'] > *",
  "[class*='sportPill']",
  "[class*='rail'] > *",
  "[class*='process'] > *"
].join(",");

function isGridRevealParent(element: Element) {
  return element.matches(".grid, .board-grid, .sport-card-grid, [class*='grid'], [class*='wall'], [class*='compactGrid']");
}

function centerOutDelay(element: HTMLElement, siblings: HTMLElement[]) {
  const rows: HTMLElement[][] = [];

  [...siblings]
    .sort((a, b) => {
      const aRect = a.getBoundingClientRect();
      const bRect = b.getBoundingClientRect();
      return aRect.top === bRect.top ? aRect.left - bRect.left : aRect.top - bRect.top;
    })
    .forEach((sibling) => {
      const rect = sibling.getBoundingClientRect();
      const row = rows.find((items) => Math.abs(items[0].getBoundingClientRect().top - rect.top) < 8);
      if (row) {
        row.push(sibling);
      } else {
        rows.push([sibling]);
      }
    });

  const rowIndex = rows.findIndex((row) => row.includes(element));
  const row = rows[rowIndex];
  if (!row) return 0;

  row.sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left);
  const index = row.indexOf(element);
  const center = (row.length - 1) / 2;
  const distances = Array.from(new Set(row.map((_, itemIndex) => Math.abs(itemIndex - center)))).sort((a, b) => a - b);
  const distanceRank = distances.indexOf(Math.abs(index - center));

  return Math.min(rowIndex * 45 + distanceRank * 70, 420);
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
      (element) =>
        !element.closest("header") &&
        !element.closest("footer") &&
        !element.matches("[data-load-reveal]") &&
        !element.closest("[data-load-reveal]")
    );

    document.documentElement.classList.add("scroll-reveal-enabled");

    elements.forEach((element) => {
      element.dataset.reveal = "true";

      const parent = element.parentElement;
      if (!parent) return;

      const siblings = Array.from(parent.children).filter((child): child is HTMLElement => child instanceof HTMLElement && child.matches(revealSelector));
      const index = Math.max(0, siblings.indexOf(element));
      const delay = isGridRevealParent(parent) ? centerOutDelay(element, siblings) : Math.min(index, 6) * 60;
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-reveal-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-reveal");
        element.removeAttribute("data-reveal-visible");
        element.style.removeProperty("--reveal-delay");
      });
      document.documentElement.classList.remove("scroll-reveal-enabled");
    };
  }, [pathname]);

  return null;
}
