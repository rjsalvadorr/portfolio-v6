import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} className="page-layout about-layout">
      <Seo title="About Me" />
      <MDXRenderer>{data.allMdx.nodes[0].body}</MDXRenderer>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  allMdx(filter: { frontmatter: { slug: { eq: "about" } } }) {
    nodes {
      body
    }
  }
}
`
