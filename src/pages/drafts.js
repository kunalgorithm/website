import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout"

export default ({ data }) => {

  if (process.env.NODE_ENV === "production")
    return (
      <Layout title="Drafts">
        <div>This page is only visible on development.</div>
      </Layout>
    )

  const drafts = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.draft && node.frontmatter.date
  )
  return (
    <Layout title="Drafts">
      <div>
        <h4>{drafts.length} Drafts</h4>
        {drafts.map(({ node }) => (
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
            date(formatString: "DD MMMM, YYYY")
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
