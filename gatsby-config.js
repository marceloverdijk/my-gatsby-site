module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    // `gatsby-transformer-json`,
    `my-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data_2_single/`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "123456"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap"
  ]
};
