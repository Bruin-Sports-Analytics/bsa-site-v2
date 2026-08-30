import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { ContactSubmissionPayload } from "@/lib/contactSubmissions";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 5000;

function cleanString(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function hasValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Supabase database credentials are not configured." },
      { status: 500 }
    );
  }

  let body: Partial<ContactSubmissionPayload>;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON payload.");
  }

  const formType = body.formType;
  if (formType !== "recruitment" && formType !== "partner") {
    return badRequest("Invalid contact form type.");
  }

  const name = cleanString(body.name);
  const email = cleanString(body.email).toLowerCase();
  const consent = body.consent === true;

  if (!name) return badRequest("Name is required.");
  if (!hasValidEmail(email)) return badRequest("A valid email is required.");
  if (!consent) return badRequest("Contact consent is required.");

  const commonSubmission = {
    name,
    email,
    sport: cleanString(body.sport) || null,
    consent,
    source_path: request.headers.get("referer"),
    user_agent: request.headers.get("user-agent")
  };

  const major = cleanString(body.major);
  const message = cleanString(body.message);
  const organization = cleanString(body.organization);
  const problem = cleanString(body.problem);

  if (formType === "recruitment" && (!major || !message)) {
    return badRequest("Major and message are required for recruitment submissions.");
  }

  if (
    formType === "partner" &&
    (!organization || !commonSubmission.sport || !problem)
  ) {
    return badRequest("Organization, sport/industry, and problem are required for partner submissions.");
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false
    }
  });

  const result =
    formType === "recruitment"
      ? await supabase
          .from("join_submissions")
          .insert({
            ...commonSubmission,
            major,
            message,
            raw_payload: {
              formType,
              name,
              email,
              major,
              sport: commonSubmission.sport || "",
              message
            }
          })
          .select("id")
          .single()
      : await supabase
          .from("partner_submissions")
          .insert({
            ...commonSubmission,
            organization,
            problem,
            available_data: cleanString(body.availableData) || null,
            timeline: cleanString(body.timeline) || null,
            link: cleanString(body.link) || null,
            raw_payload: {
              formType,
              name,
              email,
              organization,
              sport: commonSubmission.sport || "",
              problem,
              availableData: cleanString(body.availableData),
              timeline: cleanString(body.timeline),
              link: cleanString(body.link)
            }
          })
          .select("id")
          .single();

  const { data, error } = result;

  if (error) {
    console.error("Supabase contact submission error:", error);
    return NextResponse.json(
      { error: "Failed to save contact submission." },
      { status: 500 }
    );
  }

  return NextResponse.json({ id: data.id }, { status: 201 });
}
