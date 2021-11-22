import * as React from "react"
import { Link } from "gatsby"

import cardPlaceholderImg from "../images/kitty-1.jpg"

const Card = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img className="card-image" src={cardPlaceholderImg} alt="navigation icon" />
      </div>
      <article
        className="post-list-item card-content"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </div>
  )
};

export default Card
