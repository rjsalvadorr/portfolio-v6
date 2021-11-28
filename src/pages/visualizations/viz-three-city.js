import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../../components/layout';
import ThreeCity from '../../components/visualizations/three-city';
// import vizStyles from '../../styles/visualizations.module.css';

class ThreeCityFeature extends React.Component {
  render () {
    const {data} = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="featureWrapper">
          <ThreeCity />
        </div>
      </Layout>
    );
  }
}

export default ThreeCityFeature;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
