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
  metadataBase: new URL("https://www.bruinsportsanalytics.org"),
  title: {
    default: "Bruin Sports Analytics",
    template: "%s | Bruin Sports Analytics"
  },
  description: "UCLA's student-run sports analytics organization. Where sports meet data.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.bruinsportsanalytics.org",
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
    localStorage.removeItem("theme");
    const manual = sessionStorage.getItem("theme_manual");
    const stored = sessionStorage.getItem("theme");
    if (manual === "true" && (stored === "dark" || stored === "light")) {
      document.documentElement.dataset.theme = stored;
      document.documentElement.style.colorScheme = stored;
      return;
    }
    var systemTheme = "dark";
    var mqlLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)");
    var mqlDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    if (mqlLight && mqlLight.matches) {
      systemTheme = "light";
    } else if (mqlDark && mqlDark.matches) {
      systemTheme = "dark";
    } else {
      var hour = new Date().getHours();
      systemTheme = (hour >= 6 && hour < 18) ? "light" : "dark";
    }
    document.documentElement.dataset.theme = systemTheme;
    document.documentElement.style.colorScheme = systemTheme;
  } catch {
    var hour = new Date().getHours();
    var fallbackTheme = (hour >= 6 && hour < 18) ? "light" : "dark";
    document.documentElement.dataset.theme = fallbackTheme;
    document.documentElement.style.colorScheme = fallbackTheme;
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
              "url": "https://www.bruinsportsanalytics.org",
              "logo": "https://www.bruinsportsanalytics.org/assets/bsa_logo.jpeg",
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
