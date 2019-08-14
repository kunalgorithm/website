import * as React from "react";

import { Grid, Row } from "@smooth-ui/core-sc";
import { Image } from "rebass";
import Link from "next/link";
import styled from "styled-components";

const FooterStyles = styled.div`
  cursor: pointer;
  height: 3em;
  /* position: absolute; */
  bottom: 5em;
`;

export default () => (
  <Grid>
    <Row justifyContent={{ xs: "center" }} py={5}>
      <FooterStyles>
        <Link href="/">
          <Image src={"/static/images/logo.png"} style={{ height: "3em" }} />
        </Link>
      </FooterStyles>
    </Row>
  </Grid>
);
