import React from "react";

import Layout from "../../components/Layout";
import StoriesRoll from "../../components/StoriesRoll";

export default class StoriesIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title">Latest Stories</h1>
            <div className="content">
              <StoriesRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
