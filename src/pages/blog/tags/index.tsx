import React, { useLayoutEffect, useState } from "react";
import { SEO } from "@/components/seo";
import Header from "@/components/Header/Header";
import * as classes from "./TagsPage.module.scss";
import Tag from "@/components/Blog/Tags/Tag";
import { graphql } from "gatsby";
import PagePostTemplate from "@/templates/PagePostTemplate";
import Footer from "@/components/Footer/Footer";

const TagsPage = ({ data, location }) => {
  const [selectedTag, setSeletedTag] = useState<string | null>(null);

  const query = new URLSearchParams(location.search);
  const pressedTagFromPost = query?.get("tag");

  useLayoutEffect(() => {
    setSeletedTag(() => pressedTagFromPost);
  }, [pressedTagFromPost]);

  const posts = data.allMdx.nodes;
  const tags = Array.from(
    new Set(
      posts
        .flatMap((post) => post.frontmatter.tags || [])
        .filter((tag) => tag != null)
    )
  );

  const selectedTagPosts = posts?.filter((post) =>
    post.frontmatter.tags?.includes(selectedTag)
  );

  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <h1 className={classes.title}>Tags</h1>
        <section>
          <ul className={classes.tagsList}>
            {tags.map((tag) => (
              <li>
                <Tag
                  tagName={tag}
                  className={`${classes.tag} ${
                    tag === selectedTag && classes.tagSelected
                  }`}
                />
              </li>
            ))}
          </ul>
        </section>
        <section>
          {selectedTagPosts.map((node) => (
            <PagePostTemplate postNode={node} />
          ))}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default TagsPage;

export const Head = () => {
  return <SEO title={"Tags"} />;
};

export const query = graphql`
  # prettier-ignore
  query {
    allMdx(sort: { frontmatter: { date: DESC } } limit: 1000000) {
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
