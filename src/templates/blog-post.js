import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1
          css={css`
            margin-bottom: 0.2rem;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <span
          css={css`
            color: #bbb;
            margin-bottom: 2rem;
          `}
        >
          {!post.frontmatter.draft && post.frontmatter.date}
        </span>
        <br />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        draft
      }
      excerpt
    }
  }
`
