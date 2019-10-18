import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import styles from './projectCard.module.scss';

const ProjectCard = ({ featured, image }) => (
  <div
    className={`${styles.container} ${featured ? styles.featured : ''} card`}
  >
    <Img
      fluid={image}
      alt="Mindy's Imagination Thumbnail"
      className={styles.image}
    />
    <div className={styles.text}>
      <h5>Mindy&rsquo;s Imagination</h5>
      <a
        href="https://mindysimagination.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={`link-button ${styles.linkButton}`}
      >
        mindysimagination.com
      </a>

      <p>
        I co-founded Mindy&rsquo;s Imagination and designed and built an app to
        showcase our unique and accessible meditation technique. It&rsquo;s a
        fully functional PWA (Progressive Web App) that works on nearly every
        device, with offline access to all content.
      </p>
    </div>
  </div>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  featured: PropTypes.bool,
};

ProjectCard.defaultProps = {
  featured: false,
};

export default ProjectCard;
