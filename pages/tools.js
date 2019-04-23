import * as React from "react";

import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import { Box, Card, Image, Heading, Text } from "rebass";
import styled from "styled-components";
import {} from "@smooth-ui/core-sc";
import { Wrapper, Section } from "../styles";
import Menu from "../components/Menu";
//@ts-ignore
import Tools from "../docs/tools.mdx";
import Link from "next/link";
import Footer from "../components/Footer";
import Page from "../layouts/Page";

export default () => (
  <Page>
    <Tools />
  </Page>
);
