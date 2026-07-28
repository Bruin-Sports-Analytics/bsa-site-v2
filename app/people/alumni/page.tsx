import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni"
};

const alumni = [
  "Nadeev Alam",
  "Rhea Jain",
  "Trent Bellinger",
  "Siddharth Singh",
  "Tom Seifert",
  "Daniel Wang",
  "Leo Cardozo",
  "Abhinav Madabhushi",
  "Steven Lu Chen",
  "Derek Nakagawa",
  "Bryan Mui",
  "Shail Mirpuri",
  "Oscar O’Brien",
  "Shashvat Patel",
  "Jerry Shi",
  "Clajerson Gimena",
  "Lucas Q",
  "Michelle Li",
  "Alexander West",
  "Frederick Zhang",
  "Dillon Maheshwari"
];

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
          <ul className="grid three" style={{ justifyContent: "center", listStyle: "none", margin: "0 auto", maxWidth: 920, padding: 0, textAlign: "center" }}>
            {alumni.map((name) => (
              <li key={name} style={{ color: "var(--text-primary)", fontFamily: "var(--font-sora), system-ui, sans-serif", fontSize: "1.1rem", fontWeight: 700, justifySelf: "center", textAlign: "center", width: "100%" }}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
