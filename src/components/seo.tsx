import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface PropType {
  title: string;
}
export const SEO = ({ title }: PropType) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  );
};
