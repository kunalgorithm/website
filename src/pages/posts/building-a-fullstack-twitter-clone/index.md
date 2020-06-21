---
title: "Building a Fullstack Twitter Clone with Next.js and Prisma"
date: "2020-06-21"
draft: false
---

## Prerequisites

Before we get started, make sure you have node and [yarn](https://yarnpkg.com/) installed.

## Getting Started

First, create a new npm project

```bash
mkdir fullstack-twitter-clone
cd fullstack-twitter-clone
npm init -y
```

Now, add dependencies for [next.js](https://nextjs.org) and react, as well as some typed development dependencies

```bash
yarn add next react react-dom
yarn add --dev typescript @types/react @types/node
```

Now, we create our first page, using the designated `pages` directory that next.js uses for file-based routing

```bash
mkdir pages
touch pages/index.tsx
```

Then add the following component to our first page

```jsx
export default () => <div> hello, world! </div>
```

Now, run the next development server

```bash
npx next
```

and visit http://localhost:3000 to see our first component in action. We should have a barebones unstyled webpage with

```browser
hello, world!
```

## The backend

Now that our react code has the client up and running, let's use Next.js's API routes to write a backend handler in the designated `api` directory within `pages`

```bash
mkdir pages/api
```

Create a file, `feed.ts` within the `api` directory and create a simple function that returns a timestamp

```ts
export default (req, res) => res.json({ feed: [] })
```

Head to http://localhost:3000/api/feed and you should see some json within your browser with a datetime object.

```browser
{
"feed": []
}
```

Let's make this more interesting by adding some fake tweets to `feed.ts`

```ts
export default (req, res) => {
  const feed = [
    {
      text:
        "Wow not having to configure and transpile typescript is one of the best parts of next.js",
      author: "john",
    },
    {
      text:
        "I'm a firm believer that dark mode should be a universal default on the web",
      author: "jill",
    },
  ]
  res.json(feed)
}
```

## Put the two together

The real power with this approach is that we can write frontend and backend code in the same place, with the same language, and split the logic accordingly.

To pull them together, we query the new `api/feed` endpoint from the `pages/index.tsx` page, and show our list of tweets to the user.

We do this by calling the endpoint from the `getInitialProps` method. Change the content of `index.tsx` to

```ts
function Page({ feed }) {
  return <div>JSON.stringify(feed)</div>
}

Page.getInitialProps = async ctx => {
  const res = await fetch("http://localhost:3000/api/feed")
  const json = await res.json()
  return { feed: json }
}

export default Page
```

which will give us the same contents as the value of the json endpoint, demonstrating that the data is being retrived correctly. Now, we can change the `Page` component to render the data functionally

```jsx
const Page = ({ feed }) => {
  return (
    <div>
      {feed.map(tweet => (
        <div>
          <h4>{tweet.text}</h4>
          <span>{tweet.author}</span>
        </div>
      ))}
    </div>
  )
}
```

Which gives us

```browser

Wow not having to configure and transpile typescript is one of the best parts of next.js

john


I'm a firm believer that dark mode should be a universal default on the web

jill

```

plus a border around each of the tweets.

## Creating new tweets

Our twitter app won't work if all users can do is _read_ tweets, so we need to give them a way to create them too. Let's add a simple `input` and `form` within our page to allow users to add new tweets to the feed on the go.

```jsx
import { useState } from "react"

const Page = ({ feed: initialFeed }) => {
  const [input, setInput] = useState("")
  const [feed, setFeed] = useState(initialFeed)
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          setFeed([input, ...feed])
          setInput("")
        }}
      >
        <input value={input} onChange={e => setInput(e.target.value)}></input>
      </form>
      <div>
        {feed.map(tweet => (
          <div>
            <h4>{tweet.text}</h4>
            <span>{tweet.author}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

Be sure to test this on localhost to ensure you can spam your feed with every thought with which you desire.

Only problem is, now we need a way for:

1. Tweets to stick around if you refresh the browser or go take a nap.
2. Your friends on the same website to see all the stuff you're posting.

## Enter: sqlite + Prisma

Now that we've got our app working nicely on single-player single-sesion instances, we need to make it immune to the effects of time and refreshes by storing all of our users' data in a database. We do this by bringing in our old friend, **the database**. With it, we'll use [Prisma](https://prisma.io) to handle the datamodel, access the data, and give us type safety throughout the application.

We start by adding prisma to our project

```bash
yarn add --dev @prisma/cli
```

Then initialize the prisma project with

```bash
npx prisma init
```

You'll notice that a `prisma` directory was created, and within it a `schema.prisma` file and a `.env`. You can ignore the latter for now, since we'll be using sqlite to get started and prototype faster, and switching to postgres later as we prepare for deployment.

To configure prisma to use sqlite and to point the prisma client to a local sqlite file on your machine, update the datasource and client attributes within `schema.prisma`

```prisma
datasource sqlite {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native"]
}
```

Now, we can add a model for new tweets

```prisma

model Tweet {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
  text     String
}
```

When creating a tweet, the `id` will be automatically generated and assigned an integer, starting from 1 and incrementing from there, and the `createdAt` and `updatedAt` fields will automatically be filled with timestamps at the moment of creation. So, all we need to do is pass a valid string into the `text` field, and we'll have created our first `Tweet` entry.

So, we can create a tweet with

```ts
const tweet = await prisma.tweet.create({ data: { text: "Hello, Twitter!" } })
```

Now let's put this to use to allow users to create tweets.

### Generate the prisma client

> at the time of writing, prisma migrate is still an experimental feature and should not be used on production. Instead, consider using [Hasura](https://hasura.io) to create, update, and manage tables.
>
> Now that we have our schema file set up, we can create the sqlite database file, run the migration to create the new table, and then generate the prisma client to create and access tweets.

First, we create the sqlite file and save the migration using `prisma migrate`

```
npx prisma migrate save --experimental
```

Respond **Yes** when asked if you'd like to create a new sqlite file, then give your migration a name, like "Create tweet model". Then, we run the migration against our database

```
npx prisma migrate up --experimental
```

Finally, we can generate the prisma client, which lives in the `node_modules` directory and is generated on the fly (usually in a postintall hook) to give us up-to-date typesafe access to our data.

Create the client by running

```bash
npx prisma generate
```

Which peaks into our schema file for the models defined, generates the client in `node_modules/@prisma/client` and concludes with some output dictating exactly how we can use it in our code.

### Actually creating tweets

Within the `api` directory, create another directory `tweet`, and within that `create.ts`. This will be another backend serverless function that takes some `text` and gives us back a tweet object.

```ts
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (req, res) => {
  const tweet = await prisma.tweet.create({ data: { text: req.body.text } })
  res.json(tweet)
}
```

Notice that we are assuming the `text` to be attached to the body of the request. Let's make this code a bit more robust to suboptimal usage, like creating empty tweets, by adding a few lines to check the request body at the beginning of the function

```diff
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (req, res) => {
+ if (!req.body) {
+    res.status(400).json({ error: "❌ Tweets cannot be empty " });
+    return;
+  }
  const tweet = await prisma.tweet.create({ data: { text: req.body.text } })
  res.json(tweet)
}
```

Now, lets try calling this function from our frontend. After the call to `setFeed` in our index page, add

```ts
fetch(`http://localhost:3000/api/tweet/create`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: input }),
})
```

Now, try creating another tweet in the browser and head to the **Network** tab of the console to see the results. You should see a request titled **create**, after the suffix of the endpoint, and click it to view the resposne. If the response worked, you'll see a response JSON object with an `id`, `createdAt`, and `text` fields.

## Feed 2.0

Now that we can create tweets in our database, let's change our feed API function to retrieve tweets from the database instead of giving us back hardcoded data. Open `pages/api/feed.ts` and change the contents to

```ts
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (req, res) => {
  const tweets = await prisma.tweet.findMany({})
  res.json(tweets)
}
```

and you'll now be able to create tweets, refresh the page, and see them live on.

One last detail: change the prisma call in the feed to

```ts
const tweets = await prisma.tweet.findMany({
  orderBy: { createdAt: "desc" },
})
```

To return them in chronological order.

## To be continued...

with sections on authentication, deployment, style, and use of types in the frontend. Also, I'll include a demo app and repository 🙂
