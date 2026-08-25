"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Info } from "lucide-react";
import { GlassSurface } from "@/components/ui/GlassSurface";
import type { Member } from "@/data/site";
import { BoardBioModal } from "@/components/BoardBioModal";
import { boardBios } from "@/data/boardBios";
import styles from "./MemberCard.module.css";

export function MemberCard({ member, priority = false }: { member: Member; priority?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [bioOpen, setBioOpen] = useState(false);

  const isBoard = member.group === "board" || Boolean(boardBios[member.slug]);
  const initials = member.name.split(" ").map((part) => part[0]).join("");

  const expandHandlers = {
    onMouseEnter: () => setExpanded(true),
    onMouseLeave: () => setExpanded(false),
    onFocus: () => setExpanded(true),
    onBlur: (e: React.FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) setExpanded(false);
    },
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (member.linkedinUrl) {
      window.open(member.linkedinUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && member.linkedinUrl) {
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
        interactive={Boolean(member.linkedinUrl)}
        radius="lg"
        className={styles.card}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        tabIndex={member.linkedinUrl ? 0 : undefined}
        role={member.linkedinUrl ? "link" : undefined}
        aria-label={member.linkedinUrl ? `${member.name} on LinkedIn` : member.name}
        {...expandHandlers}
      >
        <div className={styles.photo}>
          {/* Info Button for Board Members on Top-Left */}
          {isBoard && (
            <button
              type="button"
              className={styles.infoBtn}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setBioOpen(true);
              }}
              aria-label={`About ${member.name}`}
              title={`About ${member.name}`}
            >
              <Info size={16} aria-hidden />
            </button>
          )}

          {member.photoUrl && !imgError ? (
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              sizes="(max-width: 600px) 100vw, 400px"
              className={styles.photoImg}
              style={member.photoTransform ? { transform: member.photoTransform } : undefined}
              onError={() => setImgError(true)}
              priority={priority}
            />
          ) : (
            <span aria-hidden>{initials}</span>
          )}

          {member.linkedinUrl && (
            <span className={styles.linkedinBadge} aria-hidden>
              <Linkedin size={16} />
            </span>
          )}
        </div>

        <div className={styles.body}>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <div className={`${styles.bodyExpand} ${expanded ? styles.bodyExpandOpen : ""}`}>
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

