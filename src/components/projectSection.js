import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './projectSection.module.scss';

import Title from './title';

const ProjectSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        imagination: file(
          relativePath: { eq: "ImaginationDeviceScreens.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mastermind: file(relativePath: { eq: "MastermindScreenshot.png" }) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        auction: file(relativePath: { eq: "AuctionKingScreenshot.png" }) {
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

      <div className={styles.featuredContainer}>
        <Img
          fluid={data.imagination.childImageSharp.fluid}
          alt="Mindy's Imagination Thumbnail"
          className={styles.featuredImage}
        />
        <div className={styles.featuredText}>
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
            I co-founded Mindy&rsquo;s Imagination and designed and built an app
            to showcase our unique and accessible meditation technique.
            It&rsquo;s a fully functional PWA (Progressive Web App) that works
            on nearly every device, with offline access to all content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
