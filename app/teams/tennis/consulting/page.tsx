import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Tennis Consulting" };

export default function TennisConsultingPage() {
  return <SportSectorPage sport="tennis" sector="Consulting" />;
}
