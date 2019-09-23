import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
// import styles from './header.module.scss';

const Nav = () => <nav>about</nav>;

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};

export default Nav;
