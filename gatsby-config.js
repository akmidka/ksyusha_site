module.exports = {
  siteMetadata: {
    title: `Психолог Ксения`,
    description: `Коллективная психология`,
    author: `@kseniya`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#58AFCA`,
        theme_color: `#58AFCA`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aur73iyjylav`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'sMNDxNBGadpc8ttD8DpIHqnKs7JaOfD_xrIZ41KxzUY',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
