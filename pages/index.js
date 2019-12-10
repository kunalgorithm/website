import * as React from "react";
import Index from "../content/index.mdx";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Index />
  </div>
);
