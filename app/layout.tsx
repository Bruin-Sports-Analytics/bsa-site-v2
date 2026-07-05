import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "Bruin Sports Analytics",
    template: "%s | Bruin Sports Analytics"
  },
  description: "UCLA's student-run sports analytics organization. Where sports meet data.",
  openGraph: {
    title: "Bruin Sports Analytics",
    description: "Where sports meet data.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
