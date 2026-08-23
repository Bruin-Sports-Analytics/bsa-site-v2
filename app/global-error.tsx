"use client";

import { useEffect } from "react";
import { ErrorView } from "@/components/ErrorView";
import "./globals.css";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical root error caught by app/global-error.tsx:", error);
  }, [error]);

  return (
    <html lang="en" data-theme="dark">
      <head>
        <title>Error | Bruin Sports Analytics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, background: "var(--html-bg)", color: "var(--text-primary)" }}>
        <main>
          <ErrorView
            statusCode="500"
            eyebrow="500 · System Anomaly"
            title="Critical error encountered"
            description="A fundamental application error prevented this page from loading. Please try reloading or navigating back to safety."
            error={error}
            reset={reset}
            primaryAction={{
              label: "Reload Application",
              onClick: () => reset()
            }}
            secondaryAction={{
              label: "Go to Bruin Sports Analytics",
              href: "/"
            }}
          />
        </main>
      </body>
    </html>
  );
}
