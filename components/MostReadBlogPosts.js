import BlogPostPreview from './BlogPostPreview';

const MostReadBlogPosts = ({ posts }) => {
  const target = ['building-a-fullstack-twitter-clone', 'passwordless-login'];
  const mostRead = posts.filter((p) => target.find((t) => t === p.slug));
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-4">
        Most Read
      </h3>
      {mostRead.map((post) => (
        <BlogPostPreview
          key={post.slug}
          title={post.title}
          summary={post.summary}
          slug={post.slug}
        />
      ))}
    </>
  );
};

export default MostReadBlogPosts;
