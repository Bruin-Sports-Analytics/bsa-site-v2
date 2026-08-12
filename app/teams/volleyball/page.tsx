import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = { title: "Volleyball" };

export default function VolleyballPage() {
  return <SportHomePage slug="volleyball" />;
}
