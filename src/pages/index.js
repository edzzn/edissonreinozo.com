import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const IndexPageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Artículos Recientes</h1>
      <ul>
        {articles.map(articles => (
          <li>
            <Link to={articles.node.fields.path}>
              {articles.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}
export default IndexPage
