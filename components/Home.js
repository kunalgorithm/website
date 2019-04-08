import * as React from "react";

import Projects from "./Projects";
import SocialIcons from "./SocialIcons";
import { Grid, Row } from "@smooth-ui/core-sc";
import { Image } from "rebass";
import {} from "@smooth-ui/core-sc";
import { Section } from "../styles";
import Footer from "./Footer";

export default () => (
  <>
    <Section>
      <h1>Hey, I'm Kunal Shah</h1>
      <SocialIcons />
      <p>I'm a full-stack developer based in San Francisco.</p>
      Write to me at <a href="mailto:kshah239@gmail.com">kshah239@gmail.com</a>.
    </Section>

    <Section>
      <Projects />
    </Section>

    <Footer />
  </>
);
