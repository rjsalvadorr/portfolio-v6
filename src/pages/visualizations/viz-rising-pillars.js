import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../../components/layout';
import RisingPillars from '../../components/visualizations/rising-pillars';

class RisingPillarsFeature extends React.Component {
  render () {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="featureWrapper">
          <RisingPillars />
        </div>
      </Layout>
    );
  }
}

export default RisingPillarsFeature;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
