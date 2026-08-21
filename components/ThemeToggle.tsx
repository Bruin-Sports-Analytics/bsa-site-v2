"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import styles from "./ThemeToggle.module.css";

type Theme = "dark" | "light";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const mqlLight = window.matchMedia("(prefers-color-scheme: light)");
    const mqlDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (mqlLight && mqlLight.matches) return "light";
    if (mqlDark && mqlDark.matches) return "dark";
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark";
  } catch {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark";
  }
}

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle({ className, mobile = false }: { className?: string; mobile?: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getCurrentTheme());

    const updateThemeIfUnset = () => {
      try {
        if (!sessionStorage.getItem("theme")) {
          const sysTheme = getSystemTheme();
          document.documentElement.dataset.theme = sysTheme;
          document.documentElement.style.colorScheme = sysTheme;
          setTheme(sysTheme);
        }
      } catch {
        // ignore
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleMediaChange = () => {
      updateThemeIfUnset();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaChange);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateThemeIfUnset();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const handleCustomThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<Theme>;
      if (customEvent.detail) {
        setTheme(customEvent.detail);
      } else {
        setTheme(getCurrentTheme());
      }
    };
    window.addEventListener("bsa-theme-change", handleCustomThemeChange);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMediaChange);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("bsa-theme-change", handleCustomThemeChange);
    };
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} mode`;

  const handleToggle = () => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    try {
      sessionStorage.setItem("theme", nextTheme);
      localStorage.removeItem("theme");
    } catch {
      // ignore
    }
    setTheme(nextTheme);
    window.dispatchEvent(new CustomEvent("bsa-theme-change", { detail: nextTheme }));
  };

  return (
    <button
      type="button"
      className={cn(styles.toggle, mobile && styles.mobile, className)}
      aria-label={label}
      title={label}
      onClick={handleToggle}
    >
      {theme === "dark" ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
      {mobile ? <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span> : null}
    </button>
  );
}

