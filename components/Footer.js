import * as React from "react";

import Projects from "./Projects";
import SocialIcons from "./SocialIcons";
import { Grid, Row } from "@smooth-ui/core-sc";
import { Image } from "rebass";
import {} from "@smooth-ui/core-sc";
import { Section } from "../styles";
// facebook? linkedin?

export default () => (
  <Grid>
    <Row justifyContent={{ xs: "center" }} py={5}>
      <Image src={"/static/images/logo.png"} style={{ height: "3em" }} />
    </Row>
  </Grid>
);
