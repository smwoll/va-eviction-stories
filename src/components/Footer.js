import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-logo-wrapper">
          <AniLink
            cover
            bg="#ec1212"
            direction="up"
            to="/"
            className="navbar-item"
          >
            <img
              src={logo}
              alt="Stop Evictions Virginia Logo"
              className="footer-logo"
            />
          </AniLink>
        </div>
        <div className="content">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
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
                        Home
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
                        to="/products"
                      >
                        Products
                      </AniLink>
                    </li>
                    <li>
                      <AniLink
                        cover
                        bg="#ec1212"
                        className="navbar-item"
                        to="/contact/examples"
                      >
                        Form Examples
                      </AniLink>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="social-icons">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
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
