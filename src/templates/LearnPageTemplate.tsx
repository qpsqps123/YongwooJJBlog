import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import { SEO } from "../components/seo";
import Header from "../layout/Header";
import * as classes from "../styles/templates/BlogPageTemplate.module.scss";

interface AllMdxNodesProps {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    post: string;
  };
}
interface AllMdxDataProps {
  allMdx: {
    nodes: AllMdxNodesProps[];
  };
}

const LearnPageTemplate = ({ data }: PageProps<AllMdxDataProps>) => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.container}>
        <section className={classes.postsContainer}>
          {data.allMdx.nodes.map((node) =>
            node.frontmatter.post === "learn" ? (
              <article key={node.id} className={classes.post}>
                <h2>
                  <Link to={`/blog/learn/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
            ) : (
              ""
            )
          )}
        </section>
      </main>
    </React.Fragment>
  );
};

export default LearnPageTemplate;

export const Head = () => {
  return <SEO title={"Blog"} />;
};

export const query = graphql`
  # prettier-ignore
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } } limit: $limit skip: $skip) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          post
        }
        id
      }
    }
  }
`;
