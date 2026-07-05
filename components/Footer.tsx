import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, MessageSquare } from "lucide-react";
import { socialLinks, sports } from "@/data/site";
import styles from "./Footer.module.css";

const iconMap = {
  Email: Mail,
  Instagram,
  LinkedIn: Linkedin,
  Slack: MessageSquare
};

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.signature}>
          <span className="eyebrow">Bruin Sports Analytics</span>
          <p>Built by Bruins who believe every game leaves a dataset.</p>
        </div>
        <div className={styles.columns}>
          <div>
            <h2>Explore</h2>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/events">Events</Link>
          </div>
          <div>
            <h2>Our Work</h2>
            {sports.map((sport) => (
              <Link href={`/work/${sport.slug}`} key={sport.slug}>{sport.name}</Link>
            ))}
          </div>
          <div>
            <h2>People</h2>
            <Link href="/people/board">Board</Link>
            <Link href="/people/members">Members</Link>
            <Link href="/join">Join</Link>
            <Link href="/partner">Partner</Link>
          </div>
          <div>
            <h2>Connect</h2>
            <div className={styles.socials}>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label as keyof typeof iconMap] ?? Github;
                return (
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={link.label} aria-label={link.label}>
                    <Icon size={18} aria-hidden />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
