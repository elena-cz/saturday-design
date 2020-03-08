import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './tutorialSection.module.scss';

const TutorialSection = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       markdownRemark(frontmatter: { path: { eq: "/tutorials" } }) {
  //         frontmatter {
  //           tutorials
  //         }
  //       }
  //     }
  //   `
  // );

  // const { markdownRemark } = data;
  // const { tutorials } = markdownRemark.frontmatter;

  return (
    <section className={styles.section}>
      {/* <div className={styles.container}>{tutorials}</div> */}
    </section>
  );
};

export default TutorialSection;
