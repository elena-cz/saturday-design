import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'gatsby';
import styles from './header.module.scss';

import Nav from './nav';
import Logo from './logo';
import Title from './title';

const Header = ({ page, title }) => (
  <header className={`${styles.header} ${page === 'home' ? styles.home : ''}`}>
    <Nav page={page} />
    {/* <CSSTransition
      in={true}
      timeout={2000}
      classNames="flip"
      unmountOnExit
      appear
    > */}
    <div className={styles.logoContainer}>
      <Link to="/">
        <Logo />
      </Link>
    </div>
    {/* </CSSTransition> */}
    {/* <CSSTransition
      in={!!title}
      timeout={2000}
      classNames="flip-delay"
      unmountOnExit
      appear
    >
      <Title text={title} htag="h2" center className={styles.title} />
    </CSSTransition> */}
  </header>
);

Header.propTypes = {
  page: PropTypes.string,
  title: PropTypes.string,
};

Header.defaultProps = {
  page: 'home',
  title: '',
};

export default Header;
