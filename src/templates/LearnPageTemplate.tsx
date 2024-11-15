import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import * as classes from "@/styles/templates/BlogPageTemplate.module.scss";
import useRenderPageNavLinks from "@/hooks/useRenderPageNavLinks";
import { v4 as uuid } from "uuid";
import { SEO } from "@/components/seo";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Header from "@/components/Header/Header";

interface AllMdxNodesProps {
  id: string;
  excerpt: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    post: string;
    featuredImage: IGatsbyImageData & {
      childImageSharp: any;
    };
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
      <li aria-hidden="true">{"<<"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/1`} aria-label="처음 페이지">
          {"<<"}
        </Link>
      </li>
    );

  const lastPage =
    currentPage === numLearnPages ? (
      <li aria-hidden="true">{">>"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/${numLearnPages}`} aria-label="마지막 페이지">
          {">>"}
        </Link>
      </li>
    );

  const prevPage =
    currentPage === 1 ? (
      <li aria-hidden="true">{"<"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/${currentPage - 1}`} aria-label="이전 페이지">
          {"<"}
        </Link>
      </li>
    );

  const nextPage =
    currentPage === numLearnPages ? (
      <li aria-hidden="true">{">"}</li>
    ) : (
      <li>
        <Link to={`/blog/learn/${currentPage + 1}`} aria-label="다음 페이지">
          {">"}
        </Link>
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
          <li className={classes.currentPage}>1</li>
          {numLearnPages < 6
            ? renderPageNavLinks(numLearnPages - 1, 2, "learn")
            : renderPageNavLinks(4, 2, "learn")}
        </React.Fragment>
      );
    } else if (isSecondPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, 1, "learn")}
          <li className={classes.currentPage}>2</li>
          {numLearnPages < 6
            ? renderPageNavLinks(numLearnPages - 2, 3, "learn")
            : renderPageNavLinks(3, 3, "learn")}
        </React.Fragment>
      );
    } else if (isLastBeforePage) {
      return (
        <React.Fragment key={uuid()}>
          {numLearnPages === 4
            ? renderPageNavLinks(2, 1, "learn")
            : renderPageNavLinks(3, numLearnPages - 4, "learn")}
          <li className={classes.currentPage}>{numLearnPages - 1}</li>
          {renderPageNavLinks(1, numLearnPages, "learn")}
        </React.Fragment>
      );
    } else if (isLastPage) {
      return (
        <React.Fragment key={uuid()}>
          {numLearnPages === 3
            ? renderPageNavLinks(2, 1, "learn")
            : numLearnPages === 4
            ? renderPageNavLinks(3, 1, "learn")
            : renderPageNavLinks(4, numLearnPages - 4, "learn")}
          <li className={classes.currentPage}>{numLearnPages}</li>
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
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, page, "learn")}
        </React.Fragment>
      );
    }
  });

  return (
    <React.Suspense fallback="Loading...">
      <React.Fragment>
        <h1 className="a11yHidden">Yongwoo (Jake) Jeong Blog</h1>
        <Header />
        <main className={classes.mainContainer}>
          <h2 className="a11yHidden">Learn Board</h2>
          <section className={classes.postsContainer} aria-label="게시물">
            {data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <section className={classes.post}>
                  <div>
                    {node.frontmatter.featuredImage?.childImageSharp ? (
                      <Link to={`/blog/learn/${node.frontmatter.slug}`}>
                        <GatsbyImage
                          image={getImage(node.frontmatter.featuredImage)}
                          alt={`${node.frontmatter.title} thumbnail`}
                          className={classes.postImage}
                        />
                      </Link>
                    ) : (
                      <div
                        aria-label="Thumbnail not uploaded"
                        className={classes.thumbnailNotUploaded}
                      ></div>
                    )}
                  </div>
                  <div className={classes.postCaption}>
                    <h3>
                      <Link to={`/blog/learn/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                    </h3>
                    <p className={classes.date}>
                      Posted: {node.frontmatter.date}
                    </p>
                    <p className={classes.excerpt}>{node.excerpt}</p>
                  </div>
                </section>
              </article>
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
        <footer className={classes.footerContainer}></footer>
      </React.Fragment>
    </React.Suspense>
  );
};

export default LearnPageTemplate;

export const Head = () => {
  return <SEO title={"Blog"} />;
};

export const query = graphql`
  # prettier-ignore
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } } filter: {frontmatter: {post: {eq: "learn"}}} limit: $limit skip: $skip) {
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
        excerpt(pruneLength: 200)
      }
    }
  }
`;
