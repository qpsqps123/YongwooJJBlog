import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import * as classes from "../styles/templates/BlogPageTemplate.module.scss";
import useRenderPageNavLinks from "../hooks/useRenderPageNavLinks";
import { v4 as uuid } from "uuid";
import { SEO } from "../components/seo";
import Header from "../layout/Header";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface AllMdxNodesProps {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    post: string;
    featuredImage: IGatsbyImageData;
  };
}
interface AllMdxDataProps {
  allMdx: {
    nodes: AllMdxNodesProps[];
  };
}

interface PageContextType {
  limit: number;
  skip: number;
  numLearnPages: number;
  currentPage: number;
}

const LearnPageTemplate = ({
  data,
  pageContext,
}: PageProps<AllMdxDataProps, PageContextType>) => {
  const { numLearnPages, currentPage } = pageContext;
  const { renderPageNavLinks } = useRenderPageNavLinks();

  const firstPage =
    currentPage === 1 ? (
      <li>{"<<"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/1`}>{"<<"}</Link>
      </li>
    );

  const lastPage =
    currentPage === numLearnPages ? (
      <li>{">>"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/${numLearnPages}`}>{">>"}</Link>
      </li>
    );

  const prevPage =
    currentPage === 1 ? (
      <li>{"<"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/${currentPage - 1}`}>{"<"}</Link>
      </li>
    );

  const nextPage =
    currentPage === numLearnPages ? (
      <li>{">"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/${currentPage + 1}`}>{">"}</Link>
      </li>
    );

  const navPageArray = [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];

  const navPageList = navPageArray.map((page) => {
    const isCurrentPage = page === currentPage;
    const isFirstPage = isCurrentPage && currentPage === 1;
    const isSecondPage = isCurrentPage && currentPage === 2;
    const isLastBeforePage = isCurrentPage && currentPage === numLearnPages - 1;
    const isLastPage = isCurrentPage && currentPage === numLearnPages;
    const isRestPages =
      page > 0 &&
      page <= numLearnPages &&
      currentPage !== 1 &&
      currentPage !== 2 &&
      currentPage !== numLearnPages - 1 &&
      currentPage !== numLearnPages;

    if (isFirstPage) {
      return (
        <React.Fragment key={uuid()}>
          <li>1</li>
          {numLearnPages < 6
            ? renderPageNavLinks(numLearnPages - 1, 2, "learn")
            : renderPageNavLinks(4, 2, "learn")}
        </React.Fragment>
      );
    } else if (isSecondPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, 1, "learn")}
          <li>2</li>
          {numLearnPages < 6
            ? renderPageNavLinks(numLearnPages - 2, 3, "learn")
            : renderPageNavLinks(3, 3, "learn")}
        </React.Fragment>
      );
    } else if (isLastBeforePage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(3, numLearnPages - 4, "learn")}
          <li>{numLearnPages - 1}</li>
          {renderPageNavLinks(1, numLearnPages, "learn")}
        </React.Fragment>
      );
    } else if (isLastPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(4, numLearnPages - 4, "learn")}
          <li>{numLearnPages}</li>
        </React.Fragment>
      );
    }

    if (isCurrentPage) {
      return <li key={uuid()}>{page}</li>;
    }

    if (isRestPages) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, page, "learn")}
        </React.Fragment>
      );
    }
  });

  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <section className={classes.postsContainer}>
          {data.allMdx.nodes.map((node) =>
            node.frontmatter.post === "learn" ? (
              <article key={node.id} className={classes.post}>
                <h2>
                  <Link to={`/blog/learn/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p className={classes.date}>Posted: {node.frontmatter.date}</p>
                <Link to={`/blog/learn/${node.frontmatter.slug}`}>
                  <GatsbyImage
                    image={getImage(node.frontmatter.featuredImage)}
                    alt={`${node.frontmatter.title} thumbnail`}
                  />
                </Link>
              </article>
            ) : (
              ""
            )
          )}
        </section>
        <nav className={classes.pageNavContainer}>
          {firstPage}
          {prevPage}
          {navPageList}
          {nextPage}
          {lastPage}
        </nav>
      </main>
      <footer className={classes.footerContainer}></footer>
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
          featuredImage {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt(pruneLength: 300)
      }
    }
  }
`;
