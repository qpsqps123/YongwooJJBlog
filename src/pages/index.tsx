import * as React from "react";
import { SEO } from "../components/seo";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <h1>JJBlog</h1>
      <Link to="/blog">Blog Page</Link>
    </>
  );
};

export const Head = () => <SEO title={"Home"} />;

export default IndexPage;
