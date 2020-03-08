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
        markdownRemark(frontmatter: { path: { eq: "/home-bio" } }) {
          html
        }
      }
    `
  );

  return (
    <section className={styles.section}>
      <div className={styles.profileContainer}>
        <Img
          fluid={data.profilePhoto.childImageSharp.fluid}
          alt="Elena Czubiak Profile Photo"
          className={styles.profilePhoto}
        />
      </div>
      <div>
        <h4>
          people-focused <strong>developer & designer</strong>
        </h4>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <ContactIcons />
      </div>
    </section>
  );
};

export default Intro;
