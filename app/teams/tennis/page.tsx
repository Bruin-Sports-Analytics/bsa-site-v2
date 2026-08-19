import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Tennis",
  description: "Match strategy, player development, and scouting work across three configurable programs."
};

export default function TennisPage() {
  return <SportHomePage slug="tennis" />;
}
