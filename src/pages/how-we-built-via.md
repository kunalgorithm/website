---
title: "How We Built Via"
date: "2020-01-01"
draft: true
---

Our technical stack and why we chose it.

This week we rolled out the most recent iteration of [Via](https://via.beondeck.com) and on boarded over 50 investors who are most eagerly waiting to use our product to refer talent to their portfolio companies. 
Since our product team is quite small (Julian Weisser, Emma Salinas and myself), our technology stack and engineering process has been crucial to our ability to build, deploy, and iterate upon our application. This post details the reasoning behind technical decisions, the mistakes we've made and what we've learned from them, and some general advice for other scrappy startups and product teams.

## Overview 

We have two applications and corresponding repositories: 
A frontend Next.js react app with a custom express server for dynamic routing using next-routes.
A backend node.js graphQL API integrating with Prisma.

Both apps are hosted on render.

## UI 

We originally bootstrapped our application using create-react-app, the no-configuration abstractions of which made building composable UI on the web an absolute breeze. 
We later realized however, that our app needed to dynamically generate <meta> tags for title and og:image, among others, for individual connector's pages. This would allow custom previews for each page. For example, when I send an iMessage linking to my Medium profile, it shows a preview of my profile like so:

![Via Twitter Preview](/via-twitter-preview.png)

Similarly, we wanted a user's profile on Via to display the user's name and image, as so

![Via Profile Preview](/via-profile-preview.png)

Unfortunately, since create-react-app is a client-side framework, none of the app's code would run when a link is a shared. Thus, we began to migrate our app to a server-side react framework and ultimate decided upon Next.js due to its popularity and extensive documentation.

## Retrieving Data

We query and post data to our GraphQL API (described in the next section) using Apollo client, which makes reading and writing data to our server as easy as specifying what data your webpage requires, in accordance with the schema specification.

To load a connector's profile and list of companies, for example, you just pass

```graphql
connector {
  name
  email
  ...
  portfolio {
   comapny_name
   company_website
   ...
 }
}
```

To the Query component from apollo-graphql and you're returned error , loading , and data to use to render the data. 
To write data, you need only pass a similar query to a Mutation component and a set of variables .

## Server
