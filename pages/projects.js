import * as React from "react";

import { Normalize } from "@smooth-ui/core-sc";
import {} from "@smooth-ui/core-sc";
import { Wrapper } from "../styles";
import Projects from "../components/Projects";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Page from "../layouts/Page";
import Head from "next/head";

export default () => (
  <Page>
    <Head>
      <title>Projects</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Projects />
  </Page>
);
