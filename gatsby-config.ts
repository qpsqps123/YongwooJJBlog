import type { GatsbyConfig } from "gatsby";
import * as fs from "fs";
import * as path from "path";

const contentDir = path.resolve(__dirname, "src/content");

const contentPlugins = fs
  .readdirSync(contentDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory()) // 디렉터리만 필터링
  .map((dirent) => {
    const folderName = dirent.name;
    return {
      resolve: "gatsby-source-filesystem",
      options: {
        name: folderName,
        path: path.join(contentDir, folderName),
      },
    };
  });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `YongwooJJ Blog`,
    description: `Yongwoo (Jake) Jeong is an engineer & designer who works on the web.`,
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
        icon: "./src/images/favicon/potatoFavicon.png",
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.yongwoo.me`,
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
    ...contentPlugins,
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
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
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
