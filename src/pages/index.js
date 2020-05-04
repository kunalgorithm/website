import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout"

export default ({ data }) => {
  const pages = data.allMarkdownRemark.edges.filter(
    ({ node }) => !node.frontmatter.draft
  )
  return (
    <Layout title="Home">
      <div>
        <h4>{pages.length} Posts</h4>
        {pages.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug.replace(/\/$/, "")}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            draft
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
