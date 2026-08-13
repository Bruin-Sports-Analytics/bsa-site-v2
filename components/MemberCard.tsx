"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Member } from "@/data/site";
import styles from "./MemberCard.module.css";

export function MemberCard({ member }: { member: Member }) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const initials = member.name.split(" ").map((part) => part[0]).join("");

  const expandHandlers = {
    onMouseEnter: () => setExpanded(true),
    onMouseLeave: () => setExpanded(false),
    onFocus: () => setExpanded(true),
    onBlur: (e: React.FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) setExpanded(false);
    },
  };

  const content = (
    <>
      <div className={styles.photo} aria-hidden>
        {member.photoUrl && !imgError
          ? <Image src={member.photoUrl} alt="" fill sizes="(max-width: 600px) 100vw, 400px" className={styles.photoImg} style={member.photoTransform ? { transform: member.photoTransform } : undefined} onError={() => setImgError(true)} />
          : initials}
      </div>
      {member.linkedinUrl && (
        <span className={styles.linkedinBadge} aria-hidden>
          <Linkedin size={16} />
        </span>
      )}
      <div className={styles.body}>
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <div className={`${styles.bodyExpand} ${expanded ? styles.bodyExpandOpen : ""}`}>
          <div className={styles.bodyExpandInner}>
            <span>{member.major} · {member.gradYear}</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{ opacity: { duration: 0.5 }, y: { duration: 0.5 }, scale: { type: "spring", stiffness: 400, damping: 17 } }}
    >
      {member.linkedinUrl ? (
        <GlassSurface as="a" variant="regular" tint="blue" interactive radius="lg" href={member.linkedinUrl} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} {...expandHandlers}>
          {content}
        </GlassSurface>
      ) : (
        <GlassSurface as="article" variant="regular" tint="blue" radius="lg" {...expandHandlers}>{content}</GlassSurface>
      )}
    </motion.div>
  );
}
