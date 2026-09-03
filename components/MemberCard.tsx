"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Member } from "@/data/site";
import { BoardBioModal } from "@/components/BoardBioModal";
import { boardBios } from "@/data/boardBios";
import styles from "./MemberCard.module.css";

export function MemberCard({ member, priority = false }: { member: Member; priority?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);

  const isBoard = member.group === "board" || Boolean(boardBios[member.slug]);
  const isInteractive = isBoard || Boolean(member.linkedinUrl);
  const initials = member.name.split(" ").map((part) => part[0]).join("");

  const handleCardClick = () => {
    if (isBoard) {
      setBioOpen(true);
    } else if (member.linkedinUrl) {
      window.open(member.linkedinUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== "Enter" && e.key !== " ") return;

    if (isBoard) {
      e.preventDefault();
      setBioOpen(true);
    } else if (member.linkedinUrl) {
      e.preventDefault();
      window.open(member.linkedinUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <GlassSurface
        as="div"
        variant="regular"
        tint="blue"
        interactive={isInteractive}
        radius="lg"
        className={styles.card}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        tabIndex={isInteractive ? 0 : undefined}
        role={isBoard ? "button" : member.linkedinUrl ? "link" : undefined}
        aria-label={isBoard ? `About ${member.name}` : member.linkedinUrl ? `${member.name} on LinkedIn` : member.name}
      >
        <div className={styles.photo}>
          {member.photoUrl && !imgError ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              sizes="(max-width: 600px) 100vw, 400px"
              className={styles.photoImg}
              style={member.photoTransform ? { transform: `${member.photoTransform} translateZ(0)` } : undefined}
              decoding="async"
              onError={() => setImgError(true)}
              priority={priority}
            />
          ) : (
            <span aria-hidden>{initials}</span>
          )}
        </div>

        <div className={styles.body}>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <div className={styles.bodyExpand}>
            <div className={styles.bodyExpandInner}>
              <span>
                {member.major} · {member.gradYear}
              </span>
            </div>
          </div>
        </div>
      </GlassSurface>

      {/* Board Member Bio Modal */}
      {isBoard && (
        <BoardBioModal
          member={member}
          isOpen={bioOpen}
          onClose={() => setBioOpen(false)}
        />
      )}
    </>
  );
}
