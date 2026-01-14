import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime, { ReadTimeResults } from 'reading-time';

const root = process.cwd();

export async function getFiles(type: string): Promise<string[]> {
  return fs.readdirSync(path.join(root, 'data', type));
}

export interface BlogFrontMatter {
  title: string;
  publishedAt: string;
  summary?: string;
  image?: string;
  wordCount: number;
  readingTime: ReadTimeResults;
  slug: string;
}

export async function getFileBySlug(
  type: string,
  slug: string
): Promise<{ content: string; frontMatter: BlogFrontMatter }> {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);

  return {
    content,
    frontMatter: {
      wordCount: content.split(/\s+/g).length,
      readingTime: readingTime(content),
      slug: slug,
      ...(data as Omit<BlogFrontMatter, 'wordCount' | 'readingTime' | 'slug'>)
    }
  };
}

export interface PostFrontMatter {
  title: string;
  publishedAt: string;
  summary?: string;
  slug: string;
  image?: string;
}

export async function getAllFilesFrontMatter(
  type: string
): Promise<PostFrontMatter[]> {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts: PostFrontMatter[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...(data as Omit<PostFrontMatter, 'slug'>),
        slug: postSlug.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
}
