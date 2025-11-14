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
    isEmpty: boolean;
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
  numPages: number;
  currentPage: number;
  postType: "life" | "learn";
};
