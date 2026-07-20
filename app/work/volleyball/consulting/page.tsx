import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Volleyball Consulting" };

export default function VolleyballConsultingPage() {
  return <SportSectorPage sport="volleyball" sector="Consulting" />;
}
