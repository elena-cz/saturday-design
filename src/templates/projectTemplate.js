import React from 'react';
import { graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

import SEO from '../components/seo';
import Title from '../components/title';
import styles from './projectTemplate.module.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <SEO title={frontmatter.title} />
      <div className="project">
        <div className={styles.titleContainer}>
          <CSSTransition
            in={!!frontmatter.title}
            timeout={2000}
            classNames="flip-delay"
            unmountOnExit
            appear
          >
            <Title text={frontmatter.title} htag="h3" />
          </CSSTransition>
          {frontmatter.url && (
            <a
              href={frontmatter.url}
              className={`link-button ${styles.urlButton}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {frontmatter.urlText}
            </a>
          )}
        </div>

        <p className="hero-p thin-font">{frontmatter.description}</p>
        <h6>role</h6>
        <p>{frontmatter.role}</p>
        <div className={styles.introContainer}>
          <div className={styles.introContent}>
            {frontmatter.frontend && <h6>frontend</h6>}
            <p>{frontmatter.frontend}</p>
          </div>
          <div className={styles.introContent}>
            {frontmatter.backend && <h6>backend</h6>}
            <p>{frontmatter.backend}</p>
          </div>
        </div>
        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        urlText
        url
        description
        role
        frontend
        backend
      }
    }
  }
`;
