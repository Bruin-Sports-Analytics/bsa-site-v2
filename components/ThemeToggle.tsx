"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
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

  const syncSystemThemeIfUnmodified = useCallback(() => {
    try {
      // If the user has manually changed theme during this session, do not autoswitch
      const isManual = sessionStorage.getItem("theme_manual") === "true";
      if (isManual) return;

      const sysTheme = getSystemTheme();
      const current = document.documentElement.dataset.theme;

      if (sysTheme !== current) {
        document.documentElement.dataset.theme = sysTheme;
        document.documentElement.style.colorScheme = sysTheme;
        setTheme(sysTheme);
        window.dispatchEvent(new CustomEvent("bsa-theme-change", { detail: sysTheme }));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    setTheme(getCurrentTheme());

    // 1. Initial check
    syncSystemThemeIfUnmodified();

    // 2. Periodic system appearance polling (every 2.5 seconds)
    const pollInterval = setInterval(() => {
      syncSystemThemeIfUnmodified();
    }, 2500);

    // 3. Media query event listener for immediate OS toggle reaction
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleMediaChange = () => {
      syncSystemThemeIfUnmodified();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaChange);
    }

    // 4. Tab visibility change listener
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        syncSystemThemeIfUnmodified();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 5. Multi-instance synchronized toggle listener
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
      clearInterval(pollInterval);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMediaChange);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("bsa-theme-change", handleCustomThemeChange);
    };
  }, [syncSystemThemeIfUnmodified]);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} mode`;

  const handleToggle = () => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    try {
      // Mark as manually toggled for the duration of this tab session
      sessionStorage.setItem("theme_manual", "true");
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


