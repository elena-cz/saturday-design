import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './projectSection.module.scss';

import Title from './title';

const ProjectSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        profilePhoto: file(relativePath: { eq: "profilephoto.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <section className={styles.section}>
      <Title text="projects" htag="h2" />
    </section>
  );
};

export default ProjectSection;
