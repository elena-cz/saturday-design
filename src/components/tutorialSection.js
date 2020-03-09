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
        images: allFile(filter: { relativePath: { regex: "/thumbnail/" } }) {
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

  const { markdownRemark } = data;
  const { tutorials } = markdownRemark.frontmatter;

  return (
    <section className={styles.section}>
      {tutorials.map(({ title, url, thumbnail }) => (
        <div className={`${styles.card} card`} key={title}>
          <Img fluid={thumbnail} alt="Thumbnail" className={styles.image} />
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
      ))}
    </section>
  );
};

export default TutorialSection;
