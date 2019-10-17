import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import styles from './about.module.scss';
import SEO from '../components/seo';
import ContactIcons from '../components/contactIcons';

const AboutPage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;
  return (
    // <Layout page="about" title="about">
    <div className={styles.textContainer}>
      <SEO title="About" />
      <div
        className="styled-lists"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <ContactIcons expanded />
    </div>
  );
};

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
    }
  }
`;

export default AboutPage;
