import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/title';

const AboutPage = () => (
  <Layout page="about" title="about">
    <SEO title="About" />
    {/* <Title text="about" htag="h1" center /> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
