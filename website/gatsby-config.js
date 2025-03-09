require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Paws & Hearts Dog Adoption`,
    description: `Find your perfect canine companion at our dog adoption center.`,
    author: `Lichanda Choeun-munesy`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "hwqagsy240ff",
        accessToken: "X8SAO5sjNMQjigjfFc4iPSzfQgsqAqtyFGIKTjgl_d8",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paws & Hearts Dog Adoption`,
        short_name: `PawsHearts`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Change this to your custom icon
      },
    },
  ],
}
