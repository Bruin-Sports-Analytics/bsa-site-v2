import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = { title: "Tennis" };

export default function TennisPage() {
  return <SportHomePage slug="tennis" />;
}
