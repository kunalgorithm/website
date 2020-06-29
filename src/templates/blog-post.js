import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <div style={{ marginBottom: "1rem" }}>
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
            `}
          >
            {!post.frontmatter.draft && post.frontmatter.date}
          </span>
        </div>
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
        date(formatString: "MMMM DD, YYYY")
        draft
      }
      excerpt
    }
  }
`
