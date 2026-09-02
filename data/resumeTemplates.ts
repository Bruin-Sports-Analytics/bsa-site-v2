export type ResumeTemplate = {
  label: string;
  href: string;
  action: "open" | "download";
};

const RESUME_TEMPLATES_BASE =
  "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/resume-templates";

export const resumeTemplates: ResumeTemplate[] = [
  {
    label: "PDF template",
    href: `${RESUME_TEMPLATES_BASE}/joe-bruin-resume-template-2.0.pdf`,
    action: "open"
  },
  {
    label: "LaTeX template",
    href: `${RESUME_TEMPLATES_BASE}/joe-bruin-updated-resume-2.0.tex?download=`,
    action: "download"
  }
];
