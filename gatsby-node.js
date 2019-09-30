/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: { name: 'projects', title: 'projects' }, // additional data can be passed via context
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  let name = 'home';
  let title = '';

  if (page.path.includes('about')) {
    name = 'about';
    title = 'about';
  }

  if (page.path.includes('projects')) {
    name = 'projects';
    title = 'projects';
  }

  page.context.name = name;
  page.context.title = title;
  createPage(page);
};
