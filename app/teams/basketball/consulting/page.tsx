import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Basketball Consulting" };

export default function BasketballConsultingPage() {
  return <SportSectorPage sport="basketball" sector="Consulting" />;
}
