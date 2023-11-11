import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import * as classes from "../styles/templates/BlogPageTemplate.module.scss";
import useRenderPageNavLinks from "../hooks/useRenderPageNavLinks";
import { v4 as uuid } from "uuid";
import { SEO } from "../components/seo";
import Header from "../layout/Header";

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

interface PageContextType {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
}

const LearnPageTemplate = ({
  data,
  pageContext,
}: PageProps<AllMdxDataProps, PageContextType>) => {
  const { numPages, currentPage } = pageContext;
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
    currentPage === numPages ? (
      <li>{">>"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/${numPages}`}>{">>"}</Link>
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
    currentPage === numPages ? (
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
    const isLastBeforePage = isCurrentPage && currentPage === numPages - 1;
    const isLastPage = isCurrentPage && currentPage === numPages;
    const isRestPages =
      page > 0 &&
      page <= numPages &&
      currentPage !== 1 &&
      currentPage !== 2 &&
      currentPage !== numPages - 1 &&
      currentPage !== numPages;

    if (isFirstPage) {
      return (
        <React.Fragment key={uuid()}>
          <li>1</li>
          {renderPageNavLinks(4, 2, "learn")}
        </React.Fragment>
      );
    } else if (isSecondPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, 1, "learn")}
          <li>2</li>
          {renderPageNavLinks(3, 3, "learn")}
        </React.Fragment>
      );
    } else if (isLastBeforePage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(3, numPages - 4, "learn")}
          <li>{numPages - 1}</li>
          {renderPageNavLinks(1, numPages, "learn")}
        </React.Fragment>
      );
    } else if (isLastPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(4, numPages - 4, "learn")}
          <li>{numPages}</li>
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
                <p className={classes.date}>Posted: {node.frontmatter.date}</p>
              </article>
            ) : (
              ""
            )
          )}
        </section>
        <ul>
          {firstPage}
          {prevPage}
          {navPageList}
          {nextPage}
          {lastPage}
        </ul>
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
