import type { Metadata, Viewport } from "next";
import { Lato, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { RouteTransitions } from "@/components/RouteTransitions";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SocialSidebar } from "@/components/SocialSidebar";

const montserrat = Montserrat({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Bruin Sports Analytics",
    template: "%s | Bruin Sports Analytics"
  },
  description: "UCLA's student-run sports analytics organization. Where sports meet data.",
  icons: { icon: "/assets/bsa_logo.ico" },
  openGraph: {
    title: "Bruin Sports Analytics",
    description: "Where sports meet data.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${montserrat.variable} ${lato.variable} ${roboto.variable}`}>
      <body>
        <div className="shell">
          <Navigation />
          <ScrollReveal />
          <SocialSidebar />
          <RouteTransitions>{children}</RouteTransitions>
          <Footer />
        </div>
      </body>
    </html>
  );
}
