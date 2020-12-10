import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import NVMlogo from "../img/NVM-logo.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-lead-text">
          <AniLink
            cover
            bg="#ec1212"
            direction="up"
            to="/"
            className="navbar-item"
          >
            <span>No&nbsp;</span>
            <span>person&nbsp;</span>
            <span>should&nbsp;</span>
            <span>be&nbsp;</span>
            <span>evicted&nbsp;</span>
            <span>during&nbsp;</span>
            <span>a&nbsp;</span>
            <span>pandemic.&nbsp;</span>
          </AniLink>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="footer-cta">
              <a className="cta-button" href="#">
                Take Action
              </a>
            </div>
            <div style={{ maxWidth: "100vw" }} className="footer-blocks">
              <div className="footer-menu">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <AniLink
                        cover
                        bg="#ec1212"
                        to="/"
                        className="navbar-item"
                      >
                        Stories
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        cover
                        bg="#ec1212"
                        className="navbar-item"
                        to="/about"
                      >
                        About
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        cover
                        bg="#ec1212"
                        className="navbar-item"
                        to="/help"
                      >
                        Get Help
                      </AniLink>
                    </li>
                    <li>
                      <a href="/">Privacy Policy</a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="footer-credit">
                <p>Paid for by New Virginia Majority.</p>
              </div>
              <div className="NVM-logo">
                <a
                  href="https://www.newvirginiamajority.org/"
                  target="_blank"
                  title="New Virginia Majority Website"
                  rel="noopener noreferrer"
                >
                  <img src={NVMlogo} alt="New Virginia Majority Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
