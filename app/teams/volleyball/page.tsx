import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Volleyball",
  description: "Volleyball analytics consulting for serve receive, lineup efficiency, rally outcomes, and opponent tendency reports in partnership with UCLA Men's and Women's Volleyball.",
  keywords: [
    "volleyball analytics",
    "UCLA volleyball analytics",
    "volleyball scouting reports",
    "serve receive analytics",
    "volleyball tactical consulting",
    "college volleyball analytics partner",
    "sports analytics consulting volleyball"
  ],
  openGraph: {
    title: "Volleyball Analytics & Match Scouting | Bruin Sports Analytics",
    description: "Consulting for serve receive, lineup efficiency, rally outcomes, and opponent tendency reports.",
    url: "https://www.bruinsportsanalytics.org/teams/volleyball"
  }
};

export default function VolleyballPage() {
  return <SportHomePage slug="volleyball" />;
}
