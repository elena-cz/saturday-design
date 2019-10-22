import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SEO from './seo';

const AboutSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { path: { eq: "/about" } }) {
          html
        }
      }
    `
  );
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '1.5rem auto 0 0',
      }}
    >
      <SEO title="About" />
      <div
        className="styled-lists"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

// export const pageQuery = graphql`
//   query {
//     markdownRemark(frontmatter: { path: { eq: "/about" } }) {
//       html
//     }
//   }
// `;

export default AboutSection;
