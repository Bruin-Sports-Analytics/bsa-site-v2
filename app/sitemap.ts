import { MetadataRoute } from 'next';
import { projects, sports } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bruinsportsanalytics.org';

  const staticPages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/teams', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/people/board', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/people/members', priority: 0.8, changeFrequency: 'monthly' as const },
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
      lastModified: project.lastUpdated,
    }));

  const teamPages = sports.map(sport => ({
    url: `${baseUrl}/teams/${sport.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const allUrls = [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page.url}`,
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    })),
    ...projectPages,
    ...teamPages,
  ];

  return allUrls;
}
