"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, projects, sports } from "@/data/site";
import { useScrolledState } from "@/hooks/useScrolledState";
import { cn } from "@/lib/cn";
import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledState();
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Bruin Sports Analytics home">
          <span className={styles.brandMark}><BarChart3 size={21} aria-hidden /></span>
          <span>Bruin Sports Analytics</span>
        </Link>
        <nav className={styles.desktop} aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const hasMenu = item.label === "Our Work" || item.label === "People";
            return (
              <div className={styles.navGroup} key={item.href}>
                <Link href={item.href} className={`${styles.navLink} ${active ? styles.active : ""}`}>
                  {item.label}
                </Link>
                {hasMenu ? (
                  <div className={`${styles.megaMenu} glass glass--strong glass--radius-lg`}>
                    {item.label === "Our Work" ? (
                      <>
                        <div className={styles.menuColumn}>
                          <span className="eyebrow">Sports</span>
                          {sports.map((sport) => (
                            <Link href={`/work/${sport.slug}`} key={sport.slug}>
                              {sport.name}
                              <small>{sport.activeProjects} active projects</small>
                            </Link>
                          ))}
                        </div>
                        <div className={styles.menuColumn}>
                          <span className="eyebrow">Featured</span>
                          {featured.map((project) => (
                            <Link href={`/projects/${project.slug}`} key={project.slug}>
                              {project.title}
                              <small>{project.projectType} · {project.status}</small>
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className={styles.menuColumn}>
                        <span className="eyebrow">People</span>
                        <Link href="/people/board">Board <small>Leadership and directors</small></Link>
                        <Link href="/people/members">Current Members <small>Teams and contributors</small></Link>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <Link href="/partner" className={`${styles.partner} glass glass--gold glass--radius-pill`}>Partner With Us</Link>
        <button className={styles.mobileButton} type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open ? (
        <div className={`${styles.mobilePanel} glass glass--strong`}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/partner" onClick={() => setOpen(false)}>Partner With Us</Link>
        </div>
      ) : null}
    </header>
  );
}
