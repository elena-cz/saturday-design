import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import SEO from '../components/seo';
import Title from '../components/title';
import Intro from '../components/intro';
import ToolSection from '../components/toolSection';
import ProjectSection from '../components/projectSection';
import AboutSection from '../components/aboutSection';
import ContactIcons from '../components/contactIcons';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Intro />
    <Title text="favorite tools" htag="h2" />
    <ToolSection />
    <Title text="projects" htag="h2" />
    <ProjectSection />
    <Title text="about" htag="h2" />
    <AboutSection />
    <Title text="contact" htag="h2" />
    <p style={{ marginTop: '1.5rem' }}>
      Feel free to reach out about freelance, collaboration, and career
      opportunities, or just to chat
    </p>
    <ContactIcons expanded />
  </>
);

export default IndexPage;
