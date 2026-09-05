create extension if not exists pgcrypto;

create table if not exists public.journalism_articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text,
  sport text not null,
  published_on date,
  date_label text,
  year smallint,
  read_time_minutes integer not null default 0 check (read_time_minutes >= 0),
  paper_url text,
  featured boolean not null default false,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  source_content_file text,
  raw_metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.journalism_article_authors (
  article_id uuid not null references public.journalism_articles(id) on delete cascade,
  position integer not null check (position >= 0),
  name text not null,
  primary key (article_id, position)
);

create table if not exists public.journalism_article_blocks (
  id bigint generated always as identity primary key,
  article_id uuid not null references public.journalism_articles(id) on delete cascade,
  position integer not null check (position >= 0),
  block jsonb not null,
  created_at timestamptz not null default now(),
  unique (article_id, position),
  constraint journalism_article_blocks_type_check
    check (block ? 'type')
);

create table if not exists public.journalism_article_assets (
  id bigint generated always as identity primary key,
  article_id uuid references public.journalism_articles(id) on delete cascade,
  local_path text,
  storage_bucket text not null default 'journalism-assets',
  storage_path text not null,
  public_url text not null,
  alt text,
  caption text,
  position integer,
  created_at timestamptz not null default now(),
  unique (storage_bucket, storage_path)
);

create index if not exists journalism_articles_published_on_idx
  on public.journalism_articles (published_on desc)
  where is_published;

create index if not exists journalism_articles_sport_published_on_idx
  on public.journalism_articles (sport, published_on desc)
  where is_published;

create index if not exists journalism_article_blocks_article_position_idx
  on public.journalism_article_blocks (article_id, position);

create index if not exists journalism_article_authors_article_position_idx
  on public.journalism_article_authors (article_id, position);

create index if not exists journalism_article_assets_article_position_idx
  on public.journalism_article_assets (article_id, position)
  where article_id is not null;

alter table public.journalism_articles enable row level security;
alter table public.journalism_article_authors enable row level security;
alter table public.journalism_article_blocks enable row level security;
alter table public.journalism_article_assets enable row level security;

revoke all on table public.journalism_articles from anon, authenticated;
revoke all on table public.journalism_article_authors from anon, authenticated;
revoke all on table public.journalism_article_blocks from anon, authenticated;
revoke all on table public.journalism_article_assets from anon, authenticated;

grant select on table public.journalism_articles to anon, authenticated;
grant select on table public.journalism_article_authors to anon, authenticated;
grant select on table public.journalism_article_blocks to anon, authenticated;
grant select on table public.journalism_article_assets to anon, authenticated;

grant select, insert, update, delete on table public.journalism_articles to service_role;
grant select, insert, update, delete on table public.journalism_article_authors to service_role;
grant select, insert, update, delete on table public.journalism_article_blocks to service_role;
grant select, insert, update, delete on table public.journalism_article_assets to service_role;

grant usage, select on sequence public.journalism_article_blocks_id_seq to service_role;
grant usage, select on sequence public.journalism_article_assets_id_seq to service_role;

drop policy if exists "Published journalism articles are publicly readable"
  on public.journalism_articles;
create policy "Published journalism articles are publicly readable"
  on public.journalism_articles
  for select
  to anon, authenticated
  using (is_published);

drop policy if exists "Published journalism authors are publicly readable"
  on public.journalism_article_authors;
create policy "Published journalism authors are publicly readable"
  on public.journalism_article_authors
  for select
  to anon, authenticated
  using (
    exists (
      select 1
      from public.journalism_articles article
      where article.id = journalism_article_authors.article_id
        and article.is_published
    )
  );

drop policy if exists "Published journalism blocks are publicly readable"
  on public.journalism_article_blocks;
create policy "Published journalism blocks are publicly readable"
  on public.journalism_article_blocks
  for select
  to anon, authenticated
  using (
    exists (
      select 1
      from public.journalism_articles article
      where article.id = journalism_article_blocks.article_id
        and article.is_published
    )
  );

drop policy if exists "Published journalism assets are publicly readable"
  on public.journalism_article_assets;
create policy "Published journalism assets are publicly readable"
  on public.journalism_article_assets
  for select
  to anon, authenticated
  using (
    article_id is null
    or exists (
      select 1
      from public.journalism_articles article
      where article.id = journalism_article_assets.article_id
        and article.is_published
    )
  );
