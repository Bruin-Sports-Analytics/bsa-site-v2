import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Tennis Research" };

export default function TennisResearchPage() {
  return <SportSectorPage sport="tennis" sector="Research" />;
}
