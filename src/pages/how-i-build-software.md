---
title: "How I Build Software"
date: "2019-04-08"
---

_Updated on February 20, 2020_

One of the most frequent conversations I have with other engineers is that in response to "What's your tech stack?". This post is an attempt to put my response in one place, with links and occasional code snippets to demonstrate what I mean.

## API

- [GraphQL](https://graphql.org) [Apollo](https://www.apollographql.com) server built with [Node.js](https://nodejs.org) and deployed to [render](https://render.com).
- I often bootstrap backend projects using the [typescript-graphql-server](https://github.com/graphql-boilerplates/typescript-graphql-server) advanced boilerplate (with authentication and authorization) using `graphql create my-app --boilerplate typescript-advanced`
- Database: [Prisma](https://prisma.io) server and MySQL on [AWS Fargate and RDS](https://www.prisma.io/tutorials/deploy-prisma-to-aws-fargate-ct14) .
  - I'm eagerly awaiting the stable release of [Prisma 2](https://isprisma2ready.com).

## Web

- [React](https://reactjs.org) for composable UI components, typically bootstrapped with `create-react-app`.
- [Gatsby](https://gatsbyjs.org) for static site development, including this site.
- [Next](https://nextjs.org) for server-side rendering, hot-reloading in development, file-system routing and automatic code-splitting. Works like a charm with `now`.
- [Typescript](https://www.typescriptlang.org/) for modern syntactical features and type-checking component `props` .

## Web Styles

- [Emotion](https://emotion.sh/) for styles CSS-in-JS.
- [Smooth UI](https://smooth-ui.smooth-code.com/) for `Grid`, `Row`, and `Col`.
- [Styled Icons](https://styled-icons.js.org/) for icons.
- [Reactstrap](https://reactstrap.github.io/) for `Modal`, `Form`, and `Input`.

## Mobile

- React Native + Typescript + React Apollo bootstrap with [typescript-expo-apollo-boilerplate](https://github.com/dai-shi/typescript-expo-apollo-boilerplate) and styled with [UI Kitten](https://github.com/akveo/react-native-ui-kitten).

## Deploy

- [Now](https://zeit.co/now): Discovering and using `now` is an absolute delight for front-end projects, so much so that I find myself fervently opposed to almost every other tool. Just type in `now` and you'll immediately deploy an https-secured, immutable instance of your application on the global CDN. However, I've moved away from deploying backend web services to now, finding the start-up latency issues of serverless deployments too slow to bear.
  Alternatives: [Surge](https://surge.sh/), [Netlify](https://www.netlify.com/).

- ⭐️ [Render](https://render.com): So easy, it makes me wonder why I had ever previously entertained Heroku or AWS. Create a repo, connect Render to Github, push to master, and BAM you have a working deployment that updates with every pull request. Alternatives: [Heroku](https://dashboard.heroku.com/), [AWS](https://aws.amazon.com/).
