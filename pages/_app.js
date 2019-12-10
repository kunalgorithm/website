import * as React from "react";

import { Normalize, Grid } from "@smooth-ui/core-sc";
import { Wrapper } from "../styles/global";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import CodeBlock from "../components/CodeBlock";
import App, { Container } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { Head } from "next/document";

const components = {
  // pre: props => <div {...props} />,
  code: CodeBlock,
  a: props => <a target="_blank" {...props} />
};
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        {/* <Head><title>Kunal Shah</title></Head> */}
        <MDXProvider components={components}>
          <Wrapper>
            <Normalize />
            <Menu />

            <Grid py={5} px={3}>
              <Component {...pageProps} />
            </Grid>
          </Wrapper>
        </MDXProvider>
      </div>
    );
  }
}

export default MyApp;
