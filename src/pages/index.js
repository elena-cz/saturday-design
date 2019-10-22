import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import SEO from '../components/seo';
import Title from '../components/title';
import Intro from '../components/intro';
import ToolSection from '../components/toolSection';
import ProjectSection from '../components/projectSection';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Intro />
    <ToolSection />
    <Title text="projects" htag="h2" />
    <ProjectSection />
  </>
);

export default IndexPage;
