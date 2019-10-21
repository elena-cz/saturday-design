import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import ProjectSection from '../components/projectSection';

const ProjectsPage = () => (
  <div style={{ marginTop: '-2rem' }}>
    <SEO title="Projects" />
    <ProjectSection />
  </div>
);

export default ProjectsPage;
