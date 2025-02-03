import React from "react";
import * as classes from "@/styles/templates/PagePostTempplate.module.scss";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tag from "@/components/blog/tags/Tag";
import { TQueryAllMdxNode } from "@/types/api/query";

export default function PagePostTemplate({ node }: { node: TQueryAllMdxNode }) {
  return (
    <article key={node.id}>
      <section className={classes.post}>
        <div>
          {node.frontmatter.featuredImage?.childImageSharp ? (
            <Link to={`/blog/${node.frontmatter.post}/${node.frontmatter.slug}`}>
              <GatsbyImage
                image={getImage(node.frontmatter.featuredImage)}
                alt={`${node.frontmatter.title} thumbnail`}
                className={classes.postImage}
              />
            </Link>
          ) : (
            <div aria-label="Thumbnail not uploaded" className={classes.thumbnailNotUploaded}></div>
          )}
        </div>
        <div className={classes.postCaption}>
          <h2>
            <Link to={`/blog/${node.frontmatter.post}/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p className={classes.date}>Posted: {node.frontmatter.date}</p>
          <p className={classes.excerpt}>{node.excerpt}</p>
          <ul className={classes.tagList}>
            {node.frontmatter.tags?.map((tag) => (
              <li key={node.id}>
                <Tag tagName={tag} className={classes.tag} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
