module.exports = {
  siteMetadata: {
    title: 'Gabriel Arteaga',
    description: 'Front-end developer from the Los Angeles area. Specialize in React, WordPress, and Shopify',
    author: 'Gabriel Arteaga',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gabriel Arteaga Front-End Developer',
        short_name: 'Gabriel Arteaga',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#010101',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
