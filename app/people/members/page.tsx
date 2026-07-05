import type { Metadata } from "next";
import { MembersDirectory } from "@/components/MembersDirectory";

export const metadata: Metadata = {
  title: "Members"
};

export default function MembersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Current members</span>
          <h1>Teams behind the work.</h1>
          <p>Search current members by name, team, function, or class year. Published links open in a new tab.</p>
        </div>
      </section>
      <MembersDirectory />
    </main>
  );
}
