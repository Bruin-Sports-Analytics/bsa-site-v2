import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { socialLinks } from "@/data/site";
import styles from "./Footer.module.css";

const iconMap = {
  Email: Mail,
  Instagram,
  LinkedIn: Linkedin,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.socials}>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap] ?? Github;
            return (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                key={link.label}
                aria-label={link.label}
              >
                {link.label === "Slack" ? (
                  <Image src="/assets/slack-logo.png" alt="" width={32} height={32} className={styles.slackIcon} aria-hidden />
                ) : (
                  <Icon size={18} aria-hidden />
                )}
              </a>
            );
          })}
        </div>
        <p className={styles.copyright}>© {year} Bruin Sports Analytics</p>
        <a className={styles.contact} href="mailto:bruinsportsanalytics@gmail.com">
          Contact Us
        </a>
      </div>
    </footer>
  );
}
