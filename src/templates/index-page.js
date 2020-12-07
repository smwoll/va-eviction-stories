import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import EntryBanner from "../components/EntryBanner";

export const IndexPageTemplate = ({ title, subheading, description }) => (
  <div>
    <section className="mobile-cta">
      <a
        href="https://www.newvirginiamajority.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Take Action
      </a>
    </section>
    <main className="main-content">
      <div className="container">
        <div className="hero-wrapper">
          <div className="lead-text-box">
            <h1 className="heading">{title}</h1>
            <h2 className="subheading">{subheading}</h2>
          </div>
        </div>
        <div className="description-wrapper">
          <p>{description}</p>
        </div>

        <section className="blogroll-wrapper">
          <h2 className="section-heading">Latest stories</h2>
          <BlogRoll />
        </section>
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
      <EntryBanner />
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
