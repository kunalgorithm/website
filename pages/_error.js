import * as React from "react";

import { Normalize, Row } from "@smooth-ui/core-sc";
import {} from "@smooth-ui/core-sc";
import { Wrapper } from "../styles/global";
import Projects from "../components/Projects";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <title>Not Found</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Row>
      <h3>That page doesn't exist</h3>
    </Row>
    <Row>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </Row>
  </div>
);
