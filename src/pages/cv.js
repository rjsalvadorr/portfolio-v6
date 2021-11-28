import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CurriculumVitaePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} className="cv-layout">
      <Seo title="CV" />
      <h1 className="page-title">CV</h1>
      <p>
        Enthusiastically mesh long-term high-impact infrastructures vis-a-vis
        efficient customer service. Professionally fashion wireless leadership
        rather than prospective experiences. Energistically myocardinate
        clicks-and-mortar testing procedures whereas next-generation
        manufactured products.
      </p>
      <p>
        Dynamically reinvent market-driven opportunities and ubiquitous
        interfaces. Energistically fabricate an expanded array of niche markets
        through robust products. Appropriately implement visionary e-services
        vis-a-vis strategic web-readiness.
      </p>
    </Layout>
  )
}

export default CurriculumVitaePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
