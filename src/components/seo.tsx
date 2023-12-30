import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface PropType {
  title: string;
  description?: string;
}

export const SEO = ({ title, description }: PropType) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const seo = {
    title: `${title} | ${data.site.siteMetadata.title}`,
    description: description || data.site.siteMetadata.description,
  };

  return (
    <React.Fragment>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </React.Fragment>
  );
};
