import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Volleyball",
  description: "Consulting for serve receive, lineup efficiency, rally outcomes, and opponent tendency reports through a 2-year partnership with UCLA men's and women's volleyball."
};

export default function VolleyballPage() {
  return <SportHomePage slug="volleyball" />;
}
