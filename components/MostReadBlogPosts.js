import BlogPostPreview from './BlogPostPreview';

const MostReadBlogPosts = () => (
  <>
    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4">
      Most Read
    </h3>
    <BlogPostPreview
      title="Building a Fullstack Twitter Clone with NextJS and Prisma"
      summary="Learn how to build a complete web application with authentication, server-side-rendering, and data storage. "
      slug="building-a-fullstack-twitter-clone"
    />
    <BlogPostPreview
      title="Setting Up Chinese Support on Anki"
      summary="Create spaced-repitition flashcards and automatically have the english translation and pronunciations filled in. "
      slug="chinese-support-anki"
    />
  </>
);

export default MostReadBlogPosts;
