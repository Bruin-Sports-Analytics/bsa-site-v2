import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Volleyball Research" };

export default function VolleyballResearchPage() {
  return <SportSectorPage sport="volleyball" sector="Research" />;
}
