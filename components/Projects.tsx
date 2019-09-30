import React from "react";

import styled from "styled-components";
import { Box, Card, Image, Heading, Text } from "rebass";
import { Grid, Row, Col } from "@smooth-ui/core-sc";
import { Github } from "styled-icons/fa-brands/Github";
import { Chrome } from "styled-icons/fa-brands/Chrome";

export default props => {
  const projects = [
    {
      title: "Snailsheet",

      demo: "https://snailsheet.com/",
      isDemo: false,
      image: "/static/portfolio/snailsheet.png",
      description: <div>Send snail mail straight from Google Drive.</div>,
    },
    {
      title: "Graphql FullStack",
      github: "graphql-fullstack",
      demo: "https://graphql-fullstack.now.sh/",
      isDemo: true,
      image: "/static/portfolio/graphql-fullstack.png",
      description: (
        <div>
          Deploy a fullstack web application on serverless with cutting-edge
          tooling in 60 seconds.
        </div>
      ),
    },
    {
      title: "Via",

      demo: "https://via.beondeck.com/",
      isDemo: false,
      image: "/static/portfolio/via.png",
      description: (
        <div>Get referred to breakout companies via top investors.</div>
      ),
    },
    {
      title: "Graphql Authentication Server",
      github: "graphql-auth-server",
      demo: "https://graphql-auth-server.now.sh/",
      isDemo: true,
      image: "/static/portfolio/graphql-auth-server.png",
      description: (
        <div>
          A Graphql authentication server boilerplate built on node and express
          that allows users to sign up with a username and password and create
          their own data.
        </div>
      ),
    },
    {
      title: "React Hooks Demo App",
      image: "/static/portfolio/react-hooks.png",
      github: "react-hooks",
      isDemo: true,
      demo: "https://react-hooks.now.sh/",
      description: (
        <div>
          A <code>create-react-app</code> demonstrating the use the stateful
          operations in React without defining <code>Class</code> Components by
          using the recent{" "}
          <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>
          API proposal in React 16.7.0-alpha.
        </div>
      ),
    },
    {
      title: "Hackernews Clone",
      image: "/static/portfolio/hackernews-clone.png",
      github: "hackernews-clone",
      isDemo: true,
      demo: "",
      description: (
        <div>
          Node.js GraphQL app with a database later built on top of{" "}
          <a href="https://prisma.io">Prisma</a>. The client is bootstrapped
          with <code>create-react-app</code> and uses{" "}
          <a href="https://github.com/apollographql">Apollo</a> to interface
          with the server.
          <br />
          It's a hackernews clone, naturally.
        </div>
      ),
    },
    {
      title: "Movie Converter",
      image: "/static/portfolio/movie-converter.png",
      github: "electron-movie-converter",
      demo: "",
      description: (
        <div>
          A desktop application that converts videos on your desktop into a
          format of your choice. Built with Electron, React, Redux, Webpack, and
          Babel.
        </div>
      ),
    },

    {
      title: "Rice Blockchain",
      image: "/static/portfolio/rice-blockchain.png",
      github: "RiceBlockchain",
      isDemo: true,
      demo: "https://riceblockchain.kunal.sh",
      description: (
        <div>
          The official website of the Rice Blockchain Club. <br /> Built with
          HTML, CSS, and jQuery.
        </div>
      ),
    },
    {
      title: "Wiess College",
      image: "/static/portfolio/teamwiess.png",
      github: "teamwiess2017",
      isDemo: false,
      demo: "http://www.teamwiess.com/",
      description: (
        <div>
          The Official website of Wiess College at Rice University. <br />
          Built with HTML, CSS, and jQuery.
        </div>
      ),
    },
    {
      title: "Task Timer",
      image: "/static/portfolio/task-timer.png",
      isDemo: true,
      github: "task-timer",
      demo: "",
      description: (
        <div>
          A desktop tray application that displays and counts down a timer for
          designated tasks in your task bar. Built with React, Redux, Electron,
          Webpack and Material UI.
        </div>
      ),
    },
  ];

  return (
    <>
      <h1>Recent Projects</h1>
      {projects.map(project => (
        <PorfolioItem {...project} key={project.title} />
      ))}
    </>
  );
};
const PorfolioItem = props => (
  <>
    <Row mt={6}>
      <Col>
        <a
          href={
            props.github
              ? `https://github.com/kunalgorithm/${props.github}`
              : props.demo
          }
          target="_blank"
          style={{ borderBottom: "none" }}>
          <Image src={props.image} />
        </a>
      </Col>
      <Col md="6" sm="12">
        <Heading py={2} as="h3">
          {props.title}
        </Heading>

        <Text py={2}>
          {props.github && (
            <a
              href={`https://github.com/kunalgorithm/${props.github}`}
              style={{ marginRight: "2em" }}
              target="_blank">
              <Github style={{ width: "15px" }} /> View on Github
            </a>
          )}

          {props.demo ? (
            <a href={props.demo} target="_blank">
              <Chrome style={{ width: "15px" }} />{" "}
              {props.isDemo ? "View Live Demo" : "Visit "}
            </a>
          ) : null}
        </Text>

        <Text py={2}>{props.description}</Text>
      </Col>
    </Row>
  </>
);
