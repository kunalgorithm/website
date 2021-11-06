import Timeline from '../components/Timeline';
import Layout from 'layouts/layout';
import hydrate from 'next-mdx-remote/hydrate';
import Container from 'components/Container';
import MDXComponents from 'components/MDXComponents';
import { getFileBySlug } from 'lib/mdx';

export default function About({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });
  const title = 'About';
  return (
    <Container title={title}>
      <Layout frontMatter={frontMatter} title={title}>
        {content}
        <Timeline />
      </Layout>
    </Container>
  );
}

export async function getStaticProps() {
  const about = await getFileBySlug('about');

  return { props: about };
}
