---
title: "Next Routes vs Express"
date: "2020-06-25"
draft: false
---

Using Next.js API routes is a (rather new) way of writing backend code that I'm convince is worth adopting. They make it easier to create backend node handlers with considerably less boilerplate.

Namely, using an API route (which are available outside the next.js framework as well, as Vercel serverless functions), automatically handle parsing a request's body, cookies, and query parameters.

At bare minimum, you can use one by creating a new file in the `pages/api` called `index.js` which contains

```js
export default (req, res) => res.json({ data: "hello, world!" })
```

Then run the development server with `npx next` and view the json resposne in the browser at http://localhost:3000/api/

You can also use typescript using next's `NextApiRequest` and `NextApiResponse` interfaces. Change the filename to `index.ts` and use

```ts
import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ data: "hello, world!" })
}
```

Using typescript will allow the editor to autocomplete access to the helper methods on `req`: `cookies`, `body`, and `query`.
