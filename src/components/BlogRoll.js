import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import AniLink from "gatsby-plugin-transition-link/AniLink";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="blogroll-grid">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className={`card blog-list-item ${
                post.frontmatter.featuredpost ? "featured" : ""
              }`}
              key={post.id}
            >
              <article>
                <header>
                  {post.frontmatter.featuredimage ? (
                    <AniLink
                      cover
                      bg="#ec1212"
                      to={post.fields.slug}
                      className="featured-thumbnail"
                    >
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </AniLink>
                  ) : null}
                  <p className="post-meta">
                    <AniLink
                      cover
                      bg="#ec1212"
                      className="title"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </AniLink>

                    <span className="date">{post.frontmatter.date}</span>
                  </p>
                </header>
                <p>{post.excerpt}</p>
                <AniLink
                  cover
                  bg="#ec1212"
                  className="read-more"
                  to={post.fields.slug}
                >
                  Read more →
                </AniLink>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
