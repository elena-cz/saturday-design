import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
    <section
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '1.5rem auto 4rem 0',
      }}
    >
      <div
        className="styled-lists"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
};

export default AboutSection;
