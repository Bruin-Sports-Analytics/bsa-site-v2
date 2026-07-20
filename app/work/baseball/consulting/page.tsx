import type { Metadata } from "next";
import SportSectorPage from "@/components/SportSectorPage";

export const metadata: Metadata = { title: "Baseball Consulting" };

export default function BaseballConsultingPage() {
  return <SportSectorPage sport="baseball" sector="Consulting" />;
}
