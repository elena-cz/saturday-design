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
  const projects = allMarkdownRemark.edges.map(project => {
    const { frontmatter } = project.node;
    frontmatter.thumbnailName = frontmatter.thumbnail.slice(8, -4);
    return frontmatter;
  });
  const thumbnails = {};
  images.edges.forEach(image => {
    const { node } = image;
    const name = node.relativePath.slice(0, -4);
    thumbnails[name] = node.childImageSharp.fluid;
  });

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
      {projects.map((project, index) => (
        <ProjectCard
          featured={index === 0}
          path={project.path}
          thumbnail={thumbnails[project.thumbnailName]}
          title={project.title}
          urlText={project.urlText}
          url={project.url}
          description={project.description}
          key={project.path}
        />
      ))}
    </section>
  );
};

export default ProjectSection;
