import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Baseball",
  description: "UCLA baseball analytics and sabermetrics team: pitch design, batted-ball modeling, TrackMan data analysis, scouting tools, and game-planning consulting.",
  keywords: [
    "baseball analytics",
    "sabermetrics UCLA",
    "UCLA baseball analytics",
    "pitch design analytics",
    "batted ball modeling",
    "TrackMan sports analytics",
    "baseball scouting reports",
    "sports analytics consulting baseball"
  ],
  openGraph: {
    title: "Baseball Analytics & Sabermetrics | Bruin Sports Analytics",
    description: "Pitch design, batted-ball modeling, scouting tools, and tactical game-planning consulting.",
    url: "https://www.bruinsportsanalytics.org/teams/baseball"
  }
};

export default function BaseballPage() {
  return <SportHomePage slug="baseball" />;
}
