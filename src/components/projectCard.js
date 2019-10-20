import PropTypes from 'prop-types';
import React from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styles from './projectCard.module.scss';

const ProjectCard = ({
  featured,
  path,
  thumbnail,
  title,
  urlText,
  url,
  description,
}) => {
  return (
    <div
      onClick={e => {
        e.preventDefault();
        navigate(path);
      }}
      onKeyPress={e => {
        e.preventDefault();
        navigate(path);
      }}
      className={`${styles.container} ${featured ? styles.featured : ''} card`}
      role="button"
      tabIndex="0"
    >
      <Img
        fluid={thumbnail}
        alt="Mindy's Imagination Thumbnail"
        className={styles.image}
      />
      <div className={styles.text}>
        <h5>{title}</h5>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-button ${styles.linkButton}`}
          >
            {urlText}
          </a>
        )}

        <p>{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  featured: PropTypes.bool,
  path: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.string,
  urlText: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
};

ProjectCard.defaultProps = {
  featured: false,
  title: '',
  urlText: '',
  url: '',
  description: '',
};

export default ProjectCard;
