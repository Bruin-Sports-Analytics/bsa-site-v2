import type { Metadata } from "next";
import { SportHomePage } from "@/components/SportHomePage";

export const metadata: Metadata = { title: "Baseball" };

export default function BaseballPage() {
  return <SportHomePage slug="baseball" />;
}
