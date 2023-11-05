import React from "react";
import { PageProps, graphql } from "gatsby";
import { SEO } from "../../../components/seo";
import Header from "../../../layout/Header";
import * as classes from "../../../styles/templates/BlogPostTemplate.module.scss";

interface mdxDataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
}

const BlogLearnPostsTemplate = ({
  data,
  children,
}: PageProps<mdxDataProps>) => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.container}>
        <article className={classes.post}>
          <h2>{data.mdx.frontmatter.title}</h2>
          <p>{data.mdx.frontmatter.date}</p>
          {children}
        </article>
      </main>
    </React.Fragment>
  );
};

export default BlogLearnPostsTemplate;

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
