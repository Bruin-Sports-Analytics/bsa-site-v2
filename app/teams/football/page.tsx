import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Football Analytics & Play Evaluation | Bruin Sports Analytics",
  description: "UCLA football analytics team: drive outcomes, coverage tendencies, expected points added (EPA), win probability modeling, and roster evaluation consulting.",
  keywords: [
    "football analytics",
    "UCLA football analytics",
    "expected points added EPA",
    "win probability modeling",
    "football drive simulation",
    "NFL analytics research",
    "sports analytics consulting football"
  ],
  openGraph: {
    title: "Football Analytics & Play Evaluation | Bruin Sports Analytics",
    description: "Drive outcomes, coverage tendencies, win probability, and roster evaluation research.",
    url: "https://www.bruinsportsanalytics.org/teams/football"
  }
};

export default function FootballPage() {
  return <SportHomePage slug="football" />;
}
