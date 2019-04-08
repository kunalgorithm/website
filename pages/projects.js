import * as React from "react";

import { Normalize } from "@smooth-ui/core-sc";
import {} from "@smooth-ui/core-sc";
import { Wrapper } from "../styles";
import Projects from "../components/Projects";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default () => (
  <Wrapper>
    <Normalize />
    <Menu />
    <Projects />
    <Footer />
  </Wrapper>
);
