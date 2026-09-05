import "server-only";

import { createClient } from "@supabase/supabase-js";
import { articles as localArticles, type ArticleBlock, type JournalismArticle } from "@/data/journalism";
import { articleSummaries as localArticleSummaries } from "@/data/journalismSummaries";
import { slugify } from "@/lib/utils";

const JOURNALISM_ASSETS_BASE =
  "https://hfpruaivskrkweobtvcf.supabase.co/storage/v1/object/public/journalism-assets";

type DbAuthor = { name: string; position: number };
type DbBlock = { block: ArticleBlock; position: number };
type DbAsset = {
  public_url: string;
  alt: string | null;
  caption: string | null;
  position: number | null;
};

type DbArticle = {
  slug: string;
  title: string;
  summary: string | null;
  sport: string;
  published_on: string | null;
  date_label: string | null;
  year: number | null;
  read_time_minutes: number | null;
  paper_url: string | null;
  featured: boolean | null;
  source_content_file: string | null;
  journalism_article_authors?: DbAuthor[];
  journalism_article_blocks?: DbBlock[];
  journalism_article_assets?: DbAsset[];
};

function getSupabase() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseKey) return null;

  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
}

function dateLabel(article: Pick<DbArticle, "date_label" | "published_on">) {
  if (article.date_label) return article.date_label;
  if (!article.published_on) return "";
  return new Date(`${article.published_on}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function toStorageUrl(localSrc: string) {
  if (!localSrc.startsWith("/assets/journalism/")) return localSrc;
  return `${JOURNALISM_ASSETS_BASE}/${localSrc.replace(/^\/assets\/journalism\//, "")}`;
}

function withStorageImages(article: JournalismArticle): JournalismArticle {
  return {
    ...article,
    images: article.images?.map((image) => ({ ...image, src: toStorageUrl(image.src) }))
  };
}

function localSummariesWithStorageImages() {
  return localArticleSummaries.map(withStorageImages);
}

function sortByPosition<T extends { position: number | null }>(items: T[] = []) {
  return [...items].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
}

function fromDbArticle(article: DbArticle, includeBlocks: boolean): JournalismArticle {
  const authors = sortByPosition(article.journalism_article_authors || []).map((author) => author.name);
  const images = sortByPosition(article.journalism_article_assets || [])
    .filter((asset) => asset.position !== null)
    .map((asset) => ({
      src: asset.public_url,
      alt: asset.alt || undefined,
      caption: asset.caption || undefined,
      width: 1200,
      height: 700
    }));

  return {
    title: article.title,
    authors,
    date: dateLabel(article),
    year: article.year || undefined,
    sport: article.sport,
    readTime: article.read_time_minutes || 0,
    summary: article.summary || undefined,
    paperUrl: article.paper_url || undefined,
    contentFile: article.source_content_file || undefined,
    images,
    featured: Boolean(article.featured),
    content: includeBlocks
      ? sortByPosition(article.journalism_article_blocks || []).map((row) => row.block)
      : undefined
  };
}

function localArticleWithContent(slug: string) {
  const article = localArticles.find((item) => slugify(item.title) === slug);
  if (!article) return null;
  return {
    ...withStorageImages(article),
    content: article.content || []
  };
}

export async function getJournalismArticles() {
  const supabase = getSupabase();
  if (!supabase) return localSummariesWithStorageImages();

  const { data, error } = await supabase
    .from("journalism_articles")
    .select(`
      slug,
      title,
      summary,
      sport,
      published_on,
      date_label,
      year,
      read_time_minutes,
      paper_url,
      featured,
      source_content_file,
      journalism_article_authors(name, position),
      journalism_article_assets(public_url, alt, caption, position)
    `)
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error || !data?.length) return localSummariesWithStorageImages();
  return (data as DbArticle[]).map((article) => fromDbArticle(article, false));
}

export async function getJournalismArticle(slug: string) {
  const supabase = getSupabase();
  if (!supabase) return localArticleWithContent(slug);

  const { data, error } = await supabase
    .from("journalism_articles")
    .select(`
      slug,
      title,
      summary,
      sport,
      published_on,
      date_label,
      year,
      read_time_minutes,
      paper_url,
      featured,
      source_content_file,
      journalism_article_authors(name, position),
      journalism_article_blocks(block, position),
      journalism_article_assets(public_url, alt, caption, position)
    `)
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !data) return localArticleWithContent(slug);
  return fromDbArticle(data as DbArticle, true);
}

export async function getJournalismSlugs() {
  const supabase = getSupabase();
  if (!supabase) {
    return localArticles
      .filter((article) => article.paperUrl || article.content?.length || article.contentFile)
      .map((article) => slugify(article.title));
  }

  const { data, error } = await supabase
    .from("journalism_articles")
    .select("slug")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error || !data?.length) {
    return localArticles
      .filter((article) => article.paperUrl || article.content?.length || article.contentFile)
      .map((article) => slugify(article.title));
  }

  return data.map((article) => article.slug as string);
}
