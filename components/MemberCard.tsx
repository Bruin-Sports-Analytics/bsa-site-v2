import Image from "next/image";
import { Linkedin } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Member } from "@/data/site";
import styles from "./MemberCard.module.css";

export function MemberCard({ member }: { member: Member }) {
  const initials = member.name.split(" ").map((part) => part[0]).join("");

  const content = (
    <>
      <div className={styles.photo} aria-hidden>
        {member.photoUrl
          ? <Image src={member.photoUrl} alt="" fill sizes="(max-width: 600px) 100vw, 400px" className={styles.photoImg} />
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
        <div className={styles.bodyExpand}>
          <div className={styles.bodyExpandInner}>
            <span>{member.major} · {member.gradYear}</span>
            {member.team !== member.role && <span>{member.team}</span>}
            <small>{member.bio}</small>
          </div>
        </div>
      </div>
    </>
  );

  return member.linkedinUrl ? (
    <GlassSurface as="a" variant="regular" tint="blue" interactive radius="lg" className={styles.card} href={member.linkedinUrl} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
      {content}
    </GlassSurface>
  ) : (
    <GlassSurface as="article" variant="regular" tint="blue" radius="lg" className={styles.card}>{content}</GlassSurface>
  );
}
