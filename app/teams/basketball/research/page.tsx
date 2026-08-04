import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Basketball Research" };

export default function BasketballResearchPage() {
  return <SportSectorPage sport="basketball" sector="Research" />;
}
