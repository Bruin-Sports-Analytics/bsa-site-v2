export type ContactFormType = "recruitment" | "partner";

export type ContactSubmissionPayload = {
  formType: ContactFormType;
  name: string;
  email: string;
  consent: boolean;
  major?: string;
  organization?: string;
  sport?: string;
  message?: string;
  problem?: string;
  availableData?: string;
  timeline?: string;
  link?: string;
};

export async function saveContactSubmission(payload: ContactSubmissionPayload) {
  const response = await fetch("/api/contact-submissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.error || "Failed to save contact submission.");
  }
}
