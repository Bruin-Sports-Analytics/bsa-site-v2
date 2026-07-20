import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Baseball Research" };

export default function BaseballResearchPage() {
  return <SportSectorPage sport="baseball" sector="Research" />;
}
