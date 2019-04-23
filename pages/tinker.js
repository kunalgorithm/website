import * as React from "react";

import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import { Wrapper } from "../styles";
import Projects from "../components/Projects";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BrowserDemo from "../components/BrowserDemo";
import Home from "../components/Home";

export default () => (
  <Wrapper>
    <Normalize />
    <Menu />
    <Grid>
      <Row justifyContent={{ xs: "center" }} py={5} px={3}>
        <Col>
          <BrowserDemo>
            <div>hey there</div>
          </BrowserDemo>
        </Col>
      </Row>
    </Grid>
    <Grid>
      <Footer />
    </Grid>
  </Wrapper>
);
