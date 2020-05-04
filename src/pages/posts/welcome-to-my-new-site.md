---
title: "Welcome to my new website 👋"
date: "2020-02-11"
draft: false
---

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

Then I copied over the default prism theme and made a few changes to the font-size, code-block padding, and colors

```css
/**
 * Modified from the prism.js default theme for JavaScript, CSS and HTML
 * found at node_modules/prismajs/themes/prism.css
 */

code[class*="language-"],
pre[class*="language-"] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 0.9em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.token.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
```

and added these to `gatsby-browser.js` under my global styles

```javascript
import "./src/styles/global.css"
import "./src/styles/prism.css"
```
