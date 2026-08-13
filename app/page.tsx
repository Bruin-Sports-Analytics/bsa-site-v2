"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { EventCard } from "@/components/EventCard";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProjectCardGroup } from "@/components/ProjectCardGroup";
import { ScrollCountStats } from "@/components/ScrollCountStats";
import { events, impactStats, outcomes, sports } from "@/data/site";
import { currentlyFeatured, publicProjects } from "@/lib/utils";
import styles from "./page.module.css";

export default function Home() {
  const featuredProjects = currentlyFeatured();
  const featured = (featuredProjects.length > 0
    ? featuredProjects
    : [...publicProjects()].sort((a, b) => Date.parse(b.lastUpdated) - Date.parse(a.lastUpdated))
  ).slice(0, 3);
  const publicEvents = events.filter((event) => !event.isMembersOnly).slice(0, 3);
  const displayedOutcomes = outcomes.filter((outcome) => outcome.approvedForDisplay);
  const marqueeMidpoint = Math.ceil(displayedOutcomes.length / 2);
  const marqueeRows = [displayedOutcomes.slice(0, marqueeMidpoint), displayedOutcomes.slice(marqueeMidpoint)];

  return (
    <main className={styles.home}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.flowTitle}>Bruin Sports Analytics</h1>
            <p className={styles.flowText}>UCLA&apos;s student-run sports analytics organization. Research, tools, and analysis across five sports.</p>
            <div className={`${styles.heroCta} ${styles.flowCta}`}>
              <div className="button-row">
                <motion.div whileTap={{ scale: 0.97 }}>
                  <Link className="btn btn-primary" href="/teams" data-analytics="hero_work_click">Explore Our Work <ArrowRight size={18} aria-hidden /></Link>
                </motion.div>
                <motion.div whileTap={{ scale: 0.97 }}>
                  <Link className="btn btn-secondary" href="/join" data-analytics="hero_join_click">Join the Team</Link>
                </motion.div>
              </div>
              <Link className={`text-link ${styles.partnerLink}`} href="/partner">Partner With Us →</Link>
            </div>
          </div>
          <div className={`${styles.heroLogo} ${styles.flowVisual}`}>
            <Image
              src="/assets/bsa_logo_high_res.jpeg"
              alt="Bruin Sports Analytics logo"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <ScrollCountStats stats={impactStats} />
      </motion.div>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Our sports teams</h2>
          <p className="section-lede">Each team focuses on one sport, from baseball to tennis.</p>
          <div className={styles.sportPills}>
            {sports.map((sport) => (
              <motion.div
                key={sport.slug}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <Link href={`/teams/${sport.slug}`} className={styles.sportPill}>{sport.name}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Featured work</span>
              <h2 className="section-title">Featured projects</h2>
            </div>
            <Link className="btn btn-secondary" href="/projects">Open dashboard</Link>
          </div>
          <ProjectCardGroup projects={featured} />
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <span className="eyebrow">Outcomes</span>
          <h2 className="section-title">Where our members go</h2>
        </div>
        <LogoMarquee rows={marqueeRows} />
      </motion.section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">What&apos;s next</span>
              <h2 className="section-title">Upcoming events</h2>
            </div>
            <Link className="btn btn-secondary" href="/events"><CalendarDays size={18} aria-hidden /> View all</Link>
          </div>
          <div className="grid three">
            {publicEvents.map((event) => <EventCard event={event} key={event.slug} />)}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section tight"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className={styles.finalCta}>
            <Link href="/join">
              <div className={styles.ctaText}>
                <span>Students</span>
                <b>Build with us.</b>
              </div>
              <ArrowRight className={styles.ctaArrow} aria-hidden />
            </Link>
            <Link href="/partner">
              <div className={styles.ctaText}>
                <span>Organizations</span>
                <b>Bring us the problem.</b>
              </div>
              <ArrowRight className={styles.ctaArrow} aria-hidden />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
