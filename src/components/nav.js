import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './nav.module.scss';

const Nav = ({ page }) => (
  <nav className={styles.nav}>
    <Link
      to="/projects"
      // className={`link-button ${page !== 'projects' ? 'white-border' : ''}`}
      className={`link-button no-border-button ${
        page === 'projects' ? 'filled-button' : ''
      }`}
    >
      projects
    </Link>
    <Link
      to="/about"
      className={`link-button no-border-button ${
        page === 'about' ? 'filled-button' : ''
      }`}
    >
      about
    </Link>
  </nav>
);

Nav.propTypes = {
  page: PropTypes.string,
};

Nav.defaultProps = {
  page: 'home',
};

export default Nav;
