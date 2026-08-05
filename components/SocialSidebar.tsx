import { Instagram, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/data/site";
import styles from "./SocialSidebar.module.css";

const iconMap = {
  Email: Mail,
  Instagram,
  LinkedIn: Linkedin,
};

export function SocialSidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Social links">
      <span className={styles.label} aria-hidden>stay connected</span>
      <div className={styles.icons}>
        {socialLinks.map((link) => {
          const Icon = iconMap[link.label as keyof typeof iconMap];
          if (!Icon && link.label !== "Slack") return null;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={link.label}
              className={styles.icon}
            >
              {link.label === "Slack" ? (
                <span className={styles.slackIcon} aria-hidden />
              ) : (
                Icon ? <Icon size={18} aria-hidden /> : null
              )}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
