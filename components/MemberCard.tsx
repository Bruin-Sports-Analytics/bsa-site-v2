"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Member } from "@/data/site";
import styles from "./MemberCard.module.css";

export function MemberCard({ member }: { member: Member }) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name.split(" ").map((part) => part[0]).join("");

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
      </div>
    </>
  );

  return (
    <div className={styles.root}>
      {member.linkedinUrl ? (
        <GlassSurface as="a" variant="regular" tint="blue" radius="lg" className={styles.card} href={member.linkedinUrl} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
          {content}
        </GlassSurface>
      ) : (
        <GlassSurface as="article" variant="regular" tint="blue" radius="lg" className={styles.card}>
          {content}
        </GlassSurface>
      )}
      <p className={styles.meta}>{member.major} · {member.gradYear}</p>
    </div>
  );
}
