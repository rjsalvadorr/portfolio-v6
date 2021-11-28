import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../../components/layout';
import DynamicGrid from '../../components/visualizations/dynamic-grid';

const featWrapStyle = {
  position: 'absolute',
  // zIndex: 1000,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

class DynamicGridFeature extends React.Component {
  render () {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="featureWrapper" style={featWrapStyle}>
          <DynamicGrid />
        </div>
      </Layout>
    );
  }
}

export default DynamicGridFeature;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
