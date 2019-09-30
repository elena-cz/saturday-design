import React from 'react';
import { Link } from 'gatsby';

import Image from '../components/image';
import SEO from '../components/seo';
// import Layout from '../layouts';
import Intro from '../components/intro';
import ToolSection from '../components/toolSection';
import ProjectSection from '../components/projectSection';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Intro />
    <ToolSection />
    <ProjectSection />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </>
);

export default IndexPage;
