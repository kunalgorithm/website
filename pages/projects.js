import * as React from "react";

import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import { Box, Card, Image, Heading, Text } from "rebass";
import styled from "styled-components";
import {} from "@smooth-ui/core-sc";
import { Wrapper, Section } from "../styles";
import Projects from "../components/Projects";
import Menu from "../components/Menu";

export default () => (
  <Wrapper>
    <Normalize />
    <Menu />
    <Projects />
  </Wrapper>
);
