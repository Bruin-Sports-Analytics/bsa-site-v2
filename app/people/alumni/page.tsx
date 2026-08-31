import type { Metadata } from "next";
import { alumni } from "@/data/site";

export const metadata: Metadata = {
  title: "Alumni",
  description: "Discover where Bruin Sports Analytics alumni work across professional sports franchises, front offices, analytics firms, and top tech companies.",
  keywords: [
    "Bruin Sports Analytics alumni",
    "sports analytics careers",
    "BSA alumni network",
    "sports front office alumni UCLA",
    "sports data science jobs"
  ],
  openGraph: {
    title: "Alumni Network | Bruin Sports Analytics",
    description: "BSA alumni career paths across MLB, NBA, NFL front offices, sports consulting, and data science.",
    url: "https://www.bruinsportsanalytics.org/people/alumni"
  }
};

export default function AlumniPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Alumni</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ul className="grid four" style={{ justifyContent: "center", listStyle: "none", margin: "0 auto", maxWidth: 1100, padding: 0, textAlign: "center" }}>
            {alumni.map((person) => (
              <li key={person.name} style={{ color: "var(--text-primary)", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, justifySelf: "center", textAlign: "center", width: "100%" }}>
                {person.linkedinUrl ? (
                  <a href={person.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    {person.name}
                  </a>
                ) : person.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
