// @ts-nocheck
import React from "react";

import Projects from "../components/Projects";
import { Normalize } from "@smooth-ui/core-sc";
import { Box, Card, Image, Heading, Text } from "rebass";

import styled from "styled-components";
import {} from "@smooth-ui/core-sc";

export default () => (
  <Wrapper>
    <Normalize />

    <Section>
      <h1>Hey, I'm Kunal</h1>
      <p>I'm a full-stack developer based in San Francisco.</p>
      <p>kshah239@gmail.com</p>
    </Section>

    <Section>
      <Projects />
    </Section>

    <Section>
      footer
      <Image src={"/static/images/logo.png"} style={{ height: "5em" }} />
    </Section>
  </Wrapper>
);

const Wrapper = styled.div`
  body {
    line-height: 1.6;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a {
    background-position: 0 0;
    border-bottom: 2px solid;
    border-color: rgba(85, 85, 85, 0.2);
    box-sizing: border-box;
    color: #555;
    text-decoration: none;
    transition-delay: 0s;
    transition-duration: 0.15s;
    transition-property: border-color;
    transition-timing-function: ease-out;
    :hover & {
      border-color: rgba(85, 85, 85, 0.4);
    }
  }
`;

const Section = styled.section`
  margin: 3em;
`;
