create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  form_type text not null check (form_type in ('recruitment', 'partner')),
  name text not null,
  email text not null,
  organization text,
  major text,
  sport text,
  message text,
  problem text,
  available_data text,
  timeline text,
  link text,
  consent boolean not null default false,
  raw_payload jsonb not null default '{}'::jsonb,
  source_path text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_form_type_idx
  on public.contact_submissions (form_type);

alter table public.contact_submissions enable row level security;

grant insert, select on public.contact_submissions to service_role;
