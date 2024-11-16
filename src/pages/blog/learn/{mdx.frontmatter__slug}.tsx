import React from "react";
import { PageProps, graphql } from "gatsby";
import { SEO } from "@/components/seo";
import Header from "@/components/Header/Header";
import * as classes from "@/styles/templates/BlogPostTemplate.module.scss";
import Comments from "@/components/Blog/Comments";
import Footer from "@/components/Footer/Footer";
import Tag from "@/components/Blog/Tags/Tag";

interface mdxDataProps {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      tags: string[];
    };
  };
}

const BlogLearnPostsTemplate = ({
  data,
  children,
}: PageProps<mdxDataProps>) => {
  return (
    <React.Fragment>
      <h1 className="a11yHidden">Yongwoo (Jake) Jeong Blog</h1>
      <Header />
      <main className={classes.mainContainer}>
        <article className={classes.post}>
          <h2>{data.mdx.frontmatter.title}</h2>
          <p className={classes.date}>{data.mdx.frontmatter.date}</p>
          <section className={classes.content}>{children}</section>
          <ul className={classes.tagList}>
            {data.mdx.frontmatter.tags?.map((tag) => (
              <li>
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

export const Head = ({ data }: PageProps<mdxDataProps>) => (
  <SEO title={data.mdx.frontmatter.title} />
);

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
