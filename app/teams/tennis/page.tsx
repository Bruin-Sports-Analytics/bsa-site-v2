import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Tennis",
  description: "UCLA tennis analytics team: match strategy, player development, serve and return analytics, and scouting across men's, women's, and club programs.",
  keywords: [
    "tennis analytics",
    "UCLA tennis analytics",
    "tennis match strategy",
    "serve and return analytics",
    "tennis scouting reports",
    "college tennis analytics partner",
    "sports analytics consulting tennis"
  ],
  openGraph: {
    title: "Tennis Analytics & Match Strategy | Bruin Sports Analytics",
    description: "Match strategy, player development, and scouting work across tennis programs.",
    url: "https://www.bruinsportsanalytics.org/teams/tennis"
  }
};

export default function TennisPage() {
  return <SportHomePage slug="tennis" />;
}
