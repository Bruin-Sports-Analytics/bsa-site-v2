import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Football Consulting" };

export default function FootballConsultingPage() {
  return <SportSectorPage sport="football" sector="Consulting" />;
}
