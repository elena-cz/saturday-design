import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './intro.module.scss';

import Title from './title';

const Intro = () => (
  <section>
    <Title text="title" htag="h1" />
    <Title text="projects" htag="h2" />
    <h1>projects</h1>
    <h2>tools</h2>
    <h3>
      people-focused <strong>developer & designer</strong>
    </h3>
    <p className="hero-p thin-font">
      I create amazing web experiences that are thoughtfully designed for
      everyone involved - from intuitive interfaces for users, easy-to-read code
      for teammates, and focused objectives for business managers.
    </p>
  </section>
);

Intro.propTypes = {
  siteTitle: PropTypes.string,
};

Intro.defaultProps = {
  siteTitle: ``,
};

export default Intro;
