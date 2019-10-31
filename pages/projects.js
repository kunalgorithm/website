import * as React from "react";

import { Normalize } from "@smooth-ui/core-sc";
import {} from "@smooth-ui/core-sc";
import { Wrapper } from "../styles/global";
import Projects from "../components/Projects";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Projects</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Projects />
  </div>
);
