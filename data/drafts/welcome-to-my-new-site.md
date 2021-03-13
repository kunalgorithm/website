---
title: "Welcome to my new website 👋"
date: "2020-02-11"
draft: true
---

> Update: I recently implemented dark mode with [Ant Design](https://ant.design) and am thrilled with the results.

I built and styled this site by following the official [Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/) and you can find the source code in it's entirety on [github](https://github.com/kunalgorithm/kunal.sh).

My previous site was built with [`nextjs-mdx-blog-kit`](https://github.com/lorenseanstewart/nextjs-mdx-blog-kit), which allowed embedding react components within markdown posts using [MDX](https://mdxjs.com). Although this was wonderfully expressive, I found that being able to context switch between writing and coding compelled me to spend far more time context switching between the two than actually focusing on either one. Consequently, I turned to pure markdown for my writing.

I also considered Wordpress, Ghost, Contentful, Medium, and other content management systems; primarily because they'd be further conducive to focus, but ultimately decided against giving up granualar control of my content and the build process, and severing my understanding of what was powering my website under the hood. Gatsby served as the ideal balance between the two.

Also, I'm using [PrismJS](https://prismjs.com/) as a custom codeblock editor to enable cool highlighting features like this

```javascript
const pages = data.allMarkdownRemark.edges.filter(
  ({ node }) => !node.frontmatter.draft
)
```

> Read: [Add PrismJS to Gatsby using `gatsby-remark-prism`](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)

Then I copied over the default prism theme and made a few changes to the font-size, code-block padding, and colors. Finally, I imported global styles, the ant design dark theme, and prismJS's tomorrow-night theme CSS files in `gatsby-browser.js`

```js
import "./src/styles/global.css"
import "antd/dist/antd.dark.css"
import "prismjs/themes/prism-tomorrow.css"
```

## Building a personal website?

Send me a note if you'd like to bounce ideas! Also, you can find the source code of this website [here](https://github.com/kunalgorithm/kunal.sh).

✌🏽
