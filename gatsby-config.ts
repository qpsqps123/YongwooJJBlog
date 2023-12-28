import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `YongwooJJ Blog`,
    Description: `Yongwoo (Jake) Jeong is an engineer & designer who works on the web.`,
    siteUrl: `https://blog.yongwoo.me/`,
  },
  graphqlTypegen: true,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "YongwooJJ Blog",
        start_url: "/",
        display: "standalone",
        icon: "./src/images/icon/potato.png",
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://blog.yongwoo.me/",
        sitemap: "https://blog.yongwoo.me/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "life",
        path: "./src/content/life",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "learn",
        path: "./src/content/learn",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
  ],
};

export default config;
