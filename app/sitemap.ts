import { MetadataRoute } from 'next';
import { projects, sports } from '@/data/site';
import { articles } from '@/data/journalism';
import { slugify } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.bruinsportsanalytics.org';

  const staticPages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/people/board', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/events', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/journalism', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/join', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/partner', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const projectPages = projects
    .filter(project => project.visibility !== 'hidden' && project.visibility !== 'private')
    .map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
      lastModified: project.lastUpdated ? new Date(project.lastUpdated).toISOString() : undefined,
    }));

  const teamPages = sports.map(sport => ({
    url: `${baseUrl}/teams/${sport.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const journalismPages = articles
    .filter(a => a.paperUrl || a.contentFile || a.content?.length)
    .map(article => ({
      url: `${baseUrl}/journalism/${slugify(article.title)}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
      lastModified: article.date ? new Date(article.date).toISOString() : undefined,
    }));

  const allUrls = [
    ...staticPages.map(page => ({
      url: page.url === '/' ? baseUrl : `${baseUrl}${page.url}`,
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    })),
    ...projectPages,
    ...teamPages,
    ...journalismPages,
  ];

  return allUrls;
}
