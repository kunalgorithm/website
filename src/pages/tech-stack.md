---
title: "Tech Stack"
date: "2019-04-08"
---

This documents all of the technical tools I use to build applications. My current technology stack is composed of:

- Web
  - [React](https://reactjs.org) for composable UI components.
  - [Next](https://nextjs.org) for server-side rendering, hot-reloading in development, file-system routing and automatic code-splitting.
  - [Typescript](https://www.typescriptlang.org/) for modern syntactical features and type-checking component `props` .
- Web Styles
  - [Emotion](https://emotion.sh/) for styles CSS-in-JS.
  - [Smooth UI](https://smooth-ui.smooth-code.com/) for `Grid`, `Row`, and `Col`.
  - [Styled Icons](https://styled-icons.js.org/) for icons.
  - [Reactstrap](https://reactstrap.github.io/) for `Modal`, `Form`, and `Input`.
- Mobile: React Native + Typescript + React Apollo bootstrap with [typescript-expo-apollo-boilerplate](https://github.com/dai-shi/typescript-expo-apollo-boilerplate) and styled with [UI Kitten](https://github.com/akveo/react-native-ui-kitten).
- API: [GraphQL](https://graphql.org) [Apollo](https://www.apollographql.com) server built with [Node.js](https://nodejs.org) and deployed to [render](https://render.com).
- Database: [Prisma](https://prisma.io) server and MySQL on [AWS Fargate and RDS](https://www.prisma.io/tutorials/deploy-prisma-to-aws-fargate-ct14) .

## Front End

---

I particularly enjoy front-end web development because it allows me to
operate simultaneously as a developer, designer, and product manager.

### ⭐️ [React](https://reactjs.org)

React is great framework to learn just because of it's enormous
popularity. However, I've found that once you get through the horrific
uphil battle of learning how to <i>think in react</i>, it's built-in
composability makes constructing complex single-page applications an
absolute delight.

⭐️ [`create-react-app`](https://github.com/facebook/create-react-app)

My go-to production-ready scaffolding tool for react projects. The zero configuration set up is invaluable, and I avoid `ejecting` the app whenever possible.
Use `npx create-react-app <app-name>` for action; plus `--typescript` if you want type-safe action.

Other Tools: I've used [Vue](https://vuejs.org/) sparingly at hackathons.
Less experience with [Angular](https://angular.io/).

### ⭐️ [Next](https://nextjs.org)

Another zero-configuration tool built by the [ZEIT](https://zeit.co) team for server-rendered react applications. Works like a charm with [Now](https://zeit.co/now).

## Styles

---

### ⭐️ [Emotion](https://emotion.sh)

If you love React, you'll love styled-components. Allows you to painlessly attach CSS styles to components without worrying about duplicate/mispelled/conflicting classnames and makes dynamic styles easier than ever.

### [Rebass](https://rebassjs.org/)

## API

---

### ⭐️ [GraphQL](https://graphql.org)

GraphQL is an API specification by Facebook that is kind of like REST, but better. It allows you to transfer data through a single endpoint by using structured queries to request and deliver data with precision. This liberates backend developers to focus on business logic and frontend developers to manage and display data.

It appears to me that GraphQL's greatest value proposition is allowing clients to query data without needing any knowledge about the server's configuration. It truly enables schema-driven development.

## Server

---

### ⭐️ [Node](https://nodejs.org)

My preference for node is motivated by

1.  the enormous NPM community and abundance of open source software.
2.  My familiarity with Javascript, having used it abundantly in React development.

### [Flask](http://flask.pocoo.org/)

Python web framework that I used at both of my previous startups. Works well, but gets frustratingly redundant to create, configure, and maintain endpoints for new slices of data.

### [Vulcan](https://vulcanjs.org)

Perhaps the most promising and comprehensive full-stack Javascript framework that ties together all of the latest JS technologies: GraphQL, React, Meteor, and more. VulcanJS seems to be the fastest way and most seamless way to build an by focusing almost entirely on what makes it unique and abstracting away almost everything else. The instagram clone example app is the perfect demonstration, and their Youtube Channel is invalueble in getting started.

## Data

---

### ⭐️ [Prisma](https://prisma.io)

Next-generation ORM and database-as-a-service with astonishingly pleasant data modeling, migrations, and management. Works with node and typescript, and a few other frameworks. Highly recommend following the Node tutotrial at [How To GraphQL](https://howtographql.com) to get started.

### [Mongoose](https://mongoosejs.org)

Dependable choice for prototyping side-projects on top of MongoD and my ORM of choice for side projects with straightforward schemas.

### [SQLalchemy](https://www.sqlalchemy.org/)

The default ORM to use with flask and python. Works as expected.

## Deploy

---

### ⭐️ [`Now`](https://zeit.co/now)

Discovering and using `now` is an absolute delight for front-end projects, so much so that I find myself fervently opposed to almost every other tool. Just type in `now` and you'll immediately deploy an https-secured, immutable instance of your applicaiton on the global CDN.

However, I've moved away from deploying backend web services to now, finding the start-up latency issues of serverless deployments too slow to bear.
Alternatives: [Surge](https://surge.sh/), [Netlify](https://www.netlify.com/).

### ⭐️ [Render](https://render.com)

So easy, it makes me wonder why I had ever previously entertained Heroku or AWS. Create a repo, connect Render to Github, push to master, and BAM you have a working deployment that updates with every pull request. Alternatives: [Heroku](https://dashboard.heroku.com/), [AWS](https://aws.amazon.com/).
