import * as React from "react";

import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import { Box, Card, Image, Heading, Text } from "rebass";
import styled from "styled-components";
import {} from "@smooth-ui/core-sc";
import { Wrapper, Section } from "../styles";
import Projects from "../components/Projects";
//@ts-ignore
import Tools from "../docs/Tools.mdx";
import Link from "next/link";
export default () => (
  <Wrapper>
    <Normalize />
    <Grid>
      <Row justifyContent={{ xs: "center" }} py={5} px={3}>
        <Col>
          <Tools />
        </Col>
      </Row>
    </Grid>
    <Grid>
      <Row justifyContent={{ xs: "center" }} py={5}>
        <Link href="/">
          <Image src={"/static/images/logo.png"} style={{ height: "3em" }} />
        </Link>
      </Row>
    </Grid>
  </Wrapper>
);
