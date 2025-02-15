import React from "react";
import { PageProps, graphql } from "gatsby";
import { SEO } from "@/components/seo";
import Header from "@/components/header/Header";
import * as classes from "@/styles/templates/BlogPostTemplate.module.scss";
import Comments from "@/components/blog/Comments";
import Footer from "@/components/footer/Footer";
import Tag from "@/components/blog/tags/Tag";
import { TQueryMdx } from "@/types/api/query";

const BlogLearnPostsTemplate = ({ data, children }: PageProps<TQueryMdx>) => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <article className={classes.post}>
          <h1 className={classes.title}>{data.mdx.frontmatter.title}</h1>
          <p className={classes.date}>{data.mdx.frontmatter.date}</p>
          <section className={classes.content}>{children}</section>
          <ul className={classes.tagList}>
            {data.mdx.frontmatter.tags?.map((tag) => (
              <li key={tag}>
                <Tag tagName={tag} className={classes.tag} />
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Comments />
      <Footer />
    </React.Fragment>
  );
};

export default BlogLearnPostsTemplate;

export const Head = ({ data }: PageProps<TQueryMdx>) => <SEO title={data.mdx.frontmatter.title} />;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
