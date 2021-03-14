import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';

import Footer from '@/components/Footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Kunal Shah – Web engineer.',
    description: `JavaScript enthusiast.`,
    // image: 'https://kunal.sh/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  const primaryBg = 'bg-primary';

  return (
    <div className={` ${primaryBg}`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://kunal.sh${router.asPath}`} />
        <link rel="canonical" href={`https://kunal.sh${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Kunal shah" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kunalgorithm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav
        className={`sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto  ${primaryBg} bg-opacity-60`}
      >
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div>
          {/* <NextLink href="/dashboard">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
              Dashboard
            </a>
          </NextLink> */}
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
          </NextLink>
          <NextLink href="/about">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">About</a>
          </NextLink>
          <NextLink href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
          </NextLink>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className=" rounded-lg p-3 h-10 w-10"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-5 w-5 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
                ></path>
              ) : (
                // <path
                //   strokeLinecap="round"
                //   strokeLinejoin="round"
                //   strokeWidth={2}
                //   d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                // />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18.75V1.25a8.75 8.75 0 100 17.5zM10 20a10 10 0 100-20 10 10 0 000 20z"
                ></path>
                // <path
                //   strokeLinecap="round"
                //   strokeLinejoin="round"
                //   strokeWidth={2}
                //   d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                // />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main
        id="skip"
        className={`flex flex-col justify-center  ${primaryBg} px-8`}
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
