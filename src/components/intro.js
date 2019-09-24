import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './intro.module.scss';

import ContactIcons from './contactIcons';

const Intro = () => {
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
      <div className={styles.profileContainer}>
        <Img
          fluid={data.profilePhoto.childImageSharp.fluid}
          alt="Profile Photo"
          className={styles.profilePhoto}
        />
      </div>
      <div>
        <h4>
          people-focused <strong>developer & designer</strong>
        </h4>
        <p className="hero-p thin-font">
          I create amazing web experiences that are thoughtfully designed for
          everyone involved - from intuitive interfaces for users, easy-to-read
          code for teammates, and focused objectives for business managers.
        </p>

        <ContactIcons />
      </div>
    </section>
  );
};

export default Intro;
