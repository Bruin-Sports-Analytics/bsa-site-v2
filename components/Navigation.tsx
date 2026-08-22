"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, projectLifecycleStatus, projects, sports } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useScrolledState } from "@/hooks/useScrolledState";
import { cn } from "@/lib/cn";
import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileTeamsOpen, setMobileTeamsOpen] = useState(false);
  const [mobilePeopleOpen, setMobilePeopleOpen] = useState(false);
  const scrolled = useScrolledState();
  const recentProjects = [...projects]
    .filter((project) => project.visibility !== "hidden")
    .sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
    .slice(0, 3);

  const teamLinks = [
    ...sports.map((sport) => ({
      label: sport.name,
      href: `/teams/${sport.slug}`,
      description: `${sport.name} analytics team`,
      icon: sport.icon,
    })),
    {
      label: "All Teams",
      href: "/teams",
      description: "Overview of all sports teams",
      icon: null,
    },
  ];

  const peopleLinks = [
    { label: "Board", href: "/people/board", description: "Leadership and directors" },
    { label: "Current Members", href: "/people/members", description: "Teams and contributors" },
    { label: "Alumni", href: "/people/alumni", description: "Former members" },
  ];

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
            const hasMenu = item.label === "People" || item.label === "Teams" || item.label === "Projects";
            return (
              <div
                className={cn(
                  styles.navGroup,
                  item.label === "People" && styles.peopleGroup,
                  item.label === "Teams" && styles.teamsGroup
                )}
                key={item.href}
                onMouseEnter={() => hasMenu && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
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
                      <div className={styles.teamsGrid}>
                        {sports.map((sport) => {
                          const SportIcon = sport.icon;
                          return (
                            <Link
                              key={sport.slug}
                              href={`/teams/${sport.slug}`}
                              className={styles.teamCard}
                              onClick={() => setOpenMenu(null)}
                            >
                              <span className={styles.teamIconBox}>
                                <SportIcon size={32} color="currentColor" aria-hidden />
                              </span>
                              <span className={styles.teamCardName}>{sport.name}</span>
                            </Link>
                          );
                        })}
                      </div>
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
                      <div className={styles.peopleGrid}>
                        <Link href="/people/board" className={styles.peopleCard} onClick={() => setOpenMenu(null)}>
                          <span className={styles.peopleTitle}>Board</span>
                          <span className={styles.peopleDesc}>Leadership, founders, and directors shaping BSA.</span>
                        </Link>
                        <Link href="/people/members" className={styles.peopleCard} onClick={() => setOpenMenu(null)}>
                          <span className={styles.peopleTitle}>Current Members</span>
                          <span className={styles.peopleDesc}>Analysts, engineers, and writers across all teams.</span>
                        </Link>
                        <Link href="/people/alumni" className={styles.peopleCard} onClick={() => setOpenMenu(null)}>
                          <span className={styles.peopleTitle}>Alumni</span>
                          <span className={styles.peopleDesc}>Where our graduates build careers across sports & tech.</span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <Link href="/partner" className={`${styles.partner} glass glass--gold glass--radius-pill`}><span className={styles.partnerFill} aria-hidden /><span className={styles.partnerLabel}>Partner With Us</span></Link>
        <ThemeToggle className={styles.desktopThemeToggle} />
        <button
          className={styles.mobileButton}
          type="button"
          onClick={() => {
            setOpen((value) => {
              const next = !value;
              if (next) {
                if (pathname.startsWith("/people")) {
                  setMobilePeopleOpen(true);
                }
                if (pathname.startsWith("/teams")) {
                  setMobileTeamsOpen(true);
                }
              }
              return next;
            });
          }}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open ? (
        <div className={`${styles.mobilePanel} glass glass--strong`}>
          {navItems.map((item) => {
            if (item.label === "Teams") {
              return (
                <div key={item.label} className={styles.mobileDropdownGroup}>
                  <button
                    type="button"
                    className={styles.mobileDropdownTrigger}
                    onClick={() => setMobileTeamsOpen((prev) => !prev)}
                    aria-expanded={mobileTeamsOpen}
                  >
                    <span>Teams</span>
                    <ChevronDown
                      className={cn(styles.dropdownChevron, mobileTeamsOpen && styles.dropdownChevronOpen)}
                      size={24}
                      aria-hidden
                    />
                  </button>
                  {mobileTeamsOpen && (
                    <div className={styles.mobileSubmenu}>
                      {teamLinks.map((sub) => {
                        const active = pathname === sub.href;
                        const SportIcon = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(styles.mobileSubmenuLink, active && styles.activeSublink)}
                            onClick={() => {
                              setOpen(false);
                              setMobileTeamsOpen(false);
                            }}
                          >
                            {SportIcon && (
                              <span className={styles.mobileTeamIconBox} aria-hidden>
                                <SportIcon size={20} color="currentColor" />
                              </span>
                            )}
                            <div className={styles.mobileSubmenuText}>
                              <span className={styles.mobileSubmenuTitle}>{sub.label}</span>
                              <small className={styles.mobileSubmenuDesc}>{sub.description}</small>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            if (item.label === "People") {
              return (
                <div key={item.label} className={styles.mobileDropdownGroup}>
                  <button
                    type="button"
                    className={styles.mobileDropdownTrigger}
                    onClick={() => setMobilePeopleOpen((prev) => !prev)}
                    aria-expanded={mobilePeopleOpen}
                  >
                    <span>People</span>
                    <ChevronDown
                      className={cn(styles.dropdownChevron, mobilePeopleOpen && styles.dropdownChevronOpen)}
                      size={24}
                      aria-hidden
                    />
                  </button>
                  {mobilePeopleOpen && (
                    <div className={styles.mobileSubmenu}>
                      {peopleLinks.map((sub) => {
                        const active = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(styles.mobileSubmenuLink, active && styles.activeSublink)}
                            onClick={() => {
                              setOpen(false);
                              setMobilePeopleOpen(false);
                            }}
                          >
                            <div className={styles.mobileSubmenuText}>
                              <span className={styles.mobileSubmenuTitle}>{sub.label}</span>
                              <small className={styles.mobileSubmenuDesc}>{sub.description}</small>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle mobile />
          <Link href="/partner" onClick={() => setOpen(false)}>Partner With Us</Link>
        </div>
      ) : null}
    </header>
  );
}
