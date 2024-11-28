export type TQueryAllMdx = {
  allMdx: {
    nodes: [
      {
        frontmatter: {
          title: string;
          date: string;
          slug: string;
          post: string;
          tags: string[];
        };
        body: string;
        id: string;
        excerpt: string;
      }
    ];
  };
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
