import React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import * as classes from "../styles/templates/BlogPageTemplate.module.scss";
import useRenderPageNavLinks from "../hooks/useRenderPageNavLinks";
import { v4 as uuid } from "uuid";
import { SEO } from "../components/seo";
import Header from "../layout/Header";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

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
  numLifePages: number;
  currentPage: number;
}

const LifePageTemplate = ({
  data,
  pageContext,
}: PageProps<AllMdxDataProps, PageContextType>) => {
  const { numLifePages, currentPage } = pageContext;
  const { renderPageNavLinks } = useRenderPageNavLinks();

  const firstPage =
    currentPage === 1 ? (
      <li>{"<<"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/1`}>{"<<"}</Link>
      </li>
    );

  const lastPage =
    currentPage === numLifePages ? (
      <li>{">>"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/${numLifePages}`}>{">>"}</Link>
      </li>
    );

  const prevPage =
    currentPage === 1 ? (
      <li>{"<"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/${currentPage - 1}`}>{"<"}</Link>
      </li>
    );

  const nextPage =
    currentPage === numLifePages ? (
      <li>{">"}</li>
    ) : (
      <li>
        <Link to={`/blog/life/${currentPage + 1}`}>{">"}</Link>
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
          {numLifePages < 6
            ? renderPageNavLinks(numLifePages - 1, 2, "life")
            : renderPageNavLinks(4, 2, "life")}
        </React.Fragment>
      );
    } else if (isSecondPage) {
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, 1, "life")}
          <li className={classes.currentPage}>2</li>
          {numLifePages < 6
            ? renderPageNavLinks(numLifePages - 2, 3, "life")
            : renderPageNavLinks(3, 3, "life")}
        </React.Fragment>
      );
    } else if (isLastBeforePage) {
      return (
        <React.Fragment key={uuid()}>
          {numLifePages === 4
            ? renderPageNavLinks(2, 1, "life")
            : renderPageNavLinks(3, numLifePages - 4, "life")}
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
      return (
        <React.Fragment key={uuid()}>
          {renderPageNavLinks(1, page, "life")}
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
            node.frontmatter.post === "life" ? (
              <article key={node.id}>
                <section className={classes.post}>
                  <div>
                    {node.frontmatter.featuredImage?.childImageSharp ? (
                      <Link to={`/blog/life/${node.frontmatter.slug}`}>
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
                    <h2>
                      <Link to={`/blog/life/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                      </Link>
                    </h2>
                    <p className={classes.date}>
                      Posted: {node.frontmatter.date}
                    </p>
                    <p>{node.excerpt}</p>
                  </div>
                </section>
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

export default LifePageTemplate;

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
        excerpt(pruneLength: 400)
      }
    }
  }
`;
