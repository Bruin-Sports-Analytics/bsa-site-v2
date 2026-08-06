"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, projectLifecycleStatus, projects } from "@/data/site";
import { TeamsCarousel } from "@/components/TeamsCarousel";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useScrolledState } from "@/hooks/useScrolledState";
import { cn } from "@/lib/cn";
import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const scrolled = useScrolledState();
  const recentProjects = [...projects]
    .filter((project) => project.visibility !== "hidden")
    .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
    .slice(0, 3);

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Bruin Sports Analytics home">
          <span className={styles.brandMark}><Image src="/assets/bsa_logo.jpeg" alt="" width={36} height={36} aria-hidden /></span>
          <span>Bruin Sports Analytics</span>
        </Link>
        <nav className={styles.desktop} aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const hasMenu = item.label === "People" || item.label === "Teams";
            return (
              <div
                className={cn(styles.navGroup, item.label === "People" && styles.peopleGroup)}
                key={item.href}
                onMouseEnter={() => hasMenu && setOpenMenu(item.label)}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  if (item.label === "Teams") setActiveTeamIndex(0);
                }}
                onFocus={() => hasMenu && setOpenMenu(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <Link href={item.href} className={`${styles.navLink} ${active ? styles.active : ""} ${hasMenu ? styles.navLinkWithMenu : ""} ${openMenu === item.label ? styles.navLinkMenuOpen : ""}`}>
                  {item.label}
                  {hasMenu ? <ChevronDown className={styles.dropdownIcon} size={14} strokeWidth={2.6} aria-hidden /> : null}
                </Link>
                {hasMenu ? (
                  <div className={`${styles.megaMenu} ${openMenu === item.label ? styles.menuOpen : ""} ${item.label === "Teams" ? styles.teamsMenu : ""} ${item.label === "People" ? styles.peopleMenu : ""} glass glass--strong glass--radius-lg`}>
                    {item.label === "Teams" ? (
                      <TeamsCarousel
                        activeIndex={activeTeamIndex}
                        setActiveIndex={setActiveTeamIndex}
                      />
                    ) : item.label === "Projects" ? (
                      <>
                        <div className={styles.menuColumn}>
                          <span className="eyebrow">Project Dashboard</span>
                          <Link href="/projects">
                            Browse all projects
                            <small>Search, filter, and sort the full index</small>
                          </Link>
                          <Link href="/teams">
                            Explore by sport
                            <small>Baseball, volleyball, basketball, football, and tennis</small>
                          </Link>
                        </div>
                        <div className={styles.menuColumn}>
                          <span className="eyebrow">Recently updated</span>
                          {recentProjects.map((project) => (
                            <Link href={`/projects/${project.slug}`} key={project.slug}>
                              {project.title}
                              <small>{project.projectType} · {projectLifecycleStatus(project)}</small>
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className={styles.menuColumn}>
                        <span className="eyebrow">People</span>
                        <Link href="/people/board">Board <small>Leadership and directors</small></Link>
                        <Link href="/people/members">Current Members <small>Teams and contributors</small></Link>
                        <Link href="/people/alumni">Alumni <small>Former members</small></Link>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <ThemeToggle className={styles.desktopThemeToggle} />
        <Link href="/partner" className={`${styles.partner} glass glass--gold glass--radius-pill`}><span className={styles.partnerFill} aria-hidden /><span className={styles.partnerLabel}>Partner With Us</span></Link>
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
          <ThemeToggle mobile />
          <Link href="/partner" onClick={() => setOpen(false)}>Partner With Us</Link>
        </div>
      ) : null}
    </header>
  );
}
