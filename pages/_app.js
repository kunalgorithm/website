import * as React from 'react';

import { Normalize, Grid } from '@smooth-ui/core-sc';
import {} from '@smooth-ui/core-sc';
import { Wrapper } from '../styles';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import CodeBlock from '../components/CodeBlock';
import App, { Container } from 'next/app';
import { MDXProvider } from '@mdx-js/react';

const components = {
  // pre: props => <div {...props} />,
  code: CodeBlock,
  a: props => <a target="_blank" {...props} />,
};
class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <MDXProvider components={components}>
          <Wrapper>
            <Normalize />
            <Menu />

            <Grid py={5} px={3}>
              <Component {...pageProps} />
            </Grid>
          </Wrapper>
        </MDXProvider>
      </Container>
    );
  }
}

export default MyApp;
