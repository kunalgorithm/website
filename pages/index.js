import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Kunal Shah
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer and I love creating new and useful experiences on the
          web. You’ve found my personal corner of the internet.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Building a Fullstack Twitter Clone with NextJS and Prisma"
          summary="Learn how to build a complete web application with authentication, server-side-rendering, and data storage. "
          slug="building-a-fullstack-twitter-clone"
        />

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Webform.so"
          description="Create customizable and embeddable forms to collect data and automate processes without having to write a single line of code."
          href="https://react2025.com/"
          icon="react2025"
        />
        <ProjectCard
          title="Compose.ai"
          description="An AI-powered email writer that lets you draft and send emails faster than you thought possible."
          href="https://compose.ai/"
          icon="nextjs"
        />
        <ProjectCard
          title="Mindstreaks"
          description="Strava for Meditation: Actually stick to your meditation goals with motivational quotes, streak tracking, and most importantly.. friends ✨ "
          href="https://mindstreaks.com/"
          icon="fastfeedback"
        />
        <Timeline />
        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}
