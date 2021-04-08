import Link from 'next/link';

import Container from '../components/Container';
import BlogPostPreview from '../components/BlogPostPreview';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import MostReadBlogPosts from '../components/MostReadBlogPosts';
import { getAllFilesFrontMatter } from '@/lib/mdx';

export default function Home({ posts }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 ">
          Hey, I’m Kunal Shah
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer and I love creating new and useful experiences on the
          web. You’ve found my personal corner of the internet.
        </h2>
        <MostReadBlogPosts posts={posts} />

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8">
          Projects
        </h3>
        <ProjectCard
          title="Webform.so"
          description="Create customizable and embeddable forms to collect data and automate processes without having to write a single line of code."
          href="https://webform.so/"
        />
        <ProjectCard
          title="Compose.ai"
          description="An AI-powered email writer that lets you draft and send emails faster than you thought possible."
          href="https://compose.ai/"
        />
        <ProjectCard
          title="Mindstreaks"
          description="Strava for Meditation: Actually stick to your meditation goals with motivational quotes, streak tracking, and most importantly.. friends ✨ "
          href="https://mindstreaks.com/"
        />

        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
