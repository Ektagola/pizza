/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata : {
    siteUrl: 'https://www.pizzapizza.com',
    title: "Order Pizza Online || Pizza Pizza",
    description: "Order your favourites from Pizza Pizza & get 15% Off upto Rs.300 on minimum order of Rs.600. Experience Safe, Hygienic & Contactless Delivery.Trust in Every Bite. 30 Minutes Delivery. Cashless Payment Option. Delivery In 30 Minutes.",
    image: ''
},
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Droid Sans", "Droid Serif", "Abril Fatface"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PizzaPizza`,
        short_name: `Pizza`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#ff500f`,
        display: `standalone`,
        icon: `src/assets/short_logo.png`
      },
    },
  ],
};
