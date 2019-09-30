/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './layout.module.scss';

import Header from '../components/header';

const Layout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.grid}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        page={pageContext.name}
        title={pageContext.title}
      />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Elena Czubiak
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  // page: PropTypes.string,
  // title: PropTypes.string,
};

Layout.defaultProps = {
  // page: 'home',
  // title: '',
};

export default Layout;
