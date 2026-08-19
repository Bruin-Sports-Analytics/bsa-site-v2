import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Baseball",
  description: "Pitch design, batted-ball modeling, scouting tools, and game-planning support."
};

export default function BaseballPage() {
  return <SportHomePage slug="baseball" />;
}
