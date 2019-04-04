import React from "react";

import styled from "styled-components";
import { Box, Card, Image, Heading, Text } from "rebass";

const PorfolioItem = props => (
  <Box px={2}>
    {/* <Image src={"/static/images/logo.png"} /> */}
    <Heading as="h3">{props.title}</Heading>
    <Text>{props.description}</Text>
    <a href={props.github} target="_blank">
      View on Github
    </a>
    <br />
    {props.demo ? (
      <a href={props.demo} target="_blank">
        View Live Demo
      </a>
    ) : null}
  </Box>
);

export default props => {
  const projects = [
    {
      title: "React Hooks Demo App",
      description:
        "A create-react-app demonstrating the use the stateful operations in React without defining Class Components by using the recent React Hooks API proposal in React 16.7.0-alpha.",
      github: "https://github.com/kunalgorithm/react-hooks",
      demo: "https://react-hooks.now.sh/"
    }
  ];

  return (
    <div>
      {projects.map((project, idx) => (
        <PorfolioItem
          key={idx}
          title={project.title}
          description={project.description}
          github={project.github}
          demo={project.demo}
        />
      ))}
    </div>
  );
};
