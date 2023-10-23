import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby";
import { SEO } from "../../components/seo";

interface AllMdxNodesProps {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    slug: string;
  };
}
interface AllMdxDataProps {
  allMdx: {
    nodes: AllMdxNodesProps[];
  };
}

const BlogPost = ({ data }: PageProps<AllMdxDataProps>) => {
  return (
    <React.Fragment>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </React.Fragment>
  );
};

export const Head = () => {
  return <SEO title={"Blog"} />;
};
export default BlogPost;

export const query = graphql`
  query BlogQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;
