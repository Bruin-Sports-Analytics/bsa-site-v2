import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = { title: "Football" };

export default function FootballPage() {
  return <SportHomePage slug="football" />;
}
