const myCustomQueries = {
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 1080px)",
  l: "(max-width: 1280px)",
  xl: "(max-width: 1536px)",
}

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://texas-property-brothers.herokuapp.com`,
        queryLimit: 1000,
        collectionTypes: [`blogs`, `footer-links`, `services-bullet-points`],
        singleTypes: [
          `social-media-links`,
          `services-image`,
          `properties-image`,
          `home-section-two`,
          `home-section-one`,
          `home-section-three`,
          `home-section-four`,
          `home-contact-box`,
          `contact-us`,
          `about-us`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
  ],
}
