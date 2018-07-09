module.exports = {
  siteMetadata: {
    title: 'Programmer Stories',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-glamorous`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TEAMX IT Solutions',
        short_name: 'Teamx Tec',
        start_url: '/',
        background_color: '#F5F8FB',
        theme_color: '#6E48AA',
        display: 'standalone',
        icons: [
          {
            src: '/img/icon_180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/img/icon_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-copy-images`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: 'gatsby-plugin-i18n',
    //   options: {
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: true
    //   }
    // },
  ],
}
