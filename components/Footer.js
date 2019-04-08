import * as React from "react";

import { Grid, Row } from "@smooth-ui/core-sc";
import { Image } from "rebass";

export default () => (
  <Grid>
    <Row justifyContent={{ xs: "center" }} py={5}>
      <Image src={"/static/images/logo.png"} style={{ height: "3em" }} />
    </Row>
  </Grid>
);
