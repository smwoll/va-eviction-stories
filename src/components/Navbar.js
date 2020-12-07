import React from "react";
import logo from "../img/logo.svg";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <button
              name="Navigation Menu Toggle"
              className={`navbar-toggler ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <AniLink
              cover
              direction="up"
              bg="#ec1212"
              to="/"
              className="nav-logo"
              title="Logo"
            >
              <img src={logo} alt="Stop Evictions Virginia Logo" />
            </AniLink>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-links">
              <AniLink
                cover
                bg="#ec1212"
                className="navbar-item"
                activeClassName="active"
                to="/"
              >
                Stories
              </AniLink>
              <AniLink
                cover
                bg="#ec1212"
                className="navbar-item"
                activeClassName="active"
                to="/about"
              >
                About
              </AniLink>

              <AniLink
                cover
                bg="#ec1212"
                className="navbar-item"
                activeClassName="active"
                to="/help"
              >
                Get Help
              </AniLink>
              <AniLink
                cover
                bg="#ec1212"
                className="navbar-item sub-item"
                activeClassName="active"
                to="/help"
              >
                Legal Help
              </AniLink>
              <AniLink
                cover
                bg="#ec1212"
                className="navbar-item sub-item"
                activeClassName="active"
                to="/help"
              >
                Housing Justice
              </AniLink>
              <AniLink
                cover
                bg="#ec1212"
                className="navbar-item sub-item"
                activeClassName="active"
                to="/help"
              >
                VPLC
              </AniLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
