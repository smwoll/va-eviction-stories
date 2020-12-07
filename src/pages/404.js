import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>404 - NOT FOUND</h1>
      <p>Our apologies, the page you're looking for doesn't appear to exist.</p>
      <p>
        <Link to="/">Return home.</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
