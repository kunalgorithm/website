import Link from 'next/link';

const BlogPostPreview = ({ title, summary, slug, publishedAt }) => {
  // const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = null; //data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
              {/* {`${views ? format(views) + '--- views' : ''}`}
               */}
              {publishedAt &&
                new Date(publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
            </p>
          </div>
          {/* <p className="text-gray-600 dark:text-gray-400">{summary}</p> */}
        </div>
      </a>
    </Link>
  );
};

export default BlogPostPreview;
