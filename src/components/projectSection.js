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
        images: allFile(filter: { relativePath: { regex: "/thumbnail/" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  );

  const { allMarkdownRemark, images } = data;
  const projects = allMarkdownRemark.edges.map(
    project => project.node.frontmatter
  );
  // const thumbnails = projects.map(project => project.thumbnail.split('/')[1]);

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
      <div>{JSON.stringify(images.edges)}</div>
      {projects.map((project, index) => (
        <ProjectCard featured={index === 0} />
      ))}

      {/* <ProjectCard image={data.imagination.childImageSharp.fluid} /> */}
      {/* <ProjectCard image={data.imagination.childImageSharp.fluid} /> */}
    </section>
  );
};

export default ProjectSection;
