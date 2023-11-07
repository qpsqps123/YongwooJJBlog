import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Yongwoo JJ Blog`,
    siteUrl: `https://blog.yongwoo.me`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Yongwoo JJ Blog",
        start_url: "/",
        display: "standalone",
        icon: "./src/images/icon.png",
        crossOrigin: `use-credentials`,
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
        path: "./content/life",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "learn",
        path: "./content/learn",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
  ],
};

export default config;
