import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { SEO } from "../../components/seo";

interface mdxDataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

const BlogPost = ({ data, children }: PageProps<mdxDataProps>) => {
  return (
    <React.Fragment>
      <h2>{data.mdx.frontmatter.title}</h2>
      <p>{data.mdx.frontmatter.date}</p>
      <p>My blog post contents will go here (eventually).</p>
      {children}
    </React.Fragment>
  );
};

export const Head = ({ data }: PageProps<mdxDataProps>) => (
  <SEO title={data.mdx.frontmatter.title} />
);

export default BlogPost;

export const query = graphql`
  query BlogQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
