import type { Metadata } from "next";
import { ErrorView } from "@/components/ErrorView";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for could not be found. Return to Bruin Sports Analytics or explore our articles."
};

export default function NotFound() {
  return (
    <main>
      <ErrorView
        statusCode="404"
        eyebrow="404 · Out of Bounds"
        title="We couldn't find the page you're looking for"
        description="The play was called back. The link may be broken, or the article or project you're searching for might have been moved."
        primaryAction={{
          label: "Return Home",
          href: "/"
        }}
        secondaryAction={{
          label: "Explore Data Journalism",
          href: "/journalism"
        }}
      />
    </main>
  );
}
