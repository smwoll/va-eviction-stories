import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
              navBarActiveClass: 'active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <button
              className={`navbar-toggler ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to="/" className="nav-logo" title="Logo">
              <img src={logo} alt="Stop Evictions Virginia Logo"/>
            </Link>
            
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-links">
              <Link className="navbar-item" activeClassName="active" to="/about">
                About
              </Link>
              <Link className="navbar-item" activeClassName="active" to="/products">
                Products
              </Link>
              <Link className="navbar-item" activeClassName="active" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" activeClassName="active" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" activeClassName="active" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
