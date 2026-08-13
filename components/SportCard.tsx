"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlassSurface } from "@/components/ui/GlassSurface";
import { BaseballIcon, BasketballIcon, FootballIcon, TennisIcon, VolleyballIcon } from "@/components/SportIcons";
import type { SportOverview, TeamSportSlug } from "@/lib/team-pages";
import styles from "./SportCard.module.css";

const SPORT_ICONS: Record<TeamSportSlug, typeof BaseballIcon> = {
  baseball: BaseballIcon,
  volleyball: VolleyballIcon,
  basketball: BasketballIcon,
  football: FootballIcon,
  tennis: TennisIcon,
};

export function SportCard({ overview, index = 0 }: { overview: SportOverview; index?: number }) {
  const { activeProjects, archivedProjects, featuredProject, sport, teamSize } = overview;
  const Icon = SPORT_ICONS[sport.slug as TeamSportSlug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.005 }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        y: { duration: 0.5, delay: index * 0.1 },
        scale: { type: "spring", stiffness: 400, damping: 17 },
      }}
    >
      <GlassSurface as="article" variant="regular" tint="blue" radius="lg" className={styles.card} style={{ "--accent": sport.accent } as React.CSSProperties}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <Icon size={34} aria-hidden />
        </div>
        <div>
          <span className={styles.kicker}>{sport.subdivisions ? `${sport.subdivisions.length} roles` : `${activeProjects.length} active`}</span>
          <h3>{sport.name}</h3>
        </div>
      </div>
      <p className={styles.description}>{sport.description}</p>
      <div className={styles.metric}>
        <span>{sport.featuredMetric}</span>
      </div>
      <div className={styles.focusList} aria-label={`${sport.name} focus areas`}>
        {sport.focusAreas.slice(0, 3).map((area) => (
          <span key={area}>{area}</span>
        ))}
      </div>
      <dl className={styles.stats}>
        <div>
          <dt>Active</dt>
          <dd>{activeProjects.length}</dd>
        </div>
        <div>
          <dt>Archive</dt>
          <dd>{archivedProjects.length}</dd>
        </div>
        <div>
          <dt>Team</dt>
          <dd>{teamSize}</dd>
        </div>
      </dl>
      {featuredProject ? (
        <div className={styles.featured}>
          <span>Representative work</span>
          <strong>{featuredProject.title}</strong>
        </div>
      ) : null}
      <div className={styles.actions}>
          <Link href={`/teams/${sport.slug}`} className={styles.action}>
            Open team <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </GlassSurface>
    </motion.div>
  );
}
