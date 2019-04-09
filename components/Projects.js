import React from "react";

import styled from "styled-components";
import { Box, Card, Image, Heading, Text } from "rebass";
import { Grid, Row, Col } from "@smooth-ui/core-sc";
import { Github } from "styled-icons/fa-brands/Github";
import { Chrome } from "styled-icons/fa-brands/Chrome";

export default props => {
  const projects = [
    {
      title: "Graphql Authentication Seriver",
      github: "graphql-auth-server",
      demo: "https://graphql-auth-server.now.sh/",
      image: "/static/portfolio/graphql-auth-server.png",
      description: (
        <div>
          A Graphql authentication server boilerplate built on node and express
          that allows users to sign up with a username and password and create
          their own data. The <code>User</code> object is structured using{" "}
          <a href="https://mongoosejs.org">Mongoose</a> and the password is
          hashed and salted using brypt. All data is stored in a database
          specified by <code>process.env.DATABASE_URL</code>.
        </div>
      )
    },
    {
      title: "React Hooks Demo App",
      image: "/static/portfolio/react-hooks.png",
      github: "react-hooks",
      demo: "https://react-hooks.now.sh/",
      description: (
        <div>
          A <code>create-react-app</code> demonstrating the use the stateful
          operations in React without defining <code>Class</code> Components by
          using the recent{" "}
          <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>
          API proposal in React 16.7.0-alpha.
        </div>
      )
    },
    {
      title: "Hackernews Clone",
      image: "/static/portfolio/hackernews-clone.png",
      github: "hackernews-clone",
      demo: "",
      description: (
        <div>
          <a href="https://graphql.org/">GraphQL</a>, a relatively new API
          specification by Facebook, has been getting all the hype lately. I
          wanted to know what all the fuss was about, so I built a fullstack
          javascript application using popular GraphQL libraries.
          <br />
          The server is built with a NodeJS GraphQL application layer that
          interfaces with a distinct database layer API, built on top of and
          hosted by <a href="https://prisma.io">Prisma</a>. The client is
          bootstrapped with <code>create-react-app</code> and uses the
          <a href="https://github.com/apollographql">
            Apollo Client for Javascript
          </a>
          to send and receive data to and from the backend.
          <br />
          It's a hackernews clone, naturally.
        </div>
      )
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
      )
    },

    {
      title: "Rice Blockchain",
      image: "/static/portfolio/rice-blockchain.png",
      github: "RiceBlockchain",
      demo: "https://riceblockchain.kunal.sh",
      description: (
        <div>
          The official website of the Rice Blockchain Club. <br /> Built with
          HTML, CSS, and jQuery.
        </div>
      )
    },
    {
      title: "Wiess College",
      image: "/static/portfolio/teamwiess.png",
      github: "teamwiess2017",
      demo: "http://www.teamwiess.com/",
      description: (
        <div>
          The Official website of Wiess College at Rice University. <br />
          Built with HTML, CSS, and jQuery.
        </div>
      )
    },
    {
      title: "Task Timer",
      image: "/static/portfolio/task-timer.png",
      github: "task-timer",
      demo: "",
      description: (
        <div>
          A tray application that displays and counts down a timer for
          designated tasks in your task bar. A tray application for Mac OS X,
          Windows, and Linux that displays and counts down a timer in your task
          bar for designated tasks. Built with React, Redux, Electron, Webpack
          and Material UI.
        </div>
      )
    }
  ];

  return (
    <Grid>
      <h2>Recent Projects</h2>
      {projects.map(project => (
        <PorfolioItem {...project} key={project.name} />
      ))}
    </Grid>
  );
};
const PorfolioItem = props => (
  <>
    <Row mt={6}>
      <Col>
        <a
          href={`https://github.com/kunalgorithm/${props.github}`}
          target="_blank"
          style={{ borderBottom: "none" }}
        >
          <Image src={props.image} />
        </a>
      </Col>
      <Col md="8" xs="12">
        <Heading py={2} as="h3">
          {props.title}
        </Heading>

        <Text py={2}>
          <a
            href={`https://github.com/kunalgorithm/${props.github}`}
            target="_blank"
          >
            <Github style={{ width: "15px" }} /> View on Github
          </a>
          {"   "}
          {props.demo ? (
            <a href={props.demo} target="_blank" style={{ marginLeft: "2em" }}>
              <Chrome style={{ width: "15px" }} /> View Live Demo
            </a>
          ) : null}
        </Text>

        <Text py={2}>{props.description}</Text>
      </Col>
    </Row>
  </>
);
