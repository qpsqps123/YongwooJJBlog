import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { SEO } from "../../components/seo";

const BlogPage = () => {
  useEffect(() => {
    navigate("/blog/learn/");
  }, []);

  return null;
};

export default BlogPage;

export const Head = () => {
  return <SEO title={"Blog"} />;
};
