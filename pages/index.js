import * as React from "react";

import { Normalize } from "@smooth-ui/core-sc";

import { Wrapper } from "../styles";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Page from "../layouts/Page";
import Head from 'next/head';

export default () => (
  <Page>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Home />
  </Page>
);
