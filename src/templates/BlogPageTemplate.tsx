import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import * as classes from "@/styles/templates/BlogPageTemplate.module.scss";
import useRenderPageNavLinks from "@/hooks/useRenderPageNavLinks";
import { v4 as uuid } from "uuid";
import { SEO } from "@/components/seo";
import Header from "@/components/header/Header";
import BlogListItemTemplate from "./BlogPostListItemTemplate";
import Footer from "@/components/footer/Footer";
import { TQueryPageContext, TQueryAllMdx } from "@/types/api/query";
import Layout from "@/components/layout";

const BlogPageTemplate = ({ data, pageContext }: PageProps<TQueryAllMdx, TQueryPageContext>) => {
  const { numPages, currentPage, postType } = pageContext;
  const { renderPageNavLinks } = useRenderPageNavLinks();

  const firstPage =
    currentPage === 1 ? (
      <li aria-hidden="true">{"<<"}</li>
    ) : (
      <li>
        <Link to={`/blog/${postType}/1`} aria-label="처음 페이지">
          {"<<"}
        </Link>
      </li>
    );

  const lastPage =
    currentPage === numPages ? (
      <li aria-hidden="true">{">>"}</li>
    ) : (
      <li>
        <Link to={`/blog/${postType}/${numPages}`} aria-label="마지막 페이지">
          {">>"}
        </Link>
      </li>
    );

  const prevPage =
    currentPage === 1 ? (
      <li aria-hidden="true">{"<"}</li>
    ) : (
      <li>
        <Link to={`/blog/${postType}/${currentPage - 1}`} aria-label="이전 페이지">
          {"<"}
        </Link>
      </li>
    );

  const nextPage =
    currentPage === numPages ? (
      <li aria-hidden="true">{">"}</li>
    ) : (
      <li>
        <Link to={`/blog/${postType}/${currentPage + 1}`} aria-label="다음 페이지">
          {">"}
        </Link>
      </li>
    );

  const navPageArray = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];

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
          <li className={classes.currentPage}>1</li>
          {numPages < 6 ? renderPageNavLinks(numPages - 1, 2, postType) : renderPageNavLinks(4, 2, postType)}
        </React.Fragment>
      );
    } else if (isSecondPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, 1, postType)}
          <li className={classes.currentPage}>2</li>
          {numPages < 6 ? renderPageNavLinks(numPages - 2, 3, postType) : renderPageNavLinks(3, 3, postType)}
        </React.Fragment>
      );
    } else if (isLastBeforePage) {
      return (
        <React.Fragment key={uuid()}>
          {numPages === 4 ? renderPageNavLinks(2, 1, postType) : renderPageNavLinks(3, numPages - 4, postType)}
          <li className={classes.currentPage}>{numPages - 1}</li>
          {renderPageNavLinks(1, numPages, postType)}
        </React.Fragment>
      );
    } else if (isLastPage) {
      return (
        <React.Fragment key={uuid()}>
          {numPages === 3
            ? renderPageNavLinks(2, 1, postType)
            : numPages === 4
            ? renderPageNavLinks(3, 1, postType)
            : renderPageNavLinks(4, numPages - 4, postType)}
          <li className={classes.currentPage}>{numPages}</li>
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
      return <React.Fragment key={uuid()}>{renderPageNavLinks(1, page, postType)}</React.Fragment>;
    }
  });

  return (
    <React.Suspense fallback="Loading...">
      <Layout>
        <Header />
        <main className={classes.mainContainer}>
          <h1 className="a11yHidden">Board</h1>
          <section className={classes.postsContainer} aria-label="게시물">
            {data.allMdx.nodes.map((node) => {
              if (node.frontmatter.isEmpty !== true) return <BlogListItemTemplate key={node.id} node={node} />;
            })}
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
      </Layout>
    </React.Suspense>
  );
};

export default BlogPageTemplate;

export const Head = () => {
  return <SEO title={"Blog"} />;
};

export const query = graphql`
  # prettier-ignore
  query ($skip: Int!, $limit: Int!, $postType: String!) {
    allMdx(sort: { frontmatter: { date: DESC } } filter: { frontmatter: { post: { eq: $postType } } } limit: $limit skip: $skip) {
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
          isEmpty
        }
        id
        excerpt(pruneLength: 200)
      }
    }
  }
`;
