import Link from 'next/link';

import Container from '../components/Container';
import BlogPostPreview from '../components/BlogPostPreview';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import MostReadBlogPosts from '../components/MostReadBlogPosts';
import { getAllFilesFrontMatter } from 'lib/mdx';

export default function Home({ posts }) {
  const allPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl w-full mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-10 ">
          Hey, I'm Kunal Shah
        </h1>

        <div className="prose prose-lg mb-8 leading-6">
          <p className="mb-4">
            I'm the founder of Cocomo - we help companies improve marketing
            using autonomous media buying and conversion rate optimization.
            We're currently in stealth, but I'd be happy to share more on a
            call.
          </p>

          <p className="mb-4">Here's some of what I've done in the past:</p>

          <ul className="mb-4 ml-6 list-disc">
            <li>
              founded compose.ai, where i built an ai-powered email writer
              (before LLMs exploded in popularity), joined YC's w21 batch, and
              scaled to 500k monthly active users.
            </li>
            <li>
              founded Ascend Motors, where i built electric motorcycles with
              200-mile range using breakthrough battery pack configurations and
              cooling technologies.
            </li>
            <li>
              founding team at On Deck, where i grew into the head of
              engineering and helped bring the founders fellowship to life.
            </li>
            <li>
              studied CS, ran D1 track, and started the blockchain club at Rice
            </li>
            <li>
              in high school, i held the New York State record in the indoor
              mile (4:16, if you must know), and was voted best dressed
            </li>
          </ul>

          <p className="mb-6">
            I'm enthusiastic about cars, motorcycles, drones, video games, art
            (yes even AI art), political theory, philosophy, and residential
            architecture.
          </p>
        </div>

        {allPosts.map((frontMatter) => (
          <BlogPostPreview key={frontMatter.title} {...frontMatter} />
        ))}
        {/* <MostReadBlogPosts posts={posts} />
         */}

        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8">
          Recent Projects
        </h3> */}
        {/* <ProjectCard
          title="Polygon Video"
          description="Learn foreign languages by watching interactive videos.  "
          href="https://polygon.video/"
        /> */}
        {/* <ProjectCard
          title="Echo Cards"
          description="Remember what you learn with spaced repetition. "
          href="https://echocards.co"
        /> */}
        {/* <ProjectCard
          title="Webform"
          description="Create customizable and embeddable forms to collect data and automate processes without having to write a single line of code."
          href="https://webform.so/"
        /> */}
        {/* <ProjectCard
          title="Compose.ai"
          description="An AI-powered email writer that lets you draft and send emails faster than you thought possible."
          href="https://compose.ai/"
        />
        <ProjectCard
          title="Mindstreaks"
          description="Strava for Meditation: Actually stick to your meditation goals with motivational quotes, streak tracking, and friends. "
          href="https://mindstreaks.com/"
        /> */}

        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
