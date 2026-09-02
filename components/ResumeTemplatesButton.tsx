"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Download, ExternalLink, FileText } from "lucide-react";
import { resumeTemplates } from "@/data/resumeTemplates";
import styles from "./ResumeTemplatesButton.module.css";

export function ResumeTemplatesButton() {
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
        onClick={() => setOpen((value) => !value)}
      >
        <FileText size={17} aria-hidden />
        Resume templates
        <ChevronDown size={16} aria-hidden className={`${styles.caret} ${open ? styles.caretOpen : ""}`} />
      </button>

      <div
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        id={menuId}
        role="menu"
        aria-label="Resume templates"
        aria-hidden={!open}
      >
        {resumeTemplates.map((template) => {
          const Icon = template.action === "open" ? ExternalLink : Download;
          return (
            <a
              key={template.href}
              className={styles.item}
              role="menuitem"
              href={template.href}
              target={template.action === "open" ? "_blank" : undefined}
              rel={template.action === "open" ? "noopener noreferrer" : undefined}
              download={template.action === "download" ? true : undefined}
              tabIndex={open ? 0 : -1}
            >
              <span>{template.label}</span>
              <Icon size={15} aria-hidden />
            </a>
          );
        })}
      </div>
    </div>
  );
}
