import * as React from "react";
import InReview from "../../content/2019-in-review.mdx";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>2019 In Review</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <InReview />
  </div>
);
