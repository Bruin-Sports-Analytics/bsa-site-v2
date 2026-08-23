"use client";

import { useEffect } from "react";
import { ErrorView } from "@/components/ErrorView";

export default function ErrorPage({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime route error caught by app/error.tsx:", error);
  }, [error]);

  return (
    <main>
      <ErrorView
        statusCode="500"
        eyebrow="500 · Statistical Anomaly"
        title="Play under review — something went wrong"
        description="An unexpected error occurred while processing your request. We've logged this issue, and you can try refreshing the view or returning to the homepage."
        error={error}
        reset={reset}
        primaryAction={{
          label: "Try Again",
          onClick: () => reset()
        }}
        secondaryAction={{
          label: "Return Home",
          href: "/"
        }}
      />
    </main>
  );
}
