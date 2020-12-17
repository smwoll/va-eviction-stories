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
            </div>
          </div>
          <div className="nav-news">
            <h2>Latest Headlines</h2>
            <ul>
              <li>
                <a
                  href="https://www.bloomberg.com/news/articles/2020-12-16/more-americans-are-too-sick-to-work-as-virus-cases-surge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Americans Are Too Sick to Work as Virus Cases Surge
                </a>
              </li>
              <li>
                <a
                  href="https://richmond.com/news/state-and-regional/govt-and-politics/northams-budget-plan-protects-school-funding-pushes-teacher-pay-raises-and-adds-to-cash-reserve/article_e7ed7af1-fa94-5ccc-a525-642f74f532dc.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More money is good, but this is nowhere near enough.
                </a>
              </li>
              <li>
                <a
                  href="https://www.publicnewsservice.org/2020-12-16/childrens/pandemic-widens-racial-gap-in-meeting-va-families-basic-needs/a72492-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pandemic Widens Racial Gap in Meeting VA Families' Basic Needs
                </a>
              </li>
              <li>
                <a
                  href="https://www.politico.com/news/2020/12/15/louisville-eviction-ban-gref-fischer-445544"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Louisville mayor blasts proposal to only extend eviction ban
                  by 30 days
                </a>
              </li>
              <li>
                <a
                  href="https://www.csmonitor.com/USA/Politics/2020/1215/Am-I-going-to-be-evicted-Answer-now-may-hinge-on-Congress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ‘Am I going to be evicted?’ Answer now may hinge on Congress.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
