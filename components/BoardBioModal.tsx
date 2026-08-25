"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, Linkedin, MapPin, Calendar, Trophy, Sparkles, Smile } from "lucide-react";
import type { Member } from "@/data/site";
import { getBoardBio } from "@/data/boardBios";
import styles from "./BoardBioModal.module.css";

type Props = {
  member: Member;
  isOpen: boolean;
  onClose: () => void;
};

export function BoardBioModal({ member, isOpen, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [imgError, setImgError] = useState(false);

  const bio = getBoardBio(member.slug);
  const initials = member.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 220);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

  if (!mounted || (!isOpen && !isClosing)) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${isClosing ? styles.overlayClosing : styles.overlayOpen}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="board-bio-title"
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.modalClosing : styles.modalOpen}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close bio popup"
        >
          <X size={18} aria-hidden />
        </button>

        {/* Header with Avatar & Details */}
        <div className={styles.header}>
          <div className={styles.avatarWrap}>
            {member.photoUrl && !imgError ? (
              <Image
                src={member.photoUrl}
                alt={member.name}
                fill
                sizes="110px"
                className={styles.avatarImg}
                style={member.photoTransform ? { transform: member.photoTransform } : undefined}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={styles.avatarFallback}>{initials}</div>
            )}
          </div>

          <div className={styles.headerInfo}>
            <span className={styles.roleBadge}>{member.role}</span>
            <h2 id="board-bio-title" className={styles.name}>
              {member.name}
            </h2>
            <p className={styles.majorGrad}>
              {member.major} · Class of {member.gradYear}
            </p>

            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinLink}
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin size={15} aria-hidden />
                <span>LinkedIn Profile</span>
              </a>
            )}
          </div>
        </div>

        <div className={styles.divider} aria-hidden />

        {/* Bio Details Grid */}
        <div className={styles.bioGrid}>
          {/* Hometown */}
          <div className={styles.infoBlock}>
            <div className={styles.labelRow}>
              <MapPin size={15} className={styles.icon} aria-hidden />
              <span className={styles.labelText}>Hometown</span>
            </div>
            <span className={styles.valueText}>{bio.hometown}</span>
          </div>

          {/* Joined BSA */}
          <div className={styles.infoBlock}>
            <div className={styles.labelRow}>
              <Calendar size={15} className={styles.icon} aria-hidden />
              <span className={styles.labelText}>Joined BSA</span>
            </div>
            <span className={styles.valueText}>{bio.joinDate}</span>
          </div>

          {/* Favorite Teams */}
          <div className={`${styles.infoBlock} ${styles.fullWidth}`}>
            <div className={styles.labelRow}>
              <Trophy size={15} className={styles.icon} aria-hidden />
              <span className={styles.labelText}>Favorite Sports Teams</span>
            </div>
            <div className={styles.tagList}>
              {bio.favoriteTeams.map((team) => (
                <span className={styles.pillTag} key={team}>
                  {team}
                </span>
              ))}
            </div>
          </div>

          {/* Interests & Hobbies */}
          <div className={`${styles.infoBlock} ${styles.fullWidth}`}>
            <div className={styles.labelRow}>
              <Sparkles size={15} className={styles.icon} aria-hidden />
              <span className={styles.labelText}>Interests & Hobbies</span>
            </div>
            <div className={styles.tagList}>
              {bio.interests.map((interest) => (
                <span className={styles.pillTag} key={interest}>
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          {bio.funFact && (
            <div className={`${styles.infoBlock} ${styles.fullWidth}`}>
              <div className={styles.labelRow}>
                <Smile size={15} className={styles.icon} aria-hidden />
                <span className={styles.labelText}>Fun Fact</span>
              </div>
              <p className={styles.funFactText}>{bio.funFact}</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
