"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, sports } from "@/data/site";
import { useScrolledState } from "@/hooks/useScrolledState";
import { cn } from "@/lib/cn";
import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const scrolled = useScrolledState();

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
            const hasMenu = item.label === "Teams";
            return (
              <div
                className={styles.navGroup}
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
                  <div className={`${styles.megaMenu} ${openMenu === item.label ? styles.menuOpen : ""} ${styles.teamsMenu} glass glass--strong glass--radius-lg`}>
                    <div className={styles.teamsGrid}>
                      {sports.map((sport) => {
                        const SportIcon = sport.icon;
                        return (
                          <Link
                            key={sport.slug}
                            href={`/teams/${sport.slug}`}
                            className={styles.teamTile}
                          >
                            <span className={styles.teamIcon} style={{ color: sport.accent }} aria-hidden>
                              <SportIcon size={28} color="currentColor" />
                            </span>
                            <span className={styles.teamName}>{sport.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
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
          <Link href="/partner" onClick={() => setOpen(false)}>Partner With Us</Link>
        </div>
      ) : null}
    </header>
  );
}
