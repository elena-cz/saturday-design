import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './tutorialSection.module.scss';

const TutorialSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { path: { eq: "/tutorials" } }) {
          frontmatter {
            tutorials {
              title
              url
              thumbnail
            }
          }
        }
        images: allFile(filter: { relativePath: { regex: "/tutorial-/" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const { markdownRemark, images } = data;
  const { tutorials } = markdownRemark.frontmatter;
  const thumbnails = {};
  images.edges.forEach(image => {
    const { node } = image;
    // EX 'tutorial-vuex.png' -> 'tutorial-vuex'
    const name = node.relativePath.slice(0, -4);
    thumbnails[name] = node.childImageSharp.fluid;
  });

  return (
    <section className={styles.section}>
      {tutorials.map(({ title, url, thumbnail }) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.card} card`}
          key={title}
          role="button"
          tabIndex="0"
        >
          <Img
            fluid={thumbnails[thumbnail.slice(8, -4)]}
            alt="Thumbnail"
            className={styles.image}
          />
          {title}
          {/* <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a> */}
        </a>
      ))}
    </section>
  );
};

export default TutorialSection;
