import * as React from "react";

import { Grid, Row } from "@smooth-ui/core-sc";
import { Image } from "rebass";
import Link from "next/link";
import styled from "styled-components";



export default () => (
  <Grid>
    <Row justifyContent={{ xs: "center" }} py={5}>
      <Link href="/">
        <Image src={"/public/images/logo.png"} style={{ height: "3em" }} />
      </Link>
    </Row>
  </Grid>
);


  //      <style jsx>{`
  //     cursor: pointer;
  // height: 3em;
  // /* position: absolute; */
  // bottom: 5em;
  //     `}
  //     </style>
