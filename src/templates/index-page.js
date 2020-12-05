import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({ title, subheading, description }) => (
  <div>
    <div className="hero-wrapper">
      <div className="lead-text-box">
        <h1 className="heading">{title}</h1>
        <h3 className="subheading">{subheading}</h3>
      </div>
    </div>
    <main className="main-content">
      <div className="container">
        <div className="description-wrapper">
          <p>{description}</p>
        </div>

        <div className="blogroll-wrapper">
          <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
          <BlogRoll />
        </div>
      </div>
    </main>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        description
      }
    }
  }
`;
