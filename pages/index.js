// @ts-nocheck
import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import Projects from "../components/Projects";

import { Box, Card, Image, Heading, Text } from "rebass";

const Wrapper = styled.div`
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

export default () => (
  <Wrapper>
    <Section>
      <h1>Hey, I'm Kunal</h1>
      <p>
        styled- icons
        <br />
        I'm a full-stack developer based in San Francisco.
      </p>
    </Section>

    <Section>
      <Projects />
    </Section>
  </Wrapper>
);
