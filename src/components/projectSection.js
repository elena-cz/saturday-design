import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './projectCard.module.scss';

import ProjectCard from './projectCard';

const ProjectSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { collection: { eq: "projects" } } }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              frontmatter {
                path
                title
                url
                urlText
                thumbnail
                description
                order
              }
            }
          }
        }
      }
    `
  );

  const { edges } = data.allMarkdownRemark;
  const projects = edges.map(project => project.node.frontmatter);
  const thumbnails = projects.map(project => project.thumbnail.split('/')[1]);

  // const imageData = useStaticQuery(
  //   graphql`
  //     query {
  //       markdownRemark(frontmatter: { path: { eq: "/about" } }) {
  //         frontmatter {
  //           path
  //         }
  //       }
  //     }
  //   `
  // );

  // const imageData = useStaticQuery(
  //   graphql`
  //     query {
  //       thumbnail: file(
  //         relativePath: { eq: "appexamplescreensindevices.png" }
  //       ) {
  //         childImageSharp {
  //           fluid(maxWidth: 250, quality: 90) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: '1.5rem',
        marginBottom: '4rem',
      }}
    >
      <div>{JSON.stringify(projects)}</div>
      {projects.map((project, index) => (
        <ProjectCard featured={index === 0} />
      ))}

      {/* <ProjectCard image={data.imagination.childImageSharp.fluid} /> */}
      {/* <ProjectCard image={data.imagination.childImageSharp.fluid} /> */}
    </section>
  );
};

export default ProjectSection;
