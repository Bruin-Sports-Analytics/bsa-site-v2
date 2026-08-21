"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const GRID = 42; // matches body background-size grid
const COLORS = ["#FFD100", "#4AA8FF", "#162d47"] as const;
const COUNT = 8;
const PAGE_ROWS = 95;
// Max visible portion of any pop is (maxWidth - minOff) cells = 3 cells = 126px.
// Check elements within this distance from either edge.
const EDGE_THRESHOLD = 130;

type Zone = { topRow: number; bottomRow: number };

type Pop = {
  color: string;
  widthCells: number;
  heightCells: number;
  topRow: number;
  side: "left" | "right";
  offCells: number;
};

function overlaps(topRow: number, heightCells: number, zones: Zone[]): boolean {
  const bottom = topRow + heightCells;
  return zones.some((z) => topRow < z.bottomRow && bottom > z.topRow);
}

function generate(excluded: Zone[]): Pop[] {
  const pops: Pop[] = [];
  let lastColor = "";
  const bandSize = PAGE_ROWS / COUNT;

  for (let i = 0; i < COUNT; i++) {
    const available = COLORS.filter((c) => c !== lastColor);
    const color = available[Math.floor(Math.random() * available.length)];
    lastColor = color;

    // Max 4 cells in either dimension
    const widthCells = 2 + Math.floor(Math.random() * 3);  // 2–4
    const heightCells = 2 + Math.floor(Math.random() * 3); // 2–4
    const side = Math.random() < 0.5 ? "left" : "right";
    const offCells = widthCells - 1 + Math.floor(Math.random() * 2); // push pops mostly off-screen, outside the field

    const bandStart = i === 0 ? 2 : Math.floor(i * bandSize);
    const bandEnd = Math.floor((i + 1) * bandSize);
    const bandLength = Math.max(1, bandEnd - bandStart);

    let placed = false;
    for (let attempt = 0; attempt < 8; attempt++) {
      const topRow = bandStart + Math.floor(Math.random() * bandLength);
      if (!overlaps(topRow, heightCells, excluded)) {
        pops.push({ color, widthCells, heightCells, topRow, side, offCells });
        placed = true;
        break;
      }
    }
    if (!placed) lastColor = "";
  }

  return pops;
}

function getExcludedZones(): Zone[] {
  const zones: Zone[] = [];
  const scrollY = window.scrollY;
  const vw = window.innerWidth;

  const selectors = [
    '[class*="logoMarquee"]', // full-width carousels
    '[class*="glass"]',       // glass cards
    "h1", "h2", "h3",        // headings
    ".page-hero",             // hero blocks
  ];

  document.querySelectorAll<HTMLElement>(selectors.join(",")).forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.left >= EDGE_THRESHOLD && rect.right <= vw - EDGE_THRESHOLD) return;
    zones.push({
      topRow: Math.floor((rect.top + scrollY) / GRID) - 1,
      bottomRow: Math.ceil((rect.bottom + scrollY) / GRID) + 1,
    });
  });

  return zones;
}

export function ColorPops() {
  const pathname = usePathname();
  const [pops, setPops] = useState<Pop[]>([]);

  useEffect(() => {
    const excluded = getExcludedZones();
    setPops(generate(excluded));
  }, [pathname]);

  if (pops.length === 0) return null;

  return (
    <div
      aria-hidden
      className="color-pops"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {pops.map((pop, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: pop.topRow * GRID,
            [pop.side]: -(pop.offCells * GRID),
            width: pop.widthCells * GRID,
            height: pop.heightCells * GRID,
            background: pop.color,
            opacity: pop.color === "#4AA8FF" ? 0.85 : 1,
          }}
        />
      ))}
    </div>
  );
}
