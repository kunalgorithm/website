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
      {/* <h4>{pages.length} Posts</h4> */}
      <Posts pages={pages} />
    </Layout>
  )
}

const Posts = ({ pages }) => (
  <div>
    {pages.map(({ node }) => (
      <Link
        key={node.id}
        to={node.fields.slug.replace(/\/$/, "")}
        className="blog-post-title"
      >
        <div>
          <h2 style={{ marginBottom: "5px" }} className="blog-post-title">
            {node.frontmatter.title}
          </h2>
          <span style={{ color: "#bbb", fontSize: "16px", marginTop: "0" }}>
            {node.frontmatter.date}
          </span>
          <p>{node.excerpt}</p>
        </div>
      </Link>
    ))}
  </div>
)

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
