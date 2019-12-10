import * as React from "react";
import Links from "../content/links.mdx";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Links</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Links />
  </div>
);
