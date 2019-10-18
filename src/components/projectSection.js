import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styles from './projectCard.module.scss';

import ProjectCard from './projectCard';

const ProjectSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        imagination: file(
          relativePath: { eq: "ImaginationDeviceScreens.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mastermind: file(relativePath: { eq: "MastermindScreenshot.png" }) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        auction: file(relativePath: { eq: "AuctionKingScreenshot.png" }) {
          childImageSharp {
            fluid(maxWidth: 250, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

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
      <ProjectCard featured image={data.imagination.childImageSharp.fluid} />
      <ProjectCard image={data.imagination.childImageSharp.fluid} />
      <ProjectCard image={data.imagination.childImageSharp.fluid} />
    </section>
  );
};

export default ProjectSection;
