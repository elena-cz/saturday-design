import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.scss';

import Logo from './logo';

const Header = ({ siteTitle }) => (
  <header className={`${styles.header} container`}>
    <div className={styles.logoContainer}>
      <Logo />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
