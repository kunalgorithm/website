import * as React from "react";

import { Normalize, Grid } from "@smooth-ui/core-sc";
import {} from "@smooth-ui/core-sc";
import { Wrapper } from "../styles";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default ({ children }) => (
  <Wrapper>
    <Normalize />
    <Menu />
    <Grid py={5} px={3}>
      {children}
    </Grid>
    <Footer />
  </Wrapper>
);
