import * as React from "react";

import Projects from "../components/Projects";
import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import { Box, Card, Image, Heading, Text } from "rebass";
import styled from "styled-components";
import {} from "@smooth-ui/core-sc";
import { Wrapper, Section } from "../styles";
import { Github } from "styled-icons/fa-brands/Github";
import { MediumM } from "styled-icons/fa-brands/MediumM";
import { Twitter } from "styled-icons/fa-brands/Twitter";

export default () => (
  <>
    <Section>
      <h1>Hey, I'm Kunal</h1>
      <a
        href="https://github.com/kunalgorithm"
        target="blank"
        style={{ borderBottom: "none" }}
      >
        <Github style={{ width: "25px", marginRight: "1em" }} />
      </a>
      <a
        href="https://medium.com/@kunal.shah"
        target="blank"
        style={{ borderBottom: "none" }}
      >
        <MediumM style={{ width: "25px", marginRight: "1em" }} />
      </a>
      <a
        href="https://twitter.com/kunalgorithm"
        target="blank"
        style={{ borderBottom: "none" }}
      >
        <Twitter style={{ width: "25px", marginRight: "1em" }} />
      </a>

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
  </>
);
