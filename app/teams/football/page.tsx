import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Football",
  description: "Drive outcomes, coverage tendencies, win probability, and roster evaluation research."
};

export default function FootballPage() {
  return <SportHomePage slug="football" />;
}
