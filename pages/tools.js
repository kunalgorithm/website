import * as React from "react";

//@ts-ignore
import Tools from "../docs/tools.mdx";
import Page from "../layouts/Page";
import Head from "next/head";
export default () => (
  <Page>
    <Head>
      <title>Tools</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Tools />
  </Page>
);
