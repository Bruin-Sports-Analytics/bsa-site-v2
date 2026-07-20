import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Football Research" };

export default function FootballResearchPage() {
  return <SportSectorPage sport="football" sector="Research" />;
}
