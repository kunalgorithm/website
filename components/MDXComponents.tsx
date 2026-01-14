import Link from 'next/link';
import Image from 'next/image';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'>;

function CustomLink(props: AnchorProps) {
  const href = props.href;
  const isInternalLink =
    href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link href={href} {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4 my-4">
      <p className="text-red-800 dark:text-red-200 text-sm">{children}</p>
    </div>
  );
}

function SuccessMessage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 my-4">
      <p className="text-green-800 dark:text-green-200 text-sm">{children}</p>
    </div>
  );
}

export const MDXComponents = {
  Image,
  a: CustomLink,
  ErrorMessage,
  SuccessMessage
};
