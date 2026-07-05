"use client";

import type { PointerEvent } from "react";
import { useRef } from "react";

export function useGlassPointer(enabled: boolean) {
  const frame = useRef<number | null>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (!enabled || event.pointerType !== "mouse") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--glass-pointer-x", `${x}%`);
      element.style.setProperty("--glass-pointer-y", `${y}%`);
    });
  }

  function handlePointerLeave(event: PointerEvent<HTMLElement>) {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = null;
    event.currentTarget.style.removeProperty("--glass-pointer-x");
    event.currentTarget.style.removeProperty("--glass-pointer-y");
  }

  return {
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave
  };
}
