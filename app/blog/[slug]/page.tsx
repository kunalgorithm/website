import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import { MDXComponents } from '@/components/MDXComponents';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getFiles('blog');
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, '')
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontMatter } = await getFileBySlug('blog', slug);
    return {
      title: frontMatter.title,
      description: frontMatter.summary,
      openGraph: {
        title: frontMatter.title,
        description: frontMatter.summary,
        type: 'article',
        publishedTime: frontMatter.publishedAt,
        url: `https://kunal.sh/blog/${slug}`
      },
      twitter: {
        card: 'summary_large_image',
        title: frontMatter.title,
        description: frontMatter.summary
      }
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  try {
    const { content, frontMatter } = await getFileBySlug('blog', slug);

    return (
      <article className="mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="Kunal Shah"
              height={24}
              width={24}
              src="/profile-pic.png"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              Kunal Shah /{' '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="prose dark:prose-invert max-w-none w-full">
          <MDXRemote source={content} components={MDXComponents} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
