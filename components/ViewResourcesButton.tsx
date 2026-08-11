"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { DjResource } from "@/data/journalism";
import styles from "./ViewResourcesButton.module.css";

type Props = {
  resources: DjResource[];
};

export function ViewResourcesButton({ resources }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <button
        type="button"
        className={`btn btn-secondary ${styles.trigger}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        View resources
        <ChevronDown size={16} aria-hidden className={`${styles.caret} ${open ? styles.caretOpen : ""}`} />
      </button>

      <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`} id={menuId} role="menu" aria-label="Data Journalism resources" aria-hidden={!open}>
        {resources.map((resource) => (
          <a
            key={resource.href}
            className={styles.item}
            role="menuitem"
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            <span>{resource.label}</span>
            <ArrowUpRight size={15} aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}
