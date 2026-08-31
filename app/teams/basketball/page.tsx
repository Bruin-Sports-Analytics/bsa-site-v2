import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Basketball",
  description: "UCLA basketball analytics team: shot quality modeling, lineup efficiency, spatial tracking data, expected possession value, and consulting reports.",
  keywords: [
    "basketball analytics",
    "UCLA basketball analytics",
    "shot quality models",
    "lineup efficiency analytics",
    "spatial tracking basketball",
    "NBA data science",
    "sports analytics consulting basketball"
  ],
  openGraph: {
    title: "Basketball Analytics & Tracking | Bruin Sports Analytics",
    description: "Shot quality, lineup combinations, spatial tracking, and possession-level storytelling.",
    url: "https://www.bruinsportsanalytics.org/teams/basketball"
  }
};

export default function BasketballPage() {
  return <SportHomePage slug="basketball" />;
}
