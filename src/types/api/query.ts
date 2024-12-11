import { IGatsbyImageData } from "gatsby-plugin-image";

export type TQueryAllMdx = {
  allMdx: {
    nodes: TQueryAllMdxNode[];
  };
};

export type TQueryAllMdxNode = {
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    post: string;
    tags: string[];
    featuredImage: IGatsbyImageData & {
      childImageSharp: any;
    };
  };
  id: string;
  excerpt: string;
  body: string;
};

export type TQueryMdx = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      tags: string[];
    };
  };
};

export type TQueryPageContext = {
  limit: number;
  skip: number;
  numLifePages: number;
  numLearnPages: number;
  currentPage: number;
};
