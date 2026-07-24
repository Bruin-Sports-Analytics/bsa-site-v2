"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".page-hero",
  ".section",
  ".sport-card-grid > *",
  ".grid > *",
  ".card",
  "[class*='compactGrid'] > *",
  "[class*='logoWall'] > *",
  "[class*='finalCta'] > *",
  "[class*='rail'] > *",
  "[class*='process'] > *"
].join(",");

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

      const siblings = Array.from(parent.children).filter((child) => child.matches(revealSelector));
      const index = Math.max(0, siblings.indexOf(element));
      element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 70}ms`);
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
