import type { Metadata, Viewport } from "next";
import { Montserrat, Lato, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ColorPops } from "@/components/ColorPops";
import { RouteTransitions } from "@/components/RouteTransitions";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ErrorBoundary } from "@/components/ErrorBoundary";

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
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bruinsportsanalytics.org",
  },
  openGraph: {
    title: "Bruin Sports Analytics",
    description: "Where sports meet data.",
    type: "website"
  }
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const theme = stored || system;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} ${roboto.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bruin Sports Analytics",
              "url": "https://bruinsportsanalytics.org",
              "logo": "https://bruinsportsanalytics.org/assets/bsa_logo.jpeg",
              "description": "UCLA's student-run sports analytics organization",
              "location": {
                "@type": "Place",
                "name": "UCLA",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Los Angeles",
                  "addressRegion": "CA"
                }
              },
              "sameAs": [
                "https://www.instagram.com/bruinsportsanalytics/",
                "https://www.linkedin.com/company/bruin-sports-analytics/",
                "https://github.com/Bruin-Sports-Analytics"
              ]
            })
          }}
        />
      </head>
      <body>
        <div className="shell">
          <Navigation />
          <ColorPops />
          <ScrollReveal />
          <SocialSidebar />
          <ErrorBoundary>
            <RouteTransitions>
              {children}
              <Footer />
            </RouteTransitions>
          </ErrorBoundary>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
