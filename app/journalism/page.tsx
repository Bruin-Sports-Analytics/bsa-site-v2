import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journalism"
};

export default function JournalismPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Journalism</h1>
        </div>
      </section>
    </main>
  );
}
