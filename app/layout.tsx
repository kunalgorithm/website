import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@/components/Analytics';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://kunal.sh'),
  title: {
    default: 'Kunal Shah',
    template: '%s | Kunal Shah'
  },
  description: 'Founder, engineer, and builder.',
  openGraph: {
    title: 'Kunal Shah',
    description: 'Founder, engineer, and builder.',
    url: 'https://kunal.sh',
    siteName: 'Kunal Shah',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kunalcooks'
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <nav className="sticky-nav flex justify-between items-center px-6 md:px-0 max-w-2xl w-full py-8 md:py-12 mx-auto bg-white/70 dark:bg-gray-900/70">
            <a href="#skip" className="sr-only focus:not-sr-only">
              Skip to content
            </a>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Blog
              </Link>
            </div>
            <ThemeToggle />
          </nav>
          <main id="skip" className="flex-1 px-6 md:px-0 max-w-2xl w-full mx-auto">
            {children}
          </main>
          <footer className="max-w-2xl w-full mx-auto px-6 md:px-0 py-8">
            <div className="flex justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <a
                href="https://x.com/kunalcooks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/hi.kunal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                Instagram
              </a>
              <a
                href="https://github.com/kunalgorithm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kunalsh22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                LinkedIn
              </a>
              <a
                href="mailto:me@kunal.sh"
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                Email
              </a>
            </div>
          </footer>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
