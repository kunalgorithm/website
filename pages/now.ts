import hydrate from 'next-mdx-remote/hydrate';

import { getFileBySlug } from 'lib/mdx';
import Layout from 'layouts/layout';
import MDXComponents from 'components/MDXComponents';
import Container from 'components/Container';

export default function Uses({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });
  const title = 'Now';

  return (
    <Container title={title} description="Here's what I'm currently up to.">
      <Layout frontMatter={frontMatter} title={title}>
        {content}
      </Layout>
      ;
    </Container>
  );
}

export async function getStaticProps() {
  const now = await getFileBySlug('now');

  return { props: now };
}
