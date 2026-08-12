import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = { title: "Basketball" };

export default function BasketballPage() {
  return <SportHomePage slug="basketball" />;
}
