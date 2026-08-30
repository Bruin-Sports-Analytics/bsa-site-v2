create extension if not exists pgcrypto;

drop table if exists public.contact_submissions;

create table if not exists public.join_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  major text not null,
  sport text,
  message text not null,
  consent boolean not null default false,
  raw_payload jsonb not null default '{}'::jsonb,
  source_path text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists public.partner_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  organization text not null,
  sport text not null,
  problem text not null,
  available_data text,
  timeline text,
  link text,
  consent boolean not null default false,
  raw_payload jsonb not null default '{}'::jsonb,
  source_path text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists join_submissions_created_at_idx
  on public.join_submissions (created_at desc);

create index if not exists partner_submissions_created_at_idx
  on public.partner_submissions (created_at desc);

alter table public.join_submissions enable row level security;
alter table public.partner_submissions enable row level security;

revoke all on table public.join_submissions from anon, authenticated;
revoke all on table public.partner_submissions from anon, authenticated;

grant insert, select on public.join_submissions to service_role;
grant insert, select on public.partner_submissions to service_role;
