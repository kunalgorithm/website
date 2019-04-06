// @ts-nocheck
import React from "react";

import Projects from "../components/Projects";
import { Wrapper } from "../styles";
import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import { Box, Card, Image, Heading, Text } from "rebass";

import styled from "styled-components";
import {} from "@smooth-ui/core-sc";

export default () => (
  <Wrapper>
    <Normalize />

    <Section>
      <h1>Hey, I'm Kunal</h1>
      {/* TODO: social icons  */}
      <p>I'm a full-stack developer based in San Francisco.</p>
      <p>kshah239@gmail.com</p>
    </Section>

    <Section>
      <Projects />
    </Section>

    <Grid>
      <Row justifyContent={{ xs: "center" }} py={5}>
        <Image src={"/static/images/logo.png"} style={{ height: "3em" }} />
      </Row>
    </Grid>
  </Wrapper>
);
