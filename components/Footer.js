import * as React from "react";

import { Grid, Row } from "@smooth-ui/core-sc";
import { Image } from "rebass";
import Link from "next/link";

export default () => (
  <Grid>
    <Row justifyContent={{ xs: "center" }} py={5}>
      <Link href="/">
        <Image src={"/static/images/logo.png"} style={{ height: "3em" }} />
      </Link>
    </Row>
  </Grid>
);
