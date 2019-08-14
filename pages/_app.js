import * as React from 'react';

import { Normalize, Grid } from '@smooth-ui/core-sc';
import {} from '@smooth-ui/core-sc';
import { Wrapper } from '../styles';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <Wrapper>
          <Normalize />
          <Menu />

          <Grid py={5} px={3}>
            <Component {...pageProps} />
          </Grid>
        </Wrapper>
      </Container>
    );
  }
}

export default MyApp;

// export default ({ children }) => (
//   <Wrapper>
//     <Normalize />
//     <Menu />
//     <Grid py={5} px={3}>
//       hi
//       {children}
//     </Grid>
//     <Footer />
//   </Wrapper>
// );
