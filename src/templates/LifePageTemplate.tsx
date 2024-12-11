import React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import * as classes from "@/styles/templates/BlogPageTemplate.module.scss";
import useRenderPageNavLinks from "@/hooks/useRenderPageNavLinks";
import { v4 as uuid } from "uuid";
import { SEO } from "@/components/seo";
import Header from "@/components/header/Header";
import PagePostTemplate from "./PagePostTemplate";
import Footer from "@/components/footer/Footer";
import { TQueryPageContext, TQueryAllMdx } from "@/types/api/query";

const LifePageTemplate = ({ data, pageContext }: PageProps<TQueryAllMdx, TQueryPageContext>) => {
  console.log(data);
  const { numLifePages, currentPage } = pageContext;
  const { renderPageNavLinks } = useRenderPageNavLinks();
  const firstPage =
    currentPage === 1 ? (
      <li aria-hidden="true">{"<<"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/1`} aria-label="처음 페이지">
          {"<<"}
        </Link>
      </li>
    );

  const lastPage =
    currentPage === numLifePages ? (
      <li aria-hidden="true">{">>"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/${numLifePages}`} aria-label="마지막 페이지">
          {">>"}
        </Link>
      </li>
    );

  const prevPage =
    currentPage === 1 ? (
      <li aria-hidden="true">{"<"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/${currentPage - 1}`} aria-label="이전 페이지">
          {"<"}
        </Link>
      </li>
    );

  const nextPage =
    currentPage === numLifePages ? (
      <li aria-hidden="true">{">"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/${currentPage + 1}`} aria-label="다음 페이지">
          {">"}
        </Link>
      </li>
    );

  const navPageArray = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];

  const navPageList = navPageArray.map((page) => {
    const isCurrentPage = page === currentPage;
    const isFirstPage = isCurrentPage && currentPage === 1;
    const isSecondPage = isCurrentPage && currentPage === 2;
    const isLastBeforePage = isCurrentPage && currentPage === numLifePages - 1;
    const isLastPage = isCurrentPage && currentPage === numLifePages;
    const isRestPages =
      page > 0 &&
      page <= numLifePages &&
      currentPage !== 1 &&
      currentPage !== 2 &&
      currentPage !== numLifePages - 1 &&
      currentPage !== numLifePages;

    if (isFirstPage) {
      return (
        <React.Fragment key={uuid()}>
          <li className={classes.currentPage}>1</li>
          {numLifePages < 6 ? renderPageNavLinks(numLifePages - 1, 2, "life") : renderPageNavLinks(4, 2, "life")}
        </React.Fragment>
      );
    } else if (isSecondPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, 1, "life")}
          <li className={classes.currentPage}>2</li>
          {numLifePages < 6 ? renderPageNavLinks(numLifePages - 2, 3, "life") : renderPageNavLinks(3, 3, "life")}
        </React.Fragment>
      );
    } else if (isLastBeforePage) {
      return (
        <React.Fragment key={uuid()}>
          {numLifePages === 4 ? renderPageNavLinks(2, 1, "life") : renderPageNavLinks(3, numLifePages - 4, "life")}
          <li className={classes.currentPage}>{numLifePages - 1}</li>
          {renderPageNavLinks(1, numLifePages, "life")}
        </React.Fragment>
      );
    } else if (isLastPage) {
      return (
        <React.Fragment key={uuid()}>
          {numLifePages === 3
            ? renderPageNavLinks(2, 1, "life")
            : numLifePages === 4
            ? renderPageNavLinks(3, 1, "life")
            : renderPageNavLinks(4, numLifePages - 4, "life")}
          <li className={classes.currentPage}>{numLifePages}</li>
        </React.Fragment>
      );
    }

    if (isCurrentPage) {
      return (
        <li className={classes.currentPage} key={uuid()}>
          {page}
        </li>
      );
    }

    if (isRestPages) {
      return <React.Fragment key={uuid()}>{renderPageNavLinks(1, page, "life")}</React.Fragment>;
    }
  });

  return (
    <React.Suspense fallback="Loading...">
      <React.Fragment>
        <h1 className="a11yHidden">Yongwoo (Jake) Jeong Blog</h1>
        <Header />
        <main className={classes.mainContainer}>
          <h2 className="a11yHidden">Life Board</h2>
          <section className={classes.postsContainer} aria-label="게시물">
            {data.allMdx.nodes.map((post) => (
              <PagePostTemplate key={post.node.id} node={post.node} />
            ))}
          </section>
          <nav aria-label="게시물 페이지 네비게이션">
            <ul className={classes.pageNav}>
              {firstPage}
              {prevPage}
              {navPageList}
              {nextPage}
              {lastPage}
            </ul>
          </nav>
        </main>
        <Footer />
      </React.Fragment>
    </React.Suspense>
  );
};

export default LifePageTemplate;

export const Head = () => {
  return <SEO title={"Blog"} />;
};

export const query = graphql`
  # prettier-ignore
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } } filter: { frontmatter: {post: {eq: "life"}}} limit: $limit skip: $skip) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
          post
          tags
          featuredImage {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt(pruneLength: 200)
      }
    }
  }
`;
