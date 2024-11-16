import React from "react";
import * as classes from "@/styles/templates/PagePostTempplate.module.scss";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tag from "@/components/Blog/Tags/Tag";

export default function PagePostTemplate({ postNode }) {
  return (
    <article key={postNode.id}>
      <section className={classes.post}>
        <div>
          {postNode.frontmatter.featuredImage?.childImageSharp ? (
            <Link to={`/blog/life/${postNode.frontmatter.slug}`}>
              <GatsbyImage
                image={getImage(postNode.frontmatter.featuredImage)}
                alt={`${postNode.frontmatter.title} thumbnail`}
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
            <Link to={`/blog/life/${postNode.frontmatter.slug}`}>
              {postNode.frontmatter.title}
            </Link>
          </h3>
          <p className={classes.date}>Posted: {postNode.frontmatter.date}</p>
          <p className={classes.excerpt}>{postNode.excerpt}</p>
          <ul className={classes.tagList}>
            {postNode.frontmatter.tags?.map((tag) => (
              <li>
                <Tag tagName={tag} className={classes.tag} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
