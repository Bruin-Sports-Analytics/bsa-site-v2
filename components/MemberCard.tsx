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
          ? <Image src={member.photoUrl} alt={member.name} fill sizes="(max-width: 600px) 100vw, 400px" className={styles.photoImg} />
          : initials}
      </div>
      <div className={styles.body}>
        <div>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
        <span>{member.major} · {member.gradYear}</span>
        <span>{member.team}</span>
        <small>{member.bio}</small>
      </div>
      {member.linkedinUrl ? <Linkedin className={styles.icon} size={18} aria-hidden /> : null}
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
