import * as React from "react";

import { Normalize, Grid, Row, Col } from "@smooth-ui/core-sc";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Page from "../layouts/Page";
import BrowserDemo from "../components/BrowserDemo";

export default () => (
  <Page>
    <h1>Tinker</h1>
    <p>
      This page serves as my playground for rendering and deploying react
      components.
    </p>
    <BrowserDemo>
      <div>Here's a browser emulation in your browser.</div>
    </BrowserDemo>
  </Page>
);
