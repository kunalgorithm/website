import { useState } from 'react';

import Container from '@/components/Container';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import BlogPostPreview from '@/components/BlogPostPreview';
import MostReadBlogPosts from '@/components/MostReadBlogPosts';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  console.log(posts);
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter(
      (frontMatter) =>
        frontMatter.title &&
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Blog"
      description="Thoughts on mostly programmign and tech."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 ">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I write mostly about sticky new ideas, trends in technology and
          programming, and other random things I find of interest. Use the
          search below to filter by title.
        </p>
        <SearchBar setSearchValue={setSearchValue} />
        {!searchValue && <MostReadBlogPosts posts={posts} />}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 ">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPostPreview key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}

const SearchBar = ({ setSearchValue }) => (
  <div className="relative w-full mb-4">
    <input
      aria-label="Search articles"
      type="text"
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search articles"
      className="px-4 py-2 border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md bg-primary text-gray-900 dark:text-gray-100"
    />
    <svg
      className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
);
