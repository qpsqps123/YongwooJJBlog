import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { SEO } from "../../../components/seo";
import Header from "../../../layout/Header";

interface mdxDataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

const BlogDaysPostsTemplate = ({ data, children }: PageProps<mdxDataProps>) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h2>{data.mdx.frontmatter.title}</h2>
        <p>{data.mdx.frontmatter.date}</p>
        {children}
      </main>
    </React.Fragment>
  );
};

export default BlogDaysPostsTemplate;

export const Head = ({ data }: PageProps<mdxDataProps>) => (
  <SEO title={data.mdx.frontmatter.title} />
);

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
