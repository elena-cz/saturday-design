import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import styles from './tutorialSection.module.scss';

const TutorialSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { path: { eq: "/tutorials" } }) {
          frontmatter {
            tutorials {
              title
              url
            }
          }
        }
      }
    `
  );

  const { markdownRemark } = data;
  const { tutorials } = markdownRemark.frontmatter;

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '1.5rem auto 4rem 0',
      }}
    >
      <ul>
        {tutorials.map(({ title, url }) => (
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TutorialSection;
