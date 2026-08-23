"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  Calendar,
  Compass,
  Home,
  RefreshCw,
  Trophy,
  Users
} from "lucide-react";
import styles from "./ErrorView.module.css";

export interface ErrorAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export interface ErrorViewProps {
  statusCode: string | number;
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: ErrorAction;
  secondaryAction?: ErrorAction;
  showQuickLinks?: boolean;
  error?: Error & { digest?: string };
  reset?: () => void;
}

const quickLinks = [
  {
    title: "Data Journalism",
    desc: "Browse 300+ in-depth statistical sports articles and insights.",
    href: "/journalism",
    icon: BookOpen
  },
  {
    title: "Research & Projects",
    desc: "Explore machine learning models and club analytics research.",
    href: "/projects",
    icon: Briefcase
  },
  {
    title: "Sports Divisions",
    desc: "See analytics teams for basketball, baseball, football, and more.",
    href: "/teams",
    icon: Trophy
  },
  {
    title: "Events & Workshops",
    desc: "Stay up to date with guest speakers, workshops, and hackathons.",
    href: "/events",
    icon: Calendar
  }
];

export function ErrorView({
  statusCode,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  showQuickLinks = true,
  error,
  reset
}: ErrorViewProps) {
  const defaultEyebrow =
    eyebrow ??
    (String(statusCode) === "404"
      ? "404 · Out of Bounds"
      : String(statusCode) === "500"
      ? "500 · Statistical Anomaly"
      : "Error · Unexpected Play");

  const defaultPrimary: ErrorAction = reset
    ? {
        label: "Try Again",
        onClick: reset,
        icon: <RefreshCw size={16} aria-hidden />
      }
    : {
        label: "Return Home",
        href: "/",
        icon: <Home size={16} aria-hidden />
      };

  const defaultSecondary: ErrorAction = reset
    ? {
        label: "Return Home",
        href: "/",
        icon: <Home size={16} aria-hidden />
      }
    : {
        label: "Explore Articles",
        href: "/journalism",
        icon: <BookOpen size={16} aria-hidden />
      };

  const activePrimary = primaryAction ?? defaultPrimary;
  const activeSecondary = secondaryAction ?? defaultSecondary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.badge}>
          <Compass size={14} aria-hidden />
          {defaultEyebrow}
        </span>

        <h1 className={styles.statusNumber}>{statusCode}</h1>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          {activePrimary.href ? (
            <Link href={activePrimary.href} className="btn btn-primary">
              {activePrimary.icon}
              {activePrimary.label}
            </Link>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={activePrimary.onClick}
            >
              {activePrimary.icon}
              {activePrimary.label}
            </button>
          )}

          {activeSecondary.href ? (
            <Link href={activeSecondary.href} className="btn btn-secondary">
              {activeSecondary.icon}
              {activeSecondary.label}
            </Link>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={activeSecondary.onClick}
            >
              {activeSecondary.icon}
              {activeSecondary.label}
            </button>
          )}
        </div>

        {error && (
          <details className={styles.details}>
            <summary className={styles.detailsSummary}>Technical Error Details</summary>
            <pre className={styles.errorPre}>
              {error.name}: {error.message}
              {error.digest ? `\nDigest: ${error.digest}` : ""}
              {error.stack ? `\n\n${error.stack}` : ""}
            </pre>
          </details>
        )}

        {showQuickLinks && (
          <section className={styles.quickLinksSection} aria-label="Popular site sections">
            <h3 className={styles.quickLinksHeading}>Or explore another section</h3>
            <div className={styles.quickLinksGrid}>
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link href={item.href} key={item.href} className={styles.quickLinkCard}>
                    <div className={styles.cardIconWrap}>
                      <Icon size={20} aria-hidden />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTitle}>
                        <span>{item.title}</span>
                        <ArrowRight size={15} className={styles.cardArrow} aria-hidden />
                      </div>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
