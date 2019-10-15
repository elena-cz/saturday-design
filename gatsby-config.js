module.exports = {
  siteMetadata: {
    title: `Elena Czubiak | Saturday Design`,
    description: `Developer & Designer Portfolio`,
    author: `Elena Czubiak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elena Czubiak | Saturday Design`,
        short_name: `Elena`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/assets/SaturdayDesignIcon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
          'gatsby-remark-attr',
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                imageOutline: {
                  classes: 'imageOutline',
                },
                image: {
                  classes: 'image',
                },
                info: {
                  classes: 'info',
                  title: 'optional',
                },
              },
            },
          },
        ],
      },
    },
  ],
};
