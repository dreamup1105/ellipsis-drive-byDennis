require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `Ellipsis Drive - The world's first Drive for spatial data!`,
    description: `Bridge the gap between your data and your audience the easy way. Go from computer to cloud in minutes!`,
    siteUrl: `https://ellipsis-drive.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-client-side-redirect`,
    // `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "ellipsis-drive",
        linkResolver:
          ({ node, key, value }) =>
            post =>
              `/${post.uid}`,
        schemas: {
          article: require("./custom_types/article.json"),
          solution: require("./custom_types/solution.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-client-side-redirect",
      options: {
        // repositoryName: "ellipsis-drive",
        // linkResolver:
        //   ({ node, key, value }) =>
        //     post =>
        //       `/${post.uid}`,
        // schemas: {
        //   article: require("./custom_types/article.json"),
        //   solution: require("./custom_types/solution.json"),
        // },
        force: true,
        isPermanent: true,
        redirectInBrowser: true,
      },
    },
    {
      resolve: 'gatsby-source-hubspot',
      options: {
        key: '52fc5f00-bfda-409d-be57-68b4b2bb3d1f'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ellipsis-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K72V8Z6",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        enableWebVitalsTracking: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-mailchimp",
    //   options: {
    //     options: {
    //       endpoint: 'https://ellipsis-drive.us20.list-manage.com/subscribe/post?u=1cfd3516c6e6ab319fccbcf62&amp;id=a5651719a3',
    //       timeout: 3500,
    //   },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
