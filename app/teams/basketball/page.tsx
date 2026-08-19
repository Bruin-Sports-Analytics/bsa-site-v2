import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = {
  title: "Basketball",
  description: "Shot quality, lineup combinations, spatial tracking, and possession-level storytelling."
};

export default function BasketballPage() {
  return <SportHomePage slug="basketball" />;
}
