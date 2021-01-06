/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: "https://www.bitcoinfaq.io",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TID, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        downloadLocal: true,
        environment: process.env.ENVIRONMENT,
      },
    },
    {
      resolve: `gatsby-plugin-twitter`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.bitcoinfaq.io",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-material-ui`,
  ],
}
