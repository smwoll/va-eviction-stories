import React from "react";

import Layout from "../../components/Layout";
import ResourceRoll from "../../components/ResourceRoll";

export default class HelpIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1 className="title">Get Help</h1>
            <p>This is the description for the help and resources feed page.</p>
            <div className="help-resource-wrapper">
              <ResourceRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
