"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import styles from "./ThemeToggle.module.css";

type Theme = "dark" | "light";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle({ className, mobile = false }: { className?: string; mobile?: boolean }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getCurrentTheme());
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} mode`;

  return (
    <button
      type="button"
      className={cn(styles.toggle, mobile && styles.mobile, className)}
      aria-label={label}
      title={label}
      onClick={() => {
        document.documentElement.dataset.theme = nextTheme;
        document.documentElement.style.colorScheme = nextTheme;
        window.localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
      }}
    >
      {theme === "dark" ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
      {mobile ? <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span> : null}
    </button>
  );
}
