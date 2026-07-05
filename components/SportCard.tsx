import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Sport } from "@/data/site";
import styles from "./SportCard.module.css";

export function SportCard({ sport }: { sport: Sport }) {
  const Icon = sport.icon;

  return (
    <GlassSurface as={Link} href={`/work/${sport.slug}`} variant="regular" tint="blue" interactive radius="lg" className={styles.card} style={{ "--accent": sport.accent } as React.CSSProperties}>
      <div className={styles.top}>
        <Icon size={34} aria-hidden />
        {sport.subdivisions ? <span className={styles.marker}>3 programs</span> : null}
      </div>
      <h3>{sport.name}</h3>
      <p>{sport.description}</p>
      <div className={styles.metric}>
        <b>{sport.activeProjects}</b> active / <b>{sport.archivedProjects}</b> archived
      </div>
      <div className={styles.chart} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.action}>Explore {sport.name} <ArrowUpRight size={16} aria-hidden /></div>
    </GlassSurface>
  );
}
