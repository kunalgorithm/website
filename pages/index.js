import * as React from "react";

import { Normalize } from "@smooth-ui/core-sc";
import {} from "@smooth-ui/core-sc";
import { Wrapper } from "../styles";
import Home from "../components/Home";
import Menu from "../components/Menu";

export default () => (
  <Wrapper>
    <Normalize />
    <Menu />
    <Home />
  </Wrapper>
);
