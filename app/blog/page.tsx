'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  summary?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const filteredPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter(
      (post) =>
        post.title &&
        post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <div className="mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        Blog
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        I write mostly about sticky new ideas, trends in technology and
        programming, and other random things I find of interest.
      </p>

      <div className="relative w-full mb-8">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
        />
        <svg
          className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300"
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

      <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-indigo-800 dark:text-indigo-400">
        All Posts
      </h2>

      {!filteredPosts.length && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">No posts found.</p>
      )}

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <h3 className="text-lg md:text-xl font-medium mb-2 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0 text-sm">
                {post.publishedAt &&
                  new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
