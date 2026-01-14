import { MetadataRoute } from 'next';
import { getFiles } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getFiles('blog');
  const blogPosts = posts.map((post) => ({
    url: `https://kunal.sh/blog/${post.replace(/\.mdx$/, '')}`,
    lastModified: new Date()
  }));

  return [
    {
      url: 'https://kunal.sh',
      lastModified: new Date()
    },
    {
      url: 'https://kunal.sh/blog',
      lastModified: new Date()
    },
    ...blogPosts
  ];
}
