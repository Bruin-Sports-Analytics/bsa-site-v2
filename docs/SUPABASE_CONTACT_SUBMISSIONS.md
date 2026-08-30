# Supabase Form Submissions

The Join and Partner forms now post to `/api/contact-submissions` before sending the existing EmailJS notification. The route inserts Join form payloads into `public.join_submissions` and Partner form payloads into `public.partner_submissions` with `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, so the service role key must stay server-only and must not use a `NEXT_PUBLIC_` prefix.

## Setup

Run the migration in Supabase SQL editor or through your Supabase CLI:

```sql
-- supabase/migrations/20260829000000_create_contact_submissions.sql
-- supabase/migrations/20260830003624_split_contact_submissions.sql
```

Required environment variables:

```bash
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PARTNER=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RECRUITMENT=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

## Tables

`join_submissions` stores Join form submissions:

- fields: `name`, `email`, `major`, `sport`, `message`, `consent`, `created_at`
- diagnostics: `source_path`, `user_agent`
- `raw_payload`: JSONB copy of the sanitized submitted fields

`partner_submissions` stores Partner form submissions:

- fields: `name`, `email`, `organization`, `sport`, `problem`, `available_data`, `timeline`, `link`, `consent`, `created_at`
- diagnostics: `source_path`, `user_agent`
- `raw_payload`: JSONB copy of the sanitized submitted fields

RLS is enabled on both tables without public policies. Inserts go through the server route using the service role key.
