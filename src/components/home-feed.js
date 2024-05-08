import * as React from "react"

import Card from "./card"

const HomeFeed = ({ posts }) => (
  <div className="home-feed">
    {posts.map(post => {
      let returnComp = null;
      if (!post.frontmatter.draft) {
        returnComp = <Card post={post} key={post.fields.slug} />;
      }
      return returnComp;
    })}
  </div>
)

export default HomeFeed
