require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout.js')
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WP_BASE_URL,
        protocol: 'https',
        useACF: true,
        acfOptionPageIds: [
          'site_general_settings'
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV === 'development'
      },
    },
  ],
}
