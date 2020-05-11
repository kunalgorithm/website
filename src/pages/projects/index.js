import React from "react"

import { FaGithub, FaChrome } from "react-icons/fa"
import { css } from "@emotion/core"
import Layout from "../../components/Layout"
//@ts-ignore
import Asteroids from "./portfolio/asteroids-small.gif"
//@ts-ignore
import GraphQLFullStack from "./portfolio/graphql-fullstack.gif"
//@ts-ignore
import GraphQLAuthServer from "./portfolio/graphql-auth-server.png"
//@ts-ignore
import HackerNews from "./portfolio/hackernews-clone.png"
//@ts-ignore
import MovieConverter from "./portfolio/movie-converter.png"
//@ts-ignore
import WiessCollege from "./portfolio/teamwiess.png"
//@ts-ignore
import RiceBlockchain from "./portfolio/rice-blockchain.png"
//@ts-ignore
import TaskTimer from "./portfolio/task-timer.png"
// TODO: add medicalbills.fyi, found ?

const projects = [
  // {
  //   title: "Snailsheet",

  //   demo: "https://snailsheet.com/",
  //   isDemo: false,
  //   image: "/portfolio/snailsheet.png",
  //   description: <div>Send snail mail straight from Google Drive.</div>,
  // },
  {
    title: "Asteroids",
    github: "asteroids",
    demo: "https://asteroids.live/",
    isDemo: true,
    image: Asteroids,
    description: <div>Asteroids in your browser.</div>,
  },
  {
    title: "Graphql FullStack",
    github: "graphql-fullstack",
    isDemo: true,
    image: GraphQLFullStack,
    description: (
      <div>
        Deploy a fullstack web application on serverless with cutting-edge
        tooling in 60 seconds.
      </div>
    ),
  },
  // {
  //   title: "Cosign",

  //   demo: "https://cosign.co",
  //   isDemo: false,
  //   image: "portfolio/cosign-profile2.png",
  //   description: <div>A peer-to-peer credentialing network.</div>,
  // },
  // {
  //   title: "Via",

  //   demo: "https://via.beondeck.com/",
  //   isDemo: false,
  //   image: "portfolio/via.png",
  //   description: (
  //     <div>Get referred to breakout companies via top investors.</div>
  //   ),
  // },
  {
    title: "Graphql Authentication Server",
    github: "graphql-auth-server",
    demo: "https://graphql-auth-server.now.sh/",
    isDemo: true,
    image: GraphQLAuthServer,
    description: (
      <div>
        A Graphql authentication server boilerplate built on node and express
        that allows users to sign up with a username and password and create
        their own data.
      </div>
    ),
  },

  {
    title: "Hackernews Clone",
    image: HackerNews,
    github: "hackernews-clone",
    isDemo: true,
    demo: "",
    description: (
      <div>
        Node.js GraphQL app with a database later built on top of{" "}
        <a href="https://prisma.io">Prisma</a>. The client is bootstrapped with{" "}
        <code>create-react-app</code> and uses{" "}
        <a href="https://github.com/apollographql">Apollo</a> to interface with
        the server.
        <br />
        It's a hackernews clone, naturally.
      </div>
    ),
  },
  {
    title: "Movie Converter",
    image: MovieConverter,
    github: "electron-movie-converter",
    demo: "",
    description: (
      <div>
        A desktop application that converts videos on your desktop into a format
        of your choice. Built with Electron, React, Redux, Webpack, and Babel.
      </div>
    ),
  },

  {
    title: "Rice Blockchain",
    image: RiceBlockchain,
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
    image: WiessCollege,
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
    image: TaskTimer,
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
]

export default function Projects() {
  return (
    <Layout title="Projects">
      <h1>Projects</h1>

      <div>
        {projects.map(project => (
          <PorfolioItem {...project} key={project.title} />
        ))}
      </div>
    </Layout>
  )
}

const PorfolioItem = props => (
  <div>
    <div>
      <h2>{props.title}</h2>
      <div>
        <div style={{ paddingBottom: "3px" }}>{props.description}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <br></br>
          {props.github && (
            <a
              href={`https://github.com/kunalgorithm/${props.github}`}
              style={{
                marginRight: "2em",
                display: "flex",
                alignItems: "center",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ width: "35px", marginRight: "3px" }} /> View on
              Github
            </a>
          )}

          {props.demo ? (
            <a
              href={props.demo}
              style={{
                display: "flex",
                alignItems: "center",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaChrome style={{ width: "35px", marginRight: "3px" }} />{" "}
              {props.isDemo ? " View Live Demo" : " Visit"}
            </a>
          ) : null}
        </div>
      </div>
    </div>
    <div
      css={css`
        img {
          height: 400px;
        }
      `}
    >
      <a
        href={
          props.github
            ? `https://github.com/kunalgorithm/${props.github}`
            : props.demo
        }
        target="_blank"
        rel="noopener noreferrer"
        style={{ borderBottom: "none" }}
      >
        <img
          src={props.image}
          className="img-centered"
          alt={props.name}
          style={{ marginTop: "15px" }}
        />
      </a>
    </div>
  </div>
)
