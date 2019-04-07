import * as React from "react";

import Projects from "./Projects";
import SocialIcons from "./SocialIcons";
import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import { Box, Card, Image, Heading, Text } from "rebass";
import styled from "styled-components";
import {} from "@smooth-ui/core-sc";
import { Wrapper, Section } from "../styles";
import { Github } from "styled-icons/fa-brands/Github";
import { MediumM } from "styled-icons/fa-brands/MediumM";
import { Twitter } from "styled-icons/fa-brands/Twitter";
// facebook? linkedin?

export default () => (
  <>
    <Section>
      <h1>Hey, I'm Kunal Shah</h1>
      <SocialIcons />

      <p>I'm a full-stack developer based in San Francisco.</p>
      <a href="mailto:kshah239@gmail.com">kshah239@gmail.com</a>
    </Section>

    <Section>
      <Projects />
    </Section>

    <Grid>
      <Row justifyContent={{ xs: "center" }} py={5}>
        <Image src={"/static/images/logo.png"} style={{ height: "3em" }} />
      </Row>
    </Grid>
  </>
);
