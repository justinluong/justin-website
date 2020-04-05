import React from 'react';
import { Link } from 'gatsby';

import styles from './Navbar.module.css';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <nav
        className={styles.navbar}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className={styles.navbar} to="/">
              Justin Luong
            </Link>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
