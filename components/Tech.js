import * as React from "react";

import Projects from "./Projects";
import { Grid, Row, Col } from "@smooth-ui/core-sc";
import { Image } from "rebass";
import {} from "@smooth-ui/core-sc";
import { Section } from "../styles";

// facebook? linkedin?

export default () => (
  <>
    <h1>Technology stack</h1>

    <p>
      Just as painters and sculptors see their tools as extensions of
      themselves, I find that the same applies to the tools software engineers
      use to create software. Here are the programming languages, libraries,
      services, and other tools I use and prefer when building software.{" "}
    </p>
    <p>
      Moreover, it is important to note that my particular interest is
      prototyping web applications, and my choice of tools is tailored to be
      conducive to that interest. This is not intended to be a prescriptive
      guide for other engineers and is blatantly bias according to my own
      personal preferences.
    </p>

    <h2>Front End</h2>
    <p>
      I particularly enjoy front-end web development because it allows me to
      operate simultaneously as a developer, designer, and product manager.
      <br />
      <strong>Tool of Choice: React</strong>
      React is great framework to learn just because of it's enormous
      popularity. However, I've found that once you get through the horrific
      uphil battle of learning how to <i>think in react</i>, it's built-in
      composability makes constructing complex single-page applications an
      absolute delight.
      <br />
      Other Tools: I've used [Vue](https://vuejs.org/) sparingly at hackathons.
      Less experience with [Angular](https://angular.io/).
    </p>
  </>
);
